--- 
title: monitoring_content_packs
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_content_packs
  - security
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

Creates, updates, deletes, gets or lists a <code>monitoring_content_packs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_content_packs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_content_packs" /></td></tr>
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
    <td><a href="#activate_content_pack"><CopyableCode code="activate_content_pack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-content_pack_id"><code>content_pack_id</code></a></td>
    <td></td>
    <td>Activate a Cloud SIEM content pack. This operation configures the necessary&lt;br /&gt;log filters or security filters depending on the pricing model and updates the content&lt;br /&gt;pack activation state.</td>
</tr>
<tr>
    <td><a href="#deactivate_content_pack"><CopyableCode code="deactivate_content_pack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-content_pack_id"><code>content_pack_id</code></a></td>
    <td></td>
    <td>Deactivate a Cloud SIEM content pack. This operation removes the content pack's&lt;br /&gt;configuration from log filters or security filters and updates the content pack activation state.</td>
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
<tr id="parameter-content_pack_id">
    <td><CopyableCode code="content_pack_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the content pack to deactivate (for example, `aws-cloudtrail`).</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="activate_content_pack"
    values={[
        { label: 'activate_content_pack', value: 'activate_content_pack' },
        { label: 'deactivate_content_pack', value: 'deactivate_content_pack' }
    ]}
>
<TabItem value="activate_content_pack">

Activate a Cloud SIEM content pack. This operation configures the necessary&lt;br /&gt;log filters or security filters depending on the pricing model and updates the content&lt;br /&gt;pack activation state.

```sql
EXEC datadog.security.monitoring_content_packs.activate_content_pack 
@content_pack_id='{{ content_pack_id }}' --required 
;
```
</TabItem>
<TabItem value="deactivate_content_pack">

Deactivate a Cloud SIEM content pack. This operation removes the content pack's&lt;br /&gt;configuration from log filters or security filters and updates the content pack activation state.

```sql
EXEC datadog.security.monitoring_content_packs.deactivate_content_pack 
@content_pack_id='{{ content_pack_id }}' --required 
;
```
</TabItem>
</Tabs>
