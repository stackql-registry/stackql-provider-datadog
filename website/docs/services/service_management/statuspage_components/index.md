--- 
title: statuspage_components
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_components
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

Creates, updates, deletes, gets or lists a <code>statuspage_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspage_components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a component.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a component.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Components resource type. (components) (default: components, example: components)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_components">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a component.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a component.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Components resource type. (components) (default: components, example: components)</td>
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
    <td><a href="#get_component"><CopyableCode code="get_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-component_id"><code>component_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieves a specific component by its ID.</td>
</tr>
<tr>
    <td><a href="#list_components"><CopyableCode code="list_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Lists all components for a status page.</td>
</tr>
<tr>
    <td><a href="#create_component"><CopyableCode code="create_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Creates a new component.</td>
</tr>
<tr>
    <td><a href="#update_component"><CopyableCode code="update_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-component_id"><code>component_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Updates an existing component's attributes.</td>
</tr>
<tr>
    <td><a href="#delete_component"><CopyableCode code="delete_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-component_id"><code>component_id</code></a></td>
    <td></td>
    <td>Deletes a component by its ID.</td>
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
<tr id="parameter-component_id">
    <td><CopyableCode code="component_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the component.</td>
</tr>
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the status page.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

Retrieves a specific component by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_components
WHERE page_id = '{{ page_id }}' -- required
AND component_id = '{{ component_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_components">

Lists all components for a status page.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_components
WHERE page_id = '{{ page_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_component"
    values={[
        { label: 'create_component', value: 'create_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_component">

Creates a new component.

```sql
INSERT INTO datadog.service_management.statuspage_components (
data,
page_id,
include
)
SELECT 
'{{ data }}',
'{{ page_id }}',
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: statuspage_components
  props:
    - name: page_id
      value: "{{ page_id }}"
      description: Required parameter for the statuspage_components resource.
    - name: data
      description: |
        The data object for creating a component.
      value:
        attributes:
          components:
            - name: "{{ name }}"
              position: {{ position }}
              type: "{{ type }}"
          name: "{{ name }}"
          position: {{ position }}
          type: "{{ type }}"
        relationships:
          group:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_component"
    values={[
        { label: 'update_component', value: 'update_component' }
    ]}
>
<TabItem value="update_component">

Updates an existing component's attributes.

```sql
UPDATE datadog.service_management.statuspage_components
SET 
data = '{{ data }}'
WHERE 
page_id = '{{ page_id }}' --required
AND component_id = '{{ component_id }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_component"
    values={[
        { label: 'delete_component', value: 'delete_component' }
    ]}
>
<TabItem value="delete_component">

Deletes a component by its ID.

```sql
DELETE FROM datadog.service_management.statuspage_components
WHERE page_id = '{{ page_id }}' --required
AND component_id = '{{ component_id }}' --required
;
```
</TabItem>
</Tabs>
