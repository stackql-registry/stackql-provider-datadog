--- 
title: statuspage_maintenance_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_maintenance_templates
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

Creates, updates, deletes, gets or lists a <code>statuspage_maintenance_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_maintenance_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspage_maintenance_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_maintenance_template"
    values={[
        { label: 'get_maintenance_template', value: 'get_maintenance_template' },
        { label: 'list_maintenance_templates', value: 'list_maintenance_templates' }
    ]}
>
<TabItem value="get_maintenance_template">

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
    <td>The ID of the maintenance template.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a maintenance template.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a maintenance template.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Maintenance templates resource type. (maintenance_templates) (default: maintenance_templates, example: maintenance_templates)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_maintenance_templates">

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
    <td>The ID of the maintenance template.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a maintenance template.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a maintenance template.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Maintenance templates resource type. (maintenance_templates) (default: maintenance_templates, example: maintenance_templates)</td>
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
    <td><a href="#get_maintenance_template"><CopyableCode code="get_maintenance_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieves a specific maintenance template by its ID.</td>
</tr>
<tr>
    <td><a href="#list_maintenance_templates"><CopyableCode code="list_maintenance_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Lists all maintenance templates for a status page.</td>
</tr>
<tr>
    <td><a href="#create_maintenance_template"><CopyableCode code="create_maintenance_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Creates a new maintenance template.</td>
</tr>
<tr>
    <td><a href="#update_maintenance_template"><CopyableCode code="update_maintenance_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Updates an existing maintenance template's attributes.</td>
</tr>
<tr>
    <td><a href="#delete_maintenance_template"><CopyableCode code="delete_maintenance_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a></td>
    <td></td>
    <td>Deletes a maintenance template by its ID (soft delete).</td>
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
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the degradation or maintenance template.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_maintenance_template"
    values={[
        { label: 'get_maintenance_template', value: 'get_maintenance_template' },
        { label: 'list_maintenance_templates', value: 'list_maintenance_templates' }
    ]}
>
<TabItem value="get_maintenance_template">

Retrieves a specific maintenance template by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_maintenance_templates
WHERE page_id = '{{ page_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_maintenance_templates">

Lists all maintenance templates for a status page.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_maintenance_templates
WHERE page_id = '{{ page_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_maintenance_template"
    values={[
        { label: 'create_maintenance_template', value: 'create_maintenance_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_maintenance_template">

Creates a new maintenance template.

```sql
INSERT INTO datadog.service_management.statuspage_maintenance_templates (
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
- name: statuspage_maintenance_templates
  props:
    - name: page_id
      value: "{{ page_id }}"
      description: Required parameter for the statuspage_maintenance_templates resource.
    - name: data
      description: |
        The data object for creating a maintenance template.
      value:
        attributes:
          completed_description: "{{ completed_description }}"
          component_ids:
            - "{{ component_ids }}"
          in_progress_description: "{{ in_progress_description }}"
          maintenance_title: "{{ maintenance_title }}"
          name: "{{ name }}"
          scheduled_description: "{{ scheduled_description }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_maintenance_template"
    values={[
        { label: 'update_maintenance_template', value: 'update_maintenance_template' }
    ]}
>
<TabItem value="update_maintenance_template">

Updates an existing maintenance template's attributes.

```sql
UPDATE datadog.service_management.statuspage_maintenance_templates
SET 
data = '{{ data }}'
WHERE 
page_id = '{{ page_id }}' --required
AND template_id = '{{ template_id }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_maintenance_template"
    values={[
        { label: 'delete_maintenance_template', value: 'delete_maintenance_template' }
    ]}
>
<TabItem value="delete_maintenance_template">

Deletes a maintenance template by its ID (soft delete).

```sql
DELETE FROM datadog.service_management.statuspage_maintenance_templates
WHERE page_id = '{{ page_id }}' --required
AND template_id = '{{ template_id }}' --required
;
```
</TabItem>
</Tabs>
