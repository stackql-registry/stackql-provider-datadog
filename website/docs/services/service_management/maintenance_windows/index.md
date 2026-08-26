--- 
title: maintenance_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_windows
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

Creates, updates, deletes, gets or lists a <code>maintenance_windows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_windows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.maintenance_windows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_maintenance_windows"
    values={[
        { label: 'list_maintenance_windows', value: 'list_maintenance_windows' }
    ]}
>
<TabItem value="list_maintenance_windows">

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
    <td>The maintenance window's identifier. (example: a1b2c3d4-e5f6-7890-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a maintenance window, including its schedule and the query that determines which cases are affected.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for maintenance windows. (maintenance_window) (default: maintenance_window, example: maintenance_window)</td>
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
    <td><a href="#list_maintenance_windows"><CopyableCode code="list_maintenance_windows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns all configured maintenance windows for event management cases. Maintenance windows define time periods during which case notifications and automation rules are suppressed for cases matching a given query.</td>
</tr>
<tr>
    <td><a href="#create_maintenance_window"><CopyableCode code="create_maintenance_window" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a maintenance window for event management cases with a name, case filter query, and time range (start and end).</td>
</tr>
<tr>
    <td><a href="#update_maintenance_window"><CopyableCode code="update_maintenance_window" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-maintenance_window_id"><code>maintenance_window_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates the name, query, start time, or end time of an existing maintenance window.</td>
</tr>
<tr>
    <td><a href="#delete_maintenance_window"><CopyableCode code="delete_maintenance_window" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-maintenance_window_id"><code>maintenance_window_id</code></a></td>
    <td></td>
    <td>Permanently deletes a maintenance window.</td>
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
<tr id="parameter-maintenance_window_id">
    <td><CopyableCode code="maintenance_window_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the maintenance window. (example: a1b2c3d4-e5f6-7890-abcd-ef1234567890)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_maintenance_windows"
    values={[
        { label: 'list_maintenance_windows', value: 'list_maintenance_windows' }
    ]}
>
<TabItem value="list_maintenance_windows">

Returns all configured maintenance windows for event management cases. Maintenance windows define time periods during which case notifications and automation rules are suppressed for cases matching a given query.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.maintenance_windows
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_maintenance_window"
    values={[
        { label: 'create_maintenance_window', value: 'create_maintenance_window' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_maintenance_window">

Creates a maintenance window for event management cases with a name, case filter query, and time range (start and end).

```sql
INSERT INTO datadog.service_management.maintenance_windows (
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
- name: maintenance_windows
  props:
    - name: data
      description: |
        Data object for creating a maintenance window.
      value:
        attributes:
          end_at: "{{ end_at }}"
          name: "{{ name }}"
          query: "{{ query }}"
          start_at: "{{ start_at }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_maintenance_window"
    values={[
        { label: 'update_maintenance_window', value: 'update_maintenance_window' }
    ]}
>
<TabItem value="update_maintenance_window">

Updates the name, query, start time, or end time of an existing maintenance window.

```sql
REPLACE datadog.service_management.maintenance_windows
SET 
data = '{{ data }}'
WHERE 
maintenance_window_id = '{{ maintenance_window_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_maintenance_window"
    values={[
        { label: 'delete_maintenance_window', value: 'delete_maintenance_window' }
    ]}
>
<TabItem value="delete_maintenance_window">

Permanently deletes a maintenance window.

```sql
DELETE FROM datadog.service_management.maintenance_windows
WHERE maintenance_window_id = '{{ maintenance_window_id }}' --required
;
```
</TabItem>
</Tabs>
