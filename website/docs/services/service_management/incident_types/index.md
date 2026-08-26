--- 
title: incident_types
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_types
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

Creates, updates, deletes, gets or lists an <code>incident_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_type"
    values={[
        { label: 'get_incident_type', value: 'get_incident_type' },
        { label: 'list_incident_types', value: 'list_incident_types' }
    ]}
>
<TabItem value="get_incident_type">

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
    <td>The incident type's ID. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Incident type's attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The incident type's resource relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident type resource type. (incident_types) (default: incident_types, example: incident_types)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_types">

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
    <td>The incident type's ID. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Incident type's attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The incident type's resource relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident type resource type. (incident_types) (default: incident_types, example: incident_types)</td>
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
    <td><a href="#get_incident_type"><CopyableCode code="get_incident_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_type_id"><code>incident_type_id</code></a></td>
    <td></td>
    <td>Get incident type details.</td>
</tr>
<tr>
    <td><a href="#list_incident_types"><CopyableCode code="list_incident_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-include_deleted"><code>include_deleted</code></a></td>
    <td>Get all incident types.</td>
</tr>
<tr>
    <td><a href="#create_incident_type"><CopyableCode code="create_incident_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an incident type.</td>
</tr>
<tr>
    <td><a href="#update_incident_type"><CopyableCode code="update_incident_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_type_id"><code>incident_type_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an incident type.</td>
</tr>
<tr>
    <td><a href="#delete_incident_type"><CopyableCode code="delete_incident_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_type_id"><code>incident_type_id</code></a></td>
    <td></td>
    <td>Delete an incident type.</td>
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
<tr id="parameter-incident_type_id">
    <td><CopyableCode code="incident_type_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident type.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include_deleted">
    <td><CopyableCode code="include_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Include deleted incident types in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_type"
    values={[
        { label: 'get_incident_type', value: 'get_incident_type' },
        { label: 'list_incident_types', value: 'list_incident_types' }
    ]}
>
<TabItem value="get_incident_type">

Get incident type details.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_types
WHERE incident_type_id = '{{ incident_type_id }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_types">

Get all incident types.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_types
WHERE include_deleted = '{{ include_deleted }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_type"
    values={[
        { label: 'create_incident_type', value: 'create_incident_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_type">

Create an incident type.

```sql
INSERT INTO datadog.service_management.incident_types (
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
- name: incident_types
  props:
    - name: data
      description: |
        Incident type data for a create request.
      value:
        attributes:
          configuration:
            allow_incident_deletion: {{ allow_incident_deletion }}
            allow_workflows: {{ allow_workflows }}
            create_message: "{{ create_message }}"
            editable_timestamps: {{ editable_timestamps }}
            private_incidents: {{ private_incidents }}
            private_incidents_by_default: {{ private_incidents_by_default }}
            slug_source: "{{ slug_source }}"
            test_incidents: {{ test_incidents }}
          createdAt: "{{ createdAt }}"
          createdBy: "{{ createdBy }}"
          description: "{{ description }}"
          is_default: {{ is_default }}
          lastModifiedBy: "{{ lastModifiedBy }}"
          modifiedAt: "{{ modifiedAt }}"
          name: "{{ name }}"
          prefix: "{{ prefix }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_type"
    values={[
        { label: 'update_incident_type', value: 'update_incident_type' }
    ]}
>
<TabItem value="update_incident_type">

Update an incident type.

```sql
UPDATE datadog.service_management.incident_types
SET 
data = '{{ data }}'
WHERE 
incident_type_id = '{{ incident_type_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_type"
    values={[
        { label: 'delete_incident_type', value: 'delete_incident_type' }
    ]}
>
<TabItem value="delete_incident_type">

Delete an incident type.

```sql
DELETE FROM datadog.service_management.incident_types
WHERE incident_type_id = '{{ incident_type_id }}' --required
;
```
</TabItem>
</Tabs>
