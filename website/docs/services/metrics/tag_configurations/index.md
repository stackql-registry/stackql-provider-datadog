--- 
title: tag_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_configurations
  - metrics
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

Creates, updates, deletes, gets or lists a <code>tag_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.tag_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tag_configuration_by_name"
    values={[
        { label: 'list_tag_configuration_by_name', value: 'list_tag_configuration_by_name' },
        { label: 'list_tag_configurations', value: 'list_tag_configurations' }
    ]}
>
<TabItem value="list_tag_configuration_by_name">

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
    <td>The metric name for this resource. (example: test.metric.latency)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Object containing the definition of a metric tag configuration attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a metric.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The metric tag configuration resource type. (manage_tags) (default: manage_tags, example: manage_tags)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tag_configurations">

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
    <td>The metric name for this resource. (example: test.metric.latency)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Object containing the definition of a metric tag configuration attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a metric.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The metric resource type. (metrics) (default: metrics, example: metrics)</td>
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
    <td><a href="#list_tag_configuration_by_name"><CopyableCode code="list_tag_configuration_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Returns the tag configuration for the given metric name.&lt;br /&gt;&lt;br /&gt;A metric may exist and submit data without having a tag configuration. If no tag configuration exists&lt;br /&gt;for the metric, this endpoint returns `404 Not Found`. This response does not indicate that the metric&lt;br /&gt;itself is missing.</td>
</tr>
<tr>
    <td><a href="#list_tag_configurations"><CopyableCode code="list_tag_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[configured]"><code>filter[configured]</code></a>, <a href="#parameter-filter[is_configurable]"><code>filter[is_configurable]</code></a>, <a href="#parameter-filter[tags_configured]"><code>filter[tags_configured]</code></a>, <a href="#parameter-filter[metric_type]"><code>filter[metric_type]</code></a>, <a href="#parameter-filter[include_percentiles]"><code>filter[include_percentiles]</code></a>, <a href="#parameter-filter[queried]"><code>filter[queried]</code></a>, <a href="#parameter-filter[queried][window][seconds]"><code>filter[queried][window][seconds]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-filter[related_assets]"><code>filter[related_assets]</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-window[seconds]"><code>window[seconds]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a></td>
    <td>Get a list of actively reporting metrics for your organization. Pagination is optional using the `page&#91;cursor&#93;` and `page&#91;size&#93;` query parameters.&lt;br /&gt;&lt;br /&gt;Query parameters use bracket notation (for example, `filter&#91;tags&#93;`, `filter&#91;queried&#93;&#91;window&#93;&#91;seconds&#93;`). Pass them as standard URL query strings, URL-encoding the brackets if your client does not handle them. For example: `GET /api/v2/metrics?filter&#91;tags&#93;=env:prod&window&#91;seconds&#93;=86400&page&#91;size&#93;=500`.</td>
</tr>
<tr>
    <td><a href="#create_tag_configuration"><CopyableCode code="create_tag_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric.&lt;br /&gt;Optionally, include percentile aggregations on any distribution metric. By setting `exclude_tags_mode`&lt;br /&gt;to true, the behavior is changed from an allow-list to a deny-list, and tags in the defined list are&lt;br /&gt;not queryable. Can only be used with application keys of users with the `Manage Tags for Metrics`&lt;br /&gt;permission.</td>
</tr>
<tr>
    <td><a href="#update_tag_configuration"><CopyableCode code="update_tag_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the tag configuration of a metric or percentile aggregations of a distribution metric or custom aggregations&lt;br /&gt;of a count, rate, or gauge metric. By setting `exclude_tags_mode` to true the behavior is changed&lt;br /&gt;from an allow-list to a deny-list, and tags in the defined list will not be queryable.&lt;br /&gt;Can only be used with application keys from users with the `Manage Tags for Metrics` permission. This endpoint requires&lt;br /&gt;a tag configuration to be created first.</td>
</tr>
<tr>
    <td><a href="#delete_tag_configuration"><CopyableCode code="delete_tag_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Deletes a metric's tag configuration. Can only be used with application&lt;br /&gt;keys from users with the `Manage Tags for Metrics` permission.&lt;br /&gt;Note: This operation is irreversible.</td>
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
<tr id="parameter-metric_name">
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric. (example: dist.http.endpoint.request)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[configured]">
    <td><CopyableCode code="filter[configured]" /></td>
    <td><code>boolean</code></td>
    <td>Only return custom metrics that have been configured (`true`) or not configured (`false`) with Metrics Without Limits. (example: true)</td>
</tr>
<tr id="parameter-filter[include_percentiles]">
    <td><CopyableCode code="filter[include_percentiles]" /></td>
    <td><code>boolean</code></td>
    <td>Only return distribution metrics that have percentile aggregations enabled (true) or disabled (false). (example: true)</td>
</tr>
<tr id="parameter-filter[is_configurable]">
    <td><CopyableCode code="filter[is_configurable]" /></td>
    <td><code>boolean</code></td>
    <td>Only return metrics that are eligible (`true`) or ineligible (`false`) for configuration with Metrics Without Limits. (example: true)</td>
</tr>
<tr id="parameter-filter[metric_type]">
    <td><CopyableCode code="filter[metric_type]" /></td>
    <td><code>string</code></td>
    <td>Only return metrics of the given metric type.</td>
</tr>
<tr id="parameter-filter[queried]">
    <td><CopyableCode code="filter[queried]" /></td>
    <td><code>boolean</code></td>
    <td>Only return metrics that have been queried (true) or not queried (false) in the look back window. Set the window with `filter&#91;queried&#93;&#91;window&#93;&#91;seconds&#93;`; if omitted, a default window is used. (example: true)</td>
</tr>
<tr id="parameter-filter[queried][window][seconds]">
    <td><CopyableCode code="filter[queried][window][seconds]" /></td>
    <td><code>integer (int64)</code></td>
    <td>This parameter has no effect unless `filter&#91;queried&#93;` is also set. Only return metrics that have been queried or not queried in the specified window. The default value is 2,592,000 seconds (30 days), the maximum value is 15,552,000 seconds (180 days), and the minimum value is 1 second. For example: `filter&#91;queried&#93;=true&filter&#91;queried&#93;&#91;window&#93;&#91;seconds&#93;=604800`. (example: 15552000)</td>
</tr>
<tr id="parameter-filter[related_assets]">
    <td><CopyableCode code="filter[related_assets]" /></td>
    <td><code>boolean</code></td>
    <td>Only return metrics that are used in at least one dashboard, monitor, notebook, or SLO. (example: true)</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Only return metrics that were submitted with tags matching this expression. You can use AND, OR, IN, and wildcards. For example: `filter&#91;tags&#93;=env IN (staging,test) AND service:web*`. (example: env IN (staging,test) AND service:web*)</td>
</tr>
<tr id="parameter-filter[tags_configured]">
    <td><CopyableCode code="filter[tags_configured]" /></td>
    <td><code>string</code></td>
    <td>Only return metrics that have the given tag key(s) in their Metrics Without Limits configuration (included or excluded). (example: app,env)</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Include related resources in the response. Set to `metric_volumes` to include indexed and ingested volume counts for each metric. (example: metric_volumes)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Cursor for pagination. Use `page&#91;size&#93;` to opt-in to pagination and get the first page; for subsequent pages, use the value from `meta.pagination.next_cursor` in the response. Pagination is complete when `next_cursor` is null.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of results per page. Send `page&#91;size&#93;` on the first request to opt in to pagination. On each subsequent request, send `page&#91;cursor&#93;` set to the value of `meta.pagination.next_cursor` from the previous response. The default value is 10000, the maximum value is 10000, and the minimum value is 1.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort results by metric volume. Prefix a key with `-` for descending order. Supported keys: `metric_volumes.indexed_volume`, `metric_volumes.ingested_volume`, `metric_volumes.indexed_volume_delta`, `metric_volumes.ingested_volume_delta`. Requires a paginated request (`page&#91;size&#93;` or `page&#91;cursor&#93;`). (example: -metric_volumes.indexed_volume)</td>
</tr>
<tr id="parameter-window[seconds]">
    <td><CopyableCode code="window[seconds]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Only return metrics that have been actively reporting in the specified window. The default value is 3600 seconds (1 hour), the maximum value is 2,592,000 seconds (30 days), and the minimum value is 1 second. (example: 3600)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tag_configuration_by_name"
    values={[
        { label: 'list_tag_configuration_by_name', value: 'list_tag_configuration_by_name' },
        { label: 'list_tag_configurations', value: 'list_tag_configurations' }
    ]}
>
<TabItem value="list_tag_configuration_by_name">

Returns the tag configuration for the given metric name.&lt;br /&gt;&lt;br /&gt;A metric may exist and submit data without having a tag configuration. If no tag configuration exists&lt;br /&gt;for the metric, this endpoint returns `404 Not Found`. This response does not indicate that the metric&lt;br /&gt;itself is missing.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.metrics.tag_configurations
WHERE metric_name = '{{ metric_name }}' -- required
;
```
</TabItem>
<TabItem value="list_tag_configurations">

Get a list of actively reporting metrics for your organization. Pagination is optional using the `page&#91;cursor&#93;` and `page&#91;size&#93;` query parameters.&lt;br /&gt;&lt;br /&gt;Query parameters use bracket notation (for example, `filter&#91;tags&#93;`, `filter&#91;queried&#93;&#91;window&#93;&#91;seconds&#93;`). Pass them as standard URL query strings, URL-encoding the brackets if your client does not handle them. For example: `GET /api/v2/metrics?filter&#91;tags&#93;=env:prod&window&#91;seconds&#93;=86400&page&#91;size&#93;=500`.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.metrics.tag_configurations
WHERE filter[configured] = '{{ filter[configured] }}'
AND filter[is_configurable] = '{{ filter[is_configurable] }}'
AND filter[tags_configured] = '{{ filter[tags_configured] }}'
AND filter[metric_type] = '{{ filter[metric_type] }}'
AND filter[include_percentiles] = '{{ filter[include_percentiles] }}'
AND filter[queried] = '{{ filter[queried] }}'
AND filter[queried][window][seconds] = '{{ filter[queried][window][seconds] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND filter[related_assets] = '{{ filter[related_assets] }}'
AND include = '{{ include }}'
AND sort = '{{ sort }}'
AND window[seconds] = '{{ window[seconds] }}'
AND page[size] = '{{ page[size] }}'
AND page[cursor] = '{{ page[cursor] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag_configuration"
    values={[
        { label: 'create_tag_configuration', value: 'create_tag_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag_configuration">

Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric.&lt;br /&gt;Optionally, include percentile aggregations on any distribution metric. By setting `exclude_tags_mode`&lt;br /&gt;to true, the behavior is changed from an allow-list to a deny-list, and tags in the defined list are&lt;br /&gt;not queryable. Can only be used with application keys of users with the `Manage Tags for Metrics`&lt;br /&gt;permission.

```sql
INSERT INTO datadog.metrics.tag_configurations (
data,
metric_name
)
SELECT 
'{{ data }}' /* required */,
'{{ metric_name }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tag_configurations
  props:
    - name: metric_name
      value: "{{ metric_name }}"
      description: Required parameter for the tag_configurations resource.
    - name: data
      description: |
        Object for a single metric to be configure tags on.
      value:
        attributes:
          aggregations:
            - space: "{{ space }}"
              time: "{{ time }}"
          exclude_tags_mode: {{ exclude_tags_mode }}
          include_percentiles: {{ include_percentiles }}
          metric_type: "{{ metric_type }}"
          tags:
            - "{{ tags }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tag_configuration"
    values={[
        { label: 'update_tag_configuration', value: 'update_tag_configuration' }
    ]}
>
<TabItem value="update_tag_configuration">

Update the tag configuration of a metric or percentile aggregations of a distribution metric or custom aggregations&lt;br /&gt;of a count, rate, or gauge metric. By setting `exclude_tags_mode` to true the behavior is changed&lt;br /&gt;from an allow-list to a deny-list, and tags in the defined list will not be queryable.&lt;br /&gt;Can only be used with application keys from users with the `Manage Tags for Metrics` permission. This endpoint requires&lt;br /&gt;a tag configuration to be created first.

```sql
UPDATE datadog.metrics.tag_configurations
SET 
data = '{{ data }}'
WHERE 
metric_name = '{{ metric_name }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tag_configuration"
    values={[
        { label: 'delete_tag_configuration', value: 'delete_tag_configuration' }
    ]}
>
<TabItem value="delete_tag_configuration">

Deletes a metric's tag configuration. Can only be used with application&lt;br /&gt;keys from users with the `Manage Tags for Metrics` permission.&lt;br /&gt;Note: This operation is irreversible.

```sql
DELETE FROM datadog.metrics.tag_configurations
WHERE metric_name = '{{ metric_name }}' --required
;
```
</TabItem>
</Tabs>
