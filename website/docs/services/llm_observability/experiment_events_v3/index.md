--- 
title: experiment_events_v3
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_events_v3
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

Creates, updates, deletes, gets or lists an <code>experiment_events_v3</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiment_events_v3" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.experiment_events_v3" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_experiment_events"
    values={[
        { label: 'list_llmobs_experiment_events', value: 'list_llmobs_experiment_events' }
    ]}
>
<TabItem value="list_llmobs_experiment_events">

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
    <td>Identifier for this events resource. (example: 3fd6b5e0-8910-4b1c-a7d0-5b84de329012)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an experiment events response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type for an experiment events collection. (experiment_events) (example: experiment_events)</td>
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
    <td><a href="#list_llmobs_experiment_events"><CopyableCode code="list_llmobs_experiment_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-experiment_id"><code>experiment_id</code></a></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a></td>
    <td>Retrieve spans and experiment-level summary metrics for a given experiment with cursor-based pagination.</td>
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
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Opaque cursor from a previous response to fetch the next page of results.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of spans to return per page. Defaults to 5000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_llmobs_experiment_events"
    values={[
        { label: 'list_llmobs_experiment_events', value: 'list_llmobs_experiment_events' }
    ]}
>
<TabItem value="list_llmobs_experiment_events">

Retrieve spans and experiment-level summary metrics for a given experiment with cursor-based pagination.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.experiment_events_v3
WHERE experiment_id = '{{ experiment_id }}' -- required
AND page[limit] = '{{ page[limit] }}'
AND page[cursor] = '{{ page[cursor] }}'
;
```
</TabItem>
</Tabs>
