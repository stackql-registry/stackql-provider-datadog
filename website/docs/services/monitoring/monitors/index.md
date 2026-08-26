--- 
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
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

Creates, updates, deletes, gets or lists a <code>monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' },
        { label: 'check_can_delete_monitor', value: 'check_can_delete_monitor' }
    ]}
>
<TabItem value="get_monitor">

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
    <td>ID of this monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The monitor name. (example: My monitor)</td>
</tr>
<tr>
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td>The list of monitor assets tied to a monitor, which represents key links for users to take action on monitor alerts (for example, runbooks).</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the monitor creation.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>Whether or not the monitor is deleted. (Always `null`)</td>
</tr>
<tr>
    <td><CopyableCode code="draft_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the monitor is in a draft or published state.  `draft`: The monitor appears as Draft and does not send notifications. `published`: The monitor is active and evaluates conditions and notify as configured.  This field is in preview. The draft value is only available to customers with the feature enabled. (draft, published) (default: published)</td>
</tr>
<tr>
    <td><CopyableCode code="matching_downtimes" /></td>
    <td><code>array</code></td>
    <td>A list of active v1 downtimes that match this monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message to include with notifications for this monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last timestamp when the monitor was edited.</td>
</tr>
<tr>
    <td><CopyableCode code="multi" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the monitor is broken down on different groups.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>List of options associated with your monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="overall_state" /></td>
    <td><code>string</code></td>
    <td>The different states your monitor can be in. (Alert, Ignored, No Data, OK, Skipped, Unknown, Warn)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int64)</code></td>
    <td>Integer from 1 (high) to 5 (low) indicating alert severity.</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The monitor query. (example: avg(last_5m):sum:system.net.bytes_rcvd&#123;host:host0&#125; &gt; 100)</td>
</tr>
<tr>
    <td><CopyableCode code="restricted_roles" /></td>
    <td><code>array</code></td>
    <td>A list of unique role identifiers to define which roles are allowed to edit the monitor. The unique identifiers for all roles can be pulled from the &#91;Roles API&#93;(https:​//docs.datadoghq.com/api/latest/roles/#list-roles) and are located in the `data.id` field. Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. You can use the &#91;Restriction Policies API&#93;(https:​//docs.datadoghq.com/api/latest/restriction-policies/) to manage write authorization for individual monitors by teams and users, in addition to roles.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Wrapper object with the different monitor states.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags associated to your monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the monitor. For more information about `type`, see the &#91;monitor options&#93;(https:​//docs.datadoghq.com/monitors/guide/monitor_api_options/) docs. (composite, event alert, log alert, metric alert, process alert, query alert, rum alert, service check, synthetics alert, trace-analytics alert, slo alert, event-v2 alert, audit alert, ci-pipelines alert, ci-tests alert, error-tracking alert, database-monitoring alert, network-performance alert, cost alert, data-quality alert, network-path alert, data-jobs alert, llm-observability alert) (example: query alert)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitors">

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
    <td>ID of this monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The monitor name. (example: My monitor)</td>
</tr>
<tr>
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td>The list of monitor assets tied to a monitor, which represents key links for users to take action on monitor alerts (for example, runbooks).</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the monitor creation.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>Whether or not the monitor is deleted. (Always `null`)</td>
</tr>
<tr>
    <td><CopyableCode code="draft_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the monitor is in a draft or published state.  `draft`: The monitor appears as Draft and does not send notifications. `published`: The monitor is active and evaluates conditions and notify as configured.  This field is in preview. The draft value is only available to customers with the feature enabled. (draft, published) (default: published)</td>
</tr>
<tr>
    <td><CopyableCode code="matching_downtimes" /></td>
    <td><code>array</code></td>
    <td>A list of active v1 downtimes that match this monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message to include with notifications for this monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last timestamp when the monitor was edited.</td>
</tr>
<tr>
    <td><CopyableCode code="multi" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the monitor is broken down on different groups.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>List of options associated with your monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="overall_state" /></td>
    <td><code>string</code></td>
    <td>The different states your monitor can be in. (Alert, Ignored, No Data, OK, Skipped, Unknown, Warn)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer (int64)</code></td>
    <td>Integer from 1 (high) to 5 (low) indicating alert severity.</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The monitor query. (example: avg(last_5m):sum:system.net.bytes_rcvd&#123;host:host0&#125; &gt; 100)</td>
</tr>
<tr>
    <td><CopyableCode code="restricted_roles" /></td>
    <td><code>array</code></td>
    <td>A list of unique role identifiers to define which roles are allowed to edit the monitor. The unique identifiers for all roles can be pulled from the &#91;Roles API&#93;(https:​//docs.datadoghq.com/api/latest/roles/#list-roles) and are located in the `data.id` field. Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. You can use the &#91;Restriction Policies API&#93;(https:​//docs.datadoghq.com/api/latest/restriction-policies/) to manage write authorization for individual monitors by teams and users, in addition to roles.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Wrapper object with the different monitor states.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags associated to your monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the monitor. For more information about `type`, see the &#91;monitor options&#93;(https:​//docs.datadoghq.com/monitors/guide/monitor_api_options/) docs. (composite, event alert, log alert, metric alert, process alert, query alert, rum alert, service check, synthetics alert, trace-analytics alert, slo alert, event-v2 alert, audit alert, ci-pipelines alert, ci-tests alert, error-tracking alert, database-monitoring alert, network-performance alert, cost alert, data-quality alert, network-path alert, data-jobs alert, llm-observability alert) (example: query alert)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="check_can_delete_monitor">

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
    <td><CopyableCode code="ok" /></td>
    <td><code>array</code></td>
    <td>An array of Monitor IDs that can be safely deleted.</td>
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
    <td><a href="#get_monitor"><CopyableCode code="get_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a></td>
    <td><a href="#parameter-group_states"><code>group_states</code></a>, <a href="#parameter-with_downtimes"><code>with_downtimes</code></a>, <a href="#parameter-with_assets"><code>with_assets</code></a></td>
    <td>Get details about the specified monitor from your organization.</td>
</tr>
<tr>
    <td><a href="#list_monitors"><CopyableCode code="list_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-group_states"><code>group_states</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-monitor_tags"><code>monitor_tags</code></a>, <a href="#parameter-with_downtimes"><code>with_downtimes</code></a>, <a href="#parameter-id_offset"><code>id_offset</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Get all monitors from your organization.</td>
</tr>
<tr>
    <td><a href="#check_can_delete_monitor"><CopyableCode code="check_can_delete_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_ids"><code>monitor_ids</code></a></td>
    <td></td>
    <td>Check if the given monitors can be deleted.</td>
</tr>
<tr>
    <td><a href="#create_monitor"><CopyableCode code="create_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td></td>
    <td>Create a monitor using the specified options.&lt;br /&gt;&lt;br /&gt;#### Monitor Types&lt;br /&gt;&lt;br /&gt;The type of monitor chosen from:&lt;br /&gt;&lt;br /&gt;- anomaly: `query alert`&lt;br /&gt;- APM: `query alert` or `trace-analytics alert`&lt;br /&gt;- composite: `composite`&lt;br /&gt;- custom: `service check`&lt;br /&gt;- forecast: `query alert`&lt;br /&gt;- host: `service check`&lt;br /&gt;- integration: `query alert` or `service check`&lt;br /&gt;- live process: `process alert`&lt;br /&gt;- logs: `log alert`&lt;br /&gt;- metric: `query alert`&lt;br /&gt;- network: `service check`&lt;br /&gt;- outlier: `query alert`&lt;br /&gt;- process: `service check`&lt;br /&gt;- rum: `rum alert`&lt;br /&gt;- SLO: `slo alert`&lt;br /&gt;- watchdog: `event-v2 alert`&lt;br /&gt;- event-v2: `event-v2 alert`&lt;br /&gt;- audit: `audit alert`&lt;br /&gt;- error-tracking: `error-tracking alert`&lt;br /&gt;- database-monitoring: `database-monitoring alert`&lt;br /&gt;- network-performance: `network-performance alert`&lt;br /&gt;- cloud cost: `cost alert`&lt;br /&gt;- network-path: `network-path alert`&lt;br /&gt;&lt;br /&gt;**Notes**:&lt;br /&gt;- Synthetic monitors are created through the Synthetics API. See the &#91;Synthetics API&#93;(https:​//docs.datadoghq.com/api/latest/synthetics/) documentation for more information.&lt;br /&gt;- Log monitors require an unscoped App Key.&lt;br /&gt;&lt;br /&gt;#### Query Types&lt;br /&gt;&lt;br /&gt;##### Metric Alert Query&lt;br /&gt;&lt;br /&gt;Example: `time_aggr(time_window):space_aggr:metric&#123;tags&#125; &#91;by &#123;key&#125;&#93; operator #`&lt;br /&gt;&lt;br /&gt;- `time_aggr`: avg, sum, max, min, change, or pct_change&lt;br /&gt;- `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w`&lt;br /&gt;- `space_aggr`: avg, sum, min, or max&lt;br /&gt;- `tags`: one or more tags (comma-separated), or *&lt;br /&gt;- `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert)&lt;br /&gt;- `operator`: &lt;, &lt;=, &gt;, &gt;=, ==, or !=&lt;br /&gt;- `#`: an integer or decimal number used to set the threshold&lt;br /&gt;&lt;br /&gt;To use a dynamic threshold on a metric monitor with a formula query, replace `#` with the `threshold` keyword&lt;br /&gt;(for example, `... &gt; threshold`) and provide the threshold as a query via `critical_query` on `options.thresholds`.&lt;br /&gt;This feature is in preview.&lt;br /&gt;&lt;br /&gt;If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window),&lt;br /&gt;timeshift):space_aggr:metric&#123;tags&#125; &#91;by &#123;key&#125;&#93; operator #` with:&lt;br /&gt;&lt;br /&gt;- `change_aggr` change, pct_change&lt;br /&gt;- `time_aggr` avg, sum, max, min &#91;Learn more&#93;(https:​//docs.datadoghq.com/monitors/create/types/#define-the-conditions)&lt;br /&gt;- `time_window` last\_#m (between 1 and 2880 depending on the monitor type), last\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2)&lt;br /&gt;- `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago&lt;br /&gt;&lt;br /&gt;Use this to create an outlier monitor using the following query:&lt;br /&gt;`avg(last_30m):outliers(avg:system.cpu.user&#123;role:es-events-data&#125; by &#123;host&#125;, 'dbscan', 7) &gt; 0`&lt;br /&gt;&lt;br /&gt;##### Service Check Query&lt;br /&gt;&lt;br /&gt;Example: `"check".over(tags).last(count).by(group).count_by_status()`&lt;br /&gt;&lt;br /&gt;- `check` name of the check, for example `datadog.agent.up`&lt;br /&gt;- `tags` one or more quoted tags (comma-separated), or "*". for example: `.over("env:prod", "role:db")`; `over` cannot be blank.&lt;br /&gt;- `count` must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100.&lt;br /&gt;For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3.&lt;br /&gt;- `group` must be specified for check monitors. Per-check grouping is already explicitly known for some service checks.&lt;br /&gt;For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See &#91;Service Checks&#93;(https:​//docs.datadoghq.com/api/latest/service-checks/) documentation for more information.&lt;br /&gt;&lt;br /&gt;##### Event Alert Query&lt;br /&gt;&lt;br /&gt;**Note:** The Event Alert Query has been replaced by the Event V2 Alert Query. For more information, see the &#91;Event Migration guide&#93;(https:​//docs.datadoghq.com/service_management/events/guides/migrating_to_new_events_features/).&lt;br /&gt;&lt;br /&gt;##### Event V2 Alert Query&lt;br /&gt;&lt;br /&gt;Example: `events(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### Process Alert Query&lt;br /&gt;&lt;br /&gt;Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`&lt;br /&gt;&lt;br /&gt;- `search` free text search string for querying processes.&lt;br /&gt;Matching processes match results on the &#91;Live Processes&#93;(https:​//docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page.&lt;br /&gt;- `tags` one or more tags (comma-separated)&lt;br /&gt;- `timeframe` the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d&lt;br /&gt;- `operator` &lt;, &lt;=, &gt;, &gt;=, ==, or !=&lt;br /&gt;- `#` an integer or decimal number used to set the threshold&lt;br /&gt;&lt;br /&gt;##### Logs Alert Query&lt;br /&gt;&lt;br /&gt;Example: `logs(query).index(index_name).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `index_name` For multi-index organizations, the log index in which the request is performed.&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### Composite Query&lt;br /&gt;&lt;br /&gt;Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors&lt;br /&gt;&lt;br /&gt;* `name` &#91;*required*, *default* = **dynamic, based on query**&#93;: The name of the alert.&lt;br /&gt;* `message` &#91;*required*, *default* = **dynamic, based on query**&#93;: A message to include with notifications for this monitor.&lt;br /&gt;Email notifications can be sent to specific users by using the same '@username' notation as events.&lt;br /&gt;* `tags` &#91;*optional*, *default* = **empty list**&#93;: A list of tags to associate with your monitor.&lt;br /&gt;When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags.&lt;br /&gt;It is only available via the API and isn't visible or editable in the Datadog UI.&lt;br /&gt;&lt;br /&gt;##### SLO Alert Query&lt;br /&gt;&lt;br /&gt;Example: `error_budget("slo_id").over("time_window") operator #`&lt;br /&gt;&lt;br /&gt;- `slo_id`: The alphanumeric SLO ID of the SLO you are configuring the alert for.&lt;br /&gt;- `time_window`: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`.&lt;br /&gt;- `operator`: `&gt;=` or `&gt;`&lt;br /&gt;&lt;br /&gt;##### Audit Alert Query&lt;br /&gt;&lt;br /&gt;Example: `audits(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### CI Pipelines Alert Query&lt;br /&gt;&lt;br /&gt;Example: `ci-pipelines(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### CI Tests Alert Query&lt;br /&gt;&lt;br /&gt;Example: `ci-tests(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### Error Tracking Alert Query&lt;br /&gt;&lt;br /&gt;"New issue" example: `error-tracking(query).source(issue_source).new().rollup(rollup_method&#91;, measure&#93;).by(group_by).last(time_window) operator #`&lt;br /&gt;"High impact issue" example: `error-tracking(query).source(issue_source).impact().rollup(rollup_method&#91;, measure&#93;).by(group_by).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `issue_source` The issue source - supports `all`, `browser`, `mobile` and `backend` and defaults to `all` if omitted.&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality` and defaults to `count` if omitted.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `group by` Comma-separated list of attributes to group by - should contain at least `issue.id`.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Database Monitoring Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `database-monitoring(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Network Performance Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `network-performance(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Cost Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `formula(query).timeframe_type(time_window).function(parameter) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `timeframe_type` The timeframe type to evaluate the cost&lt;br /&gt;        - for `forecast` supports `current`&lt;br /&gt;        - for `change`, `anomaly`, `threshold` supports `last`&lt;br /&gt;- `time_window` - supports daily roll-up e.g. `7d`&lt;br /&gt;- `function` - &#91;optional, defaults to `threshold` monitor if omitted&#93; supports `change`, `anomaly`, `forecast`&lt;br /&gt;- `parameter` Specify the parameter of the type&lt;br /&gt;    - for `change`:&lt;br /&gt;        - supports `relative`, `absolute`&lt;br /&gt;        - &#91;optional&#93; supports `#`, where `#` is an integer or decimal number used to set the threshold&lt;br /&gt;    - for `anomaly`:&lt;br /&gt;        - supports `direction=both`, `direction=above`, `direction=below`&lt;br /&gt;        - &#91;optional&#93; supports `threshold=#`, where `#` is an integer or decimal number used to set the threshold&lt;br /&gt;- `operator`&lt;br /&gt;    - for `threshold` supports `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`&lt;br /&gt;    - for `change` supports `&gt;`, `&lt;`&lt;br /&gt;    - for `anomaly` supports `&gt;=`&lt;br /&gt;    - for `forecast` supports `&gt;`&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Network Path Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `network-path(query).index(index_name).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `index_name` The data type to monitor on - supports `netpath-path` and `netpath-hop`.&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.</td>
</tr>
<tr>
    <td><a href="#update_monitor"><CopyableCode code="update_monitor" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a></td>
    <td></td>
    <td>Edit the specified monitor.</td>
</tr>
<tr>
    <td><a href="#delete_monitor"><CopyableCode code="delete_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Delete the specified monitor</td>
</tr>
<tr>
    <td><a href="#validate_monitor"><CopyableCode code="validate_monitor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td></td>
    <td>Validate the monitor provided in the request.&lt;br /&gt;&lt;br /&gt;**Note**: Log monitors require an unscoped App Key and `logs_read_data` permission.</td>
</tr>
<tr>
    <td><a href="#validate_existing_monitor"><CopyableCode code="validate_existing_monitor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td></td>
    <td>Validate the monitor provided in the request.&lt;br /&gt;&lt;br /&gt;**Note**: Log monitors require an unscoped App Key and `logs_read_data` permission.</td>
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
<tr id="parameter-monitor_id">
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the monitor</td>
</tr>
<tr id="parameter-monitor_ids">
    <td><CopyableCode code="monitor_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the monitor to check.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>string</code></td>
    <td>Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor).</td>
</tr>
<tr id="parameter-group_states">
    <td><CopyableCode code="group_states" /></td>
    <td><code>string</code></td>
    <td>When specified, shows additional information about the group states. Choose one or more from `all`, `alert`, `warn`, and `no data`.</td>
</tr>
<tr id="parameter-id_offset">
    <td><CopyableCode code="id_offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>Use this parameter for paginating through large sets of monitors. Start with a value of zero, make a request, set the value to the last ID of result set, and then repeat until the response is empty.</td>
</tr>
<tr id="parameter-monitor_tags">
    <td><CopyableCode code="monitor_tags" /></td>
    <td><code>string</code></td>
    <td>A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, `service:my-app`.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A string to filter monitors by name.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a `page_size` limit. However, if page is specified and `page_size` is not, the argument defaults to 100.</td>
</tr>
<tr id="parameter-tags">
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, `host:host0`.</td>
</tr>
<tr id="parameter-with_assets">
    <td><CopyableCode code="with_assets" /></td>
    <td><code>boolean</code></td>
    <td>If this argument is set to `true`, the returned data includes all assets tied to this monitor.</td>
</tr>
<tr id="parameter-with_downtimes">
    <td><CopyableCode code="with_downtimes" /></td>
    <td><code>boolean</code></td>
    <td>If this argument is set to true, then the returned data includes all current active downtimes for each monitor.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' },
        { label: 'check_can_delete_monitor', value: 'check_can_delete_monitor' }
    ]}
>
<TabItem value="get_monitor">

Get details about the specified monitor from your organization.

```sql
SELECT
id,
name,
assets,
created,
creator,
deleted,
draft_status,
matching_downtimes,
message,
modified,
multi,
options,
overall_state,
priority,
query,
restricted_roles,
state,
tags,
type
FROM datadog.monitoring.monitors
WHERE monitor_id = '{{ monitor_id }}' -- required
AND group_states = '{{ group_states }}'
AND with_downtimes = '{{ with_downtimes }}'
AND with_assets = '{{ with_assets }}'
;
```
</TabItem>
<TabItem value="list_monitors">

Get all monitors from your organization.

```sql
SELECT
id,
name,
assets,
created,
creator,
deleted,
draft_status,
matching_downtimes,
message,
modified,
multi,
options,
overall_state,
priority,
query,
restricted_roles,
state,
tags,
type
FROM datadog.monitoring.monitors
WHERE group_states = '{{ group_states }}'
AND name = '{{ name }}'
AND tags = '{{ tags }}'
AND monitor_tags = '{{ monitor_tags }}'
AND with_downtimes = '{{ with_downtimes }}'
AND id_offset = '{{ id_offset }}'
AND page = '{{ page }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
<TabItem value="check_can_delete_monitor">

Check if the given monitors can be deleted.

```sql
SELECT
ok
FROM datadog.monitoring.monitors
WHERE monitor_ids = '{{ monitor_ids }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor"
    values={[
        { label: 'create_monitor', value: 'create_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor">

Create a monitor using the specified options.&lt;br /&gt;&lt;br /&gt;#### Monitor Types&lt;br /&gt;&lt;br /&gt;The type of monitor chosen from:&lt;br /&gt;&lt;br /&gt;- anomaly: `query alert`&lt;br /&gt;- APM: `query alert` or `trace-analytics alert`&lt;br /&gt;- composite: `composite`&lt;br /&gt;- custom: `service check`&lt;br /&gt;- forecast: `query alert`&lt;br /&gt;- host: `service check`&lt;br /&gt;- integration: `query alert` or `service check`&lt;br /&gt;- live process: `process alert`&lt;br /&gt;- logs: `log alert`&lt;br /&gt;- metric: `query alert`&lt;br /&gt;- network: `service check`&lt;br /&gt;- outlier: `query alert`&lt;br /&gt;- process: `service check`&lt;br /&gt;- rum: `rum alert`&lt;br /&gt;- SLO: `slo alert`&lt;br /&gt;- watchdog: `event-v2 alert`&lt;br /&gt;- event-v2: `event-v2 alert`&lt;br /&gt;- audit: `audit alert`&lt;br /&gt;- error-tracking: `error-tracking alert`&lt;br /&gt;- database-monitoring: `database-monitoring alert`&lt;br /&gt;- network-performance: `network-performance alert`&lt;br /&gt;- cloud cost: `cost alert`&lt;br /&gt;- network-path: `network-path alert`&lt;br /&gt;&lt;br /&gt;**Notes**:&lt;br /&gt;- Synthetic monitors are created through the Synthetics API. See the &#91;Synthetics API&#93;(https:​//docs.datadoghq.com/api/latest/synthetics/) documentation for more information.&lt;br /&gt;- Log monitors require an unscoped App Key.&lt;br /&gt;&lt;br /&gt;#### Query Types&lt;br /&gt;&lt;br /&gt;##### Metric Alert Query&lt;br /&gt;&lt;br /&gt;Example: `time_aggr(time_window):space_aggr:metric&#123;tags&#125; &#91;by &#123;key&#125;&#93; operator #`&lt;br /&gt;&lt;br /&gt;- `time_aggr`: avg, sum, max, min, change, or pct_change&lt;br /&gt;- `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w`&lt;br /&gt;- `space_aggr`: avg, sum, min, or max&lt;br /&gt;- `tags`: one or more tags (comma-separated), or *&lt;br /&gt;- `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert)&lt;br /&gt;- `operator`: &lt;, &lt;=, &gt;, &gt;=, ==, or !=&lt;br /&gt;- `#`: an integer or decimal number used to set the threshold&lt;br /&gt;&lt;br /&gt;To use a dynamic threshold on a metric monitor with a formula query, replace `#` with the `threshold` keyword&lt;br /&gt;(for example, `... &gt; threshold`) and provide the threshold as a query via `critical_query` on `options.thresholds`.&lt;br /&gt;This feature is in preview.&lt;br /&gt;&lt;br /&gt;If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window),&lt;br /&gt;timeshift):space_aggr:metric&#123;tags&#125; &#91;by &#123;key&#125;&#93; operator #` with:&lt;br /&gt;&lt;br /&gt;- `change_aggr` change, pct_change&lt;br /&gt;- `time_aggr` avg, sum, max, min &#91;Learn more&#93;(https:​//docs.datadoghq.com/monitors/create/types/#define-the-conditions)&lt;br /&gt;- `time_window` last\_#m (between 1 and 2880 depending on the monitor type), last\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2)&lt;br /&gt;- `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago&lt;br /&gt;&lt;br /&gt;Use this to create an outlier monitor using the following query:&lt;br /&gt;`avg(last_30m):outliers(avg:system.cpu.user&#123;role:es-events-data&#125; by &#123;host&#125;, 'dbscan', 7) &gt; 0`&lt;br /&gt;&lt;br /&gt;##### Service Check Query&lt;br /&gt;&lt;br /&gt;Example: `"check".over(tags).last(count).by(group).count_by_status()`&lt;br /&gt;&lt;br /&gt;- `check` name of the check, for example `datadog.agent.up`&lt;br /&gt;- `tags` one or more quoted tags (comma-separated), or "*". for example: `.over("env:prod", "role:db")`; `over` cannot be blank.&lt;br /&gt;- `count` must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100.&lt;br /&gt;For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3.&lt;br /&gt;- `group` must be specified for check monitors. Per-check grouping is already explicitly known for some service checks.&lt;br /&gt;For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See &#91;Service Checks&#93;(https:​//docs.datadoghq.com/api/latest/service-checks/) documentation for more information.&lt;br /&gt;&lt;br /&gt;##### Event Alert Query&lt;br /&gt;&lt;br /&gt;**Note:** The Event Alert Query has been replaced by the Event V2 Alert Query. For more information, see the &#91;Event Migration guide&#93;(https:​//docs.datadoghq.com/service_management/events/guides/migrating_to_new_events_features/).&lt;br /&gt;&lt;br /&gt;##### Event V2 Alert Query&lt;br /&gt;&lt;br /&gt;Example: `events(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### Process Alert Query&lt;br /&gt;&lt;br /&gt;Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`&lt;br /&gt;&lt;br /&gt;- `search` free text search string for querying processes.&lt;br /&gt;Matching processes match results on the &#91;Live Processes&#93;(https:​//docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page.&lt;br /&gt;- `tags` one or more tags (comma-separated)&lt;br /&gt;- `timeframe` the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d&lt;br /&gt;- `operator` &lt;, &lt;=, &gt;, &gt;=, ==, or !=&lt;br /&gt;- `#` an integer or decimal number used to set the threshold&lt;br /&gt;&lt;br /&gt;##### Logs Alert Query&lt;br /&gt;&lt;br /&gt;Example: `logs(query).index(index_name).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `index_name` For multi-index organizations, the log index in which the request is performed.&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### Composite Query&lt;br /&gt;&lt;br /&gt;Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors&lt;br /&gt;&lt;br /&gt;* `name` &#91;*required*, *default* = **dynamic, based on query**&#93;: The name of the alert.&lt;br /&gt;* `message` &#91;*required*, *default* = **dynamic, based on query**&#93;: A message to include with notifications for this monitor.&lt;br /&gt;Email notifications can be sent to specific users by using the same '@username' notation as events.&lt;br /&gt;* `tags` &#91;*optional*, *default* = **empty list**&#93;: A list of tags to associate with your monitor.&lt;br /&gt;When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags.&lt;br /&gt;It is only available via the API and isn't visible or editable in the Datadog UI.&lt;br /&gt;&lt;br /&gt;##### SLO Alert Query&lt;br /&gt;&lt;br /&gt;Example: `error_budget("slo_id").over("time_window") operator #`&lt;br /&gt;&lt;br /&gt;- `slo_id`: The alphanumeric SLO ID of the SLO you are configuring the alert for.&lt;br /&gt;- `time_window`: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`.&lt;br /&gt;- `operator`: `&gt;=` or `&gt;`&lt;br /&gt;&lt;br /&gt;##### Audit Alert Query&lt;br /&gt;&lt;br /&gt;Example: `audits(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### CI Pipelines Alert Query&lt;br /&gt;&lt;br /&gt;Example: `ci-pipelines(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### CI Tests Alert Query&lt;br /&gt;&lt;br /&gt;Example: `ci-tests(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;##### Error Tracking Alert Query&lt;br /&gt;&lt;br /&gt;"New issue" example: `error-tracking(query).source(issue_source).new().rollup(rollup_method&#91;, measure&#93;).by(group_by).last(time_window) operator #`&lt;br /&gt;"High impact issue" example: `error-tracking(query).source(issue_source).impact().rollup(rollup_method&#91;, measure&#93;).by(group_by).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `issue_source` The issue source - supports `all`, `browser`, `mobile` and `backend` and defaults to `all` if omitted.&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality` and defaults to `count` if omitted.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `group by` Comma-separated list of attributes to group by - should contain at least `issue.id`.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Database Monitoring Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `database-monitoring(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Network Performance Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `network-performance(query).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Cost Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `formula(query).timeframe_type(time_window).function(parameter) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `timeframe_type` The timeframe type to evaluate the cost&lt;br /&gt;        - for `forecast` supports `current`&lt;br /&gt;        - for `change`, `anomaly`, `threshold` supports `last`&lt;br /&gt;- `time_window` - supports daily roll-up e.g. `7d`&lt;br /&gt;- `function` - &#91;optional, defaults to `threshold` monitor if omitted&#93; supports `change`, `anomaly`, `forecast`&lt;br /&gt;- `parameter` Specify the parameter of the type&lt;br /&gt;    - for `change`:&lt;br /&gt;        - supports `relative`, `absolute`&lt;br /&gt;        - &#91;optional&#93; supports `#`, where `#` is an integer or decimal number used to set the threshold&lt;br /&gt;    - for `anomaly`:&lt;br /&gt;        - supports `direction=both`, `direction=above`, `direction=below`&lt;br /&gt;        - &#91;optional&#93; supports `threshold=#`, where `#` is an integer or decimal number used to set the threshold&lt;br /&gt;- `operator`&lt;br /&gt;    - for `threshold` supports `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`&lt;br /&gt;    - for `change` supports `&gt;`, `&lt;`&lt;br /&gt;    - for `anomaly` supports `&gt;=`&lt;br /&gt;    - for `forecast` supports `&gt;`&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.&lt;br /&gt;&lt;br /&gt;**Network Path Alert Query**&lt;br /&gt;&lt;br /&gt;Example: `network-path(query).index(index_name).rollup(rollup_method&#91;, measure&#93;).last(time_window) operator #`&lt;br /&gt;&lt;br /&gt;- `query` The search query - following the &#91;Log search syntax&#93;(https:​//docs.datadoghq.com/logs/search_syntax/).&lt;br /&gt;- `index_name` The data type to monitor on - supports `netpath-path` and `netpath-hop`.&lt;br /&gt;- `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.&lt;br /&gt;- `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.&lt;br /&gt;- `time_window` #m (between 1 and 2880), #h (between 1 and 48).&lt;br /&gt;- `operator` `&lt;`, `&lt;=`, `&gt;`, `&gt;=`, `==`, or `!=`.&lt;br /&gt;- `#` an integer or decimal number used to set the threshold.

```sql
INSERT INTO datadog.monitoring.monitors (
assets,
draft_status,
matching_downtimes,
message,
name,
options,
priority,
query,
restricted_roles,
tags,
type
)
SELECT 
'{{ assets }}',
'{{ draft_status }}',
'{{ matching_downtimes }}',
'{{ message }}',
'{{ name }}',
'{{ options }}',
{{ priority }},
'{{ query }}' /* required */,
'{{ restricted_roles }}',
'{{ tags }}',
'{{ type }}' /* required */
RETURNING
id,
name,
assets,
created,
creator,
deleted,
draft_status,
matching_downtimes,
message,
modified,
multi,
options,
overall_state,
priority,
query,
restricted_roles,
state,
tags,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitors
  props:
    - name: assets
      description: |
        The list of monitor assets tied to a monitor, which represents key links for users to take action on monitor alerts (for example, runbooks).
      value:
        - category: "{{ category }}"
          name: "{{ name }}"
          resource_key: "{{ resource_key }}"
          resource_type: "{{ resource_type }}"
          url: "{{ url }}"
    - name: draft_status
      value: "{{ draft_status }}"
      description: |
        Indicates whether the monitor is in a draft or published state.
        \`draft\`: The monitor appears as Draft and does not send notifications.
        \`published\`: The monitor is active and evaluates conditions and notify as configured.
        This field is in preview. The draft value is only available to customers with the feature enabled.
      valid_values: ['draft', 'published']
      default: published
    - name: matching_downtimes
      description: |
        A list of active v1 downtimes that match this monitor.
      value:
        - end: {{ end }}
          id: {{ id }}
          scope: "{{ scope }}"
          start: {{ start }}
    - name: message
      value: "{{ message }}"
      description: |
        A message to include with notifications for this monitor.
    - name: name
      value: "{{ name }}"
      description: |
        The monitor name.
    - name: options
      description: |
        List of options associated with your monitor.
      value:
        aggregation:
          group_by: "{{ group_by }}"
          metric: "{{ metric }}"
          type: "{{ type }}"
        device_ids:
          - "{{ device_ids }}"
        enable_logs_sample: {{ enable_logs_sample }}
        enable_samples: {{ enable_samples }}
        escalation_message: "{{ escalation_message }}"
        evaluation_delay: {{ evaluation_delay }}
        group_retention_duration: "{{ group_retention_duration }}"
        groupby_simple_monitor: {{ groupby_simple_monitor }}
        include_tags: {{ include_tags }}
        locked: {{ locked }}
        min_failure_duration: {{ min_failure_duration }}
        min_location_failed: {{ min_location_failed }}
        new_group_delay: {{ new_group_delay }}
        new_host_delay: {{ new_host_delay }}
        no_data_timeframe: {{ no_data_timeframe }}
        notification_preset_name: "{{ notification_preset_name }}"
        notify_audit: {{ notify_audit }}
        notify_by:
          - "{{ notify_by }}"
        notify_no_data: {{ notify_no_data }}
        on_missing_data: "{{ on_missing_data }}"
        renotify_interval: {{ renotify_interval }}
        renotify_occurrences: {{ renotify_occurrences }}
        renotify_statuses:
          - "{{ renotify_statuses }}"
        require_full_window: {{ require_full_window }}
        scheduling_options:
          custom_schedule:
            recurrences:
              - rrule: "{{ rrule }}"
                start: "{{ start }}"
                timezone: "{{ timezone }}"
          evaluation_window:
            day_starts: "{{ day_starts }}"
            hour_starts: {{ hour_starts }}
            month_starts: {{ month_starts }}
            timezone: "{{ timezone }}"
        silenced: "{{ silenced }}"
        synthetics_check_id: "{{ synthetics_check_id }}"
        threshold_windows:
          recovery_window: "{{ recovery_window }}"
          trigger_window: "{{ trigger_window }}"
        thresholds:
          critical: {{ critical }}
          critical_query: "{{ critical_query }}"
          critical_recovery: {{ critical_recovery }}
          critical_recovery_query: "{{ critical_recovery_query }}"
          ok: {{ ok }}
          unknown: {{ unknown }}
          warning: {{ warning }}
          warning_recovery: {{ warning_recovery }}
        timeout_h: {{ timeout_h }}
        variables:
          - compute:
              aggregation: "{{ aggregation }}"
              interval: {{ interval }}
              metric: "{{ metric }}"
              name: "{{ name }}"
              source: "{{ source }}"
            data_source: "{{ data_source }}"
            group_by: "{{ group_by }}"
            indexes: "{{ indexes }}"
            name: "{{ name }}"
            search:
              query: "{{ query }}"
            aggregator: "{{ aggregator }}"
            query: "{{ query }}"
            filter: "{{ filter }}"
            measure: "{{ measure }}"
            monitor_options:
              crontab_override: "{{ crontab_override }}"
              custom_sql: "{{ custom_sql }}"
              custom_where: "{{ custom_where }}"
              group_by_columns:
                - "{{ group_by_columns }}"
              model_type_override: "{{ model_type_override }}"
              sensitivity: {{ sensitivity }}
            schema_version: "{{ schema_version }}"
            scope: "{{ scope }}"
            job_type: "{{ job_type }}"
            jobs_query: "{{ jobs_query }}"
            query_dialect: "{{ query_dialect }}"
            augment_query:
              compute:
                aggregation: "{{ aggregation }}"
                interval: {{ interval }}
                metric: "{{ metric }}"
                name: "{{ name }}"
                source: "{{ source }}"
              data_source: "{{ data_source }}"
              group_by:
                - facet: "{{ facet }}"
                  limit: {{ limit }}
                  sort:
                    aggregation: "{{ aggregation }}"
                    metric: "{{ metric }}"
                    order: "{{ order }}"
                  source: "{{ source }}"
              indexes:
                - "{{ indexes }}"
              name: "{{ name }}"
              search:
                query: "{{ query }}"
              columns:
                - alias: "{{ alias }}"
                  name: "{{ name }}"
              query_filter: "{{ query_filter }}"
              table_name: "{{ table_name }}"
            base_query:
              compute:
                aggregation: "{{ aggregation }}"
                interval: {{ interval }}
                metric: "{{ metric }}"
                name: "{{ name }}"
                source: "{{ source }}"
              data_source: "{{ data_source }}"
              group_by:
                - facet: "{{ facet }}"
                  limit: {{ limit }}
                  sort:
                    aggregation: "{{ aggregation }}"
                    metric: "{{ metric }}"
                    order: "{{ order }}"
                  source: "{{ source }}"
              indexes:
                - "{{ indexes }}"
              name: "{{ name }}"
              search:
                query: "{{ query }}"
              aggregator: "{{ aggregator }}"
              query: "{{ query }}"
            join_condition:
              augment_attribute: "{{ augment_attribute }}"
              base_attribute: "{{ base_attribute }}"
              join_type: "{{ join_type }}"
            filter_query:
              compute:
                aggregation: "{{ aggregation }}"
                interval: {{ interval }}
                metric: "{{ metric }}"
                name: "{{ name }}"
                source: "{{ source }}"
              data_source: "{{ data_source }}"
              group_by:
                - facet: "{{ facet }}"
                  limit: {{ limit }}
                  sort:
                    aggregation: "{{ aggregation }}"
                    metric: "{{ metric }}"
                    order: "{{ order }}"
                  source: "{{ source }}"
              indexes:
                - "{{ indexes }}"
              name: "{{ name }}"
              search:
                query: "{{ query }}"
              columns:
                - alias: "{{ alias }}"
                  name: "{{ name }}"
              query_filter: "{{ query_filter }}"
              table_name: "{{ table_name }}"
            filters: "{{ filters }}"
    - name: priority
      value: {{ priority }}
      description: |
        Integer from 1 (high) to 5 (low) indicating alert severity.
    - name: query
      value: "{{ query }}"
      description: |
        The monitor query.
    - name: restricted_roles
      value:
        - "{{ restricted_roles }}"
      description: |
        A list of unique role identifiers to define which roles are allowed to edit the monitor. The unique identifiers for all roles can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) and are located in the \`data.id\` field. Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. You can use the [Restriction Policies API](https://docs.datadoghq.com/api/latest/restriction-policies/) to manage write authorization for individual monitors by teams and users, in addition to roles.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        Tags associated to your monitor.
    - name: type
      value: "{{ type }}"
      description: |
        The type of the monitor. For more information about \`type\`, see the [monitor options](https://docs.datadoghq.com/monitors/guide/monitor_api_options/) docs.
      valid_values: ['composite', 'event alert', 'log alert', 'metric alert', 'process alert', 'query alert', 'rum alert', 'service check', 'synthetics alert', 'trace-analytics alert', 'slo alert', 'event-v2 alert', 'audit alert', 'ci-pipelines alert', 'ci-tests alert', 'error-tracking alert', 'database-monitoring alert', 'network-performance alert', 'cost alert', 'data-quality alert', 'network-path alert', 'data-jobs alert', 'llm-observability alert']
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_monitor"
    values={[
        { label: 'update_monitor', value: 'update_monitor' }
    ]}
>
<TabItem value="update_monitor">

Edit the specified monitor.

```sql
REPLACE datadog.monitoring.monitors
SET 
assets = '{{ assets }}',
draft_status = '{{ draft_status }}',
message = '{{ message }}',
name = '{{ name }}',
options = '{{ options }}',
priority = {{ priority }},
query = '{{ query }}',
restricted_roles = '{{ restricted_roles }}',
tags = '{{ tags }}',
type = '{{ type }}'
WHERE 
monitor_id = '{{ monitor_id }}' --required
RETURNING
id,
name,
assets,
created,
creator,
deleted,
draft_status,
matching_downtimes,
message,
modified,
multi,
options,
overall_state,
priority,
query,
restricted_roles,
state,
tags,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor"
    values={[
        { label: 'delete_monitor', value: 'delete_monitor' }
    ]}
>
<TabItem value="delete_monitor">

Delete the specified monitor

```sql
DELETE FROM datadog.monitoring.monitors
WHERE monitor_id = '{{ monitor_id }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="validate_monitor"
    values={[
        { label: 'validate_monitor', value: 'validate_monitor' },
        { label: 'validate_existing_monitor', value: 'validate_existing_monitor' }
    ]}
>
<TabItem value="validate_monitor">

Validate the monitor provided in the request.&lt;br /&gt;&lt;br /&gt;**Note**: Log monitors require an unscoped App Key and `logs_read_data` permission.

```sql
EXEC datadog.monitoring.monitors.validate_monitor 
@@json=
'{
"assets": "{{ assets }}", 
"draft_status": "{{ draft_status }}", 
"matching_downtimes": "{{ matching_downtimes }}", 
"message": "{{ message }}", 
"name": "{{ name }}", 
"options": "{{ options }}", 
"priority": {{ priority }}, 
"query": "{{ query }}", 
"restricted_roles": "{{ restricted_roles }}", 
"tags": "{{ tags }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="validate_existing_monitor">

Validate the monitor provided in the request.&lt;br /&gt;&lt;br /&gt;**Note**: Log monitors require an unscoped App Key and `logs_read_data` permission.

```sql
EXEC datadog.monitoring.monitors.validate_existing_monitor 
@monitor_id='{{ monitor_id }}' --required, 
@@json=
'{
"assets": "{{ assets }}", 
"draft_status": "{{ draft_status }}", 
"matching_downtimes": "{{ matching_downtimes }}", 
"message": "{{ message }}", 
"name": "{{ name }}", 
"options": "{{ options }}", 
"priority": {{ priority }}, 
"query": "{{ query }}", 
"restricted_roles": "{{ restricted_roles }}", 
"tags": "{{ tags }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
