--- 
title: ms_teams_tenant_based_handles
hide_title: false
hide_table_of_contents: false
keywords:
  - ms_teams_tenant_based_handles
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

Creates, updates, deletes, gets or lists a <code>ms_teams_tenant_based_handles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ms_teams_tenant_based_handles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.ms_teams_tenant_based_handles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tenant_based_handle"
    values={[
        { label: 'get_tenant_based_handle', value: 'get_tenant_based_handle' },
        { label: 'list_tenant_based_handles', value: 'list_tenant_based_handles' }
    ]}
>
<TabItem value="get_tenant_based_handle">

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
    <td>The ID of the tenant-based handle. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Tenant-based handle attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Specifies the tenant-based handle resource type. (tenant-based-handle) (default: tenant-based-handle, example: tenant-based-handle)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tenant_based_handles">

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
    <td>The ID of the tenant-based handle. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Tenant-based handle attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Tenant-based handle resource type. (ms-teams-tenant-based-handle-info) (default: ms-teams-tenant-based-handle-info, example: ms-teams-tenant-based-handle-info)</td>
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
    <td><a href="#get_tenant_based_handle"><CopyableCode code="get_tenant_based_handle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-handle_id"><code>handle_id</code></a></td>
    <td></td>
    <td>Get the tenant, team, and channel information of a tenant-based handle from the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#list_tenant_based_handles"><CopyableCode code="list_tenant_based_handles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-tenant_id"><code>tenant_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Get a list of all tenant-based handles from the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#create_tenant_based_handle"><CopyableCode code="create_tenant_based_handle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a tenant-based handle in the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#update_tenant_based_handle"><CopyableCode code="update_tenant_based_handle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-handle_id"><code>handle_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a tenant-based handle from the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#delete_tenant_based_handle"><CopyableCode code="delete_tenant_based_handle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-handle_id"><code>handle_id</code></a></td>
    <td></td>
    <td>Delete a tenant-based handle from the Datadog Microsoft Teams integration.</td>
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
<tr id="parameter-handle_id">
    <td><CopyableCode code="handle_id" /></td>
    <td><code>string</code></td>
    <td>Your tenant-based handle id.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Your tenant-based handle name.</td>
</tr>
<tr id="parameter-tenant_id">
    <td><CopyableCode code="tenant_id" /></td>
    <td><code>string</code></td>
    <td>Your tenant id.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tenant_based_handle"
    values={[
        { label: 'get_tenant_based_handle', value: 'get_tenant_based_handle' },
        { label: 'list_tenant_based_handles', value: 'list_tenant_based_handles' }
    ]}
>
<TabItem value="get_tenant_based_handle">

Get the tenant, team, and channel information of a tenant-based handle from the Datadog Microsoft Teams integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.ms_teams_tenant_based_handles
WHERE handle_id = '{{ handle_id }}' -- required
;
```
</TabItem>
<TabItem value="list_tenant_based_handles">

Get a list of all tenant-based handles from the Datadog Microsoft Teams integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.ms_teams_tenant_based_handles
WHERE tenant_id = '{{ tenant_id }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tenant_based_handle"
    values={[
        { label: 'create_tenant_based_handle', value: 'create_tenant_based_handle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tenant_based_handle">

Create a tenant-based handle in the Datadog Microsoft Teams integration.

```sql
INSERT INTO datadog.integrations.ms_teams_tenant_based_handles (
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
- name: ms_teams_tenant_based_handles
  props:
    - name: data
      description: |
        Tenant-based handle data from a response.
      value:
        attributes:
          channel_id: "{{ channel_id }}"
          name: "{{ name }}"
          team_id: "{{ team_id }}"
          tenant_id: "{{ tenant_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tenant_based_handle"
    values={[
        { label: 'update_tenant_based_handle', value: 'update_tenant_based_handle' }
    ]}
>
<TabItem value="update_tenant_based_handle">

Update a tenant-based handle from the Datadog Microsoft Teams integration.

```sql
UPDATE datadog.integrations.ms_teams_tenant_based_handles
SET 
data = '{{ data }}'
WHERE 
handle_id = '{{ handle_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tenant_based_handle"
    values={[
        { label: 'delete_tenant_based_handle', value: 'delete_tenant_based_handle' }
    ]}
>
<TabItem value="delete_tenant_based_handle">

Delete a tenant-based handle from the Datadog Microsoft Teams integration.

```sql
DELETE FROM datadog.integrations.ms_teams_tenant_based_handles
WHERE handle_id = '{{ handle_id }}' --required
;
```
</TabItem>
</Tabs>
