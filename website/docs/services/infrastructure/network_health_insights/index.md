--- 
title: network_health_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - network_health_insights
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

Creates, updates, deletes, gets or lists a <code>network_health_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_health_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.network_health_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_network_health_insights"
    values={[
        { label: 'list_network_health_insights', value: 'list_network_health_insights' }
    ]}
>
<TabItem value="list_network_health_insights">

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
    <td><code>string</code></td>
    <td>Unique identifier for this network health insight. (example: example-insight-id)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Detailed attributes of a network health insight.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for network health insights. Always `network-health-insights`. (network-health-insights) (default: network-health-insights, example: network-health-insights)</td>
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
    <td><a href="#list_network_health_insights"><CopyableCode code="list_network_health_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td>Return network health insights for the organization within the given time window.&lt;br /&gt;Insights are produced by analyzing DNS failures pre-classified by `network-dns-logger`,&lt;br /&gt;TLS certificate metrics, and denied security group connections. Each insight&lt;br /&gt;identifies the client and server services involved, the type of issue, and the&lt;br /&gt;magnitude of the failure observed during the query window.</td>
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
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window will be `&#91;now - 15m, now&#93;`. (example: 1716800000)</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td>Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be the current time. If neither `from` nor `to` are provided, the query window will be `&#91;now - 15m, now&#93;`. (example: 1716800900)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_network_health_insights"
    values={[
        { label: 'list_network_health_insights', value: 'list_network_health_insights' }
    ]}
>
<TabItem value="list_network_health_insights">

Return network health insights for the organization within the given time window.&lt;br /&gt;Insights are produced by analyzing DNS failures pre-classified by `network-dns-logger`,&lt;br /&gt;TLS certificate metrics, and denied security group connections. Each insight&lt;br /&gt;identifies the client and server services involved, the type of issue, and the&lt;br /&gt;magnitude of the failure observed during the query window.

```sql
SELECT
id,
attributes,
type
FROM datadog.infrastructure.network_health_insights
WHERE from = '{{ from }}'
AND to = '{{ to }}'
;
```
</TabItem>
</Tabs>
