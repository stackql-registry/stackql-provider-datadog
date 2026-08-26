--- 
title: model_lab_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - model_lab_projects
  - llm_observability
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

Creates, updates, deletes, gets or lists a <code>model_lab_projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_lab_projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.model_lab_projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_lab_project"
    values={[
        { label: 'get_model_lab_project', value: 'get_model_lab_project' },
        { label: 'list_model_lab_projects', value: 'list_model_lab_projects' }
    ]}
>
<TabItem value="get_model_lab_project">

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
    <td>The unique identifier of the project. (example: 2)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Model Lab project.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for a Model Lab project resource. (projects) (example: projects)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_lab_projects">

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
    <td>The unique identifier of the project. (example: 2)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Model Lab project.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for a Model Lab project resource. (projects) (example: projects)</td>
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
    <td><a href="#get_model_lab_project"><CopyableCode code="get_model_lab_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Get a single Model Lab project by its ID.</td>
</tr>
<tr>
    <td><a href="#list_model_lab_projects"><CopyableCode code="list_model_lab_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-filter[owner_id]"><code>filter[owner_id]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>List all Model Lab projects for the current organization.</td>
</tr>
<tr>
    <td><a href="#unstar_model_lab_project"><CopyableCode code="unstar_model_lab_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Remove the star from a Model Lab project for the current user.</td>
</tr>
<tr>
    <td><a href="#star_model_lab_project"><CopyableCode code="star_model_lab_project" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Star a Model Lab project for the current user.</td>
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
    <td><code>integer (int64)</code></td>
    <td>The ID of the Model Lab project.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Text search filter for project name or description.</td>
</tr>
<tr id="parameter-filter[owner_id]">
    <td><CopyableCode code="filter[owner_id]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter by owner UUID.</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Filter by tags. Format: key:value,key2:value2.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number (1-indexed).</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items per page. Maximum is 100.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort field. Valid values: name, created_at, updated_at. Prefix with '-' for descending order (e.g., -updated_at).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_model_lab_project"
    values={[
        { label: 'get_model_lab_project', value: 'get_model_lab_project' },
        { label: 'list_model_lab_projects', value: 'list_model_lab_projects' }
    ]}
>
<TabItem value="get_model_lab_project">

Get a single Model Lab project by its ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.model_lab_projects
WHERE project_id = '{{ project_id }}' -- required
;
```
</TabItem>
<TabItem value="list_model_lab_projects">

List all Model Lab projects for the current organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.model_lab_projects
WHERE filter = '{{ filter }}'
AND filter[owner_id] = '{{ filter[owner_id] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND sort = '{{ sort }}'
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="unstar_model_lab_project"
    values={[
        { label: 'unstar_model_lab_project', value: 'unstar_model_lab_project' }
    ]}
>
<TabItem value="unstar_model_lab_project">

Remove the star from a Model Lab project for the current user.

```sql
DELETE FROM datadog.llm_observability.model_lab_projects
WHERE project_id = '{{ project_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="star_model_lab_project"
    values={[
        { label: 'star_model_lab_project', value: 'star_model_lab_project' }
    ]}
>
<TabItem value="star_model_lab_project">

Star a Model Lab project for the current user.

```sql
EXEC datadog.llm_observability.model_lab_projects.star_model_lab_project 
@project_id='{{ project_id }}' --required 
;
```
</TabItem>
</Tabs>
