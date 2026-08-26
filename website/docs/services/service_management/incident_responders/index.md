--- 
title: incident_responders
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_responders
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

Creates, updates, deletes, gets or lists an <code>incident_responders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_responders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_responders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_responder"
    values={[
        { label: 'get_incident_responder', value: 'get_incident_responder' },
        { label: 'list_incident_responders', value: 'list_incident_responders' }
    ]}
>
<TabItem value="get_incident_responder">

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
    <td>The responder identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident responder in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for an incident responder.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident responder resource type. (incident_responders) (example: incident_responders)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_responders">

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
    <td>The responder identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident responder in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for an incident responder.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident responder resource type. (incident_responders) (example: incident_responders)</td>
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
    <td><a href="#get_incident_responder"><CopyableCode code="get_incident_responder" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-responder_id"><code>responder_id</code></a></td>
    <td></td>
    <td>Get a single responder for an incident.</td>
</tr>
<tr>
    <td><a href="#list_incident_responders"><CopyableCode code="list_incident_responders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td></td>
    <td>List all responders for an incident.</td>
</tr>
<tr>
    <td><a href="#create_incident_responder"><CopyableCode code="create_incident_responder" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Add a responder to an incident.</td>
</tr>
<tr>
    <td><a href="#delete_incident_responder"><CopyableCode code="delete_incident_responder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-responder_id"><code>responder_id</code></a></td>
    <td></td>
    <td>Remove a responder from an incident.</td>
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
<tr id="parameter-incident_id">
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident.</td>
</tr>
<tr id="parameter-responder_id">
    <td><CopyableCode code="responder_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the incident responder.</td>
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
    defaultValue="get_incident_responder"
    values={[
        { label: 'get_incident_responder', value: 'get_incident_responder' },
        { label: 'list_incident_responders', value: 'list_incident_responders' }
    ]}
>
<TabItem value="get_incident_responder">

Get a single responder for an incident.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_responders
WHERE incident_id = '{{ incident_id }}' -- required
AND responder_id = '{{ responder_id }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_responders">

List all responders for an incident.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_responders
WHERE incident_id = '{{ incident_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_responder"
    values={[
        { label: 'create_incident_responder', value: 'create_incident_responder' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_responder">

Add a responder to an incident.

```sql
INSERT INTO datadog.service_management.incident_responders (
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
- name: incident_responders
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_responders resource.
    - name: data
      description: |
        Incident responder data in a create request.
      value:
        relationships:
          user:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_responder"
    values={[
        { label: 'delete_incident_responder', value: 'delete_incident_responder' }
    ]}
>
<TabItem value="delete_incident_responder">

Remove a responder from an incident.

```sql
DELETE FROM datadog.service_management.incident_responders
WHERE incident_id = '{{ incident_id }}' --required
AND responder_id = '{{ responder_id }}' --required
;
```
</TabItem>
</Tabs>
