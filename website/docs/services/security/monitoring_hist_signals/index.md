--- 
title: monitoring_hist_signals
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_hist_signals
  - security
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

Creates, updates, deletes, gets or lists a <code>monitoring_hist_signals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_hist_signals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_hist_signals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_monitoring_histsignal"
    values={[
        { label: 'get_security_monitoring_histsignal', value: 'get_security_monitoring_histsignal' },
        { label: 'get_security_monitoring_histsignals_by_job_id', value: 'get_security_monitoring_histsignals_by_job_id' },
        { label: 'list_security_monitoring_histsignals', value: 'list_security_monitoring_histsignals' }
    ]}
>
<TabItem value="get_security_monitoring_histsignal">

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
    <td>The unique ID of the security signal. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object containing all signal attributes and their associated values.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of event. (signal) (default: signal, example: signal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_security_monitoring_histsignals_by_job_id">

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
    <td>The unique ID of the security signal. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object containing all signal attributes and their associated values.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of event. (signal) (default: signal, example: signal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_monitoring_histsignals">

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
    <td>The unique ID of the security signal. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object containing all signal attributes and their associated values.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of event. (signal) (default: signal, example: signal)</td>
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
    <td><a href="#get_security_monitoring_histsignal"><CopyableCode code="get_security_monitoring_histsignal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-histsignal_id"><code>histsignal_id</code></a></td>
    <td></td>
    <td>Get a hist signal's details.</td>
</tr>
<tr>
    <td><a href="#get_security_monitoring_histsignals_by_job_id"><CopyableCode code="get_security_monitoring_histsignals_by_job_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a></td>
    <td><a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[from]"><code>filter[from]</code></a>, <a href="#parameter-filter[to]"><code>filter[to]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>Get a job's hist signals.</td>
</tr>
<tr>
    <td><a href="#list_security_monitoring_histsignals"><CopyableCode code="list_security_monitoring_histsignals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[from]"><code>filter[from]</code></a>, <a href="#parameter-filter[to]"><code>filter[to]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List hist signals.</td>
</tr>
<tr>
    <td><a href="#search_security_monitoring_histsignals"><CopyableCode code="search_security_monitoring_histsignals" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Search hist signals.</td>
</tr>
<tr>
    <td><a href="#convert_job_result_to_signal"><CopyableCode code="convert_job_result_to_signal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Convert a job result to a signal.</td>
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
<tr id="parameter-histsignal_id">
    <td><CopyableCode code="histsignal_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the historical signal.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[from]">
    <td><CopyableCode code="filter[from]" /></td>
    <td><code>string (date-time)</code></td>
    <td>The minimum timestamp for requested security signals. (example: 2019-01-02T09:42:36.320Z)</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>The search query for security signals. (example: security:attack status:high)</td>
</tr>
<tr id="parameter-filter[to]">
    <td><CopyableCode code="filter[to]" /></td>
    <td><code>string (date-time)</code></td>
    <td>The maximum timestamp for requested security signals. (example: 2019-01-03T09:42:36.320Z)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>A list of results using the cursor provided in the previous query. (example: eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of security signals in the response. (example: 25)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The order of the security signals in results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_monitoring_histsignal"
    values={[
        { label: 'get_security_monitoring_histsignal', value: 'get_security_monitoring_histsignal' },
        { label: 'get_security_monitoring_histsignals_by_job_id', value: 'get_security_monitoring_histsignals_by_job_id' },
        { label: 'list_security_monitoring_histsignals', value: 'list_security_monitoring_histsignals' }
    ]}
>
<TabItem value="get_security_monitoring_histsignal">

Get a hist signal's details.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_hist_signals
WHERE histsignal_id = '{{ histsignal_id }}' -- required
;
```
</TabItem>
<TabItem value="get_security_monitoring_histsignals_by_job_id">

Get a job's hist signals.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_hist_signals
WHERE job_id = '{{ job_id }}' -- required
AND filter[query] = '{{ filter[query] }}'
AND filter[from] = '{{ filter[from] }}'
AND filter[to] = '{{ filter[to] }}'
AND sort = '{{ sort }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
<TabItem value="list_security_monitoring_histsignals">

List hist signals.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_hist_signals
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
    defaultValue="search_security_monitoring_histsignals"
    values={[
        { label: 'search_security_monitoring_histsignals', value: 'search_security_monitoring_histsignals' },
        { label: 'convert_job_result_to_signal', value: 'convert_job_result_to_signal' }
    ]}
>
<TabItem value="search_security_monitoring_histsignals">

Search hist signals.

```sql
EXEC datadog.security.monitoring_hist_signals.search_security_monitoring_histsignals 
@@json=
'{
"filter": "{{ filter }}", 
"page": "{{ page }}", 
"sort": "{{ sort }}"
}'
;
```
</TabItem>
<TabItem value="convert_job_result_to_signal">

Convert a job result to a signal.

```sql
EXEC datadog.security.monitoring_hist_signals.convert_job_result_to_signal 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
