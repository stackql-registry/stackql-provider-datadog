--- 
title: org_authorized_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - org_authorized_clients
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

Creates, updates, deletes, gets or lists an <code>org_authorized_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_authorized_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.org_authorized_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_authorized_client"
    values={[
        { label: 'get_org_authorized_client', value: 'get_org_authorized_client' },
        { label: 'list_org_authorized_clients', value: 'list_org_authorized_clients' }
    ]}
>
<TabItem value="get_org_authorized_client">

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
    <td>The unique identifier of the org authorized client. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org authorized client.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for an org authorized client.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for org authorized clients. (org_authorized_clients) (example: org_authorized_clients)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_authorized_clients">

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
    <td>The unique identifier of the org authorized client. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org authorized client.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for an org authorized client.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for org authorized clients. (org_authorized_clients) (example: org_authorized_clients)</td>
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
    <td><a href="#get_org_authorized_client"><CopyableCode code="get_org_authorized_client" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org_authorized_client_id"><code>org_authorized_client_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[user_authorized_clients][disabled]"><code>filter[user_authorized_clients][disabled]</code></a>, <a href="#parameter-filter[user_authorized_clients][user][disabled]"><code>filter[user_authorized_clients][user][disabled]</code></a></td>
    <td>Get a single OAuth2 client authorized for the current organization.</td>
</tr>
<tr>
    <td><a href="#list_org_authorized_clients"><CopyableCode code="list_org_authorized_clients" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-filter[oauth2_client][name]"><code>filter[oauth2_client][name]</code></a>, <a href="#parameter-filter[disabled]"><code>filter[disabled]</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Get a list of all OAuth2 clients authorized for the current organization.</td>
</tr>
<tr>
    <td><a href="#update_org_authorized_client"><CopyableCode code="update_org_authorized_client" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org_authorized_client_id"><code>org_authorized_client_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Enable or disable an OAuth2 client authorization for the current organization.</td>
</tr>
<tr>
    <td><a href="#delete_org_authorized_client"><CopyableCode code="delete_org_authorized_client" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org_authorized_client_id"><code>org_authorized_client_id</code></a></td>
    <td></td>
    <td>Disable an OAuth2 client authorization for the current organization, revoking access for all users.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter results by client name, app title, or app description.</td>
</tr>
<tr id="parameter-filter[disabled]">
    <td><CopyableCode code="filter[disabled]" /></td>
    <td><code>string</code></td>
    <td>Filter results by the org-level disabled status.</td>
</tr>
<tr id="parameter-filter[oauth2_client][name]">
    <td><CopyableCode code="filter[oauth2_client][name]" /></td>
    <td><code>string</code></td>
    <td>Filter results by the OAuth2 client name.</td>
</tr>
<tr id="parameter-filter[user_authorized_clients][disabled]">
    <td><CopyableCode code="filter[user_authorized_clients][disabled]" /></td>
    <td><code>string</code></td>
    <td>Filter included user authorized clients by disabled status.</td>
</tr>
<tr id="parameter-filter[user_authorized_clients][user][disabled]">
    <td><CopyableCode code="filter[user_authorized_clients][user][disabled]" /></td>
    <td><code>string</code></td>
    <td>Filter included user authorized clients by user disabled status.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of related resources to include. Options: `oauth2_client`, `oauth2_client.app`, `user_authorized_clients.user`.</td>
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
    <td>Field to sort results by. Options include `oauth2_client.name`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_authorized_client"
    values={[
        { label: 'get_org_authorized_client', value: 'get_org_authorized_client' },
        { label: 'list_org_authorized_clients', value: 'list_org_authorized_clients' }
    ]}
>
<TabItem value="get_org_authorized_client">

Get a single OAuth2 client authorized for the current organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_authorized_clients
WHERE org_authorized_client_id = '{{ org_authorized_client_id }}' -- required
AND include = '{{ include }}'
AND filter[user_authorized_clients][disabled] = '{{ filter[user_authorized_clients][disabled] }}'
AND filter[user_authorized_clients][user][disabled] = '{{ filter[user_authorized_clients][user][disabled] }}'
;
```
</TabItem>
<TabItem value="list_org_authorized_clients">

Get a list of all OAuth2 clients authorized for the current organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_authorized_clients
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter = '{{ filter }}'
AND filter[oauth2_client][name] = '{{ filter[oauth2_client][name] }}'
AND filter[disabled] = '{{ filter[disabled] }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_authorized_client"
    values={[
        { label: 'update_org_authorized_client', value: 'update_org_authorized_client' }
    ]}
>
<TabItem value="update_org_authorized_client">

Enable or disable an OAuth2 client authorization for the current organization.

```sql
UPDATE datadog.organization.org_authorized_clients
SET 
data = '{{ data }}'
WHERE 
org_authorized_client_id = '{{ org_authorized_client_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_org_authorized_client"
    values={[
        { label: 'delete_org_authorized_client', value: 'delete_org_authorized_client' }
    ]}
>
<TabItem value="delete_org_authorized_client">

Disable an OAuth2 client authorization for the current organization, revoking access for all users.

```sql
DELETE FROM datadog.organization.org_authorized_clients
WHERE org_authorized_client_id = '{{ org_authorized_client_id }}' --required
;
```
</TabItem>
</Tabs>
