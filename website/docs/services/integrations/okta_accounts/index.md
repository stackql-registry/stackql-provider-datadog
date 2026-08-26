--- 
title: okta_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - okta_accounts
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

Creates, updates, deletes, gets or lists an <code>okta_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="okta_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.okta_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_okta_account"
    values={[
        { label: 'get_okta_account', value: 'get_okta_account' },
        { label: 'list_okta_accounts', value: 'list_okta_accounts' }
    ]}
>
<TabItem value="get_okta_account">

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
    <td>The ID of the Okta account, a UUID hash of the account name. (example: f749daaf-682e-4208-a38d-c9b43162c609)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object for an Okta account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Account type for an Okta account. (okta-accounts) (default: okta-accounts, example: okta-accounts)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_okta_accounts">

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
    <td>The ID of the Okta account, a UUID hash of the account name. (example: f749daaf-682e-4208-a38d-c9b43162c609)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object for an Okta account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Account type for an Okta account. (okta-accounts) (default: okta-accounts, example: okta-accounts)</td>
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
    <td><a href="#get_okta_account"><CopyableCode code="get_okta_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Get an Okta account.</td>
</tr>
<tr>
    <td><a href="#list_okta_accounts"><CopyableCode code="list_okta_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List Okta accounts.</td>
</tr>
<tr>
    <td><a href="#create_okta_account"><CopyableCode code="create_okta_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an Okta account.</td>
</tr>
<tr>
    <td><a href="#update_okta_account"><CopyableCode code="update_okta_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an Okta account.</td>
</tr>
<tr>
    <td><a href="#delete_okta_account"><CopyableCode code="delete_okta_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete an Okta account.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>None</td>
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
    defaultValue="get_okta_account"
    values={[
        { label: 'get_okta_account', value: 'get_okta_account' },
        { label: 'list_okta_accounts', value: 'list_okta_accounts' }
    ]}
>
<TabItem value="get_okta_account">

Get an Okta account.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.okta_accounts
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="list_okta_accounts">

List Okta accounts.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.okta_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_okta_account"
    values={[
        { label: 'create_okta_account', value: 'create_okta_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_okta_account">

Create an Okta account.

```sql
INSERT INTO datadog.integrations.okta_accounts (
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
- name: okta_accounts
  props:
    - name: data
      description: |
        Schema for an Okta account.
      value:
        attributes:
          api_key: "{{ api_key }}"
          auth_method: "{{ auth_method }}"
          client_id: "{{ client_id }}"
          client_secret: "{{ client_secret }}"
          domain: "{{ domain }}"
          name: "{{ name }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_okta_account"
    values={[
        { label: 'update_okta_account', value: 'update_okta_account' }
    ]}
>
<TabItem value="update_okta_account">

Update an Okta account.

```sql
UPDATE datadog.integrations.okta_accounts
SET 
data = '{{ data }}'
WHERE 
account_id = '{{ account_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_okta_account"
    values={[
        { label: 'delete_okta_account', value: 'delete_okta_account' }
    ]}
>
<TabItem value="delete_okta_account">

Delete an Okta account.

```sql
DELETE FROM datadog.integrations.okta_accounts
WHERE account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
