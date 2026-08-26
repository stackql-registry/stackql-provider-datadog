--- 
title: agent_tracers
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_tracers
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

Creates, updates, deletes, gets or lists an <code>agent_tracers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_tracers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.fleet.agent_tracers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_fleet_agent_tracers"
    values={[
        { label: 'list_fleet_agent_tracers', value: 'list_fleet_agent_tracers' }
    ]}
>
<TabItem value="list_fleet_agent_tracers">

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
    <td>Status identifier. (example: done)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the fleet tracers response containing the list of tracers.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type. (example: status)</td>
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
    <td><a href="#list_fleet_agent_tracers"><CopyableCode code="list_fleet_agent_tracers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_key"><code>agent_key</code></a></td>
    <td><a href="#parameter-page_number"><code>page_number</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-sort_attribute"><code>sort_attribute</code></a>, <a href="#parameter-sort_descending"><code>sort_descending</code></a></td>
    <td>Retrieve a paginated list of tracers for a specific agent.&lt;br /&gt;&lt;br /&gt;This endpoint returns tracers associated with a given agent key, identified by the&lt;br /&gt;agent's hostname. Use this to discover telemetry-derived service names for a particular host.</td>
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
<tr id="parameter-agent_key">
    <td><CopyableCode code="agent_key" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (agent key) for the Datadog Agent.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page_number">
    <td><CopyableCode code="page_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number for pagination (starts at 0).</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of results per page (must be greater than 0 and less than or equal to 100).</td>
</tr>
<tr id="parameter-sort_attribute">
    <td><CopyableCode code="sort_attribute" /></td>
    <td><code>string</code></td>
    <td>Attribute to sort by.</td>
</tr>
<tr id="parameter-sort_descending">
    <td><CopyableCode code="sort_descending" /></td>
    <td><code>boolean</code></td>
    <td>Sort order (true for descending, false for ascending).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_fleet_agent_tracers"
    values={[
        { label: 'list_fleet_agent_tracers', value: 'list_fleet_agent_tracers' }
    ]}
>
<TabItem value="list_fleet_agent_tracers">

Retrieve a paginated list of tracers for a specific agent.&lt;br /&gt;&lt;br /&gt;This endpoint returns tracers associated with a given agent key, identified by the&lt;br /&gt;agent's hostname. Use this to discover telemetry-derived service names for a particular host.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.agent_tracers
WHERE agent_key = '{{ agent_key }}' -- required
AND page_number = '{{ page_number }}'
AND page_size = '{{ page_size }}'
AND sort_attribute = '{{ sort_attribute }}'
AND sort_descending = '{{ sort_descending }}'
;
```
</TabItem>
</Tabs>
