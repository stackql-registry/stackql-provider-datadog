--- 
title: host_totals
hide_title: false
hide_table_of_contents: false
keywords:
  - host_totals
  - infrastructure
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

Creates, updates, deletes, gets or lists a <code>host_totals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="host_totals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.host_totals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_host_totals"
    values={[
        { label: 'get_host_totals', value: 'get_host_totals' }
    ]}
>
<TabItem value="get_host_totals">

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
    <td><CopyableCode code="total_active" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total number of active host (UP and ???) reporting to Datadog.</td>
</tr>
<tr>
    <td><CopyableCode code="total_up" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of host that are UP and reporting to Datadog.</td>
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
    <td><a href="#get_host_totals"><CopyableCode code="get_host_totals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-from"><code>from</code></a></td>
    <td>This endpoint returns the total number of active and up hosts in your Datadog account.&lt;br /&gt;Active means the host has reported in the past hour, and up means it has reported in the past two hours.</td>
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
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of seconds from which you want to get total number of active hosts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_host_totals"
    values={[
        { label: 'get_host_totals', value: 'get_host_totals' }
    ]}
>
<TabItem value="get_host_totals">

This endpoint returns the total number of active and up hosts in your Datadog account.&lt;br /&gt;Active means the host has reported in the past hour, and up means it has reported in the past two hours.

```sql
SELECT
total_active,
total_up
FROM datadog.infrastructure.host_totals
WHERE from = '{{ from }}'
;
```
</TabItem>
</Tabs>
