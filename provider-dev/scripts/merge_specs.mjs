#!/usr/bin/env node

// Merges the pinned Datadog v1 and v2 OpenAPI specs (provider-dev/downloaded/)
// into one document, provider-dev/build/datadog-openapi.yaml, for the split
// step. Deterministic; validates and fails without writing.
//
// What the merge does:
//   - paths: the union (v1 lives under /api/v1/, v2 under /api/v2/ and
//     /api/unstable/, so path keys never collide)
//   - operationIds: 39 v1 operations reuse a v2 operationId (users, keys,
//     downtimes, events, AWS/GCP integration, ...). Every one of them is a
//     v1 endpoint superseded by the v2 endpoint of the same name, so the v1
//     operation is renamed with a V1 suffix (operationIds must be unique per
//     service spec - the mapping CSV is keyed on them) and tagged
//     x-stackql-superseded-by-v2 with the v2 operationId; map_operations.mjs
//     skips it with that reason
//   - components: v1 schema/parameter/response names that collide with a
//     different v2 definition are renamed with a V1 suffix (and every v1
//     $ref rewritten); identical definitions are shared
//   - securitySchemes and tags: the union
//   - operation-level servers (the intake and On-Call paging hosts) are
//     recorded as x-stackql-servers on the operation because the normalize
//     step strips non-root servers; post_process.mjs reinstates them as
//     path-level servers on the generated spec
//   - every operation is tagged x-stackql-api-version: v1 | v2 | unstable
//
// Usage: node provider-dev/scripts/merge_specs.mjs [--out FILE]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const downloadDir = path.join(repoRoot, 'provider-dev', 'downloaded');
const outArg = process.argv.indexOf('--out');
const outPath = outArg !== -1 ? path.resolve(process.argv[outArg + 1]) : path.join(repoRoot, 'provider-dev', 'build', 'datadog-openapi.yaml');
const VERBS = ['get', 'post', 'put', 'patch', 'delete'];
const COMPONENT_TYPES = ['schemas', 'parameters', 'responses', 'requestBodies', 'headers', 'examples', 'securitySchemes'];

function load(v) {
  const file = path.join(downloadDir, `${v}-openapi.yaml`);
  if (!fs.existsSync(file)) {
    console.error(`Error: ${file} not found - run npm run fetch-spec first`);
    process.exit(1);
  }
  return yaml.load(fs.readFileSync(file, 'utf8'));
}

const v1 = load('v1');
const v2 = load('v2');
const errors = [];

// ---------------------------------------------------------------- opIds
const v2Ids = new Set();
for (const item of Object.values(v2.paths)) for (const verb of VERBS) if (item[verb]?.operationId) v2Ids.add(item[verb].operationId);
let renamedOps = 0;
for (const [p, item] of Object.entries(v1.paths)) {
  for (const verb of VERBS) {
    const op = item[verb];
    if (!op) continue;
    if (!op.operationId) errors.push(`v1 ${verb} ${p} has no operationId`);
    else if (v2Ids.has(op.operationId)) {
      op['x-stackql-superseded-by-v2'] = op.operationId;
      op.operationId = `${op.operationId}V1`;
      renamedOps++;
    }
  }
}

// ------------------------------------------------------------ components
function sortKeys(x) {
  if (Array.isArray(x)) return x.map(sortKeys);
  if (x && typeof x === 'object') return Object.fromEntries(Object.keys(x).sort().map((k) => [k, sortKeys(x[k])]));
  return x;
}
function stableEqual(a, b) {
  return JSON.stringify(sortKeys(a)) === JSON.stringify(sortKeys(b));
}
const renames = new Map(); // '#/components/<type>/<name>' -> renamed ref
let renamedComponents = 0;
for (const type of COMPONENT_TYPES) {
  const a = v1.components?.[type] || {};
  const b = v2.components?.[type] || {};
  for (const name of Object.keys(a)) {
    if (!(name in b)) continue;
    if (stableEqual(a[name], b[name])) continue;
    // AuthZ differs only by its scope list; v2 carries the superset
    if (type === 'securitySchemes') continue;
    let target = `${name}V1`;
    let i = 1;
    while (target in b || (target in a && target !== name)) target = `${name}V1_${++i}`;
    renames.set(`#/components/${type}/${name}`, `#/components/${type}/${target}`);
    a[target] = a[name];
    delete a[name];
    renamedComponents++;
  }
}
function rewriteRefs(node) {
  if (Array.isArray(node)) { for (const x of node) rewriteRefs(x); return; }
  if (!node || typeof node !== 'object') return;
  if (typeof node.$ref === 'string' && renames.has(node.$ref)) node.$ref = renames.get(node.$ref);
  for (const v of Object.values(node)) rewriteRefs(v);
}
rewriteRefs(v1);

// ------------------------------------------------------------------ merge
const merged = {
  openapi: v2.openapi,
  info: {
    title: 'Datadog API Collection',
    description: 'Datadog v1 and v2 REST APIs merged for the StackQL datadog provider.',
    version: v2.info?.version || '1.0'
  },
  servers: v2.servers,
  security: v2.security,
  tags: [],
  paths: {},
  components: {}
};
const tagNames = new Set();
for (const t of [...(v2.tags || []), ...(v1.tags || [])]) {
  if (tagNames.has(t.name)) continue;
  tagNames.add(t.name);
  merged.tags.push(t);
}
let opServersRecorded = 0;
function addPaths(spec, version) {
  for (const [p, item] of Object.entries(spec.paths)) {
    if (merged.paths[p]) { errors.push(`path collision ${p}`); continue; }
    const pathServers = item.servers;
    for (const verb of VERBS) {
      const op = item[verb];
      if (!op) continue;
      op['x-stackql-api-version'] = p.startsWith('/api/unstable/') ? 'unstable' : version;
      const servers = op.servers || pathServers;
      if (servers) { op['x-stackql-servers'] = servers; opServersRecorded++; }
    }
    merged.paths[p] = item;
  }
}
addPaths(v2, 'v2');
addPaths(v1, 'v1');
for (const type of COMPONENT_TYPES) {
  const out = { ...(v2.components?.[type] || {}) };
  for (const [name, def] of Object.entries(v1.components?.[type] || {})) if (!(name in out)) out[name] = def;
  if (Object.keys(out).length > 0) merged.components[type] = out;
}

// ------------------------------------------------------------- validate
const ids = new Set();
let ops = 0;
for (const [p, item] of Object.entries(merged.paths)) {
  for (const verb of VERBS) {
    const op = item[verb];
    if (!op) continue;
    ops++;
    if (ids.has(op.operationId)) errors.push(`duplicate operationId ${op.operationId} at ${verb} ${p}`);
    ids.add(op.operationId);
  }
}
const known = new Set();
for (const type of COMPONENT_TYPES) for (const name of Object.keys(merged.components[type] || {})) known.add(`#/components/${type}/${name}`);
function checkRefs(node, where) {
  if (Array.isArray(node)) { node.forEach((x, i) => checkRefs(x, `${where}[${i}]`)); return; }
  if (!node || typeof node !== 'object') return;
  if (typeof node.$ref === 'string' && node.$ref.startsWith('#/components/') && !known.has(node.$ref)) errors.push(`dangling $ref ${node.$ref} at ${where}`);
  for (const [k, v] of Object.entries(node)) checkRefs(v, `${where}.${k}`);
}
checkRefs(merged.paths, 'paths');
checkRefs(merged.components, 'components');

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors.slice(0, 50)) console.error(`  ${e}`);
  process.exit(1);
}
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, yaml.dump(merged, { lineWidth: -1, noRefs: true }));
console.log(`merged ${Object.keys(merged.paths).length} paths / ${ops} operations into ${path.relative(repoRoot, outPath)}`);
console.log(`  v1 operationIds renamed with V1 suffix (superseded by v2): ${renamedOps}`);
console.log(`  v1 components renamed with V1 suffix (definition differs from v2): ${renamedComponents}`);
console.log(`  operation-level servers recorded as x-stackql-servers: ${opServersRecorded}`);
