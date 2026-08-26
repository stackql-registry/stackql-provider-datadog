--- 
title: case_timelines
hide_title: false
hide_table_of_contents: false
keywords:
  - case_timelines
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

Creates, updates, deletes, gets or lists a <code>case_timelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_timelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_timelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_case_timeline"
    values={[
        { label: 'list_case_timeline', value: 'list_case_timeline' }
    ]}
>
<TabItem value="list_case_timeline">

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
    <td>Timeline cell's identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a timeline cell, representing a single event in a case's chronological activity log (for example, a comment, status change, or assignment update).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for timeline cells. (timeline_cell) (default: timeline_cell, example: timeline_cell)</td>
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
    <td><a href="#list_case_timeline"><CopyableCode code="list_case_timeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort[ascending]"><code>sort[ascending]</code></a></td>
    <td>Returns the timeline of events for a case, including comments, status changes, and other activity. Supports pagination and sort order.</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Case's UUID or key (example: f98a5a5b-e0ff-45d4-b2f5-afe6e74de504)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Zero-based page number for pagination.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of timeline cells to return per page.</td>
</tr>
<tr id="parameter-sort[ascending]">
    <td><CopyableCode code="sort[ascending]" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, returns timeline cells in chronological order (oldest first). Defaults to `false` (newest first).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_case_timeline"
    values={[
        { label: 'list_case_timeline', value: 'list_case_timeline' }
    ]}
>
<TabItem value="list_case_timeline">

Returns the timeline of events for a case, including comments, status changes, and other activity. Supports pagination and sort order.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.case_timelines
WHERE case_id = '{{ case_id }}' -- required
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort[ascending] = '{{ sort[ascending] }}'
;
```
</TabItem>
</Tabs>
