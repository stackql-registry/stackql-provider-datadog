--- 
title: on_call_user_notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - on_call_user_notification_rules
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

Creates, updates, deletes, gets or lists an <code>on_call_user_notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_call_user_notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.on_call_user_notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_notification_rule"
    values={[
        { label: 'get_user_notification_rule', value: 'get_user_notification_rule' },
        { label: 'list_user_notification_rules', value: 'list_user_notification_rules' }
    ]}
>
<TabItem value="get_user_notification_rule">

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
    <td>Unique identifier for the rule</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for an on-call notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationship object for creating a notification rule</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates that the resource is of type 'notification_rules'. (notification_rules) (default: notification_rules, example: notification_rules)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_notification_rules">

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
    <td>Unique identifier for the rule</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for an on-call notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationship object for creating a notification rule</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates that the resource is of type 'notification_rules'. (notification_rules) (default: notification_rules, example: notification_rules)</td>
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
    <td><a href="#get_user_notification_rule"><CopyableCode code="get_user_notification_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
</tr>
<tr>
    <td><a href="#list_user_notification_rules"><CopyableCode code="list_user_notification_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>List the notification rules for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
</tr>
<tr>
    <td><a href="#create_user_notification_rule"><CopyableCode code="create_user_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
</tr>
<tr>
    <td><a href="#update_user_notification_rule"><CopyableCode code="update_user_notification_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Update a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
</tr>
<tr>
    <td><a href="#delete_user_notification_rule"><CopyableCode code="delete_user_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Delete a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
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
    <td><code>string</code></td>
    <td>The rule ID</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of included relationships to be returned. Allowed values: `channel`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_notification_rule"
    values={[
        { label: 'get_user_notification_rule', value: 'get_user_notification_rule' },
        { label: 'list_user_notification_rules', value: 'list_user_notification_rules' }
    ]}
>
<TabItem value="get_user_notification_rule">

Get a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.on_call_user_notification_rules
WHERE user_id = '{{ user_id }}' -- required
AND rule_id = '{{ rule_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_user_notification_rules">

List the notification rules for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.on_call_user_notification_rules
WHERE user_id = '{{ user_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_notification_rule"
    values={[
        { label: 'create_user_notification_rule', value: 'create_user_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_notification_rule">

Create a new notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
INSERT INTO datadog.service_management.on_call_user_notification_rules (
data,
user_id
)
SELECT 
'{{ data }}' /* required */,
'{{ user_id }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: on_call_user_notification_rules
  props:
    - name: user_id
      value: "{{ user_id }}"
      description: Required parameter for the on_call_user_notification_rules resource.
    - name: data
      description: |
        Data for creating an on-call notification rule
      value:
        attributes:
          category: "{{ category }}"
          channel_settings:
            method: "{{ method }}"
            type: "{{ type }}"
          delay_minutes: {{ delay_minutes }}
        relationships:
          channel:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_user_notification_rule"
    values={[
        { label: 'update_user_notification_rule', value: 'update_user_notification_rule' }
    ]}
>
<TabItem value="update_user_notification_rule">

Update a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
REPLACE datadog.service_management.on_call_user_notification_rules
SET 
data = '{{ data }}'
WHERE 
user_id = '{{ user_id }}' --required
AND rule_id = '{{ rule_id }}' --required
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
    defaultValue="delete_user_notification_rule"
    values={[
        { label: 'delete_user_notification_rule', value: 'delete_user_notification_rule' }
    ]}
>
<TabItem value="delete_user_notification_rule">

Delete a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
DELETE FROM datadog.service_management.on_call_user_notification_rules
WHERE user_id = '{{ user_id }}' --required
AND rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>
