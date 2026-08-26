--- 
title: experiments
hide_title: false
hide_table_of_contents: false
keywords:
  - experiments
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

Creates, updates, deletes, gets or lists an <code>experiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.experiments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_experiments"
    values={[
        { label: 'list_llmobs_experiments', value: 'list_llmobs_experiments' }
    ]}
>
<TabItem value="list_llmobs_experiments">

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
    <td>Unique identifier of the experiment. (example: 3fd6b5e0-8910-4b1c-a7d0-5b84de329012)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability experiment.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability experiment. (experiments) (example: experiments)</td>
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
    <td><a href="#list_llmobs_experiments"><CopyableCode code="list_llmobs_experiments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[project_id]"><code>filter[project_id]</code></a>, <a href="#parameter-filter[dataset_id]"><code>filter[dataset_id]</code></a>, <a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-filter[experiment]"><code>filter[experiment]</code></a>, <a href="#parameter-filter[metadata]"><code>filter[metadata]</code></a>, <a href="#parameter-filter[parent_experiment_id]"><code>filter[parent_experiment_id]</code></a>, <a href="#parameter-filter[is_deleted]"><code>filter[is_deleted]</code></a>, <a href="#parameter-include[user_data]"><code>include[user_data]</code></a>, <a href="#parameter-include[dataset_names]"><code>include[dataset_names]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List all Agent Observability experiments sorted by creation date, newest first.</td>
</tr>
<tr>
    <td><a href="#create_llmobs_experiment"><CopyableCode code="create_llmobs_experiment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Agent Observability experiment.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_experiment"><CopyableCode code="update_llmobs_experiment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-experiment_id"><code>experiment_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update an existing Agent Observability experiment.</td>
</tr>
<tr>
    <td><a href="#aggregate_llmobs_experimentation"><CopyableCode code="aggregate_llmobs_experimentation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Execute an analytics aggregation over Agent Observability experimentation data.&lt;br /&gt;Use this endpoint to compute metrics (for example average eval scores) grouped by fields such as `span_id` or `experiment_id`.&lt;br /&gt;&lt;br /&gt;At least one `compute` definition and one `index` must be provided.</td>
</tr>
<tr>
    <td><a href="#search_llmobs_experimentation"><CopyableCode code="search_llmobs_experimentation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Search across Agent Observability experimentation entities — projects, datasets, dataset records, experiments, and experiment runs — using cursor-based pagination.&lt;br /&gt;&lt;br /&gt;The `filter.scope` field controls which entity types are returned. At least one valid scope must be provided.&lt;br /&gt;&lt;br /&gt;Returns `200 OK` when all results fit in a single page. Returns `206 Partial Content` with a cursor in `meta.after` when additional pages are available.</td>
</tr>
<tr>
    <td><a href="#simple_search_llmobs_experimentation"><CopyableCode code="simple_search_llmobs_experimentation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Search across Agent Observability experimentation entities using offset-based (page-number) pagination.&lt;br /&gt;Use this endpoint when you need total page count or want to navigate to a specific page number.&lt;br /&gt;&lt;br /&gt;The `filter.scope` field controls which entity types are returned. At least one valid scope must be provided.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_experiments"><CopyableCode code="delete_llmobs_experiments" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Delete one or more Agent Observability experiments.</td>
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
<tr id="parameter-experiment_id">
    <td><CopyableCode code="experiment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Agent Observability experiment. (example: 3fd6b5e0-8910-4b1c-a7d0-5b84de329012)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[dataset_id]">
    <td><CopyableCode code="filter[dataset_id]" /></td>
    <td><code>string</code></td>
    <td>Filter experiments by dataset ID.</td>
</tr>
<tr id="parameter-filter[experiment]">
    <td><CopyableCode code="filter[experiment]" /></td>
    <td><code>string</code></td>
    <td>Filter by logical experiment name. This is the `name` field set when creating an experiment through `POST /experiments`. Returns all experiment runs that share the same name, enabling cross-commit and cross-branch comparisons.</td>
</tr>
<tr id="parameter-filter[id]">
    <td><CopyableCode code="filter[id]" /></td>
    <td><code>string</code></td>
    <td>Filter experiments by experiment ID. Can be specified multiple times.</td>
</tr>
<tr id="parameter-filter[is_deleted]">
    <td><CopyableCode code="filter[is_deleted]" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, return only soft-deleted experiments. Defaults to `false`.</td>
</tr>
<tr id="parameter-filter[metadata]">
    <td><CopyableCode code="filter[metadata]" /></td>
    <td><code>string</code></td>
    <td>Filter by JSONB metadata containment. Provide a JSON object string where experiments whose metadata contains all specified key-value pairs are returned. For example: `&#123;"commit":"abc123","branch":"main"&#125;`.</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter experiments by their exact run name.</td>
</tr>
<tr id="parameter-filter[parent_experiment_id]">
    <td><CopyableCode code="filter[parent_experiment_id]" /></td>
    <td><code>string</code></td>
    <td>Filter experiments by the ID of their parent (baseline) experiment. Returns all experiments that were run against the given baseline. Can be specified multiple times.</td>
</tr>
<tr id="parameter-filter[project_id]">
    <td><CopyableCode code="filter[project_id]" /></td>
    <td><code>string</code></td>
    <td>Filter experiments by project ID. Required if `filter&#91;dataset_id&#93;` is not provided.</td>
</tr>
<tr id="parameter-include[dataset_names]">
    <td><CopyableCode code="include[dataset_names]" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, enrich each experiment with its dataset name in the `dataset_name` field.</td>
</tr>
<tr id="parameter-include[user_data]">
    <td><CopyableCode code="include[user_data]" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, enrich each experiment with its author's user data in the `author` field.</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Use the pagination cursor returned in `meta.after` to retrieve the next page of results.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of results to return per page. Values above 5000 are clamped to 5000. Defaults to 5000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_llmobs_experiments"
    values={[
        { label: 'list_llmobs_experiments', value: 'list_llmobs_experiments' }
    ]}
>
<TabItem value="list_llmobs_experiments">

List all Agent Observability experiments sorted by creation date, newest first.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.experiments
WHERE filter[project_id] = '{{ filter[project_id] }}'
AND filter[dataset_id] = '{{ filter[dataset_id] }}'
AND filter[id] = '{{ filter[id] }}'
AND filter[name] = '{{ filter[name] }}'
AND filter[experiment] = '{{ filter[experiment] }}'
AND filter[metadata] = '{{ filter[metadata] }}'
AND filter[parent_experiment_id] = '{{ filter[parent_experiment_id] }}'
AND filter[is_deleted] = '{{ filter[is_deleted] }}'
AND include[user_data] = '{{ include[user_data] }}'
AND include[dataset_names] = '{{ include[dataset_names] }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_experiment"
    values={[
        { label: 'create_llmobs_experiment', value: 'create_llmobs_experiment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_experiment">

Create a new Agent Observability experiment.

```sql
INSERT INTO datadog.llm_observability.experiments (
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
- name: experiments
  props:
    - name: data
      description: |
        Data object for creating an Agent Observability experiment.
      value:
        attributes:
          config: "{{ config }}"
          dataset_id: "{{ dataset_id }}"
          dataset_version: {{ dataset_version }}
          description: "{{ description }}"
          ensure_unique: {{ ensure_unique }}
          metadata: "{{ metadata }}"
          name: "{{ name }}"
          parent_experiment_id: "{{ parent_experiment_id }}"
          project_id: "{{ project_id }}"
          run_count: {{ run_count }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_llmobs_experiment"
    values={[
        { label: 'update_llmobs_experiment', value: 'update_llmobs_experiment' }
    ]}
>
<TabItem value="update_llmobs_experiment">

Partially update an existing Agent Observability experiment.

```sql
UPDATE datadog.llm_observability.experiments
SET 
data = '{{ data }}'
WHERE 
experiment_id = '{{ experiment_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="aggregate_llmobs_experimentation"
    values={[
        { label: 'aggregate_llmobs_experimentation', value: 'aggregate_llmobs_experimentation' },
        { label: 'search_llmobs_experimentation', value: 'search_llmobs_experimentation' },
        { label: 'simple_search_llmobs_experimentation', value: 'simple_search_llmobs_experimentation' },
        { label: 'delete_llmobs_experiments', value: 'delete_llmobs_experiments' }
    ]}
>
<TabItem value="aggregate_llmobs_experimentation">

Execute an analytics aggregation over Agent Observability experimentation data.&lt;br /&gt;Use this endpoint to compute metrics (for example average eval scores) grouped by fields such as `span_id` or `experiment_id`.&lt;br /&gt;&lt;br /&gt;At least one `compute` definition and one `index` must be provided.

```sql
EXEC datadog.llm_observability.experiments.aggregate_llmobs_experimentation 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="search_llmobs_experimentation">

Search across Agent Observability experimentation entities — projects, datasets, dataset records, experiments, and experiment runs — using cursor-based pagination.&lt;br /&gt;&lt;br /&gt;The `filter.scope` field controls which entity types are returned. At least one valid scope must be provided.&lt;br /&gt;&lt;br /&gt;Returns `200 OK` when all results fit in a single page. Returns `206 Partial Content` with a cursor in `meta.after` when additional pages are available.

```sql
EXEC datadog.llm_observability.experiments.search_llmobs_experimentation 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="simple_search_llmobs_experimentation">

Search across Agent Observability experimentation entities using offset-based (page-number) pagination.&lt;br /&gt;Use this endpoint when you need total page count or want to navigate to a specific page number.&lt;br /&gt;&lt;br /&gt;The `filter.scope` field controls which entity types are returned. At least one valid scope must be provided.

```sql
EXEC datadog.llm_observability.experiments.simple_search_llmobs_experimentation 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="delete_llmobs_experiments">

Delete one or more Agent Observability experiments.

```sql
EXEC datadog.llm_observability.experiments.delete_llmobs_experiments 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
