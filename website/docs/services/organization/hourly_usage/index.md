--- 
title: hourly_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - hourly_usage
  - organization
  - datadog
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage datadog resources using SQL
custom_edit_url: null
image: /img/stackql-datadog-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>hourly_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hourly_usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.hourly_usage" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hourly_usage"
    values={[
        { label: 'get_hourly_usage', value: 'get_hourly_usage' }
    ]}
>
<TabItem value="get_hourly_usage">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique ID of the response.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of hourly usage for a product family for an org for a time period.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of usage data. (usage_timeseries) (default: usage_timeseries, example: usage_timeseries)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_hourly_usage"><CopyableCode code="get_hourly_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[timestamp][start]"><code>filter[timestamp][start]</code></a>, <a href="#parameter-filter[product_families]"><code>filter[product_families]</code></a></td>
    <td><a href="#parameter-filter[timestamp][end]"><code>filter[timestamp][end]</code></a>, <a href="#parameter-filter[include_descendants]"><code>filter[include_descendants]</code></a>, <a href="#parameter-filter[include_connected_accounts]"><code>filter[include_connected_accounts]</code></a>, <a href="#parameter-filter[include_breakdown]"><code>filter[include_breakdown]</code></a>, <a href="#parameter-filter[versions]"><code>filter[versions]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[next_record_id]"><code>page[next_record_id]</code></a></td>
    <td>Get hourly usage by product family.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-filter[product_families]">
    <td><CopyableCode code="filter[product_families]" /></td>
    <td><code>string</code></td>
    <td>Comma separated list of product families to retrieve. Available families are `all`, `ai`, `analyzed_logs`, `application_performance_monitoring`, `application_security`, `audit_trail`, `bits_ai`, `serverless`, `ci_app`, `cloud_cost_management`, `cloud_siem`, `csm_container_enterprise`, `csm_host_enterprise`, `csm_host_pro`, `cspm`, `custom_events`, `cws`, `data_observability`, `dbm`, `digital_experience_management`, `error_tracking`, `fargate`, `infra_hosts`, `incident_management`, `indexed_logs`, `indexed_spans`, `infrastructure_monitoring`, `ingested_spans`, `iot`, `lambda_traced_invocations`, `llm_observability`, `log_management`, `logs`, `network_flows`, `network_hosts`, `network_monitoring`, `observability_pipelines`, `online_archive`, `platform_capabilities`, `product_analytics`, `profiling`, `rum`, `rum_browser_sessions`, `rum_mobile_sessions`, `sds`, `security`, `snmp`, `software_delivery`, `synthetics_api`, `synthetics_browser`, `synthetics_mobile`, `synthetics_parallel_testing`, `timeseries`, `vuln_management` and `workflow_executions`. The following product family has been **deprecated**: `audit_logs`.</td>
</tr>
<tr id="parameter-filter[timestamp][start]">
    <td><CopyableCode code="filter[timestamp][start]" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to hour: &#91;YYYY-MM-DDThh&#93; for usage beginning at this hour.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[include_breakdown]">
    <td><CopyableCode code="filter[include_breakdown]" /></td>
    <td><code>boolean</code></td>
    <td>Include breakdown of usage by subcategories where applicable (for product family logs only). Defaults to false.</td>
</tr>
<tr id="parameter-filter[include_connected_accounts]">
    <td><CopyableCode code="filter[include_connected_accounts]" /></td>
    <td><code>boolean</code></td>
    <td>Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to false.</td>
</tr>
<tr id="parameter-filter[include_descendants]">
    <td><CopyableCode code="filter[include_descendants]" /></td>
    <td><code>boolean</code></td>
    <td>Include child org usage in the response. Defaults to false.</td>
</tr>
<tr id="parameter-filter[timestamp][end]">
    <td><CopyableCode code="filter[timestamp][end]" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to hour: &#91;YYYY-MM-DDThh&#93; for usage ending **before** this hour.</td>
</tr>
<tr id="parameter-filter[versions]">
    <td><CopyableCode code="filter[versions]" /></td>
    <td><code>string</code></td>
    <td>Comma separated list of product family versions to use in the format `product_family:version`. For example, `infra_hosts:1.0.0`. If this parameter is not used, the API will use the latest version of each requested product family. Currently all families have one version `1.0.0`.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of results to return (between 1 and 500) - defaults to 500 if limit not specified.</td>
</tr>
<tr id="parameter-page[next_record_id]">
    <td><CopyableCode code="page[next_record_id]" /></td>
    <td><code>string</code></td>
    <td>List following results with a next_record_id provided in the previous query.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_hourly_usage"
    values={[
        { label: 'get_hourly_usage', value: 'get_hourly_usage' }
    ]}
>
<TabItem value="get_hourly_usage">

Get hourly usage by product family.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.hourly_usage
WHERE filter[timestamp][start] = '{{ filter[timestamp][start] }}' -- required
AND filter[product_families] = '{{ filter[product_families] }}' -- required
AND filter[timestamp][end] = '{{ filter[timestamp][end] }}'
AND filter[include_descendants] = '{{ filter[include_descendants] }}'
AND filter[include_connected_accounts] = '{{ filter[include_connected_accounts] }}'
AND filter[include_breakdown] = '{{ filter[include_breakdown] }}'
AND filter[versions] = '{{ filter[versions] }}'
AND page[limit] = '{{ page[limit] }}'
AND page[next_record_id] = '{{ page[next_record_id] }}'
;
```
</TabItem>
</Tabs>
