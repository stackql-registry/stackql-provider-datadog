--- 
title: incident_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_integrations
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

Creates, updates, deletes, gets or lists an <code>incident_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_integration"
    values={[
        { label: 'get_incident_integration', value: 'get_incident_integration' },
        { label: 'list_incident_integrations', value: 'list_incident_integrations' }
    ]}
>
<TabItem value="get_incident_integration">

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
    <td>The incident integration metadata's ID. (example: 00000000-0000-0000-1234-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Incident integration metadata's attributes for a create request.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The incident's integration relationships from a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Integration metadata resource type. (incident_integrations) (default: incident_integrations, example: incident_integrations)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_integrations">

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
    <td>The incident integration metadata's ID. (example: 00000000-0000-0000-1234-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Incident integration metadata's attributes for a create request.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The incident's integration relationships from a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Integration metadata resource type. (incident_integrations) (default: incident_integrations, example: incident_integrations)</td>
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
    <td><a href="#get_incident_integration"><CopyableCode code="get_incident_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-integration_metadata_id"><code>integration_metadata_id</code></a></td>
    <td></td>
    <td>Get incident integration metadata details.</td>
</tr>
<tr>
    <td><a href="#list_incident_integrations"><CopyableCode code="list_incident_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td></td>
    <td>Get all integration metadata for an incident.</td>
</tr>
<tr>
    <td><a href="#create_incident_integration"><CopyableCode code="create_incident_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an incident integration metadata.</td>
</tr>
<tr>
    <td><a href="#update_incident_integration"><CopyableCode code="update_incident_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-integration_metadata_id"><code>integration_metadata_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing incident integration metadata.</td>
</tr>
<tr>
    <td><a href="#delete_incident_integration"><CopyableCode code="delete_incident_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-integration_metadata_id"><code>integration_metadata_id</code></a></td>
    <td></td>
    <td>Delete an incident integration metadata.</td>
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
<tr id="parameter-integration_metadata_id">
    <td><CopyableCode code="integration_metadata_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident integration metadata.</td>
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
    defaultValue="get_incident_integration"
    values={[
        { label: 'get_incident_integration', value: 'get_incident_integration' },
        { label: 'list_incident_integrations', value: 'list_incident_integrations' }
    ]}
>
<TabItem value="get_incident_integration">

Get incident integration metadata details.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_integrations
WHERE incident_id = '{{ incident_id }}' -- required
AND integration_metadata_id = '{{ integration_metadata_id }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_integrations">

Get all integration metadata for an incident.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_integrations
WHERE incident_id = '{{ incident_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_integration"
    values={[
        { label: 'create_incident_integration', value: 'create_incident_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_integration">

Create an incident integration metadata.

```sql
INSERT INTO datadog.service_management.incident_integrations (
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
- name: incident_integrations
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_integrations resource.
    - name: data
      description: |
        Incident integration metadata data for a create request.
      value:
        attributes:
          created: "{{ created }}"
          incident_id: "{{ incident_id }}"
          integration_type: {{ integration_type }}
          metadata:
            channels:
              - channel_id: "{{ channel_id }}"
                channel_name: "{{ channel_name }}"
                redirect_url: "{{ redirect_url }}"
                team_id: "{{ team_id }}"
            issues:
              - account: "{{ account }}"
                issue_key: "{{ issue_key }}"
                issuetype_id: "{{ issuetype_id }}"
                project_key: "{{ project_key }}"
                redirect_url: "{{ redirect_url }}"
            teams:
              - ms_channel_id: "{{ ms_channel_id }}"
                ms_channel_name: "{{ ms_channel_name }}"
                ms_tenant_id: "{{ ms_tenant_id }}"
                redirect_url: "{{ redirect_url }}"
          modified: "{{ modified }}"
          status: {{ status }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_integration"
    values={[
        { label: 'update_incident_integration', value: 'update_incident_integration' }
    ]}
>
<TabItem value="update_incident_integration">

Update an existing incident integration metadata.

```sql
UPDATE datadog.service_management.incident_integrations
SET 
data = '{{ data }}'
WHERE 
incident_id = '{{ incident_id }}' --required
AND integration_metadata_id = '{{ integration_metadata_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_integration"
    values={[
        { label: 'delete_incident_integration', value: 'delete_incident_integration' }
    ]}
>
<TabItem value="delete_incident_integration">

Delete an incident integration metadata.

```sql
DELETE FROM datadog.service_management.incident_integrations
WHERE incident_id = '{{ incident_id }}' --required
AND integration_metadata_id = '{{ integration_metadata_id }}' --required
;
```
</TabItem>
</Tabs>
