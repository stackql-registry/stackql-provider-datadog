--- 
title: dataset_draft_states
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_draft_states
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

Creates, updates, deletes, gets or lists a <code>dataset_draft_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_draft_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.dataset_draft_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_llmobs_dataset_draft_state"
    values={[
        { label: 'get_llmobs_dataset_draft_state', value: 'get_llmobs_dataset_draft_state' }
    ]}
>
<TabItem value="get_llmobs_dataset_draft_state">

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
    <td>Unique identifier of the dataset draft state. Matches the dataset ID. (example: 9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability dataset draft state.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability dataset draft state. (draft_state_data) (example: draft_state_data)</td>
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
    <td><a href="#get_llmobs_dataset_draft_state"><CopyableCode code="get_llmobs_dataset_draft_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a></td>
    <td></td>
    <td>Retrieve the draft state of a dataset, including whether it is currently locked for editing and which user holds the lock.</td>
</tr>
<tr>
    <td><a href="#lock_llmobs_dataset_draft_state"><CopyableCode code="lock_llmobs_dataset_draft_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a></td>
    <td></td>
    <td>Acquire the draft lock on a dataset for the calling user. The lock prevents other users from concurrently editing the dataset draft.</td>
</tr>
<tr>
    <td><a href="#unlock_llmobs_dataset_draft_state"><CopyableCode code="unlock_llmobs_dataset_draft_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a></td>
    <td></td>
    <td>Release the draft lock on a dataset held by the calling user, allowing other users to edit the dataset draft.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_llmobs_dataset_draft_state"
    values={[
        { label: 'get_llmobs_dataset_draft_state', value: 'get_llmobs_dataset_draft_state' }
    ]}
>
<TabItem value="get_llmobs_dataset_draft_state">

Retrieve the draft state of a dataset, including whether it is currently locked for editing and which user holds the lock.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.dataset_draft_states
WHERE project_id = '{{ project_id }}' -- required
AND dataset_id = '{{ dataset_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="lock_llmobs_dataset_draft_state"
    values={[
        { label: 'lock_llmobs_dataset_draft_state', value: 'lock_llmobs_dataset_draft_state' },
        { label: 'unlock_llmobs_dataset_draft_state', value: 'unlock_llmobs_dataset_draft_state' }
    ]}
>
<TabItem value="lock_llmobs_dataset_draft_state">

Acquire the draft lock on a dataset for the calling user. The lock prevents other users from concurrently editing the dataset draft.

```sql
EXEC datadog.llm_observability.dataset_draft_states.lock_llmobs_dataset_draft_state 
@project_id='{{ project_id }}' --required, 
@dataset_id='{{ dataset_id }}' --required 
;
```
</TabItem>
<TabItem value="unlock_llmobs_dataset_draft_state">

Release the draft lock on a dataset held by the calling user, allowing other users to edit the dataset draft.

```sql
EXEC datadog.llm_observability.dataset_draft_states.unlock_llmobs_dataset_draft_state 
@project_id='{{ project_id }}' --required, 
@dataset_id='{{ dataset_id }}' --required 
;
```
</TabItem>
</Tabs>
