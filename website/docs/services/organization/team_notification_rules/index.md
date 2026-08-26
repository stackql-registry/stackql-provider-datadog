--- 
title: team_notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - team_notification_rules
  - organization
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

Creates, updates, deletes, gets or lists a <code>team_notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.team_notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_team_notification_rule"
    values={[
        { label: 'get_team_notification_rule', value: 'get_team_notification_rule' },
        { label: 'get_team_notification_rules', value: 'get_team_notification_rules' }
    ]}
>
<TabItem value="get_team_notification_rule">

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
    <td>The identifier of the team notification rule (example: b8626d7e-cedd-11eb-abf5-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team notification rule attributes</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team notification rule type (team_notification_rules) (default: team_notification_rules, example: team_notification_rules)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_team_notification_rules">

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
    <td>The identifier of the team notification rule (example: b8626d7e-cedd-11eb-abf5-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team notification rule attributes</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team notification rule type (team_notification_rules) (default: team_notification_rules, example: team_notification_rules)</td>
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
    <td><a href="#get_team_notification_rule"><CopyableCode code="get_team_notification_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#get_team_notification_rules"><CopyableCode code="get_team_notification_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_team_notification_rule"><CopyableCode code="create_team_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_team_notification_rule"><CopyableCode code="update_team_notification_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_team_notification_rule"><CopyableCode code="delete_team_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td></td>
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
    <td>None</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>None</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_team_notification_rule"
    values={[
        { label: 'get_team_notification_rule', value: 'get_team_notification_rule' },
        { label: 'get_team_notification_rules', value: 'get_team_notification_rules' }
    ]}
>
<TabItem value="get_team_notification_rule">

OK

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.team_notification_rules
WHERE team_id = '{{ team_id }}' -- required
AND rule_id = '{{ rule_id }}' -- required
;
```
</TabItem>
<TabItem value="get_team_notification_rules">

OK

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.team_notification_rules
WHERE team_id = '{{ team_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_team_notification_rule"
    values={[
        { label: 'create_team_notification_rule', value: 'create_team_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_team_notification_rule">

No description available.

```sql
INSERT INTO datadog.organization.team_notification_rules (
data,
team_id
)
SELECT 
'{{ data }}' /* required */,
'{{ team_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: team_notification_rules
  props:
    - name: team_id
      value: "{{ team_id }}"
      description: Required parameter for the team_notification_rules resource.
    - name: data
      description: |
        Team notification rule
      value:
        attributes:
          email:
            enabled: {{ enabled }}
          ms_teams:
            connector_name: "{{ connector_name }}"
          pagerduty:
            service_name: "{{ service_name }}"
          slack:
            channel: "{{ channel }}"
            workspace: "{{ workspace }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_team_notification_rule"
    values={[
        { label: 'update_team_notification_rule', value: 'update_team_notification_rule' }
    ]}
>
<TabItem value="update_team_notification_rule">

No description available.

```sql
REPLACE datadog.organization.team_notification_rules
SET 
data = '{{ data }}'
WHERE 
team_id = '{{ team_id }}' --required
AND rule_id = '{{ rule_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_team_notification_rule"
    values={[
        { label: 'delete_team_notification_rule', value: 'delete_team_notification_rule' }
    ]}
>
<TabItem value="delete_team_notification_rule">

No description available.

```sql
DELETE FROM datadog.organization.team_notification_rules
WHERE team_id = '{{ team_id }}' --required
AND rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>
