--- 
title: dashboard_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_usage
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>dashboard_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.dashboard_usage" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard_usage"
    values={[
        { label: 'get_dashboard_usage', value: 'get_dashboard_usage' },
        { label: 'list_dashboards_usage', value: 'list_dashboards_usage' }
    ]}
>
<TabItem value="get_dashboard_usage">

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
    <td>The dashboard ID. (example: q5j-nti-fv6)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Usage statistics for a dashboard. The `viewer` field and all view-count fields (`total_views`, `viewed_at`, `total_views_by_type`) are populated only when Real User Monitoring (RUM) is active for the org.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. Always `dashboards-usages`. (dashboards-usages) (default: dashboards-usages, example: dashboards-usages)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dashboards_usage">

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
    <td>The dashboard ID. (example: q5j-nti-fv6)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Usage statistics for a dashboard. The `viewer` field and all view-count fields (`total_views`, `viewed_at`, `total_views_by_type`) are populated only when Real User Monitoring (RUM) is active for the org.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. Always `dashboards-usages`. (dashboards-usages) (default: dashboards-usages, example: dashboards-usages)</td>
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
    <td><a href="#get_dashboard_usage"><CopyableCode code="get_dashboard_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a></td>
    <td></td>
    <td>Get usage statistics for a single dashboard. The response includes view counts, the most recent view and edit times, widget counts, and the dashboard quality score. View-count fields depend on Real User Monitoring (RUM) and are `null` or `0` in orgs without RUM. **View counts are refreshed once per day** and **only reflect views recorded starting January 2025**; views prior to that date are not included.</td>
</tr>
<tr>
    <td><a href="#list_dashboards_usage"><CopyableCode code="list_dashboards_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-filter[edited_before]"><code>filter[edited_before]</code></a>, <a href="#parameter-filter[viewed_before]"><code>filter[viewed_before]</code></a></td>
    <td>Get paginated usage statistics for every dashboard in the caller's organization. Use `page&#91;limit&#93;` and `page&#91;offset&#93;` to walk the result set. Use `filter&#91;edited_before&#93;` or `filter&#91;viewed_before&#93;` to narrow results by edit or view date. View-count fields depend on Real User Monitoring (RUM) and are `null` or `0` in orgs without RUM. **View counts are refreshed once per day** and **only reflect views recorded starting January 2025**; views prior to that date are not included.</td>
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
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[edited_before]">
    <td><CopyableCode code="filter[edited_before]" /></td>
    <td><code>string</code></td>
    <td>Return only dashboards whose last edit (`edited_at`) is strictly before this ISO 8601 timestamp (`edited_at &lt; value`; boundary matches are excluded). Must include a timezone offset (for example, `Z` or `+00:00`); naive timestamps return HTTP 400.</td>
</tr>
<tr id="parameter-filter[viewed_before]">
    <td><CopyableCode code="filter[viewed_before]" /></td>
    <td><code>string</code></td>
    <td>Return only dashboards whose most recent view (`viewed_at`) is strictly before this ISO 8601 timestamp, including dashboards that have never been viewed. Must include a timezone offset; naive timestamps return HTTP 400. Orgs without Real User Monitoring (RUM) will see all dashboards returned by this filter.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of dashboards to return per page. Server-side maximum is 500; values above 500 return a 400 Bad Request.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Zero-based offset into the result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dashboard_usage"
    values={[
        { label: 'get_dashboard_usage', value: 'get_dashboard_usage' },
        { label: 'list_dashboards_usage', value: 'list_dashboards_usage' }
    ]}
>
<TabItem value="get_dashboard_usage">

Get usage statistics for a single dashboard. The response includes view counts, the most recent view and edit times, widget counts, and the dashboard quality score. View-count fields depend on Real User Monitoring (RUM) and are `null` or `0` in orgs without RUM. **View counts are refreshed once per day** and **only reflect views recorded starting January 2025**; views prior to that date are not included.

```sql
SELECT
id,
attributes,
type
FROM datadog.dashboards.dashboard_usage
WHERE dashboard_id = '{{ dashboard_id }}' -- required
;
```
</TabItem>
<TabItem value="list_dashboards_usage">

Get paginated usage statistics for every dashboard in the caller's organization. Use `page[limit]` and `page[offset]` to walk the result set. Use `filter[edited_before]` or `filter[viewed_before]` to narrow results by edit or view date. View-count fields depend on Real User Monitoring (RUM) and are `null` or `0` in orgs without RUM. **View counts are refreshed once per day** and **only reflect views recorded starting January 2025**; views prior to that date are not included.

```sql
SELECT
id,
attributes,
type
FROM datadog.dashboards.dashboard_usage
WHERE page[limit] = '{{ page[limit] }}'
AND page[offset] = '{{ page[offset] }}'
AND filter[edited_before] = '{{ filter[edited_before] }}'
AND filter[viewed_before] = '{{ filter[viewed_before] }}'
;
```
</TabItem>
</Tabs>
