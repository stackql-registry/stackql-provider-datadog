--- 
title: rum_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_configs
  - remote_config
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

Creates, updates, deletes, gets or lists a <code>rum_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.remote_config.rum_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rum_sdk_config"
    values={[
        { label: 'get_rum_sdk_config', value: 'get_rum_sdk_config' }
    ]}
>
<TabItem value="get_rum_sdk_config">

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
    <td>The unique identifier of the RUM SDK configuration. (example: abc12345-1234-5678-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the RUM SDK configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with a RUM SDK configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `rum_sdk_config`. (rum_sdk_config) (default: rum_sdk_config, example: rum_sdk_config)</td>
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
    <td><a href="#get_rum_sdk_config"><CopyableCode code="get_rum_sdk_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a></td>
    <td></td>
    <td>Retrieve a RUM SDK configuration by its identifier.</td>
</tr>
<tr>
    <td><a href="#update_rum_sdk_config"><CopyableCode code="update_rum_sdk_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing RUM SDK configuration by its identifier.&lt;br /&gt;Returns the updated configuration when successful.</td>
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
<tr id="parameter-config_id">
    <td><CopyableCode code="config_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the RUM SDK configuration. (example: abc12345-1234-5678-abcd-ef1234567890)</td>
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
    defaultValue="get_rum_sdk_config"
    values={[
        { label: 'get_rum_sdk_config', value: 'get_rum_sdk_config' }
    ]}
>
<TabItem value="get_rum_sdk_config">

Retrieve a RUM SDK configuration by its identifier.

```sql
SELECT
id,
attributes,
meta,
type
FROM datadog.remote_config.rum_configs
WHERE config_id = '{{ config_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_rum_sdk_config"
    values={[
        { label: 'update_rum_sdk_config', value: 'update_rum_sdk_config' }
    ]}
>
<TabItem value="update_rum_sdk_config">

Update an existing RUM SDK configuration by its identifier.&lt;br /&gt;Returns the updated configuration when successful.

```sql
REPLACE datadog.remote_config.rum_configs
SET 
data = '{{ data }}'
WHERE 
config_id = '{{ config_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
