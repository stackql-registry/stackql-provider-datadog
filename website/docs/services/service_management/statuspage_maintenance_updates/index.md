--- 
title: statuspage_maintenance_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_maintenance_updates
  - service_management
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

Creates, updates, deletes, gets or lists a <code>statuspage_maintenance_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_maintenance_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspage_maintenance_updates" /></td></tr>
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
    <td><a href="#patch_maintenance_update"><CopyableCode code="patch_maintenance_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-maintenance_id"><code>maintenance_id</code></a>, <a href="#parameter-update_id"><code>update_id</code></a></td>
    <td></td>
    <td>Edits the message of a specific maintenance update. Editing is allowed regardless of the parent maintenance's status, including completed and canceled maintenances.</td>
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
<tr id="parameter-maintenance_id">
    <td><CopyableCode code="maintenance_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the maintenance.</td>
</tr>
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the status page.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-update_id">
    <td><CopyableCode code="update_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the maintenance update.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="patch_maintenance_update"
    values={[
        { label: 'patch_maintenance_update', value: 'patch_maintenance_update' }
    ]}
>
<TabItem value="patch_maintenance_update">

Edits the message of a specific maintenance update. Editing is allowed regardless of the parent maintenance's status, including completed and canceled maintenances.

```sql
UPDATE datadog.service_management.statuspage_maintenance_updates
SET 
data = '{{ data }}'
WHERE 
page_id = '{{ page_id }}' --required
AND maintenance_id = '{{ maintenance_id }}' --required
AND update_id = '{{ update_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
