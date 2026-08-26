--- 
title: on_call_schedule_responders
hide_title: false
hide_table_of_contents: false
keywords:
  - on_call_schedule_responders
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

Creates, updates, deletes, gets or lists an <code>on_call_schedule_responders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_call_schedule_responders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.on_call_schedule_responders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schedule_on_call_responders"
    values={[
        { label: 'get_schedule_on_call_responders', value: 'get_schedule_on_call_responders' }
    ]}
>
<TabItem value="get_schedule_on_call_responders">

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
    <td>Unique identifier of this on-call responders lookup.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for a schedule's on-call responders lookup.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a schedule's on-call responders lookup, including the schedule and its responder groups.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Represents the resource type for a schedule's grouped on-call responders across the previous, current, and next positions. (schedule_oncall_responders) (default: schedule_oncall_responders, example: schedule_oncall_responders)</td>
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
    <td><a href="#get_schedule_on_call_responders"><CopyableCode code="get_schedule_on_call_responders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-schedule_id"><code>schedule_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[position]"><code>filter[position]</code></a>, <a href="#parameter-filter[at_ts]"><code>filter[at_ts]</code></a></td>
    <td>Retrieves the on-call responders for the specified schedule, grouped by position (previous, current, next), at a given time. Supports schedules with multiple concurrent on-call responders at a position, by returning a list of shifts per position.</td>
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
<tr id="parameter-schedule_id">
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the schedule.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[at_ts]">
    <td><CopyableCode code="filter[at_ts]" /></td>
    <td><code>string</code></td>
    <td>Retrieves the on-call responders at the given timestamp in RFC3339 format (for example, `2025-05-07T02:53:01Z` or `2025-05-07T02:53:01+00:00`). When using timezone offsets with `+` or `-`, ensure proper URL encoding (`+` should be encoded as `%2B`). Defaults to the current time if omitted.</td>
</tr>
<tr id="parameter-filter[position]">
    <td><CopyableCode code="filter[position]" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of positions to retrieve. Allowed values: `previous`, `current`, `next`. Defaults to `current` if omitted.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of included relationships to be returned. Allowed values: `schedule`, `responders`, `responders.shifts`, `responders.shifts.user`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schedule_on_call_responders"
    values={[
        { label: 'get_schedule_on_call_responders', value: 'get_schedule_on_call_responders' }
    ]}
>
<TabItem value="get_schedule_on_call_responders">

Retrieves the on-call responders for the specified schedule, grouped by position (previous, current, next), at a given time. Supports schedules with multiple concurrent on-call responders at a position, by returning a list of shifts per position.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.on_call_schedule_responders
WHERE schedule_id = '{{ schedule_id }}' -- required
AND include = '{{ include }}'
AND filter[position] = '{{ filter[position] }}'
AND filter[at_ts] = '{{ filter[at_ts] }}'
;
```
</TabItem>
</Tabs>
