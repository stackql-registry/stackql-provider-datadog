#!/usr/bin/env node

// Companion to bin/fetch-spec.sh: verifies the freshly downloaded v1 and v2
// specs against provider-dev/config/spec_pin.json (sha256 of each file), or
// rewrites the pin and the snapshots when UPDATE=true. Reports each spec's
// path and operation counts so a refresh is visible in the build log.
// Fails without writing anything when the pin does not match and UPDATE is
// not set.

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import yaml from 'js-yaml';

const { UPDATE, TMP_DIR, DOWNLOAD_DIR, PIN_FILE, BASE_URL } = process.env;
const update = UPDATE === 'true';
const VERBS = ['get', 'post', 'put', 'patch', 'delete'];

const pin = fs.existsSync(PIN_FILE) ? JSON.parse(fs.readFileSync(PIN_FILE, 'utf8')) : { specs: {} };
const next = { source: BASE_URL, fetched: new Date().toISOString().slice(0, 10), specs: {} };
const drift = [];

for (const v of ['v1', 'v2']) {
  const file = `${v}-openapi.yaml`;
  const buf = fs.readFileSync(path.join(TMP_DIR, file));
  const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  const spec = yaml.load(buf.toString('utf8'));
  if (!spec?.openapi || !spec.paths) {
    console.error(`Error: ${file} does not parse as an OpenAPI document`);
    process.exit(1);
  }
  let operations = 0;
  for (const item of Object.values(spec.paths)) for (const verb of VERBS) if (item[verb]) operations++;
  next.specs[v] = { file, sha256, paths: Object.keys(spec.paths).length, operations, openapi: spec.openapi };
  console.log(`  ${v}: openapi ${spec.openapi}, ${Object.keys(spec.paths).length} paths, ${operations} operations, sha256 ${sha256.slice(0, 12)}`);
  const pinned = pin.specs?.[v];
  if (!pinned) drift.push(`${v}: no pin recorded`);
  else if (pinned.sha256 !== sha256) drift.push(`${v}: pinned ${pinned.sha256.slice(0, 12)} (${pinned.paths} paths, ${pinned.operations} operations) != upstream ${sha256.slice(0, 12)} (${next.specs[v].paths} paths, ${operations} operations)`);
}

if (drift.length > 0 && !update) {
  console.error('Upstream spec drift detected (nothing written):');
  for (const d of drift) console.error(`  ${d}`);
  console.error("Run 'npm run fetch-spec -- --update' (make refresh-spec) to accept the change and review the diff.");
  process.exit(1);
}

if (drift.length === 0 && pin.specs?.v1 && pin.specs?.v2) {
  console.log(`Specs match the pin recorded ${pin.fetched} - snapshots unchanged.`);
  process.exit(0);
}

for (const v of ['v1', 'v2']) {
  fs.copyFileSync(path.join(TMP_DIR, next.specs[v].file), path.join(DOWNLOAD_DIR, next.specs[v].file));
}
fs.writeFileSync(PIN_FILE, JSON.stringify(next, null, 2) + '\n');
console.log(`Snapshots written to ${DOWNLOAD_DIR}, pin recorded in ${PIN_FILE}`);
