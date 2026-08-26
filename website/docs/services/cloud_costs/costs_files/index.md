--- 
title: costs_files
hide_title: false
hide_table_of_contents: false
keywords:
  - costs_files
  - cloud_costs
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

Creates, updates, deletes, gets or lists a <code>costs_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="costs_files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.costs_files" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_costs_file"
    values={[
        { label: 'get_custom_costs_file', value: 'get_custom_costs_file' },
        { label: 'list_custom_costs_files', value: 'list_custom_costs_files' }
    ]}
>
<TabItem value="get_custom_costs_file">

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
    <td>ID of the Custom Costs metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Schema of a cost file's metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Custom Costs file metadata.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_costs_files">

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
    <td>ID of the Custom Costs metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Schema of a Custom Costs metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Custom Costs file metadata.</td>
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
    <td><a href="#get_custom_costs_file"><CopyableCode code="get_custom_costs_file" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-file_id"><code>file_id</code></a></td>
    <td></td>
    <td>Fetch the specified Custom Costs file.</td>
</tr>
<tr>
    <td><a href="#list_custom_costs_files"><CopyableCode code="list_custom_costs_files" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-filter[status]"><code>filter[status]</code></a>, <a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-filter[provider]"><code>filter[provider]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>List the Custom Costs files.</td>
</tr>
<tr>
    <td><a href="#delete_custom_costs_file"><CopyableCode code="delete_custom_costs_file" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-file_id"><code>file_id</code></a></td>
    <td></td>
    <td>Delete the specified Custom Costs file.</td>
</tr>
<tr>
    <td><a href="#upload_custom_costs_file"><CopyableCode code="upload_custom_costs_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Upload a Custom Costs file.</td>
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
<tr id="parameter-file_id">
    <td><CopyableCode code="file_id" /></td>
    <td><code>string</code></td>
    <td>File ID.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter files by name with case-insensitive substring matching.</td>
</tr>
<tr id="parameter-filter[provider]">
    <td><CopyableCode code="filter[provider]" /></td>
    <td><code>array</code></td>
    <td>Filter by provider.</td>
</tr>
<tr id="parameter-filter[status]">
    <td><CopyableCode code="filter[status]" /></td>
    <td><code>string</code></td>
    <td>Filter by file status</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number for pagination</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page size for pagination</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort key with optional descending prefix</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_costs_file"
    values={[
        { label: 'get_custom_costs_file', value: 'get_custom_costs_file' },
        { label: 'list_custom_costs_files', value: 'list_custom_costs_files' }
    ]}
>
<TabItem value="get_custom_costs_file">

Fetch the specified Custom Costs file.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.costs_files
WHERE file_id = '{{ file_id }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_costs_files">

List the Custom Costs files.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.costs_files
WHERE page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
AND filter[status] = '{{ filter[status] }}'
AND filter[name] = '{{ filter[name] }}'
AND filter[provider] = '{{ filter[provider] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_costs_file"
    values={[
        { label: 'delete_custom_costs_file', value: 'delete_custom_costs_file' }
    ]}
>
<TabItem value="delete_custom_costs_file">

Delete the specified Custom Costs file.

```sql
DELETE FROM datadog.cloud_costs.costs_files
WHERE file_id = '{{ file_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="upload_custom_costs_file"
    values={[
        { label: 'upload_custom_costs_file', value: 'upload_custom_costs_file' }
    ]}
>
<TabItem value="upload_custom_costs_file">

Upload a Custom Costs file.

```sql
EXEC datadog.cloud_costs.costs_files.upload_custom_costs_file 
;
```
</TabItem>
</Tabs>
