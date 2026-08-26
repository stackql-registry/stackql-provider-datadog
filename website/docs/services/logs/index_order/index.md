--- 
title: index_order
hide_title: false
hide_table_of_contents: false
keywords:
  - index_order
  - logs
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

Creates, updates, deletes, gets or lists an <code>index_order</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="index_order" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.index_order" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logs_index_order"
    values={[
        { label: 'get_logs_index_order', value: 'get_logs_index_order' }
    ]}
>
<TabItem value="get_logs_index_order">

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
    <td><CopyableCode code="index_names" /></td>
    <td><code>array</code></td>
    <td>Array of strings identifying by their name(s) the index(es) of your organization. Logs are tested against the query filter of each index one by one, following the order of the array. Logs are eventually stored in the first matching index.</td>
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
    <td><a href="#get_logs_index_order"><CopyableCode code="get_logs_index_order" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the current order of your log indexes. This endpoint takes no JSON arguments.</td>
</tr>
<tr>
    <td><a href="#update_logs_index_order"><CopyableCode code="update_logs_index_order" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-index_names"><code>index_names</code></a></td>
    <td></td>
    <td>This endpoint updates the index order of your organization.&lt;br /&gt;It returns the index order object passed in the request body when the request is successful.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_logs_index_order"
    values={[
        { label: 'get_logs_index_order', value: 'get_logs_index_order' }
    ]}
>
<TabItem value="get_logs_index_order">

Get the current order of your log indexes. This endpoint takes no JSON arguments.

```sql
SELECT
index_names
FROM datadog.logs.index_order
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_logs_index_order"
    values={[
        { label: 'update_logs_index_order', value: 'update_logs_index_order' }
    ]}
>
<TabItem value="update_logs_index_order">

This endpoint updates the index order of your organization.&lt;br /&gt;It returns the index order object passed in the request body when the request is successful.

```sql
REPLACE datadog.logs.index_order
SET 
index_names = '{{ index_names }}'
WHERE 
index_names = '{{ index_names }}' --required
RETURNING
index_names;
```
</TabItem>
</Tabs>
