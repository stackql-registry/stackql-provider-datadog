--- 
title: data_observability_monitor_run_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - data_observability_monitor_run_statuses
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

Creates, updates, deletes, gets or lists a <code>data_observability_monitor_run_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_observability_monitor_run_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.data_observability_monitor_run_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_observability_monitor_run_status"
    values={[
        { label: 'get_data_observability_monitor_run_status', value: 'get_data_observability_monitor_run_status' }
    ]}
>
<TabItem value="get_data_observability_monitor_run_status">

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
    <td>The unique identifier of the monitor run. (example: abc123def456)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a data observability monitor run status response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API resource type for a data observability monitor run. (monitor_run) (default: monitor_run, example: monitor_run)</td>
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
    <td><a href="#get_data_observability_monitor_run_status"><CopyableCode code="get_data_observability_monitor_run_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Retrieves the current status of a data observability monitor run. Poll this endpoint after triggering a run to determine when evaluation is complete.</td>
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
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the monitor run to retrieve status for. (example: abc123def456)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_observability_monitor_run_status"
    values={[
        { label: 'get_data_observability_monitor_run_status', value: 'get_data_observability_monitor_run_status' }
    ]}
>
<TabItem value="get_data_observability_monitor_run_status">

Retrieves the current status of a data observability monitor run. Poll this endpoint after triggering a run to determine when evaluation is complete.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.data_observability_monitor_run_statuses
WHERE run_id = '{{ run_id }}' -- required
;
```
</TabItem>
</Tabs>
