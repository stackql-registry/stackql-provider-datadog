--- 
title: notebooks
hide_title: false
hide_table_of_contents: false
keywords:
  - notebooks
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>notebooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.notebooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notebook"
    values={[
        { label: 'get_notebook', value: 'get_notebook' },
        { label: 'list_notebooks', value: 'list_notebooks' }
    ]}
>
<TabItem value="get_notebook">

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
    <td><code>integer (int64)</code></td>
    <td>Unique notebook ID, assigned when you create the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Notebook resource. (notebooks) (default: notebooks, example: notebooks)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notebooks">

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
    <td><code>integer (int64)</code></td>
    <td>Unique notebook ID, assigned when you create the notebook.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a notebook in get all response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Notebook resource. (notebooks) (default: notebooks, example: notebooks)</td>
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
    <td><a href="#get_notebook"><CopyableCode code="get_notebook" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-notebook_id"><code>notebook_id</code></a></td>
    <td></td>
    <td>Get a notebook using the specified notebook ID.</td>
</tr>
<tr>
    <td><a href="#list_notebooks"><CopyableCode code="list_notebooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-author_handle"><code>author_handle</code></a>, <a href="#parameter-exclude_author_handle"><code>exclude_author_handle</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-sort_field"><code>sort_field</code></a>, <a href="#parameter-sort_dir"><code>sort_dir</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include_cells"><code>include_cells</code></a>, <a href="#parameter-is_template"><code>is_template</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook&lt;br /&gt;`name` or author `handle`.</td>
</tr>
<tr>
    <td><a href="#create_notebook"><CopyableCode code="create_notebook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a notebook using the specified options.</td>
</tr>
<tr>
    <td><a href="#update_notebook"><CopyableCode code="update_notebook" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-notebook_id"><code>notebook_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a notebook using the specified ID.</td>
</tr>
<tr>
    <td><a href="#delete_notebook"><CopyableCode code="delete_notebook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-notebook_id"><code>notebook_id</code></a></td>
    <td></td>
    <td>Delete a notebook using the specified ID.</td>
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
<tr id="parameter-notebook_id">
    <td><CopyableCode code="notebook_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Unique ID, assigned when you create the notebook.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-author_handle">
    <td><CopyableCode code="author_handle" /></td>
    <td><code>string</code></td>
    <td>Return notebooks created by the given `author_handle`.</td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of notebooks to be returned.</td>
</tr>
<tr id="parameter-exclude_author_handle">
    <td><CopyableCode code="exclude_author_handle" /></td>
    <td><code>string</code></td>
    <td>Return notebooks not created by the given `author_handle`.</td>
</tr>
<tr id="parameter-include_cells">
    <td><CopyableCode code="include_cells" /></td>
    <td><code>boolean</code></td>
    <td>Value of `false` excludes the `cells` and global `time` for each notebook.</td>
</tr>
<tr id="parameter-is_template">
    <td><CopyableCode code="is_template" /></td>
    <td><code>boolean</code></td>
    <td>True value returns only template notebooks. Default is false (returns only non-template notebooks).</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Return only notebooks with `query` string in notebook name or author handle.</td>
</tr>
<tr id="parameter-sort_dir">
    <td><CopyableCode code="sort_dir" /></td>
    <td><code>string</code></td>
    <td>Sort by direction `asc` or `desc`.</td>
</tr>
<tr id="parameter-sort_field">
    <td><CopyableCode code="sort_field" /></td>
    <td><code>string</code></td>
    <td>Sort by field `modified`, `name`, or `created`.</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>The index of the first notebook you want returned.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>If type is provided, returns only notebooks with that metadata type. Default does not have type filtering.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_notebook"
    values={[
        { label: 'get_notebook', value: 'get_notebook' },
        { label: 'list_notebooks', value: 'list_notebooks' }
    ]}
>
<TabItem value="get_notebook">

Get a notebook using the specified notebook ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.dashboards.notebooks
WHERE notebook_id = '{{ notebook_id }}' -- required
;
```
</TabItem>
<TabItem value="list_notebooks">

Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook&lt;br /&gt;`name` or author `handle`.

```sql
SELECT
id,
attributes,
type
FROM datadog.dashboards.notebooks
WHERE author_handle = '{{ author_handle }}'
AND exclude_author_handle = '{{ exclude_author_handle }}'
AND start = '{{ start }}'
AND count = '{{ count }}'
AND sort_field = '{{ sort_field }}'
AND sort_dir = '{{ sort_dir }}'
AND query = '{{ query }}'
AND include_cells = '{{ include_cells }}'
AND is_template = '{{ is_template }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notebook"
    values={[
        { label: 'create_notebook', value: 'create_notebook' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notebook">

Create a notebook using the specified options.

```sql
INSERT INTO datadog.dashboards.notebooks (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notebooks
  props:
    - name: data
      description: |
        The data for a notebook create request.
      value:
        attributes:
          cells:
            - attributes:
                definition:
                  text: "{{ text }}"
                  type: "{{ type }}"
                graph_size: "{{ graph_size }}"
                split_by:
                  keys: "{{ keys }}"
                  tags: "{{ tags }}"
                time:
                  live_span: "{{ live_span }}"
                  end: "{{ end }}"
                  live: {{ live }}
                  start: "{{ start }}"
              type: "{{ type }}"
          metadata:
            is_template: {{ is_template }}
            take_snapshots: {{ take_snapshots }}
            type: "{{ type }}"
          name: "{{ name }}"
          status: "{{ status }}"
          template_variables:
            - available_values: "{{ available_values }}"
              available_values_query:
                data_source: "{{ data_source }}"
                group_by:
                  - facet: "{{ facet }}"
                search:
                  query: "{{ query }}"
                query: "{{ query }}"
              data_source_mappings: "{{ data_source_mappings }}"
              default: "{{ default }}"
              defaults: "{{ defaults }}"
              name: "{{ name }}"
              placement: "{{ placement }}"
              prefix: "{{ prefix }}"
              type: "{{ type }}"
          time:
            live_span: "{{ live_span }}"
            end: "{{ end }}"
            live: {{ live }}
            start: "{{ start }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_notebook"
    values={[
        { label: 'update_notebook', value: 'update_notebook' }
    ]}
>
<TabItem value="update_notebook">

Update a notebook using the specified ID.

```sql
REPLACE datadog.dashboards.notebooks
SET 
data = '{{ data }}'
WHERE 
notebook_id = '{{ notebook_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notebook"
    values={[
        { label: 'delete_notebook', value: 'delete_notebook' }
    ]}
>
<TabItem value="delete_notebook">

Delete a notebook using the specified ID.

```sql
DELETE FROM datadog.dashboards.notebooks
WHERE notebook_id = '{{ notebook_id }}' --required
;
```
</TabItem>
</Tabs>
