--- 
title: incident_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_rules
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

Creates, updates, deletes, gets or lists an <code>incident_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_rule"
    values={[
        { label: 'get_incident_rule', value: 'get_incident_rule' },
        { label: 'list_incident_rules', value: 'list_incident_rules' }
    ]}
>
<TabItem value="get_incident_rule">

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
    <td>The rule identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident rule in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident rule response resource type. (incidents_rules) (example: incidents_rules)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_rules">

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
    <td>The rule identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident rule in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident rule response resource type. (incidents_rules) (example: incidents_rules)</td>
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
    <td><a href="#get_incident_rule"><CopyableCode code="get_incident_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Get a single incident rule by ID.</td>
</tr>
<tr>
    <td><a href="#list_incident_rules"><CopyableCode code="list_incident_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[task_id]"><code>filter[task_id]</code></a>, <a href="#parameter-filter[trigger]"><code>filter[trigger]</code></a>, <a href="#parameter-incident_type_uuid"><code>incident_type_uuid</code></a></td>
    <td>List all incident rules.</td>
</tr>
<tr>
    <td><a href="#create_incident_rule"><CopyableCode code="create_incident_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an incident rule.</td>
</tr>
<tr>
    <td><a href="#update_incident_rule"><CopyableCode code="update_incident_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an incident rule.</td>
</tr>
<tr>
    <td><a href="#delete_incident_rule"><CopyableCode code="delete_incident_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Delete an incident rule.</td>
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
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the incident rule.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[task_id]">
    <td><CopyableCode code="filter[task_id]" /></td>
    <td><code>string</code></td>
    <td>Filter rules by task ID.</td>
</tr>
<tr id="parameter-filter[trigger]">
    <td><CopyableCode code="filter[trigger]" /></td>
    <td><code>string</code></td>
    <td>Filter rules by trigger.</td>
</tr>
<tr id="parameter-incident_type_uuid">
    <td><CopyableCode code="incident_type_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter rules by incident type UUID. (wire: incidentTypeUUID)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_rule"
    values={[
        { label: 'get_incident_rule', value: 'get_incident_rule' },
        { label: 'list_incident_rules', value: 'list_incident_rules' }
    ]}
>
<TabItem value="get_incident_rule">

Get a single incident rule by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.incident_rules
WHERE rule_id = '{{ rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_rules">

List all incident rules.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.incident_rules
WHERE filter[task_id] = '{{ filter[task_id] }}'
AND filter[trigger] = '{{ filter[trigger] }}'
AND incident_type_uuid = '{{ incident_type_uuid }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_rule"
    values={[
        { label: 'create_incident_rule', value: 'create_incident_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_rule">

Create an incident rule.

```sql
INSERT INTO datadog.service_management.incident_rules (
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
- name: incident_rules
  props:
    - name: data
      description: |
        Incident rule data in a create request.
      value:
        attributes:
          condition:
            normalized_query: "{{ normalized_query }}"
            raw_query: "{{ raw_query }}"
          condition_table_type: {{ condition_table_type }}
          conditions:
            - field: "{{ field }}"
              values: "{{ values }}"
          enabled: {{ enabled }}
          execution_type: {{ execution_type }}
          incident_type_uuid: "{{ incident_type_uuid }}"
          match_any_condition: {{ match_any_condition }}
          task_id: "{{ task_id }}"
          task_payload: "{{ task_payload }}"
          trigger: "{{ trigger }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_rule"
    values={[
        { label: 'update_incident_rule', value: 'update_incident_rule' }
    ]}
>
<TabItem value="update_incident_rule">

Update an incident rule.

```sql
UPDATE datadog.service_management.incident_rules
SET 
data = '{{ data }}'
WHERE 
rule_id = '{{ rule_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_rule"
    values={[
        { label: 'delete_incident_rule', value: 'delete_incident_rule' }
    ]}
>
<TabItem value="delete_incident_rule">

Delete an incident rule.

```sql
DELETE FROM datadog.service_management.incident_rules
WHERE rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>
