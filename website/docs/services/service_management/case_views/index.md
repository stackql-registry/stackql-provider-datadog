--- 
title: case_views
hide_title: false
hide_table_of_contents: false
keywords:
  - case_views
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

Creates, updates, deletes, gets or lists a <code>case_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_case_view"
    values={[
        { label: 'get_case_view', value: 'get_case_view' },
        { label: 'list_case_views', value: 'list_case_views' }
    ]}
>
<TabItem value="get_case_view">

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
    <td>The view's identifier. (example: a1b2c3d4-e5f6-7890-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a case view, including the filter query and optional notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Related resources for the case view, including the creator, last modifier, and associated project.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for case views. (view) (default: view, example: view)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_case_views">

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
    <td>The view's identifier. (example: a1b2c3d4-e5f6-7890-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a case view, including the filter query and optional notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Related resources for the case view, including the creator, last modifier, and associated project.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for case views. (view) (default: view, example: view)</td>
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
    <td><a href="#get_case_view"><CopyableCode code="get_case_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-view_id"><code>view_id</code></a></td>
    <td></td>
    <td>Returns a single saved case view identified by its UUID, including its query, associated project, and timestamps.</td>
</tr>
<tr>
    <td><a href="#list_case_views"><CopyableCode code="list_case_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns all saved case views for a given project. Views are saved search queries that allow quick access to filtered lists of cases.</td>
</tr>
<tr>
    <td><a href="#create_case_view"><CopyableCode code="create_case_view" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new saved case view with a name, filter query, and associated project. Optionally, a notification rule can be linked to the view.</td>
</tr>
<tr>
    <td><a href="#update_case_view"><CopyableCode code="update_case_view" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-view_id"><code>view_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates the name, query, or notification rule of an existing case view.</td>
</tr>
<tr>
    <td><a href="#delete_case_view"><CopyableCode code="delete_case_view" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-view_id"><code>view_id</code></a></td>
    <td></td>
    <td>Permanently deletes a saved case view.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Filter views by project identifier. (example: e555e290-ed65-49bd-ae18-8acbfcf18db7)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-view_id">
    <td><CopyableCode code="view_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the case view. (example: a1b2c3d4-e5f6-7890-abcd-ef1234567890)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_case_view"
    values={[
        { label: 'get_case_view', value: 'get_case_view' },
        { label: 'list_case_views', value: 'list_case_views' }
    ]}
>
<TabItem value="get_case_view">

Returns a single saved case view identified by its UUID, including its query, associated project, and timestamps.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.case_views
WHERE view_id = '{{ view_id }}' -- required
;
```
</TabItem>
<TabItem value="list_case_views">

Returns all saved case views for a given project. Views are saved search queries that allow quick access to filtered lists of cases.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.case_views
WHERE project_id = '{{ project_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case_view"
    values={[
        { label: 'create_case_view', value: 'create_case_view' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case_view">

Creates a new saved case view with a name, filter query, and associated project. Optionally, a notification rule can be linked to the view.

```sql
INSERT INTO datadog.service_management.case_views (
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
- name: case_views
  props:
    - name: data
      description: |
        Data object for creating a case view.
      value:
        attributes:
          name: "{{ name }}"
          np_rule_id: "{{ np_rule_id }}"
          project_id: "{{ project_id }}"
          query: "{{ query }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_case_view"
    values={[
        { label: 'update_case_view', value: 'update_case_view' }
    ]}
>
<TabItem value="update_case_view">

Updates the name, query, or notification rule of an existing case view.

```sql
REPLACE datadog.service_management.case_views
SET 
data = '{{ data }}'
WHERE 
view_id = '{{ view_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_case_view"
    values={[
        { label: 'delete_case_view', value: 'delete_case_view' }
    ]}
>
<TabItem value="delete_case_view">

Permanently deletes a saved case view.

```sql
DELETE FROM datadog.service_management.case_views
WHERE view_id = '{{ view_id }}' --required
;
```
</TabItem>
</Tabs>
