--- 
title: restriction_query_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - restriction_query_roles
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

Creates, updates, deletes, gets or lists a <code>restriction_query_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restriction_query_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.restriction_query_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_role_restriction_query"
    values={[
        { label: 'get_role_restriction_query', value: 'get_role_restriction_query' },
        { label: 'list_restriction_query_roles', value: 'list_restriction_query_roles' }
    ]}
>
<TabItem value="get_role_restriction_query">

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
<TabItem value="list_restriction_query_roles">

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
    <td>ID of the role. (example: &lt;ROLE_ID&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the role for a restriction query.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Roles type. (roles) (default: roles, example: roles)</td>
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
    <td><a href="#get_role_restriction_query"><CopyableCode code="get_role_restriction_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Get restriction query for a given role.</td>
</tr>
<tr>
    <td><a href="#list_restriction_query_roles"><CopyableCode code="list_restriction_query_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restriction_query_id"><code>restriction_query_id</code></a></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>Returns all roles that have a given restriction query.</td>
</tr>
<tr>
    <td><a href="#add_role_to_restriction_query"><CopyableCode code="add_role_to_restriction_query" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restriction_query_id"><code>restriction_query_id</code></a></td>
    <td></td>
    <td>Adds a role to a restriction query.&lt;br /&gt;&lt;br /&gt;**Note**: This operation automatically grants the `logs_read_data` permission to the role if it doesn't already have it.</td>
</tr>
<tr>
    <td><a href="#remove_role_from_restriction_query"><CopyableCode code="remove_role_from_restriction_query" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restriction_query_id"><code>restriction_query_id</code></a></td>
    <td></td>
    <td>Removes a role from a restriction query.</td>
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
<tr id="parameter-role_id">
    <td><CopyableCode code="role_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the role.</td>
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
    defaultValue="get_role_restriction_query"
    values={[
        { label: 'get_role_restriction_query', value: 'get_role_restriction_query' },
        { label: 'list_restriction_query_roles', value: 'list_restriction_query_roles' }
    ]}
>
<TabItem value="get_role_restriction_query">

Get restriction query for a given role.

```sql
SELECT
id,
attributes,
type
FROM datadog.logs.restriction_query_roles
WHERE role_id = '{{ role_id }}' -- required
;
```
</TabItem>
<TabItem value="list_restriction_query_roles">

Returns all roles that have a given restriction query.

```sql
SELECT
id,
attributes,
type
FROM datadog.logs.restriction_query_roles
WHERE restriction_query_id = '{{ restriction_query_id }}' -- required
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_role_to_restriction_query"
    values={[
        { label: 'add_role_to_restriction_query', value: 'add_role_to_restriction_query' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_role_to_restriction_query">

Adds a role to a restriction query.&lt;br /&gt;&lt;br /&gt;**Note**: This operation automatically grants the `logs_read_data` permission to the role if it doesn't already have it.

```sql
INSERT INTO datadog.logs.restriction_query_roles (
data,
restriction_query_id
)
SELECT 
'{{ data }}',
'{{ restriction_query_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: restriction_query_roles
  props:
    - name: restriction_query_id
      value: "{{ restriction_query_id }}"
      description: Required parameter for the restriction_query_roles resource.
    - name: data
      description: |
        Relationship to role object.
      value:
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_role_from_restriction_query"
    values={[
        { label: 'remove_role_from_restriction_query', value: 'remove_role_from_restriction_query' }
    ]}
>
<TabItem value="remove_role_from_restriction_query">

Removes a role from a restriction query.

```sql
DELETE FROM datadog.logs.restriction_query_roles
WHERE restriction_query_id = '{{ restriction_query_id }}' --required
;
```
</TabItem>
</Tabs>
