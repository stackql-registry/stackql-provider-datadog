--- 
title: synthetics_test_search_results
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_test_search_results
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

Creates, updates, deletes, gets or lists a <code>synthetics_test_search_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_test_search_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_test_search_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_tests"
    values={[
        { label: 'search_tests', value: 'search_tests' }
    ]}
>
<TabItem value="search_tests">

OK - Returns the list of Synthetic tests matching the search.

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
    <td><a href="#search_tests"><CopyableCode code="search_tests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-text"><code>text</code></a>, <a href="#parameter-include_full_config"><code>include_full_config</code></a>, <a href="#parameter-facets_only"><code>facets_only</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Search for Synthetic tests.</td>
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
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-facets_only">
    <td><CopyableCode code="facets_only" /></td>
    <td><code>boolean</code></td>
    <td>If true, return only facets instead of full test details.</td>
</tr>
<tr id="parameter-include_full_config">
    <td><CopyableCode code="include_full_config" /></td>
    <td><code>boolean</code></td>
    <td>If true, include the full configuration for each test in the response.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The sort order for the results (e.g., `name,asc` or `name,desc`).</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>The offset from which to start returning results.</td>
</tr>
<tr id="parameter-text">
    <td><CopyableCode code="text" /></td>
    <td><code>string</code></td>
    <td>The search query.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_tests"
    values={[
        { label: 'search_tests', value: 'search_tests' }
    ]}
>
<TabItem value="search_tests">

Search for Synthetic tests.

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
FROM datadog.monitoring.synthetics_test_search_results
WHERE text = '{{ text }}'
AND include_full_config = '{{ include_full_config }}'
AND facets_only = '{{ facets_only }}'
AND start = '{{ start }}'
AND count = '{{ count }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>
