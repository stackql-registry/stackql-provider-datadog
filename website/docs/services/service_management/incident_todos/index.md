--- 
title: incident_todos
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_todos
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

Creates, updates, deletes, gets or lists an <code>incident_todos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_todos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_todos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_todo"
    values={[
        { label: 'get_incident_todo', value: 'get_incident_todo' },
        { label: 'list_incident_todos', value: 'list_incident_todos' }
    ]}
>
<TabItem value="get_incident_todo">

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
    <td>The incident todo's ID. (example: 00000000-0000-0000-1234-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Incident todo's attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The incident's relationships from a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Todo resource type. (incident_todos) (default: incident_todos, example: incident_todos)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_todos">

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
    <td>The incident todo's ID. (example: 00000000-0000-0000-1234-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Incident todo's attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The incident's relationships from a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Todo resource type. (incident_todos) (default: incident_todos, example: incident_todos)</td>
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
    <td><a href="#get_incident_todo"><CopyableCode code="get_incident_todo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-todo_id"><code>todo_id</code></a></td>
    <td></td>
    <td>Get incident todo details.</td>
</tr>
<tr>
    <td><a href="#list_incident_todos"><CopyableCode code="list_incident_todos" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td></td>
    <td>Get all todos for an incident.</td>
</tr>
<tr>
    <td><a href="#create_incident_todo"><CopyableCode code="create_incident_todo" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an incident todo.</td>
</tr>
<tr>
    <td><a href="#update_incident_todo"><CopyableCode code="update_incident_todo" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-todo_id"><code>todo_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an incident todo.</td>
</tr>
<tr>
    <td><a href="#delete_incident_todo"><CopyableCode code="delete_incident_todo" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-todo_id"><code>todo_id</code></a></td>
    <td></td>
    <td>Delete an incident todo.</td>
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
<tr id="parameter-incident_id">
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-todo_id">
    <td><CopyableCode code="todo_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident todo.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_todo"
    values={[
        { label: 'get_incident_todo', value: 'get_incident_todo' },
        { label: 'list_incident_todos', value: 'list_incident_todos' }
    ]}
>
<TabItem value="get_incident_todo">

Get incident todo details.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_todos
WHERE incident_id = '{{ incident_id }}' -- required
AND todo_id = '{{ todo_id }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_todos">

Get all todos for an incident.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_todos
WHERE incident_id = '{{ incident_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_todo"
    values={[
        { label: 'create_incident_todo', value: 'create_incident_todo' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_todo">

Create an incident todo.

```sql
INSERT INTO datadog.service_management.incident_todos (
data,
incident_id
)
SELECT 
'{{ data }}' /* required */,
'{{ incident_id }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_todos
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_todos resource.
    - name: data
      description: |
        Incident todo data for a create request.
      value:
        attributes:
          assignees:
            - icon: "{{ icon }}"
              id: "{{ id }}"
              name: "{{ name }}"
              source: "{{ source }}"
          completed: "{{ completed }}"
          content: "{{ content }}"
          created: "{{ created }}"
          due_date: "{{ due_date }}"
          incident_id: "{{ incident_id }}"
          modified: "{{ modified }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_todo"
    values={[
        { label: 'update_incident_todo', value: 'update_incident_todo' }
    ]}
>
<TabItem value="update_incident_todo">

Update an incident todo.

```sql
UPDATE datadog.service_management.incident_todos
SET 
data = '{{ data }}'
WHERE 
incident_id = '{{ incident_id }}' --required
AND todo_id = '{{ todo_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_todo"
    values={[
        { label: 'delete_incident_todo', value: 'delete_incident_todo' }
    ]}
>
<TabItem value="delete_incident_todo">

Delete an incident todo.

```sql
DELETE FROM datadog.service_management.incident_todos
WHERE incident_id = '{{ incident_id }}' --required
AND todo_id = '{{ todo_id }}' --required
;
```
</TabItem>
</Tabs>
