--- 
title: archive_order
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_order
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

Creates, updates, deletes, gets or lists an <code>archive_order</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archive_order" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.archive_order" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logs_archive_order"
    values={[
        { label: 'get_logs_archive_order', value: 'get_logs_archive_order' }
    ]}
>
<TabItem value="get_logs_archive_order">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes associated with the archive order.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the archive order definition. (archive_order) (default: archive_order, example: archive_order)</td>
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
    <td><a href="#get_logs_archive_order"><CopyableCode code="get_logs_archive_order" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the current order of your archives.&lt;br /&gt;This endpoint takes no JSON arguments.</td>
</tr>
<tr>
    <td><a href="#update_logs_archive_order"><CopyableCode code="update_logs_archive_order" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Update the order of your archives. Since logs are processed sequentially, reordering an archive may change&lt;br /&gt;the structure and content of the data processed by other archives.&lt;br /&gt;&lt;br /&gt;**Note**: Using the `PUT` method updates your archive's order by replacing the current order&lt;br /&gt;with the new one.</td>
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
    defaultValue="get_logs_archive_order"
    values={[
        { label: 'get_logs_archive_order', value: 'get_logs_archive_order' }
    ]}
>
<TabItem value="get_logs_archive_order">

Get the current order of your archives.&lt;br /&gt;This endpoint takes no JSON arguments.

```sql
SELECT
attributes,
type
FROM datadog.logs.archive_order
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_logs_archive_order"
    values={[
        { label: 'update_logs_archive_order', value: 'update_logs_archive_order' }
    ]}
>
<TabItem value="update_logs_archive_order">

Update the order of your archives. Since logs are processed sequentially, reordering an archive may change&lt;br /&gt;the structure and content of the data processed by other archives.&lt;br /&gt;&lt;br /&gt;**Note**: Using the `PUT` method updates your archive's order by replacing the current order&lt;br /&gt;with the new one.

```sql
REPLACE datadog.logs.archive_order
SET 
data = '{{ data }}'
WHERE 
RETURNING
data;
```
</TabItem>
</Tabs>
