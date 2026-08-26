--- 
title: dashboard_list_items
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_list_items
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

Creates, updates, deletes, gets or lists a <code>dashboard_list_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_list_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.dashboard_list_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard_list_items"
    values={[
        { label: 'get_dashboard_list_items', value: 'get_dashboard_list_items' }
    ]}
>
<TabItem value="get_dashboard_list_items">

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
    <td>ID of the dashboard. (example: q5j-nti-fv6)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The short name of the integration.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Creator of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of creation of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>string</code></td>
    <td>URL to the icon of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="is_favorite" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the dashboard is in the favorites.</td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the dashboard is read only.</td>
</tr>
<tr>
    <td><CopyableCode code="is_shared" /></td>
    <td><code>boolean</code></td>
    <td>Whether the dashboard is publicly shared or not.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of last edition of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="popularity" /></td>
    <td><code>integer (int32)</code></td>
    <td>Popularity of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>List of team names representing ownership of a dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the dashboard. (custom_timeboard, custom_screenboard, integration_screenboard, integration_timeboard, host_timeboard) (example: host_timeboard)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL path to the dashboard.</td>
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
    <td><a href="#get_dashboard_list_items"><CopyableCode code="get_dashboard_list_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dashboard_list_id"><code>dashboard_list_id</code></a></td>
    <td></td>
    <td>Fetch the dashboard list’s dashboard definitions.</td>
</tr>
<tr>
    <td><a href="#create_dashboard_list_items"><CopyableCode code="create_dashboard_list_items" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dashboard_list_id"><code>dashboard_list_id</code></a></td>
    <td></td>
    <td>Add dashboards to an existing dashboard list.</td>
</tr>
<tr>
    <td><a href="#update_dashboard_list_items"><CopyableCode code="update_dashboard_list_items" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-dashboard_list_id"><code>dashboard_list_id</code></a></td>
    <td></td>
    <td>Update dashboards of an existing dashboard list.</td>
</tr>
<tr>
    <td><a href="#delete_dashboard_list_items"><CopyableCode code="delete_dashboard_list_items" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dashboard_list_id"><code>dashboard_list_id</code></a></td>
    <td></td>
    <td>Delete dashboards from an existing dashboard list.</td>
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
<tr id="parameter-dashboard_list_id">
    <td><CopyableCode code="dashboard_list_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>ID of the dashboard list to delete items from.</td>
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
    defaultValue="get_dashboard_list_items"
    values={[
        { label: 'get_dashboard_list_items', value: 'get_dashboard_list_items' }
    ]}
>
<TabItem value="get_dashboard_list_items">

Fetch the dashboard list’s dashboard definitions.

```sql
SELECT
id,
integration_id,
author,
created,
icon,
is_favorite,
is_read_only,
is_shared,
modified,
popularity,
tags,
title,
type,
url
FROM datadog.dashboards.dashboard_list_items
WHERE dashboard_list_id = '{{ dashboard_list_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dashboard_list_items"
    values={[
        { label: 'create_dashboard_list_items', value: 'create_dashboard_list_items' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dashboard_list_items">

Add dashboards to an existing dashboard list.

```sql
INSERT INTO datadog.dashboards.dashboard_list_items (
dashboards,
dashboard_list_id
)
SELECT 
'{{ dashboards }}',
'{{ dashboard_list_id }}'
RETURNING
added_dashboards_to_list
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboard_list_items
  props:
    - name: dashboard_list_id
      value: "{{ dashboard_list_id }}"
      description: Required parameter for the dashboard_list_items resource.
    - name: dashboards
      description: |
        List of dashboards to add the dashboard list.
      value:
        - id: "{{ id }}"
          type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_dashboard_list_items"
    values={[
        { label: 'update_dashboard_list_items', value: 'update_dashboard_list_items' }
    ]}
>
<TabItem value="update_dashboard_list_items">

Update dashboards of an existing dashboard list.

```sql
REPLACE datadog.dashboards.dashboard_list_items
SET 
dashboards = '{{ dashboards }}'
WHERE 
dashboard_list_id = '{{ dashboard_list_id }}' --required
RETURNING
dashboards;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dashboard_list_items"
    values={[
        { label: 'delete_dashboard_list_items', value: 'delete_dashboard_list_items' }
    ]}
>
<TabItem value="delete_dashboard_list_items">

Delete dashboards from an existing dashboard list.

```sql
DELETE FROM datadog.dashboards.dashboard_list_items
WHERE dashboard_list_id = '{{ dashboard_list_id }}' --required
;
```
</TabItem>
</Tabs>
