--- 
title: tag_indexing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_indexing_rules
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

Creates, updates, deletes, gets or lists a <code>tag_indexing_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_indexing_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.tag_indexing_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tag_indexing_rule"
    values={[
        { label: 'get_tag_indexing_rule', value: 'get_tag_indexing_rule' },
        { label: 'list_tag_indexing_rules_for_metric', value: 'list_tag_indexing_rules_for_metric' },
        { label: 'list_tag_indexing_rules', value: 'list_tag_indexing_rules' }
    ]}
>
<TabItem value="get_tag_indexing_rule">

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
    <td>The unique identifier (UUID) of the tag indexing rule. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a tag indexing rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The tag indexing rule resource type. (tag_indexing_rules) (default: tag_indexing_rules, example: tag_indexing_rules)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tag_indexing_rules_for_metric">

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
    <td>The unique identifier (UUID) of the tag indexing rule. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a tag indexing rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The tag indexing rule resource type. (tag_indexing_rules) (default: tag_indexing_rules, example: tag_indexing_rules)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tag_indexing_rules">

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
    <td>The unique identifier (UUID) of the tag indexing rule. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a tag indexing rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The tag indexing rule resource type. (tag_indexing_rules) (default: tag_indexing_rules, example: tag_indexing_rules)</td>
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
    <td><a href="#get_tag_indexing_rule"><CopyableCode code="get_tag_indexing_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a single tag indexing rule by its UUID.</td>
</tr>
<tr>
    <td><a href="#list_tag_indexing_rules_for_metric"><CopyableCode code="list_tag_indexing_rules_for_metric" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>List the tag indexing rules that apply to a given metric, sorted by `rule_order`.&lt;br /&gt;Matching is performed server-side using each rule's `metric_name_matches` glob patterns.</td>
</tr>
<tr>
    <td><a href="#list_tag_indexing_rules"><CopyableCode code="list_tag_indexing_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-search"><code>search</code></a></td>
    <td>List tag indexing rules for an org, sorted by `rule_order`, with offset/limit pagination.</td>
</tr>
<tr>
    <td><a href="#create_tag_indexing_rule"><CopyableCode code="create_tag_indexing_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a tag indexing rule for the org. `rule_order` is assigned server-side as max+1&lt;br /&gt;among existing rules; use the reorder endpoint to change the evaluation order.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.</td>
</tr>
<tr>
    <td><a href="#update_tag_indexing_rule"><CopyableCode code="update_tag_indexing_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update a tag indexing rule. Fields omitted from the request body are left unchanged.&lt;br /&gt;Setting `rule_order` to a value already used by another rule returns 409; use the&lt;br /&gt;reorder endpoint for atomic re-sequencing. Requires the `Manage Tags for Metrics` permission.</td>
</tr>
<tr>
    <td><a href="#delete_tag_indexing_rule"><CopyableCode code="delete_tag_indexing_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Soft-delete a tag indexing rule. Idempotent: returns 204 whether the rule existed or was already deleted.&lt;br /&gt;Remaining rules in the org are automatically re-sequenced to keep `rule_order` dense and 1-based.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.</td>
</tr>
<tr>
    <td><a href="#reorder_tag_indexing_rules"><CopyableCode code="reorder_tag_indexing_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Atomically re-sequence the tag indexing rules for an org to match the supplied list of rule UUIDs.&lt;br /&gt;The server assigns `rule_order` 1, 2, … matching each rule UUID by position in the list.&lt;br /&gt;The UUIDs of all active rules must be provided; omitting any active rule UUID returns a 400 error.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the tag indexing rule. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
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
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page size (1–1000, default 100).</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page offset from the start of the list (default 0).</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Substring filter on rule name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tag_indexing_rule"
    values={[
        { label: 'get_tag_indexing_rule', value: 'get_tag_indexing_rule' },
        { label: 'list_tag_indexing_rules_for_metric', value: 'list_tag_indexing_rules_for_metric' },
        { label: 'list_tag_indexing_rules', value: 'list_tag_indexing_rules' }
    ]}
>
<TabItem value="get_tag_indexing_rule">

Get a single tag indexing rule by its UUID.

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.tag_indexing_rules
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_tag_indexing_rules_for_metric">

List the tag indexing rules that apply to a given metric, sorted by `rule_order`.&lt;br /&gt;Matching is performed server-side using each rule's `metric_name_matches` glob patterns.

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.tag_indexing_rules
WHERE metric_name = '{{ metric_name }}' -- required
;
```
</TabItem>
<TabItem value="list_tag_indexing_rules">

List tag indexing rules for an org, sorted by `rule_order`, with offset/limit pagination.

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.tag_indexing_rules
WHERE page[limit] = '{{ page[limit] }}'
AND page[offset] = '{{ page[offset] }}'
AND search = '{{ search }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag_indexing_rule"
    values={[
        { label: 'create_tag_indexing_rule', value: 'create_tag_indexing_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag_indexing_rule">

Create a tag indexing rule for the org. `rule_order` is assigned server-side as max+1&lt;br /&gt;among existing rules; use the reorder endpoint to change the evaluation order.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.

```sql
INSERT INTO datadog.metrics.tag_indexing_rules (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tag_indexing_rules
  props:
    - name: data
      description: |
        Data object for creating a tag indexing rule.
      value:
        attributes:
          exclude_tags_mode: {{ exclude_tags_mode }}
          ignored_metric_name_matches:
            - "{{ ignored_metric_name_matches }}"
          metric_name_matches:
            - "{{ metric_name_matches }}"
          name: "{{ name }}"
          options:
            data:
              dynamic_tags:
                exclude_not_queried_window_seconds: {{ exclude_not_queried_window_seconds }}
                exclude_not_used_in_assets: {{ exclude_not_used_in_assets }}
                queried_tags_window_seconds: {{ queried_tags_window_seconds }}
                related_asset_tags: {{ related_asset_tags }}
              manage_preexisting_metrics: {{ manage_preexisting_metrics }}
              metric_match:
                is_queried: {{ is_queried }}
                not_queried: {{ not_queried }}
                not_used_in_assets: {{ not_used_in_assets }}
                queried_window_seconds: {{ queried_window_seconds }}
                used_in_assets: {{ used_in_assets }}
              override_previous_rules: {{ override_previous_rules }}
            version: {{ version }}
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_tag_indexing_rule"
    values={[
        { label: 'update_tag_indexing_rule', value: 'update_tag_indexing_rule' }
    ]}
>
<TabItem value="update_tag_indexing_rule">

Partially update a tag indexing rule. Fields omitted from the request body are left unchanged.&lt;br /&gt;Setting `rule_order` to a value already used by another rule returns 409; use the&lt;br /&gt;reorder endpoint for atomic re-sequencing. Requires the `Manage Tags for Metrics` permission.

```sql
REPLACE datadog.metrics.tag_indexing_rules
SET 
data = '{{ data }}'
WHERE 
id = '{{ id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tag_indexing_rule"
    values={[
        { label: 'delete_tag_indexing_rule', value: 'delete_tag_indexing_rule' }
    ]}
>
<TabItem value="delete_tag_indexing_rule">

Soft-delete a tag indexing rule. Idempotent: returns 204 whether the rule existed or was already deleted.&lt;br /&gt;Remaining rules in the org are automatically re-sequenced to keep `rule_order` dense and 1-based.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.

```sql
DELETE FROM datadog.metrics.tag_indexing_rules
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reorder_tag_indexing_rules"
    values={[
        { label: 'reorder_tag_indexing_rules', value: 'reorder_tag_indexing_rules' }
    ]}
>
<TabItem value="reorder_tag_indexing_rules">

Atomically re-sequence the tag indexing rules for an org to match the supplied list of rule UUIDs.&lt;br /&gt;The server assigns `rule_order` 1, 2, … matching each rule UUID by position in the list.&lt;br /&gt;The UUIDs of all active rules must be provided; omitting any active rule UUID returns a 400 error.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.

```sql
EXEC datadog.metrics.tag_indexing_rules.reorder_tag_indexing_rules 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
