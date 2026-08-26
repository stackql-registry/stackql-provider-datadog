--- 
title: csm_ownership_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_ownership_histories
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

Creates, updates, deletes, gets or lists a <code>csm_ownership_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_ownership_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.csm_ownership_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ownership_history_by_owner_type"
    values={[
        { label: 'list_ownership_history_by_owner_type', value: 'list_ownership_history_by_owner_type' },
        { label: 'list_ownership_history', value: 'list_ownership_history' }
    ]}
>
<TabItem value="list_ownership_history_by_owner_type">

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
    <td>The resource identifier for which history is returned. (example: res-1)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an ownership history response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the ownership history resource. The value should always be `ownership_history`. (ownership_history) (default: ownership_history, example: ownership_history)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ownership_history">

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
    <td>The resource identifier for which history is returned. (example: res-1)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an ownership history response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the ownership history resource. The value should always be `ownership_history`. (ownership_history) (default: ownership_history, example: ownership_history)</td>
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
    <td><a href="#list_ownership_history_by_owner_type"><CopyableCode code="list_ownership_history_by_owner_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-owner_type"><code>owner_type</code></a></td>
    <td><a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>List inference history entries for a resource filtered by owner type, ordered from most recent to oldest. Uses cursor-based pagination.</td>
</tr>
<tr>
    <td><a href="#list_ownership_history"><CopyableCode code="list_ownership_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td><a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>List inference history entries for a resource across all owner types, ordered from most recent to oldest. Uses cursor-based pagination.</td>
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
<tr id="parameter-owner_type">
    <td><CopyableCode code="owner_type" /></td>
    <td><code>string</code></td>
    <td>The owner type to filter history by.</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource to retrieve inference history for.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>An opaque, base64-encoded cursor token returned by a previous call in `pagination.next_cursor`. Omit to fetch the first page.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of history entries to return per page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_ownership_history_by_owner_type"
    values={[
        { label: 'list_ownership_history_by_owner_type', value: 'list_ownership_history_by_owner_type' },
        { label: 'list_ownership_history', value: 'list_ownership_history' }
    ]}
>
<TabItem value="list_ownership_history_by_owner_type">

List inference history entries for a resource filtered by owner type, ordered from most recent to oldest. Uses cursor-based pagination.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.csm_ownership_histories
WHERE resource_id = '{{ resource_id }}' -- required
AND owner_type = '{{ owner_type }}' -- required
AND cursor = '{{ cursor }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
<TabItem value="list_ownership_history">

List inference history entries for a resource across all owner types, ordered from most recent to oldest. Uses cursor-based pagination.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.csm_ownership_histories
WHERE resource_id = '{{ resource_id }}' -- required
AND cursor = '{{ cursor }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
