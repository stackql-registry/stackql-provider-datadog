--- 
title: product_analytics
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics
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

Creates, updates, deletes, gets or lists a <code>product_analytics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics" /></td></tr>
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
    <td><a href="#query_product_analytics_list"><CopyableCode code="query_product_analytics_list" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>List the individual event records matching an analytics query.&lt;br /&gt;Use `columns` to choose the attributes returned on each row, `sort` to order the rows,&lt;br /&gt;and `limit` to cap how many are returned.</td>
</tr>
<tr>
    <td><a href="#query_product_analytics_scalar"><CopyableCode code="query_product_analytics_scalar" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute scalar analytics results for Product Analytics data.&lt;br /&gt;Returns aggregated values (counts, averages, percentiles) optionally grouped by facets.</td>
</tr>
<tr>
    <td><a href="#query_product_analytics_timeseries"><CopyableCode code="query_product_analytics_timeseries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute timeseries analytics results for Product Analytics data.&lt;br /&gt;Returns time-bucketed values for charts and trend analysis.&lt;br /&gt;The `compute.interval` field (milliseconds) is required for time bucketing.</td>
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
    defaultValue="query_product_analytics_list"
    values={[
        { label: 'query_product_analytics_list', value: 'query_product_analytics_list' },
        { label: 'query_product_analytics_scalar', value: 'query_product_analytics_scalar' },
        { label: 'query_product_analytics_timeseries', value: 'query_product_analytics_timeseries' }
    ]}
>
<TabItem value="query_product_analytics_list">

List the individual event records matching an analytics query.&lt;br /&gt;Use `columns` to choose the attributes returned on each row, `sort` to order the rows,&lt;br /&gt;and `limit` to cap how many are returned.

```sql
EXEC datadog.digital_experience.product_analytics.query_product_analytics_list 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_product_analytics_scalar">

Compute scalar analytics results for Product Analytics data.&lt;br /&gt;Returns aggregated values (counts, averages, percentiles) optionally grouped by facets.

```sql
EXEC datadog.digital_experience.product_analytics.query_product_analytics_scalar 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_product_analytics_timeseries">

Compute timeseries analytics results for Product Analytics data.&lt;br /&gt;Returns time-bucketed values for charts and trend analysis.&lt;br /&gt;The `compute.interval` field (milliseconds) is required for time bucketing.

```sql
EXEC datadog.digital_experience.product_analytics.query_product_analytics_timeseries 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
