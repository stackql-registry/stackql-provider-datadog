--- 
title: rum_replay_session_watches
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_replay_session_watches
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

Creates, updates, deletes, gets or lists a <code>rum_replay_session_watches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_replay_session_watches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_replay_session_watches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_rum_replay_session_watch"><CopyableCode code="create_rum_replay_session_watch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Record a session watch.</td>
</tr>
<tr>
    <td><a href="#delete_rum_replay_session_watch"><CopyableCode code="delete_rum_replay_session_watch" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a></td>
    <td></td>
    <td>Delete session watch history.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_rum_replay_session_watch"
    values={[
        { label: 'create_rum_replay_session_watch', value: 'create_rum_replay_session_watch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rum_replay_session_watch">

Record a session watch.

```sql
INSERT INTO datadog.digital_experience.rum_replay_session_watches (
data,
session_id
)
SELECT 
'{{ data }}' /* required */,
'{{ session_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rum_replay_session_watches
  props:
    - name: session_id
      value: "{{ session_id }}"
      description: Required parameter for the rum_replay_session_watches resource.
    - name: data
      description: |
        Data object representing a session watch record, including its identifier, type, and attributes.
      value:
        attributes:
          application_id: "{{ application_id }}"
          data_source: "{{ data_source }}"
          event_id: "{{ event_id }}"
          timestamp: "{{ timestamp }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rum_replay_session_watch"
    values={[
        { label: 'delete_rum_replay_session_watch', value: 'delete_rum_replay_session_watch' }
    ]}
>
<TabItem value="delete_rum_replay_session_watch">

Delete session watch history.

```sql
DELETE FROM datadog.digital_experience.rum_replay_session_watches
WHERE session_id = '{{ session_id }}' --required
;
```
</TabItem>
</Tabs>
