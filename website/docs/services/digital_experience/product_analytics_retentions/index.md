--- 
title: product_analytics_retentions
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_retentions
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>product_analytics_retentions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_retentions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_retentions" /></td></tr>
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
    <td><a href="#query_product_analytics_retention_list"><CopyableCode code="query_product_analytics_retention_list" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>List the individual users or accounts counted in one cell of the retention grid.&lt;br /&gt;Set `computation_scope` to the cohort and return period you want to examine.</td>
</tr>
<tr>
    <td><a href="#query_product_analytics_retention_scalar"><CopyableCode code="query_product_analytics_retention_scalar" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute retention as a single value per group, suitable for a query value or top list widget.</td>
</tr>
<tr>
    <td><a href="#query_product_analytics_retention_timeseries"><CopyableCode code="query_product_analytics_retention_timeseries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute retention as a series of values over time, using the same query definition as the&lt;br /&gt;retention grid.</td>
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
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="query_product_analytics_retention_list"
    values={[
        { label: 'query_product_analytics_retention_list', value: 'query_product_analytics_retention_list' },
        { label: 'query_product_analytics_retention_scalar', value: 'query_product_analytics_retention_scalar' },
        { label: 'query_product_analytics_retention_timeseries', value: 'query_product_analytics_retention_timeseries' }
    ]}
>
<TabItem value="query_product_analytics_retention_list">

List the individual users or accounts counted in one cell of the retention grid.&lt;br /&gt;Set `computation_scope` to the cohort and return period you want to examine.

```sql
EXEC datadog.digital_experience.product_analytics_retentions.query_product_analytics_retention_list 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_product_analytics_retention_scalar">

Compute retention as a single value per group, suitable for a query value or top list widget.

```sql
EXEC datadog.digital_experience.product_analytics_retentions.query_product_analytics_retention_scalar 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_product_analytics_retention_timeseries">

Compute retention as a series of values over time, using the same query definition as the&lt;br /&gt;retention grid.

```sql
EXEC datadog.digital_experience.product_analytics_retentions.query_product_analytics_retention_timeseries 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
