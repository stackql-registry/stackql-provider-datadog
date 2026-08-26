--- 
title: monitor_group_search_results
hide_title: false
hide_table_of_contents: false
keywords:
  - monitor_group_search_results
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

Creates, updates, deletes, gets or lists a <code>monitor_group_search_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitor_group_search_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.monitor_group_search_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_monitor_groups"
    values={[
        { label: 'search_monitor_groups', value: 'search_monitor_groups' }
    ]}
>
<TabItem value="search_monitor_groups">

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
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="group" /></td>
    <td><code>string</code></td>
    <td>The name of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_tags" /></td>
    <td><code>array</code></td>
    <td>The list of tags of the monitor group.</td>
</tr>
<tr>
    <td><CopyableCode code="last_nodata_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Latest timestamp the monitor group was in NO_DATA state.</td>
</tr>
<tr>
    <td><CopyableCode code="last_triggered_ts" /></td>
    <td><code>integer (int64)</code></td>
    <td>Latest timestamp the monitor group triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The different states your monitor can be in. (Alert, Ignored, No Data, OK, Skipped, Unknown, Warn)</td>
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
    <td><a href="#search_monitor_groups"><CopyableCode code="search_monitor_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Search and filter your monitor groups details.</td>
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
    <td>After entering a search query on the &#91;Triggered Monitors page&#93;&#91;1&#93;, use the query parameter value in the URL of the page as a value for this parameter. For more information, see the &#91;Manage Monitors documentation&#93;&#91;2&#93;.  The query can contain any number of space-separated monitor attributes, for instance: `query="type:metric group_status:alert"`.  &#91;1&#93;: https:​//app.datadoghq.com/monitors/triggered &#91;2&#93;: /monitors/manage/#triggered-monitors</td>
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
    defaultValue="search_monitor_groups"
    values={[
        { label: 'search_monitor_groups', value: 'search_monitor_groups' }
    ]}
>
<TabItem value="search_monitor_groups">

Search and filter your monitor groups details.

```sql
SELECT
monitor_id,
monitor_name,
group,
group_tags,
last_nodata_ts,
last_triggered_ts,
status
FROM datadog.monitoring.monitor_group_search_results
WHERE query = '{{ query }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>
