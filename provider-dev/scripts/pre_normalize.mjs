#!/usr/bin/env node

// Datadog-specific spec adjustments applied to the split service specs before
// the generic provider-utils normalize pass. Idempotent.
//
// 1. Request bodies declared only as `text/json` (the v1 metrics and
//    distribution-point submission endpoints) are re-keyed to
//    `application/json` - the same JSON body, and the media type stackql's
//    request builder emits. Datadog accepts application/json on both.
// 2. Success responses declared as `application/json;datetime-format=rfc3339`
//    (v1 usage, v2 events and RUM) are re-keyed to `application/json` so the
//    generated method's response mediaType is the plain JSON type stackql
//    matches on; the wire response is unchanged.
//
// Usage: node provider-dev/scripts/pre_normalize.mjs [--api-dir provider-dev/source]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const argIdx = process.argv.indexOf('--api-dir');
const apiDir = argIdx !== -1 ? path.resolve(process.argv[argIdx + 1]) : path.join(repoRoot, 'provider-dev', 'source');
const VERBS = ['get', 'post', 'put', 'patch', 'delete'];

function rekey(content, from, to) {
  if (!content || !(from in content)) return 0;
  if (!(to in content)) content[to] = content[from];
  delete content[from];
  return 1;
}

let files = 0, requests = 0, responses = 0;
for (const f of fs.readdirSync(apiDir).filter((x) => x.endsWith('.yaml')).sort()) {
  const full = path.join(apiDir, f);
  const doc = yaml.load(fs.readFileSync(full, 'utf8'));
  let changed = 0;
  for (const item of Object.values(doc.paths || {})) {
    for (const verb of VERBS) {
      const op = item[verb];
      if (!op) continue;
      const n = rekey(op.requestBody?.content, 'text/json', 'application/json');
      requests += n; changed += n;
      for (const resp of Object.values(op.responses || {})) {
        const m = rekey(resp.content, 'application/json;datetime-format=rfc3339', 'application/json');
        responses += m; changed += m;
      }
    }
  }
  if (changed) {
    fs.writeFileSync(full, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
    files++;
  }
}
console.log(`pre_normalize: ${files} file(s) rewritten - ${requests} text/json request bodies and ${responses} datetime-format response media types re-keyed to application/json`);
