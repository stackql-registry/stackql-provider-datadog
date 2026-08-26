--- 
title: user_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - user_templates
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>user_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.user_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor_user_template"
    values={[
        { label: 'get_monitor_user_template', value: 'get_monitor_user_template' },
        { label: 'list_monitor_user_templates', value: 'list_monitor_user_templates' }
    ]}
>
<TabItem value="get_monitor_user_template">

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
    <td>The unique identifier. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A monitor user template object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Monitor user template resource type. (monitor-user-template) (default: monitor-user-template, example: monitor-user-template)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitor_user_templates">

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
    <td>The unique identifier. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for a monitor user template.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Monitor user template resource type. (monitor-user-template) (default: monitor-user-template, example: monitor-user-template)</td>
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
    <td><a href="#get_monitor_user_template"><CopyableCode code="get_monitor_user_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a></td>
    <td><a href="#parameter-with_all_versions"><code>with_all_versions</code></a></td>
    <td>Retrieve a monitor user template by its ID.</td>
</tr>
<tr>
    <td><a href="#list_monitor_user_templates"><CopyableCode code="list_monitor_user_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve all monitor user templates.</td>
</tr>
<tr>
    <td><a href="#create_monitor_user_template"><CopyableCode code="create_monitor_user_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new monitor user template.</td>
</tr>
<tr>
    <td><a href="#update_monitor_user_template"><CopyableCode code="update_monitor_user_template" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new version of an existing monitor user template.</td>
</tr>
<tr>
    <td><a href="#delete_monitor_user_template"><CopyableCode code="delete_monitor_user_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a></td>
    <td></td>
    <td>Delete an existing monitor user template by its ID.</td>
</tr>
<tr>
    <td><a href="#validate_monitor_user_template"><CopyableCode code="validate_monitor_user_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Validate the structure and content of a monitor user template.</td>
</tr>
<tr>
    <td><a href="#validate_existing_monitor_user_template"><CopyableCode code="validate_existing_monitor_user_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Validate the structure and content of an existing monitor user template being updated to a new version.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>ID of the monitor user template.</td>
</tr>
<tr id="parameter-with_all_versions">
    <td><CopyableCode code="with_all_versions" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include all versions of the template in the response in the versions field. (example: false)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor_user_template"
    values={[
        { label: 'get_monitor_user_template', value: 'get_monitor_user_template' },
        { label: 'list_monitor_user_templates', value: 'list_monitor_user_templates' }
    ]}
>
<TabItem value="get_monitor_user_template">

Retrieve a monitor user template by its ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.user_templates
WHERE template_id = '{{ template_id }}' -- required
AND with_all_versions = '{{ with_all_versions }}'
;
```
</TabItem>
<TabItem value="list_monitor_user_templates">

Retrieve all monitor user templates.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.user_templates
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor_user_template"
    values={[
        { label: 'create_monitor_user_template', value: 'create_monitor_user_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor_user_template">

Create a new monitor user template.

```sql
INSERT INTO datadog.monitoring.user_templates (
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
- name: user_templates
  props:
    - name: data
      description: |
        Monitor user template data.
      value:
        attributes:
          description: "{{ description }}"
          monitor_definition: "{{ monitor_definition }}"
          tags:
            - "{{ tags }}"
          template_variables:
            - available_values: "{{ available_values }}"
              defaults: "{{ defaults }}"
              name: "{{ name }}"
              tag_key: "{{ tag_key }}"
          title: "{{ title }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_monitor_user_template"
    values={[
        { label: 'update_monitor_user_template', value: 'update_monitor_user_template' }
    ]}
>
<TabItem value="update_monitor_user_template">

Creates a new version of an existing monitor user template.

```sql
REPLACE datadog.monitoring.user_templates
SET 
data = '{{ data }}'
WHERE 
template_id = '{{ template_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor_user_template"
    values={[
        { label: 'delete_monitor_user_template', value: 'delete_monitor_user_template' }
    ]}
>
<TabItem value="delete_monitor_user_template">

Delete an existing monitor user template by its ID.

```sql
DELETE FROM datadog.monitoring.user_templates
WHERE template_id = '{{ template_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="validate_monitor_user_template"
    values={[
        { label: 'validate_monitor_user_template', value: 'validate_monitor_user_template' },
        { label: 'validate_existing_monitor_user_template', value: 'validate_existing_monitor_user_template' }
    ]}
>
<TabItem value="validate_monitor_user_template">

Validate the structure and content of a monitor user template.

```sql
EXEC datadog.monitoring.user_templates.validate_monitor_user_template 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="validate_existing_monitor_user_template">

Validate the structure and content of an existing monitor user template being updated to a new version.

```sql
EXEC datadog.monitoring.user_templates.validate_existing_monitor_user_template 
@template_id='{{ template_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
