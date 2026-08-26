--- 
title: slo_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - slo_statuses
  - service_management
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

Creates, updates, deletes, gets or lists a <code>slo_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slo_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.slo_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_slo_status"
    values={[
        { label: 'get_slo_status', value: 'get_slo_status' }
    ]}
>
<TabItem value="get_slo_status">

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
    <td>The ID of the SLO. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the SLO status.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the SLO status resource. (slo_status) (example: slo_status)</td>
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
    <td><a href="#get_slo_status"><CopyableCode code="get_slo_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slo_id"><code>slo_id</code></a>, <a href="#parameter-from_ts"><code>from_ts</code></a>, <a href="#parameter-to_ts"><code>to_ts</code></a></td>
    <td><a href="#parameter-disable_corrections"><code>disable_corrections</code></a></td>
    <td>Get the status of a Service Level Objective (SLO) for a given time period.&lt;br /&gt;&lt;br /&gt;This endpoint returns the current SLI value, error budget remaining, and other status information for the specified SLO.</td>
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
<tr id="parameter-from_ts">
    <td><CopyableCode code="from_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The starting timestamp for the SLO status query in epoch seconds.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-slo_id">
    <td><CopyableCode code="slo_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the SLO.</td>
</tr>
<tr id="parameter-to_ts">
    <td><CopyableCode code="to_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ending timestamp for the SLO status query in epoch seconds.</td>
</tr>
<tr id="parameter-disable_corrections">
    <td><CopyableCode code="disable_corrections" /></td>
    <td><code>boolean</code></td>
    <td>Whether to exclude correction windows from the SLO status calculation. Defaults to false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_slo_status"
    values={[
        { label: 'get_slo_status', value: 'get_slo_status' }
    ]}
>
<TabItem value="get_slo_status">

Get the status of a Service Level Objective (SLO) for a given time period.&lt;br /&gt;&lt;br /&gt;This endpoint returns the current SLI value, error budget remaining, and other status information for the specified SLO.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.slo_statuses
WHERE slo_id = '{{ slo_id }}' -- required
AND from_ts = '{{ from_ts }}' -- required
AND to_ts = '{{ to_ts }}' -- required
AND disable_corrections = '{{ disable_corrections }}'
;
```
</TabItem>
</Tabs>
