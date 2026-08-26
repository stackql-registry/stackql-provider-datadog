--- 
title: scorecards
hide_title: false
hide_table_of_contents: false
keywords:
  - scorecards
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

Creates, updates, deletes, gets or lists a <code>scorecards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scorecards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.apm.scorecards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_scorecards"
    values={[
        { label: 'list_scorecards', value: 'list_scorecards' }
    ]}
>
<TabItem value="list_scorecards">

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
    <td>The unique ID of the scorecard. (example: q8MQxk8TCqrHnWkx)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Scorecard attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for scorecard list. (scorecard) (example: scorecard)</td>
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
    <td><a href="#list_scorecards"><CopyableCode code="list_scorecards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-filter[scorecard][id]"><code>filter[scorecard][id]</code></a>, <a href="#parameter-filter[scorecard][name]"><code>filter[scorecard][name]</code></a>, <a href="#parameter-filter[scorecard][description]"><code>filter[scorecard][description]</code></a></td>
    <td>Fetches all scorecards.</td>
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
<tr id="parameter-filter[scorecard][description]">
    <td><CopyableCode code="filter[scorecard][description]" /></td>
    <td><code>string</code></td>
    <td>Filter by scorecard description (partial match).</td>
</tr>
<tr id="parameter-filter[scorecard][id]">
    <td><CopyableCode code="filter[scorecard][id]" /></td>
    <td><code>string</code></td>
    <td>Filter by scorecard ID.</td>
</tr>
<tr id="parameter-filter[scorecard][name]">
    <td><CopyableCode code="filter[scorecard][name]" /></td>
    <td><code>string</code></td>
    <td>Filter by scorecard name (partial match).</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset for pagination.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of scorecards to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_scorecards"
    values={[
        { label: 'list_scorecards', value: 'list_scorecards' }
    ]}
>
<TabItem value="list_scorecards">

Fetches all scorecards.

```sql
SELECT
id,
attributes,
type
FROM datadog.apm.scorecards
WHERE page[offset] = '{{ page[offset] }}'
AND page[size] = '{{ page[size] }}'
AND filter[scorecard][id] = '{{ filter[scorecard][id] }}'
AND filter[scorecard][name] = '{{ filter[scorecard][name] }}'
AND filter[scorecard][description] = '{{ filter[scorecard][description] }}'
;
```
</TabItem>
</Tabs>
