--- 
title: incident_impact_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_impact_fields
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

Creates, updates, deletes, gets or lists an <code>incident_impact_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_impact_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_impact_fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_incident_impact_fields"
    values={[
        { label: 'list_incident_impact_fields', value: 'list_incident_impact_fields' }
    ]}
>
<TabItem value="list_incident_impact_fields">

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
    <td>The impact field identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an impact field in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for an impact field.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Impact field resource type. (impact_fields) (example: impact_fields)</td>
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
    <td><a href="#list_incident_impact_fields"><CopyableCode code="list_incident_impact_fields" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all impact fields for incidents.</td>
</tr>
<tr>
    <td><a href="#create_incident_impact_field"><CopyableCode code="create_incident_impact_field" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an impact field for incidents.</td>
</tr>
<tr>
    <td><a href="#update_incident_impact_field"><CopyableCode code="update_incident_impact_field" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an impact field for incidents.</td>
</tr>
<tr>
    <td><a href="#delete_incident_impact_field"><CopyableCode code="delete_incident_impact_field" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-field_id"><code>field_id</code></a></td>
    <td></td>
    <td>Delete an impact field for incidents.</td>
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
    <td><code>string (uuid)</code></td>
    <td>The UUID of the impact field.</td>
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
    defaultValue="list_incident_impact_fields"
    values={[
        { label: 'list_incident_impact_fields', value: 'list_incident_impact_fields' }
    ]}
>
<TabItem value="list_incident_impact_fields">

List all impact fields for incidents.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_impact_fields
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_impact_field"
    values={[
        { label: 'create_incident_impact_field', value: 'create_incident_impact_field' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_impact_field">

Create an impact field for incidents.

```sql
INSERT INTO datadog.service_management.incident_impact_fields (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_impact_fields
  props:
    - name: data
      description: |
        Impact field data in a create request.
      value:
        attributes:
          display_name: "{{ display_name }}"
          field_choices:
            - description: "{{ description }}"
              display_name: "{{ display_name }}"
              value: "{{ value }}"
          field_type: "{{ field_type }}"
          name: "{{ name }}"
          tag_key: "{{ tag_key }}"
        relationships:
          incident_type:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_incident_impact_field"
    values={[
        { label: 'update_incident_impact_field', value: 'update_incident_impact_field' }
    ]}
>
<TabItem value="update_incident_impact_field">

Update an impact field for incidents.

```sql
REPLACE datadog.service_management.incident_impact_fields
SET 
data = '{{ data }}'
WHERE 
field_id = '{{ field_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_impact_field"
    values={[
        { label: 'delete_incident_impact_field', value: 'delete_incident_impact_field' }
    ]}
>
<TabItem value="delete_incident_impact_field">

Delete an impact field for incidents.

```sql
DELETE FROM datadog.service_management.incident_impact_fields
WHERE field_id = '{{ field_id }}' --required
;
```
</TabItem>
</Tabs>
