--- 
title: usage_monthly_attribution
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_monthly_attribution
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

Creates, updates, deletes, gets or lists a <code>usage_monthly_attribution</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_monthly_attribution" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.usage_monthly_attribution" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monthly_usage_attribution"
    values={[
        { label: 'get_monthly_usage_attribution', value: 'get_monthly_usage_attribution' }
    ]}
>
<TabItem value="get_monthly_usage_attribution">

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
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The organization public ID.</td>
</tr>
<tr>
    <td><CopyableCode code="org_name" /></td>
    <td><code>string</code></td>
    <td>The name of the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="month" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to month: &#91;YYYY-MM&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region of the Datadog instance that the organization belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_config_source" /></td>
    <td><code>string</code></td>
    <td>The source of the usage attribution tag configuration and the selected tags in the format `&lt;source_org_name&gt;:::&lt;selected tag 1&gt;///&lt;selected tag 2&gt;///&lt;selected tag 3&gt;`.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag keys and values.  A `null` value here means that the requested tag breakdown cannot be applied because it does not match the &#91;tags configured for usage attribution&#93;(https:​//docs.datadoghq.com/account_management/billing/usage_attribution/#getting-started). In this scenario the API returns the total usage, not broken down by tags.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime of the most recent update to the usage values.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>object</code></td>
    <td>Fields in Usage Summary by tag(s).</td>
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
    <td><a href="#get_monthly_usage_attribution"><CopyableCode code="get_monthly_usage_attribution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-start_month"><code>start_month</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td><a href="#parameter-end_month"><code>end_month</code></a>, <a href="#parameter-sort_direction"><code>sort_direction</code></a>, <a href="#parameter-sort_name"><code>sort_name</code></a>, <a href="#parameter-tag_breakdown_keys"><code>tag_breakdown_keys</code></a>, <a href="#parameter-next_record_id"><code>next_record_id</code></a>, <a href="#parameter-include_descendants"><code>include_descendants</code></a></td>
    <td>Get monthly usage attribution. Multi-region data is available starting March 1, 2023.&lt;br /&gt;&lt;br /&gt;This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is&lt;br /&gt;set in the response. If it is, make another request and pass `next_record_id` as a parameter.&lt;br /&gt;Pseudo code example:&lt;br /&gt;&lt;br /&gt;```&lt;br /&gt;response := GetMonthlyUsageAttribution(start_month)&lt;br /&gt;cursor := response.metadata.pagination.next_record_id&lt;br /&gt;WHILE cursor != null BEGIN&lt;br /&gt;  sleep(5 seconds)  # Avoid running into rate limit&lt;br /&gt;  response := GetMonthlyUsageAttribution(start_month, next_record_id=cursor)&lt;br /&gt;  cursor := response.metadata.pagination.next_record_id&lt;br /&gt;END&lt;br /&gt;```</td>
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
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of usage types to return, or `*` for all usage types. Usage types are in the format `&lt;usage_type&gt;_usage` and `&lt;usage_type&gt;_percentage`. Example: `infra_host_usage,infra_host_percentage` To obtain the complete list of usage attribution types that can be used to replace <code>&lt;usage_type&gt;</code> in the field names, make a request to the &#91;Get usage attribution types API&#93;(https:​//docs.datadoghq.com/api/latest/usage-metering/#get-usage-attribution-types).</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-start_month">
    <td><CopyableCode code="start_month" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to month: `&#91;YYYY-MM&#93;` for usage beginning in this month. Maximum of 15 months ago.</td>
</tr>
<tr id="parameter-end_month">
    <td><CopyableCode code="end_month" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to month: `&#91;YYYY-MM&#93;` for usage ending this month.</td>
</tr>
<tr id="parameter-include_descendants">
    <td><CopyableCode code="include_descendants" /></td>
    <td><code>boolean</code></td>
    <td>Include child org usage in the response. Defaults to `true`.</td>
</tr>
<tr id="parameter-next_record_id">
    <td><CopyableCode code="next_record_id" /></td>
    <td><code>string</code></td>
    <td>List following results with a next_record_id provided in the previous query.</td>
</tr>
<tr id="parameter-sort_direction">
    <td><CopyableCode code="sort_direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort by: `&#91;desc, asc&#93;`.</td>
</tr>
<tr id="parameter-sort_name">
    <td><CopyableCode code="sort_name" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. Sort fields are in the format `&lt;usage_type&gt;_usage`. Example: `infra_host_usage` To obtain the complete list of usage attribution types that can be used to replace <code>&lt;usage_type&gt;</code> in the field names, make a request to the &#91;Get usage attribution types API&#93;(https:​//docs.datadoghq.com/api/latest/usage-metering/#get-usage-attribution-types).</td>
</tr>
<tr id="parameter-tag_breakdown_keys">
    <td><CopyableCode code="tag_breakdown_keys" /></td>
    <td><code>string</code></td>
    <td>Comma separated list of tag keys used to group usage. If no value is provided the usage will not be broken down by tags.  To see which tags are available, look for the value of `tag_config_source` in the API response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monthly_usage_attribution"
    values={[
        { label: 'get_monthly_usage_attribution', value: 'get_monthly_usage_attribution' }
    ]}
>
<TabItem value="get_monthly_usage_attribution">

Get monthly usage attribution. Multi-region data is available starting March 1, 2023.&lt;br /&gt;&lt;br /&gt;This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is&lt;br /&gt;set in the response. If it is, make another request and pass `next_record_id` as a parameter.&lt;br /&gt;Pseudo code example:&lt;br /&gt;&lt;br /&gt;```&lt;br /&gt;response := GetMonthlyUsageAttribution(start_month)&lt;br /&gt;cursor := response.metadata.pagination.next_record_id&lt;br /&gt;WHILE cursor != null BEGIN&lt;br /&gt;  sleep(5 seconds)  # Avoid running into rate limit&lt;br /&gt;  response := GetMonthlyUsageAttribution(start_month, next_record_id=cursor)&lt;br /&gt;  cursor := response.metadata.pagination.next_record_id&lt;br /&gt;END&lt;br /&gt;```

```sql
SELECT
public_id,
org_name,
month,
region,
tag_config_source,
tags,
updated_at,
values
FROM datadog.organization.usage_monthly_attribution
WHERE start_month = '{{ start_month }}' -- required
AND fields = '{{ fields }}' -- required
AND end_month = '{{ end_month }}'
AND sort_direction = '{{ sort_direction }}'
AND sort_name = '{{ sort_name }}'
AND tag_breakdown_keys = '{{ tag_breakdown_keys }}'
AND next_record_id = '{{ next_record_id }}'
AND include_descendants = '{{ include_descendants }}'
;
```
</TabItem>
</Tabs>
