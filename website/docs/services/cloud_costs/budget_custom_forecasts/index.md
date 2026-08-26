--- 
title: budget_custom_forecasts
hide_title: false
hide_table_of_contents: false
keywords:
  - budget_custom_forecasts
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

Creates, updates, deletes, gets or lists a <code>budget_custom_forecasts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budget_custom_forecasts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.budget_custom_forecasts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_forecast"
    values={[
        { label: 'get_custom_forecast', value: 'get_custom_forecast' }
    ]}
>
<TabItem value="get_custom_forecast">

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
    <td>The unique identifier of the custom forecast. (example: 11111111-1111-1111-1111-111111111111)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom forecast.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the custom forecast resource. Must be `custom_forecast`. (custom_forecast) (default: custom_forecast, example: custom_forecast)</td>
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
    <td><a href="#get_custom_forecast"><CopyableCode code="get_custom_forecast" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-budget_id"><code>budget_id</code></a></td>
    <td></td>
    <td>Get the custom forecast for a budget.</td>
</tr>
<tr>
    <td><a href="#upsert_custom_forecast"><CopyableCode code="upsert_custom_forecast" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or replace the custom forecast for an existing budget.&lt;br /&gt;Pass an empty `entries` list to delete the custom forecast for the budget.</td>
</tr>
<tr>
    <td><a href="#delete_custom_forecast"><CopyableCode code="delete_custom_forecast" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-budget_id"><code>budget_id</code></a></td>
    <td></td>
    <td>Delete the custom forecast for a budget.</td>
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
<tr id="parameter-budget_id">
    <td><CopyableCode code="budget_id" /></td>
    <td><code>string</code></td>
    <td>Budget id.</td>
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
    defaultValue="get_custom_forecast"
    values={[
        { label: 'get_custom_forecast', value: 'get_custom_forecast' }
    ]}
>
<TabItem value="get_custom_forecast">

Get the custom forecast for a budget.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.budget_custom_forecasts
WHERE budget_id = '{{ budget_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="upsert_custom_forecast"
    values={[
        { label: 'upsert_custom_forecast', value: 'upsert_custom_forecast' }
    ]}
>
<TabItem value="upsert_custom_forecast">

Create or replace the custom forecast for an existing budget.&lt;br /&gt;Pass an empty `entries` list to delete the custom forecast for the budget.

```sql
REPLACE datadog.cloud_costs.budget_custom_forecasts
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_forecast"
    values={[
        { label: 'delete_custom_forecast', value: 'delete_custom_forecast' }
    ]}
>
<TabItem value="delete_custom_forecast">

Delete the custom forecast for a budget.

```sql
DELETE FROM datadog.cloud_costs.budget_custom_forecasts
WHERE budget_id = '{{ budget_id }}' --required
;
```
</TabItem>
</Tabs>
