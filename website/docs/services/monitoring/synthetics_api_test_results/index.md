--- 
title: synthetics_api_test_results
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_api_test_results
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>synthetics_api_test_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_api_test_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_api_test_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_apitest_result"
    values={[
        { label: 'get_apitest_result', value: 'get_apitest_result' },
        { label: 'get_apitest_latest_results', value: 'get_apitest_latest_results' }
    ]}
>
<TabItem value="get_apitest_result">

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
    <td><CopyableCode code="result_id" /></td>
    <td><code>string</code></td>
    <td>ID of the API test result.</td>
</tr>
<tr>
    <td><CopyableCode code="check" /></td>
    <td><code>object</code></td>
    <td>Object describing the API test configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="check_time" /></td>
    <td><code>number (double)</code></td>
    <td>When the API test was conducted.</td>
</tr>
<tr>
    <td><CopyableCode code="check_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version of the API test used.</td>
</tr>
<tr>
    <td><CopyableCode code="probe_dc" /></td>
    <td><code>string</code></td>
    <td>Locations for which to query the API test results.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>Object containing results for your Synthetic API test.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer (int64)</code></td>
    <td>The status of your Synthetic monitor. * `O` for not triggered * `1` for triggered * `2` for no data (0, 1, 2)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_apitest_latest_results">

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
    <td><CopyableCode code="result_id" /></td>
    <td><code>string</code></td>
    <td>ID of the API test result.</td>
</tr>
<tr>
    <td><CopyableCode code="check_time" /></td>
    <td><code>number (double)</code></td>
    <td>Last time the API test was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="probe_dc" /></td>
    <td><code>string</code></td>
    <td>Location from which the API test was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>Result of the last API test run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer (int64)</code></td>
    <td>The status of your Synthetic monitor. * `O` for not triggered * `1` for triggered * `2` for no data (0, 1, 2)</td>
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
    <td><a href="#get_apitest_result"><CopyableCode code="get_apitest_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-result_id"><code>result_id</code></a></td>
    <td></td>
    <td>Get a specific full result from a given Synthetic API test.</td>
</tr>
<tr>
    <td><a href="#get_apitest_latest_results"><CopyableCode code="get_apitest_latest_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td><a href="#parameter-from_ts"><code>from_ts</code></a>, <a href="#parameter-to_ts"><code>to_ts</code></a>, <a href="#parameter-probe_dc"><code>probe_dc</code></a></td>
    <td>Get the last 150 test results summaries for a given Synthetic API test.</td>
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
<tr id="parameter-public_id">
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The public ID of the test for which to search results for.</td>
</tr>
<tr id="parameter-result_id">
    <td><CopyableCode code="result_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the result to get.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-from_ts">
    <td><CopyableCode code="from_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Timestamp in milliseconds from which to start querying results.</td>
</tr>
<tr id="parameter-probe_dc">
    <td><CopyableCode code="probe_dc" /></td>
    <td><code>array</code></td>
    <td>Locations for which to query results.</td>
</tr>
<tr id="parameter-to_ts">
    <td><CopyableCode code="to_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Timestamp in milliseconds up to which to query results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_apitest_result"
    values={[
        { label: 'get_apitest_result', value: 'get_apitest_result' },
        { label: 'get_apitest_latest_results', value: 'get_apitest_latest_results' }
    ]}
>
<TabItem value="get_apitest_result">

Get a specific full result from a given Synthetic API test.

```sql
SELECT
result_id,
check,
check_time,
check_version,
probe_dc,
result,
status
FROM datadog.monitoring.synthetics_api_test_results
WHERE public_id = '{{ public_id }}' -- required
AND result_id = '{{ result_id }}' -- required
;
```
</TabItem>
<TabItem value="get_apitest_latest_results">

Get the last 150 test results summaries for a given Synthetic API test.

```sql
SELECT
result_id,
check_time,
probe_dc,
result,
status
FROM datadog.monitoring.synthetics_api_test_results
WHERE public_id = '{{ public_id }}' -- required
AND from_ts = '{{ from_ts }}'
AND to_ts = '{{ to_ts }}'
AND probe_dc = '{{ probe_dc }}'
;
```
</TabItem>
</Tabs>
