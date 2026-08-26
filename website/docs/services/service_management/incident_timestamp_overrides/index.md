--- 
title: incident_timestamp_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_timestamp_overrides
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

Creates, updates, deletes, gets or lists an <code>incident_timestamp_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_timestamp_overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_timestamp_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_timestamp_overrides"
    values={[
        { label: 'list_timestamp_overrides', value: 'list_timestamp_overrides' }
    ]}
>
<TabItem value="list_timestamp_overrides">

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
    <td>The timestamp override identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a timestamp override in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a timestamp override.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident timestamp override resource type. (incidents_timestamp_overrides) (example: incidents_timestamp_overrides)</td>
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
    <td><a href="#list_timestamp_overrides"><CopyableCode code="list_timestamp_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td></td>
    <td>List all timestamp overrides for an incident.</td>
</tr>
<tr>
    <td><a href="#create_timestamp_override"><CopyableCode code="create_timestamp_override" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a timestamp override for an incident.</td>
</tr>
<tr>
    <td><a href="#update_timestamp_override"><CopyableCode code="update_timestamp_override" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a timestamp override for an incident.</td>
</tr>
<tr>
    <td><a href="#delete_timestamp_override"><CopyableCode code="delete_timestamp_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a timestamp override for an incident.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the timestamp override.</td>
</tr>
<tr id="parameter-incident_id">
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident.</td>
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
    defaultValue="list_timestamp_overrides"
    values={[
        { label: 'list_timestamp_overrides', value: 'list_timestamp_overrides' }
    ]}
>
<TabItem value="list_timestamp_overrides">

List all timestamp overrides for an incident.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_timestamp_overrides
WHERE incident_id = '{{ incident_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_timestamp_override"
    values={[
        { label: 'create_timestamp_override', value: 'create_timestamp_override' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_timestamp_override">

Create a timestamp override for an incident.

```sql
INSERT INTO datadog.service_management.incident_timestamp_overrides (
data,
incident_id
)
SELECT 
'{{ data }}' /* required */,
'{{ incident_id }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_timestamp_overrides
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_timestamp_overrides resource.
    - name: data
      description: |
        Timestamp override data in a create request.
      value:
        attributes:
          timestamp_type: "{{ timestamp_type }}"
          timestamp_value: "{{ timestamp_value }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_timestamp_override"
    values={[
        { label: 'update_timestamp_override', value: 'update_timestamp_override' }
    ]}
>
<TabItem value="update_timestamp_override">

Update a timestamp override for an incident.

```sql
UPDATE datadog.service_management.incident_timestamp_overrides
SET 
data = '{{ data }}'
WHERE 
incident_id = '{{ incident_id }}' --required
AND id = '{{ id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_timestamp_override"
    values={[
        { label: 'delete_timestamp_override', value: 'delete_timestamp_override' }
    ]}
>
<TabItem value="delete_timestamp_override">

Delete a timestamp override for an incident.

```sql
DELETE FROM datadog.service_management.incident_timestamp_overrides
WHERE incident_id = '{{ incident_id }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
