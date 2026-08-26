--- 
title: feature_flag_exposure_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_flag_exposure_schedules
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>feature_flag_exposure_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_flag_exposure_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.feature_flag_exposure_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#pause_exposure_schedule"><CopyableCode code="pause_exposure_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exposure_schedule_id"><code>exposure_schedule_id</code></a></td>
    <td></td>
    <td>Pauses a progressive rollout while preserving rollout state.</td>
</tr>
<tr>
    <td><a href="#resume_exposure_schedule"><CopyableCode code="resume_exposure_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exposure_schedule_id"><code>exposure_schedule_id</code></a></td>
    <td></td>
    <td>Resumes progression for a previously paused progressive rollout.</td>
</tr>
<tr>
    <td><a href="#start_exposure_schedule"><CopyableCode code="start_exposure_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exposure_schedule_id"><code>exposure_schedule_id</code></a></td>
    <td></td>
    <td>Starts a progressive rollout and begins progression.</td>
</tr>
<tr>
    <td><a href="#stop_exposure_schedule"><CopyableCode code="stop_exposure_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exposure_schedule_id"><code>exposure_schedule_id</code></a></td>
    <td></td>
    <td>Stops a progressive rollout and marks it as aborted.</td>
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
<tr id="parameter-exposure_schedule_id">
    <td><CopyableCode code="exposure_schedule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the exposure schedule.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="pause_exposure_schedule"
    values={[
        { label: 'pause_exposure_schedule', value: 'pause_exposure_schedule' },
        { label: 'resume_exposure_schedule', value: 'resume_exposure_schedule' },
        { label: 'start_exposure_schedule', value: 'start_exposure_schedule' },
        { label: 'stop_exposure_schedule', value: 'stop_exposure_schedule' }
    ]}
>
<TabItem value="pause_exposure_schedule">

Pauses a progressive rollout while preserving rollout state.

```sql
EXEC datadog.software_delivery.feature_flag_exposure_schedules.pause_exposure_schedule 
@exposure_schedule_id='{{ exposure_schedule_id }}' --required 
;
```
</TabItem>
<TabItem value="resume_exposure_schedule">

Resumes progression for a previously paused progressive rollout.

```sql
EXEC datadog.software_delivery.feature_flag_exposure_schedules.resume_exposure_schedule 
@exposure_schedule_id='{{ exposure_schedule_id }}' --required 
;
```
</TabItem>
<TabItem value="start_exposure_schedule">

Starts a progressive rollout and begins progression.

```sql
EXEC datadog.software_delivery.feature_flag_exposure_schedules.start_exposure_schedule 
@exposure_schedule_id='{{ exposure_schedule_id }}' --required 
;
```
</TabItem>
<TabItem value="stop_exposure_schedule">

Stops a progressive rollout and marks it as aborted.

```sql
EXEC datadog.software_delivery.feature_flag_exposure_schedules.stop_exposure_schedule 
@exposure_schedule_id='{{ exposure_schedule_id }}' --required 
;
```
</TabItem>
</Tabs>
