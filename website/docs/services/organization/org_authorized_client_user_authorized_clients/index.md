--- 
title: org_authorized_client_user_authorized_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - org_authorized_client_user_authorized_clients
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

Creates, updates, deletes, gets or lists an <code>org_authorized_client_user_authorized_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_authorized_client_user_authorized_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.org_authorized_client_user_authorized_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_org_authorized_client_user_authorizations"
    values={[
        { label: 'list_org_authorized_client_user_authorizations', value: 'list_org_authorized_client_user_authorizations' }
    ]}
>
<TabItem value="list_org_authorized_client_user_authorizations">

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
    <td>The unique identifier of the user authorized client. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a user authorized client.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a user authorized client.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for user authorized clients. (user_authorized_clients) (example: user_authorized_clients)</td>
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
    <td><a href="#list_org_authorized_client_user_authorizations"><CopyableCode code="list_org_authorized_client_user_authorizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org_authorized_client_id"><code>org_authorized_client_id</code></a></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter[disabled]"><code>filter[disabled]</code></a>, <a href="#parameter-filter[user][name]"><code>filter[user][name]</code></a>, <a href="#parameter-filter[user][email]"><code>filter[user][email]</code></a>, <a href="#parameter-filter[user][disabled]"><code>filter[user][disabled]</code></a></td>
    <td>Get a list of user authorizations for the specified OAuth2 client in the current organization.</td>
</tr>
<tr>
    <td><a href="#delete_org_authorized_client_user_authorization"><CopyableCode code="delete_org_authorized_client_user_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org_authorized_client_id"><code>org_authorized_client_id</code></a>, <a href="#parameter-user_authorized_client_id"><code>user_authorized_client_id</code></a></td>
    <td></td>
    <td>Disable a specific user authorization for the specified OAuth2 client in the current organization.</td>
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
<tr id="parameter-org_authorized_client_id">
    <td><CopyableCode code="org_authorized_client_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the org authorized client.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-user_authorized_client_id">
    <td><CopyableCode code="user_authorized_client_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user authorized client.</td>
</tr>
<tr id="parameter-filter[disabled]">
    <td><CopyableCode code="filter[disabled]" /></td>
    <td><code>string</code></td>
    <td>Filter results by the user authorization disabled status.</td>
</tr>
<tr id="parameter-filter[user][disabled]">
    <td><CopyableCode code="filter[user][disabled]" /></td>
    <td><code>string</code></td>
    <td>Filter results by whether the user is disabled.</td>
</tr>
<tr id="parameter-filter[user][email]">
    <td><CopyableCode code="filter[user][email]" /></td>
    <td><code>string</code></td>
    <td>Filter results by user email.</td>
</tr>
<tr id="parameter-filter[user][name]">
    <td><CopyableCode code="filter[user][name]" /></td>
    <td><code>string</code></td>
    <td>Filter results by user name.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items to return per page. The maximum allowed value is 100.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Field to sort results by. Options: `user.name`, `user.email`, `oauth2_client.name`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_org_authorized_client_user_authorizations"
    values={[
        { label: 'list_org_authorized_client_user_authorizations', value: 'list_org_authorized_client_user_authorizations' }
    ]}
>
<TabItem value="list_org_authorized_client_user_authorizations">

Get a list of user authorizations for the specified OAuth2 client in the current organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_authorized_client_user_authorized_clients
WHERE org_authorized_client_id = '{{ org_authorized_client_id }}' -- required
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter[disabled] = '{{ filter[disabled] }}'
AND filter[user][name] = '{{ filter[user][name] }}'
AND filter[user][email] = '{{ filter[user][email] }}'
AND filter[user][disabled] = '{{ filter[user][disabled] }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_org_authorized_client_user_authorization"
    values={[
        { label: 'delete_org_authorized_client_user_authorization', value: 'delete_org_authorized_client_user_authorization' }
    ]}
>
<TabItem value="delete_org_authorized_client_user_authorization">

Disable a specific user authorization for the specified OAuth2 client in the current organization.

```sql
DELETE FROM datadog.organization.org_authorized_client_user_authorized_clients
WHERE org_authorized_client_id = '{{ org_authorized_client_id }}' --required
AND user_authorized_client_id = '{{ user_authorized_client_id }}' --required
;
```
</TabItem>
</Tabs>
