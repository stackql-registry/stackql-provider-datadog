--- 
title: synthetics_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_tests
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

Creates, updates, deletes, gets or lists a <code>synthetics_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_tests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test"
    values={[
        { label: 'get_test', value: 'get_test' },
        { label: 'list_tests', value: 'list_tests' }
    ]}
>
<TabItem value="get_test">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The associated monitor ID.</td>
</tr>
<tr>
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The test public ID.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Configuration object for a Synthetic test.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Array of locations used to run the test.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Notification message associated with the test.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Object describing the extra options for a Synthetic test.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. (live, paused) (example: live)</td>
</tr>
<tr>
    <td><CopyableCode code="subtype" /></td>
    <td><code>string</code></td>
    <td>The subtype of the Synthetic API test, `http`, `ssl`, `tcp`, `dns`, `icmp`, `udp`, `websocket`, `grpc` or `multi`. (http, ssl, tcp, dns, multi, icmp, udp, websocket, grpc) (example: http)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Array of tags attached to the test.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Synthetic test. (api, browser, mobile, network)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tests">

OK - Returns the list of all Synthetic tests.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The associated monitor ID.</td>
</tr>
<tr>
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The test public ID.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Configuration object for a Synthetic test.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Array of locations used to run the test.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Notification message associated with the test.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Object describing the extra options for a Synthetic test.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. (live, paused) (example: live)</td>
</tr>
<tr>
    <td><CopyableCode code="subtype" /></td>
    <td><code>string</code></td>
    <td>The subtype of the Synthetic API test, `http`, `ssl`, `tcp`, `dns`, `icmp`, `udp`, `websocket`, `grpc` or `multi`. (http, ssl, tcp, dns, multi, icmp, udp, websocket, grpc) (example: http)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Array of tags attached to the test.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Synthetic test. (api, browser, mobile, network)</td>
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
    <td><a href="#get_test"><CopyableCode code="get_test" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Get the detailed configuration associated with a Synthetic test.</td>
</tr>
<tr>
    <td><a href="#list_tests"><CopyableCode code="list_tests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_number"><code>page_number</code></a></td>
    <td>Get the list of all Synthetic tests.</td>
</tr>
<tr>
    <td><a href="#patch_test"><CopyableCode code="patch_test" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Patch the configuration of a Synthetic test with partial data.</td>
</tr>
<tr>
    <td><a href="#delete_synthetics_tests"><CopyableCode code="delete_synthetics_tests" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_tests"><CopyableCode code="delete_tests" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Delete multiple Synthetic tests by ID.</td>
</tr>
<tr>
    <td><a href="#trigger_tests"><CopyableCode code="trigger_tests" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tests"><code>tests</code></a></td>
    <td></td>
    <td>Trigger a set of Synthetic tests.</td>
</tr>
<tr>
    <td><a href="#trigger_citests"><CopyableCode code="trigger_citests" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Trigger a set of Synthetic tests for continuous integration.</td>
</tr>
<tr>
    <td><a href="#update_test_pause_status"><CopyableCode code="update_test_pause_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Pause or start a Synthetic test by changing the status.</td>
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
    <td>The public ID of the Synthetic test to update.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page_number">
    <td><CopyableCode code="page_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>Used for pagination. Which page you want to retrieve. Starts at zero.</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Used for pagination. The number of tests returned in the page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_test"
    values={[
        { label: 'get_test', value: 'get_test' },
        { label: 'list_tests', value: 'list_tests' }
    ]}
>
<TabItem value="get_test">

Get the detailed configuration associated with a Synthetic test.

```sql
SELECT
name,
monitor_id,
public_id,
config,
creator,
locations,
message,
options,
status,
subtype,
tags,
type
FROM datadog.monitoring.synthetics_tests
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
<TabItem value="list_tests">

Get the list of all Synthetic tests.

```sql
SELECT
name,
monitor_id,
public_id,
config,
creator,
locations,
message,
options,
status,
subtype,
tags,
type
FROM datadog.monitoring.synthetics_tests
WHERE page_size = '{{ page_size }}'
AND page_number = '{{ page_number }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_test"
    values={[
        { label: 'patch_test', value: 'patch_test' }
    ]}
>
<TabItem value="patch_test">

Patch the configuration of a Synthetic test with partial data.

```sql
UPDATE datadog.monitoring.synthetics_tests
SET 
data = '{{ data }}'
WHERE 
public_id = '{{ public_id }}' --required
RETURNING
name,
monitor_id,
public_id,
config,
creator,
locations,
message,
options,
status,
steps,
subtype,
tags,
type;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_synthetics_tests"
    values={[
        { label: 'delete_synthetics_tests', value: 'delete_synthetics_tests' },
        { label: 'delete_tests', value: 'delete_tests' },
        { label: 'trigger_tests', value: 'trigger_tests' },
        { label: 'trigger_citests', value: 'trigger_citests' },
        { label: 'update_test_pause_status', value: 'update_test_pause_status' }
    ]}
>
<TabItem value="delete_synthetics_tests">

OK

```sql
EXEC datadog.monitoring.synthetics_tests.delete_synthetics_tests 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="delete_tests">

Delete multiple Synthetic tests by ID.

```sql
EXEC datadog.monitoring.synthetics_tests.delete_tests 
@@json=
'{
"force_delete_dependencies": {{ force_delete_dependencies }}, 
"public_ids": "{{ public_ids }}"
}'
;
```
</TabItem>
<TabItem value="trigger_tests">

Trigger a set of Synthetic tests.

```sql
EXEC datadog.monitoring.synthetics_tests.trigger_tests 
@@json=
'{
"tests": "{{ tests }}"
}'
;
```
</TabItem>
<TabItem value="trigger_citests">

Trigger a set of Synthetic tests for continuous integration.

```sql
EXEC datadog.monitoring.synthetics_tests.trigger_citests 
@@json=
'{
"tests": "{{ tests }}"
}'
;
```
</TabItem>
<TabItem value="update_test_pause_status">

Pause or start a Synthetic test by changing the status.

```sql
EXEC datadog.monitoring.synthetics_tests.update_test_pause_status 
@public_id='{{ public_id }}' --required, 
@@json=
'{
"new_status": "{{ new_status }}"
}'
;
```
</TabItem>
</Tabs>
