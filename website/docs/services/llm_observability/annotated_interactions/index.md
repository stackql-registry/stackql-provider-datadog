--- 
title: annotated_interactions
hide_title: false
hide_table_of_contents: false
keywords:
  - annotated_interactions
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

Creates, updates, deletes, gets or lists an <code>annotated_interactions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotated_interactions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.annotated_interactions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_llmobs_annotated_interactions_by_trace_ids"
    values={[
        { label: 'get_llmobs_annotated_interactions_by_trace_ids', value: 'get_llmobs_annotated_interactions_by_trace_ids' }
    ]}
>
<TabItem value="get_llmobs_annotated_interactions_by_trace_ids">

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
    <td>Opaque identifier for the response object. (example: trace-query)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the cross-queue annotated interactions response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type for cross-queue annotated interactions lookup. (annotated_interactions_by_trace) (example: annotated_interactions_by_trace)</td>
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
    <td><a href="#get_llmobs_annotated_interactions_by_trace_ids"><CopyableCode code="get_llmobs_annotated_interactions_by_trace_ids" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-content_ids"><code>content_ids</code></a></td>
    <td><a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Returns annotated interactions across all annotation queues for the given content IDs.&lt;br /&gt;Results include queue metadata (ID and name) for each interaction.</td>
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
<tr id="parameter-content_ids">
    <td><CopyableCode code="content_ids" /></td>
    <td><code>array</code></td>
    <td>One or more content IDs to retrieve annotated interactions for. At least one is required. (wire: contentIds)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of results to return. Must be &gt; 0. Defaults to 100.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination offset. Must be &gt;= 0. Defaults to 0.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_llmobs_annotated_interactions_by_trace_ids"
    values={[
        { label: 'get_llmobs_annotated_interactions_by_trace_ids', value: 'get_llmobs_annotated_interactions_by_trace_ids' }
    ]}
>
<TabItem value="get_llmobs_annotated_interactions_by_trace_ids">

Returns annotated interactions across all annotation queues for the given content IDs.&lt;br /&gt;Results include queue metadata (ID and name) for each interaction.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.annotated_interactions
WHERE content_ids = '{{ content_ids }}' -- required
AND offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
