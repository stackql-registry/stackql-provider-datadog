--- 
title: synthetics_test_browser_results
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_test_browser_results
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

Creates, updates, deletes, gets or lists a <code>synthetics_test_browser_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_test_browser_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_test_browser_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_synthetics_browser_test_result"
    values={[
        { label: 'get_synthetics_browser_test_result', value: 'get_synthetics_browser_test_result' },
        { label: 'list_synthetics_browser_test_latest_results', value: 'list_synthetics_browser_test_latest_results' }
    ]}
>
<TabItem value="get_synthetics_browser_test_result">

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
    <td>The result ID. (example: 5158904793181869365)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Synthetic test result.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a Synthetic test result.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Synthetic test result resource, `result`. (result) (default: result, example: result)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_synthetics_browser_test_latest_results">

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
    <td>The result ID. (example: 5158904793181869365)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Synthetic test result summary.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a Synthetic test result.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Synthetic test result summary resource, `result_summary`. (result_summary) (default: result_summary, example: result_summary)</td>
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
    <td><a href="#get_synthetics_browser_test_result"><CopyableCode code="get_synthetics_browser_test_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-result_id"><code>result_id</code></a></td>
    <td><a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-timestamp"><code>timestamp</code></a></td>
    <td>Get a specific full result from a given Synthetic browser test.</td>
</tr>
<tr>
    <td><a href="#list_synthetics_browser_test_latest_results"><CopyableCode code="list_synthetics_browser_test_latest_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td><a href="#parameter-from_ts"><code>from_ts</code></a>, <a href="#parameter-to_ts"><code>to_ts</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-run_type"><code>run_type</code></a>, <a href="#parameter-probe_dc"><code>probe_dc</code></a>, <a href="#parameter-device_id"><code>device_id</code></a></td>
    <td>Get the latest result summaries for a given Synthetic browser test.</td>
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
    <td>The public ID of the Synthetic browser test for which to search results.</td>
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
<tr id="parameter-device_id">
    <td><CopyableCode code="device_id" /></td>
    <td><code>array</code></td>
    <td>Device IDs for which to query results.</td>
</tr>
<tr id="parameter-event_id">
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The event ID used to look up the result in the event store.</td>
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
<tr id="parameter-run_type">
    <td><CopyableCode code="run_type" /></td>
    <td><code>string</code></td>
    <td>Filter results by run type. (wire: runType)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter results by status.</td>
</tr>
<tr id="parameter-timestamp">
    <td><CopyableCode code="timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Timestamp in seconds to look up the result.</td>
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
    defaultValue="get_synthetics_browser_test_result"
    values={[
        { label: 'get_synthetics_browser_test_result', value: 'get_synthetics_browser_test_result' },
        { label: 'list_synthetics_browser_test_latest_results', value: 'list_synthetics_browser_test_latest_results' }
    ]}
>
<TabItem value="get_synthetics_browser_test_result">

Get a specific full result from a given Synthetic browser test.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.monitoring.synthetics_test_browser_results
WHERE public_id = '{{ public_id }}' -- required
AND result_id = '{{ result_id }}' -- required
AND event_id = '{{ event_id }}'
AND timestamp = '{{ timestamp }}'
;
```
</TabItem>
<TabItem value="list_synthetics_browser_test_latest_results">

Get the latest result summaries for a given Synthetic browser test.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.monitoring.synthetics_test_browser_results
WHERE public_id = '{{ public_id }}' -- required
AND from_ts = '{{ from_ts }}'
AND to_ts = '{{ to_ts }}'
AND status = '{{ status }}'
AND run_type = '{{ run_type }}'
AND probe_dc = '{{ probe_dc }}'
AND device_id = '{{ device_id }}'
;
```
</TabItem>
</Tabs>
