--- 
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
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

Creates, updates, deletes, gets or lists an <code>agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.fleet.agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fleet_agent_detail_v2"
    values={[
        { label: 'get_fleet_agent_detail_v2', value: 'get_fleet_agent_detail_v2' },
        { label: 'list_fleet_agents_v2', value: 'list_fleet_agents_v2' }
    ]}
>
<TabItem value="get_fleet_agent_detail_v2">

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
    <td>The unique agent key identifier. (example: a1b2c3d4e5f67890a1b2c3d4e5f67890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for the v2 agent detail response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the agent resource. (agent) (default: agent, example: agent)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleet_agents_v2">

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
    <td>The unique agent key identifier. (example: my-agent-hostname)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Datadog Agent in the v2 list response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the agent resource. (agent) (default: agent, example: agent)</td>
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
    <td><a href="#get_fleet_agent_detail_v2"><CopyableCode code="get_fleet_agent_detail_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_key"><code>agent_key</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieve detailed information about a specific Datadog Agent.&lt;br /&gt;&lt;br /&gt;By default, only `agent_infos` is returned. Use the `include` query parameter to&lt;br /&gt;request additional data: `integrations` and/or `configuration_files`.</td>
</tr>
<tr>
    <td><a href="#list_fleet_agents_v2"><CopyableCode code="list_fleet_agents_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_number"><code>page_number</code></a>, <a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-sort_attribute"><code>sort_attribute</code></a>, <a href="#parameter-sort_descending"><code>sort_descending</code></a></td>
    <td>Retrieve a paginated list of Datadog Agents.&lt;br /&gt;&lt;br /&gt;Returns agents with support for pagination, sorting, and filtering.&lt;br /&gt;Use `page_number` and `page_size` to navigate pages, `filter` to narrow by field values,&lt;br /&gt;and `tags` to filter by agent tags.</td>
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
    <td>The unique identifier (Agent key) for the Datadog Agent. Must be a 32-character lowercase hexadecimal string. (example: a1b2c3d4e5f67890a1b2c3d4e5f67890)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter string to narrow down agent results. (example: hostname:my-hostname OR env:dev)</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of additional fields to include in the response. Valid values are `integrations` and `configuration_files`. Omitting this parameter returns only `agent_infos`. Unrecognized values are silently ignored rather than causing an error. (example: integrations,configuration_files)</td>
</tr>
<tr id="parameter-page_number">
    <td><CopyableCode code="page_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number for pagination, starting at 0.</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of agents to return per page. Maximum value is 100. Defaults to 10.</td>
</tr>
<tr id="parameter-sort_attribute">
    <td><CopyableCode code="sort_attribute" /></td>
    <td><code>string</code></td>
    <td>Agent attribute to sort results by. Must be a supported attribute name; unsupported values return a 400 error.</td>
</tr>
<tr id="parameter-sort_descending">
    <td><CopyableCode code="sort_descending" /></td>
    <td><code>boolean</code></td>
    <td>Set to `true` to sort results in descending order. Defaults to ascending.</td>
</tr>
<tr id="parameter-tags">
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of tag keys to select which tags are included in each agent's `tags` attribute. Does not filter which agents are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_fleet_agent_detail_v2"
    values={[
        { label: 'get_fleet_agent_detail_v2', value: 'get_fleet_agent_detail_v2' },
        { label: 'list_fleet_agents_v2', value: 'list_fleet_agents_v2' }
    ]}
>
<TabItem value="get_fleet_agent_detail_v2">

Retrieve detailed information about a specific Datadog Agent.&lt;br /&gt;&lt;br /&gt;By default, only `agent_infos` is returned. Use the `include` query parameter to&lt;br /&gt;request additional data: `integrations` and/or `configuration_files`.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.agents
WHERE agent_key = '{{ agent_key }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_fleet_agents_v2">

Retrieve a paginated list of Datadog Agents.&lt;br /&gt;&lt;br /&gt;Returns agents with support for pagination, sorting, and filtering.&lt;br /&gt;Use `page_number` and `page_size` to navigate pages, `filter` to narrow by field values,&lt;br /&gt;and `tags` to filter by agent tags.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.agents
WHERE page_number = '{{ page_number }}'
AND page_size = '{{ page_size }}'
AND filter = '{{ filter }}'
AND tags = '{{ tags }}'
AND sort_attribute = '{{ sort_attribute }}'
AND sort_descending = '{{ sort_descending }}'
;
```
</TabItem>
</Tabs>
