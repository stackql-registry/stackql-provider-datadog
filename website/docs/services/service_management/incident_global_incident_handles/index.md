--- 
title: incident_global_incident_handles
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_global_incident_handles
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

Creates, updates, deletes, gets or lists an <code>incident_global_incident_handles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_global_incident_handles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_global_incident_handles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_global_incident_handles"
    values={[
        { label: 'list_global_incident_handles', value: 'list_global_incident_handles' }
    ]}
>
<TabItem value="list_global_incident_handles">

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
    <td>The ID of the incident handle (example: 12ceee6d-a7c0-4407-bc54-30e54140d7f0)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Incident handle attributes for responses</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships associated with an incident handle response, including linked users and incident type.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident handle resource type (incidents_handles) (example: incidents_handles)</td>
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
    <td><a href="#list_global_incident_handles"><CopyableCode code="list_global_incident_handles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieve a list of global incident handles.</td>
</tr>
<tr>
    <td><a href="#create_global_incident_handle"><CopyableCode code="create_global_incident_handle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Create a new global incident handle.</td>
</tr>
<tr>
    <td><a href="#update_global_incident_handle"><CopyableCode code="update_global_incident_handle" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Update an existing global incident handle.</td>
</tr>
<tr>
    <td><a href="#delete_global_incident_handle"><CopyableCode code="delete_global_incident_handle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete a global incident handle.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of related resources to include in the response</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_global_incident_handles"
    values={[
        { label: 'list_global_incident_handles', value: 'list_global_incident_handles' }
    ]}
>
<TabItem value="list_global_incident_handles">

Retrieve a list of global incident handles.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_global_incident_handles
WHERE include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_global_incident_handle"
    values={[
        { label: 'create_global_incident_handle', value: 'create_global_incident_handle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_global_incident_handle">

Create a new global incident handle.

```sql
INSERT INTO datadog.service_management.incident_global_incident_handles (
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
- name: incident_global_incident_handles
  props:
    - name: data
      description: |
        Data object representing an incident handle in a create or update request.
      value:
        attributes:
          fields:
            severity:
              - "{{ severity }}"
          name: "{{ name }}"
        id: "{{ id }}"
        relationships:
          commander_user:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
          incident_type:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of related resources to include in the response
      description: Comma-separated list of related resources to include in the response
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_global_incident_handle"
    values={[
        { label: 'update_global_incident_handle', value: 'update_global_incident_handle' }
    ]}
>
<TabItem value="update_global_incident_handle">

Update an existing global incident handle.

```sql
REPLACE datadog.service_management.incident_global_incident_handles
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_global_incident_handle"
    values={[
        { label: 'delete_global_incident_handle', value: 'delete_global_incident_handle' }
    ]}
>
<TabItem value="delete_global_incident_handle">

Delete a global incident handle.

```sql
DELETE FROM datadog.service_management.incident_global_incident_handles
;
```
</TabItem>
</Tabs>
