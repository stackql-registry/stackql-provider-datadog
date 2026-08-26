--- 
title: storage_management_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_management_configs
  - infrastructure
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

Creates, updates, deletes, gets or lists a <code>storage_management_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_management_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.storage_management_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#upsert_sync_config"><CopyableCode code="upsert_sync_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Enable Storage Management for an S3 bucket, GCS bucket, or Azure container by registering the destination that holds its inventory reports. Set `data.id` to the cloud provider (`aws`, `gcp`, or `azure`) and provide the matching settings under data.attributes. Calling this endpoint with the same provider replaces the existing configuration.</td>
</tr>
<tr>
    <td><a href="#delete_sync_config"><CopyableCode code="delete_sync_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a Storage Management configuration by its unique identifier. Deleting a configuration stops inventory file synchronization for the associated cloud account.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the Storage Management configuration. (example: abc123)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="upsert_sync_config"
    values={[
        { label: 'upsert_sync_config', value: 'upsert_sync_config' }
    ]}
>
<TabItem value="upsert_sync_config">

Enable Storage Management for an S3 bucket, GCS bucket, or Azure container by registering the destination that holds its inventory reports. Set `data.id` to the cloud provider (`aws`, `gcp`, or `azure`) and provide the matching settings under data.attributes. Calling this endpoint with the same provider replaces the existing configuration.

```sql
REPLACE datadog.infrastructure.storage_management_configs
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
    defaultValue="delete_sync_config"
    values={[
        { label: 'delete_sync_config', value: 'delete_sync_config' }
    ]}
>
<TabItem value="delete_sync_config">

Delete a Storage Management configuration by its unique identifier. Deleting a configuration stops inventory file synchronization for the associated cloud account.

```sql
DELETE FROM datadog.infrastructure.storage_management_configs
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
