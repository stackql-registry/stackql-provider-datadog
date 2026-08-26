--- 
title: active_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - active_metrics
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

Creates, updates, deletes, gets or lists an <code>active_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="active_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.active_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_active_metrics"
    values={[
        { label: 'list_active_metrics', value: 'list_active_metrics' }
    ]}
>
<TabItem value="list_active_metrics">

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
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>Time when the metrics were active, seconds since the Unix epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>List of metric names.</td>
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
    <td><a href="#list_active_metrics"><CopyableCode code="list_active_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-from"><code>from</code></a></td>
    <td><a href="#parameter-host"><code>host</code></a>, <a href="#parameter-tag_filter"><code>tag_filter</code></a></td>
    <td>Get the list of actively reporting metrics from a given time until now.</td>
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
    <td>Seconds since the Unix epoch.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-host">
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.</td>
</tr>
<tr id="parameter-tag_filter">
    <td><CopyableCode code="tag_filter" /></td>
    <td><code>string</code></td>
    <td>Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters. (example: env IN (staging,test) AND service:web)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_active_metrics"
    values={[
        { label: 'list_active_metrics', value: 'list_active_metrics' }
    ]}
>
<TabItem value="list_active_metrics">

Get the list of actively reporting metrics from a given time until now.

```sql
SELECT
from,
metrics
FROM datadog.metrics.active_metrics
WHERE from = '{{ from }}' -- required
AND host = '{{ host }}'
AND tag_filter = '{{ tag_filter }}'
;
```
</TabItem>
</Tabs>
