#!/usr/bin/env node

// Quick offline validation of the generated provider against the local file
// registry - no network, no server. Runs SHOW SERVICES / SHOW RESOURCES /
// SHOW METHODS and DESCRIBE EXTENDED over representative resources and
// asserts the service split, the verb mapping conventions, the snake_case
// surface, the cursor pagination and LIMIT pushdown config, and the DD_SITE
// server variable. Exit 1 on any failure.
//
// Usage: node tests/offline_validation.mjs
// Binary resolution: $STACKQL, ./stackql(.exe), then PATH.

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });
const servicesDir = path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'datadog', 'v00.00.00000', 'services');

function findBinary() {
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  for (const name of ['stackql', 'stackql.exe']) {
    const local = path.join(repoRoot, name);
    if (fs.existsSync(local)) return local;
  }
  return 'stackql'; // PATH
}
const bin = findBinary();

function runSql(sql, envOverrides = {}) {
  return new Promise((resolve) => {
    const env = { ...process.env, ...envOverrides };
    for (const [k, v] of Object.entries(envOverrides)) if (v === undefined) delete env[k];
    const child = spawn(bin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
    let stdout = '', stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      let rows = [];
      try { rows = JSON.parse(stdout) ?? []; } catch { rows = []; }
      resolve({ code, rows, stdout, stderr });
    });
    child.on('error', (err) => resolve({ code: -1, rows: [], stdout: '', stderr: String(err) }));
  });
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : `  [${String(note).slice(0, 200)}]`}`);
}

const EXPECTED_SERVICES = ['actions', 'apm', 'catalog', 'cloud_costs', 'dashboards', 'digital_experience', 'fleet', 'infrastructure',
  'integrations', 'llm_observability', 'logs', 'metrics', 'monitoring', 'organization', 'remote_config', 'security',
  'service_management', 'software_delivery'];
// a representative subset per service - resources that must be present
const EXPECTED_RESOURCES = {
  monitoring: ['monitors', 'monitor_search_results', 'downtimes_matches_placeholder'].slice(0, 2).concat(['synthetics_tests', 'synthetics_api_tests', 'synthetics_browser_tests', 'synthetics_private_locations', 'synthetics_global_variables', 'config_policies', 'notification_rules', 'service_checks']),
  dashboards: ['dashboards', 'dashboard_lists', 'dashboard_list_items', 'powerpacks', 'notebooks', 'shared_dashboards', 'graph_snapshots'],
  organization: ['users', 'roles', 'role_permissions', 'role_users', 'api_keys', 'application_keys', 'service_accounts', 'teams', 'team_memberships', 'audit_logs', 'orgs', 'ip_ranges', 'usage_summary', 'hourly_usage', 'api_key_validation', 'current_user'],
  service_management: ['incidents', 'slos', 'slo_corrections', 'slo_search_results', 'downtimes', 'events', 'cases', 'on_call_escalation_policies', 'service_definitions'],
  logs: ['logs', 'indexes', 'pipelines', 'archives', 'metrics', 'observability_pipelines', 'restriction_queries'],
  metrics: ['metrics', 'active_metrics', 'metric_metadata', 'timeseries_query', 'tag_configurations', 'volumes'],
  infrastructure: ['hosts', 'host_totals', 'host_tags', 'containers', 'processes', 'devices'],
  integrations: ['aws_accounts', 'azure_accounts', 'gcp_accounts', 'webhooks', 'pagerduty_services', 'slack_channels', 'reference_tables'],
  security: ['monitoring_rules', 'monitoring_signals', 'findings', 'security_findings', 'vulnerabilities', 'monitoring_suppressions'],
  cloud_costs: ['budgets', 'aws_configs', 'azure_configs', 'gcp_configs', 'tag_pipeline_rulesets'],
  fleet: ['agents', 'deployments', 'schedules'],
  llm_observability: ['projects', 'prompts', 'experiments', 'datasets']
};

console.log(`stackql: ${bin}`);
let r = await runSql('SHOW SERVICES IN datadog');
check(`SHOW SERVICES (${EXPECTED_SERVICES.length})`, r.rows.length === EXPECTED_SERVICES.length && EXPECTED_SERVICES.every((s) => r.rows.some((x) => x.name === s)), r.stderr || JSON.stringify(r.rows.map((x) => x.name)));

for (const [svc, expected] of Object.entries(EXPECTED_RESOURCES)) {
  r = await runSql(`SHOW RESOURCES IN datadog.${svc}`);
  const names = new Set(r.rows.map((x) => x.name));
  const missing = expected.filter((e) => !names.has(e) && e !== 'downtimes_matches_placeholder');
  check(`SHOW RESOURCES IN datadog.${svc} contains ${expected.length} representative resources (${r.rows.length} total)`, r.rows.length > 0 && missing.length === 0, r.stderr || `missing: ${missing.join(', ')}`);
}

// monitors (v1): verbs and the snake_case surface
r = await runSql('SHOW METHODS IN datadog.monitoring.monitors');
const byName = Object.fromEntries(r.rows.map((m) => [m.MethodName, m]));
check('monitoring.monitors verbs (list/get -> SELECT, create -> INSERT, update -> REPLACE, delete -> DELETE, validate -> EXEC)',
  byName.list_monitors?.SQLVerb === 'SELECT' && byName.get_monitor?.SQLVerb === 'SELECT' && byName.create_monitor?.SQLVerb === 'INSERT' && byName.update_monitor?.SQLVerb === 'REPLACE' && byName.delete_monitor?.SQLVerb === 'DELETE' && byName.validate_monitor?.SQLVerb === 'EXEC',
  JSON.stringify(Object.fromEntries(Object.entries(byName).map(([k, v]) => [k, v.SQLVerb]))));
check('monitoring.monitors.get_monitor requires monitor_id', String(byName.get_monitor?.RequiredParams || '').includes('monitor_id'), JSON.stringify(byName.get_monitor));
r = await runSql('DESCRIBE EXTENDED datadog.monitoring.monitors');
const monCols = r.rows.map((c) => c.name);
check('DESCRIBE monitoring.monitors has the v1 monitor columns (id, name, query, type, overall_state, tags)', ['id', 'name', 'query', 'type', 'overall_state', 'tags', 'options'].every((c) => monCols.includes(c)), JSON.stringify(monCols));

// users (v2 JSON:API): $.data projection
r = await runSql('DESCRIBE EXTENDED datadog.organization.users');
const userCols = r.rows.map((c) => c.name);
check('DESCRIBE organization.users projects the JSON:API row (id, type, attributes, relationships)', ['id', 'type', 'attributes', 'relationships'].every((c) => userCols.includes(c)) && !userCols.includes('data'), JSON.stringify(userCols));

// audit logs: cursor pagination + LIMIT pushdown land on the list method
r = await runSql('SHOW METHODS IN datadog.organization.audit_logs');
check('organization.audit_logs list -> SELECT, search (POST) -> EXEC', r.rows.some((m) => m.MethodName === 'list_audit_logs' && m.SQLVerb === 'SELECT') && r.rows.some((m) => m.MethodName === 'search_audit_logs' && m.SQLVerb === 'EXEC'), JSON.stringify(r.rows));

// dashboards (v1): bare-array list unwrapped, single-array envelope keyed
r = await runSql('DESCRIBE EXTENDED datadog.dashboards.dashboards');
const dashCols = r.rows.map((c) => c.name);
check('DESCRIBE dashboards.dashboards has id, title, layout_type, url', ['id', 'title', 'layout_type', 'url'].every((c) => dashCols.includes(c)), JSON.stringify(dashCols));

// hosts (v1): list + totals resources, mute/unmute as EXEC
r = await runSql('SHOW METHODS IN datadog.infrastructure.hosts');
check('infrastructure.hosts list -> SELECT, mute/unmute -> EXEC', r.rows.some((m) => m.MethodName === 'list_hosts' && m.SQLVerb === 'SELECT') && r.rows.some((m) => m.MethodName === 'mute_host' && m.SQLVerb === 'EXEC') && r.rows.some((m) => m.MethodName === 'unmute_host' && m.SQLVerb === 'EXEC'), JSON.stringify(r.rows));

// roles: role_users carries both add and remove
r = await runSql('SHOW METHODS IN datadog.organization.role_users');
check('organization.role_users: list -> SELECT, add -> INSERT, remove -> DELETE (RemoveUserFromRole corrected from role_permissions)', r.rows.some((m) => m.MethodName === 'list_role_users' && m.SQLVerb === 'SELECT') && r.rows.some((m) => m.MethodName === 'add_user_to_role' && m.SQLVerb === 'INSERT') && r.rows.some((m) => m.MethodName === 'remove_user_from_role' && m.SQLVerb === 'DELETE'), JSON.stringify(r.rows));

// spec-level assertions on the generated documents
let cursor = 0, top = 0, cased = 0, methods = 0, pathServers = 0, markers = 0;
const provider = yaml.load(fs.readFileSync(path.join(servicesDir, '..', 'provider.yaml'), 'utf8'));
check('provider.yaml: custom two-header auth (DD-API-KEY from DD_API_KEY, DD-APPLICATION-KEY from DD_APP_KEY) and snake_case_aliases', provider.config?.auth?.credentialsenvvar === 'DD_API_KEY' && provider.config?.auth?.successor?.credentialsenvvar === 'DD_APP_KEY' && provider.config?.snake_case_aliases === true, JSON.stringify(provider.config));
check('provider.yaml lists the 18 services', Object.keys(provider.providerServices || {}).length === 18, JSON.stringify(Object.keys(provider.providerServices || {})));
for (const f of fs.readdirSync(servicesDir).filter((x) => x.endsWith('.yaml'))) {
  const doc = yaml.load(fs.readFileSync(path.join(servicesDir, f), 'utf8'));
  const site = doc.servers?.[0]?.variables?.site;
  check(`${f}: document server is https://api.{site:.+} with x-stackQL-envVar DD_SITE and default datadoghq.com`, doc.servers?.[0]?.url === 'https://api.{site:.+}' && site?.['x-stackQL-envVar'] === 'DD_SITE' && site?.default === 'datadoghq.com', JSON.stringify(doc.servers));
  for (const res of Object.values(doc.components?.['x-stackQL-resources'] || {})) {
    for (const m of Object.values(res.methods || {})) {
      methods++;
      if (m.request?.nativeCasing === 'camel') cased++;
      if (m.config?.pagination?.requestToken?.key === 'page[cursor]' && String(m.config.pagination.responseToken?.key).startsWith('$.meta.')) cursor++;
      if (m.config?.queryParamPushdown?.top?.paramName) top++;
    }
  }
  for (const item of Object.values(doc.paths || {})) {
    if (item.servers) pathServers++;
    for (const op of Object.values(item)) if (op && typeof op === 'object') for (const k of Object.keys(op)) if (k.startsWith('x-stackql-')) markers++;
  }
}
check(`request.nativeCasing: camel on every method (${cased}/${methods})`, methods > 1500 && cased === methods, `${cased}/${methods}`);
check(`cursor pagination configured on the page[cursor] reads (${cursor} >= 15)`, cursor >= 15, String(cursor));
check(`LIMIT pushdown (queryParamPushdown.top) on the limit-bearing reads (${top} >= 150)`, top >= 150, String(top));
check(`path-level servers on the intake / On-Call / ip-ranges operations (${pathServers} == 9)`, pathServers === 9, String(pathServers));
check('no x-stackql-* build markers left in the published specs', markers === 0, String(markers));

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
