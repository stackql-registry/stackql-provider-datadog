--- 
title: siem_ioc_explorers
hide_title: false
hide_table_of_contents: false
keywords:
  - siem_ioc_explorers
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

Creates, updates, deletes, gets or lists a <code>siem_ioc_explorers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="siem_ioc_explorers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.siem_ioc_explorers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_indicators_of_compromise"
    values={[
        { label: 'list_indicators_of_compromise', value: 'list_indicators_of_compromise' }
    ]}
>
<TabItem value="list_indicators_of_compromise">

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
    <td>Unique identifier for the response.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the IoC Explorer list response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Response type identifier.</td>
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
    <td><a href="#list_indicators_of_compromise"><CopyableCode code="list_indicators_of_compromise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-sort[column]"><code>sort[column]</code></a>, <a href="#parameter-sort[order]"><code>sort[order]</code></a>, <a href="#parameter-ocsf"><code>ocsf</code></a>, <a href="#parameter-worked_by"><code>worked_by</code></a>, <a href="#parameter-triage_state"><code>triage_state</code></a></td>
    <td>Get a list of indicators of compromise (IoCs) matching the specified filters.</td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of results per page.</td>
</tr>
<tr id="parameter-ocsf">
    <td><CopyableCode code="ocsf" /></td>
    <td><code>boolean</code></td>
    <td>When true, return only OCSF field-based matches. When false, return regex/message-based matches.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination offset.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Search/filter query (supports field:value syntax).</td>
</tr>
<tr id="parameter-sort[column]">
    <td><CopyableCode code="sort[column]" /></td>
    <td><code>string</code></td>
    <td>Sort column: score, first_seen_ts_epoch, last_seen_ts_epoch, indicator, indicator_type, signal_count, log_count, category, as_type.</td>
</tr>
<tr id="parameter-sort[order]">
    <td><CopyableCode code="sort[order]" /></td>
    <td><code>string</code></td>
    <td>Sort order: asc or desc.</td>
</tr>
<tr id="parameter-triage_state">
    <td><CopyableCode code="triage_state" /></td>
    <td><code>string</code></td>
    <td>Filter by triage state.</td>
</tr>
<tr id="parameter-worked_by">
    <td><CopyableCode code="worked_by" /></td>
    <td><code>string</code></td>
    <td>Filter indicators whose triage state was updated by a specific user identified by their handle.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_indicators_of_compromise"
    values={[
        { label: 'list_indicators_of_compromise', value: 'list_indicators_of_compromise' }
    ]}
>
<TabItem value="list_indicators_of_compromise">

Get a list of indicators of compromise (IoCs) matching the specified filters.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.siem_ioc_explorers
WHERE limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND query = '{{ query }}'
AND sort[column] = '{{ sort[column] }}'
AND sort[order] = '{{ sort[order] }}'
AND ocsf = '{{ ocsf }}'
AND worked_by = '{{ worked_by }}'
AND triage_state = '{{ triage_state }}'
;
```
</TabItem>
</Tabs>
