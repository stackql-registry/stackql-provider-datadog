--- 
title: incident_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_configurations
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

Creates, updates, deletes, gets or lists an <code>incident_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_incident_configuration"><CopyableCode code="create_incident_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a configuration for an incident.</td>
</tr>
<tr>
    <td><a href="#update_incident_configuration"><CopyableCode code="update_incident_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a configuration for an incident.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_incident_configuration"
    values={[
        { label: 'create_incident_configuration', value: 'create_incident_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_configuration">

Create a configuration for an incident.

```sql
INSERT INTO datadog.service_management.incident_configurations (
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
- name: incident_configurations
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_configurations resource.
    - name: data
      description: |
        Incident configuration data in a create request.
      value:
        attributes:
          execute_integrations: {{ execute_integrations }}
          execute_notification_rules: {{ execute_notification_rules }}
          include_in_analytics: {{ include_in_analytics }}
          include_in_search: {{ include_in_search }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_configuration"
    values={[
        { label: 'update_incident_configuration', value: 'update_incident_configuration' }
    ]}
>
<TabItem value="update_incident_configuration">

Update a configuration for an incident.

```sql
UPDATE datadog.service_management.incident_configurations
SET 
data = '{{ data }}'
WHERE 
incident_id = '{{ incident_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>
