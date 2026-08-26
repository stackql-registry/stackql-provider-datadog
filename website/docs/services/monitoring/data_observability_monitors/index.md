--- 
title: data_observability_monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - data_observability_monitors
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

Creates, updates, deletes, gets or lists a <code>data_observability_monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_observability_monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.data_observability_monitors" /></td></tr>
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
    <td><a href="#run_data_observability_monitor"><CopyableCode code="run_data_observability_monitor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a></td>
    <td></td>
    <td>Manually triggers a run for a data observability monitor. Only monitors that are not scheduled (manually-runnable) can be triggered this way.</td>
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
<tr id="parameter-monitor_id">
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the data observability monitor to run. (example: 12345)</td>
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
    defaultValue="run_data_observability_monitor"
    values={[
        { label: 'run_data_observability_monitor', value: 'run_data_observability_monitor' }
    ]}
>
<TabItem value="run_data_observability_monitor">

Manually triggers a run for a data observability monitor. Only monitors that are not scheduled (manually-runnable) can be triggered this way.

```sql
EXEC datadog.monitoring.data_observability_monitors.run_data_observability_monitor 
@monitor_id='{{ monitor_id }}' --required 
;
```
</TabItem>
</Tabs>
