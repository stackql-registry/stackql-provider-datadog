---
title: datadog
hide_title: false
hide_table_of_contents: false
keywords:
  - datadog
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, monitor, and manage Datadog resources using SQL
custom_edit_url: null
image: /img/stackql-datadog-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Monitoring, alerting and reporting platform for cloud platforms and applications.

:::info[Provider Summary] 

total services: __18__  
total resources: __615__  

:::

See also:
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * *

## Installation

To pull the latest version of the `datadog` provider, run the following command:

```bash
REGISTRY PULL datadog;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).

## Authentication

The following system environment variables are used for authentication by default (the same variables the Datadog Terraform provider and the official API clients read):

- <CopyableCode code="DD_API_KEY" /> - Datadog API key, sent as the <code>DD-API-KEY</code> header (see <a href="https://docs.datadoghq.com/account_management/api-app-keys/#api-keys">API keys</a>)
- <CopyableCode code="DD_APP_KEY" /> - Datadog application key, sent as the <code>DD-APPLICATION-KEY</code> header (see <a href="https://docs.datadoghq.com/account_management/api-app-keys/#application-keys">application keys</a>)

These variables are sourced at runtime (from the local machine or as CI variables/secrets). The application key's scopes determine which resources are readable and writable.

<details>

<summary>Using different environment variables</summary>

To use different environment variables (instead of the defaults), use the `--auth` flag of the `stackql` program.  For example:

```bash

AUTH='{ "datadog": { "type": "custom", "location": "header", "name": "DD-API-KEY", "credentialsenvvar": "YOUR_DD_API_KEY_VAR", "successor": { "type": "custom", "location": "header", "name": "DD-APPLICATION-KEY", "credentialsenvvar": "YOUR_DD_APP_KEY_VAR" }}}'
stackql shell --auth="${AUTH}"

```
or using PowerShell:

```powershell

$Auth = "{ 'datadog': { 'type': 'custom', 'location': 'header', 'name': 'DD-API-KEY', 'credentialsenvvar': 'YOUR_DD_API_KEY_VAR', 'successor': { 'type': 'custom', 'location': 'header', 'name': 'DD-APPLICATION-KEY', 'credentialsenvvar': 'YOUR_DD_APP_KEY_VAR' }}}"
stackql.exe shell --auth=$Auth

```
</details>

## Datadog site (region)

Every request goes to `https://api.{site}`. The `site` server variable defaults to `datadoghq.com` (US1) and is resolved from the <CopyableCode code="DD_SITE" /> environment variable when it is set - the same convention as the Datadog Agent and API clients:

```bash
export DD_SITE=datadoghq.eu     # EU1; also us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, ddog-gov.com
```

A `WHERE site = '...'` predicate on any query overrides the environment for that statement, so one session can address organizations on different sites. Queries never need a `site` predicate otherwise; the parameter is omitted from the examples in this documentation for that reason.

## Provider scope

The provider merges the Datadog v1 and v2 REST APIs into 18 services (`monitoring`, `dashboards`, `organization`, `logs`, `metrics`, `security`, `service_management`, `integrations`, ...). Resources from the v2 API return the JSON:API row shape - `id`, `type`, `attributes` and `relationships` columns - so attributes are addressed with `json_extract`; v1 resources (monitors, dashboards, hosts, SLOs, synthetics, log indexes and pipelines) return flat columns. Column and parameter names are snake_case; the handful of camelCase wire names are aliased.

List operations with cursor pagination (`page[cursor]`) are traversed automatically; a SQL `LIMIT` is pushed to the API's page size parameter. Query parameters such as `filter[query]`, `filter[from]` or `tags` are used directly as `WHERE` predicates.

## Monitors

Every monitor with its state - the first query most teams run:

```sql
SELECT id, name, type, overall_state, tags
FROM datadog.monitoring.monitors;
```

Only alerting monitors, using the API's own filter:

```sql
SELECT id, name, overall_state
FROM datadog.monitoring.monitors
WHERE group_states = 'alert';
```

Search monitors with the monitor search syntax:

```sql
SELECT id, name, status, type
FROM datadog.monitoring.monitor_search_results
WHERE query = 'type:metric status:alert';
```

## Users, roles and keys

User audit with status and login method:

```sql
SELECT
  id,
  json_extract(attributes, '$.email') AS email,
  json_extract(attributes, '$.status') AS status,
  json_extract(attributes, '$.disabled') AS disabled,
  json_extract(attributes, '$.created_at') AS created_at
FROM datadog.organization.users;
```

Roles, and the users assigned to a role:

```sql
SELECT id, json_extract(attributes, '$.name') AS name, json_extract(attributes, '$.user_count') AS user_count
FROM datadog.organization.roles;

SELECT id, json_extract(attributes, '$.email') AS email
FROM datadog.organization.role_users
WHERE role_id = 'a633c0c8-91b4-11f0-a729-da7ad0900010';
```

API keys by age - rotate the old ones:

```sql
SELECT
  id,
  json_extract(attributes, '$.name') AS name,
  json_extract(attributes, '$.created_at') AS created_at,
  json_extract(attributes, '$.last4') AS last4
FROM datadog.organization.api_keys
ORDER BY created_at;
```

## Dashboards and SLOs

```sql
SELECT id, title, layout_type, author_handle, modified_at
FROM datadog.dashboards.dashboards;

SELECT id, name, type, json_extract(thresholds, '$[0].target') AS target
FROM datadog.service_management.slos;
```

## Infrastructure

Hosts reporting to Datadog, with their apps and mute state:

```sql
SELECT host_name, up, is_muted, apps, last_reported_time
FROM datadog.infrastructure.hosts;

SELECT total_up, total_active
FROM datadog.infrastructure.host_totals;
```

Active metrics reported in the last hour (`from` is a required Unix timestamp):

```sql
SELECT metrics
FROM datadog.metrics.active_metrics
WHERE "from" = strftime('%s', 'now') - 3600;
```

## Logs, audit and usage

Log indexes and their retention:

```sql
SELECT name, num_retention_days, daily_limit
FROM datadog.logs.indexes;
```

Audit events for the last day - cursor-paginated, the time window pushed down as `filter[from]`:

```sql
SELECT
  id,
  json_extract(attributes, '$.timestamp') AS timestamp,
  json_extract(attributes, '$.attributes.action') AS action,
  json_extract(attributes, '$.attributes.evt.name') AS event
FROM datadog.organization.audit_logs
WHERE "filter[from]" = 'now-1d';
```

Usage summary for a month:

```sql
SELECT date, infra_host_top99p, apm_host_top99p, logs_ingested_bytes_sum
FROM datadog.organization.usage_summary
WHERE start_month = '2026-08';
```

## Provision, mutate and tear down

Mutations use the same SQL grammar. A v1 resource (monitor) takes its fields as columns; a v2 resource (role, API key, downtime) takes the JSON:API `data` document. A monitor end to end:

```sql
-- create
INSERT INTO datadog.monitoring.monitors (name, type, query, message, tags)
SELECT 'High CPU on web hosts',
       'metric alert',
       'avg(last_5m):avg:system.cpu.user{env:prod} by {host} > 90',
       'CPU above 90% on {{host.name}} @slack-ops',
       '["team:web", "managed-by:stackql"]';

-- validate a definition without creating it
EXEC datadog.monitoring.monitors.validate_monitor
  @type = 'metric alert',
  @query = 'avg(last_5m):avg:system.cpu.user{env:prod} > 90',
  @name = 'High CPU on web hosts';

-- replace the definition (the v1 monitor API updates with PUT)
REPLACE datadog.monitoring.monitors
SET name = 'High CPU on web hosts', type = 'metric alert',
    query = 'avg(last_5m):avg:system.cpu.user{env:prod} by {host} > 95'
WHERE monitor_id = 12345678;

-- remove it
DELETE FROM datadog.monitoring.monitors
WHERE monitor_id = 12345678;
```

A role (v2) end to end:

```sql
INSERT INTO datadog.organization.roles (data)
SELECT '{"type": "roles", "attributes": {"name": "read-only-auditors"}}';

UPDATE datadog.organization.roles
SET data = '{"id": "<role-id>", "type": "roles", "attributes": {"name": "auditors"}}'
WHERE role_id = '<role-id>';

DELETE FROM datadog.organization.roles
WHERE role_id = '<role-id>';
```

Schedule a downtime for a scope:

```sql
INSERT INTO datadog.service_management.downtimes (data)
SELECT '{"type": "downtime", "attributes": {"message": "release window", "scope": "env:prod",
         "monitor_identifier": {"monitor_tags": ["team:web"]},
         "schedule": {"start": "2026-09-01T22:00:00Z", "end": "2026-09-01T23:00:00Z"}}}';
```


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/actions/">actions</a><br />
<a href="/services/apm/">apm</a><br />
<a href="/services/catalog/">catalog</a><br />
<a href="/services/cloud_costs/">cloud_costs</a><br />
<a href="/services/dashboards/">dashboards</a><br />
<a href="/services/digital_experience/">digital_experience</a><br />
<a href="/services/fleet/">fleet</a><br />
<a href="/services/infrastructure/">infrastructure</a><br />
<a href="/services/integrations/">integrations</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/llm_observability/">llm_observability</a><br />
<a href="/services/logs/">logs</a><br />
<a href="/services/metrics/">metrics</a><br />
<a href="/services/monitoring/">monitoring</a><br />
<a href="/services/organization/">organization</a><br />
<a href="/services/remote_config/">remote_config</a><br />
<a href="/services/security/">security</a><br />
<a href="/services/service_management/">service_management</a><br />
<a href="/services/software_delivery/">software_delivery</a><br />
</div>
</div>
