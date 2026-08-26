--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
  - logs
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logs_index"
    values={[
        { label: 'get_logs_index', value: 'get_logs_index' },
        { label: 'list_log_indexes', value: 'list_log_indexes' }
    ]}
>
<TabItem value="get_logs_index">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the index. (example: main)</td>
</tr>
<tr>
    <td><CopyableCode code="daily_limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of log events you can send in this index per day before you are rate-limited.</td>
</tr>
<tr>
    <td><CopyableCode code="daily_limit_reset" /></td>
    <td><code>object</code></td>
    <td>Object containing options to override the default daily limit reset time.</td>
</tr>
<tr>
    <td><CopyableCode code="daily_limit_warning_threshold_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>A percentage threshold of the daily quota at which a Datadog warning event is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusion_filters" /></td>
    <td><code>array</code></td>
    <td>An array of exclusion objects. The logs are tested against the query of each filter, following the order of the array. Only the first matching active exclusion matters, others (if any) are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Filter for logs.</td>
</tr>
<tr>
    <td><CopyableCode code="is_rate_limited" /></td>
    <td><code>boolean</code></td>
    <td>A boolean stating if the index is rate limited, meaning more logs than the daily limit have been sent. Rate limit is reset every-day at 2pm UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="num_flex_logs_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of days logs are stored in Standard and Flex Tier before being deleted from the index. If Standard Tier is enabled on this index, logs are first retained in Standard Tier for the number of days specified through `num_retention_days`, and then stored in Flex Tier until the number of days specified in `num_flex_logs_retention_days` is reached. The available values depend on retention plans specified in your organization's contract/subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="num_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index. The available values depend on retention plans specified in your organization's contract/subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with the index. Tags must be in `key:value` format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_log_indexes">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the index. (example: main)</td>
</tr>
<tr>
    <td><CopyableCode code="daily_limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of log events you can send in this index per day before you are rate-limited.</td>
</tr>
<tr>
    <td><CopyableCode code="daily_limit_reset" /></td>
    <td><code>object</code></td>
    <td>Object containing options to override the default daily limit reset time.</td>
</tr>
<tr>
    <td><CopyableCode code="daily_limit_warning_threshold_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>A percentage threshold of the daily quota at which a Datadog warning event is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusion_filters" /></td>
    <td><code>array</code></td>
    <td>An array of exclusion objects. The logs are tested against the query of each filter, following the order of the array. Only the first matching active exclusion matters, others (if any) are ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Filter for logs.</td>
</tr>
<tr>
    <td><CopyableCode code="is_rate_limited" /></td>
    <td><code>boolean</code></td>
    <td>A boolean stating if the index is rate limited, meaning more logs than the daily limit have been sent. Rate limit is reset every-day at 2pm UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="num_flex_logs_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of days logs are stored in Standard and Flex Tier before being deleted from the index. If Standard Tier is enabled on this index, logs are first retained in Standard Tier for the number of days specified through `num_retention_days`, and then stored in Flex Tier until the number of days specified in `num_flex_logs_retention_days` is reached. The available values depend on retention plans specified in your organization's contract/subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="num_retention_days" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index. The available values depend on retention plans specified in your organization's contract/subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with the index. Tags must be in `key:value` format.</td>
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
    <td><a href="#get_logs_index"><CopyableCode code="get_logs_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Get one log index from your organization. This endpoint takes no JSON arguments.</td>
</tr>
<tr>
    <td><a href="#list_log_indexes"><CopyableCode code="list_log_indexes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>The Index object describes the configuration of a log index.&lt;br /&gt;This endpoint returns an array of the `LogIndex` objects of your organization.</td>
</tr>
<tr>
    <td><a href="#create_logs_index"><CopyableCode code="create_logs_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td></td>
    <td>Creates a new index. Returns the Index object passed in the request body when the request is successful.</td>
</tr>
<tr>
    <td><a href="#update_logs_index"><CopyableCode code="update_logs_index" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td></td>
    <td>Update an index as identified by its name.&lt;br /&gt;Returns the Index object passed in the request body when the request is successful.&lt;br /&gt;&lt;br /&gt;Using the `PUT` method updates your index's configuration by **replacing**&lt;br /&gt;your current configuration with the new one sent to your Datadog organization.</td>
</tr>
<tr>
    <td><a href="#delete_logs_index"><CopyableCode code="delete_logs_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Delete an existing index from your organization. Index deletions are permanent and cannot be reverted.&lt;br /&gt;You cannot recreate an index with the same name as deleted ones.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the log index.</td>
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
    defaultValue="get_logs_index"
    values={[
        { label: 'get_logs_index', value: 'get_logs_index' },
        { label: 'list_log_indexes', value: 'list_log_indexes' }
    ]}
>
<TabItem value="get_logs_index">

Get one log index from your organization. This endpoint takes no JSON arguments.

```sql
SELECT
name,
daily_limit,
daily_limit_reset,
daily_limit_warning_threshold_percentage,
exclusion_filters,
filter,
is_rate_limited,
num_flex_logs_retention_days,
num_retention_days,
tags
FROM datadog.logs.indexes
WHERE name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list_log_indexes">

The Index object describes the configuration of a log index.&lt;br /&gt;This endpoint returns an array of the `LogIndex` objects of your organization.

```sql
SELECT
name,
daily_limit,
daily_limit_reset,
daily_limit_warning_threshold_percentage,
exclusion_filters,
filter,
is_rate_limited,
num_flex_logs_retention_days,
num_retention_days,
tags
FROM datadog.logs.indexes
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_logs_index"
    values={[
        { label: 'create_logs_index', value: 'create_logs_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_logs_index">

Creates a new index. Returns the Index object passed in the request body when the request is successful.

```sql
INSERT INTO datadog.logs.indexes (
daily_limit,
daily_limit_reset,
daily_limit_warning_threshold_percentage,
exclusion_filters,
filter,
name,
num_flex_logs_retention_days,
num_retention_days,
tags
)
SELECT 
{{ daily_limit }},
'{{ daily_limit_reset }}',
{{ daily_limit_warning_threshold_percentage }},
'{{ exclusion_filters }}',
'{{ filter }}' /* required */,
'{{ name }}' /* required */,
{{ num_flex_logs_retention_days }},
{{ num_retention_days }},
'{{ tags }}'
RETURNING
name,
daily_limit,
daily_limit_reset,
daily_limit_warning_threshold_percentage,
exclusion_filters,
filter,
is_rate_limited,
num_flex_logs_retention_days,
num_retention_days,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexes
  props:
    - name: daily_limit
      value: {{ daily_limit }}
      description: |
        The number of log events you can send in this index per day before you are rate-limited.
    - name: daily_limit_reset
      description: |
        Object containing options to override the default daily limit reset time.
      value:
        reset_time: "{{ reset_time }}"
        reset_utc_offset: "{{ reset_utc_offset }}"
    - name: daily_limit_warning_threshold_percentage
      value: {{ daily_limit_warning_threshold_percentage }}
      description: |
        A percentage threshold of the daily quota at which a Datadog warning event is generated.
    - name: exclusion_filters
      description: |
        An array of exclusion objects. The logs are tested against the query of each filter,
        following the order of the array. Only the first matching active exclusion matters,
        others (if any) are ignored.
      value:
        - filter:
            query: "{{ query }}"
            sample_attribute: "{{ sample_attribute }}"
            sample_rate: {{ sample_rate }}
          is_enabled: {{ is_enabled }}
          name: "{{ name }}"
    - name: filter
      description: |
        Filter for logs.
      value:
        query: "{{ query }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name of the index.
    - name: num_flex_logs_retention_days
      value: {{ num_flex_logs_retention_days }}
      description: |
        The total number of days logs are stored in Standard and Flex Tier before being deleted from the index.
        If Standard Tier is enabled on this index, logs are first retained in Standard Tier for the number of days specified through \`num_retention_days\`,
        and then stored in Flex Tier until the number of days specified in \`num_flex_logs_retention_days\` is reached.
        The available values depend on retention plans specified in your organization's contract/subscriptions.
    - name: num_retention_days
      value: {{ num_retention_days }}
      description: |
        The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index.
        The available values depend on retention plans specified in your organization's contract/subscriptions.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        A list of tags associated with the index. Tags must be in \`key:value\` format.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_logs_index"
    values={[
        { label: 'update_logs_index', value: 'update_logs_index' }
    ]}
>
<TabItem value="update_logs_index">

Update an index as identified by its name.&lt;br /&gt;Returns the Index object passed in the request body when the request is successful.&lt;br /&gt;&lt;br /&gt;Using the `PUT` method updates your index's configuration by **replacing**&lt;br /&gt;your current configuration with the new one sent to your Datadog organization.

```sql
REPLACE datadog.logs.indexes
SET 
daily_limit = {{ daily_limit }},
daily_limit_reset = '{{ daily_limit_reset }}',
daily_limit_warning_threshold_percentage = {{ daily_limit_warning_threshold_percentage }},
disable_daily_limit = {{ disable_daily_limit }},
exclusion_filters = '{{ exclusion_filters }}',
filter = '{{ filter }}',
num_flex_logs_retention_days = {{ num_flex_logs_retention_days }},
num_retention_days = {{ num_retention_days }},
tags = '{{ tags }}'
WHERE 
name = '{{ name }}' --required
AND filter = '{{ filter }}' --required
RETURNING
name,
daily_limit,
daily_limit_reset,
daily_limit_warning_threshold_percentage,
exclusion_filters,
filter,
is_rate_limited,
num_flex_logs_retention_days,
num_retention_days,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_logs_index"
    values={[
        { label: 'delete_logs_index', value: 'delete_logs_index' }
    ]}
>
<TabItem value="delete_logs_index">

Delete an existing index from your organization. Index deletions are permanent and cannot be reverted.&lt;br /&gt;You cannot recreate an index with the same name as deleted ones.

```sql
DELETE FROM datadog.logs.indexes
WHERE name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
