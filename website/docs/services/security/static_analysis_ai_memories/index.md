--- 
title: static_analysis_ai_memories
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_ai_memories
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

Creates, updates, deletes, gets or lists a <code>static_analysis_ai_memories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_ai_memories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_ai_memories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ai_memory_violation_results"
    values={[
        { label: 'list_ai_memory_violation_results', value: 'list_ai_memory_violation_results' }
    ]}
>
<TabItem value="list_ai_memory_violation_results">

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
    <td>The numeric identifier of the violation result. (example: 42)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Response attributes of an AI memory violation result.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AI memory violation result resource type. (ai_memory_violation_result) (example: ai_memory_violation_result)</td>
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
    <td><a href="#list_ai_memory_violation_results"><CopyableCode code="list_ai_memory_violation_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all AI memory violation results for the authenticated organization.</td>
</tr>
<tr>
    <td><a href="#create_ai_memory_violation_result"><CopyableCode code="create_ai_memory_violation_result" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Add a new AI memory violation result for the authenticated organization.</td>
</tr>
<tr>
    <td><a href="#delete_ai_memory_violation_result"><CopyableCode code="delete_ai_memory_violation_result" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an AI memory violation result by its numeric identifier.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The numeric identifier of the memory violation result.</td>
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
    defaultValue="list_ai_memory_violation_results"
    values={[
        { label: 'list_ai_memory_violation_results', value: 'list_ai_memory_violation_results' }
    ]}
>
<TabItem value="list_ai_memory_violation_results">

Get all AI memory violation results for the authenticated organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_ai_memories
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_memory_violation_result"
    values={[
        { label: 'create_ai_memory_violation_result', value: 'create_ai_memory_violation_result' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_memory_violation_result">

Add a new AI memory violation result for the authenticated organization.

```sql
INSERT INTO datadog.security.static_analysis_ai_memories (
data
)
SELECT 
'{{ data }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: static_analysis_ai_memories
  props:
    - name: data
      description: |
        Request data for creating an AI memory violation result.
      value:
        attributes:
          line: {{ line }}
          message: "{{ message }}"
          name: "{{ name }}"
          repository_id: "{{ repository_id }}"
          rule: "{{ rule }}"
          sha: "{{ sha }}"
          type: "{{ type }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_memory_violation_result"
    values={[
        { label: 'delete_ai_memory_violation_result', value: 'delete_ai_memory_violation_result' }
    ]}
>
<TabItem value="delete_ai_memory_violation_result">

Delete an AI memory violation result by its numeric identifier.

```sql
DELETE FROM datadog.security.static_analysis_ai_memories
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
