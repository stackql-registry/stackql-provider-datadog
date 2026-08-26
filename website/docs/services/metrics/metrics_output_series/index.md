--- 
title: metrics_output_series
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics_output_series
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

Creates, updates, deletes, gets or lists a <code>metrics_output_series</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics_output_series" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.metrics_output_series" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="estimate_metrics_output_series"
    values={[
        { label: 'estimate_metrics_output_series', value: 'estimate_metrics_output_series' }
    ]}
>
<TabItem value="estimate_metrics_output_series">

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
    <td>The metric name for this resource. (example: test.metric.latency)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Object containing the definition of a metric estimate attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The metric estimate resource type. (metric_cardinality_estimate) (default: metric_cardinality_estimate, example: metric_cardinality_estimate)</td>
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
    <td><a href="#estimate_metrics_output_series"><CopyableCode code="estimate_metrics_output_series" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td><a href="#parameter-filter[groups]"><code>filter[groups]</code></a>, <a href="#parameter-filter[exclude_tags_mode]"><code>filter[exclude_tags_mode]</code></a>, <a href="#parameter-filter[hours_ago]"><code>filter[hours_ago]</code></a>, <a href="#parameter-filter[num_aggregations]"><code>filter[num_aggregations]</code></a>, <a href="#parameter-filter[pct]"><code>filter[pct]</code></a>, <a href="#parameter-filter[timespan_h]"><code>filter[timespan_h]</code></a></td>
    <td>Returns the estimated cardinality for a metric with a given tag, percentile and number of aggregations configuration using Metrics without Limits&trade;.</td>
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
<tr id="parameter-metric_name">
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric. (example: dist.http.endpoint.request)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[exclude_tags_mode]">
    <td><CopyableCode code="filter[exclude_tags_mode]" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, `filter&#91;groups&#93;` is treated as an exclude list instead of an include list. Defaults to `false`. (example: false)</td>
</tr>
<tr id="parameter-filter[groups]">
    <td><CopyableCode code="filter[groups]" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of tag keys that the metric is configured to query with. For example: `filter&#91;groups&#93;=app,host`. (example: app,host)</td>
</tr>
<tr id="parameter-filter[hours_ago]">
    <td><CopyableCode code="filter[hours_ago]" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of hours of look back (from now) to estimate cardinality with. If unspecified, it defaults to 0 hours. (example: 49)</td>
</tr>
<tr id="parameter-filter[num_aggregations]">
    <td><CopyableCode code="filter[num_aggregations]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Deprecated. Number of aggregations has no impact on volume. (example: 1)</td>
</tr>
<tr id="parameter-filter[pct]">
    <td><CopyableCode code="filter[pct]" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated. This query parameter has no effect on the estimate. (example: true)</td>
</tr>
<tr id="parameter-filter[timespan_h]">
    <td><CopyableCode code="filter[timespan_h]" /></td>
    <td><code>integer (int32)</code></td>
    <td>A window, in hours, from the look back to estimate cardinality with. The minimum and default is 1 hour. (example: 6)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="estimate_metrics_output_series"
    values={[
        { label: 'estimate_metrics_output_series', value: 'estimate_metrics_output_series' }
    ]}
>
<TabItem value="estimate_metrics_output_series">

Returns the estimated cardinality for a metric with a given tag, percentile and number of aggregations configuration using Metrics without Limits&trade;.

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.metrics_output_series
WHERE metric_name = '{{ metric_name }}' -- required
AND filter[groups] = '{{ filter[groups] }}'
AND filter[exclude_tags_mode] = '{{ filter[exclude_tags_mode] }}'
AND filter[hours_ago] = '{{ filter[hours_ago] }}'
AND filter[num_aggregations] = '{{ filter[num_aggregations] }}'
AND filter[pct] = '{{ filter[pct] }}'
AND filter[timespan_h] = '{{ filter[timespan_h] }}'
;
```
</TabItem>
</Tabs>
