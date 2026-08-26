--- 
title: incident_user_defined_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_user_defined_roles
  - service_management
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

Creates, updates, deletes, gets or lists an <code>incident_user_defined_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_user_defined_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_user_defined_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_user_defined_role"
    values={[
        { label: 'get_incident_user_defined_role', value: 'get_incident_user_defined_role' },
        { label: 'list_incident_user_defined_roles', value: 'list_incident_user_defined_roles' }
    ]}
>
<TabItem value="get_incident_user_defined_role">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the user-defined role. (example: 00000000-0000-0000-0000-000000000002)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident user-defined role.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a user-defined role response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident user-defined role resource type. (incident_user_defined_roles) (example: incident_user_defined_roles)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_user_defined_roles">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the user-defined role. (example: 00000000-0000-0000-0000-000000000002)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident user-defined role.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a user-defined role response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident user-defined role resource type. (incident_user_defined_roles) (example: incident_user_defined_roles)</td>
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
    <td><a href="#get_incident_user_defined_role"><CopyableCode code="get_incident_user_defined_role" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieve a single user-defined role for incidents.</td>
</tr>
<tr>
    <td><a href="#list_incident_user_defined_roles"><CopyableCode code="list_incident_user_defined_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[incident-type]"><code>filter[incident-type]</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>List all user-defined roles for incidents.</td>
</tr>
<tr>
    <td><a href="#create_incident_user_defined_role"><CopyableCode code="create_incident_user_defined_role" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Create a new user-defined role for incidents.</td>
</tr>
<tr>
    <td><a href="#update_incident_user_defined_role"><CopyableCode code="update_incident_user_defined_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Update an existing user-defined role for incidents.</td>
</tr>
<tr>
    <td><a href="#delete_incident_user_defined_role"><CopyableCode code="delete_incident_user_defined_role" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Delete an existing user-defined role for incidents.</td>
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
    <td><code>string (uuid)</code></td>
    <td>The UUID of the incident user-defined role.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[incident-type]">
    <td><CopyableCode code="filter[incident-type]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter roles by incident type UUID.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of related resources to include in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_user_defined_role"
    values={[
        { label: 'get_incident_user_defined_role', value: 'get_incident_user_defined_role' },
        { label: 'list_incident_user_defined_roles', value: 'list_incident_user_defined_roles' }
    ]}
>
<TabItem value="get_incident_user_defined_role">

Retrieve a single user-defined role for incidents.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_user_defined_roles
WHERE role_id = '{{ role_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_incident_user_defined_roles">

List all user-defined roles for incidents.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_user_defined_roles
WHERE filter[incident-type] = '{{ filter[incident-type] }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_user_defined_role"
    values={[
        { label: 'create_incident_user_defined_role', value: 'create_incident_user_defined_role' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_user_defined_role">

Create a new user-defined role for incidents.

```sql
INSERT INTO datadog.service_management.incident_user_defined_roles (
data,
include
)
SELECT 
'{{ data }}' /* required */,
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_user_defined_roles
  props:
    - name: data
      description: |
        Data for creating an incident user-defined role.
      value:
        attributes:
          description: "{{ description }}"
          name: "{{ name }}"
          policy:
            is_single: {{ is_single }}
        relationships:
          incident_type:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of related resources to include in the response.
      description: Comma-separated list of related resources to include in the response.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_user_defined_role"
    values={[
        { label: 'update_incident_user_defined_role', value: 'update_incident_user_defined_role' }
    ]}
>
<TabItem value="update_incident_user_defined_role">

Update an existing user-defined role for incidents.

```sql
UPDATE datadog.service_management.incident_user_defined_roles
SET 
data = '{{ data }}'
WHERE 
role_id = '{{ role_id }}' --required
AND data = '{{ data }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_user_defined_role"
    values={[
        { label: 'delete_incident_user_defined_role', value: 'delete_incident_user_defined_role' }
    ]}
>
<TabItem value="delete_incident_user_defined_role">

Delete an existing user-defined role for incidents.

```sql
DELETE FROM datadog.service_management.incident_user_defined_roles
WHERE role_id = '{{ role_id }}' --required
;
```
</TabItem>
</Tabs>
