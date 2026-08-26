--- 
title: monitor_search_results
hide_title: false
hide_table_of_contents: false
keywords:
  - monitor_search_results
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>monitor_search_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitor_search_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.monitor_search_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_monitors"
    values={[
        { label: 'search_monitors', value: 'search_monitors' }
    ]}
>
<TabItem value="search_monitors">

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
    <td>ID of the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The monitor name.</td>
</tr>
<tr>
    <td><CopyableCode code="org_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>Classification of the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="last_triggered_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Latest timestamp the monitor triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Metrics used by the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>array</code></td>
    <td>The notification triggered by the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="quality_issues" /></td>
    <td><code>array</code></td>
    <td>Quality issues detected with the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The monitor query. (example: avg(last_5m):sum:system.net.bytes_rcvd&#123;host:host0&#125; &gt; 100)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>The scope(s) to which the downtime applies, for example `host:app2`. Provide multiple scopes as a comma-separated list, for example `env:dev,env:prod`. The resulting downtime applies to sources that matches ALL provided scopes (that is `env:dev AND env:prod`), NOT any of them.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The different states your monitor can be in. (Alert, Ignored, No Data, OK, Skipped, Unknown, Warn)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags associated with the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the monitor. For more information about `type`, see the &#91;monitor options&#93;(https:​//docs.datadoghq.com/monitors/guide/monitor_api_options/) docs. (composite, event alert, log alert, metric alert, process alert, query alert, rum alert, service check, synthetics alert, trace-analytics alert, slo alert, event-v2 alert, audit alert, ci-pipelines alert, ci-tests alert, error-tracking alert, database-monitoring alert, network-performance alert, cost alert, data-quality alert, network-path alert, data-jobs alert, llm-observability alert) (example: query alert)</td>
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
    <td><a href="#search_monitors"><CopyableCode code="search_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Search and filter your monitors details.</td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page to start paginating from.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of monitors to return per page.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>After entering a search query in your &#91;Manage Monitor page&#93;&#91;1&#93; use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated &#91;manage monitor documentation&#93;&#91;2&#93; page to learn more.  The query can contain any number of space-separated monitor attributes, for instance `query="type:metric status:alert"`.  &#91;1&#93;: https:​//app.datadoghq.com/monitors/manage &#91;2&#93;: /monitors/manage/#find-the-monitors</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>String for sort order, composed of field and sort order separate by a comma, for example `name,asc`. Supported sort directions: `asc`, `desc`. Supported fields:  * `name` * `status` * `tags`</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_monitors"
    values={[
        { label: 'search_monitors', value: 'search_monitors' }
    ]}
>
<TabItem value="search_monitors">

Search and filter your monitors details.

```sql
SELECT
id,
name,
org_id,
classification,
creator,
last_triggered_ts,
metrics,
notifications,
quality_issues,
query,
scopes,
status,
tags,
type
FROM datadog.monitoring.monitor_search_results
WHERE query = '{{ query }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>
