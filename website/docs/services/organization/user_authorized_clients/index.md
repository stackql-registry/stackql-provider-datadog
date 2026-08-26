--- 
title: user_authorized_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - user_authorized_clients
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

Creates, updates, deletes, gets or lists a <code>user_authorized_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_authorized_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.user_authorized_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_authorized_client"
    values={[
        { label: 'get_user_authorized_client', value: 'get_user_authorized_client' },
        { label: 'list_user_authorized_clients', value: 'list_user_authorized_clients' }
    ]}
>
<TabItem value="get_user_authorized_client">

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
<TabItem value="list_user_authorized_clients">

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
    <td><a href="#get_user_authorized_client"><CopyableCode code="get_user_authorized_client" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_authorized_client_id"><code>user_authorized_client_id</code></a></td>
    <td></td>
    <td>Get a single OAuth2 client authorization for the current user.</td>
</tr>
<tr>
    <td><a href="#list_user_authorized_clients"><CopyableCode code="list_user_authorized_clients" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-filter[disabled]"><code>filter[disabled]</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Get a list of all OAuth2 clients authorized by the current user.</td>
</tr>
<tr>
    <td><a href="#delete_user_authorized_client"><CopyableCode code="delete_user_authorized_client" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_authorized_client_id"><code>user_authorized_client_id</code></a></td>
    <td></td>
    <td>Disable the current user's authorization for the specified OAuth2 client.</td>
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
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter results by client name, app title, or app description.</td>
</tr>
<tr id="parameter-filter[disabled]">
    <td><CopyableCode code="filter[disabled]" /></td>
    <td><code>string</code></td>
    <td>Filter results by the user-level disabled status.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of related resources to include. Options: `oauth2_client`, `oauth2_client.app`.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_authorized_client"
    values={[
        { label: 'get_user_authorized_client', value: 'get_user_authorized_client' },
        { label: 'list_user_authorized_clients', value: 'list_user_authorized_clients' }
    ]}
>
<TabItem value="get_user_authorized_client">

Get a single OAuth2 client authorization for the current user.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.user_authorized_clients
WHERE user_authorized_client_id = '{{ user_authorized_client_id }}' -- required
;
```
</TabItem>
<TabItem value="list_user_authorized_clients">

Get a list of all OAuth2 clients authorized by the current user.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.user_authorized_clients
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND filter = '{{ filter }}'
AND filter[disabled] = '{{ filter[disabled] }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_authorized_client"
    values={[
        { label: 'delete_user_authorized_client', value: 'delete_user_authorized_client' }
    ]}
>
<TabItem value="delete_user_authorized_client">

Disable the current user's authorization for the specified OAuth2 client.

```sql
DELETE FROM datadog.organization.user_authorized_clients
WHERE user_authorized_client_id = '{{ user_authorized_client_id }}' --required
;
```
</TabItem>
</Tabs>
