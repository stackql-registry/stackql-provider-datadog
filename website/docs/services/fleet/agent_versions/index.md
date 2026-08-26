--- 
title: agent_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_versions
  - fleet
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

Creates, updates, deletes, gets or lists an <code>agent_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.fleet.agent_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_fleet_agent_versions_v2"
    values={[
        { label: 'list_fleet_agent_versions_v2', value: 'list_fleet_agent_versions_v2' }
    ]}
>
<TabItem value="list_fleet_agent_versions_v2">

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
    <td>The agent version string used as the unique identifier. (example: 7.81.1)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an available Datadog Agent version.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the agent version resource. (agent_version) (default: agent_version, example: agent_version)</td>
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
    <td><a href="#list_fleet_agent_versions_v2"><CopyableCode code="list_fleet_agent_versions_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve the list of Datadog Agent versions available for deployment.&lt;br /&gt;&lt;br /&gt;Returns `200` with an empty `data` array if the Agent package exists in the catalog&lt;br /&gt;but has no available versions, and `404` only if the Agent package itself is absent&lt;br /&gt;from the catalog.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_fleet_agent_versions_v2"
    values={[
        { label: 'list_fleet_agent_versions_v2', value: 'list_fleet_agent_versions_v2' }
    ]}
>
<TabItem value="list_fleet_agent_versions_v2">

Retrieve the list of Datadog Agent versions available for deployment.&lt;br /&gt;&lt;br /&gt;Returns `200` with an empty `data` array if the Agent package exists in the catalog&lt;br /&gt;but has no available versions, and `404` only if the Agent package itself is absent&lt;br /&gt;from the catalog.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.agent_versions
;
```
</TabItem>
</Tabs>
