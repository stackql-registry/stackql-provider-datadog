# CLAUDE.md

## Project

This repository builds and documents the `datadog` provider for [StackQL](https://github.com/stackql/stackql): SQL query and provisioning over the Datadog v1 and v2 REST APIs - monitors, dashboards, synthetics, SLOs, downtimes, incidents, cases, on-call, logs configuration, metrics, security monitoring and findings, cloud cost management, users, roles, keys, teams, usage, integrations, RUM, LLM Observability, fleet automation and the rest of the public API surface.

The provider is built with `@stackql/provider-utils` and follows the repository pattern shared with the `clickhouse`, `github`, `k8s` and `openai` provider repositories under `stackql-registry`. When in doubt about structure, scripts, testing or docs, those repositories are the reference - mirror them.

## Spec source

Datadog publishes its v1 and v2 OpenAPI specs in the `datadog-api-client-typescript` repository (`.generator/schemas/v1/openapi.yaml`, `.generator/schemas/v2/openapi.yaml`); every official client is generated from them. `bin/fetch-spec.sh` downloads both into `provider-dev/downloaded/` and records the date and sha256 of each in `provider-dev/config/spec_pin.json`. Neither spec carries a meaningful version (`info.version` is a constant "1.0"), so the pin is the record of what was built. Refreshes are reviewed diffs (`make refresh-spec`), never silent regenerations.

## Design principles

- **v1 + v2 merged, one provider.** `provider-dev/scripts/merge_specs.mjs` merges the two specs before the split. v1 operations whose operationId also exists in v2 (users, keys, downtimes, events, AWS/GCP integration, ...) are superseded by the v2 endpoint and skipped; the rest of v1 (monitors, dashboards, synthetics, SLOs, hosts, tags, notebooks, log indexes and pipelines, Azure/PagerDuty/Slack/webhook integrations, usage) is exposed alongside v2. `/api/unstable/` endpoints are included and marked `unstable` in the inventory.
- **Server `https://api.{site}`, `DD_SITE` env var.** The single server variable `site` defaults to `datadoghq.com` and carries `x-stackQL-envVar: DD_SITE` (the Datadog Agent / client convention; Terraform's `DD_HOST` is a full URL and does not fit a server variable). The variable is written as `{site:.+}` in the URL: gorilla/mux host variables default to `[^.]+` and would never match a dotted site value - the same reason the previously published provider used a regex-qualified `{region}`. Nine operations (log / event / product-analytics intake, On-Call paging, IP ranges) live on other hosts and get path-level servers in post-processing.
- **Auth parity with Terraform.** `DD_API_KEY` -> `DD-API-KEY` header, `DD_APP_KEY` -> `DD-APPLICATION-KEY` header (custom auth with a successor), exactly as the published provider and the Terraform provider.
- **The CSV is the durable mapping.** `provider-dev/config/all_services.csv` is checked in and is the record of every operation -> resource/method/verb mapping. `analyze` keys existing rows on `filename::operationId` and never changes them; `map_operations.mjs` only fills new rows (from rules and an explicit override table), resyncs rows whose path moved upstream, prunes retired operations, and validates. A resource must not silently move between releases. `provider-dev/config/operation_inventory.csv` adds version, deprecation, pagination, envelope and skip-reason metadata per operation.
- **Skip policy.** Deprecated operations are skipped (the only exception, `ListVulnerabilities`, has no SELECT-able successor), as are v1 operations superseded by v2, multipart/form-data uploads and non-JSON responses (CSV, zip, octet-stream, yaml). Skips are reason-coded in the inventory and `skip_this_resource` in the CSV.
- **Method names are the snake_case operationId** (`list_monitors`, `create_monitor`, `get_apikey`) - the convention of the previously published mapping. Resource names for new operations are derived from the path (`<prefix>_<parent singular>_<last plural>`, prefix per `rootPrefixes` in `service_names.json`); trailing action segments (`search`, `validate`, `clone`, `cancel`, ...) become `EXEC` methods on the parent resource.
- **Verbs.** GET -> `SELECT`, POST -> `INSERT` (or `EXEC` on an action segment), PUT -> `REPLACE`, PATCH -> `UPDATE`, DELETE -> `DELETE`. POST search endpoints are `EXEC`, never `INSERT`.
- **objectKey.** `x-pagination.resultsPath` when the vendor declares one, `$.data` for the v2 JSON:API envelope (rows are `id`, `type`, `attributes`, `relationships`), `$.<key>` for a v1 single-array envelope of objects, nothing for bare arrays (stackql iterates them natively; the normalize bare-array wrap is reverted by `post_normalize.mjs`, the github precedent) and for plain objects. Entity reads are never exploded on an embedded array.
- **Pagination.** any-sdk follows the cursor dialects only: every GET with `x-pagination.cursorParam` (`page[cursor]`) gets a method-level `config.pagination` (`$.meta.page.after` and friends). Page-number and offset dialects carry no next-page token and stay plain `WHERE` parameters.
- **Pushdown.** `config.queryParamPushdown.top` (SQL `LIMIT` -> `page[limit]` / `page[size]` / `limit` / `count`, bounded by the schema maximum) on every limit-bearing GET; `skip` for the offset dialects. Datadog's `filter[...]` parameters are declared query parameters and are already usable as `WHERE` keys; any-sdk renders only the OData filter syntax, so there is no filter pushdown config.
- **snake_case surface.** `snake_case_aliases: true` on the provider plus `request.nativeCasing: camel` on every method (the aws / azure / clickhouse precedent). The wire is snake_case almost everywhere; the ~17 camelCase query parameters and ~500 camelCase schema properties resolve from snake keys.
- **Deterministic builds.** Every pipeline step is a re-runnable script; manual mapping decisions are rules in `map_operations.mjs` / `service_names.json`, never hand-edits to generated artifacts. Scripts validate and fail without writing.

## Toolchain rules

- Use the **latest** `@stackql/provider-utils` and `@stackql/pgwire-lite` (check npm before starting work; do not pin to an old minor).
- Node.js >= 20, `type: module`. The two CLI entry points (`provider-dev-utils.mjs`, `docgen-utils.mjs`) are wrapped as npm scripts invoked through `node`; flags pass through npm's `--` separator.
- A `stackql` binary (>= v0.10.601 for `x-stackQL-envVar`) is required for testing: `$STACKQL`, `./stackql`, or on `PATH`. Run everything under Linux / WSL / macOS (`make`).
- Python 3 with `pystackql` (venv created on demand by `make venv`) for the live smoke suite.

## Repository layout

```
provider-dev/
  downloaded/            # pinned v1-openapi.yaml and v2-openapi.yaml (committed)
  build/                 # merged spec, mapping report (gitignored)
  source/                # split per-service specs (gitignored, regenerated)
  config/                # spec_pin.json, service_names.json, servers.json, provider_config.json,
                         # all_services.csv (durable mapping), operation_inventory.csv
  openapi/src/datadog/   # generated provider (committed)
  scripts/               # merge_specs, service_discriminator, pre/post_normalize, map_operations, post_process, record_spec_pin
  docgen/provider-data/  # headerContent1.txt, headerContent2.txt (docs landing page)
bin/                     # fetch-spec.sh, start/stop/status server scripts, test-meta-routes.cjs
tests/                   # offline_validation.mjs, smoke_test.py (pystackql)
website/                 # Docusaurus 3.10 microsite (shared stackql/docusaurus-config vendored at build time)
Makefile                 # every step; `make all` = deps, build, tests, docs, site
```

## Build pipeline (`make all`)

1. `make fetch-spec` - download v1 + v2, verify against the pin (`make refresh-spec` to accept drift)
2. `make split` - `merge_specs.mjs`, then `provider-dev-utils split` with the function discriminator `service_discriminator.mjs` (rules and root-segment map in `service_names.json`; an unmapped path family fails the split)
3. `make normalize` - `pre_normalize.mjs` (text/json and datetime-format media types), `provider-dev-utils normalize`, `post_normalize.mjs` (bare-array unwrap)
4. `make mappings` - `provider-dev-utils analyze` (keeps existing CSV rows) then `map_operations.mjs` (fills new rows, prunes, validates, writes the inventory and `provider-dev/build/mapping_report.txt`)
5. `make generate` - `provider-dev-utils generate` (servers.json, provider_config.json, `--naive-req-body-translate`) then `post_process.mjs` (pagination, pushdown, nativeCasing, path servers, marker cleanup)
6. `make test` - `tests/offline_validation.mjs` and the meta-route suite over a local server
7. `make docs` - `docgen-utils generate-docs --snake-case-aliases` then `website/scripts/sanitize-docs.mjs` (MDX escaping plus removal of the `site` server variable from required-parameter cells and examples - it is optional)
8. `make website` - Docusaurus build (vendors the shared config)

`make smoke` (local provider) / `make smoke-live` (published provider) run `tests/smoke_test.py` against a real organization: reads across the common resources and free-of-charge write lifecycles (monitor, dashboard, downtime, role, API key), everything named `stackql-smoke-<stamp>` and deleted within the run. Credentials come from `.env` (`DD_API_KEY`, `DD_APP_KEY`, `DD_SITE`). Nothing in the smoke suite ingests data or runs synthetics, so the budget is effectively zero.

## Writing conventions

- README and docs copy: measured, precise, no hyperbole. No em dashes; use `-`. No characters not on a QWERTY keyboard; `->` for arrows.
- Sample queries: realistic, runnable, `json_extract` for JSON:API attributes; never a `site` predicate in examples (it is optional).

## Non-negotiables

1. Latest `@stackql/provider-utils`, always
2. The CSV mapping is durable: never rename or move an existing resource without a documented reason in the README
3. Deterministic scripts, never hand-edits to derived artifacts
4. Every regeneration is followed by `make test` before commit; the live smoke suite before publishing
5. The smoke suite creates nothing that bills and deletes everything it creates
