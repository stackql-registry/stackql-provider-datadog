--- 
title: incident_impacts
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_impacts
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

Creates, updates, deletes, gets or lists an <code>incident_impacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_impacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_impacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_incident_impacts"
    values={[
        { label: 'list_incident_impacts', value: 'list_incident_impacts' }
    ]}
>
<TabItem value="list_incident_impacts">

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
    <td>The incident impact's ID. (example: 00000000-0000-0000-1234-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The incident impact's attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The incident impact's resource relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident impact resource type. (incident_impacts) (default: incident_impacts, example: incident_impacts)</td>
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
    <td><a href="#list_incident_impacts"><CopyableCode code="list_incident_impacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get all impacts for an incident.</td>
</tr>
<tr>
    <td><a href="#create_incident_impact"><CopyableCode code="create_incident_impact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Create an impact for an incident.</td>
</tr>
<tr>
    <td><a href="#patch_incident_impact"><CopyableCode code="patch_incident_impact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-impact_id"><code>impact_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Update an incident impact.</td>
</tr>
<tr>
    <td><a href="#delete_incident_impact"><CopyableCode code="delete_incident_impact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-impact_id"><code>impact_id</code></a></td>
    <td></td>
    <td>Delete an incident impact.</td>
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
<tr id="parameter-impact_id">
    <td><CopyableCode code="impact_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident impact.</td>
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
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>array</code></td>
    <td>Specifies which related resources should be included in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_incident_impacts"
    values={[
        { label: 'list_incident_impacts', value: 'list_incident_impacts' }
    ]}
>
<TabItem value="list_incident_impacts">

Get all impacts for an incident.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_impacts
WHERE incident_id = '{{ incident_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_impact"
    values={[
        { label: 'create_incident_impact', value: 'create_incident_impact' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_impact">

Create an impact for an incident.

```sql
INSERT INTO datadog.service_management.incident_impacts (
data,
incident_id,
include
)
SELECT 
'{{ data }}' /* required */,
'{{ incident_id }}',
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_impacts
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_impacts resource.
    - name: data
      description: |
        Incident impact data for a create request.
      value:
        attributes:
          description: "{{ description }}"
          end_at: "{{ end_at }}"
          fields: "{{ fields }}"
          start_at: "{{ start_at }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Specifies which related resources should be included in the response.
      description: Specifies which related resources should be included in the response.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_incident_impact"
    values={[
        { label: 'patch_incident_impact', value: 'patch_incident_impact' }
    ]}
>
<TabItem value="patch_incident_impact">

Update an incident impact.

```sql
UPDATE datadog.service_management.incident_impacts
SET 
data = '{{ data }}'
WHERE 
incident_id = '{{ incident_id }}' --required
AND impact_id = '{{ impact_id }}' --required
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
    defaultValue="delete_incident_impact"
    values={[
        { label: 'delete_incident_impact', value: 'delete_incident_impact' }
    ]}
>
<TabItem value="delete_incident_impact">

Delete an incident impact.

```sql
DELETE FROM datadog.service_management.incident_impacts
WHERE incident_id = '{{ incident_id }}' --required
AND impact_id = '{{ impact_id }}' --required
;
```
</TabItem>
</Tabs>
