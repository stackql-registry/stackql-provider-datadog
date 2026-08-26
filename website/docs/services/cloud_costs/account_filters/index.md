--- 
title: account_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - account_filters
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

Creates, updates, deletes, gets or lists an <code>account_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.account_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_account_filters"
    values={[
        { label: 'get_cost_account_filters', value: 'get_cost_account_filters' }
    ]}
>
<TabItem value="get_cost_account_filters">

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
    <td>The ID of the cloud account. (example: 123456789123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for the account filters of a cloud account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of account filters. (account_filters) (default: account_filters, example: account_filters)</td>
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
    <td><a href="#get_cost_account_filters"><CopyableCode code="get_cost_account_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cloud_account_id"><code>cloud_account_id</code></a></td>
    <td></td>
    <td>Get the account filters for a cloud account (AWS CUR 1.0/2.0, OCI, and other clouds).</td>
</tr>
<tr>
    <td><a href="#update_cost_account_filters"><CopyableCode code="update_cost_account_filters" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cloud_account_id"><code>cloud_account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the account filters for a cloud account (AWS CUR 1.0/2.0, OCI, and other clouds).</td>
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
<tr id="parameter-cloud_account_id">
    <td><CopyableCode code="cloud_account_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Cloud Account id.</td>
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
    defaultValue="get_cost_account_filters"
    values={[
        { label: 'get_cost_account_filters', value: 'get_cost_account_filters' }
    ]}
>
<TabItem value="get_cost_account_filters">

Get the account filters for a cloud account (AWS CUR 1.0/2.0, OCI, and other clouds).

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.account_filters
WHERE cloud_account_id = '{{ cloud_account_id }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cost_account_filters"
    values={[
        { label: 'update_cost_account_filters', value: 'update_cost_account_filters' }
    ]}
>
<TabItem value="update_cost_account_filters">

Update the account filters for a cloud account (AWS CUR 1.0/2.0, OCI, and other clouds).

```sql
UPDATE datadog.cloud_costs.account_filters
SET 
data = '{{ data }}'
WHERE 
cloud_account_id = '{{ cloud_account_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
