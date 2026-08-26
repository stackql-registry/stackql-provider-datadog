--- 
title: rum_replay_viewership_history_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_replay_viewership_history_sessions
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_replay_viewership_history_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_replay_viewership_history_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_replay_viewership_history_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rum_replay_viewership_history_sessions"
    values={[
        { label: 'list_rum_replay_viewership_history_sessions', value: 'list_rum_replay_viewership_history_sessions' }
    ]}
>
<TabItem value="list_rum_replay_viewership_history_sessions">

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
    <td>Unique identifier of the RUM replay session.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a viewership history session entry, capturing when it was last watched and the associated event data.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Rum replay session resource type. (rum_replay_session) (default: rum_replay_session, example: rum_replay_session)</td>
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
    <td><a href="#list_rum_replay_viewership_history_sessions"><CopyableCode code="list_rum_replay_viewership_history_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[watched_at][start]"><code>filter[watched_at][start]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-filter[created_by]"><code>filter[created_by]</code></a>, <a href="#parameter-filter[watched_at][end]"><code>filter[watched_at][end]</code></a>, <a href="#parameter-filter[session_ids]"><code>filter[session_ids]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-filter[application_id]"><code>filter[application_id]</code></a></td>
    <td>List watched sessions.</td>
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
<tr id="parameter-filter[application_id]">
    <td><CopyableCode code="filter[application_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by application ID.</td>
</tr>
<tr id="parameter-filter[created_by]">
    <td><CopyableCode code="filter[created_by]" /></td>
    <td><code>string</code></td>
    <td>Filter by user UUID. Defaults to current user if not specified.</td>
</tr>
<tr id="parameter-filter[session_ids]">
    <td><CopyableCode code="filter[session_ids]" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of session IDs to filter by.</td>
</tr>
<tr id="parameter-filter[watched_at][end]">
    <td><CopyableCode code="filter[watched_at][end]" /></td>
    <td><code>integer (int64)</code></td>
    <td>End timestamp in milliseconds for watched_at filter.</td>
</tr>
<tr id="parameter-filter[watched_at][start]">
    <td><CopyableCode code="filter[watched_at][start]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start timestamp in milliseconds for watched_at filter.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number for pagination (0-indexed).</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items per page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_rum_replay_viewership_history_sessions"
    values={[
        { label: 'list_rum_replay_viewership_history_sessions', value: 'list_rum_replay_viewership_history_sessions' }
    ]}
>
<TabItem value="list_rum_replay_viewership_history_sessions">

List watched sessions.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_replay_viewership_history_sessions
WHERE filter[watched_at][start] = '{{ filter[watched_at][start] }}'
AND page[number] = '{{ page[number] }}'
AND filter[created_by] = '{{ filter[created_by] }}'
AND filter[watched_at][end] = '{{ filter[watched_at][end] }}'
AND filter[session_ids] = '{{ filter[session_ids] }}'
AND page[size] = '{{ page[size] }}'
AND filter[application_id] = '{{ filter[application_id] }}'
;
```
</TabItem>
</Tabs>
