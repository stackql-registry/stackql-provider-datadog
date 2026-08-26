--- 
title: reference_table_rows
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_table_rows
  - integrations
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

Creates, updates, deletes, gets or lists a <code>reference_table_rows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_table_rows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.reference_table_rows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rows_by_id"
    values={[
        { label: 'get_rows_by_id', value: 'get_rows_by_id' },
        { label: 'list_reference_table_rows', value: 'list_reference_table_rows' }
    ]}
>
<TabItem value="get_rows_by_id">

Some or all requested rows were found.

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
    <td>Row identifier, corresponding to the primary key value.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Column values for this row in the reference table.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Row resource type. (row) (default: row, example: row)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reference_table_rows">

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
    <td>Row identifier, corresponding to the primary key value.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Column values for this row in the reference table.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Row resource type. (row) (default: row, example: row)</td>
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
    <td><a href="#get_rows_by_id"><CopyableCode code="get_rows_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-row_id"><code>row_id</code></a></td>
    <td></td>
    <td>Get reference table rows by their primary key values.</td>
</tr>
<tr>
    <td><a href="#list_reference_table_rows"><CopyableCode code="list_reference_table_rows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[continuation_token]"><code>page[continuation_token]</code></a></td>
    <td>List all rows in a reference table using cursor-based pagination. Pass the `page&#91;continuation_token&#93;` from the previous response to fetch the next page on the same consistent snapshot. Returns 400 for tables with more than 10,000,000 rows.</td>
</tr>
<tr>
    <td><a href="#delete_rows"><CopyableCode code="delete_rows" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete multiple rows from a Reference Table by their primary key values.</td>
</tr>
<tr>
    <td><a href="#batch_rows_query"><CopyableCode code="batch_rows_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Batch query reference table rows by their primary key values.  Returns only found rows in the included array.</td>
</tr>
<tr>
    <td><a href="#upsert_rows"><CopyableCode code="upsert_rows" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update rows in a Reference Table by their primary key values. If a row with the specified primary key exists, it is updated; otherwise, a new row is created.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the reference table to upsert rows into</td>
</tr>
<tr id="parameter-row_id">
    <td><CopyableCode code="row_id" /></td>
    <td><code>array</code></td>
    <td>List of row IDs (primary key values) to retrieve from the reference table. (example: &#91;row1, row2&#93;)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[continuation_token]">
    <td><CopyableCode code="page[continuation_token]" /></td>
    <td><code>string</code></td>
    <td>Opaque cursor from the previous response's next link. Pass this to retrieve the next page on the same consistent snapshot. (example: eyJzaWQiOjEyMzQ1LCJwayI6ImV4YW1wbGVfcGsifQ==)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of rows to return per page. Defaults to 100, maximum is 1000. (example: 100)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_rows_by_id"
    values={[
        { label: 'get_rows_by_id', value: 'get_rows_by_id' },
        { label: 'list_reference_table_rows', value: 'list_reference_table_rows' }
    ]}
>
<TabItem value="get_rows_by_id">

Get reference table rows by their primary key values.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.reference_table_rows
WHERE id = '{{ id }}' -- required
AND row_id = '{{ row_id }}' -- required
;
```
</TabItem>
<TabItem value="list_reference_table_rows">

List all rows in a reference table using cursor-based pagination. Pass the `page[continuation_token]` from the previous response to fetch the next page on the same consistent snapshot. Returns 400 for tables with more than 10,000,000 rows.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.reference_table_rows
WHERE id = '{{ id }}' -- required
AND page[limit] = '{{ page[limit] }}'
AND page[continuation_token] = '{{ page[continuation_token] }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rows"
    values={[
        { label: 'delete_rows', value: 'delete_rows' }
    ]}
>
<TabItem value="delete_rows">

Delete multiple rows from a Reference Table by their primary key values.

```sql
DELETE FROM datadog.integrations.reference_table_rows
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="batch_rows_query"
    values={[
        { label: 'batch_rows_query', value: 'batch_rows_query' },
        { label: 'upsert_rows', value: 'upsert_rows' }
    ]}
>
<TabItem value="batch_rows_query">

Batch query reference table rows by their primary key values.  Returns only found rows in the included array.

```sql
EXEC datadog.integrations.reference_table_rows.batch_rows_query 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="upsert_rows">

Create or update rows in a Reference Table by their primary key values. If a row with the specified primary key exists, it is updated; otherwise, a new row is created.

```sql
EXEC datadog.integrations.reference_table_rows.upsert_rows 
@id='{{ id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
