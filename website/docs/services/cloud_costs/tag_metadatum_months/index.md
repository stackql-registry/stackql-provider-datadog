--- 
title: tag_metadatum_months
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_metadatum_months
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

Creates, updates, deletes, gets or lists a <code>tag_metadatum_months</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_metadatum_months" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tag_metadatum_months" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cost_tag_metadata_months"
    values={[
        { label: 'list_cost_tag_metadata_months', value: 'list_cost_tag_metadata_months' }
    ]}
>
<TabItem value="list_cost_tag_metadata_months">

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
    <td>The month, in `YYYY-MM` format. (example: 2026-04)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management tag metadata month resource. (cost_tag_metadata_month) (default: cost_tag_metadata_month, example: cost_tag_metadata_month)</td>
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
    <td><a href="#list_cost_tag_metadata_months"><CopyableCode code="list_cost_tag_metadata_months" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[provider]"><code>filter[provider]</code></a></td>
    <td></td>
    <td>List months that have Cloud Cost Management tag metadata for a given provider,&lt;br /&gt;ordered most-recent first. The response is capped at 36 months.</td>
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
<tr id="parameter-filter[provider]">
    <td><CopyableCode code="filter[provider]" /></td>
    <td><code>string</code></td>
    <td>Provider to scope the query to. Use the value of the `providername` tag in CCM (for example, `aws`, `azure`, `gcp`, `Oracle`, `Confluent Cloud`, `Snowflake`). For costs uploaded through the Custom Costs API, use `custom`. Values are case-sensitive. (example: aws)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cost_tag_metadata_months"
    values={[
        { label: 'list_cost_tag_metadata_months', value: 'list_cost_tag_metadata_months' }
    ]}
>
<TabItem value="list_cost_tag_metadata_months">

List months that have Cloud Cost Management tag metadata for a given provider,&lt;br /&gt;ordered most-recent first. The response is capped at 36 months.

```sql
SELECT
id,
type
FROM datadog.cloud_costs.tag_metadatum_months
WHERE filter[provider] = '{{ filter[provider] }}' -- required
;
```
</TabItem>
</Tabs>
