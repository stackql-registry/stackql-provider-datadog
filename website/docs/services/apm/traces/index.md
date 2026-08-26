--- 
title: traces
hide_title: false
hide_table_of_contents: false
keywords:
  - traces
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

Creates, updates, deletes, gets or lists a <code>traces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.apm.traces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trace_by_id"
    values={[
        { label: 'get_trace_by_id', value: 'get_trace_by_id' }
    ]}
>
<TabItem value="get_trace_by_id">

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
    <td>The attributes of a trace returned by the Get trace by ID endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the trace resource. The value is always `trace`. (trace) (example: trace)</td>
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
    <td><a href="#get_trace_by_id"><CopyableCode code="get_trace_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-trace_id"><code>trace_id</code></a></td>
    <td><a href="#parameter-include_fields"><code>include_fields</code></a></td>
    <td>Retrieve a full APM trace by its trace ID, including every span in the trace.&lt;br /&gt;Traces are returned from live storage when available and fall back to longer-term storage.&lt;br /&gt;This endpoint is rate limited to `60` requests per minute per organization.</td>
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
<tr id="parameter-include_fields">
    <td><CopyableCode code="include_fields" /></td>
    <td><code>array</code></td>
    <td>List of span fields to include in the response. When omitted, every available field is returned. Values may be passed as repeated query parameters or as a single comma-separated value. (example: &#91;service, resource_name&#93;)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trace_by_id"
    values={[
        { label: 'get_trace_by_id', value: 'get_trace_by_id' }
    ]}
>
<TabItem value="get_trace_by_id">

Retrieve a full APM trace by its trace ID, including every span in the trace.&lt;br /&gt;Traces are returned from live storage when available and fall back to longer-term storage.&lt;br /&gt;This endpoint is rate limited to `60` requests per minute per organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.apm.traces
WHERE trace_id = '{{ trace_id }}' -- required
AND include_fields = '{{ include_fields }}'
;
```
</TabItem>
</Tabs>
