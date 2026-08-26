--- 
title: restriction_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - restriction_queries
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

Creates, updates, deletes, gets or lists a <code>restriction_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restriction_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.restriction_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restriction_query"
    values={[
        { label: 'get_restriction_query', value: 'get_restriction_query' },
        { label: 'list_restriction_queries', value: 'list_restriction_queries' }
    ]}
>
<TabItem value="get_restriction_query">

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
    <td>ID of the restriction query. (example: 79a0e60a-644a-11ea-ad29-43329f7f58b5)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the restriction query.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the user object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Restriction query resource type. (logs_restriction_queries) (default: logs_restriction_queries, example: logs_restriction_queries)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_restriction_queries">

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
    <td>ID of the restriction query. (example: 79a0e60a-644a-11ea-ad29-43329f7f58b5)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the restriction query.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Restriction queries type. (default: logs_restriction_queries, example: logs_restriction_queries)</td>
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
    <td><a href="#get_restriction_query"><CopyableCode code="get_restriction_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restriction_query_id"><code>restriction_query_id</code></a></td>
    <td></td>
    <td>Get a restriction query in the organization specified by the restriction query's `restriction_query_id`.</td>
</tr>
<tr>
    <td><a href="#list_restriction_queries"><CopyableCode code="list_restriction_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>Returns all restriction queries, including their names and IDs.</td>
</tr>
<tr>
    <td><a href="#create_restriction_query"><CopyableCode code="create_restriction_query" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new restriction query for your organization.</td>
</tr>
<tr>
    <td><a href="#update_restriction_query"><CopyableCode code="update_restriction_query" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restriction_query_id"><code>restriction_query_id</code></a></td>
    <td></td>
    <td>Edit a restriction query.</td>
</tr>
<tr>
    <td><a href="#replace_restriction_query"><CopyableCode code="replace_restriction_query" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-restriction_query_id"><code>restriction_query_id</code></a></td>
    <td></td>
    <td>Replace a restriction query.</td>
</tr>
<tr>
    <td><a href="#delete_restriction_query"><CopyableCode code="delete_restriction_query" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restriction_query_id"><code>restriction_query_id</code></a></td>
    <td></td>
    <td>Deletes a restriction query.</td>
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
<tr id="parameter-restriction_query_id">
    <td><CopyableCode code="restriction_query_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the restriction query.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items to return per page. The maximum allowed value is 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restriction_query"
    values={[
        { label: 'get_restriction_query', value: 'get_restriction_query' },
        { label: 'list_restriction_queries', value: 'list_restriction_queries' }
    ]}
>
<TabItem value="get_restriction_query">

Get a restriction query in the organization specified by the restriction query's `restriction_query_id`.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.logs.restriction_queries
WHERE restriction_query_id = '{{ restriction_query_id }}' -- required
;
```
</TabItem>
<TabItem value="list_restriction_queries">

Returns all restriction queries, including their names and IDs.

```sql
SELECT
id,
attributes,
type
FROM datadog.logs.restriction_queries
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_restriction_query"
    values={[
        { label: 'create_restriction_query', value: 'create_restriction_query' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_restriction_query">

Create a new restriction query for your organization.

```sql
INSERT INTO datadog.logs.restriction_queries (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: restriction_queries
  props:
    - name: data
      description: |
        Data related to the creation of a restriction query.
      value:
        attributes:
          restriction_query: "{{ restriction_query }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_restriction_query"
    values={[
        { label: 'update_restriction_query', value: 'update_restriction_query' }
    ]}
>
<TabItem value="update_restriction_query">

Edit a restriction query.

```sql
UPDATE datadog.logs.restriction_queries
SET 
data = '{{ data }}'
WHERE 
restriction_query_id = '{{ restriction_query_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_restriction_query"
    values={[
        { label: 'replace_restriction_query', value: 'replace_restriction_query' }
    ]}
>
<TabItem value="replace_restriction_query">

Replace a restriction query.

```sql
REPLACE datadog.logs.restriction_queries
SET 
data = '{{ data }}'
WHERE 
restriction_query_id = '{{ restriction_query_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_restriction_query"
    values={[
        { label: 'delete_restriction_query', value: 'delete_restriction_query' }
    ]}
>
<TabItem value="delete_restriction_query">

Deletes a restriction query.

```sql
DELETE FROM datadog.logs.restriction_queries
WHERE restriction_query_id = '{{ restriction_query_id }}' --required
;
```
</TabItem>
</Tabs>
