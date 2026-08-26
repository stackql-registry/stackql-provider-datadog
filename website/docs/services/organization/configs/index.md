--- 
title: configs
hide_title: false
hide_table_of_contents: false
keywords:
  - configs
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

Creates, updates, deletes, gets or lists a <code>configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_config"
    values={[
        { label: 'get_org_config', value: 'get_org_config' },
        { label: 'list_org_configs', value: 'list_org_configs' }
    ]}
>
<TabItem value="get_org_config">

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
    <td>A unique identifier for an Org Config. (example: abcd1234)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Readable attributes of an Org Config.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Data type of an Org Config. (org_configs) (example: org_configs)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_configs">

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
    <td>A unique identifier for an Org Config. (example: abcd1234)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Readable attributes of an Org Config.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Data type of an Org Config. (org_configs) (example: org_configs)</td>
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
    <td><a href="#get_org_config"><CopyableCode code="get_org_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org_config_name"><code>org_config_name</code></a></td>
    <td></td>
    <td>Return the name, description, and value of a specific Org Config.</td>
</tr>
<tr>
    <td><a href="#list_org_configs"><CopyableCode code="list_org_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns all Org Configs (name, description, and value).</td>
</tr>
<tr>
    <td><a href="#update_org_config"><CopyableCode code="update_org_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org_config_name"><code>org_config_name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the value of a specific Org Config.</td>
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
<tr id="parameter-org_config_name">
    <td><CopyableCode code="org_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of an Org Config.</td>
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
    defaultValue="get_org_config"
    values={[
        { label: 'get_org_config', value: 'get_org_config' },
        { label: 'list_org_configs', value: 'list_org_configs' }
    ]}
>
<TabItem value="get_org_config">

Return the name, description, and value of a specific Org Config.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.configs
WHERE org_config_name = '{{ org_config_name }}' -- required
;
```
</TabItem>
<TabItem value="list_org_configs">

Returns all Org Configs (name, description, and value).

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.configs
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_config"
    values={[
        { label: 'update_org_config', value: 'update_org_config' }
    ]}
>
<TabItem value="update_org_config">

Update the value of a specific Org Config.

```sql
UPDATE datadog.organization.configs
SET 
data = '{{ data }}'
WHERE 
org_config_name = '{{ org_config_name }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
