--- 
title: hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - hosts
  - infrastructure
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

Creates, updates, deletes, gets or lists a <code>hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.hosts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_hosts"
    values={[
        { label: 'list_hosts', value: 'list_hosts' }
    ]}
>
<TabItem value="list_hosts">

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The host ID.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The host name. (example: i-hostname)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_name" /></td>
    <td><code>string</code></td>
    <td>AWS name of your host. (example: mycoolhost-1)</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>The host name. (example: i-deadbeef)</td>
</tr>
<tr>
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>Host aliases collected by Datadog.</td>
</tr>
<tr>
    <td><CopyableCode code="apps" /></td>
    <td><code>array</code></td>
    <td>The Datadog integrations reporting metrics for the host.</td>
</tr>
<tr>
    <td><CopyableCode code="is_muted" /></td>
    <td><code>boolean</code></td>
    <td>If a host is muted or unmuted.</td>
</tr>
<tr>
    <td><CopyableCode code="last_reported_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Last time the host reported a metric data point.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with your host.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Host Metrics collected.</td>
</tr>
<tr>
    <td><CopyableCode code="mute_timeout" /></td>
    <td><code>integer (int64)</code></td>
    <td>Timeout of the mute applied to your host.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Source or cloud provider associated with your host.</td>
</tr>
<tr>
    <td><CopyableCode code="tags_by_source" /></td>
    <td><code>object</code></td>
    <td>List of tags for each source (AWS, Datadog Agent, Chef..).</td>
</tr>
<tr>
    <td><CopyableCode code="up" /></td>
    <td><code>boolean</code></td>
    <td>Displays UP when the expected metrics are received and displays `???` if no metrics are received.</td>
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
    <td><a href="#list_hosts"><CopyableCode code="list_hosts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-sort_field"><code>sort_field</code></a>, <a href="#parameter-sort_dir"><code>sort_dir</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-include_muted_hosts_data"><code>include_muted_hosts_data</code></a>, <a href="#parameter-include_hosts_metadata"><code>include_hosts_metadata</code></a></td>
    <td>This endpoint allows searching for hosts by name, alias, or tag.&lt;br /&gt;Hosts live within the past 3 hours are included by default.&lt;br /&gt;Retention is 7 days.&lt;br /&gt;Results are paginated with a max of 1000 results at a time.&lt;br /&gt;**Note:** If the host is an Amazon EC2 instance, `id` is replaced with `aws_id` in the response.&lt;br /&gt;**Note**: To enrich the data returned by this endpoint with security scans, see the new &#91;api/v2/security/scanned-assets-metadata&#93;(https:​//docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.</td>
</tr>
<tr>
    <td><a href="#mute_host"><CopyableCode code="mute_host" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-host_name"><code>host_name</code></a></td>
    <td></td>
    <td>Mute a host. **Note:** This creates a &#91;Downtime V2&#93;(https:​//docs.datadoghq.com/api/latest/downtimes/#schedule-a-downtime) for the host.</td>
</tr>
<tr>
    <td><a href="#unmute_host"><CopyableCode code="unmute_host" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-host_name"><code>host_name</code></a></td>
    <td></td>
    <td>Unmutes a host. This endpoint takes no JSON arguments.</td>
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
<tr id="parameter-host_name">
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Name of the host to unmute.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of hosts to return. Max 1000.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>String to filter search results.</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of seconds since UNIX epoch from which you want to search your hosts.</td>
</tr>
<tr id="parameter-include_hosts_metadata">
    <td><CopyableCode code="include_hosts_metadata" /></td>
    <td><code>boolean</code></td>
    <td>Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).</td>
</tr>
<tr id="parameter-include_muted_hosts_data">
    <td><CopyableCode code="include_muted_hosts_data" /></td>
    <td><code>boolean</code></td>
    <td>Include information on the muted status of hosts and when the mute expires.</td>
</tr>
<tr id="parameter-sort_dir">
    <td><CopyableCode code="sort_dir" /></td>
    <td><code>string</code></td>
    <td>Direction of sort. Options include `asc` and `desc`.</td>
</tr>
<tr id="parameter-sort_field">
    <td><CopyableCode code="sort_field" /></td>
    <td><code>string</code></td>
    <td>Sort hosts by this field.</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specify the starting point for the host search results. For example, if you set `count` to 100 and the first 100 results have already been returned, you can set `start` to `101` to get the next 100 results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_hosts"
    values={[
        { label: 'list_hosts', value: 'list_hosts' }
    ]}
>
<TabItem value="list_hosts">

This endpoint allows searching for hosts by name, alias, or tag.&lt;br /&gt;Hosts live within the past 3 hours are included by default.&lt;br /&gt;Retention is 7 days.&lt;br /&gt;Results are paginated with a max of 1000 results at a time.&lt;br /&gt;**Note:** If the host is an Amazon EC2 instance, `id` is replaced with `aws_id` in the response.&lt;br /&gt;**Note**: To enrich the data returned by this endpoint with security scans, see the new &#91;api/v2/security/scanned-assets-metadata&#93;(https:​//docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.

```sql
SELECT
id,
name,
aws_name,
host_name,
aliases,
apps,
is_muted,
last_reported_time,
meta,
metrics,
mute_timeout,
sources,
tags_by_source,
up
FROM datadog.infrastructure.hosts
WHERE filter = '{{ filter }}'
AND sort_field = '{{ sort_field }}'
AND sort_dir = '{{ sort_dir }}'
AND start = '{{ start }}'
AND count = '{{ count }}'
AND from = '{{ from }}'
AND include_muted_hosts_data = '{{ include_muted_hosts_data }}'
AND include_hosts_metadata = '{{ include_hosts_metadata }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="mute_host"
    values={[
        { label: 'mute_host', value: 'mute_host' },
        { label: 'unmute_host', value: 'unmute_host' }
    ]}
>
<TabItem value="mute_host">

Mute a host. **Note:** This creates a [Downtime V2](https://docs.datadoghq.com/api/latest/downtimes/#schedule-a-downtime) for the host.

```sql
EXEC datadog.infrastructure.hosts.mute_host 
@host_name='{{ host_name }}' --required, 
@@json=
'{
"end": {{ end }}, 
"message": "{{ message }}", 
"override": {{ override }}
}'
;
```
</TabItem>
<TabItem value="unmute_host">

Unmutes a host. This endpoint takes no JSON arguments.

```sql
EXEC datadog.infrastructure.hosts.unmute_host 
@host_name='{{ host_name }}' --required 
;
```
</TabItem>
</Tabs>
