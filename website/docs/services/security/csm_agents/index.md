--- 
title: csm_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_agents
  - security
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

Creates, updates, deletes, gets or lists a <code>csm_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.csm_agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_all_csmagents"
    values={[
        { label: 'list_all_csmagents', value: 'list_all_csmagents' }
    ]}
>
<TabItem value="list_all_csmagents">

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
    <td>The ID of the Agent. (example: fffffc5505f6a006fdf7cf5aae053653)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A CSM Agent returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `datadog_agent`. (datadog_agent) (default: datadog_agent, example: datadog_agent)</td>
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
    <td><a href="#list_all_csmagents"><CopyableCode code="list_all_csmagents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-order_direction"><code>order_direction</code></a></td>
    <td>Get the list of all CSM Agents running on your hosts and containers.</td>
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
<tr id="parameter-order_direction">
    <td><CopyableCode code="order_direction" /></td>
    <td><code>string</code></td>
    <td>The sort direction for results. Use `asc` for ascending or `desc` for descending.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int32)</code></td>
    <td>The page index for pagination (zero-based).</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>A search query string to filter results (for example, `hostname:COMP-T2H4J27423`).</td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of items to include in a single page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_all_csmagents"
    values={[
        { label: 'list_all_csmagents', value: 'list_all_csmagents' }
    ]}
>
<TabItem value="list_all_csmagents">

Get the list of all CSM Agents running on your hosts and containers.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.csm_agents
WHERE page = '{{ page }}'
AND size = '{{ size }}'
AND query = '{{ query }}'
AND order_direction = '{{ order_direction }}'
;
```
</TabItem>
</Tabs>
