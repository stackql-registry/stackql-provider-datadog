--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_projects"
    values={[
        { label: 'list_llmobs_projects', value: 'list_llmobs_projects' }
    ]}
>
<TabItem value="list_llmobs_projects">

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
    <td>Unique identifier of the project. (example: a33671aa-24fd-4dcd-9b33-a8ec7dde7751)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability project.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability project. (projects) (example: projects)</td>
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
    <td><a href="#list_llmobs_projects"><CopyableCode code="list_llmobs_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List all Agent Observability projects sorted by creation date, newest first.</td>
</tr>
<tr>
    <td><a href="#create_llmobs_project"><CopyableCode code="create_llmobs_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Agent Observability project. Returns the existing project if a name conflict occurs.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_project"><CopyableCode code="update_llmobs_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update an existing Agent Observability project.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_projects"><CopyableCode code="delete_llmobs_projects" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Delete one or more Agent Observability projects.</td>
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
    <td>The ID of the Agent Observability project. (example: a33671aa-24fd-4dcd-9b33-a8ec7dde7751)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[id]">
    <td><CopyableCode code="filter[id]" /></td>
    <td><code>string</code></td>
    <td>Filter projects by project ID.</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter projects by name.</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Use the Pagination cursor to retrieve the next page of results.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of results to return per page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_llmobs_projects"
    values={[
        { label: 'list_llmobs_projects', value: 'list_llmobs_projects' }
    ]}
>
<TabItem value="list_llmobs_projects">

List all Agent Observability projects sorted by creation date, newest first.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.projects
WHERE filter[id] = '{{ filter[id] }}'
AND filter[name] = '{{ filter[name] }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_project"
    values={[
        { label: 'create_llmobs_project', value: 'create_llmobs_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_project">

Create a new Agent Observability project. Returns the existing project if a name conflict occurs.

```sql
INSERT INTO datadog.llm_observability.projects (
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
- name: projects
  props:
    - name: data
      description: |
        Data object for creating an Agent Observability project.
      value:
        attributes:
          description: "{{ description }}"
          name: "{{ name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_llmobs_project"
    values={[
        { label: 'update_llmobs_project', value: 'update_llmobs_project' }
    ]}
>
<TabItem value="update_llmobs_project">

Partially update an existing Agent Observability project.

```sql
UPDATE datadog.llm_observability.projects
SET 
data = '{{ data }}'
WHERE 
project_id = '{{ project_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_llmobs_projects"
    values={[
        { label: 'delete_llmobs_projects', value: 'delete_llmobs_projects' }
    ]}
>
<TabItem value="delete_llmobs_projects">

Delete one or more Agent Observability projects.

```sql
EXEC datadog.llm_observability.projects.delete_llmobs_projects 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
