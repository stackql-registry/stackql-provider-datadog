--- 
title: span_events
hide_title: false
hide_table_of_contents: false
keywords:
  - span_events
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

Creates, updates, deletes, gets or lists a <code>span_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="span_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.span_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_spans"
    values={[
        { label: 'list_llmobs_spans', value: 'list_llmobs_spans' }
    ]}
>
<TabItem value="list_llmobs_spans">

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
    <td>Unique identifier of the span. (example: abc123def456)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability span.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type for an Agent Observability span. (span) (example: span)</td>
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
    <td><a href="#list_llmobs_spans"><CopyableCode code="list_llmobs_spans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[from]"><code>filter[from]</code></a>, <a href="#parameter-filter[to]"><code>filter[to]</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[span_id]"><code>filter[span_id]</code></a>, <a href="#parameter-filter[trace_id]"><code>filter[trace_id]</code></a>, <a href="#parameter-filter[span_kind]"><code>filter[span_kind]</code></a>, <a href="#parameter-filter[span_name]"><code>filter[span_name]</code></a>, <a href="#parameter-filter[ml_app]"><code>filter[ml_app]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-include_attachments"><code>include_attachments</code></a></td>
    <td>List Agent Observability spans matching the specified filters.</td>
</tr>
<tr>
    <td><a href="#search_llmobs_spans"><CopyableCode code="search_llmobs_spans" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Search Agent Observability spans using structured filters in the request body.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[from]">
    <td><CopyableCode code="filter[from]" /></td>
    <td><code>string</code></td>
    <td>Start of the time range. Accepts ISO 8601 or relative format (e.g., `now-15m`). Defaults to `now-15m`.</td>
</tr>
<tr id="parameter-filter[ml_app]">
    <td><CopyableCode code="filter[ml_app]" /></td>
    <td><code>string</code></td>
    <td>Filter by ML application name.</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Search query using Agent Observability query syntax. Supports attribute filters using the field:value syntax (e.g. session_id, trace_id, ml_app, meta.span.kind). When provided, structured field filters (`filter&#91;span_id&#93;`, `filter&#91;trace_id&#93;`, etc.) are ignored.</td>
</tr>
<tr id="parameter-filter[span_id]">
    <td><CopyableCode code="filter[span_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by exact span ID.</td>
</tr>
<tr id="parameter-filter[span_kind]">
    <td><CopyableCode code="filter[span_kind]" /></td>
    <td><code>string</code></td>
    <td>Filter by span kind (e.g., llm, agent, tool, task, workflow).</td>
</tr>
<tr id="parameter-filter[span_name]">
    <td><CopyableCode code="filter[span_name]" /></td>
    <td><code>string</code></td>
    <td>Filter by span name.</td>
</tr>
<tr id="parameter-filter[to]">
    <td><CopyableCode code="filter[to]" /></td>
    <td><code>string</code></td>
    <td>End of the time range. Accepts ISO 8601 or relative format. Defaults to `now`.</td>
</tr>
<tr id="parameter-filter[trace_id]">
    <td><CopyableCode code="filter[trace_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by exact trace ID.</td>
</tr>
<tr id="parameter-include_attachments">
    <td><CopyableCode code="include_attachments" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include attachment data in the response. Defaults to `true`.</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Cursor from the previous response to retrieve the next page.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of spans to return. Defaults to `10`.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort order for the results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_llmobs_spans"
    values={[
        { label: 'list_llmobs_spans', value: 'list_llmobs_spans' }
    ]}
>
<TabItem value="list_llmobs_spans">

List Agent Observability spans matching the specified filters.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.span_events
WHERE filter[from] = '{{ filter[from] }}'
AND filter[to] = '{{ filter[to] }}'
AND filter[query] = '{{ filter[query] }}'
AND filter[span_id] = '{{ filter[span_id] }}'
AND filter[trace_id] = '{{ filter[trace_id] }}'
AND filter[span_kind] = '{{ filter[span_kind] }}'
AND filter[span_name] = '{{ filter[span_name] }}'
AND filter[ml_app] = '{{ filter[ml_app] }}'
AND page[limit] = '{{ page[limit] }}'
AND page[cursor] = '{{ page[cursor] }}'
AND sort = '{{ sort }}'
AND include_attachments = '{{ include_attachments }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="search_llmobs_spans"
    values={[
        { label: 'search_llmobs_spans', value: 'search_llmobs_spans' }
    ]}
>
<TabItem value="search_llmobs_spans">

Search Agent Observability spans using structured filters in the request body.

```sql
EXEC datadog.llm_observability.span_events.search_llmobs_spans 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
