--- 
title: roles
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
  - organization
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

Creates, updates, deletes, gets or lists a <code>roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_role"
    values={[
        { label: 'get_role', value: 'get_role' },
        { label: 'list_roles', value: 'list_roles' }
    ]}
>
<TabItem value="get_role">

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
    <td>The unique identifier of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the role object returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Roles type. (roles) (default: roles, example: roles)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_roles">

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
    <td>The unique identifier of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the role object returned by the API.</td>
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
    <td><a href="#get_role"><CopyableCode code="get_role" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Get a role in the organization specified by the role’s `role_id`.</td>
</tr>
<tr>
    <td><a href="#list_roles"><CopyableCode code="list_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-filter[id]"><code>filter[id]</code></a></td>
    <td>Returns all roles, including their names and their unique identifiers.</td>
</tr>
<tr>
    <td><a href="#create_role"><CopyableCode code="create_role" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new role for your organization.&lt;br /&gt;&lt;br /&gt;The following read permissions are automatically added to every new role, even if they are not included in the request:&lt;br /&gt;&lt;br /&gt;- Dashboards Read&lt;br /&gt;- Notebooks Read&lt;br /&gt;- Monitors Read&lt;br /&gt;- APM Read&lt;br /&gt;- Vulnerability Management Read&lt;br /&gt;- RUM Apps Read&lt;br /&gt;- Incidents Read&lt;br /&gt;- SLOs Read&lt;br /&gt;- CI Visibility Read&lt;br /&gt;- CD Visibility Read</td>
</tr>
<tr>
    <td><a href="#update_role"><CopyableCode code="update_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Edit a role. Can only be used with application keys belonging to administrators.</td>
</tr>
<tr>
    <td><a href="#delete_role"><CopyableCode code="delete_role" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Disables a role.</td>
</tr>
<tr>
    <td><a href="#clone_role"><CopyableCode code="clone_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Clone an existing role</td>
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
<tr id="parameter-role_id">
    <td><CopyableCode code="role_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the role.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter all roles by the given string.</td>
</tr>
<tr id="parameter-filter[id]">
    <td><CopyableCode code="filter[id]" /></td>
    <td><code>string</code></td>
    <td>Filter all roles by the given list of role IDs.</td>
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
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: `sort=-name`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_role"
    values={[
        { label: 'get_role', value: 'get_role' },
        { label: 'list_roles', value: 'list_roles' }
    ]}
>
<TabItem value="get_role">

Get a role in the organization specified by the role’s `role_id`.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.roles
WHERE role_id = '{{ role_id }}' -- required
;
```
</TabItem>
<TabItem value="list_roles">

Returns all roles, including their names and their unique identifiers.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.roles
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter = '{{ filter }}'
AND filter[id] = '{{ filter[id] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_role"
    values={[
        { label: 'create_role', value: 'create_role' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_role">

Create a new role for your organization.&lt;br /&gt;&lt;br /&gt;The following read permissions are automatically added to every new role, even if they are not included in the request:&lt;br /&gt;&lt;br /&gt;- Dashboards Read&lt;br /&gt;- Notebooks Read&lt;br /&gt;- Monitors Read&lt;br /&gt;- APM Read&lt;br /&gt;- Vulnerability Management Read&lt;br /&gt;- RUM Apps Read&lt;br /&gt;- Incidents Read&lt;br /&gt;- SLOs Read&lt;br /&gt;- CI Visibility Read&lt;br /&gt;- CD Visibility Read

```sql
INSERT INTO datadog.organization.roles (
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
- name: roles
  props:
    - name: data
      description: |
        Data related to the creation of a role.
      value:
        attributes:
          created_at: "{{ created_at }}"
          modified_at: "{{ modified_at }}"
          name: "{{ name }}"
          receives_permissions_from:
            - "{{ receives_permissions_from }}"
        relationships:
          permissions:
            data:
              - id: "{{ id }}"
                type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_role"
    values={[
        { label: 'update_role', value: 'update_role' }
    ]}
>
<TabItem value="update_role">

Edit a role. Can only be used with application keys belonging to administrators.

```sql
UPDATE datadog.organization.roles
SET 
data = '{{ data }}'
WHERE 
role_id = '{{ role_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_role"
    values={[
        { label: 'delete_role', value: 'delete_role' }
    ]}
>
<TabItem value="delete_role">

Disables a role.

```sql
DELETE FROM datadog.organization.roles
WHERE role_id = '{{ role_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="clone_role"
    values={[
        { label: 'clone_role', value: 'clone_role' }
    ]}
>
<TabItem value="clone_role">

Clone an existing role

```sql
EXEC datadog.organization.roles.clone_role 
@role_id='{{ role_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
