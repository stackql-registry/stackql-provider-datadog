--- 
title: rum_replay_playlist_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_replay_playlist_sessions
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

Creates, updates, deletes, gets or lists a <code>rum_replay_playlist_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_replay_playlist_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_replay_playlist_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rum_replay_playlist_sessions"
    values={[
        { label: 'list_rum_replay_playlist_sessions', value: 'list_rum_replay_playlist_sessions' }
    ]}
>
<TabItem value="list_rum_replay_playlist_sessions">

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
    <td>Attributes of a session within a playlist, including the session event data and its replay track.</td>
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
    <td><a href="#list_rum_replay_playlist_sessions"><CopyableCode code="list_rum_replay_playlist_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-playlist_id"><code>playlist_id</code></a></td>
    <td><a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a></td>
    <td>List sessions in a playlist.</td>
</tr>
<tr>
    <td><a href="#add_rum_replay_session_to_playlist"><CopyableCode code="add_rum_replay_session_to_playlist" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ts"><code>ts</code></a>, <a href="#parameter-playlist_id"><code>playlist_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-data_source"><code>data_source</code></a></td>
    <td>Add a session to a playlist.</td>
</tr>
<tr>
    <td><a href="#remove_rum_replay_session_from_playlist"><CopyableCode code="remove_rum_replay_session_from_playlist" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-playlist_id"><code>playlist_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a></td>
    <td></td>
    <td>Remove a session from a playlist.</td>
</tr>
<tr>
    <td><a href="#bulk_remove_rum_replay_playlist_sessions"><CopyableCode code="bulk_remove_rum_replay_playlist_sessions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-playlist_id"><code>playlist_id</code></a></td>
    <td></td>
    <td>Remove sessions from a playlist.</td>
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
<tr id="parameter-playlist_id">
    <td><CopyableCode code="playlist_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Unique identifier of the playlist.</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the session.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-ts">
    <td><CopyableCode code="ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Server-side timestamp in milliseconds.</td>
</tr>
<tr id="parameter-data_source">
    <td><CopyableCode code="data_source" /></td>
    <td><code>string</code></td>
    <td>Data source type. Valid values: 'rum' or 'product_analytics'. Defaults to 'rum'.</td>
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
    defaultValue="list_rum_replay_playlist_sessions"
    values={[
        { label: 'list_rum_replay_playlist_sessions', value: 'list_rum_replay_playlist_sessions' }
    ]}
>
<TabItem value="list_rum_replay_playlist_sessions">

List sessions in a playlist.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_replay_playlist_sessions
WHERE playlist_id = '{{ playlist_id }}' -- required
AND page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="add_rum_replay_session_to_playlist"
    values={[
        { label: 'add_rum_replay_session_to_playlist', value: 'add_rum_replay_session_to_playlist' }
    ]}
>
<TabItem value="add_rum_replay_session_to_playlist">

Add a session to a playlist.

```sql
REPLACE datadog.digital_experience.rum_replay_playlist_sessions
SET 
-- No updatable properties
WHERE 
ts = '{{ ts }}' --required
AND playlist_id = '{{ playlist_id }}' --required
AND session_id = '{{ session_id }}' --required
AND data_source = '{{ data_source}}'
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_rum_replay_session_from_playlist"
    values={[
        { label: 'remove_rum_replay_session_from_playlist', value: 'remove_rum_replay_session_from_playlist' },
        { label: 'bulk_remove_rum_replay_playlist_sessions', value: 'bulk_remove_rum_replay_playlist_sessions' }
    ]}
>
<TabItem value="remove_rum_replay_session_from_playlist">

Remove a session from a playlist.

```sql
DELETE FROM datadog.digital_experience.rum_replay_playlist_sessions
WHERE playlist_id = '{{ playlist_id }}' --required
AND session_id = '{{ session_id }}' --required
;
```
</TabItem>
<TabItem value="bulk_remove_rum_replay_playlist_sessions">

Remove sessions from a playlist.

```sql
DELETE FROM datadog.digital_experience.rum_replay_playlist_sessions
WHERE playlist_id = '{{ playlist_id }}' --required
;
```
</TabItem>
</Tabs>
