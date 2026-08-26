--- 
title: model_lab_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_lab_runs
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

Creates, updates, deletes, gets or lists a <code>model_lab_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_lab_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.model_lab_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_lab_run"
    values={[
        { label: 'get_model_lab_run', value: 'get_model_lab_run' },
        { label: 'list_model_lab_runs', value: 'list_model_lab_runs' }
    ]}
>
<TabItem value="get_model_lab_run">

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
    <td>The unique identifier of the run. (example: 42)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Model Lab run.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for a Model Lab run resource. (runs) (example: runs)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_lab_runs">

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
    <td>The unique identifier of the run. (example: 42)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Model Lab run.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for a Model Lab run resource. (runs) (example: runs)</td>
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
    <td><a href="#get_model_lab_run"><CopyableCode code="get_model_lab_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Get a single Model Lab run by its ID.</td>
</tr>
<tr>
    <td><a href="#list_model_lab_runs"><CopyableCode code="list_model_lab_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-filter[owner_id]"><code>filter[owner_id]</code></a>, <a href="#parameter-filter[status]"><code>filter[status]</code></a>, <a href="#parameter-filter[project_id]"><code>filter[project_id]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-filter[params]"><code>filter[params]</code></a>, <a href="#parameter-filter[parent_run_id]"><code>filter[parent_run_id]</code></a>, <a href="#parameter-pinned_first"><code>pinned_first</code></a>, <a href="#parameter-include_pinned"><code>include_pinned</code></a>, <a href="#parameter-include_descendant_matches"><code>include_descendant_matches</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>List all Model Lab runs for the current organization.</td>
</tr>
<tr>
    <td><a href="#delete_model_lab_run"><CopyableCode code="delete_model_lab_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Delete a Model Lab run by its ID.</td>
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
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the Model Lab run.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Text search filter for run name or description.</td>
</tr>
<tr id="parameter-filter[id]">
    <td><CopyableCode code="filter[id]" /></td>
    <td><code>string</code></td>
    <td>Filter by run ID(s). Comma-separated list for multiple IDs.</td>
</tr>
<tr id="parameter-filter[owner_id]">
    <td><CopyableCode code="filter[owner_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by owner UUID.</td>
</tr>
<tr id="parameter-filter[params]">
    <td><CopyableCode code="filter[params]" /></td>
    <td><code>string</code></td>
    <td>Filter by params. Format: key:value,key2:&gt;0.5,key3:true.</td>
</tr>
<tr id="parameter-filter[parent_run_id]">
    <td><CopyableCode code="filter[parent_run_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by parent run ID. Use 'null' to return only root runs (runs with no parent).</td>
</tr>
<tr id="parameter-filter[project_id]">
    <td><CopyableCode code="filter[project_id]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Filter by project ID.</td>
</tr>
<tr id="parameter-filter[status]">
    <td><CopyableCode code="filter[status]" /></td>
    <td><code>string</code></td>
    <td>Filter by run status. Valid values: pending, running, completed, failed, killed, unresponsive, paused.</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Filter by tags. Format: key:value,key2:value2.</td>
</tr>
<tr id="parameter-include_descendant_matches">
    <td><CopyableCode code="include_descendant_matches" /></td>
    <td><code>boolean</code></td>
    <td>When true, also return runs whose descendants match the active filters. The descendant_match field in each result indicates whether the run was included via a descendant match.</td>
</tr>
<tr id="parameter-include_pinned">
    <td><CopyableCode code="include_pinned" /></td>
    <td><code>boolean</code></td>
    <td>Include all runs pinned by the current user, regardless of other filters.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number (1-indexed).</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items per page. Maximum is 100.</td>
</tr>
<tr id="parameter-pinned_first">
    <td><CopyableCode code="pinned_first" /></td>
    <td><code>boolean</code></td>
    <td>Sort pinned runs before non-pinned runs. Pinned runs are ordered by pin time descending.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort field. Valid values: name, created_at, updated_at, duration. Prefix with '-' for descending order (e.g., -updated_at).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_model_lab_run"
    values={[
        { label: 'get_model_lab_run', value: 'get_model_lab_run' },
        { label: 'list_model_lab_runs', value: 'list_model_lab_runs' }
    ]}
>
<TabItem value="get_model_lab_run">

Get a single Model Lab run by its ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.model_lab_runs
WHERE run_id = '{{ run_id }}' -- required
;
```
</TabItem>
<TabItem value="list_model_lab_runs">

List all Model Lab runs for the current organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.model_lab_runs
WHERE filter[id] = '{{ filter[id] }}'
AND filter = '{{ filter }}'
AND filter[owner_id] = '{{ filter[owner_id] }}'
AND filter[status] = '{{ filter[status] }}'
AND filter[project_id] = '{{ filter[project_id] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND filter[params] = '{{ filter[params] }}'
AND filter[parent_run_id] = '{{ filter[parent_run_id] }}'
AND pinned_first = '{{ pinned_first }}'
AND include_pinned = '{{ include_pinned }}'
AND include_descendant_matches = '{{ include_descendant_matches }}'
AND sort = '{{ sort }}'
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_lab_run"
    values={[
        { label: 'delete_model_lab_run', value: 'delete_model_lab_run' }
    ]}
>
<TabItem value="delete_model_lab_run">

Delete a Model Lab run by its ID.

```sql
DELETE FROM datadog.llm_observability.model_lab_runs
WHERE run_id = '{{ run_id }}' --required
;
```
</TabItem>
</Tabs>
