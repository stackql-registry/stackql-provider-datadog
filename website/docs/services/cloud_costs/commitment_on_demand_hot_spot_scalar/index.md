--- 
title: commitment_on_demand_hot_spot_scalar
hide_title: false
hide_table_of_contents: false
keywords:
  - commitment_on_demand_hot_spot_scalar
  - cloud_costs
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

Creates, updates, deletes, gets or lists a <code>commitment_on_demand_hot_spot_scalar</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commitment_on_demand_hot_spot_scalar" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.commitment_on_demand_hot_spot_scalar" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_commitments_on_demand_hotspots_scalar"
    values={[
        { label: 'get_commitments_on_demand_hotspots_scalar', value: 'get_commitments_on_demand_hotspots_scalar' }
    ]}
>
<TabItem value="get_commitments_on_demand_hotspots_scalar">

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
    <td><CopyableCode code="columns" /></td>
    <td><code>array</code></td>
    <td>Array of scalar columns in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata for the on-demand hot-spots scalar response.</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>array</code></td>
    <td>Array of scalar columns in the response.</td>
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
    <td><a href="#get_commitments_on_demand_hotspots_scalar"><CopyableCode code="get_commitments_on_demand_hotspots_scalar" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-product"><code>product</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a></td>
    <td><a href="#parameter-filter_by"><code>filter_by</code></a></td>
    <td>Get scalar on-demand hot-spots data for cloud commitment programs, showing per-dimension breakdowns of on-demand spending with coverage metrics and potential savings.</td>
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
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>integer (int64)</code></td>
    <td>End of the query time range in Unix milliseconds. (example: 1696118400000)</td>
</tr>
<tr id="parameter-product">
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Cloud product identifier (for example, ec2, rds, virtualmachines). (example: ec2)</td>
</tr>
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Cloud provider for commitment programs (aws or azure).</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start of the query time range in Unix milliseconds. (example: 1693526400000)</td>
</tr>
<tr id="parameter-filter_by">
    <td><CopyableCode code="filter_by" /></td>
    <td><code>string</code></td>
    <td>Optional filter expression to narrow down results. (wire: filterBy)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_commitments_on_demand_hotspots_scalar"
    values={[
        { label: 'get_commitments_on_demand_hotspots_scalar', value: 'get_commitments_on_demand_hotspots_scalar' }
    ]}
>
<TabItem value="get_commitments_on_demand_hotspots_scalar">

Get scalar on-demand hot-spots data for cloud commitment programs, showing per-dimension breakdowns of on-demand spending with coverage metrics and potential savings.

```sql
SELECT
columns,
meta,
total
FROM datadog.cloud_costs.commitment_on_demand_hot_spot_scalar
WHERE provider = '{{ provider }}' -- required
AND product = '{{ product }}' -- required
AND start = '{{ start }}' -- required
AND end = '{{ end }}' -- required
AND filter_by = '{{ filter_by }}'
;
```
</TabItem>
</Tabs>
