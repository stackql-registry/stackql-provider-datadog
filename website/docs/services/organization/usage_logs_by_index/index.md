--- 
title: usage_logs_by_index
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_logs_by_index
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

Creates, updates, deletes, gets or lists a <code>usage_logs_by_index</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_logs_by_index" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.usage_logs_by_index" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_logs_by_index"
    values={[
        { label: 'get_usage_logs_by_index', value: 'get_usage_logs_by_index' }
    ]}
>
<TabItem value="get_usage_logs_by_index">

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
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The index ID for this usage.</td>
</tr>
<tr>
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The organization public ID.</td>
</tr>
<tr>
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The user specified name for this index ID.</td>
</tr>
<tr>
    <td><CopyableCode code="org_name" /></td>
    <td><code>string</code></td>
    <td>The organization name.</td>
</tr>
<tr>
    <td><CopyableCode code="event_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of indexed logs for the queried hour.</td>
</tr>
<tr>
    <td><CopyableCode code="hour" /></td>
    <td><code>string (date-time)</code></td>
    <td>The hour for the usage.</td>
</tr>
<tr>
    <td><CopyableCode code="retention" /></td>
    <td><code>integer (int64)</code></td>
    <td>The retention period (in days) for this index ID.</td>
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
    <td><a href="#get_usage_logs_by_index"><CopyableCode code="get_usage_logs_by_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-start_hr"><code>start_hr</code></a></td>
    <td><a href="#parameter-end_hr"><code>end_hr</code></a>, <a href="#parameter-index_name"><code>index_name</code></a></td>
    <td>Get hourly usage for logs by index.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-start_hr">
    <td><CopyableCode code="start_hr" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to hour: &#91;YYYY-MM-DDThh&#93; for usage beginning at this hour.</td>
</tr>
<tr id="parameter-end_hr">
    <td><CopyableCode code="end_hr" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to hour: &#91;YYYY-MM-DDThh&#93; for usage ending **before** this hour.</td>
</tr>
<tr id="parameter-index_name">
    <td><CopyableCode code="index_name" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of log index names.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage_logs_by_index"
    values={[
        { label: 'get_usage_logs_by_index', value: 'get_usage_logs_by_index' }
    ]}
>
<TabItem value="get_usage_logs_by_index">

Get hourly usage for logs by index.

```sql
SELECT
index_id,
public_id,
index_name,
org_name,
event_count,
hour,
retention
FROM datadog.organization.usage_logs_by_index
WHERE start_hr = '{{ start_hr }}' -- required
AND end_hr = '{{ end_hr }}'
AND index_name = '{{ index_name }}'
;
```
</TabItem>
</Tabs>
