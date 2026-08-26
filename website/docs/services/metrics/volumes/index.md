--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
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

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_volumes_by_metric_name"
    values={[
        { label: 'list_volumes_by_metric_name', value: 'list_volumes_by_metric_name' }
    ]}
>
<TabItem value="list_volumes_by_metric_name">

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
    <td>Object containing the definition of a metric's distinct volume.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The metric distinct volume type. (distinct_metric_volumes) (default: distinct_metric_volumes, example: distinct_metric_volumes)</td>
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
    <td><a href="#list_volumes_by_metric_name"><CopyableCode code="list_volumes_by_metric_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td><a href="#parameter-window[seconds]"><code>window[seconds]</code></a></td>
    <td>View hourly average cardinality for the given metric name over the look back period.&lt;br /&gt;For Metric Name Pricing customers, view total point volume for the given metric name&lt;br /&gt;over the look back period.</td>
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
<tr id="parameter-window[seconds]">
    <td><CopyableCode code="window[seconds]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of seconds of look back (from now). Default value is 3,600 (1 hour), maximum value is 2,592,000 (1 month). (example: 7200)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_volumes_by_metric_name"
    values={[
        { label: 'list_volumes_by_metric_name', value: 'list_volumes_by_metric_name' }
    ]}
>
<TabItem value="list_volumes_by_metric_name">

View hourly average cardinality for the given metric name over the look back period.&lt;br /&gt;For Metric Name Pricing customers, view total point volume for the given metric name&lt;br /&gt;over the look back period.

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.volumes
WHERE metric_name = '{{ metric_name }}' -- required
AND window[seconds] = '{{ window[seconds] }}'
;
```
</TabItem>
</Tabs>
