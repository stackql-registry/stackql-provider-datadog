--- 
title: rum_events
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_events
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rumevents"
    values={[
        { label: 'list_rumevents', value: 'list_rumevents' }
    ]}
>
<TabItem value="list_rumevents">

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
    <td>Unique ID of the event. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>JSON object containing all event attributes and their associated values.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the event. (rum) (default: rum, example: rum)</td>
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
    <td><a href="#list_rumevents"><CopyableCode code="list_rumevents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[from]"><code>filter[from]</code></a>, <a href="#parameter-filter[to]"><code>filter[to]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List endpoint returns events that match a RUM search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to see your latest RUM events.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination</td>
</tr>
<tr>
    <td><a href="#aggregate_rumevents"><CopyableCode code="aggregate_rumevents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>The API endpoint to aggregate RUM events into buckets of computed metrics and timeseries.</td>
</tr>
<tr>
    <td><a href="#search_rumevents"><CopyableCode code="search_rumevents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>List endpoint returns RUM events that match a RUM search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to build complex RUM events filtering and search.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination</td>
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
    <td><code>string (date-time)</code></td>
    <td>Minimum timestamp for requested events. (example: 2019-01-02T09:42:36.320Z)</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Search query following RUM syntax. (example: @type:session @application_id:xxxx)</td>
</tr>
<tr id="parameter-filter[to]">
    <td><CopyableCode code="filter[to]" /></td>
    <td><code>string (date-time)</code></td>
    <td>Maximum timestamp for requested events. (example: 2019-01-03T09:42:36.320Z)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>List following results with a cursor provided in the previous query. (example: eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of events in the response. (example: 25)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Order of events in results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_rumevents"
    values={[
        { label: 'list_rumevents', value: 'list_rumevents' }
    ]}
>
<TabItem value="list_rumevents">

List endpoint returns events that match a RUM search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to see your latest RUM events.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_events
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


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="aggregate_rumevents"
    values={[
        { label: 'aggregate_rumevents', value: 'aggregate_rumevents' },
        { label: 'search_rumevents', value: 'search_rumevents' }
    ]}
>
<TabItem value="aggregate_rumevents">

The API endpoint to aggregate RUM events into buckets of computed metrics and timeseries.

```sql
EXEC datadog.digital_experience.rum_events.aggregate_rumevents 
@@json=
'{
"compute": "{{ compute }}", 
"filter": "{{ filter }}", 
"group_by": "{{ group_by }}", 
"options": "{{ options }}", 
"page": "{{ page }}"
}'
;
```
</TabItem>
<TabItem value="search_rumevents">

List endpoint returns RUM events that match a RUM search query.&lt;br /&gt;&#91;Results are paginated&#93;&#91;1&#93;.&lt;br /&gt;&lt;br /&gt;Use this endpoint to build complex RUM events filtering and search.&lt;br /&gt;&lt;br /&gt;&#91;1&#93;: https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination

```sql
EXEC datadog.digital_experience.rum_events.search_rumevents 
@@json=
'{
"filter": "{{ filter }}", 
"options": "{{ options }}", 
"page": "{{ page }}", 
"sort": "{{ sort }}"
}'
;
```
</TabItem>
</Tabs>
