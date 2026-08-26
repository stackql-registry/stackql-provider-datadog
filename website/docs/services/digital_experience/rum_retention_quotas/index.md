--- 
title: rum_retention_quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_retention_quotas
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_retention_quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_retention_quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_retention_quotas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rum_quota_config"
    values={[
        { label: 'get_rum_quota_config', value: 'get_rum_quota_config' }
    ]}
>
<TabItem value="get_rum_quota_config">

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
    <td>The identifier of the scope the retention quota configuration applies to. (example: cd73a516-a481-4af5-8352-9b577465c77b)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The RUM retention quota configuration properties.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource, always `rum_quota_config`. (rum_quota_config) (default: rum_quota_config, example: rum_quota_config)</td>
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
    <td><a href="#get_rum_quota_config"><CopyableCode code="get_rum_quota_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope_type"><code>scope_type</code></a>, <a href="#parameter-scope_id"><code>scope_id</code></a></td>
    <td></td>
    <td>Get the RUM retention quota configuration for a given scope.</td>
</tr>
<tr>
    <td><a href="#upsert_rum_quota_config"><CopyableCode code="upsert_rum_quota_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-scope_type"><code>scope_type</code></a>, <a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update the RUM retention quota configuration for a given scope.&lt;br /&gt;Returns the retention quota configuration object when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_rum_quota_config"><CopyableCode code="delete_rum_quota_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-scope_type"><code>scope_type</code></a>, <a href="#parameter-scope_id"><code>scope_id</code></a></td>
    <td></td>
    <td>Delete the RUM retention quota configuration for a given scope.</td>
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
<tr id="parameter-scope_id">
    <td><CopyableCode code="scope_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the scope the retention quota configuration applies to. For the `application` scope, this is the RUM application ID.</td>
</tr>
<tr id="parameter-scope_type">
    <td><CopyableCode code="scope_type" /></td>
    <td><code>string</code></td>
    <td>The type of scope the retention quota configuration applies to. `application` is the only supported scope type.</td>
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
    defaultValue="get_rum_quota_config"
    values={[
        { label: 'get_rum_quota_config', value: 'get_rum_quota_config' }
    ]}
>
<TabItem value="get_rum_quota_config">

Get the RUM retention quota configuration for a given scope.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_retention_quotas
WHERE scope_type = '{{ scope_type }}' -- required
AND scope_id = '{{ scope_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="upsert_rum_quota_config"
    values={[
        { label: 'upsert_rum_quota_config', value: 'upsert_rum_quota_config' }
    ]}
>
<TabItem value="upsert_rum_quota_config">

Create or update the RUM retention quota configuration for a given scope.&lt;br /&gt;Returns the retention quota configuration object when the request is successful.

```sql
REPLACE datadog.digital_experience.rum_retention_quotas
SET 
data = '{{ data }}'
WHERE 
scope_type = '{{ scope_type }}' --required
AND scope_id = '{{ scope_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rum_quota_config"
    values={[
        { label: 'delete_rum_quota_config', value: 'delete_rum_quota_config' }
    ]}
>
<TabItem value="delete_rum_quota_config">

Delete the RUM retention quota configuration for a given scope.

```sql
DELETE FROM datadog.digital_experience.rum_retention_quotas
WHERE scope_type = '{{ scope_type }}' --required
AND scope_id = '{{ scope_id }}' --required
;
```
</TabItem>
</Tabs>
