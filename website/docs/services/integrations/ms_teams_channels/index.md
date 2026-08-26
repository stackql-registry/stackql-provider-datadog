--- 
title: ms_teams_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - ms_teams_channels
  - integrations
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

Creates, updates, deletes, gets or lists a <code>ms_teams_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ms_teams_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.ms_teams_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_by_name"
    values={[
        { label: 'get_channel_by_name', value: 'get_channel_by_name' }
    ]}
>
<TabItem value="get_channel_by_name">

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
    <td>The ID of the channel. (example: 19:b41k24b14bn1nwffkernfkwrnfneubgkr@thread.tacv2)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Channel attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Channel info resource type. (ms-teams-channel-info) (default: ms-teams-channel-info, example: ms-teams-channel-info)</td>
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
    <td><a href="#get_channel_by_name"><CopyableCode code="get_channel_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tenant_name"><code>tenant_name</code></a>, <a href="#parameter-team_name"><code>team_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a></td>
    <td></td>
    <td>Get the tenant, team, and channel ID of a channel in the Datadog Microsoft Teams integration.</td>
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
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>Your channel name.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-team_name">
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>Your team name.</td>
</tr>
<tr id="parameter-tenant_name">
    <td><CopyableCode code="tenant_name" /></td>
    <td><code>string</code></td>
    <td>Your tenant name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_channel_by_name"
    values={[
        { label: 'get_channel_by_name', value: 'get_channel_by_name' }
    ]}
>
<TabItem value="get_channel_by_name">

Get the tenant, team, and channel ID of a channel in the Datadog Microsoft Teams integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.ms_teams_channels
WHERE tenant_name = '{{ tenant_name }}' -- required
AND team_name = '{{ team_name }}' -- required
AND channel_name = '{{ channel_name }}' -- required
;
```
</TabItem>
</Tabs>
