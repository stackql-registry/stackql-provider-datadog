--- 
title: aws_cur_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_cur_configs
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

Creates, updates, deletes, gets or lists an <code>aws_cur_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_cur_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.aws_cur_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_awscurconfig"
    values={[
        { label: 'get_cost_awscurconfig', value: 'get_cost_awscurconfig' }
    ]}
>
<TabItem value="get_cost_awscurconfig">

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
    <td>The `AwsCurConfigResponseData` `id`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of `AwsCurConfigResponseDataAttributes` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AWS CUR config resource type. (aws_cur_config) (default: aws_cur_config, example: aws_cur_config)</td>
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
    <td><a href="#get_cost_awscurconfig"><CopyableCode code="get_cost_awscurconfig" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cloud_account_id"><code>cloud_account_id</code></a></td>
    <td></td>
    <td>Get a specific AWS CUR config.</td>
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
    <td>The unique identifier of the cloud account</td>
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
    defaultValue="get_cost_awscurconfig"
    values={[
        { label: 'get_cost_awscurconfig', value: 'get_cost_awscurconfig' }
    ]}
>
<TabItem value="get_cost_awscurconfig">

Get a specific AWS CUR config.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.aws_cur_configs
WHERE cloud_account_id = '{{ cloud_account_id }}' -- required
;
```
</TabItem>
</Tabs>
