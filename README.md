# `datadog` provider for [`stackql`](https://github.com/stackql/stackql)

This repository builds and documents the `datadog` provider for StackQL, enabling SQL-based query and provisioning operations against the [Datadog API](https://docs.datadoghq.com/api/latest/) - monitors, dashboards, synthetics, SLOs, downtimes, incidents, cases, on-call, logs configuration, metrics, security monitoring and findings, cloud cost management, users, roles, keys, teams, usage, integrations, RUM, LLM Observability, fleet automation and the rest of the public v1 and v2 REST surface: 18 services, 597 resources, 1658 methods.

## Design Principles

- **v1 and v2 merged into one provider.** Datadog's public API is split across a v1 and a v2 OpenAPI spec (both published in the [datadog-api-client-typescript](https://github.com/DataDog/datadog-api-client-typescript/tree/master/.generator/schemas) repository, the source of every official client). `provider-dev/scripts/merge_specs.mjs` merges them before the service split. The 21 v1 operations whose operationId also exists in v2 (users, API and application keys, downtimes, events, AWS and GCP integration, log and metric submission, ...) are superseded by the v2 endpoint of the same name and skipped; the rest of v1 - monitors, dashboards, synthetics, SLOs and corrections, hosts and host tags, notebooks, log indexes and pipelines, the Azure, PagerDuty, Slack and webhook integrations, usage - is exposed alongside v2. The `/api/unstable/` endpoints (fleet automation, LLM Observability evaluators) are included and marked `unstable` in the inventory.
- **Server `https://api.{site}`, resolved from `DD_SITE`.** The single server variable `site` defaults to `datadoghq.com` (US1) and carries `x-stackQL-envVar: DD_SITE` ([stackql/stackql#707](https://github.com/stackql/stackql/pull/707), stackql >= v0.10.601), the convention of the Datadog Agent and every Datadog API client. With `DD_SITE` exported, no query needs a `site` predicate; a `WHERE site = '...'` value still wins for that statement. The variable is written `{site:.+}` in the URL template because gorilla/mux host variables default to `[^.]+` and would never match a dotted site (the reason the previously published provider used a regex-qualified `{region}`). Terraform's `DD_HOST` is a full URL (`https://api.datadoghq.eu`) and does not fit an OpenAPI server variable; `DD_SITE` is the equivalent. The nine operations that address other hosts - the log, event and product-analytics intake endpoints, the On-Call paging endpoints and the IP ranges document - carry path-level servers reinstated by the post-process step.
- **Authentication parity with Terraform.** `DD_API_KEY` is sent as the `DD-API-KEY` header and `DD_APP_KEY` as the `DD-APPLICATION-KEY` header (StackQL `custom` auth with a `successor`), the same environment variables the Terraform provider and the API clients read, unchanged from the previously published provider.
- **The mapping CSV is durable.** `provider-dev/config/all_services.csv` is the checked-in record of every operation -> resource / method / verb mapping. `analyze` keys existing rows on `filename::operationId` and never changes them, so a resource does not move between releases; `map_operations.mjs` only maps new operations (by rule plus an explicit override table), resyncs rows whose path moved upstream, prunes retired operations and validates the whole mapping (unique methods, unique required-parameter signatures per SQL verb). `provider-dev/config/operation_inventory.csv` records version, deprecation, sunset date, Terraform resource marker, pagination dialect, response envelope and skip reason for all 1779 operations.
- **snake_case surface.** `snake_case_aliases: true` on the provider and `request.nativeCasing: camel` on every method (the aws, azure and clickhouse precedent): the Datadog wire is snake_case almost everywhere, and the handful of camelCase query parameters (`filterBy`, `includeDiscovered`, `filter[widgetType]`, ...) and schema properties resolve from snake_case SQL keys. Method names are the snake_case operationId (`list_monitors`, `create_monitor`, `get_apikey`), as in the previously published mapping.
- **JSON:API rows for v2, flat rows for v1.** v2 responses are projected with `objectKey: $.data`, so rows carry `id`, `type`, `attributes` and `relationships` and attributes are addressed with `json_extract`. v1 responses are flat (`monitors`, `dashboards`, `hosts`, `slos`), keyed on the vendor's single-array envelope (`$.dashboards`, `$.host_list`, `$.tests`) or iterated natively for bare arrays (monitors) - the normalize bare-array wrap is reverted (`post_normalize.mjs`, the github precedent).
- **Pagination and pushdown.** Datadog declares its pagination dialect per operation (`x-pagination`). any-sdk follows the cursor dialects, so every cursor-paginated read (`page[cursor]` / `$.meta.page.after` and variants - audit events, container images, spans, RUM events, CI events, security signals and findings, ...) gets a method-level `config.pagination` block. The page-number and offset dialects carry no next-page token in the response and stay plain `WHERE` parameters. A SQL `LIMIT` is pushed to the vendor's page-size parameter on every limit-bearing read (`config.queryParamPushdown.top`, bounded by the schema maximum), and `OFFSET` to the offset dialects. Datadog's `filter[...]` query parameters are declared parameters and are used directly as `WHERE` predicates.
- **Deterministic builds.** Every pipeline step is a re-runnable script; manual decisions are rules in `provider-dev/scripts` and `provider-dev/config`, never hand-edits to generated artifacts. Scripts validate and fail without writing.

### Changes from the previously published provider

The previous release was built from the v2 spec alone (575 operations). This release adds the v1 surface and the v2 growth since (1779 operations). Mappings of the 533 operations that still exist are unchanged except for: `RemoveUserFromRole` (`DELETE /api/v2/roles/{role_id}/users`) moved from `role_permissions` to `role_users`, where the matching add and list already were; the `POST .../search` and submit endpoints `ListLogs`, `SubmitLog` and `SearchEvents` are `EXEC` rather than `INSERT` (they shared the create's signature and were unreachable); the v2 downtime CRUD stays in `service_management`. Twenty-three previously mapped operations were retired: the deprecated API catalog, bulk-tags, member-teams, SLO report, cost-by-org and product-usage endpoints, the DORA incident and scorecard batch endpoints (all deprecated by the vendor, `deprecated` in the inventory), the multipart IdP metadata upload, and the two policy downloads that return YAML. Nineteen were removed upstream (incident services and teams, the remote-config observability pipelines - now `logs.observability_pipelines` on the new `/api/v2/obs-pipelines` API). The `apis` and `idp_metadata` resources no longer exist.

## Prerequisites

- Node.js >= 20
- A local `stackql` binary (>= v0.10.601) for testing: `$STACKQL`, `./stackql`, or on `PATH`
- Python 3 (a venv with `pystackql` is created on demand) for the live smoke suite
- Datadog API and application keys for the live smoke suite ([API and application keys](https://docs.datadoghq.com/account_management/api-app-keys/))

Install dependencies:

```bash
npm install
```

### Makefile

Every step below is wrapped as a `make` target (GNU make, bash; runs under Linux, WSL and macOS). `make help` lists them; the composite targets are:

```bash
make all         # deps, full pipeline (fetch/pin, merge, split, normalize, mappings, generate),
                 # offline + meta-route tests, docs generation, website build
make smoke       # live smoke suite against the LOCAL provider (sources .env if present)
make smoke-live  # live smoke suite against the PUBLISHED provider in the registry
```

`make all` never touches a Datadog organization - the live suites are separate targets. Credentials are read from the environment or a gitignored `.env` file:

```bash
DD_API_KEY=...
DD_APP_KEY=...
DD_SITE=datadoghq.com    # optional: the organization's site (us3/us5/ap1/ap2.datadoghq.com, datadoghq.eu, ddog-gov.com)
```

## 0. Download and Pin the Specs

```bash
make fetch-spec        # npm run fetch-spec
```

`bin/fetch-spec.sh` downloads the v1 and v2 specs into `provider-dev/downloaded/` and verifies each against the sha256 recorded in `provider-dev/config/spec_pin.json`. Neither spec is versioned (`info.version` is a constant "1.0"), so the pin is the record of what was built. If upstream has changed the script fails without writing; accept the refresh and review the resulting diff with:

```bash
make refresh-spec      # npm run fetch-spec -- --update
```

The pinned specs (fetched 2026-08-26): v1 - 150 paths, 235 operations; v2 - 976 paths, 1544 operations.

## 1. Merge and Split into Service Specs

```bash
make split
```

`merge_specs.mjs` merges the two pinned specs into `provider-dev/build/datadog-openapi.yaml`: paths are unioned, the 39 v1 operationIds that collide with v2 are suffixed `V1` and tagged as superseded, the 47 v1 component schemas that collide with a different v2 definition are suffixed `V1` (references rewritten), and the vendor's operation-level servers are recorded for the post-process step. `provider-dev-utils split` then splits the merged spec with the function discriminator `provider-dev/scripts/service_discriminator.mjs`: ordered path rules and a root-segment map in `provider-dev/config/service_names.json`, with a hard failure for any path family that has no rule. The 16 services of the previous release are kept; `fleet` (Fleet Automation) and `llm_observability` (LLM Observability, Model Lab) are new.

| Service | Surface | Operations (mapped / total) | Resources |
|---|---|---|---|
| `service_management` | incidents, cases, on-call, SLOs (v1), downtimes (v2), events, status pages, forms, change management, error tracking | 281 / 294 | 82 |
| `organization` | users, roles, permissions, API / application keys, service accounts, teams, org settings, SAML, audit logs, usage (v1 + v2), IP ranges | 207 / 263 | 85 |
| `security` | security monitoring rules / signals / suppressions, findings, vulnerabilities, CSM, agentless scanning, static analysis, SIEM historical detections | 247 / 255 | 93 |
| `integrations` | AWS, GCP, Azure (v1), OCI, Jira, ServiceNow, Slack, MS Teams, Google Chat, PagerDuty (v1), Opsgenie, webhooks (v1), Cloudflare, Confluent, Fastly, Okta, reference tables | 192 / 215 | 59 |
| `monitoring` | monitors (v1), synthetics (v1 + v2), monitor policies, notification rules, service checks | 100 / 101 | 39 |
| `digital_experience` | RUM applications / events / metrics / retention, replay, product analytics, sourcemaps | 98 / 98 | 38 |
| `llm_observability` | projects, datasets, experiments, prompts, annotation queues, evaluators, Model Lab | 83 / 88 | 37 |
| `cloud_costs` | budgets, cost configs (AWS / Azure / GCP / OCI), commitments, tag pipelines, cost attribution | 73 / 73 | 37 |
| `software_delivery` | CI pipelines and tests, DORA, deployment gates, workflows, feature flags, code coverage | 71 / 72 | 20 |
| `dashboards` | dashboards (v1), dashboard lists, powerpacks, notebooks, widgets, annotations, reports, snapshots | 61 / 62 | 16 |
| `logs` | log indexes and pipelines (v1), archives, custom destinations, metrics, restriction queries, observability pipelines | 55 / 57 | 14 |
| `infrastructure` | hosts and tags (v1), containers, processes, network devices, app builder, storage management | 47 / 47 | 28 |
| `metrics` | metrics, tag configurations, active metrics and query (v1), datasets, DDSQL | 42 / 46 | 18 |
| `apm` | retention filters, spans metrics, scorecards, traces | 27 / 28 | 10 |
| `remote_config` | CSM Threats agent rules and policies, WAF rules and policies, RUM config | 27 / 28 | 6 |
| `actions` | action connections, datastores, execution policies | 23 / 23 | 6 |
| `fleet` | agents, deployments, schedules, tracers | 16 / 16 | 6 |
| `catalog` | software catalog entities, kinds, relations | 8 / 13 | 3 |

## 2. Normalize the Service Specs

```bash
make normalize
```

`pre_normalize.mjs` re-keys the two `text/json` request bodies (v1 metric and distribution-point submission) and 195 `application/json;datetime-format=rfc3339` responses to plain `application/json`; the generic provider-utils pass flattens `allOf`, lowers `oneOf`/`anyOf` and opaque objects, lifts path-item parameters and strips non-root servers; `post_normalize.mjs` reverts the bare-array wrap on the 14 v1 list responses that are top-level arrays (monitors, hosts, ...) so stackql iterates them natively.

## 3. Generate Mappings

```bash
make mappings
```

`provider-dev-utils analyze` refreshes `provider-dev/config/all_services.csv`, keeping every existing row; `map_operations.mjs` maps new operations, prunes retired ones, validates, and writes `provider-dev/config/operation_inventory.csv` and `provider-dev/build/mapping_report.txt` (every new mapping, every skip, resources per service, non-selectable resources). It fails without writing on any violation.

Mapping conventions for new operations:

| Operation pattern | StackQL verb | Resource / method |
|---|---|---|
| GET collection / entity | `SELECT` | resource from the path (`<prefix>_<parent singular>_<last plural>`); objectKey `$.data` (v2), `$.<key>` (v1 envelope of objects), `x-pagination.resultsPath` when declared |
| POST create | `INSERT` | `<resource>.create_*` |
| PATCH | `UPDATE` | `<resource>.update_*` |
| PUT | `REPLACE` | `<resource>.update_*` (v1 monitors, dashboards, synthetics; JSON:API PUTs) |
| DELETE | `DELETE` | `<resource>.delete_*` |
| POST / PUT / PATCH on an action segment (`search`, `validate`, `clone`, `cancel`, `mute`, `bulk`, ...) | `EXEC` | method on the parent resource |
| GET with no projectable columns | `EXEC` | two RUM replay / SCA reads with opaque schemas |
| deprecated, superseded by v2, multipart upload, non-JSON response | skipped | reason-coded in the inventory |

Mapping results: 1658 methods - 688 `SELECT`, 280 `INSERT`, 163 `UPDATE`, 95 `REPLACE`, 239 `DELETE`, 193 `EXEC`; 121 skipped (88 deprecated, 21 superseded by v2, 8 non-JSON responses, 4 multipart uploads). 597 resources, 104 of them without a `SELECT` (action-only surfaces such as product analytics queries, case field commands, feature flag variants).

## 4. Generate the Provider

```bash
make generate
```

which runs:

```bash
rm -rf provider-dev/openapi/*
npm run generate-provider -- \
  --provider-name datadog \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/datadog \
  --config-path provider-dev/config/all_services.csv \
  --servers provider-dev/config/servers.json \
  --provider-config provider-dev/config/provider_config.json \
  --naive-req-body-translate \
  --overwrite
npm run post-process
```

`--naive-req-body-translate` exposes top-level request body properties as `INSERT` / `UPDATE` columns and `EXEC` variables: v1 bodies are flat (`INSERT INTO datadog.monitoring.monitors (name, type, query, ...)`), v2 JSON:API bodies take the `data` document (`INSERT INTO datadog.organization.roles (data) SELECT '{"type": "roles", "attributes": {...}}'`). `post_process.mjs` adds the cursor pagination config (15 reads), `LIMIT` / `OFFSET` pushdown (153 / 41 reads), `request.nativeCasing: camel` on all 1658 methods, the 9 path-level server overrides, and strips the build markers.

### Server variable

```sql
-- DD_SITE=datadoghq.eu exported: no site predicate needed
SELECT id, name, overall_state FROM datadog.monitoring.monitors;

-- a WHERE value overrides the environment for one statement
SELECT id, name FROM datadog.monitoring.monitors WHERE site = 'us5.datadoghq.com';
```

### Authentication

Provider config (`provider-dev/config/provider_config.json`): `DD-API-KEY` from `DD_API_KEY` with `DD-APPLICATION-KEY` from `DD_APP_KEY` as the successor header. Different variable names can be passed at runtime with `--auth='{"datadog": {"type": "custom", "location": "header", "name": "DD-API-KEY", "credentialsenvvar": "...", "successor": {...}}}'`.

## 5. Test the Provider

Three layers, in order. Every regeneration is followed by the first two before commit (`make test`); the third is live.

### Offline validation

```bash
make test-offline      # node tests/offline_validation.mjs
```

`SHOW SERVICES` / `SHOW RESOURCES` / `SHOW METHODS` and `DESCRIBE EXTENDED` against the local file registry: the 18 services and representative resources per service, the verb mapping on `monitors`, `hosts`, `role_users` and `audit_logs`, the v1 flat columns and the v2 JSON:API columns, the `https://api.{site:.+}` server with `DD_SITE`, `nativeCasing` on every method, the pagination and pushdown counts, the path-level servers, and the absence of build markers. 46 checks.

### Meta-route test suite

```bash
make test-meta         # start-server / test-meta-routes -- datadog / stop-server
```

Walks every service, resource and method over a local server: 18 services, 597 resources, 1658 methods, no failures.

### Smoke tests (live)

```bash
make smoke             # local provider (provider-dev/openapi)
make smoke-live        # published provider from the registry (post-publish verification)
make smoke-cleanup     # sweep stackql-smoke-* objects and exit
```

[tests/smoke_test.py](tests/smoke_test.py) (pystackql) runs against a real organization: read smokes over users, the current user, roles, API and application keys, the audit log (cursor pagination with `filter[from]`), IP ranges (path-level server), monitors, dashboards, hosts and host totals, SLOs, synthetics tests and locations, log indexes, active metrics, the usage summary and a `LIMIT` pushdown; then write lifecycles for a monitor (`INSERT`, `SELECT`, search, `REPLACE`, `EXEC validate`, `DELETE`), a dashboard, a v2 downtime, a role (`INSERT` / `UPDATE` / permissions / `DELETE`) and an API key. Everything is named `stackql-smoke-<stamp>` and deleted within the run; breadcrumbs from earlier runs are swept first. Nothing created is metered and no data is ingested (no metric, log or event submission, no synthetics runs), so the cost of a run is zero: 56 statements, 51 checks. `DD_SITE` must match the organization's site (a wrong site answers 403 to every call).

### UAT

```bash
set -a; source .env; set +a
REG_ROOT="$(pwd)/provider-dev/openapi"
REG="{\"url\":\"file://${REG_ROOT}\",\"localDocRoot\":\"${REG_ROOT}\",\"verifyConfig\":{\"nopVerify\":true}}"
stackql --registry="${REG}" shell
```

### CI

[.github/workflows/build-and-test.yml](.github/workflows/build-and-test.yml): pin check, build, generation-drift check, offline validation, meta-route tests and docs generation on every push and PR; the secret-gated live smoke suite on pushes (`DD_API_KEY`, `DD_APP_KEY`, `DD_SITE`); and a weekly `spec-drift` job that fetches the upstream specs, compares them with the pin, and opens a `spec-drift` issue when they move. The web workflows build and deploy the microsite from `main`.

## 6. Publish the Provider

To publish, push the `datadog` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md). Pull and verify from the dev registry:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
stackql --registry="${DEV_REG}" shell
```

```sql
registry pull datadog;
```

then `make smoke-live`.

## 7. Generate Web Docs

The doc microsite (`website/`) is Docusaurus 3.10 and follows the shared architecture used by the other provider microsites: navbar, footer, theme and plugin configuration live in [`stackql/docusaurus-config`](https://github.com/stackql/docusaurus-config), vendored into `.shared-config/` at build time. Site-local files are limited to the provider identity (`website/provider.js`), a thin `docusaurus.config.js` (which also turns on `showLastUpdateTime` so every page carries a "Last updated on" stamp from git), the shared components and theme under `src/`, and static assets including `static/CNAME` (`datadog-provider.stackql.io`).

```bash
make docs        # generate-docs --snake-case-aliases + website/scripts/sanitize-docs.mjs
make website     # yarn install && yarn build (vendors the shared config; needs GitHub access)
make website-start
```

`headerContent1.txt` / `headerContent2.txt` in `provider-dev/docgen/provider-data/` supply the landing page: installation, authentication, the `DD_SITE` convention, the provider scope, and getting-started queries (monitors and alert state, monitor search, user and key audit, roles, dashboards and SLOs, hosts, active metrics, log indexes, the audit log, usage, and the monitor / role / downtime lifecycles). `sanitize-docs.mjs` escapes MDX-hostile description text and, since docgen treats every server variable as required, removes `site` from the required-parameter cells and examples and marks it optional in the parameter tables.

To publish, select GitHub Actions as the Pages source and create the DNS record (the served hostname is pinned by `website/static/CNAME`):

| Source Domain | Record Type | Target |
|---|---|---|
| datadog-provider.stackql.io | CNAME | stackql.github.io. |

## Roadmap

- Flatten the v2 JSON:API `attributes` document into top-level columns with a response transform (the azure `properties` precedent) so v2 resources read like the v1 ones.
- Page-number and offset pagination traversal once any-sdk supports a total-count terminator for those dialects.
- Datadog has no public GraphQL API; nothing to merge.

## License

MIT License - see [LICENSE](LICENSE).

## Contributing

Contributions are welcome. Please open an issue or pull request.
