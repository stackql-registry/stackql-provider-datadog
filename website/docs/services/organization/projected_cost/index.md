--- 
title: projected_cost
hide_title: false
hide_table_of_contents: false
keywords:
  - projected_cost
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

Creates, updates, deletes, gets or lists a <code>projected_cost</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projected_cost" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.projected_cost" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_projected_cost"
    values={[
        { label: 'get_projected_cost', value: 'get_projected_cost' }
    ]}
>
<TabItem value="get_projected_cost">

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
    <td>Unique ID of the response.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Projected Cost attributes data.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of cost data. (projected_cost) (default: projected_cost, example: projected_cost)</td>
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
    <td><a href="#get_projected_cost"><CopyableCode code="get_projected_cost" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-view"><code>view</code></a>, <a href="#parameter-include_connected_accounts"><code>include_connected_accounts</code></a></td>
    <td>Get projected cost across multi-org and single root-org accounts.&lt;br /&gt;Projected cost data is only available for the current month and becomes available around the 12th of the month.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).</td>
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
<tr id="parameter-include_connected_accounts">
    <td><CopyableCode code="include_connected_accounts" /></td>
    <td><code>boolean</code></td>
    <td>Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.</td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_projected_cost"
    values={[
        { label: 'get_projected_cost', value: 'get_projected_cost' }
    ]}
>
<TabItem value="get_projected_cost">

Get projected cost across multi-org and single root-org accounts.&lt;br /&gt;Projected cost data is only available for the current month and becomes available around the 12th of the month.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.projected_cost
WHERE view = '{{ view }}'
AND include_connected_accounts = '{{ include_connected_accounts }}'
;
```
</TabItem>
</Tabs>
