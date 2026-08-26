// Service discriminator for `provider-dev-utils split --svc-discriminator function`.
// Resolves every operation path of the merged Datadog spec to a service name
// using provider-dev/config/service_names.json (ordered path rules, then the
// first path segment after /api/{v1,v2,unstable}/). An operation with no
// rule throws, which fails the split - extend service_names.json rather than
// letting a new API family land in a default bucket.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const configPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'config', 'service_names.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const rules = config.rules.map((r) => ({ re: new RegExp(r.pathRegex), service: r.service }));

export function rootSegment(pathKey) {
  const m = pathKey.match(/^\/api\/(?:v1|v2|unstable)\/([^/]+)/);
  return m ? m[1] : null;
}

export function resolveService(pathKey) {
  for (const rule of rules) if (rule.re.test(pathKey)) return rule.service;
  const root = rootSegment(pathKey);
  if (root && config.segments[root]) return config.segments[root];
  return null;
}

export default function datadogServiceDiscriminator(pathKey) {
  const service = resolveService(pathKey);
  if (!service) {
    throw new Error(`no service rule for path ${pathKey} - add it to provider-dev/config/service_names.json`);
  }
  return service;
}
