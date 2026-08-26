--- 
title: case_project_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - case_project_rules
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

Creates, updates, deletes, gets or lists a <code>case_project_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_project_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_project_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_case_automation_rule"
    values={[
        { label: 'get_case_automation_rule', value: 'get_case_automation_rule' },
        { label: 'list_case_automation_rules', value: 'list_case_automation_rules' }
    ]}
>
<TabItem value="get_case_automation_rule">

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
    <td>Automation rule identifier. (example: e6773723-fe58-49ff-9975-dff00f14e28d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Core attributes of an automation rule, including its name, trigger condition, action to execute, and current state.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Related resources for the automation rule, including the users who created and last modified it.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for case automation rules. (rule) (default: rule, example: rule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_case_automation_rules">

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
    <td>Automation rule identifier. (example: e6773723-fe58-49ff-9975-dff00f14e28d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Core attributes of an automation rule, including its name, trigger condition, action to execute, and current state.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Related resources for the automation rule, including the users who created and last modified it.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for case automation rules. (rule) (default: rule, example: rule)</td>
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
    <td><a href="#get_case_automation_rule"><CopyableCode code="get_case_automation_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Returns a single automation rule identified by its UUID, including its trigger, action, and current state (enabled/disabled).</td>
</tr>
<tr>
    <td><a href="#list_case_automation_rules"><CopyableCode code="list_case_automation_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns all automation rules configured for a project. Automation rules allow automatic actions to be triggered by case events like creation, status transitions, or attribute changes.</td>
</tr>
<tr>
    <td><a href="#create_case_automation_rule"><CopyableCode code="create_case_automation_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates an automation rule for a project. The rule defines a trigger event (for example, case created, status transitioned) and an action to execute.</td>
</tr>
<tr>
    <td><a href="#update_case_automation_rule"><CopyableCode code="update_case_automation_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates the trigger, action, name, or state of an existing automation rule.</td>
</tr>
<tr>
    <td><a href="#delete_case_automation_rule"><CopyableCode code="delete_case_automation_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Permanently deletes an automation rule from a project.</td>
</tr>
<tr>
    <td><a href="#disable_case_automation_rule"><CopyableCode code="disable_case_automation_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Disables an automation rule so it no longer triggers on case events. The rule configuration is preserved.</td>
</tr>
<tr>
    <td><a href="#enable_case_automation_rule"><CopyableCode code="enable_case_automation_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Enables a previously disabled automation rule so it triggers on matching case events.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the project that owns the automation rules. (example: e555e290-ed65-49bd-ae18-8acbfcf18db7)</td>
</tr>
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the automation rule. (example: e6773723-fe58-49ff-9975-dff00f14e28d)</td>
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
    defaultValue="get_case_automation_rule"
    values={[
        { label: 'get_case_automation_rule', value: 'get_case_automation_rule' },
        { label: 'list_case_automation_rules', value: 'list_case_automation_rules' }
    ]}
>
<TabItem value="get_case_automation_rule">

Returns a single automation rule identified by its UUID, including its trigger, action, and current state (enabled/disabled).

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.case_project_rules
WHERE project_id = '{{ project_id }}' -- required
AND rule_id = '{{ rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list_case_automation_rules">

Returns all automation rules configured for a project. Automation rules allow automatic actions to be triggered by case events like creation, status transitions, or attribute changes.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.case_project_rules
WHERE project_id = '{{ project_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case_automation_rule"
    values={[
        { label: 'create_case_automation_rule', value: 'create_case_automation_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case_automation_rule">

Creates an automation rule for a project. The rule defines a trigger event (for example, case created, status transitioned) and an action to execute.

```sql
INSERT INTO datadog.service_management.case_project_rules (
data,
project_id
)
SELECT 
'{{ data }}' /* required */,
'{{ project_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_project_rules
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the case_project_rules resource.
    - name: data
      description: |
        Data object for creating an automation rule.
      value:
        attributes:
          action:
            data:
              agent_type: "{{ agent_type }}"
              assigned_agent_id: "{{ assigned_agent_id }}"
              handle: "{{ handle }}"
            type: "{{ type }}"
          name: "{{ name }}"
          state: "{{ state }}"
          trigger:
            data:
              approval_type: "{{ approval_type }}"
              change_type: "{{ change_type }}"
              field: "{{ field }}"
              from_status_name: "{{ from_status_name }}"
              to_status_name: "{{ to_status_name }}"
            type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_case_automation_rule"
    values={[
        { label: 'update_case_automation_rule', value: 'update_case_automation_rule' }
    ]}
>
<TabItem value="update_case_automation_rule">

Updates the trigger, action, name, or state of an existing automation rule.

```sql
REPLACE datadog.service_management.case_project_rules
SET 
data = '{{ data }}'
WHERE 
project_id = '{{ project_id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_case_automation_rule"
    values={[
        { label: 'delete_case_automation_rule', value: 'delete_case_automation_rule' }
    ]}
>
<TabItem value="delete_case_automation_rule">

Permanently deletes an automation rule from a project.

```sql
DELETE FROM datadog.service_management.case_project_rules
WHERE project_id = '{{ project_id }}' --required
AND rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="disable_case_automation_rule"
    values={[
        { label: 'disable_case_automation_rule', value: 'disable_case_automation_rule' },
        { label: 'enable_case_automation_rule', value: 'enable_case_automation_rule' }
    ]}
>
<TabItem value="disable_case_automation_rule">

Disables an automation rule so it no longer triggers on case events. The rule configuration is preserved.

```sql
EXEC datadog.service_management.case_project_rules.disable_case_automation_rule 
@project_id='{{ project_id }}' --required, 
@rule_id='{{ rule_id }}' --required 
;
```
</TabItem>
<TabItem value="enable_case_automation_rule">

Enables a previously disabled automation rule so it triggers on matching case events.

```sql
EXEC datadog.service_management.case_project_rules.enable_case_automation_rule 
@project_id='{{ project_id }}' --required, 
@rule_id='{{ rule_id }}' --required 
;
```
</TabItem>
</Tabs>
