--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_datasets"
    values={[
        { label: 'list_llmobs_datasets', value: 'list_llmobs_datasets' }
    ]}
>
<TabItem value="list_llmobs_datasets">

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
    <td>Unique identifier of the dataset. (example: 9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability dataset. (datasets) (example: datasets)</td>
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
    <td><a href="#list_llmobs_datasets"><CopyableCode code="list_llmobs_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List all Agent Observability datasets for a project, sorted by creation date, newest first.</td>
</tr>
<tr>
    <td><a href="#create_llmobs_dataset"><CopyableCode code="create_llmobs_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Agent Observability dataset within the specified project.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_dataset"><CopyableCode code="update_llmobs_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update an existing Agent Observability dataset within the specified project.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_datasets"><CopyableCode code="delete_llmobs_datasets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Delete one or more Agent Observability datasets within the specified project.</td>
</tr>
<tr>
    <td><a href="#batch_update_llmobs_dataset"><CopyableCode code="batch_update_llmobs_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Insert, update, and delete records in a single dataset operation. By default, a new dataset version is created when the batch is applied.</td>
</tr>
<tr>
    <td><a href="#clone_llmobs_dataset"><CopyableCode code="clone_llmobs_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Clone a dataset, copying its current records into a new dataset within the same project.</td>
</tr>
<tr>
    <td><a href="#restore_llmobs_dataset_version"><CopyableCode code="restore_llmobs_dataset_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Restore a dataset to a previous version. The dataset's current version is bumped, and its records are replaced with the records from the specified prior version.</td>
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
<tr id="parameter-filter[id]">
    <td><CopyableCode code="filter[id]" /></td>
    <td><code>string</code></td>
    <td>Filter datasets by dataset ID.</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter datasets by name.</td>
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
    defaultValue="list_llmobs_datasets"
    values={[
        { label: 'list_llmobs_datasets', value: 'list_llmobs_datasets' }
    ]}
>
<TabItem value="list_llmobs_datasets">

List all Agent Observability datasets for a project, sorted by creation date, newest first.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.datasets
WHERE project_id = '{{ project_id }}' -- required
AND filter[name] = '{{ filter[name] }}'
AND filter[id] = '{{ filter[id] }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_dataset"
    values={[
        { label: 'create_llmobs_dataset', value: 'create_llmobs_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_dataset">

Create a new Agent Observability dataset within the specified project.

```sql
INSERT INTO datadog.llm_observability.datasets (
data,
project_id
)
SELECT 
'{{ data }}' /* required */,
'{{ project_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datasets
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the datasets resource.
    - name: data
      description: |
        Data object for creating an Agent Observability dataset.
      value:
        attributes:
          description: "{{ description }}"
          metadata: "{{ metadata }}"
          name: "{{ name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_llmobs_dataset"
    values={[
        { label: 'update_llmobs_dataset', value: 'update_llmobs_dataset' }
    ]}
>
<TabItem value="update_llmobs_dataset">

Partially update an existing Agent Observability dataset within the specified project.

```sql
UPDATE datadog.llm_observability.datasets
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
    defaultValue="delete_llmobs_datasets"
    values={[
        { label: 'delete_llmobs_datasets', value: 'delete_llmobs_datasets' },
        { label: 'batch_update_llmobs_dataset', value: 'batch_update_llmobs_dataset' },
        { label: 'clone_llmobs_dataset', value: 'clone_llmobs_dataset' },
        { label: 'restore_llmobs_dataset_version', value: 'restore_llmobs_dataset_version' }
    ]}
>
<TabItem value="delete_llmobs_datasets">

Delete one or more Agent Observability datasets within the specified project.

```sql
EXEC datadog.llm_observability.datasets.delete_llmobs_datasets 
@project_id='{{ project_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_llmobs_dataset">

Insert, update, and delete records in a single dataset operation. By default, a new dataset version is created when the batch is applied.

```sql
EXEC datadog.llm_observability.datasets.batch_update_llmobs_dataset 
@project_id='{{ project_id }}' --required, 
@dataset_id='{{ dataset_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="clone_llmobs_dataset">

Clone a dataset, copying its current records into a new dataset within the same project.

```sql
EXEC datadog.llm_observability.datasets.clone_llmobs_dataset 
@project_id='{{ project_id }}' --required, 
@dataset_id='{{ dataset_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="restore_llmobs_dataset_version">

Restore a dataset to a previous version. The dataset's current version is bumped, and its records are replaced with the records from the specified prior version.

```sql
EXEC datadog.llm_observability.datasets.restore_llmobs_dataset_version 
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
