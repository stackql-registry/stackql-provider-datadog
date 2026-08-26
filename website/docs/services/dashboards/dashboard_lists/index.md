--- 
title: dashboard_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_lists
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>dashboard_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.dashboard_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard_list"
    values={[
        { label: 'get_dashboard_list', value: 'get_dashboard_list' },
        { label: 'list_dashboard_lists', value: 'list_dashboard_lists' }
    ]}
>
<TabItem value="get_dashboard_list">

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
    <td><code>integer (int64)</code></td>
    <td>The ID of the dashboard list.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dashboard list. (example: My Dashboard)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of creation of the dashboard list.</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of dashboards in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="is_favorite" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the list is in the favorites.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of last edition of the dashboard list.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of dashboard list. (example: manual_dashboard_list)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dashboard_lists">

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
    <td><code>integer (int64)</code></td>
    <td>The ID of the dashboard list.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dashboard list. (example: My Dashboard)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of creation of the dashboard list.</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of dashboards in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="is_favorite" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the list is in the favorites.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of last edition of the dashboard list.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of dashboard list. (example: manual_dashboard_list)</td>
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
    <td><a href="#get_dashboard_list"><CopyableCode code="get_dashboard_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-list_id"><code>list_id</code></a></td>
    <td></td>
    <td>Fetch an existing dashboard list's definition.</td>
</tr>
<tr>
    <td><a href="#list_dashboard_lists"><CopyableCode code="list_dashboard_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Fetch all of your existing dashboard list definitions.</td>
</tr>
<tr>
    <td><a href="#create_dashboard_list"><CopyableCode code="create_dashboard_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create an empty dashboard list.</td>
</tr>
<tr>
    <td><a href="#update_dashboard_list"><CopyableCode code="update_dashboard_list" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-list_id"><code>list_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update the name of a dashboard list.</td>
</tr>
<tr>
    <td><a href="#delete_dashboard_list"><CopyableCode code="delete_dashboard_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-list_id"><code>list_id</code></a></td>
    <td></td>
    <td>Delete a dashboard list.</td>
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
<tr id="parameter-list_id">
    <td><CopyableCode code="list_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>ID of the dashboard list to delete.</td>
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
    defaultValue="get_dashboard_list"
    values={[
        { label: 'get_dashboard_list', value: 'get_dashboard_list' },
        { label: 'list_dashboard_lists', value: 'list_dashboard_lists' }
    ]}
>
<TabItem value="get_dashboard_list">

Fetch an existing dashboard list's definition.

```sql
SELECT
id,
name,
author,
created,
dashboard_count,
is_favorite,
modified,
type
FROM datadog.dashboards.dashboard_lists
WHERE list_id = '{{ list_id }}' -- required
;
```
</TabItem>
<TabItem value="list_dashboard_lists">

Fetch all of your existing dashboard list definitions.

```sql
SELECT
id,
name,
author,
created,
dashboard_count,
is_favorite,
modified,
type
FROM datadog.dashboards.dashboard_lists
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dashboard_list"
    values={[
        { label: 'create_dashboard_list', value: 'create_dashboard_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dashboard_list">

Create an empty dashboard list.

```sql
INSERT INTO datadog.dashboards.dashboard_lists (
name
)
SELECT 
'{{ name }}' /* required */
RETURNING
id,
name,
author,
created,
dashboard_count,
is_favorite,
modified,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboard_lists
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The name of the dashboard list.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_dashboard_list"
    values={[
        { label: 'update_dashboard_list', value: 'update_dashboard_list' }
    ]}
>
<TabItem value="update_dashboard_list">

Update the name of a dashboard list.

```sql
REPLACE datadog.dashboards.dashboard_lists
SET 
name = '{{ name }}'
WHERE 
list_id = '{{ list_id }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
author,
created,
dashboard_count,
is_favorite,
modified,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dashboard_list"
    values={[
        { label: 'delete_dashboard_list', value: 'delete_dashboard_list' }
    ]}
>
<TabItem value="delete_dashboard_list">

Delete a dashboard list.

```sql
DELETE FROM datadog.dashboards.dashboard_lists
WHERE list_id = '{{ list_id }}' --required
;
```
</TabItem>
</Tabs>
