--- 
title: webhook_oauth2_client_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - webhook_oauth2_client_credentials
  - integrations
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

Creates, updates, deletes, gets or lists a <code>webhook_oauth2_client_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhook_oauth2_client_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.webhook_oauth2_client_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_oauth2_client_credentials"
    values={[
        { label: 'get_oauth2_client_credentials', value: 'get_oauth2_client_credentials' }
    ]}
>
<TabItem value="get_oauth2_client_credentials">

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
    <td>The ID of the OAuth2 client credentials auth method. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>OAuth2 client credentials attributes returned by the API. The `client_secret` is never echoed.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>OAuth2 client credentials resource type. (webhooks-auth-method-oauth2-client-credentials) (default: webhooks-auth-method-oauth2-client-credentials, example: webhooks-auth-method-oauth2-client-credentials)</td>
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
    <td><a href="#get_oauth2_client_credentials"><CopyableCode code="get_oauth2_client_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-auth_method_id"><code>auth_method_id</code></a></td>
    <td></td>
    <td>Get a single OAuth2 client credentials auth method by ID.</td>
</tr>
<tr>
    <td><a href="#create_oauth2_client_credentials"><CopyableCode code="create_oauth2_client_credentials" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new OAuth2 client credentials auth method for the Webhooks&lt;br /&gt;integration. The `client_secret` is stored securely and never returned.</td>
</tr>
<tr>
    <td><a href="#update_oauth2_client_credentials"><CopyableCode code="update_oauth2_client_credentials" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-auth_method_id"><code>auth_method_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing OAuth2 client credentials auth method.</td>
</tr>
<tr>
    <td><a href="#delete_oauth2_client_credentials"><CopyableCode code="delete_oauth2_client_credentials" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-auth_method_id"><code>auth_method_id</code></a></td>
    <td></td>
    <td>Delete an OAuth2 client credentials auth method by ID.</td>
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
<tr id="parameter-auth_method_id">
    <td><CopyableCode code="auth_method_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the auth method.</td>
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
    defaultValue="get_oauth2_client_credentials"
    values={[
        { label: 'get_oauth2_client_credentials', value: 'get_oauth2_client_credentials' }
    ]}
>
<TabItem value="get_oauth2_client_credentials">

Get a single OAuth2 client credentials auth method by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.webhook_oauth2_client_credentials
WHERE auth_method_id = '{{ auth_method_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_oauth2_client_credentials"
    values={[
        { label: 'create_oauth2_client_credentials', value: 'create_oauth2_client_credentials' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_oauth2_client_credentials">

Create a new OAuth2 client credentials auth method for the Webhooks&lt;br /&gt;integration. The `client_secret` is stored securely and never returned.

```sql
INSERT INTO datadog.integrations.webhook_oauth2_client_credentials (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: webhook_oauth2_client_credentials
  props:
    - name: data
      description: |
        OAuth2 client credentials data for a create request.
      value:
        attributes:
          access_token_url: "{{ access_token_url }}"
          audience: "{{ audience }}"
          client_id: "{{ client_id }}"
          client_secret: "{{ client_secret }}"
          name: "{{ name }}"
          scope: "{{ scope }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_oauth2_client_credentials"
    values={[
        { label: 'update_oauth2_client_credentials', value: 'update_oauth2_client_credentials' }
    ]}
>
<TabItem value="update_oauth2_client_credentials">

Update an existing OAuth2 client credentials auth method.

```sql
UPDATE datadog.integrations.webhook_oauth2_client_credentials
SET 
data = '{{ data }}'
WHERE 
auth_method_id = '{{ auth_method_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_oauth2_client_credentials"
    values={[
        { label: 'delete_oauth2_client_credentials', value: 'delete_oauth2_client_credentials' }
    ]}
>
<TabItem value="delete_oauth2_client_credentials">

Delete an OAuth2 client credentials auth method by ID.

```sql
DELETE FROM datadog.integrations.webhook_oauth2_client_credentials
WHERE auth_method_id = '{{ auth_method_id }}' --required
;
```
</TabItem>
</Tabs>
