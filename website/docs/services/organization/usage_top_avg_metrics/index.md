--- 
title: usage_top_avg_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_top_avg_metrics
  - organization
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

Creates, updates, deletes, gets or lists a <code>usage_top_avg_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_top_avg_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.usage_top_avg_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_top_avg_metrics"
    values={[
        { label: 'get_usage_top_avg_metrics', value: 'get_usage_top_avg_metrics' }
    ]}
>
<TabItem value="get_usage_top_avg_metrics">

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
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>Contains the custom metric name.</td>
</tr>
<tr>
    <td><CopyableCode code="avg_metric_hour" /></td>
    <td><code>integer (int64)</code></td>
    <td>Average number of timeseries per hour in which the metric occurs.</td>
</tr>
<tr>
    <td><CopyableCode code="max_metric_hour" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of timeseries per hour in which the metric occurs.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_category" /></td>
    <td><code>string</code></td>
    <td>Contains the metric category. (standard, custom)</td>
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
    <td><a href="#get_usage_top_avg_metrics"><CopyableCode code="get_usage_top_avg_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-month"><code>month</code></a>, <a href="#parameter-day"><code>day</code></a>, <a href="#parameter-names"><code>names</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-next_record_id"><code>next_record_id</code></a></td>
    <td>Get all &#91;custom metrics&#93;(https:​//docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.</td>
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
<tr id="parameter-day">
    <td><CopyableCode code="day" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to day: &#91;YYYY-MM-DD&#93; for usage beginning at this hour. (Either month or day should be specified, but not both)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.</td>
</tr>
<tr id="parameter-month">
    <td><CopyableCode code="month" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to month: &#91;YYYY-MM&#93; for usage beginning at this hour. (Either month or day should be specified, but not both)</td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of metric names.</td>
</tr>
<tr id="parameter-next_record_id">
    <td><CopyableCode code="next_record_id" /></td>
    <td><code>string</code></td>
    <td>List following results with a next_record_id provided in the previous query.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage_top_avg_metrics"
    values={[
        { label: 'get_usage_top_avg_metrics', value: 'get_usage_top_avg_metrics' }
    ]}
>
<TabItem value="get_usage_top_avg_metrics">

Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.

```sql
SELECT
metric_name,
avg_metric_hour,
max_metric_hour,
metric_category
FROM datadog.organization.usage_top_avg_metrics
WHERE month = '{{ month }}'
AND day = '{{ day }}'
AND names = '{{ names }}'
AND limit = '{{ limit }}'
AND next_record_id = '{{ next_record_id }}'
;
```
</TabItem>
</Tabs>
