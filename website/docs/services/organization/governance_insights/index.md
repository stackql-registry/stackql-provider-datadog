--- 
title: governance_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - governance_insights
  - organization
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

Creates, updates, deletes, gets or lists a <code>governance_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="governance_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.governance_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_governance_insights"
    values={[
        { label: 'list_governance_insights', value: 'list_governance_insights' }
    ]}
>
<TabItem value="list_governance_insights">

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
    <td>The unique identifier of the insight. (example: 498ee21f-8037-48b8-a961-a488692902f4)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a governance insight. Exactly one of `metric_query`, `event_query`, `usage_query`, `audit_query`, or `percentage_query` is populated, depending on the data source the insight is computed from; the rest are `null`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for a governance insight. (insight) (example: insight)</td>
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
    <td><a href="#list_governance_insights"><CopyableCode code="list_governance_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[product]"><code>filter[product]</code></a></td>
    <td>Retrieve the list of governance insights available to the organization. Each insight&lt;br /&gt;reports the query used to compute it, so that the value can be computed client-side.&lt;br /&gt;Insights can be filtered by product.</td>
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
<tr id="parameter-filter[product]">
    <td><CopyableCode code="filter[product]" /></td>
    <td><code>array</code></td>
    <td>Restrict the results to insights belonging to the given products. May be repeated to filter by multiple products. Matching is case-insensitive. (example: &#91;Usage, Logs Settings&#93;)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_governance_insights"
    values={[
        { label: 'list_governance_insights', value: 'list_governance_insights' }
    ]}
>
<TabItem value="list_governance_insights">

Retrieve the list of governance insights available to the organization. Each insight&lt;br /&gt;reports the query used to compute it, so that the value can be computed client-side.&lt;br /&gt;Insights can be filtered by product.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.governance_insights
WHERE filter[product] = '{{ filter[product] }}'
;
```
</TabItem>
</Tabs>
