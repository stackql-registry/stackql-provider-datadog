--- 
title: ndm_tag_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - ndm_tag_interfaces
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

Creates, updates, deletes, gets or lists a <code>ndm_tag_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ndm_tag_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.ndm_tag_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_interface_user_tags"
    values={[
        { label: 'list_interface_user_tags', value: 'list_interface_user_tags' }
    ]}
>
<TabItem value="list_interface_user_tags">

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
    <td>The interface ID (example: example:1.2.3.4:1)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of ListTagsResponseDataAttributes object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be tags.</td>
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
    <td><a href="#list_interface_user_tags"><CopyableCode code="list_interface_user_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-interface_id"><code>interface_id</code></a></td>
    <td></td>
    <td>Returns the tags associated with the specified interface.</td>
</tr>
<tr>
    <td><a href="#update_interface_user_tags"><CopyableCode code="update_interface_user_tags" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-interface_id"><code>interface_id</code></a></td>
    <td></td>
    <td>Updates the tags associated with the specified interface.</td>
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
<tr id="parameter-interface_id">
    <td><CopyableCode code="interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the interface for which to update tags. (example: example:1.2.3.4:1)</td>
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
    defaultValue="list_interface_user_tags"
    values={[
        { label: 'list_interface_user_tags', value: 'list_interface_user_tags' }
    ]}
>
<TabItem value="list_interface_user_tags">

Returns the tags associated with the specified interface.

```sql
SELECT
id,
attributes,
type
FROM datadog.infrastructure.ndm_tag_interfaces
WHERE interface_id = '{{ interface_id }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_interface_user_tags"
    values={[
        { label: 'update_interface_user_tags', value: 'update_interface_user_tags' }
    ]}
>
<TabItem value="update_interface_user_tags">

Updates the tags associated with the specified interface.

```sql
UPDATE datadog.infrastructure.ndm_tag_interfaces
SET 
data = '{{ data }}'
WHERE 
interface_id = '{{ interface_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
