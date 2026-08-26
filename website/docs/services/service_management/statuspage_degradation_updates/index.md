--- 
title: statuspage_degradation_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_degradation_updates
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

Creates, updates, deletes, gets or lists a <code>statuspage_degradation_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_degradation_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspage_degradation_updates" /></td></tr>
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
    <td><a href="#edit_degradation_update"><CopyableCode code="edit_degradation_update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-degradation_id"><code>degradation_id</code></a>, <a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-update_id"><code>update_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Edits a specific degradation update.</td>
</tr>
<tr>
    <td><a href="#soft_delete_degradation_update"><CopyableCode code="soft_delete_degradation_update" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-degradation_id"><code>degradation_id</code></a>, <a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-update_id"><code>update_id</code></a></td>
    <td></td>
    <td>Soft-deletes a degradation update.</td>
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
<tr id="parameter-degradation_id">
    <td><CopyableCode code="degradation_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the degradation.</td>
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
    <td>The ID of the degradation update.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, degradation, status_page.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="edit_degradation_update"
    values={[
        { label: 'edit_degradation_update', value: 'edit_degradation_update' }
    ]}
>
<TabItem value="edit_degradation_update">

Edits a specific degradation update.

```sql
UPDATE datadog.service_management.statuspage_degradation_updates
SET 
data = '{{ data }}'
WHERE 
degradation_id = '{{ degradation_id }}' --required
AND page_id = '{{ page_id }}' --required
AND update_id = '{{ update_id }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="soft_delete_degradation_update"
    values={[
        { label: 'soft_delete_degradation_update', value: 'soft_delete_degradation_update' }
    ]}
>
<TabItem value="soft_delete_degradation_update">

Soft-deletes a degradation update.

```sql
DELETE FROM datadog.service_management.statuspage_degradation_updates
WHERE degradation_id = '{{ degradation_id }}' --required
AND page_id = '{{ page_id }}' --required
AND update_id = '{{ update_id }}' --required
;
```
</TabItem>
</Tabs>
