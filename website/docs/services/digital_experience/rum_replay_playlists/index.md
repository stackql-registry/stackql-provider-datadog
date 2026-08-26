--- 
title: rum_replay_playlists
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_replay_playlists
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

Creates, updates, deletes, gets or lists a <code>rum_replay_playlists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_replay_playlists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_replay_playlists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rum_replay_playlist"
    values={[
        { label: 'get_rum_replay_playlist', value: 'get_rum_replay_playlist' },
        { label: 'list_rum_replay_playlists', value: 'list_rum_replay_playlists' }
    ]}
>
<TabItem value="get_rum_replay_playlist">

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
    <td>Unique identifier of the playlist.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a RUM replay playlist, including its name, description, session count, and audit timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Rum replay playlist resource type. (rum_replay_playlist) (default: rum_replay_playlist, example: rum_replay_playlist)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rum_replay_playlists">

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
    <td>Unique identifier of the playlist.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a RUM replay playlist, including its name, description, session count, and audit timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Rum replay playlist resource type. (rum_replay_playlist) (default: rum_replay_playlist, example: rum_replay_playlist)</td>
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
    <td><a href="#get_rum_replay_playlist"><CopyableCode code="get_rum_replay_playlist" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-playlist_id"><code>playlist_id</code></a></td>
    <td></td>
    <td>Get a playlist.</td>
</tr>
<tr>
    <td><a href="#list_rum_replay_playlists"><CopyableCode code="list_rum_replay_playlists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[created_by_uuid]"><code>filter[created_by_uuid]</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a></td>
    <td>List playlists.</td>
</tr>
<tr>
    <td><a href="#create_rum_replay_playlist"><CopyableCode code="create_rum_replay_playlist" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a playlist.</td>
</tr>
<tr>
    <td><a href="#update_rum_replay_playlist"><CopyableCode code="update_rum_replay_playlist" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-playlist_id"><code>playlist_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a playlist.</td>
</tr>
<tr>
    <td><a href="#delete_rum_replay_playlist"><CopyableCode code="delete_rum_replay_playlist" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-playlist_id"><code>playlist_id</code></a></td>
    <td></td>
    <td>Delete a playlist.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[created_by_uuid]">
    <td><CopyableCode code="filter[created_by_uuid]" /></td>
    <td><code>string</code></td>
    <td>Filter playlists by the UUID of the user who created them.</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Search query to filter playlists by name.</td>
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
    defaultValue="get_rum_replay_playlist"
    values={[
        { label: 'get_rum_replay_playlist', value: 'get_rum_replay_playlist' },
        { label: 'list_rum_replay_playlists', value: 'list_rum_replay_playlists' }
    ]}
>
<TabItem value="get_rum_replay_playlist">

Get a playlist.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_replay_playlists
WHERE playlist_id = '{{ playlist_id }}' -- required
;
```
</TabItem>
<TabItem value="list_rum_replay_playlists">

List playlists.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_replay_playlists
WHERE filter[created_by_uuid] = '{{ filter[created_by_uuid] }}'
AND filter[query] = '{{ filter[query] }}'
AND page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rum_replay_playlist"
    values={[
        { label: 'create_rum_replay_playlist', value: 'create_rum_replay_playlist' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rum_replay_playlist">

Create a playlist.

```sql
INSERT INTO datadog.digital_experience.rum_replay_playlists (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rum_replay_playlists
  props:
    - name: data
      description: |
        Data object representing a RUM replay playlist, including its identifier, type, and attributes.
      value:
        attributes:
          created_at: "{{ created_at }}"
          created_by:
            handle: "{{ handle }}"
            icon: "{{ icon }}"
            id: "{{ id }}"
            name: "{{ name }}"
            uuid: "{{ uuid }}"
          description: "{{ description }}"
          name: "{{ name }}"
          session_count: {{ session_count }}
          updated_at: "{{ updated_at }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_rum_replay_playlist"
    values={[
        { label: 'update_rum_replay_playlist', value: 'update_rum_replay_playlist' }
    ]}
>
<TabItem value="update_rum_replay_playlist">

Update a playlist.

```sql
REPLACE datadog.digital_experience.rum_replay_playlists
SET 
data = '{{ data }}'
WHERE 
playlist_id = '{{ playlist_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rum_replay_playlist"
    values={[
        { label: 'delete_rum_replay_playlist', value: 'delete_rum_replay_playlist' }
    ]}
>
<TabItem value="delete_rum_replay_playlist">

Delete a playlist.

```sql
DELETE FROM datadog.digital_experience.rum_replay_playlists
WHERE playlist_id = '{{ playlist_id }}' --required
;
```
</TabItem>
</Tabs>
