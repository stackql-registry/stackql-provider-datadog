--- 
title: product_analytics_journeys
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_journeys
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

Creates, updates, deletes, gets or lists a <code>product_analytics_journeys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_journeys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_journeys" /></td></tr>
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
    <td><a href="#query_product_analytics_journey_list"><CopyableCode code="query_product_analytics_journey_list" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Return the individual sessions that reached, or dropped off at, a given step of the journey.&lt;br /&gt;Each row contains the identity join key, the event timestamp, and the columns requested&lt;br /&gt;in `entity_columns`.</td>
</tr>
<tr>
    <td><a href="#query_product_analytics_journey_scalar"><CopyableCode code="query_product_analytics_journey_scalar" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute scalar results for a journey query, such as the conversion count,&lt;br /&gt;the conversion rate, or the time to convert, optionally segmented by group-by facets.</td>
</tr>
<tr>
    <td><a href="#query_product_analytics_journey_timeseries"><CopyableCode code="query_product_analytics_journey_timeseries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute timeseries results for a journey query.&lt;br /&gt;Returns one series per group-by combination, bucketed by the requested interval.</td>
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
    defaultValue="query_product_analytics_journey_list"
    values={[
        { label: 'query_product_analytics_journey_list', value: 'query_product_analytics_journey_list' },
        { label: 'query_product_analytics_journey_scalar', value: 'query_product_analytics_journey_scalar' },
        { label: 'query_product_analytics_journey_timeseries', value: 'query_product_analytics_journey_timeseries' }
    ]}
>
<TabItem value="query_product_analytics_journey_list">

Return the individual sessions that reached, or dropped off at, a given step of the journey.&lt;br /&gt;Each row contains the identity join key, the event timestamp, and the columns requested&lt;br /&gt;in `entity_columns`.

```sql
EXEC datadog.digital_experience.product_analytics_journeys.query_product_analytics_journey_list 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_product_analytics_journey_scalar">

Compute scalar results for a journey query, such as the conversion count,&lt;br /&gt;the conversion rate, or the time to convert, optionally segmented by group-by facets.

```sql
EXEC datadog.digital_experience.product_analytics_journeys.query_product_analytics_journey_scalar 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_product_analytics_journey_timeseries">

Compute timeseries results for a journey query.&lt;br /&gt;Returns one series per group-by combination, bucketed by the requested interval.

```sql
EXEC datadog.digital_experience.product_analytics_journeys.query_product_analytics_journey_timeseries 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
