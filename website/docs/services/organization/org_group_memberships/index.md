--- 
title: org_group_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - org_group_memberships
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

Creates, updates, deletes, gets or lists an <code>org_group_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_group_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.org_group_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_group_membership"
    values={[
        { label: 'get_org_group_membership', value: 'get_org_group_membership' },
        { label: 'list_org_group_memberships', value: 'list_org_group_memberships' }
    ]}
>
<TabItem value="get_org_group_membership">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the org group membership. (example: f1e2d3c4-b5a6-7890-1234-567890abcdef)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org group membership.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an org group membership.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org group memberships resource type. (org_group_memberships) (example: org_group_memberships)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_group_memberships">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the org group membership. (example: f1e2d3c4-b5a6-7890-1234-567890abcdef)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org group membership.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an org group membership.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org group memberships resource type. (org_group_memberships) (example: org_group_memberships)</td>
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
    <td><a href="#get_org_group_membership"><CopyableCode code="get_org_group_membership" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org_group_membership_id"><code>org_group_membership_id</code></a></td>
    <td></td>
    <td>Get a specific organization group membership by its ID.</td>
</tr>
<tr>
    <td><a href="#list_org_group_memberships"><CopyableCode code="list_org_group_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[org_group_id]"><code>filter[org_group_id]</code></a>, <a href="#parameter-filter[org_uuid]"><code>filter[org_uuid]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>List organization group memberships. Filter by org group ID or org UUID. At least one of `filter&#91;org_group_id&#93;` or `filter&#91;org_uuid&#93;` must be provided. When filtering by org UUID, returns a single-item list with the membership for that org.</td>
</tr>
<tr>
    <td><a href="#update_org_group_membership"><CopyableCode code="update_org_group_membership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org_group_membership_id"><code>org_group_membership_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Move an organization to a different org group by updating its membership.</td>
</tr>
<tr>
    <td><a href="#bulk_update_org_group_memberships"><CopyableCode code="bulk_update_org_group_memberships" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Move a batch of organizations from one org group to another. This is an atomic operation. Maximum 100 orgs per request.</td>
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
<tr id="parameter-org_group_membership_id">
    <td><CopyableCode code="org_group_membership_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the org group membership.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[org_group_id]">
    <td><CopyableCode code="filter[org_group_id]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter memberships by org group ID. Required when `filter&#91;org_uuid&#93;` is not provided.</td>
</tr>
<tr id="parameter-filter[org_uuid]">
    <td><CopyableCode code="filter[org_uuid]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter memberships by org UUID. Returns a single-item list.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of items per page. Maximum is 1000.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Field to sort memberships by. Supported values: `name`, `uuid`, `-name`, `-uuid`. Defaults to `uuid`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_group_membership"
    values={[
        { label: 'get_org_group_membership', value: 'get_org_group_membership' },
        { label: 'list_org_group_memberships', value: 'list_org_group_memberships' }
    ]}
>
<TabItem value="get_org_group_membership">

Get a specific organization group membership by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_group_memberships
WHERE org_group_membership_id = '{{ org_group_membership_id }}' -- required
;
```
</TabItem>
<TabItem value="list_org_group_memberships">

List organization group memberships. Filter by org group ID or org UUID. At least one of `filter[org_group_id]` or `filter[org_uuid]` must be provided. When filtering by org UUID, returns a single-item list with the membership for that org.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_group_memberships
WHERE filter[org_group_id] = '{{ filter[org_group_id] }}'
AND filter[org_uuid] = '{{ filter[org_uuid] }}'
AND page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_group_membership"
    values={[
        { label: 'update_org_group_membership', value: 'update_org_group_membership' }
    ]}
>
<TabItem value="update_org_group_membership">

Move an organization to a different org group by updating its membership.

```sql
UPDATE datadog.organization.org_group_memberships
SET 
data = '{{ data }}'
WHERE 
org_group_membership_id = '{{ org_group_membership_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="bulk_update_org_group_memberships"
    values={[
        { label: 'bulk_update_org_group_memberships', value: 'bulk_update_org_group_memberships' }
    ]}
>
<TabItem value="bulk_update_org_group_memberships">

Move a batch of organizations from one org group to another. This is an atomic operation. Maximum 100 orgs per request.

```sql
EXEC datadog.organization.org_group_memberships.bulk_update_org_group_memberships 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
