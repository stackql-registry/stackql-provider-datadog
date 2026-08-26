--- 
title: scanning_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - scanning_groups
  - security
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

Creates, updates, deletes, gets or lists a <code>scanning_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scanning_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.scanning_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_scanning_groups"
    values={[
        { label: 'list_scanning_groups', value: 'list_scanning_groups' }
    ]}
>
<TabItem value="list_scanning_groups">

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
    <td>ID of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the Sensitive Data configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Sensitive Data Scanner configuration type. (sensitive_data_scanner_configuration) (default: sensitive_data_scanner_configuration, example: sensitive_data_scanner_configuration)</td>
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
    <td><a href="#list_scanning_groups"><CopyableCode code="list_scanning_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all the Scanning groups in your organization.</td>
</tr>
<tr>
    <td><a href="#create_scanning_group"><CopyableCode code="create_scanning_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a scanning group.&lt;br /&gt;The request MAY include a configuration relationship.&lt;br /&gt;A rules relationship can be omitted entirely, but if it is included it MUST be&lt;br /&gt;null or an empty array (rules cannot be created at the same time).&lt;br /&gt;The new group will be ordered last within the configuration.</td>
</tr>
<tr>
    <td><a href="#update_scanning_group"><CopyableCode code="update_scanning_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-data"><code>data</code></a>, <a href="#parameter-meta"><code>meta</code></a></td>
    <td></td>
    <td>Update a group, including the order of the rules.&lt;br /&gt;Rules within the group are reordered by including a rules relationship. If the rules&lt;br /&gt;relationship is present, its data section MUST contain linkages for all of the rules&lt;br /&gt;currently in the group, and MUST NOT contain any others.</td>
</tr>
<tr>
    <td><a href="#delete_scanning_group"><CopyableCode code="delete_scanning_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a></td>
    <td></td>
    <td>Delete a given group.</td>
</tr>
<tr>
    <td><a href="#reorder_scanning_groups"><CopyableCode code="reorder_scanning_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a>, <a href="#parameter-meta"><code>meta</code></a></td>
    <td></td>
    <td>Reorder the list of groups.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a group of rules.</td>
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
    defaultValue="list_scanning_groups"
    values={[
        { label: 'list_scanning_groups', value: 'list_scanning_groups' }
    ]}
>
<TabItem value="list_scanning_groups">

List all the Scanning groups in your organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.security.scanning_groups
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scanning_group"
    values={[
        { label: 'create_scanning_group', value: 'create_scanning_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scanning_group">

Create a scanning group.&lt;br /&gt;The request MAY include a configuration relationship.&lt;br /&gt;A rules relationship can be omitted entirely, but if it is included it MUST be&lt;br /&gt;null or an empty array (rules cannot be created at the same time).&lt;br /&gt;The new group will be ordered last within the configuration.

```sql
INSERT INTO datadog.security.scanning_groups (
data,
meta
)
SELECT 
'{{ data }}',
'{{ meta }}'
RETURNING
data,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scanning_groups
  props:
    - name: data
      description: |
        Data related to the creation of a group.
      value:
        attributes:
          description: "{{ description }}"
          filter:
            query: "{{ query }}"
          is_enabled: {{ is_enabled }}
          name: "{{ name }}"
          product_list:
            - "{{ product_list }}"
          samplings:
            - product: "{{ product }}"
              rate: {{ rate }}
        relationships:
          configuration:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
          rules:
            data:
              - id: "{{ id }}"
                type: "{{ type }}"
        type: "{{ type }}"
    - name: meta
      description: |
        Meta payload containing information about the API.
      value:
        version: {{ version }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scanning_group"
    values={[
        { label: 'update_scanning_group', value: 'update_scanning_group' }
    ]}
>
<TabItem value="update_scanning_group">

Update a group, including the order of the rules.&lt;br /&gt;Rules within the group are reordered by including a rules relationship. If the rules&lt;br /&gt;relationship is present, its data section MUST contain linkages for all of the rules&lt;br /&gt;currently in the group, and MUST NOT contain any others.

```sql
UPDATE datadog.security.scanning_groups
SET 
data = '{{ data }}',
meta = '{{ meta }}'
WHERE 
group_id = '{{ group_id }}' --required
AND data = '{{ data }}' --required
AND meta = '{{ meta }}' --required
RETURNING
meta;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scanning_group"
    values={[
        { label: 'delete_scanning_group', value: 'delete_scanning_group' }
    ]}
>
<TabItem value="delete_scanning_group">

Delete a given group.

```sql
DELETE FROM datadog.security.scanning_groups
WHERE group_id = '{{ group_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reorder_scanning_groups"
    values={[
        { label: 'reorder_scanning_groups', value: 'reorder_scanning_groups' }
    ]}
>
<TabItem value="reorder_scanning_groups">

Reorder the list of groups.

```sql
EXEC datadog.security.scanning_groups.reorder_scanning_groups 
@@json=
'{
"data": "{{ data }}", 
"meta": "{{ meta }}"
}'
;
```
</TabItem>
</Tabs>
