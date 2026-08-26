--- 
title: case_project_notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - case_project_notification_rules
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

Creates, updates, deletes, gets or lists a <code>case_project_notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_project_notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_project_notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project_notification_rules"
    values={[
        { label: 'get_project_notification_rules', value: 'get_project_notification_rules' }
    ]}
>
<TabItem value="get_project_notification_rules">

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
    <td>The notification rule's identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Notification rule attributes</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Notification rule resource type (notification_rule) (default: notification_rule, example: notification_rule)</td>
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
    <td><a href="#get_project_notification_rules"><CopyableCode code="get_project_notification_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Get all notification rules for a project.</td>
</tr>
<tr>
    <td><a href="#create_project_notification_rule"><CopyableCode code="create_project_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a notification rule for a project.</td>
</tr>
<tr>
    <td><a href="#update_project_notification_rule"><CopyableCode code="update_project_notification_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a notification rule.</td>
</tr>
<tr>
    <td><a href="#delete_project_notification_rule"><CopyableCode code="delete_project_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-notification_rule_id"><code>notification_rule_id</code></a></td>
    <td></td>
    <td>Delete a notification rule using the notification rule's `id`.</td>
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
<tr id="parameter-notification_rule_id">
    <td><CopyableCode code="notification_rule_id" /></td>
    <td><code>string</code></td>
    <td>Notification Rule UUID (example: e555e290-ed65-49bd-ae18-8acbfcf18db7)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project UUID (example: e555e290-ed65-49bd-ae18-8acbfcf18db7)</td>
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
    defaultValue="get_project_notification_rules"
    values={[
        { label: 'get_project_notification_rules', value: 'get_project_notification_rules' }
    ]}
>
<TabItem value="get_project_notification_rules">

Get all notification rules for a project.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.case_project_notification_rules
WHERE project_id = '{{ project_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project_notification_rule"
    values={[
        { label: 'create_project_notification_rule', value: 'create_project_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project_notification_rule">

Create a notification rule for a project.

```sql
INSERT INTO datadog.service_management.case_project_notification_rules (
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
- name: case_project_notification_rules
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the case_project_notification_rules resource.
    - name: data
      description: |
        Notification rule create
      value:
        attributes:
          is_enabled: {{ is_enabled }}
          query: "{{ query }}"
          recipients:
            - data:
                channel: "{{ channel }}"
                channel_id: "{{ channel_id }}"
                channel_name: "{{ channel_name }}"
                connector_name: "{{ connector_name }}"
                email: "{{ email }}"
                name: "{{ name }}"
                service_name: "{{ service_name }}"
                team_id: "{{ team_id }}"
                team_name: "{{ team_name }}"
                tenant_id: "{{ tenant_id }}"
                tenant_name: "{{ tenant_name }}"
                workspace: "{{ workspace }}"
                workspace_id: "{{ workspace_id }}"
              type: "{{ type }}"
          triggers:
            - data:
                change_type: "{{ change_type }}"
                field: "{{ field }}"
                from_status: "{{ from_status }}"
                from_status_name: "{{ from_status_name }}"
                to_status: "{{ to_status }}"
                to_status_name: "{{ to_status_name }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_project_notification_rule"
    values={[
        { label: 'update_project_notification_rule', value: 'update_project_notification_rule' }
    ]}
>
<TabItem value="update_project_notification_rule">

Update a notification rule.

```sql
REPLACE datadog.service_management.case_project_notification_rules
SET 
data = '{{ data }}'
WHERE 
project_id = '{{ project_id }}' --required
AND notification_rule_id = '{{ notification_rule_id }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project_notification_rule"
    values={[
        { label: 'delete_project_notification_rule', value: 'delete_project_notification_rule' }
    ]}
>
<TabItem value="delete_project_notification_rule">

Delete a notification rule using the notification rule's `id`.

```sql
DELETE FROM datadog.service_management.case_project_notification_rules
WHERE project_id = '{{ project_id }}' --required
AND notification_rule_id = '{{ notification_rule_id }}' --required
;
```
</TabItem>
</Tabs>
