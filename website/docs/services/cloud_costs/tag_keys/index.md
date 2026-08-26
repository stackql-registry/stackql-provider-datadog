--- 
title: tag_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_keys
  - cloud_costs
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

Creates, updates, deletes, gets or lists a <code>tag_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tag_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_tag_key"
    values={[
        { label: 'get_cost_tag_key', value: 'get_cost_tag_key' },
        { label: 'list_cost_tag_keys', value: 'list_cost_tag_keys' }
    ]}
>
<TabItem value="get_cost_tag_key">

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
    <td>The tag key identifier. (example: providername)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Cloud Cost Management tag key.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management tag key resource. (cost_tag_key) (default: cost_tag_key, example: cost_tag_key)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cost_tag_keys">

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
    <td>The tag key identifier. (example: providername)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Cloud Cost Management tag key.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management tag key resource. (cost_tag_key) (default: cost_tag_key, example: cost_tag_key)</td>
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
    <td><a href="#get_cost_tag_key"><CopyableCode code="get_cost_tag_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tag_key"><code>tag_key</code></a></td>
    <td><a href="#parameter-filter[metric]"><code>filter[metric]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a></td>
    <td>Get details for a specific Cloud Cost Management tag key, including example tag values and description.</td>
</tr>
<tr>
    <td><a href="#list_cost_tag_keys"><CopyableCode code="list_cost_tag_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[metric]"><code>filter[metric]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a></td>
    <td>List Cloud Cost Management tag keys.</td>
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
<tr id="parameter-tag_key">
    <td><CopyableCode code="tag_key" /></td>
    <td><code>string</code></td>
    <td>The Cloud Cost Management tag key. Tag keys can contain forward slashes (for example, `kubernetes/instance`).</td>
</tr>
<tr id="parameter-filter[metric]">
    <td><CopyableCode code="filter[metric]" /></td>
    <td><code>string</code></td>
    <td>The Cloud Cost Management metric to scope the tag keys to. When omitted, returns tag keys across all metrics.</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>array</code></td>
    <td>Filter to return only tag keys that appear with the given `key:value` tag values. For example, `filter&#91;tags&#93;=providername:aws` returns tag keys found on the same cost data, such as `is_aws_ec2_compute` and `aws_instance_type`.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Controls the size of the internal tag value search scope. This does **not** restrict the number of example tag values returned in the response. Defaults to 50, maximum 10000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cost_tag_key"
    values={[
        { label: 'get_cost_tag_key', value: 'get_cost_tag_key' },
        { label: 'list_cost_tag_keys', value: 'list_cost_tag_keys' }
    ]}
>
<TabItem value="get_cost_tag_key">

Get details for a specific Cloud Cost Management tag key, including example tag values and description.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_keys
WHERE tag_key = '{{ tag_key }}' -- required
AND filter[metric] = '{{ filter[metric] }}'
AND page[size] = '{{ page[size] }}'
;
```
</TabItem>
<TabItem value="list_cost_tag_keys">

List Cloud Cost Management tag keys.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_keys
WHERE filter[metric] = '{{ filter[metric] }}'
AND filter[tags] = '{{ filter[tags] }}'
;
```
</TabItem>
</Tabs>
