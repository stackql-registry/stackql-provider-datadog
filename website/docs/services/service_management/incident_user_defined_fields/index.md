--- 
title: incident_user_defined_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_user_defined_fields
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

Creates, updates, deletes, gets or lists an <code>incident_user_defined_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_user_defined_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_user_defined_fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_user_defined_field"
    values={[
        { label: 'get_incident_user_defined_field', value: 'get_incident_user_defined_field' },
        { label: 'list_incident_user_defined_fields', value: 'list_incident_user_defined_fields' }
    ]}
>
<TabItem value="get_incident_user_defined_field">

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
    <td>The unique identifier of the user-defined field. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident user-defined field.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an incident user-defined field.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The incident user defined fields type. (user_defined_field) (example: user_defined_field)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_user_defined_fields">

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
    <td>The unique identifier of the user-defined field. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident user-defined field.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an incident user-defined field.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The incident user defined fields type. (user_defined_field) (example: user_defined_field)</td>
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
    <td><a href="#get_incident_user_defined_field"><CopyableCode code="get_incident_user_defined_field" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get details of an incident user-defined field.</td>
</tr>
<tr>
    <td><a href="#list_incident_user_defined_fields"><CopyableCode code="list_incident_user_defined_fields" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-include-deleted"><code>include-deleted</code></a>, <a href="#parameter-filter[incident-type]"><code>filter[incident-type]</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Get a list of all incident user-defined fields.</td>
</tr>
<tr>
    <td><a href="#create_incident_user_defined_field"><CopyableCode code="create_incident_user_defined_field" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Create an incident user-defined field.</td>
</tr>
<tr>
    <td><a href="#update_incident_user_defined_field"><CopyableCode code="update_incident_user_defined_field" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Update an incident user-defined field.</td>
</tr>
<tr>
    <td><a href="#delete_incident_user_defined_field"><CopyableCode code="delete_incident_user_defined_field" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>Delete an incident user-defined field.</td>
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
<tr id="parameter-field_id">
    <td><CopyableCode code="field_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the incident user-defined field.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[incident-type]">
    <td><CopyableCode code="filter[incident-type]" /></td>
    <td><code>string</code></td>
    <td>Filter results to fields associated with the given incident type UUID.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type".</td>
</tr>
<tr id="parameter-include-deleted">
    <td><CopyableCode code="include-deleted" /></td>
    <td><code>boolean</code></td>
    <td>When true, include soft-deleted fields in the response.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to retrieve, starting at 0.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of results to return per page. Must be between 0 and 1000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_user_defined_field"
    values={[
        { label: 'get_incident_user_defined_field', value: 'get_incident_user_defined_field' },
        { label: 'list_incident_user_defined_fields', value: 'list_incident_user_defined_fields' }
    ]}
>
<TabItem value="get_incident_user_defined_field">

Get details of an incident user-defined field.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_user_defined_fields
WHERE field_id = '{{ field_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_incident_user_defined_fields">

Get a list of all incident user-defined fields.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_user_defined_fields
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND include-deleted = '{{ include-deleted }}'
AND filter[incident-type] = '{{ filter[incident-type] }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_user_defined_field"
    values={[
        { label: 'create_incident_user_defined_field', value: 'create_incident_user_defined_field' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_user_defined_field">

Create an incident user-defined field.

```sql
INSERT INTO datadog.service_management.incident_user_defined_fields (
data,
include
)
SELECT 
'{{ data }}' /* required */,
'{{ include }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_user_defined_fields
  props:
    - name: data
      description: |
        Data for creating an incident user-defined field.
      value:
        attributes:
          category: "{{ category }}"
          collected: "{{ collected }}"
          default_value: "{{ default_value }}"
          display_name: "{{ display_name }}"
          name: "{{ name }}"
          ordinal: "{{ ordinal }}"
          required: {{ required }}
          tag_key: "{{ tag_key }}"
          type: {{ type }}
          valid_values:
            - description: "{{ description }}"
              display_name: "{{ display_name }}"
              short_description: "{{ short_description }}"
              value: "{{ value }}"
        relationships:
          incident_type:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type".
      description: Comma-separated list of related resources to include. Supported values are "last_modified_by_user", "created_by_user", and "incident_type".
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_user_defined_field"
    values={[
        { label: 'update_incident_user_defined_field', value: 'update_incident_user_defined_field' }
    ]}
>
<TabItem value="update_incident_user_defined_field">

Update an incident user-defined field.

```sql
UPDATE datadog.service_management.incident_user_defined_fields
SET 
data = '{{ data }}'
WHERE 
field_id = '{{ field_id }}' --required
AND data = '{{ data }}' --required
AND include = '{{ include}}'
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_user_defined_field"
    values={[
        { label: 'delete_incident_user_defined_field', value: 'delete_incident_user_defined_field' }
    ]}
>
<TabItem value="delete_incident_user_defined_field">

Delete an incident user-defined field.

```sql
DELETE FROM datadog.service_management.incident_user_defined_fields
WHERE field_id = '{{ field_id }}' --required
;
```
</TabItem>
</Tabs>
