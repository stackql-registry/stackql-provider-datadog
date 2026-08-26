--- 
title: on_call_team_routing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - on_call_team_routing_rules
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

Creates, updates, deletes, gets or lists an <code>on_call_team_routing_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_call_team_routing_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.on_call_team_routing_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_on_call_team_routing_rules"
    values={[
        { label: 'get_on_call_team_routing_rules', value: 'get_on_call_team_routing_rules' }
    ]}
>
<TabItem value="get_on_call_team_routing_rules">

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
    <td>Specifies the unique identifier of this team routing rules record.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Specifies relationships for team routing rules, including rule references.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team routing rules resource type. (team_routing_rules) (default: team_routing_rules, example: team_routing_rules)</td>
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
    <td><a href="#get_on_call_team_routing_rules"><CopyableCode code="get_on_call_team_routing_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get a team's On-Call routing rules</td>
</tr>
<tr>
    <td><a href="#set_on_call_team_routing_rules"><CopyableCode code="set_on_call_team_routing_rules" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Set a team's On-Call routing rules</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The team ID</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_on_call_team_routing_rules"
    values={[
        { label: 'get_on_call_team_routing_rules', value: 'get_on_call_team_routing_rules' }
    ]}
>
<TabItem value="get_on_call_team_routing_rules">

Get a team's On-Call routing rules

```sql
SELECT
id,
relationships,
type
FROM datadog.service_management.on_call_team_routing_rules
WHERE team_id = '{{ team_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_on_call_team_routing_rules"
    values={[
        { label: 'set_on_call_team_routing_rules', value: 'set_on_call_team_routing_rules' }
    ]}
>
<TabItem value="set_on_call_team_routing_rules">

Set a team's On-Call routing rules

```sql
REPLACE datadog.service_management.on_call_team_routing_rules
SET 
data = '{{ data }}'
WHERE 
team_id = '{{ team_id }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>
