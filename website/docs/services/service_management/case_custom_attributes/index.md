--- 
title: case_custom_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - case_custom_attributes
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

Creates, updates, deletes, gets or lists a <code>case_custom_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_custom_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_custom_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_case_custom_attribute"><CopyableCode code="update_case_custom_attribute" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-custom_attribute_key"><code>custom_attribute_key</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update case custom attribute</td>
</tr>
<tr>
    <td><a href="#delete_case_custom_attribute"><CopyableCode code="delete_case_custom_attribute" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-custom_attribute_key"><code>custom_attribute_key</code></a></td>
    <td></td>
    <td>Delete custom attribute from case</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Case's UUID or key (example: f98a5a5b-e0ff-45d4-b2f5-afe6e74de504)</td>
</tr>
<tr id="parameter-custom_attribute_key">
    <td><CopyableCode code="custom_attribute_key" /></td>
    <td><code>string</code></td>
    <td>Case Custom attribute's key (example: aws_region)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="update_case_custom_attribute"
    values={[
        { label: 'update_case_custom_attribute', value: 'update_case_custom_attribute' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="update_case_custom_attribute">

Update case custom attribute

```sql
INSERT INTO datadog.service_management.case_custom_attributes (
data,
case_id,
custom_attribute_key
)
SELECT 
'{{ data }}' /* required */,
'{{ case_id }}',
'{{ custom_attribute_key }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_custom_attributes
  props:
    - name: case_id
      value: "{{ case_id }}"
      description: Required parameter for the case_custom_attributes resource.
    - name: custom_attribute_key
      value: "{{ custom_attribute_key }}"
      description: Required parameter for the case_custom_attributes resource.
    - name: data
      description: |
        Case update custom attribute
      value:
        attributes:
          is_multi: {{ is_multi }}
          type: "{{ type }}"
          value: "{{ value }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_case_custom_attribute"
    values={[
        { label: 'delete_case_custom_attribute', value: 'delete_case_custom_attribute' }
    ]}
>
<TabItem value="delete_case_custom_attribute">

Delete custom attribute from case

```sql
DELETE FROM datadog.service_management.case_custom_attributes
WHERE case_id = '{{ case_id }}' --required
AND custom_attribute_key = '{{ custom_attribute_key }}' --required
;
```
</TabItem>
</Tabs>
