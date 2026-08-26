--- 
title: dataset_records
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_records
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

Creates, updates, deletes, gets or lists a <code>dataset_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.dataset_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_dataset_records"
    values={[
        { label: 'list_llmobs_dataset_records', value: 'list_llmobs_dataset_records' }
    ]}
>
<TabItem value="list_llmobs_dataset_records">

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
    <td>Unique identifier of the record. (example: rec-7c3f5a1b-9e2d-4f8a-b1c6-3d7e9f0a2b4c)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the dataset this record belongs to. (example: 9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the record was created. (example: 2024-01-15T10:30:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="expected_output" /></td>
    <td><code>object (double)</code></td>
    <td>Represents any valid JSON value.</td>
</tr>
<tr>
    <td><CopyableCode code="input" /></td>
    <td><code>object (double)</code></td>
    <td>Represents any valid JSON value.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Arbitrary metadata associated with the record.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the record was last updated. (example: 2024-01-15T10:30:00Z)</td>
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
    <td><a href="#list_llmobs_dataset_records"><CopyableCode code="list_llmobs_dataset_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a></td>
    <td><a href="#parameter-filter[version]"><code>filter[version]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List all records in an Agent Observability dataset, sorted by creation date, newest first.</td>
</tr>
<tr>
    <td><a href="#create_llmobs_dataset_records"><CopyableCode code="create_llmobs_dataset_records" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Append one or more records to an Agent Observability dataset.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_dataset_records"><CopyableCode code="update_llmobs_dataset_records" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update one or more existing records in an Agent Observability dataset.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_dataset_records"><CopyableCode code="delete_llmobs_dataset_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Delete one or more records from an Agent Observability dataset.</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Agent Observability dataset. (example: 9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d)</td>
</tr>
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
<tr id="parameter-filter[version]">
    <td><CopyableCode code="filter[version]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Retrieve records from a specific dataset version. Defaults to the current version.</td>
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
    defaultValue="list_llmobs_dataset_records"
    values={[
        { label: 'list_llmobs_dataset_records', value: 'list_llmobs_dataset_records' }
    ]}
>
<TabItem value="list_llmobs_dataset_records">

List all records in an Agent Observability dataset, sorted by creation date, newest first.

```sql
SELECT
id,
dataset_id,
created_at,
expected_output,
input,
metadata,
updated_at
FROM datadog.llm_observability.dataset_records
WHERE project_id = '{{ project_id }}' -- required
AND dataset_id = '{{ dataset_id }}' -- required
AND filter[version] = '{{ filter[version] }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_dataset_records"
    values={[
        { label: 'create_llmobs_dataset_records', value: 'create_llmobs_dataset_records' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_dataset_records">

Append one or more records to an Agent Observability dataset.

```sql
INSERT INTO datadog.llm_observability.dataset_records (
data,
project_id,
dataset_id
)
SELECT 
'{{ data }}' /* required */,
'{{ project_id }}',
'{{ dataset_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_records
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the dataset_records resource.
    - name: dataset_id
      value: "{{ dataset_id }}"
      description: Required parameter for the dataset_records resource.
    - name: data
      description: |
        Data object for appending records to an Agent Observability dataset.
      value:
        attributes:
          deduplicate: {{ deduplicate }}
          records:
            - expected_output: "{{ expected_output }}"
              input: "{{ input }}"
              metadata: "{{ metadata }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_llmobs_dataset_records"
    values={[
        { label: 'update_llmobs_dataset_records', value: 'update_llmobs_dataset_records' }
    ]}
>
<TabItem value="update_llmobs_dataset_records">

Update one or more existing records in an Agent Observability dataset.

```sql
UPDATE datadog.llm_observability.dataset_records
SET 
data = '{{ data }}'
WHERE 
project_id = '{{ project_id }}' --required
AND dataset_id = '{{ dataset_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_llmobs_dataset_records"
    values={[
        { label: 'delete_llmobs_dataset_records', value: 'delete_llmobs_dataset_records' }
    ]}
>
<TabItem value="delete_llmobs_dataset_records">

Delete one or more records from an Agent Observability dataset.

```sql
EXEC datadog.llm_observability.dataset_records.delete_llmobs_dataset_records 
@project_id='{{ project_id }}' --required, 
@dataset_id='{{ dataset_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
