--- 
title: case_types
hide_title: false
hide_table_of_contents: false
keywords:
  - case_types
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

Creates, updates, deletes, gets or lists a <code>case_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_all_case_types"
    values={[
        { label: 'get_all_case_types', value: 'get_all_case_types' }
    ]}
>
<TabItem value="get_all_case_types">

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
    <td>Case type's identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a case type, which define a classification category for cases. Organizations use case types to model different workflows (for example, Security Incident, Bug Report, Change Request).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for case types. (case_type) (default: case_type, example: case_type)</td>
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
    <td><a href="#get_all_case_types"><CopyableCode code="get_all_case_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all case types</td>
</tr>
<tr>
    <td><a href="#create_case_type"><CopyableCode code="create_case_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Case Type</td>
</tr>
<tr>
    <td><a href="#update_case_type"><CopyableCode code="update_case_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-case_type_id"><code>case_type_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates the name, emoji, or description of an existing case type.</td>
</tr>
<tr>
    <td><a href="#delete_case_type"><CopyableCode code="delete_case_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-case_type_id"><code>case_type_id</code></a></td>
    <td></td>
    <td>Delete a case type</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_all_case_types"
    values={[
        { label: 'get_all_case_types', value: 'get_all_case_types' }
    ]}
>
<TabItem value="get_all_case_types">

Get all case types

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.case_types
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case_type"
    values={[
        { label: 'create_case_type', value: 'create_case_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case_type">

Create a Case Type

```sql
INSERT INTO datadog.service_management.case_types (
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
- name: case_types
  props:
    - name: data
      description: |
        Data object for creating a case type.
      value:
        attributes:
          deleted_at: "{{ deleted_at }}"
          description: "{{ description }}"
          emoji: "{{ emoji }}"
          name: "{{ name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_case_type"
    values={[
        { label: 'update_case_type', value: 'update_case_type' }
    ]}
>
<TabItem value="update_case_type">

Updates the name, emoji, or description of an existing case type.

```sql
REPLACE datadog.service_management.case_types
SET 
data = '{{ data }}'
WHERE 
case_type_id = '{{ case_type_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_case_type"
    values={[
        { label: 'delete_case_type', value: 'delete_case_type' }
    ]}
>
<TabItem value="delete_case_type">

Delete a case type

```sql
DELETE FROM datadog.service_management.case_types
WHERE case_type_id = '{{ case_type_id }}' --required
;
```
</TabItem>
</Tabs>
