--- 
title: tag_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_metadata
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

Creates, updates, deletes, gets or lists a <code>tag_metadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_metadata" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tag_metadata" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cost_tag_metadata"
    values={[
        { label: 'list_cost_tag_metadata', value: 'list_cost_tag_metadata' }
    ]}
>
<TabItem value="list_cost_tag_metadata">

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
    <td>A composite identifier of the form `tag_key:metric` for monthly roll-ups, or `tag_key:metric:YYYY-MM-DD` when `filter&#91;daily&#93;=true`. (example: env:aws.cost.net.amortized)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Cloud Cost Management tag key metadata entry.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management tag key metadata resource. (cost_tag_key_metadata) (default: cost_tag_key_metadata, example: cost_tag_key_metadata)</td>
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
    <td><a href="#list_cost_tag_metadata"><CopyableCode code="list_cost_tag_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[month]"><code>filter[month]</code></a></td>
    <td><a href="#parameter-filter[provider]"><code>filter[provider]</code></a>, <a href="#parameter-filter[metric]"><code>filter[metric]</code></a>, <a href="#parameter-filter[tag_key]"><code>filter[tag_key]</code></a>, <a href="#parameter-filter[daily]"><code>filter[daily]</code></a></td>
    <td>List Cloud Cost Management tag key metadata, including row counts, cost covered, cardinality, and a sample of top tag values per cloud account. Use `filter&#91;daily&#93;=true` to return daily rows instead of the default monthly roll-up.</td>
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
<tr id="parameter-filter[month]">
    <td><CopyableCode code="filter[month]" /></td>
    <td><code>string</code></td>
    <td>The month to scope the query to, in `YYYY-MM` format. (example: 2026-02)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[daily]">
    <td><CopyableCode code="filter[daily]" /></td>
    <td><code>string</code></td>
    <td>When `true`, return one row per day with the day in the `date` attribute. Defaults to the monthly roll-up when omitted.</td>
</tr>
<tr id="parameter-filter[metric]">
    <td><CopyableCode code="filter[metric]" /></td>
    <td><code>string</code></td>
    <td>Filter results to a specific Cloud Cost Management metric (for example, `aws.cost.net.amortized`). When omitted, every available metric for the requested period is returned.</td>
</tr>
<tr id="parameter-filter[provider]">
    <td><CopyableCode code="filter[provider]" /></td>
    <td><code>string</code></td>
    <td>Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive.</td>
</tr>
<tr id="parameter-filter[tag_key]">
    <td><CopyableCode code="filter[tag_key]" /></td>
    <td><code>string</code></td>
    <td>Restrict results to a single tag key.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cost_tag_metadata"
    values={[
        { label: 'list_cost_tag_metadata', value: 'list_cost_tag_metadata' }
    ]}
>
<TabItem value="list_cost_tag_metadata">

List Cloud Cost Management tag key metadata, including row counts, cost covered, cardinality, and a sample of top tag values per cloud account. Use `filter[daily]=true` to return daily rows instead of the default monthly roll-up.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_metadata
WHERE filter[month] = '{{ filter[month] }}' -- required
AND filter[provider] = '{{ filter[provider] }}'
AND filter[metric] = '{{ filter[metric] }}'
AND filter[tag_key] = '{{ filter[tag_key] }}'
AND filter[daily] = '{{ filter[daily] }}'
;
```
</TabItem>
</Tabs>
