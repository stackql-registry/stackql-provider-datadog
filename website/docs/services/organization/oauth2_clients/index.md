--- 
title: oauth2_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth2_clients
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

Creates, updates, deletes, gets or lists an <code>oauth2_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth2_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.oauth2_clients" /></td></tr>
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
    <td><a href="#register_oauth_client"><CopyableCode code="register_oauth_client" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-client_name"><code>client_name</code></a>, <a href="#parameter-redirect_uris"><code>redirect_uris</code></a></td>
    <td></td>
    <td>Register an OAuth2 client using the Dynamic Client Registration protocol defined in RFC 7591.</td>
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
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="register_oauth_client"
    values={[
        { label: 'register_oauth_client', value: 'register_oauth_client' }
    ]}
>
<TabItem value="register_oauth_client">

Register an OAuth2 client using the Dynamic Client Registration protocol defined in RFC 7591.

```sql
EXEC datadog.organization.oauth2_clients.register_oauth_client 
@@json=
'{
"client_name": "{{ client_name }}", 
"client_uri": "{{ client_uri }}", 
"grant_types": "{{ grant_types }}", 
"jwks_uri": "{{ jwks_uri }}", 
"logo_uri": "{{ logo_uri }}", 
"policy_uri": "{{ policy_uri }}", 
"redirect_uris": "{{ redirect_uris }}", 
"response_types": "{{ response_types }}", 
"scope": "{{ scope }}", 
"token_endpoint_auth_method": "{{ token_endpoint_auth_method }}", 
"tos_uri": "{{ tos_uri }}"
}'
;
```
</TabItem>
</Tabs>
