#!/usr/bin/env node

// Fills in stackql_resource_name, stackql_method_name, stackql_verb and
// stackql_object_key for the rows of provider-dev/config/all_services.csv
// that provider-utils `analyze` left unmapped after a spec refresh, prunes
// rows whose operation no longer exists upstream, validates the whole
// mapping, and writes provider-dev/config/operation_inventory.csv (one row
// per operation with version, deprecation, pagination, envelope and skip
// reason metadata).
//
// The CSV is the durable record of the operation -> resource/method/verb
// mapping: `analyze` keys existing rows on filename::operationId and never
// changes them, so a resource never silently moves between releases. Only
// rows with an empty stackql_resource_name are mapped here, by the rules
// below (plus the explicit OVERRIDES table); CORRECTIONS re-map a few
// previously mapped rows whose original mapping was wrong. Deterministic and
// re-runnable; review the CSV diff after running.
//
// Mapping conventions for new operations:
//   resource   <prefix>_<parent singular>_..._<last static segment plural>,
//              where prefix replaces the root path segment per
//              service_names.json rootPrefixes (empty when the root restates
//              the service); trailing action segments (search, validate,
//              clone, cancel, ...) name EXEC methods on the parent resource
//   method     the snake_case operationId (formatted_op_id column) - the
//              convention of the previously published mapping
//   verb       GET -> select, POST -> insert (or exec on an action segment),
//              PUT -> replace (or exec), PATCH -> update (or exec),
//              DELETE -> delete
//   objectKey  x-pagination.resultsPath when the vendor declares one,
//              otherwise $.data for the JSON:API envelope, $.<key> for a
//              single-array v1 envelope, empty for bare arrays and objects
//   skipped    deprecated operations, v1 operations superseded by the v2
//              operation of the same name (x-stackql-superseded-by-v2 from
//              merge_specs.mjs), multipart/form-data uploads, and non-JSON
//              responses (CSV, zip, octet-stream, yaml) - reason-coded in
//              the inventory and marked skip_this_resource in the CSV
//
// Usage: npm run map-operations [-- --dry-run]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import pluralize from 'pluralize';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const sourceDir = path.join(repoRoot, 'provider-dev', 'source');
const configDir = path.join(repoRoot, 'provider-dev', 'config');
const csvPath = path.join(configDir, 'all_services.csv');
const inventoryPath = path.join(configDir, 'operation_inventory.csv');
const reportPath = path.join(repoRoot, 'provider-dev', 'build', 'mapping_report.txt');
const serviceNames = JSON.parse(fs.readFileSync(path.join(configDir, 'service_names.json'), 'utf8'));
const dryRun = process.argv.includes('--dry-run');
const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];

// ---------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------

// A trailing static segment in this set on a POST/PUT/PATCH names an action
// on the parent resource (EXEC), not a create/replace/update of an entity.
const ACTION_SEGMENTS = new Set([
  'search', 'validate', 'validation', 'clone', 'cancel', 'sync', 'batch', 'bulk', 'bulk_delete', 'bulk_update',
  'upload', 'download', 'trigger', 'acknowledge', 'escalate', 'resolve', 'restore', 'publish', 'unpublish',
  'run', 'execute', 'estimate', 'query', 'aggregate', 'analytics', 'mute', 'unmute', 'assign', 'unassign',
  'assignee', 'reorder', 'order', 'refresh', 'generate', 'test', 'evaluate', 'evaluation', 'check', 'check_async',
  'services_async', 'submit', 'print', 'fetch', 'import', 'export', 'move', 'archive', 'unarchive', 'enable',
  'disable', 'activate', 'deactivate', 'convert', 'invite', 'revoke', 'regenerate', 'retry', 'replay', 'promote',
  'apply', 'preview', 'share', 'unshare', 'star', 'unstar', 'list', 'scalar', 'timeseries', 'facet_info',
  'create_and_publish', 'count', 'summary', 'send', 'resend', 'reset', 'rotate', 'approve', 'reject', 'close',
  'reopen', 'rerun', 'start', 'stop', 'pause', 'resume', 'abort', 'dismiss', 'snooze', 'link', 'unlink', 'attach',
  'detach', 'merge', 'copy', 'duplicate', 'join', 'leave', 'subscribe', 'unsubscribe', 'confirm', 'verify',
  'lookup', 'compute', 'calculate', 'render', 'simulate', 'dry_run', 'poll', 'commit', 'rollback', 'finalize',
  'complete', 'expire', 'tabular', 'aggregation', 'translate', 'diff', 'compare', 'impersonate',
  'generate_new_external_id', 'recover', 'reactivate', 'suspend', 'deprecate', 'undeprecate', 'downgrade',
  'upgrade', 'flush', 'reindex', 'rebuild', 'scan', 'rows', 'batch_rows', 'get_widgets', 'facet_keys',
  'facet_values', 'facets', 'set', 'unset', 'ack', 'rename', 'transfer', 'exclude', 'include', 'bypass',
  'filter', 'filtering', 'lock', 'unlock', 'convert_to_monitor', 'available_namespace_rules',
  'ratelimit', 'recompute', 'transform', 'invoke', 'flag', 'unflag', 'watch', 'unwatch', 'history',
  'add', 'remove', 'reverse', 'validate_existing', 'evaluation_run', 'annotate', 'delete', 'update',
  'state', 'assignee', 'mitigate', 'revert', 'upsert_and_publish', 'add_to_incident', 'send_notification_preview',
  'simple_search', 'configure', 'toggle', 'analyze', 'get_asts', 'register', 'resolve_vulnerable_symbols',
  'title', 'description', 'due_date', 'resolved_reason', 'priority', 'status', 'batch_update', 'bulk_states',
  'validate_query', 'validate_ccm_config', 'metric_name_filter_preview'
]);
// On a GET a trailing `list` / `search` / `latest` segment is a read of the parent collection
const GET_TRAILING = new Set(['list', 'search', 'latest']);
// Structural path segments that never contribute to a resource name unless
// they are the last static segment (/logs/config/archives -> archives,
// /integration/oci/products -> oci_products)
const IGNORED_SEGMENTS = new Set(['products', 'config', 'configuration']);
// Deprecated operations are skipped uniformly, except where the vendor's
// stated successor is not a SELECT-able read (a POST search replacing a GET
// list): those stay mapped until the operation is actually sunset.
const KEEP_DEPRECATED = new Set(['ListVulnerabilities']);
// Tokens pluralize must never singularize / pluralize (acronyms and mass nouns)
for (const word of ['aws', 'gcp', 'oci', 'dns', 'sts', 'analytics', 'metadata', 'series', 'data', 'apm', 'rum', 'csm',
  'siem', 'sca', 'ndm', 'spa', 'ci', 'iam', 'waf', 'asm', 'cws', 'sso', 'saml', 'oauth2', 'idp', 'ccm', 'ms', 'hamr',
  'llm', 'ai', 'dora', 'ddsql', 'usage', 'timeseries', 'scalar', 'sbom', 'ddos']) {
  pluralize.addUncountableRule(word);
}

// Explicit resource / method / verb / objectKey overrides for new operations
// where the mechanical derivation reads poorly. Matched on (verb-optional,
// normalized path with params collapsed to {}). First match wins.
const OVERRIDES = [
  // IP ranges: a single GET on the API root of ip-ranges.<site>
  { re: /^\/$/, resource: 'ip_ranges' },
  // key validation reads (distinct resources - identical signatures otherwise)
  { re: /^\/api\/v2\/validate$/, resource: 'api_key_validation' },
  { re: /^\/api\/v2\/validate_keys$/, resource: 'key_validation' },
  { re: /^\/api\/v2\/current_user$/, resource: 'current_user' },
  { re: /^\/api\/v2\/oauth2\/register$/, resource: 'oauth2_clients', sqlVerb: 'exec' },
  // v1 hosts
  { re: /^\/api\/v1\/hosts$/, resource: 'hosts' },
  { re: /^\/api\/v1\/hosts\/totals$/, resource: 'host_totals' },
  { re: /^\/api\/v1\/host\/\{\}\/mute$/, resource: 'hosts', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/host\/\{\}\/unmute$/, resource: 'hosts', sqlVerb: 'exec' },
  // v1 host tags: /api/v1/tags/hosts[/{host_name}]
  { re: /^\/api\/v1\/tags\/hosts(\/\{\})?$/, resource: 'host_tags' },
  // v1 metrics
  { re: /^\/api\/v1\/metrics$/, resource: 'active_metrics' },
  { re: /^\/api\/v1\/metrics\/\{\}$/, resource: 'metric_metadata' },
  { re: /^\/api\/v1\/query$/, resource: 'timeseries_query', method: 'query_metrics' },
  { re: /^\/api\/v1\/series$/, resource: 'series', method: 'submit_metrics_v1', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/distribution_points$/, resource: 'distribution_points', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/series$/, resource: 'series', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/query\/scalar$/, resource: 'scalar_query', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/query\/timeseries$/, resource: 'timeseries_query', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/search$/, resource: 'active_metrics' },
  // v1 graph snapshot
  { re: /^\/api\/v1\/graph\/snapshot$/, resource: 'graph_snapshots' },
  // v1 monitors: /api/v1/monitor
  { re: /^\/api\/v1\/monitor(\/\{\})?$/, resource: 'monitors' },
  // search reads return a different envelope from the list and share its
  // (empty) required-parameter signature - dedicated resources
  { re: /^\/api\/v1\/monitor\/search$/, resource: 'monitor_search_results', sqlVerb: 'select', objectKey: '$.monitors' },
  { re: /^\/api\/v1\/monitor\/groups\/search$/, resource: 'monitor_group_search_results', sqlVerb: 'select', objectKey: '$.groups' },
  { re: /^\/api\/v1\/monitor\/can_delete$/, resource: 'monitors' },
  { re: /^\/api\/v1\/monitor\/validate$/, resource: 'monitors', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/monitor\/\{\}\/validate$/, resource: 'monitors', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/monitor\/\{\}\/downtimes$/, resource: 'monitor_downtimes' },
  { re: /^\/api\/v2\/monitor\/\{\}\/downtime_matches$/, resource: 'monitor_downtime_matches' },
  // v1 service checks
  { re: /^\/api\/v1\/check_run$/, resource: 'service_checks', sqlVerb: 'exec' },
  // v1 dashboards
  { re: /^\/api\/v1\/dashboard(\/\{\})?$/, resource: 'dashboards' },
  { re: /^\/api\/v1\/dashboard\/public(\/\{\})?$/, resource: 'shared_dashboards' },
  { re: /^\/api\/v1\/dashboard\/public\/\{\}\/invitation$/, resource: 'shared_dashboard_invitations' },
  { re: /^\/api\/v2\/dashboard\/\{\}\/shared$/, resource: 'shared_dashboards' },
  { re: /^\/api\/v2\/dashboards(\/\{\})?\/usage$/, resource: 'dashboard_usage' },
  { re: /^\/api\/v2\/reporting\/print$/, resource: 'reports', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/dashboard\/lists\/manual(\/\{\})?$/, resource: 'dashboard_lists' },
  { re: /^\/api\/v2\/dashboard\/lists\/manual\/\{\}\/dashboards$/, resource: 'dashboard_list_items' },
  { re: /^\/api\/v2\/dashboard\/public\/\{\}\/embed(\/\{\})?$/, resource: 'shared_dashboard_embeds' },
  { re: /^\/api\/v2\/dashboard\/sharing\/\{\}$/, resource: 'dashboard_sharing_configs' },
  { re: /^\/api\/v2\/dashboards\/search$/, resource: 'dashboards', method: 'search_dashboards_v2', sqlVerb: 'select', objectKey: '$.data' },
  { re: /^\/api\/v2\/dashboards\/\{\}\/exec$/, resource: 'dashboards', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/snapshot$/, resource: 'graph_snapshots', sqlVerb: 'exec' },
  // v1 notebooks
  { re: /^\/api\/v1\/notebooks(\/\{\})?$/, resource: 'notebooks' },
  // v1 slo
  { re: /^\/api\/v1\/slo(\/\{\})?$/, resource: 'slos' },
  { re: /^\/api\/v1\/slo\/search$/, resource: 'slo_search_results', sqlVerb: 'select', objectKey: '$.data.attributes.slos' },
  { re: /^\/api\/v1\/slo\/can_delete$/, resource: 'slos' },
  { re: /^\/api\/v1\/slo\/bulk_delete$/, resource: 'slos', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/slo\/\{\}\/history$/, resource: 'slo_history' },
  { re: /^\/api\/v1\/slo\/\{\}\/corrections$/, resource: 'slo_corrections' },
  { re: /^\/api\/v1\/slo\/correction(\/\{\})?$/, resource: 'slo_corrections' },
  // v1 synthetics
  { re: /^\/api\/v1\/synthetics\/tests$/, resource: 'synthetics_tests' },
  { re: /^\/api\/v1\/synthetics\/tests\/\{\}$/, resource: 'synthetics_tests' },
  { re: /^\/api\/v1\/synthetics\/tests\/api(\/\{\})?$/, resource: 'synthetics_api_tests' },
  { re: /^\/api\/v1\/synthetics\/tests\/browser(\/\{\})?$/, resource: 'synthetics_browser_tests' },
  { re: /^\/api\/v1\/synthetics\/tests\/mobile(\/\{\})?$/, resource: 'synthetics_mobile_tests' },
  { re: /^\/api\/v1\/synthetics\/tests\/trigger(\/ci)?$/, resource: 'synthetics_tests', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/synthetics\/tests\/delete$/, resource: 'synthetics_tests', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/synthetics\/tests\/search$/, resource: 'synthetics_test_search_results', sqlVerb: 'select', objectKey: '$.tests' },
  { re: /^\/api\/v1\/synthetics\/tests\/\{\}\/results(\/\{\})?$/, resource: 'synthetics_api_test_results' },
  { re: /^\/api\/v1\/synthetics\/tests\/browser\/\{\}\/results(\/\{\})?$/, resource: 'synthetics_browser_test_results' },
  { re: /^\/api\/v1\/synthetics\/tests\/\{\}\/status$/, resource: 'synthetics_tests', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/synthetics\/tests\/\{\}\/(cancel|.*)$/, resource: 'synthetics_tests' },
  { re: /^\/api\/v1\/synthetics\/locations$/, resource: 'synthetics_locations' },
  { re: /^\/api\/v1\/synthetics\/private-locations(\/\{\})?$/, resource: 'synthetics_private_locations' },
  { re: /^\/api\/v1\/synthetics\/settings\/default_locations$/, resource: 'synthetics_default_locations' },
  { re: /^\/api\/v1\/synthetics\/variables(\/\{\})?$/, resource: 'synthetics_global_variables' },
  { re: /^\/api\/v1\/synthetics\/ci$/, resource: 'synthetics_tests', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/synthetics\/tests\/uptimes$/, resource: 'synthetics_test_uptimes', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/synthetics\/settings\/on_demand_concurrency_cap$/, resource: 'on_demand_concurrency_cap' },
  { re: /^\/api\/v2\/synthetics\/global_variables(\/\{\})?$/, resource: 'synthetics_global_variables_v2' },
  { re: /^\/api\/v2\/synthetics\/tests\/fast\/\{\}$/, resource: 'synthetics_fast_test_results' },
  { re: /^\/api\/v2\/synthetics\/tests\/network(\/\{\})?$/, resource: 'synthetics_network_tests' },
  { re: /^\/api\/v2\/synthetics\/tests\/(\{\}\/)?files\//, resource: 'synthetics_test_files', sqlVerb: 'exec' },
  // v1 logs config
  { re: /^\/api\/v1\/logs\/config\/indexes(\/\{\})?$/, resource: 'indexes' },
  { re: /^\/api\/v1\/logs\/config\/index-order$/, resource: 'index_order' },
  { re: /^\/api\/v1\/logs\/config\/pipelines(\/\{\})?$/, resource: 'pipelines' },
  { re: /^\/api\/v1\/logs\/config\/pipeline-order$/, resource: 'pipeline_order' },
  { re: /^\/api\/v1\/logs-queries\/list$/, resource: 'logs', method: 'list_logs_v1', sqlVerb: 'exec' },
  // v1 integrations
  { re: /^\/api\/v1\/integration\/azure$/, resource: 'azure_accounts' },
  { re: /^\/api\/v1\/integration\/azure\/host_filters$/, resource: 'azure_host_filters' },
  { re: /^\/api\/v1\/integration\/pagerduty\/configuration\/services(\/\{\})?$/, resource: 'pagerduty_services' },
  { re: /^\/api\/v1\/integration\/slack\/configuration\/accounts\/\{\}\/channels(\/\{\})?$/, resource: 'slack_channels' },
  { re: /^\/api\/v1\/integration\/webhooks\/configuration\/webhooks(\/\{\})?$/, resource: 'webhooks' },
  { re: /^\/api\/v1\/integration\/webhooks\/configuration\/custom-variables(\/\{\})?$/, resource: 'webhook_custom_variables' },
  { re: /^\/api\/v2\/integration\/webhooks\/configuration\/auth-method$/, resource: 'webhook_auth_methods' },
  { re: /^\/api\/v2\/integration\/webhooks\/configuration\/auth-method\/oauth2-client-credentials(\/\{\})?$/, resource: 'webhook_oauth2_client_credentials' },
  { re: /^\/api\/v2\/integration\/oci\/products$/, resource: 'oci_products' },
  // v1 organizations
  { re: /^\/api\/v1\/org$/, resource: 'orgs' },
  // GET /api/v1/org/{public_id} wraps the organization as {org: {...}}
  { re: /^\/api\/v1\/org\/\{\}$/, resource: 'orgs', objectKey: '$.org' },
  { re: /^\/api\/v1\/org\/\{\}\/downgrade$/, resource: 'orgs', sqlVerb: 'exec' },
  { re: /^\/api\/v1\/org\/\{\}\/idp_metadata$/, resource: 'orgs', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/org\/\{\}\/hierarchy$/, resource: 'org_hierarchies' },
  { re: /^\/api\/v2\/org\/\{\}\/customer_org$/, resource: 'customer_orgs' },
  { re: /^\/api\/v2\/global_orgs$/, resource: 'global_orgs' },
  { re: /^\/api\/v1\/application_key$/, resource: 'application_keys', method: 'create_application_key_v1' },
  // v1 usage (non-deprecated)
  { re: /^\/api\/v1\/usage\/summary$/, resource: 'usage_summary' },
  { re: /^\/api\/v1\/usage\/top_avg_metrics$/, resource: 'usage_top_avg_metrics' },
  { re: /^\/api\/v1\/usage\/billable-summary$/, resource: 'usage_billable_summary' },
  { re: /^\/api\/v1\/usage\/([a-z_-]+)$/, resource: (m) => `usage_${m[1].replace(/-/g, '_')}` },
  // v1 security signals (non-superseded)
  { re: /^\/api\/v1\/security_analytics\/signals$/, resource: 'monitoring_signals', method: 'list_security_monitoring_signals_v1' },
  // v2 organization surface
  { re: /^\/api\/v2\/anonymize_users$/, resource: 'users', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/login\/org_configs\/max_session_duration$/, resource: 'login_configs' },
  { re: /^\/api\/v2\/hamr$/, resource: 'hamr_connections' },
  { re: /^\/api\/v2\/seats\/users$/, resource: 'seat_assignments' },
  { re: /^\/api\/v2\/oauth2\/\.well-known\/sites$/, resource: 'oauth2_well_known_sites' },
  { re: /^\/api\/v2\/oauth2\/clients\/\{\}\/scopes_restriction$/, resource: 'oauth2_client_scopes_restrictions' },
  { re: /^\/api\/v2\/governance\/config$/, resource: 'governance_configs' },
  { re: /^\/api\/v2\/team-hierarchy-links(\/\{\})?$/, resource: 'team_hierarchy_links' },
  { re: /^\/api\/v2\/users\/\{\}\/memberships$/, resource: 'user_team_memberships' },
  // v2 metrics
  { re: /^\/api\/v2\/metrics\/config\/bulk-tags$/, resource: 'bulk_tag_configurations' },
  { re: /^\/api\/v2\/metrics\/\{\}\/assets$/, resource: 'related_assets' },
  { re: /^\/api\/v2\/metrics\/\{\}\/estimate$/, resource: 'tag_cardinality_estimates' },
  { re: /^\/api\/v2\/ddsql\/query\/tabular$/, resource: 'ddsql_queries', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/ddsql\/query\/tabular\/fetch$/, resource: 'ddsql_queries', sqlVerb: 'exec' },
  // v2 cloud costs
  { re: /^\/api\/v2\/cost\/commitments\/commitment-list$/, resource: 'commitments' },
  { re: /^\/api\/v2\/cost\/tag_descriptions\/\{\}\/generate$/, resource: 'tag_descriptions', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/tags\/enrichment(\/\{\})?$/, resource: 'tag_pipeline_rulesets' },
  { re: /^\/api\/v2\/tags\/enrichment\/reorder$/, resource: 'tag_pipeline_rulesets', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/tags\/enrichment\/status$/, resource: 'tag_pipeline_ruleset_statuses' },
  { re: /^\/api\/v2\/tags\/enrichment\/validate-query$/, resource: 'tag_pipeline_rulesets', sqlVerb: 'exec' },
  // v2 infrastructure
  { re: /^\/api\/v2\/cloudinventoryservice\/syncconfigs(\/\{\})?$/, resource: 'storage_management_configs' },
  { re: /^\/api\/v2\/network-health-insights$/, resource: 'network_health_insights' },
  // v2 llm observability
  { re: /^\/api\/v2\/llm-obs\/v1\/evals$/, resource: 'evaluations', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/llm-obs\/v1\/spans$/, resource: 'spans', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/llm-obs\/v1\/experimentation\//, resource: 'experiments', sqlVerb: 'exec' },
  // apm
  { re: /^\/api\/v2\/scorecard\/scorecards$/, resource: 'scorecards' },
  // v2 service management
  { re: /^\/api\/v2\/bits-ai\/investigations(\/\{\})?$/, resource: 'bits_ai_investigations' },
  { re: /^\/api\/v2\/slo\/report$/, resource: 'slo_report_job' },
  { re: /^\/api\/v2\/change-management\/change-request(\/\{\})?$/, resource: 'change_requests' },
  { re: /^\/api\/v2\/change-management\/change-request\/\{\}\/branch$/, resource: 'change_request_branches' },
  // v2 software delivery
  { re: /^\/api\/v2\/deployments\/gates\/evaluation(\/\{\})?$/, resource: 'deployment_gate_evaluations' },
  { re: /^\/api\/v2\/test\/flaky-test-management\/tests$/, resource: 'flaky_tests' },
  { re: /^\/api\/v2\/code-coverage\/branch\/summary$/, resource: 'code_coverage_branch_summaries', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/code-coverage\/commit\/summary$/, resource: 'code_coverage_commit_summaries', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/ci\/pipeline$/, resource: 'ci_app_pipeline_events', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/ci\/pipelines\/events\/search$/, resource: 'ci_app_pipeline_events', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/ci\/tests\/events\/search$/, resource: 'ci_app_test_events', sqlVerb: 'exec' },
  // v2 security
  { re: /^\/api\/v2\/security\/cloud_workload\/policy\/download$/, resource: 'cloud_workload_security_policies' },
  // /api/v2/security/findings (Code Security findings) would share `findings`
  // with /api/v2/posture_management/findings (CSPM) - same list signature
  { re: /^\/api\/v2\/security\/findings$/, resource: 'security_findings' },
  { re: /^\/api\/v2\/security\/findings\/(search|assignee)$/, resource: 'security_findings', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/integration\/aws\/validate_ccm_config$/, resource: 'aws_accounts', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/catalog\/entity\/preview$/, resource: 'catalog_entities', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/llm-obs\/v1\/topic-discovery-configs\/latest$/, resource: 'topic_discovery_latest_configs' },
  { re: /^\/api\/v2\/security\/asm\/services\/\{\}$/, resource: 'application_security_services' },
  { re: /^\/api\/v2\/compliance_findings\/rule_based_view$/, resource: 'compliance_findings' },
  { re: /^\/api\/v2\/security_monitoring\/terraform\//, resource: 'monitoring_terraform_resources' },
  { re: /^\/api\/v2\/static-analysis\/static-analysis-server\/node-types$/, resource: 'static_analysis_server' },
  { re: /^\/api\/v2\/static-analysis\/static-analysis-server\//, resource: 'static_analysis_server', sqlVerb: 'exec' },
  { re: /entra_id\/azure_app_registrations/, resource: 'monitoring_entra_id_azure_app_registrations' },
  // v2 apm
  { re: /^\/api\/v2\/trace\/\{\}$/, resource: 'traces' },
  { re: /^\/api\/v2\/pruned_trace\/\{\}$/, resource: 'pruned_traces' },
  // v2 integrations
  { re: /^\/api\/v2\/idp\/entity_integrations\/\{\}$/, resource: 'entity_integration_configs' },
  { re: /^\/api\/v2\/cloud_auth\/aws\/persona_mapping(\/\{\})?$/, resource: 'aws_persona_mappings' },
  { re: /^\/api\/v2\/integration\/aws\/generate_new_external_id$/, resource: 'aws_external_ids', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/reference-tables\/queries\/batch-rows$/, resource: 'reference_table_rows', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/reference-tables\/tables(\/\{\})?$/, resource: 'reference_tables' },
  { re: /^\/api\/v2\/reference-tables\/tables\/\{\}\/rows$/, resource: 'reference_table_rows' },
  { re: /^\/api\/v2\/reference-tables\/uploads(\/\{\})?$/, resource: 'reference_table_uploads' },
  // v2 digital experience
  { re: /^\/api\/v2\/prodlytics$/, resource: 'product_analytics_events', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/sourcemaps$/, resource: 'sourcemaps' },
  { re: /^\/api\/v2\/sourcemaps\/list$/, resource: 'sourcemaps' },
  { re: /^\/api\/v2\/sourcemaps\/restore$/, resource: 'sourcemaps', sqlVerb: 'exec' },
  // v2 logs
  { re: /^\/api\/v2\/obs-pipelines\/pipelines\/validate$/, resource: 'observability_pipelines', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/obs-pipelines\/pipelines(\/\{\})?$/, resource: 'observability_pipelines' },
  { re: /^\/api\/v2\/logs$/, resource: 'logs', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/logs\/events\/search$/, resource: 'logs', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/logs\/analytics\/aggregate$/, resource: 'logs', sqlVerb: 'exec' },
  // v2 events
  { re: /^\/api\/v2\/events$/, resource: 'events' },
  { re: /^\/api\/v2\/events\/search$/, resource: 'events', sqlVerb: 'exec' },
  // remote config products: drop the product family segment
  { re: /^\/api\/v2\/remote_config\/products\/obs_pipelines\/pipelines(\/\{\})?$/, resource: 'observability_pipelines' },
  { re: /^\/api\/v2\/remote_config\/products\/obs_pipelines\/pipelines\/validate$/, resource: 'observability_pipelines', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/remote_config\/products\/cws\/agent_rules(\/\{\})?$/, resource: 'csm_threats_agent_rules' },
  { re: /^\/api\/v2\/remote_config\/products\/cws\/policy(\/\{\})?$/, resource: 'csm_threats_agent_policies' },
  { re: /^\/api\/v2\/remote_config\/products\/cws\/policy\/download$/, resource: 'csm_threats_agent_policies', sqlVerb: 'exec' },
  { re: /^\/api\/v2\/remote_config\/products\/asm\/waf\/custom_rules(\/\{\})?$/, resource: 'waf_custom_rules' },
  { re: /^\/api\/v2\/remote_config\/products\/asm\/waf\/exclusion_filters(\/\{\})?$/, resource: 'waf_exclusion_filters' },
  { re: /^\/api\/v2\/remote_config\/products\/asm\/waf\/policies(\/\{\})?$/, resource: 'waf_policies' }
];

// Corrections to rows that were already mapped in the published CSV. These
// are the only edits ever made to existing rows; each entry names the
// operationId and the fields to replace.
const CORRECTIONS = {
  // DELETE /api/v2/roles/{role_id}/users was mapped to role_permissions
  RemoveUserFromRole: { resource: 'role_users' },
  // POST search / submit endpoints were mapped as INSERT alongside the real
  // create of the same resource (identical signatures - unreachable)
  ListLogs: { sqlVerb: 'exec' },
  SubmitLog: { sqlVerb: 'exec' },
  SearchEvents: { sqlVerb: 'exec' },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function snake(seg) {
  return String(seg).replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/[-. ]/g, '_').toLowerCase();
}
function normalizePath(pathKey) {
  return pathKey.replace(/\{[^}]+\}/g, '{}');
}
function pathParams(pathKey) {
  return (pathKey.match(/\{[^}]+\}/g) || []).map((s) => s.slice(1, -1));
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
function success2xx(op) {
  const codes = Object.keys(op.responses || {}).filter((c) => /^2/.test(c)).sort();
  for (const code of codes) {
    const content = op.responses[code].content || {};
    const jsonType = Object.keys(content).find((m) => /json/.test(m));
    if (jsonType) return { code, schema: content[jsonType].schema || null, mediaTypes: Object.keys(content) };
    if (Object.keys(content).length > 0) return { code, schema: null, mediaTypes: Object.keys(content) };
  }
  return { code: codes[0] || null, schema: null, mediaTypes: [] };
}
// Response envelope classification:
//   data-array / data-object  - the v2 JSON:API envelope {data: [...]} / {data: {...}}
//   single-array:<key>        - a v1 envelope with exactly one array property
//   bare-array                - a top-level JSON array (v1 monitors, hosts, ...)
//   multi-array / object      - several arrays, or a plain object: one row
//   non-json / none           - no JSON body
function classifyEnvelope(op, resolve) {
  const { schema, mediaTypes } = success2xx(op);
  if (!schema) return { envelope: mediaTypes.length ? 'non-json' : 'none', key: '', mediaTypes };
  const s = resolve(schema);
  if (!s) return { envelope: 'object', key: '', mediaTypes };
  if (s.type === 'array') return { envelope: 'bare-array', key: '', mediaTypes };
  const props = s.properties || {};
  if ('data' in props) {
    const d = resolve(props.data);
    return { envelope: d?.type === 'array' ? 'data-array' : 'data-object', key: '$.data', mediaTypes };
  }
  // only arrays of objects count as a collection envelope - an entity with a
  // single scalar array property (tags: [...]) is a row in its own right
  const arrays = Object.entries(props).filter(([, v]) => {
    const a = resolve(v);
    if (a?.type !== 'array') return false;
    const items = resolve(a.items);
    return !!(items?.properties && Object.keys(items.properties).length > 0);
  });
  if (arrays.length === 1) return { envelope: `single-array:${arrays[0][0]}`, key: `$.${arrays[0][0]}`, mediaTypes };
  if (arrays.length > 1) return { envelope: 'multi-array', key: '', mediaTypes };
  return { envelope: 'object', key: '', mediaTypes };
}
function requestMediaTypes(op) {
  return Object.keys(op.requestBody?.content || {});
}
// Whether a SELECT over this operation would project any columns: the
// success schema, narrowed by the objectKey path (array items unwrapped),
// must resolve to an object with properties. Reads with an empty or opaque
// schema (a handful of RUM replay and SCA endpoints) are mapped as EXEC
// methods instead - DESCRIBE would otherwise return no columns.
function hasColumns(op, resolve, objectKey) {
  const { schema } = success2xx(op);
  let s = resolve(schema);
  if (!s) return false;
  const steps = objectKey ? objectKey.replace(/^\$\.?/, '').split('.').filter(Boolean) : [];
  for (const step of steps) {
    s = resolve(s?.properties?.[step]);
    if (!s) return false;
  }
  if (s.type === 'array') s = resolve(s.items);
  return !!(s && typeof s === 'object' && s.properties && Object.keys(s.properties).length > 0);
}
function skipReason(op) {
  if (op.deprecated && !KEEP_DEPRECATED.has(op.operationId)) return 'deprecated';
  if (op['x-stackql-superseded-by-v2']) return 'superseded_by_v2';
  const req = requestMediaTypes(op);
  if (req.length > 0 && !req.some((m) => /json/.test(m))) return 'multipart_request';
  const { schema, mediaTypes } = success2xx(op);
  if (!schema && mediaTypes.length > 0) return 'non_json_response';
  return '';
}

// ---------------------------------------------------------------------------
// Resource / verb derivation for new operations
// ---------------------------------------------------------------------------

function rootPrefix(root, service) {
  if (root in serviceNames.rootPrefixes) return serviceNames.rootPrefixes[root];
  const r = snake(root);
  if (r === service || pluralize(r) === service || r === pluralize.singular(service)) return '';
  return pluralize.singular(r);
}

function derive(service, pathKey, verb) {
  const m = pathKey.match(/^\/api\/(?:v1|v2|unstable)\/(.*)$/);
  const segs = (m ? m[1] : pathKey.replace(/^\//, '')).split('/').filter(Boolean);
  const root = segs[0] || '';
  const prefix = rootPrefix(root, service);
  // an inner API version segment (/llm-obs/v1/prompts, /llm-obs/v3/experiments)
  // is dropped from the name; versions above v1 become a resource suffix
  let versionSuffix = '';
  let statics = segs.slice(1).filter((s) => !s.startsWith('{')).map(snake);
  statics = statics.filter((s) => {
    if (!/^v\d+$/.test(s)) return true;
    if (s !== 'v1') versionSuffix = `_${s}`;
    return false;
  });
  // structural segments contribute nothing unless they end the path
  statics = statics.filter((s, i) => i === statics.length - 1 || !IGNORED_SEGMENTS.has(s));
  // collapse an immediately repeated segment (organizations/{id}/organization_handles)
  statics = statics.filter((s, i) => i === 0 || pluralize.singular(s) !== pluralize.singular(statics[i - 1]));
  let sqlVerb = { get: 'select', delete: 'delete', post: 'insert', put: 'replace', patch: 'update' }[verb];
  if (verb === 'get') {
    while (statics.length && GET_TRAILING.has(statics[statics.length - 1])) statics.pop();
  } else {
    let stripped = false;
    while (statics.length && ACTION_SEGMENTS.has(statics[statics.length - 1])) { statics.pop(); stripped = true; }
    if (stripped && verb !== 'delete') sqlVerb = 'exec';
  }
  let resource;
  if (statics.length === 0) resource = pluralize(prefix || snake(root));
  else resource = [prefix, ...statics.slice(0, -1).map((s) => pluralize.singular(s)), pluralize(statics[statics.length - 1])].filter(Boolean).join('_');
  return { resource: resource + versionSuffix, sqlVerb };
}

function mapNew(service, pathKey, verb, op, resolve, formattedOpId) {
  const skip = skipReason(op);
  if (skip) return { resource: 'skip_this_resource', method: '', sqlVerb: '', objectKey: '', skip, mappedBy: 'skip' };
  const norm = normalizePath(pathKey);
  let { resource, sqlVerb } = derive(service, pathKey, verb);
  let method = formattedOpId;
  let mappedBy = 'rule';
  let objectKeyOverride = null;
  for (const rule of OVERRIDES) {
    if (rule.verb && rule.verb !== verb) continue;
    const mm = norm.match(rule.re);
    if (!mm) continue;
    if (rule.resource) resource = typeof rule.resource === 'function' ? rule.resource(mm) : rule.resource;
    if (rule.method) method = rule.method;
    if (rule.sqlVerb) sqlVerb = rule.sqlVerb;
    if (rule.objectKey !== undefined) objectKeyOverride = rule.objectKey;
    mappedBy = 'override';
    break;
  }
  let objectKey = '';
  if (verb === 'get') {
    const pag = op['x-pagination'];
    const { key, envelope } = classifyEnvelope(op, resolve);
    // an entity read (path ends in a parameter) is one row; a v1 entity that
    // embeds an object array (a dashboard's widgets) must not be exploded
    const entityRead = /\}$/.test(pathKey) && envelope.startsWith('single-array');
    objectKey = objectKeyOverride ?? (pag?.resultsPath ? `$.${pag.resultsPath}` : entityRead ? '' : key);
    if (sqlVerb === 'select' && !hasColumns(op, resolve, objectKey)) {
      if (objectKey && hasColumns(op, resolve, '')) {
        // a single scalar array ({metrics: [...]}, {tags: [...]}): project
        // the envelope itself as the row, with the array as a JSON column
        objectKey = '';
        mappedBy = 'rule:envelope_row';
      } else {
        sqlVerb = 'exec';
        objectKey = '';
        mappedBy = 'rule:no_columns';
      }
    }
  }
  return { resource, method, sqlVerb, objectKey, skip: '', mappedBy };
}

// ---------------------------------------------------------------------------
// CSV utilities (RFC 4180, preserves column order)
// ---------------------------------------------------------------------------

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else { field += c; }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else { field += c; }
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}
function csvField(v) {
  v = v === undefined || v === null ? '' : String(v);
  return /[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

// ---------------------------------------------------------------------------
// Index the split service specs
// ---------------------------------------------------------------------------

const ops = new Map(); // `${filename}::${path}::${verb}` -> { op, pathItem, resolve, service }
const opsById = new Map(); // `${filename}::${operationId}` -> { key, pathKey, verb }
const specFiles = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.yaml')).sort();
if (specFiles.length === 0) {
  console.error(`Error: no service specs in ${sourceDir} - run make split normalize first`);
  process.exit(1);
}
for (const filename of specFiles) {
  const spec = yaml.load(fs.readFileSync(path.join(sourceDir, filename), 'utf8'));
  const resolve = makeResolver(spec);
  const service = filename.replace(/\.yaml$/, '');
  for (const [pathKey, pathItem] of Object.entries(spec.paths || {})) {
    for (const verb of HTTP_VERBS) {
      if (!pathItem[verb]) continue;
      ops.set(`${filename}::${pathKey}::${verb}`, { op: pathItem[verb], pathItem, resolve, service });
      if (pathItem[verb].operationId) opsById.set(`${filename}::${pathItem[verb].operationId}`, { key: `${filename}::${pathKey}::${verb}`, pathKey, verb });
    }
  }
}

// ---------------------------------------------------------------------------
// Map
// ---------------------------------------------------------------------------

const rawRows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const header = rawRows[0];
const col = Object.fromEntries(header.map((h, i) => [h, i]));
for (const required of ['filename', 'path', 'verb', 'operationId', 'formatted_op_id', 'stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key']) {
  if (!(required in col)) {
    console.error(`Missing expected CSV column: ${required}`);
    process.exit(1);
  }
}
// analyze re-emits a `skip_this_resource` row (empty method / verb) as an
// unmapped row on every run, so an operation can appear twice: keep one row
// per filename::path::verb, preferring the row that carries a mapping
const rowByKey = new Map();
let duplicates = 0;
for (const row of rawRows.slice(1)) {
  const key = `${row[col.filename]}::${row[col.path]}::${row[col.verb]}`;
  const existing = rowByKey.get(key);
  if (!existing) { rowByKey.set(key, row); continue; }
  duplicates++;
  if (!existing[col.stackql_resource_name] && row[col.stackql_resource_name]) rowByKey.set(key, row);
}
const rows = [header, ...rowByKey.values()];
if (duplicates) console.log(`deduplicated ${duplicates} repeated CSV row(s)`);

const errors = [];
const warnings = [];
const stats = { existing: 0, corrected: 0, rule: 0, override: 0, skipped: 0, pruned: 0, resynced: 0 };
const skipsByReason = {};
const report = [];
const kept = [rows[0]];
const seenKeys = new Set();
const meta = new Map(); // row -> { mappedBy, skip }

for (const row of rows.slice(1)) {
  const filename = row[col.filename], pathKey = row[col.path], verb = row[col.verb];
  const key = `${filename}::${pathKey}::${verb}`;
  let entry = ops.get(key);
  // a row is stale when its path/verb is gone, or now belongs to a different
  // operationId (the vendor re-homed the path)
  if (entry && row[col.operationId] && entry.op.operationId !== row[col.operationId]) entry = null;
  if (!entry) {
    // analyze keeps the stale path/verb for an already-mapped operationId
    // whose path moved upstream - resync the row in place
    const moved = opsById.get(`${filename}::${row[col.operationId]}`);
    if (moved && !seenKeys.has(moved.key)) {
      report.push(`RESYNC  ${filename} ${row[col.operationId]}: ${verb} ${pathKey} -> ${moved.verb} ${moved.pathKey}`);
      row[col.path] = moved.pathKey;
      row[col.verb] = moved.verb;
      entry = ops.get(moved.key);
      stats.resynced++;
    } else {
      stats.pruned++;
      report.push(`PRUNED  ${filename} ${verb} ${pathKey} (${row[col.operationId]}) - no longer in the spec`);
      continue;
    }
  }
  seenKeys.add(`${filename}::${row[col.path]}::${row[col.verb]}`);
  const { op, resolve, service } = entry;
  const opId = row[col.operationId];
  if (row[col.stackql_resource_name]) {
    let mappedBy = 'csv';
    const fix = CORRECTIONS[opId];
    if (fix) {
      if (fix.resource) row[col.stackql_resource_name] = fix.resource;
      if (fix.method) row[col.stackql_method_name] = fix.method;
      if (fix.sqlVerb) row[col.stackql_verb] = fix.sqlVerb;
      if (fix.objectKey !== undefined) row[col.stackql_object_key] = fix.objectKey;
      mappedBy = 'correction';
      stats.corrected++;
    }
    // a previously mapped operation that upstream has since deprecated is
    // retired here as well, so the skip policy is uniform across releases
    const skip = skipReason(op);
    if (skip && row[col.stackql_resource_name] !== 'skip_this_resource') {
      report.push(`RETIRED ${filename} ${verb} ${pathKey} (${opId}) - ${skip}; was ${row[col.stackql_resource_name]}.${row[col.stackql_method_name]}`);
      row[col.stackql_resource_name] = 'skip_this_resource';
      row[col.stackql_method_name] = '';
      row[col.stackql_verb] = '';
      row[col.stackql_object_key] = '';
      mappedBy = 'skip';
    }
    if (row[col.stackql_resource_name] === 'skip_this_resource') {
      stats.skipped++;
      skipsByReason[skip || 'previously_skipped'] = (skipsByReason[skip || 'previously_skipped'] || 0) + 1;
      meta.set(row, { mappedBy: 'skip', skip: skip || 'previously_skipped' });
    } else {
      stats.existing++;
      meta.set(row, { mappedBy, skip: '' });
    }
    kept.push(row);
    continue;
  }
  const m = mapNew(service, pathKey, verb, op, resolve, row[col.formatted_op_id]);
  row[col.stackql_resource_name] = m.resource;
  row[col.stackql_method_name] = m.method;
  row[col.stackql_verb] = m.sqlVerb;
  row[col.stackql_object_key] = m.objectKey;
  meta.set(row, { mappedBy: m.mappedBy, skip: m.skip });
  if (m.skip) {
    stats.skipped++;
    skipsByReason[m.skip] = (skipsByReason[m.skip] || 0) + 1;
    report.push(`SKIP    ${service} ${verb} ${pathKey} (${opId}) - ${m.skip}`);
  } else {
    stats[m.mappedBy.startsWith('rule') ? 'rule' : m.mappedBy]++;
    report.push(`NEW     ${service}.${m.resource}.${m.method} [${m.sqlVerb}${m.objectKey ? ' ' + m.objectKey : ''}] <- ${verb} ${pathKey}${m.mappedBy === 'rule' ? '' : ` (${m.mappedBy})`}`);
  }
  kept.push(row);
}

for (const key of ops.keys()) {
  if (!seenKeys.has(key)) errors.push(`in spec but not in CSV (run generate-mappings first): ${key}`);
}

// ---------------------------------------------------------------------------
// Consistency checks
// ---------------------------------------------------------------------------

const methodSeen = new Map();
const sigSeen = new Map();
const resourceVerbs = new Map();
for (const row of kept.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  if (!/^[a-z][a-z0-9_]*$/.test(resource)) errors.push(`invalid resource name '${resource}' for ${row[col.filename]} ${row[col.verb]} ${row[col.path]}`);
  if (!/^[a-z][a-z0-9_]*$/.test(row[col.stackql_method_name])) errors.push(`invalid method name '${row[col.stackql_method_name]}' for ${row[col.filename]} ${row[col.verb]} ${row[col.path]}`);
  if (!['select', 'insert', 'update', 'replace', 'delete', 'exec'].includes(row[col.stackql_verb])) errors.push(`invalid verb '${row[col.stackql_verb]}' for ${row[col.filename]} ${row[col.verb]} ${row[col.path]}`);
  const service = row[col.filename].replace(/\.yaml$/, '');
  const methodKey = `${service}.${resource}.${row[col.stackql_method_name]}`;
  if (methodSeen.has(methodKey)) errors.push(`duplicate method ${methodKey} (${methodSeen.get(methodKey)} and ${row[col.path]}:${row[col.verb]})`);
  methodSeen.set(methodKey, `${row[col.path]}:${row[col.verb]}`);
  const rk = `${service}.${resource}`;
  if (!resourceVerbs.has(rk)) resourceVerbs.set(rk, new Set());
  resourceVerbs.get(rk).add(row[col.stackql_verb]);
  const sqlVerb = row[col.stackql_verb];
  if (sqlVerb === 'exec') continue;
  const entry = ops.get(`${row[col.filename]}::${row[col.path]}::${row[col.verb]}`);
  const requiredQuery = [...(entry?.pathItem?.parameters || []), ...(entry?.op.parameters || [])]
    .map((p) => entry.resolve(p))
    .filter((p) => p && p.in === 'query' && p.required)
    .map((p) => p.name);
  const sig = [...pathParams(row[col.path]), ...requiredQuery].sort().join(',');
  const sigKey = `${service}.${resource}.${sqlVerb}::${sig}`;
  if (sigSeen.has(sigKey)) warnings.push(`signature clash on ${service}.${resource} ${sqlVerb} [${sig}]: ${sigSeen.get(sigKey)} and ${row[col.stackql_method_name]} (the first listed wins at runtime)`);
  else sigSeen.set(sigKey, row[col.stackql_method_name]);
}
const nonSelectable = [...resourceVerbs.entries()].filter(([, v]) => !v.has('select')).map(([k]) => k);

// ---------------------------------------------------------------------------
// Write
// ---------------------------------------------------------------------------

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
const resourcesByService = new Map();
for (const row of kept.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!resourcesByService.has(service)) resourcesByService.set(service, new Map());
  const r = resourcesByService.get(service);
  if (!r.has(resource)) r.set(resource, { n: 0, isNew: true });
  r.get(resource).n++;
  if (meta.get(row)?.mappedBy === 'csv' || meta.get(row)?.mappedBy === 'correction') r.get(resource).isNew = false;
}
const summaryLines = [];
for (const [service, r] of [...resourcesByService.entries()].sort()) {
  summaryLines.push(`  ${service} (${r.size}): ${[...r.entries()].sort().map(([k, v]) => `${k}${v.isNew ? '*' : ''}(${v.n})`).join(', ')}`);
}
report.push('', 'Resources per service (* = resource introduced by this mapping run):', ...summaryLines);
report.push('', `Non-selectable resources (${nonSelectable.length}): ${nonSelectable.sort().join(', ')}`);
if (warnings.length) report.push('', `Warnings (${warnings.length}):`, ...warnings.map((w) => `  ${w}`));
fs.writeFileSync(reportPath, report.join('\n') + '\n');

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written (report: ${path.relative(repoRoot, reportPath)}):`);
  for (const e of errors.slice(0, 80)) console.error(`  ${e}`);
  process.exit(1);
}

const verbCounts = {};
for (const row of kept.slice(1)) {
  const v = row[col.stackql_verb];
  if (v) verbCounts[v] = (verbCounts[v] || 0) + 1;
}
console.log(`Mapped ${kept.length - 1} operations: ${stats.existing} kept from the CSV (${stats.resynced} resynced to a moved path), ${stats.corrected} corrected, ${stats.rule} new by rule, ${stats.override} new by override, ${stats.skipped} skipped (${Object.entries(skipsByReason).map(([k, v]) => `${k}: ${v}`).join(', ')}); ${stats.pruned} stale rows pruned`);
console.log(`Verbs: ${Object.entries(verbCounts).sort().map(([k, v]) => `${k} ${v}`).join(', ')}`);
console.log(`Resources: ${[...resourcesByService.values()].reduce((a, r) => a + r.size, 0)} across ${resourcesByService.size} services; ${nonSelectable.length} non-selectable; ${warnings.length} signature warning(s)`);
console.log(`Report: ${path.relative(repoRoot, reportPath)}`);
if (dryRun) {
  console.log('dry run - CSV and inventory not written');
  process.exit(0);
}

fs.writeFileSync(csvPath, kept.map((r) => r.map(csvField).join(',')).join('\n') + '\n');

// operation inventory
const invHeader = ['service', 'api_version', 'path', 'verb', 'operationId', 'tags', 'stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key', 'mapped_by', 'skip_reason', 'deprecated', 'unstable', 'sunset', 'terraform_resource', 'pagination', 'envelope', 'request_media_types', 'response_media_types', 'summary'];
const inv = [invHeader];
for (const row of kept.slice(1)) {
  const entry = ops.get(`${row[col.filename]}::${row[col.path]}::${row[col.verb]}`);
  const { op, resolve, service } = entry;
  const { envelope, mediaTypes } = classifyEnvelope(op, resolve);
  const mm = meta.get(row) || {};
  inv.push([
    service, op['x-stackql-api-version'] || '', row[col.path], row[col.verb], row[col.operationId], (op.tags || []).join('; '),
    row[col.stackql_resource_name], row[col.stackql_method_name], row[col.stackql_verb], row[col.stackql_object_key],
    mm.mappedBy || '', mm.skip || '', op.deprecated ? 'true' : '', op['x-unstable'] ? 'true' : '', op['x-sunset'] || '',
    op['x-terraform-resource'] || '', op['x-pagination'] ? JSON.stringify(op['x-pagination']) : '', envelope,
    requestMediaTypes(op).join('; '), mediaTypes.join('; '), (op.summary || '').replace(/\s+/g, ' ').trim()
  ]);
}
fs.writeFileSync(inventoryPath, inv.map((r) => r.map(csvField).join(',')).join('\n') + '\n');
console.log(`Wrote ${path.relative(repoRoot, csvPath)} and ${path.relative(repoRoot, inventoryPath)}`);
