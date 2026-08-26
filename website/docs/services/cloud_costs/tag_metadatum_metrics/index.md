--- 
title: tag_metadatum_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_metadatum_metrics
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

Creates, updates, deletes, gets or lists a <code>tag_metadatum_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_metadatum_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tag_metadatum_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cost_tag_metadata_metrics"
    values={[
        { label: 'list_cost_tag_metadata_metrics', value: 'list_cost_tag_metadata_metrics' }
    ]}
>
<TabItem value="list_cost_tag_metadata_metrics">

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
    <td>The metric name, for example `aws.cost.net.amortized`. (example: aws.cost.net.amortized)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management available metric resource. (cost_metric) (default: cost_metric, example: cost_metric)</td>
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
    <td><a href="#list_cost_tag_metadata_metrics"><CopyableCode code="list_cost_tag_metadata_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[month]"><code>filter[month]</code></a></td>
    <td><a href="#parameter-filter[provider]"><code>filter[provider]</code></a></td>
    <td>List Cloud Cost Management metrics that have data for the requested period.</td>
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
<tr id="parameter-filter[provider]">
    <td><CopyableCode code="filter[provider]" /></td>
    <td><code>string</code></td>
    <td>Filter results to a specific provider. Common cloud values are `aws`, `azure`, `gcp`, `Oracle` (OCI), and `custom`. SaaS billing integrations (for example, `Snowflake`, `MongoDB`, `Databricks`) are also accepted using their display-name string. Values are case-sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cost_tag_metadata_metrics"
    values={[
        { label: 'list_cost_tag_metadata_metrics', value: 'list_cost_tag_metadata_metrics' }
    ]}
>
<TabItem value="list_cost_tag_metadata_metrics">

List Cloud Cost Management metrics that have data for the requested period.

```sql
SELECT
id,
type
FROM datadog.cloud_costs.tag_metadatum_metrics
WHERE filter[month] = '{{ filter[month] }}' -- required
AND filter[provider] = '{{ filter[provider] }}'
;
```
</TabItem>
</Tabs>
