--- 
title: anomalies
hide_title: false
hide_table_of_contents: false
keywords:
  - anomalies
  - cloud_costs
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

Creates, updates, deletes, gets or lists an <code>anomalies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomalies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.anomalies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_anomaly"
    values={[
        { label: 'get_cost_anomaly', value: 'get_cost_anomaly' },
        { label: 'list_cost_anomalies', value: 'list_cost_anomalies' }
    ]}
>
<TabItem value="get_cost_anomaly">

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
    <td>The unique identifier of the anomaly. (example: b0a6aaa9-3c4c-48cb-9447-a0d1338b3e09)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A single detected Cloud Cost Management anomaly.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the cost anomalies collection resource. Must be `anomalies`. (anomalies) (default: anomalies, example: anomalies)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cost_anomalies">

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
    <td>Static identifier of the cost anomalies collection resource. (example: anomalies)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Cost anomaly results and aggregated totals for the queried window.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the cost anomalies collection resource. Must be `anomalies`. (anomalies) (default: anomalies, example: anomalies)</td>
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
    <td><a href="#get_cost_anomaly"><CopyableCode code="get_cost_anomaly" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-anomaly_id"><code>anomaly_id</code></a></td>
    <td></td>
    <td>Get a detected Cloud Cost Management anomaly by UUID.</td>
</tr>
<tr>
    <td><a href="#list_cost_anomalies"><CopyableCode code="list_cost_anomalies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-min_anomalous_threshold"><code>min_anomalous_threshold</code></a>, <a href="#parameter-min_cost_threshold"><code>min_cost_threshold</code></a>, <a href="#parameter-dismissal_cause"><code>dismissal_cause</code></a>, <a href="#parameter-order_by"><code>order_by</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-provider_ids"><code>provider_ids</code></a></td>
    <td>List detected Cloud Cost Management anomalies for the organization.</td>
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
<tr id="parameter-anomaly_id">
    <td><CopyableCode code="anomaly_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the cost anomaly.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-dismissal_cause">
    <td><CopyableCode code="dismissal_cause" /></td>
    <td><code>string</code></td>
    <td>Filter by resolution state. Use `none` for unresolved anomalies, `all` or `*` for resolved anomalies, or a comma-separated list of causes.</td>
</tr>
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>integer (int64)</code></td>
    <td>End time as Unix milliseconds. Defaults to the end of the latest stable seven-day window.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional JSON object mapping cost tag keys to allowed values, for example `&#123;"team":&#91;"payments"&#93;,"env":&#91;"prod"&#93;&#125;`. Filters match anomaly dimensions or correlated tags.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of anomalies to return. Defaults to `200`.</td>
</tr>
<tr id="parameter-min_anomalous_threshold">
    <td><CopyableCode code="min_anomalous_threshold" /></td>
    <td><code>string</code></td>
    <td>Minimum absolute anomalous cost change to include. Numeric value; defaults to `1`.</td>
</tr>
<tr id="parameter-min_cost_threshold">
    <td><CopyableCode code="min_cost_threshold" /></td>
    <td><code>string</code></td>
    <td>Minimum absolute actual cost to include. Numeric value; defaults to `0`.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>Pagination offset. Defaults to `0`.</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>Sort direction. One of `asc` or `desc`. Defaults to `desc`.</td>
</tr>
<tr id="parameter-order_by">
    <td><CopyableCode code="order_by" /></td>
    <td><code>string</code></td>
    <td>Sort field. One of `start_date`, `end_date`, `duration`, `max_cost`, `anomalous_cost`, or `dismissal_date`. Defaults to `anomalous_cost`.</td>
</tr>
<tr id="parameter-provider_ids">
    <td><CopyableCode code="provider_ids" /></td>
    <td><code>array</code></td>
    <td>Optional repeated cloud or SaaS provider filters, such as `aws`, `gcp`, `azure`, `Oracle`, `datadog`, `OpenAI`, or `Anthropic`.</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start time as Unix milliseconds. Defaults to the start of the latest stable seven-day window.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cost_anomaly"
    values={[
        { label: 'get_cost_anomaly', value: 'get_cost_anomaly' },
        { label: 'list_cost_anomalies', value: 'list_cost_anomalies' }
    ]}
>
<TabItem value="get_cost_anomaly">

Get a detected Cloud Cost Management anomaly by UUID.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.anomalies
WHERE anomaly_id = '{{ anomaly_id }}' -- required
;
```
</TabItem>
<TabItem value="list_cost_anomalies">

List detected Cloud Cost Management anomalies for the organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.anomalies
WHERE start = '{{ start }}'
AND end = '{{ end }}'
AND filter = '{{ filter }}'
AND min_anomalous_threshold = '{{ min_anomalous_threshold }}'
AND min_cost_threshold = '{{ min_cost_threshold }}'
AND dismissal_cause = '{{ dismissal_cause }}'
AND order_by = '{{ order_by }}'
AND order = '{{ order }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND provider_ids = '{{ provider_ids }}'
;
```
</TabItem>
</Tabs>
