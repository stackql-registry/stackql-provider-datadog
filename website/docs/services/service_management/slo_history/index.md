--- 
title: slo_history
hide_title: false
hide_table_of_contents: false
keywords:
  - slo_history
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

Creates, updates, deletes, gets or lists a <code>slo_history</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slo_history" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.slo_history" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_slohistory"
    values={[
        { label: 'get_slohistory', value: 'get_slohistory' }
    ]}
>
<TabItem value="get_slohistory">

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
    <td><CopyableCode code="type_id" /></td>
    <td><code>integer (int32)</code></td>
    <td>A numeric representation of the type of the service level objective (`0` for monitor, `1` for metric). Always included in service level objective responses. Ignored in create/update requests. (0, 1, 2)</td>
</tr>
<tr>
    <td><CopyableCode code="from_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The `from` timestamp in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="group_by" /></td>
    <td><code>array</code></td>
    <td>For `metric` based SLOs where the query includes a group-by clause, this represents the list of grouping parameters.  This is not included in responses for `monitor` based SLOs.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>For grouped SLOs, this represents SLI data for specific groups.  This is not included in the responses for `metric` based SLOs.</td>
</tr>
<tr>
    <td><CopyableCode code="monitors" /></td>
    <td><code>array</code></td>
    <td>For multi-monitor SLOs, this represents SLI data for specific monitors.  This is not included in the responses for `metric` based SLOs.</td>
</tr>
<tr>
    <td><CopyableCode code="overall" /></td>
    <td><code>object</code></td>
    <td>An object that holds an SLI value and its associated data. It can represent an SLO's overall SLI value. This can also represent the SLI value for a specific monitor in multi-monitor SLOs, or a group in grouped SLOs.</td>
</tr>
<tr>
    <td><CopyableCode code="series" /></td>
    <td><code>object</code></td>
    <td>A `metric` based SLO history response.  This is not included in responses for `monitor` based SLOs.</td>
</tr>
<tr>
    <td><CopyableCode code="thresholds" /></td>
    <td><code>object</code></td>
    <td>mapping of string timeframe to the SLO threshold.</td>
</tr>
<tr>
    <td><CopyableCode code="to_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The `to` timestamp in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the service level objective. (metric, monitor, time_slice) (example: metric)</td>
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
    <td><a href="#get_slohistory"><CopyableCode code="get_slohistory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slo_id"><code>slo_id</code></a>, <a href="#parameter-from_ts"><code>from_ts</code></a>, <a href="#parameter-to_ts"><code>to_ts</code></a></td>
    <td><a href="#parameter-target"><code>target</code></a>, <a href="#parameter-apply_correction"><code>apply_correction</code></a></td>
    <td>Get a specific SLO’s history, regardless of its SLO type.&lt;br /&gt;&lt;br /&gt;The detailed history data is structured according to the source data type.&lt;br /&gt;For example, metric data is included for event SLOs that use&lt;br /&gt;the metric source, and monitor SLO types include the monitor transition history.&lt;br /&gt;&lt;br /&gt;**Note:** There are different response formats for event based and time based SLOs.&lt;br /&gt;Examples of both are shown.</td>
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
<tr id="parameter-from_ts">
    <td><CopyableCode code="from_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The `from` timestamp for the query window in epoch seconds.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-slo_id">
    <td><CopyableCode code="slo_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service level objective object.</td>
</tr>
<tr id="parameter-to_ts">
    <td><CopyableCode code="to_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>The `to` timestamp for the query window in epoch seconds.</td>
</tr>
<tr id="parameter-apply_correction">
    <td><CopyableCode code="apply_correction" /></td>
    <td><code>boolean</code></td>
    <td>Defaults to `true`. If any SLO corrections are applied and this parameter is set to `false`, then the corrections will not be applied and the SLI values will not be affected.</td>
</tr>
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>number (double)</code></td>
    <td>The SLO target. If `target` is passed in, the response will include the remaining error budget and a timeframe value of `custom`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_slohistory"
    values={[
        { label: 'get_slohistory', value: 'get_slohistory' }
    ]}
>
<TabItem value="get_slohistory">

Get a specific SLO’s history, regardless of its SLO type.&lt;br /&gt;&lt;br /&gt;The detailed history data is structured according to the source data type.&lt;br /&gt;For example, metric data is included for event SLOs that use&lt;br /&gt;the metric source, and monitor SLO types include the monitor transition history.&lt;br /&gt;&lt;br /&gt;**Note:** There are different response formats for event based and time based SLOs.&lt;br /&gt;Examples of both are shown.

```sql
SELECT
type_id,
from_ts,
group_by,
groups,
monitors,
overall,
series,
thresholds,
to_ts,
type
FROM datadog.service_management.slo_history
WHERE slo_id = '{{ slo_id }}' -- required
AND from_ts = '{{ from_ts }}' -- required
AND to_ts = '{{ to_ts }}' -- required
AND target = '{{ target }}'
AND apply_correction = '{{ apply_correction }}'
;
```
</TabItem>
</Tabs>
