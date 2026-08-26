--- 
title: archive_read_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_read_roles
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

Creates, updates, deletes, gets or lists an <code>archive_read_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archive_read_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.archive_read_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_archive_read_roles"
    values={[
        { label: 'list_archive_read_roles', value: 'list_archive_read_roles' }
    ]}
>
<TabItem value="list_archive_read_roles">

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
    <td><a href="#list_archive_read_roles"><CopyableCode code="list_archive_read_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-archive_id"><code>archive_id</code></a></td>
    <td></td>
    <td>Returns all read roles a given archive is restricted to.</td>
</tr>
<tr>
    <td><a href="#add_read_role_to_archive"><CopyableCode code="add_read_role_to_archive" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-archive_id"><code>archive_id</code></a></td>
    <td></td>
    <td>Adds a read role to an archive. (&#91;Roles API&#93;(https:​//docs.datadoghq.com/api/v2/roles/))</td>
</tr>
<tr>
    <td><a href="#remove_role_from_archive"><CopyableCode code="remove_role_from_archive" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-archive_id"><code>archive_id</code></a></td>
    <td></td>
    <td>Removes a role from an archive. (&#91;Roles API&#93;(https:​//docs.datadoghq.com/api/v2/roles/))</td>
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
<tr id="parameter-archive_id">
    <td><CopyableCode code="archive_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the archive.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_archive_read_roles"
    values={[
        { label: 'list_archive_read_roles', value: 'list_archive_read_roles' }
    ]}
>
<TabItem value="list_archive_read_roles">

Returns all read roles a given archive is restricted to.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.logs.archive_read_roles
WHERE archive_id = '{{ archive_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_read_role_to_archive"
    values={[
        { label: 'add_read_role_to_archive', value: 'add_read_role_to_archive' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_read_role_to_archive">

Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))

```sql
INSERT INTO datadog.logs.archive_read_roles (
data,
archive_id
)
SELECT 
'{{ data }}',
'{{ archive_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: archive_read_roles
  props:
    - name: archive_id
      value: "{{ archive_id }}"
      description: Required parameter for the archive_read_roles resource.
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
    defaultValue="remove_role_from_archive"
    values={[
        { label: 'remove_role_from_archive', value: 'remove_role_from_archive' }
    ]}
>
<TabItem value="remove_role_from_archive">

Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))

```sql
DELETE FROM datadog.logs.archive_read_roles
WHERE archive_id = '{{ archive_id }}' --required
;
```
</TabItem>
</Tabs>
