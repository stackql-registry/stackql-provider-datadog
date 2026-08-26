--- 
title: metric_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_metadata
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

Creates, updates, deletes, gets or lists a <code>metric_metadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_metadata" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.metric_metadata" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metric_metadata"
    values={[
        { label: 'get_metric_metadata', value: 'get_metric_metadata' }
    ]}
>
<TabItem value="get_metric_metadata">

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
    <td><CopyableCode code="short_name" /></td>
    <td><code>string</code></td>
    <td>A more human-readable and abbreviated version of the metric name.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Metric description.</td>
</tr>
<tr>
    <td><CopyableCode code="integration" /></td>
    <td><code>string</code></td>
    <td>Name of the integration that sent the metric if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="per_unit" /></td>
    <td><code>string</code></td>
    <td>Per unit of the metric such as `second` in `bytes per second`. (example: second)</td>
</tr>
<tr>
    <td><CopyableCode code="statsd_interval" /></td>
    <td><code>integer (int64)</code></td>
    <td>StatsD flush interval of the metric in seconds if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Metric type such as `gauge` or `rate`. (example: count)</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Primary unit of the metric such as `byte` or `operation`. (example: byte)</td>
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
    <td><a href="#get_metric_metadata"><CopyableCode code="get_metric_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Get metadata about a specific metric.</td>
</tr>
<tr>
    <td><a href="#update_metric_metadata"><CopyableCode code="update_metric_metadata" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Edit metadata of a specific metric. Find out more about &#91;supported types&#93;(https:​//docs.datadoghq.com/developers/metrics).</td>
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
    <td>Name of the metric for which to edit metadata.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_metric_metadata"
    values={[
        { label: 'get_metric_metadata', value: 'get_metric_metadata' }
    ]}
>
<TabItem value="get_metric_metadata">

Get metadata about a specific metric.

```sql
SELECT
short_name,
description,
integration,
per_unit,
statsd_interval,
type,
unit
FROM datadog.metrics.metric_metadata
WHERE metric_name = '{{ metric_name }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_metric_metadata"
    values={[
        { label: 'update_metric_metadata', value: 'update_metric_metadata' }
    ]}
>
<TabItem value="update_metric_metadata">

Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).

```sql
REPLACE datadog.metrics.metric_metadata
SET 
description = '{{ description }}',
per_unit = '{{ per_unit }}',
short_name = '{{ short_name }}',
statsd_interval = {{ statsd_interval }},
type = '{{ type }}',
unit = '{{ unit }}'
WHERE 
metric_name = '{{ metric_name }}' --required
RETURNING
short_name,
description,
integration,
per_unit,
statsd_interval,
type,
unit;
```
</TabItem>
</Tabs>
