--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_by_metric_name"
    values={[
        { label: 'list_tags_by_metric_name', value: 'list_tags_by_metric_name' }
    ]}
>
<TabItem value="list_tags_by_metric_name">

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
    <td>Object containing the definition of a metric's indexed and ingested tags.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The metric resource type. (metrics) (default: metrics, example: metrics)</td>
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
    <td><a href="#list_tags_by_metric_name"><CopyableCode code="list_tags_by_metric_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td><a href="#parameter-window[seconds]"><code>window[seconds]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-filter[match]"><code>filter[match]</code></a>, <a href="#parameter-filter[include_tag_values]"><code>filter[include_tag_values]</code></a>, <a href="#parameter-filter[allow_partial]"><code>filter[allow_partial]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>View indexed and ingested tags for a given metric name.&lt;br /&gt;Results are filtered by the `window&#91;seconds&#93;` parameter, which defaults to 14400 (4 hours).</td>
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
<tr id="parameter-filter[allow_partial]">
    <td><CopyableCode code="filter[allow_partial]" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow partial results. Defaults to false. (example: false)</td>
</tr>
<tr id="parameter-filter[include_tag_values]">
    <td><CopyableCode code="filter[include_tag_values]" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include tag values in the response. Defaults to true. (example: true)</td>
</tr>
<tr id="parameter-filter[match]">
    <td><CopyableCode code="filter[match]" /></td>
    <td><code>string</code></td>
    <td>Filter returned tags to those matching a substring. For example, `filter&#91;match&#93;=env` returns tags like `env:prod`, `environment:staging`, etc. (example: env)</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Filter results to tags from data points that have the specified tags. For example, `filter&#91;tags&#93;=env:staging,host:123` returns tags only from data points with both `env:staging` and `host:123`. (example: env:staging,host:123)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of results to return. (example: 1000)</td>
</tr>
<tr id="parameter-window[seconds]">
    <td><CopyableCode code="window[seconds]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of seconds of look back (from now) to query for tag data. Default value is 14400 (4 hours), minimum value is 14400 (4 hours). (example: 14400)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags_by_metric_name"
    values={[
        { label: 'list_tags_by_metric_name', value: 'list_tags_by_metric_name' }
    ]}
>
<TabItem value="list_tags_by_metric_name">

View indexed and ingested tags for a given metric name.&lt;br /&gt;Results are filtered by the `window&#91;seconds&#93;` parameter, which defaults to 14400 (4 hours).

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.tags
WHERE metric_name = '{{ metric_name }}' -- required
AND window[seconds] = '{{ window[seconds] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND filter[match] = '{{ filter[match] }}'
AND filter[include_tag_values] = '{{ filter[include_tag_values] }}'
AND filter[allow_partial] = '{{ filter[allow_partial] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>
