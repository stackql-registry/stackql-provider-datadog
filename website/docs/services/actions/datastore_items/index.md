--- 
title: datastore_items
hide_title: false
hide_table_of_contents: false
keywords:
  - datastore_items
  - actions
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

Creates, updates, deletes, gets or lists a <code>datastore_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datastore_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.actions.datastore_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_datastore_items"
    values={[
        { label: 'list_datastore_items', value: 'list_datastore_items' }
    ]}
>
<TabItem value="list_datastore_items">

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
    <td>The unique identifier of the datastore.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Metadata and content of a datastore item.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for datastore items. (items) (default: items, example: items)</td>
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
    <td><a href="#list_datastore_items"><CopyableCode code="list_datastore_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-item_key"><code>item_key</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Lists items from a datastore. You can filter the results by specifying either an item key or a filter query parameter, but not both at the same time. Supports server-side pagination for large datasets.</td>
</tr>
<tr>
    <td><a href="#bulk_write_datastore_items"><CopyableCode code="bulk_write_datastore_items" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a></td>
    <td></td>
    <td>Creates or replaces multiple items in a datastore by their keys in a single operation.</td>
</tr>
<tr>
    <td><a href="#update_datastore_item"><CopyableCode code="update_datastore_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a></td>
    <td></td>
    <td>Partially updates an item in a datastore by its key.</td>
</tr>
<tr>
    <td><a href="#delete_datastore_item"><CopyableCode code="delete_datastore_item" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a></td>
    <td></td>
    <td>Deletes an item from a datastore by its key.</td>
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
<tr id="parameter-datastore_id">
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the datastore to retrieve.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Optional query filter to search items using the &#91;logs search syntax&#93;(https:​//docs.datadoghq.com/logs/explorer/search_syntax/).</td>
</tr>
<tr id="parameter-item_key">
    <td><CopyableCode code="item_key" /></td>
    <td><code>string</code></td>
    <td>Optional primary key value to retrieve a specific item. Cannot be used together with the filter parameter.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Optional field to limit the number of items to return per page for pagination. Up to 100 items can be returned per page.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Optional field to offset the number of items to skip from the beginning of the result set for pagination.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Optional field to sort results by. Prefix with '-' for descending order (e.g., '-created_at').</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_datastore_items"
    values={[
        { label: 'list_datastore_items', value: 'list_datastore_items' }
    ]}
>
<TabItem value="list_datastore_items">

Lists items from a datastore. You can filter the results by specifying either an item key or a filter query parameter, but not both at the same time. Supports server-side pagination for large datasets.

```sql
SELECT
id,
attributes,
type
FROM datadog.actions.datastore_items
WHERE datastore_id = '{{ datastore_id }}' -- required
AND filter = '{{ filter }}'
AND item_key = '{{ item_key }}'
AND page[limit] = '{{ page[limit] }}'
AND page[offset] = '{{ page[offset] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="bulk_write_datastore_items"
    values={[
        { label: 'bulk_write_datastore_items', value: 'bulk_write_datastore_items' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="bulk_write_datastore_items">

Creates or replaces multiple items in a datastore by their keys in a single operation.

```sql
INSERT INTO datadog.actions.datastore_items (
data,
datastore_id
)
SELECT 
'{{ data }}',
'{{ datastore_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datastore_items
  props:
    - name: datastore_id
      value: "{{ datastore_id }}"
      description: Required parameter for the datastore_items resource.
    - name: data
      description: |
        Data wrapper containing the items to insert and their configuration for the bulk insert operation.
      value:
        attributes:
          conflict_mode: "{{ conflict_mode }}"
          values: "{{ values }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_datastore_item"
    values={[
        { label: 'update_datastore_item', value: 'update_datastore_item' }
    ]}
>
<TabItem value="update_datastore_item">

Partially updates an item in a datastore by its key.

```sql
UPDATE datadog.actions.datastore_items
SET 
data = '{{ data }}'
WHERE 
datastore_id = '{{ datastore_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_datastore_item"
    values={[
        { label: 'delete_datastore_item', value: 'delete_datastore_item' }
    ]}
>
<TabItem value="delete_datastore_item">

Deletes an item from a datastore by its key.

```sql
DELETE FROM datadog.actions.datastore_items
WHERE datastore_id = '{{ datastore_id }}' --required
;
```
</TabItem>
</Tabs>
