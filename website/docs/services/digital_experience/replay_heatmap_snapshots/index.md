--- 
title: replay_heatmap_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - replay_heatmap_snapshots
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

Creates, updates, deletes, gets or lists a <code>replay_heatmap_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replay_heatmap_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.replay_heatmap_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_replay_heatmap_snapshots"
    values={[
        { label: 'list_replay_heatmap_snapshots', value: 'list_replay_heatmap_snapshots' }
    ]}
>
<TabItem value="list_replay_heatmap_snapshots">

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
    <td>Unique identifier of the heatmap snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a heatmap snapshot, including view context, device information, and audit metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Snapshots resource type. (snapshots) (default: snapshots, example: snapshots)</td>
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
    <td><a href="#list_replay_heatmap_snapshots"><CopyableCode code="list_replay_heatmap_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[view_name]"><code>filter[view_name]</code></a></td>
    <td><a href="#parameter-filter[device_type]"><code>filter[device_type]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-filter[application_id]"><code>filter[application_id]</code></a></td>
    <td>List heatmap snapshots.</td>
</tr>
<tr>
    <td><a href="#create_replay_heatmap_snapshot"><CopyableCode code="create_replay_heatmap_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a heatmap snapshot.</td>
</tr>
<tr>
    <td><a href="#update_replay_heatmap_snapshot"><CopyableCode code="update_replay_heatmap_snapshot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a heatmap snapshot.</td>
</tr>
<tr>
    <td><a href="#delete_replay_heatmap_snapshot"><CopyableCode code="delete_replay_heatmap_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>Delete a heatmap snapshot.</td>
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
<tr id="parameter-filter[view_name]">
    <td><CopyableCode code="filter[view_name]" /></td>
    <td><code>string</code></td>
    <td>View name to filter snapshots.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the heatmap snapshot.</td>
</tr>
<tr id="parameter-filter[application_id]">
    <td><CopyableCode code="filter[application_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by application ID.</td>
</tr>
<tr id="parameter-filter[device_type]">
    <td><CopyableCode code="filter[device_type]" /></td>
    <td><code>string</code></td>
    <td>Device type to filter snapshots.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of snapshots to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_replay_heatmap_snapshots"
    values={[
        { label: 'list_replay_heatmap_snapshots', value: 'list_replay_heatmap_snapshots' }
    ]}
>
<TabItem value="list_replay_heatmap_snapshots">

List heatmap snapshots.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.replay_heatmap_snapshots
WHERE filter[view_name] = '{{ filter[view_name] }}' -- required
AND filter[device_type] = '{{ filter[device_type] }}'
AND page[limit] = '{{ page[limit] }}'
AND filter[application_id] = '{{ filter[application_id] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replay_heatmap_snapshot"
    values={[
        { label: 'create_replay_heatmap_snapshot', value: 'create_replay_heatmap_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replay_heatmap_snapshot">

Create a heatmap snapshot.

```sql
INSERT INTO datadog.digital_experience.replay_heatmap_snapshots (
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
- name: replay_heatmap_snapshots
  props:
    - name: data
      description: |
        Data object for a heatmap snapshot creation request, containing the resource type and attributes.
      value:
        attributes:
          application_id: "{{ application_id }}"
          device_type: "{{ device_type }}"
          event_id: "{{ event_id }}"
          is_device_type_selected_by_user: {{ is_device_type_selected_by_user }}
          session_id: "{{ session_id }}"
          snapshot_name: "{{ snapshot_name }}"
          start: {{ start }}
          view_id: "{{ view_id }}"
          view_name: "{{ view_name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_replay_heatmap_snapshot"
    values={[
        { label: 'update_replay_heatmap_snapshot', value: 'update_replay_heatmap_snapshot' }
    ]}
>
<TabItem value="update_replay_heatmap_snapshot">

Update a heatmap snapshot.

```sql
UPDATE datadog.digital_experience.replay_heatmap_snapshots
SET 
data = '{{ data }}'
WHERE 
snapshot_id = '{{ snapshot_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replay_heatmap_snapshot"
    values={[
        { label: 'delete_replay_heatmap_snapshot', value: 'delete_replay_heatmap_snapshot' }
    ]}
>
<TabItem value="delete_replay_heatmap_snapshot">

Delete a heatmap snapshot.

```sql
DELETE FROM datadog.digital_experience.replay_heatmap_snapshots
WHERE snapshot_id = '{{ snapshot_id }}' --required
;
```
</TabItem>
</Tabs>
