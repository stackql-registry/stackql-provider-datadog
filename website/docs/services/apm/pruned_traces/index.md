--- 
title: pruned_traces
hide_title: false
hide_table_of_contents: false
keywords:
  - pruned_traces
  - apm
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

Creates, updates, deletes, gets or lists a <code>pruned_traces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pruned_traces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.apm.pruned_traces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pruned_trace_by_id"
    values={[
        { label: 'get_pruned_trace_by_id', value: 'get_pruned_trace_by_id' }
    ]}
>
<TabItem value="get_pruned_trace_by_id">

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
    <td>The full 128-bit trace ID, encoded as a 32-character hexadecimal string. (example: 0000000000000000abc1230000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a pruned trace returned by the Get pruned trace by ID endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the pruned trace resource. The value is always `pruned_trace`. (pruned_trace) (example: pruned_trace)</td>
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
    <td><a href="#get_pruned_trace_by_id"><CopyableCode code="get_pruned_trace_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trace_id"><code>trace_id</code></a></td>
    <td><a href="#parameter-expand_span_id"><code>expand_span_id</code></a>, <a href="#parameter-time_hint"><code>time_hint</code></a>, <a href="#parameter-force_source"><code>force_source</code></a>, <a href="#parameter-include_path"><code>include_path</code></a>, <a href="#parameter-tag_include"><code>tag_include</code></a>, <a href="#parameter-tag_exclude"><code>tag_exclude</code></a>, <a href="#parameter-only_service_entry_spans"><code>only_service_entry_spans</code></a></td>
    <td>Retrieve a pruned, hierarchical view of an APM trace by its trace ID.&lt;br /&gt;The trace is summarized as a tree of spans rooted at the trace root and reduced in size&lt;br /&gt;to keep rendering large traces in the UI practical.&lt;br /&gt;This endpoint is rate limited to `60` requests per minute per organization.</td>
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
<tr id="parameter-trace_id">
    <td><CopyableCode code="trace_id" /></td>
    <td><code>string</code></td>
    <td>The trace ID. Accepts either a 32-character hexadecimal string (128-bit trace ID) or a decimal string of up to 39 digits. (example: 0000000000000000abc1230000000000)</td>
</tr>
<tr id="parameter-expand_span_id">
    <td><CopyableCode code="expand_span_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Span ID to expand and preserve in the pruned tree even when its branch would normally be summarized. (example: 9876543210987655000)</td>
</tr>
<tr id="parameter-force_source">
    <td><CopyableCode code="force_source" /></td>
    <td><code>string</code></td>
    <td>Force the trace to be loaded from a specific source. When unset, the API picks the source automatically. (example: driveline)</td>
</tr>
<tr id="parameter-include_path">
    <td><CopyableCode code="include_path" /></td>
    <td><code>array</code></td>
    <td>Restrict the pruned tree to spans matching the given `key:value` pairs. Values may be passed as repeated query parameters. (example: &#91;service:web-store&#93;)</td>
</tr>
<tr id="parameter-only_service_entry_spans">
    <td><CopyableCode code="only_service_entry_spans" /></td>
    <td><code>boolean</code></td>
    <td>When set to `true`, only service entry spans are included in the pruned tree. (example: false)</td>
</tr>
<tr id="parameter-tag_exclude">
    <td><CopyableCode code="tag_exclude" /></td>
    <td><code>array</code></td>
    <td>Regex patterns of tag keys whose values must be excluded from the pruned spans. Values may be passed as repeated query parameters. (example: &#91;^_dd\.&#93;)</td>
</tr>
<tr id="parameter-tag_include">
    <td><CopyableCode code="tag_include" /></td>
    <td><code>array</code></td>
    <td>Regex patterns of tag keys whose values must be included in the pruned spans. Values may be passed as repeated query parameters. (example: &#91;^http\.&#93;)</td>
</tr>
<tr id="parameter-time_hint">
    <td><CopyableCode code="time_hint" /></td>
    <td><code>integer (int32)</code></td>
    <td>Optional Unix time hint, in seconds, used to optimize the lookup of the trace in long-term storage. (example: 1716800000)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pruned_trace_by_id"
    values={[
        { label: 'get_pruned_trace_by_id', value: 'get_pruned_trace_by_id' }
    ]}
>
<TabItem value="get_pruned_trace_by_id">

Retrieve a pruned, hierarchical view of an APM trace by its trace ID.&lt;br /&gt;The trace is summarized as a tree of spans rooted at the trace root and reduced in size&lt;br /&gt;to keep rendering large traces in the UI practical.&lt;br /&gt;This endpoint is rate limited to `60` requests per minute per organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.apm.pruned_traces
WHERE trace_id = '{{ trace_id }}' -- required
AND expand_span_id = '{{ expand_span_id }}'
AND time_hint = '{{ time_hint }}'
AND force_source = '{{ force_source }}'
AND include_path = '{{ include_path }}'
AND tag_include = '{{ tag_include }}'
AND tag_exclude = '{{ tag_exclude }}'
AND only_service_entry_spans = '{{ only_service_entry_spans }}'
;
```
</TabItem>
</Tabs>
