--- 
title: usage_hourly_attribution
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_hourly_attribution
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

Creates, updates, deletes, gets or lists a <code>usage_hourly_attribution</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_hourly_attribution" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.usage_hourly_attribution" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hourly_usage_attribution"
    values={[
        { label: 'get_hourly_usage_attribution', value: 'get_hourly_usage_attribution' }
    ]}
>
<TabItem value="get_hourly_usage_attribution">

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
    <td><CopyableCode code="hour" /></td>
    <td><code>string (date-time)</code></td>
    <td>The hour for the usage.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region of the Datadog instance that the organization belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_config_source" /></td>
    <td><code>string</code></td>
    <td>The source of the usage attribution tag configuration and the selected tags in the format of `&lt;source_org_name&gt;:::&lt;selected tag 1&gt;///&lt;selected tag 2&gt;///&lt;selected tag 3&gt;`.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag keys and values.  A `null` value here means that the requested tag breakdown cannot be applied because it does not match the &#91;tags configured for usage attribution&#93;(https:​//docs.datadoghq.com/account_management/billing/usage_attribution/#getting-started). In this scenario the API returns the total usage, not broken down by tags.</td>
</tr>
<tr>
    <td><CopyableCode code="total_usage_sum" /></td>
    <td><code>number (double)</code></td>
    <td>Total product usage for the given tags within the hour.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>Shows the most recent hour in the current month for all organizations where usages are calculated.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_type" /></td>
    <td><code>string</code></td>
    <td>Supported products for hourly usage attribution requests. Usage types are in the format `&lt;usage_type&gt;_usage`. To obtain the complete list of valid usage types, make a request to the &#91;Get usage attribution types API&#93;(https:​//docs.datadoghq.com/api/latest/usage-metering/#get-usage-attribution-types). (api_usage, apm_fargate_usage, apm_host_usage, apm_usm_usage, appsec_fargate_usage, appsec_usage, asm_serverless_traced_invocations_usage, asm_serverless_traced_invocations_percentage, bits_ai_investigations_usage, browser_usage, ci_code_coverage_committers_percentage, ci_code_coverage_committers_usage, ci_pipeline_indexed_spans_usage, ci_test_indexed_spans_usage, ci_visibility_itr_usage, cloud_siem_usage, code_security_host_usage, container_excl_agent_usage, container_usage, cspm_containers_usage, cspm_hosts_usage, custom_event_usage, custom_ingested_timeseries_usage, custom_timeseries_usage, cws_containers_usage, cws_fargate_task_usage, cws_hosts_usage, data_jobs_monitoring_usage, data_stream_monitoring_usage, dbm_hosts_usage, dbm_queries_usage, error_tracking_usage, error_tracking_percentage, estimated_indexed_spans_usage, estimated_ingested_spans_usage, fargate_usage, flex_logs_starter, flex_stored_logs, functions_usage, incident_management_monthly_active_users_usage, indexed_spans_usage, infra_host_usage, infra_host_basic_usage, ingested_logs_bytes_usage, ingested_spans_bytes_usage, invocations_usage, lambda_traced_invocations_usage, llm_observability_usage, llm_spans_usage, logs_indexed_15day_usage, logs_indexed_180day_usage, logs_indexed_1day_usage, logs_indexed_30day_usage, logs_indexed_360day_usage, logs_indexed_3day_usage, logs_indexed_45day_usage, logs_indexed_60day_usage, logs_indexed_7day_usage, logs_indexed_90day_usage, logs_indexed_custom_retention_usage, mobile_app_testing_usage, ndm_netflow_usage, npm_host_usage, network_device_wireless_usage, obs_pipeline_bytes_usage, obs_pipelines_vcpu_usage, online_archive_usage, product_analytics_session_usage, profiled_container_usage, profiled_fargate_usage, profiled_host_usage, published_app, rum_browser_mobile_sessions_usage, rum_ingested_usage, rum_investigate_usage, rum_replay_sessions_usage, rum_session_replay_add_on_usage, sca_fargate_usage, sds_scanned_bytes_usage, serverless_apps_usage, serverless_apps_apm_usage, siem_12mo_retention_usage, siem_6mo_retention_usage, siem_analyzed_logs_add_on_usage, siem_ingested_bytes_usage, snmp_usage, universal_service_monitoring_usage, vuln_management_hosts_usage, workflow_executions_usage)</td>
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
    <td><a href="#get_hourly_usage_attribution"><CopyableCode code="get_hourly_usage_attribution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-start_hr"><code>start_hr</code></a>, <a href="#parameter-usage_type"><code>usage_type</code></a></td>
    <td><a href="#parameter-end_hr"><code>end_hr</code></a>, <a href="#parameter-next_record_id"><code>next_record_id</code></a>, <a href="#parameter-tag_breakdown_keys"><code>tag_breakdown_keys</code></a>, <a href="#parameter-include_descendants"><code>include_descendants</code></a></td>
    <td>Get hourly usage attribution. Multi-region data is available starting March 1, 2023.&lt;br /&gt;&lt;br /&gt;This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is&lt;br /&gt;set in the response. If it is, make another request and pass `next_record_id` as a parameter.&lt;br /&gt;Pseudo code example:&lt;br /&gt;&lt;br /&gt;```&lt;br /&gt;response := GetHourlyUsageAttribution(start_month)&lt;br /&gt;cursor := response.metadata.pagination.next_record_id&lt;br /&gt;WHILE cursor != null BEGIN&lt;br /&gt;  sleep(5 seconds)  # Avoid running into rate limit&lt;br /&gt;  response := GetHourlyUsageAttribution(start_month, next_record_id=cursor)&lt;br /&gt;  cursor := response.metadata.pagination.next_record_id&lt;br /&gt;END&lt;br /&gt;```</td>
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
<tr id="parameter-start_hr">
    <td><CopyableCode code="start_hr" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to hour: `&#91;YYYY-MM-DDThh&#93;` for usage beginning at this hour.</td>
</tr>
<tr id="parameter-usage_type">
    <td><CopyableCode code="usage_type" /></td>
    <td><code>string</code></td>
    <td>Usage type to retrieve. Usage types are in the format `&lt;usage_type&gt;_usage`. Example: `infra_host_usage` To obtain the complete list of active usage types that can be used to replace <code>&lt;usage_type&gt;</code> in the field names, make a request to the &#91;Get usage attribution types API&#93;(https:​//docs.datadoghq.com/api/latest/usage-metering/#get-usage-attribution-types).</td>
</tr>
<tr id="parameter-end_hr">
    <td><CopyableCode code="end_hr" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to hour: `&#91;YYYY-MM-DDThh&#93;` for usage ending **before** this hour.</td>
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
<tr id="parameter-tag_breakdown_keys">
    <td><CopyableCode code="tag_breakdown_keys" /></td>
    <td><code>string</code></td>
    <td>Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags.  To see which tags are available, look for the value of `tag_config_source` in the API response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_hourly_usage_attribution"
    values={[
        { label: 'get_hourly_usage_attribution', value: 'get_hourly_usage_attribution' }
    ]}
>
<TabItem value="get_hourly_usage_attribution">

Get hourly usage attribution. Multi-region data is available starting March 1, 2023.&lt;br /&gt;&lt;br /&gt;This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is&lt;br /&gt;set in the response. If it is, make another request and pass `next_record_id` as a parameter.&lt;br /&gt;Pseudo code example:&lt;br /&gt;&lt;br /&gt;```&lt;br /&gt;response := GetHourlyUsageAttribution(start_month)&lt;br /&gt;cursor := response.metadata.pagination.next_record_id&lt;br /&gt;WHILE cursor != null BEGIN&lt;br /&gt;  sleep(5 seconds)  # Avoid running into rate limit&lt;br /&gt;  response := GetHourlyUsageAttribution(start_month, next_record_id=cursor)&lt;br /&gt;  cursor := response.metadata.pagination.next_record_id&lt;br /&gt;END&lt;br /&gt;```

```sql
SELECT
public_id,
org_name,
hour,
region,
tag_config_source,
tags,
total_usage_sum,
updated_at,
usage_type
FROM datadog.organization.usage_hourly_attribution
WHERE start_hr = '{{ start_hr }}' -- required
AND usage_type = '{{ usage_type }}' -- required
AND end_hr = '{{ end_hr }}'
AND next_record_id = '{{ next_record_id }}'
AND tag_breakdown_keys = '{{ tag_breakdown_keys }}'
AND include_descendants = '{{ include_descendants }}'
;
```
</TabItem>
</Tabs>
