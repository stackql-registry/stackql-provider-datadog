--- 
title: spans
hide_title: false
hide_table_of_contents: false
keywords:
  - spans
  - metrics
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

Creates, updates, deletes, gets or lists a <code>spans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.spans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_spans_get"
    values={[
        { label: 'list_spans_get', value: 'list_spans_get' }
    ]}
>
<TabItem value="list_spans_get">

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
    <td>Unique ID of the Span. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>JSON object containing all span attributes and their associated values.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the span. (spans) (default: spans, example: spans)</td>
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
    <td><a href="#list_spans_get"><CopyableCode code="list_spans_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[from]"><code>filter[from]</code></a>, <a href="#parameter-filter[to]"><code>filter[to]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List endpoint returns spans that match a span search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to see your latest spans.&lt;br /&gt;This endpoint is rate limited to `300` requests per hour.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api</td>
</tr>
<tr>
    <td><a href="#list_spans"><CopyableCode code="list_spans" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>List endpoint returns spans that match a span search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to build complex spans filtering and search.&lt;br /&gt;This endpoint is rate limited to `300` requests per hour.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api</td>
</tr>
<tr>
    <td><a href="#aggregate_spans"><CopyableCode code="aggregate_spans" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>The API endpoint to aggregate spans into buckets and compute metrics and timeseries.&lt;br /&gt;This endpoint is rate limited to `300` requests per hour.</td>
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
    <td>Minimum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds). (example: 2023-01-02T09:42:36.320Z)</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Search query following spans syntax. (example: @datacenter:us @role:db)</td>
</tr>
<tr id="parameter-filter[to]">
    <td><CopyableCode code="filter[to]" /></td>
    <td><code>string</code></td>
    <td>Maximum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds). (example: 2023-01-03T09:42:36.320Z)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>List following results with a cursor provided in the previous query. (example: eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of spans in the response. (example: 25)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Order of spans in results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_spans_get"
    values={[
        { label: 'list_spans_get', value: 'list_spans_get' }
    ]}
>
<TabItem value="list_spans_get">

List endpoint returns spans that match a span search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to see your latest spans.&lt;br /&gt;This endpoint is rate limited to `300` requests per hour.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.spans
WHERE filter[query] = '{{ filter[query] }}'
AND filter[from] = '{{ filter[from] }}'
AND filter[to] = '{{ filter[to] }}'
AND sort = '{{ sort }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="list_spans"
    values={[
        { label: 'list_spans', value: 'list_spans' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="list_spans">

List endpoint returns spans that match a span search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to build complex spans filtering and search.&lt;br /&gt;This endpoint is rate limited to `300` requests per hour.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api

```sql
INSERT INTO datadog.metrics.spans (
data
)
SELECT 
'{{ data }}'
RETURNING
data,
links,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: spans
  props:
    - name: data
      description: |
        The object containing the query content.
      value:
        attributes:
          filter:
            from: "{{ from }}"
            query: "{{ query }}"
            to: "{{ to }}"
          options:
            timeOffset: {{ timeOffset }}
            timezone: "{{ timezone }}"
          page:
            cursor: "{{ cursor }}"
            limit: {{ limit }}
          sort: "{{ sort }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="aggregate_spans"
    values={[
        { label: 'aggregate_spans', value: 'aggregate_spans' }
    ]}
>
<TabItem value="aggregate_spans">

The API endpoint to aggregate spans into buckets and compute metrics and timeseries.&lt;br /&gt;This endpoint is rate limited to `300` requests per hour.

```sql
EXEC datadog.metrics.spans.aggregate_spans 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
