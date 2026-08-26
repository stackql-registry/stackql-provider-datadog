--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cost_tags"
    values={[
        { label: 'list_cost_tags', value: 'list_cost_tags' }
    ]}
>
<TabItem value="list_cost_tags">

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
    <td>The tag identifier, equal to its `key:value` representation. (example: providername:aws)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Cloud Cost Management tag.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management tag resource. (cost_tag) (default: cost_tag, example: cost_tag)</td>
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
    <td><a href="#list_cost_tags"><CopyableCode code="list_cost_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[metric]"><code>filter[metric]</code></a>, <a href="#parameter-filter[match]"><code>filter[match]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-filter[tag_keys]"><code>filter[tag_keys]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a></td>
    <td>List Cloud Cost Management tags for a given metric.</td>
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
<tr id="parameter-filter[match]">
    <td><CopyableCode code="filter[match]" /></td>
    <td><code>string</code></td>
    <td>A substring used to filter the returned tags by name.</td>
</tr>
<tr id="parameter-filter[metric]">
    <td><CopyableCode code="filter[metric]" /></td>
    <td><code>string</code></td>
    <td>The Cloud Cost Management metric to scope the tags to. When omitted, returns tags across all metrics.</td>
</tr>
<tr id="parameter-filter[tag_keys]">
    <td><CopyableCode code="filter[tag_keys]" /></td>
    <td><code>array</code></td>
    <td>Restrict the returned tags to those whose key matches one of the given tag keys.</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>array</code></td>
    <td>Filter to return only tags that appear with the given `key:value` tag values. For example, `filter&#91;tags&#93;=providername:aws` returns tags found on the same cost data, such as `aws_instance_type:t3.micro` and `aws_instance_type:m5.large`.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Controls the size of the internal tag search scope. This does **not** restrict the number of tags returned in the response. Defaults to 50, maximum 10000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cost_tags"
    values={[
        { label: 'list_cost_tags', value: 'list_cost_tags' }
    ]}
>
<TabItem value="list_cost_tags">

List Cloud Cost Management tags for a given metric.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tags
WHERE filter[metric] = '{{ filter[metric] }}'
AND filter[match] = '{{ filter[match] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND filter[tag_keys] = '{{ filter[tag_keys] }}'
AND page[size] = '{{ page[size] }}'
;
```
</TabItem>
</Tabs>
