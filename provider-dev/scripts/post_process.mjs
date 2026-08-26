#!/usr/bin/env node

// Post-generation fixes for things provider-utils `generate` cannot express.
// Idempotent; re-run after every generate. Validates and fails without
// writing.
//
// 1. Cursor pagination. Datadog declares its pagination dialect per
//    operation with the vendor `x-pagination` extension. any-sdk can follow
//    the cursor dialects (query-string cursor param, next cursor in the
//    response body), so every such GET method gets a method-level
//    config.pagination block: requestToken = the cursor query param,
//    responseToken = the JSONPath of the next cursor. The page-number and
//    offset dialects (page[number]/page[size], page[offset]/page[limit],
//    start/count) carry no next-page token in the response and are left as
//    plain query parameters usable in the WHERE clause; LIMIT / OFFSET
//    pushdown (2) covers the common case of bounding the first page.
//    Body-cursor dialects (POST .../search with page.cursor in the body)
//    are EXEC methods and are not paginated.
//
// 2. Query parameter pushdown. Every GET method with a vendor limit
//    parameter (x-pagination.limitParam, or a `page[limit]` / `page[size]` /
//    `limit` / `count` / `page_size` query parameter) gets
//    config.queryParamPushdown.top so a SQL LIMIT is sent as that parameter
//    (bounded by the parameter's schema maximum); the offset dialects get
//    config.queryParamPushdown.skip for OFFSET. Datadog's filter[...] query
//    parameters are already addressable directly as WHERE keys (they are
//    declared query parameters), so no filter pushdown config is needed;
//    any-sdk renders only the OData filter syntax in any case.
//
// 3. snake_case surface. `request.nativeCasing: camel` on every method,
//    paired with `snake_case_aliases: true` on the provider config: the
//    Datadog wire is snake_case almost everywhere, but the 17 camelCase
//    query parameters (filterBy, includeDiscovered, filter[widgetType], ...)
//    and ~500 camelCase schema properties resolve from snake_case SQL keys,
//    and SELECT / DESCRIBE present snake aliases. Names already containing
//    an underscore are unchanged. The aws / azure / clickhouse precedent.
//
// 4. Path-level servers. Nine operations address a different host than the
//    API: the log, event and product-analytics intake endpoints
//    (http-intake.logs.<site>, event-management-intake.<site>,
//    browser-intake-<site>), the On-Call paging endpoints
//    (navy.oncall.datadoghq.com) and the IP ranges document
//    (ip-ranges.<site>). merge_specs.mjs recorded the vendor's
//    operation-level servers as x-stackql-servers (the normalize step strips
//    non-root servers); here they are reinstated as path-level servers with
//    the `site` variable carrying x-stackQL-envVar: DD_SITE like the
//    document-level server, and the markers are removed.
//
// 5. Marker cleanup: x-stackql-api-version, x-stackql-superseded-by-v2 and
//    x-stackql-servers are build-time metadata and are stripped from the
//    published specs.
//
// Usage: node provider-dev/scripts/post_process.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const servicesDir = path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'datadog', 'v00.00.00000', 'services');
const serversTemplate = JSON.parse(fs.readFileSync(path.join(repoRoot, 'provider-dev', 'config', 'servers.json'), 'utf8'));
const SITE_ENV_VAR = serversTemplate[0].variables.site['x-stackQL-envVar'];
const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];
const LIMIT_PARAMS = ['page[limit]', 'page[size]', 'limit', 'count', 'page_size', 'per_page'];
const OFFSET_PARAMS = ['page[offset]', 'offset', 'start'];

if (!fs.existsSync(servicesDir)) {
  console.error(`Error: ${servicesDir} not found - run the generate step first`);
  process.exit(1);
}

function makeResolver(spec) {
  return function resolve(node, depth = 0) {
    if (!node || depth > 12) return node;
    if (node.$ref) {
      const parts = node.$ref.replace(/^#\//, '').split('/');
      let cur = spec;
      for (const p of parts) cur = cur?.[p];
      return resolve(cur, depth + 1);
    }
    return node;
  };
}

function decodePointer(ref) {
  // '#/paths/~1api~1v2~1monitor/get' -> ['/api/v2/monitor', 'get']
  const m = ref.match(/^#\/paths\/(.*)\/(get|post|put|patch|delete)$/);
  if (!m) return null;
  return [m[1].replace(/~1/g, '/').replace(/~0/g, '~'), m[2]];
}

const errors = [];
const stats = { methods: 0, cased: 0, cursorPaginated: 0, top: 0, skip: 0, pathServers: 0, markersStripped: 0 };
const docs = new Map();

for (const f of fs.readdirSync(servicesDir).filter((x) => x.endsWith('.yaml')).sort()) {
  const doc = yaml.load(fs.readFileSync(path.join(servicesDir, f), 'utf8'));
  const resolve = makeResolver(doc);
  const resources = doc.components?.['x-stackQL-resources'] || {};
  if (Object.keys(resources).length === 0) errors.push(`${f}: no x-stackQL-resources`);
  if (JSON.stringify(doc.servers) !== JSON.stringify(serversTemplate)) errors.push(`${f}: document-level servers differ from provider-dev/config/servers.json`);

  for (const [resName, res] of Object.entries(resources)) {
    for (const [methodName, method] of Object.entries(res.methods || {})) {
      stats.methods++;
      // 3. snake_case surface
      method.request = { ...(method.request || {}), nativeCasing: 'camel' };
      stats.cased++;

      const ptr = decodePointer(method.operation?.$ref || '');
      if (!ptr) { errors.push(`${f}: ${resName}.${methodName} has no resolvable operation $ref`); continue; }
      const [pathKey, verb] = ptr;
      const op = doc.paths?.[pathKey]?.[verb];
      if (!op) { errors.push(`${f}: ${resName}.${methodName} -> ${verb} ${pathKey} not found in paths`); continue; }
      if (verb !== 'get') continue;

      const params = [...(doc.paths[pathKey].parameters || []), ...(op.parameters || [])].map((p) => resolve(p)).filter((p) => p && p.in === 'query');
      const byName = Object.fromEntries(params.map((p) => [p.name, p]));
      const pag = op['x-pagination'];
      const config = { ...(method.config || {}) };

      // 1. cursor pagination
      if (pag?.cursorParam && pag?.cursorPath && byName[pag.cursorParam]) {
        config.pagination = {
          requestToken: { key: pag.cursorParam, location: 'query' },
          responseToken: { key: `$.${pag.cursorPath}`, location: 'body' }
        };
        stats.cursorPaginated++;
      }

      // 2. LIMIT / OFFSET pushdown
      const limitName = (pag?.limitParam && byName[pag.limitParam]) ? pag.limitParam : LIMIT_PARAMS.find((n) => byName[n]);
      if (limitName) {
        const schema = resolve(byName[limitName].schema) || {};
        const top = { paramName: limitName };
        if (Number.isFinite(schema.maximum)) top.maxValue = schema.maximum;
        config.queryParamPushdown = { ...(config.queryParamPushdown || {}), top };
        stats.top++;
        const offsetName = (pag?.pageOffsetParam && byName[pag.pageOffsetParam]) ? pag.pageOffsetParam : OFFSET_PARAMS.find((n) => byName[n]);
        if (offsetName && !pag?.cursorParam) {
          config.queryParamPushdown.skip = { paramName: offsetName };
          stats.skip++;
        }
      }
      if (Object.keys(config).length > 0) method.config = config;
    }
  }

  // 4. path-level servers, 5. marker cleanup
  for (const [pathKey, item] of Object.entries(doc.paths || {})) {
    for (const verb of HTTP_VERBS) {
      const op = item[verb];
      if (!op) continue;
      const servers = op['x-stackql-servers'];
      if (servers) {
        // Only the first vendor server is kept: the alternates
        // ({protocol}://{name}) put a variable in the scheme, which the
        // any-sdk router cannot host-match. Every variable other than `site`
        // (the intake subdomain) is pre-substituted with its default, and
        // `site` carries the same `.+` host regex as the document server -
        // gorilla/mux host variables default to [^.]+ and would never match
        // a dotted site value.
        const rebased = servers.slice(0, 1).map((s) => {
          let url = s.url;
          const out = { url, variables: {} };
          for (const [name, v] of Object.entries(s.variables || {})) {
            if (name !== 'site') {
              url = url.split(`{${name}}`).join(v.default);
              continue;
            }
            url = url.replace('{site}', '{site:.+}');
            out.variables.site = { default: v.default, description: v.description };
            if (Array.isArray(v.enum) && v.enum.includes('datadoghq.com')) out.variables.site['x-stackQL-envVar'] = SITE_ENV_VAR;
          }
          out.url = url;
          if (Object.keys(out.variables).length === 0) delete out.variables;
          if (/\{[^}]*\}/.test(out.url.replace('{site:.+}', ''))) errors.push(`${f}: unresolved server variable in ${out.url} on ${pathKey}`);
          return out;
        });
        if (item.servers && JSON.stringify(item.servers) !== JSON.stringify(rebased)) errors.push(`${f}: conflicting operation-level servers on ${pathKey}`);
        item.servers = rebased;
        stats.pathServers++;
      }
      for (const marker of ['x-stackql-servers', 'x-stackql-api-version', 'x-stackql-superseded-by-v2']) {
        if (marker in op) { delete op[marker]; stats.markersStripped++; }
      }
    }
  }
  docs.set(f, doc);
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors.slice(0, 50)) console.error(`  ${e}`);
  process.exit(1);
}
for (const [f, doc] of docs) fs.writeFileSync(path.join(servicesDir, f), yaml.dump(doc, { lineWidth: -1, noRefs: true }));
console.log(`post_process: ${docs.size} services, ${stats.methods} methods - request.nativeCasing: camel on ${stats.cased}; cursor pagination on ${stats.cursorPaginated} GET methods; LIMIT pushdown (top) on ${stats.top}, OFFSET pushdown (skip) on ${stats.skip}; ${stats.pathServers} path-level server overrides (site -> ${SITE_ENV_VAR}); ${stats.markersStripped} build markers stripped`);
