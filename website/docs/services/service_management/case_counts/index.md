--- 
title: case_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - case_counts
  - service_management
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

Creates, updates, deletes, gets or lists a <code>case_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="count_cases"
    values={[
        { label: 'count_cases', value: 'count_cases' }
    ]}
>
<TabItem value="count_cases">

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
    <td>Count response identifier. (example: count-result-001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for the count response, including the total count and optional facet breakdowns.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Count resource type. (example: count)</td>
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
    <td><a href="#count_cases"><CopyableCode code="count_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query_filter"><code>query_filter</code></a>, <a href="#parameter-group_bys"><code>group_bys</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Returns case counts, optionally grouped by one or more fields (for example, status, priority). Supports a query filter to narrow the scope.</td>
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
<tr id="parameter-group_bys">
    <td><CopyableCode code="group_bys" /></td>
    <td><code>string</code></td>
    <td>Comma-separated fields to group by. (example: status,priority)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum facet values to return.</td>
</tr>
<tr id="parameter-query_filter">
    <td><CopyableCode code="query_filter" /></td>
    <td><code>string</code></td>
    <td>Filter query for cases.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="count_cases"
    values={[
        { label: 'count_cases', value: 'count_cases' }
    ]}
>
<TabItem value="count_cases">

Returns case counts, optionally grouped by one or more fields (for example, status, priority). Supports a query filter to narrow the scope.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.case_counts
WHERE query_filter = '{{ query_filter }}'
AND group_bys = '{{ group_bys }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
