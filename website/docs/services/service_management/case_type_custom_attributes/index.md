--- 
title: case_type_custom_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - case_type_custom_attributes
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

Creates, updates, deletes, gets or lists a <code>case_type_custom_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_type_custom_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_type_custom_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_all_custom_attribute_configs_by_case_type"
    values={[
        { label: 'get_all_custom_attribute_configs_by_case_type', value: 'get_all_custom_attribute_configs_by_case_type' },
        { label: 'get_all_custom_attributes', value: 'get_all_custom_attributes' }
    ]}
>
<TabItem value="get_all_custom_attribute_configs_by_case_type">

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
    <td>Custom attribute configs identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom attribute configuration, defining an organization-specific metadata field that can be added to cases of a given type.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for custom attribute configurations. (custom_attribute) (default: custom_attribute, example: custom_attribute)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_custom_attributes">

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
    <td>Custom attribute configs identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom attribute configuration, defining an organization-specific metadata field that can be added to cases of a given type.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for custom attribute configurations. (custom_attribute) (default: custom_attribute, example: custom_attribute)</td>
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
    <td><a href="#get_all_custom_attribute_configs_by_case_type"><CopyableCode code="get_all_custom_attribute_configs_by_case_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_type_id"><code>case_type_id</code></a></td>
    <td></td>
    <td>Get all custom attribute config of case type</td>
</tr>
<tr>
    <td><a href="#get_all_custom_attributes"><CopyableCode code="get_all_custom_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all custom attributes</td>
</tr>
<tr>
    <td><a href="#create_custom_attribute_config"><CopyableCode code="create_custom_attribute_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-case_type_id"><code>case_type_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create custom attribute config for a case type</td>
</tr>
<tr>
    <td><a href="#update_custom_attribute_config"><CopyableCode code="update_custom_attribute_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-case_type_id"><code>case_type_id</code></a>, <a href="#parameter-custom_attribute_id"><code>custom_attribute_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates the display name, description, type, or options of an existing custom attribute configuration for a case type.</td>
</tr>
<tr>
    <td><a href="#delete_custom_attribute_config"><CopyableCode code="delete_custom_attribute_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-case_type_id"><code>case_type_id</code></a>, <a href="#parameter-custom_attribute_id"><code>custom_attribute_id</code></a></td>
    <td></td>
    <td>Delete custom attribute config</td>
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
<tr id="parameter-case_type_id">
    <td><CopyableCode code="case_type_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the case type. (example: f98a5a5b-e0ff-45d4-b2f5-afe6e74de505)</td>
</tr>
<tr id="parameter-custom_attribute_id">
    <td><CopyableCode code="custom_attribute_id" /></td>
    <td><code>string</code></td>
    <td>Case Custom attribute's UUID (example: f98a5a5b-e0ff-45d4-b2f5-afe6e74de505)</td>
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
    defaultValue="get_all_custom_attribute_configs_by_case_type"
    values={[
        { label: 'get_all_custom_attribute_configs_by_case_type', value: 'get_all_custom_attribute_configs_by_case_type' },
        { label: 'get_all_custom_attributes', value: 'get_all_custom_attributes' }
    ]}
>
<TabItem value="get_all_custom_attribute_configs_by_case_type">

Get all custom attribute config of case type

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.case_type_custom_attributes
WHERE case_type_id = '{{ case_type_id }}' -- required
;
```
</TabItem>
<TabItem value="get_all_custom_attributes">

Get all custom attributes

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.case_type_custom_attributes
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_attribute_config"
    values={[
        { label: 'create_custom_attribute_config', value: 'create_custom_attribute_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_attribute_config">

Create custom attribute config for a case type

```sql
INSERT INTO datadog.service_management.case_type_custom_attributes (
data,
case_type_id
)
SELECT 
'{{ data }}' /* required */,
'{{ case_type_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_type_custom_attributes
  props:
    - name: case_type_id
      value: "{{ case_type_id }}"
      description: Required parameter for the case_type_custom_attributes resource.
    - name: data
      description: |
        Data object for creating a custom attribute configuration.
      value:
        attributes:
          description: "{{ description }}"
          display_name: "{{ display_name }}"
          is_multi: {{ is_multi }}
          key: "{{ key }}"
          type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_custom_attribute_config"
    values={[
        { label: 'update_custom_attribute_config', value: 'update_custom_attribute_config' }
    ]}
>
<TabItem value="update_custom_attribute_config">

Updates the display name, description, type, or options of an existing custom attribute configuration for a case type.

```sql
REPLACE datadog.service_management.case_type_custom_attributes
SET 
data = '{{ data }}'
WHERE 
case_type_id = '{{ case_type_id }}' --required
AND custom_attribute_id = '{{ custom_attribute_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_attribute_config"
    values={[
        { label: 'delete_custom_attribute_config', value: 'delete_custom_attribute_config' }
    ]}
>
<TabItem value="delete_custom_attribute_config">

Delete custom attribute config

```sql
DELETE FROM datadog.service_management.case_type_custom_attributes
WHERE case_type_id = '{{ case_type_id }}' --required
AND custom_attribute_id = '{{ custom_attribute_id }}' --required
;
```
</TabItem>
</Tabs>
