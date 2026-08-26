--- 
title: timeseries_query
hide_title: false
hide_table_of_contents: false
keywords:
  - timeseries_query
  - metrics
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

Creates, updates, deletes, gets or lists a <code>timeseries_query</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="timeseries_query" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.timeseries_query" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="query_metrics"
    values={[
        { label: 'query_metrics', value: 'query_metrics' }
    ]}
>
<TabItem value="query_metrics">

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the metric. (example: system.cpu.idle)</td>
</tr>
<tr>
    <td><CopyableCode code="aggr" /></td>
    <td><code>string</code></td>
    <td>Aggregation type. (example: avg)</td>
</tr>
<tr>
    <td><CopyableCode code="end" /></td>
    <td><code>integer (int64)</code></td>
    <td>End of the time window, milliseconds since Unix epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="expression" /></td>
    <td><code>string</code></td>
    <td>Metric expression. (example: system.cpu.idle&#123;host:foo,env:test&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="interval" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of milliseconds between data samples.</td>
</tr>
<tr>
    <td><CopyableCode code="length" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of data samples.</td>
</tr>
<tr>
    <td><CopyableCode code="metric" /></td>
    <td><code>string</code></td>
    <td>Metric name. (example: system.cpu.idle)</td>
</tr>
<tr>
    <td><CopyableCode code="pointlist" /></td>
    <td><code>array</code></td>
    <td>List of points of the timeseries in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="query_index" /></td>
    <td><code>integer (int64)</code></td>
    <td>The index of the series' query within the request.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Metric scope, comma separated list of tags. (example: host:foo,env:test)</td>
</tr>
<tr>
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start of the time window, milliseconds since Unix epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_set" /></td>
    <td><code>array</code></td>
    <td>Unique tags identifying this series.</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>array</code></td>
    <td>Detailed information about the metric unit. The first element describes the "primary unit" (for example, `bytes` in `bytes per second`). The second element describes the "per unit" (for example, `second` in `bytes per second`). If the second element is not present, the API returns null.</td>
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
    <td><a href="#query_metrics"><CopyableCode code="query_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td></td>
    <td>Query timeseries points. Datadog recommends using the v2&lt;br /&gt;`/api/v2/query/timeseries` endpoint over this endpoint for&lt;br /&gt;querying timeseries data.</td>
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
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start of the queried time period, seconds since the Unix epoch.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Query string.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>integer (int64)</code></td>
    <td>End of the queried time period, seconds since the Unix epoch.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="query_metrics"
    values={[
        { label: 'query_metrics', value: 'query_metrics' }
    ]}
>
<TabItem value="query_metrics">

Query timeseries points. Datadog recommends using the v2&lt;br /&gt;`/api/v2/query/timeseries` endpoint over this endpoint for&lt;br /&gt;querying timeseries data.

```sql
SELECT
display_name,
aggr,
end,
expression,
interval,
length,
metric,
pointlist,
query_index,
scope,
start,
tag_set,
unit
FROM datadog.metrics.timeseries_query
WHERE from = '{{ from }}' -- required
AND to = '{{ to }}' -- required
AND query = '{{ query }}' -- required
;
```
</TabItem>
</Tabs>
