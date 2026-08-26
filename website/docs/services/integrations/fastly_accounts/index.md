--- 
title: fastly_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - fastly_accounts
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

Creates, updates, deletes, gets or lists a <code>fastly_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fastly_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.fastly_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fastly_account"
    values={[
        { label: 'get_fastly_account', value: 'get_fastly_account' },
        { label: 'list_fastly_accounts', value: 'list_fastly_accounts' }
    ]}
>
<TabItem value="get_fastly_account">

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
    <td>The ID of the Fastly account, a hash of the account name. (example: abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object of a Fastly account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for this API. Should always be `fastly-accounts`. (fastly-accounts) (default: fastly-accounts, example: fastly-accounts)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fastly_accounts">

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
    <td>The ID of the Fastly account, a hash of the account name. (example: abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object of a Fastly account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for this API. Should always be `fastly-accounts`. (fastly-accounts) (default: fastly-accounts, example: fastly-accounts)</td>
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
    <td><a href="#get_fastly_account"><CopyableCode code="get_fastly_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Get a Fastly account.</td>
</tr>
<tr>
    <td><a href="#list_fastly_accounts"><CopyableCode code="list_fastly_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List Fastly accounts.</td>
</tr>
<tr>
    <td><a href="#create_fastly_account"><CopyableCode code="create_fastly_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Fastly account.</td>
</tr>
<tr>
    <td><a href="#update_fastly_account"><CopyableCode code="update_fastly_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a Fastly account.</td>
</tr>
<tr>
    <td><a href="#delete_fastly_account"><CopyableCode code="delete_fastly_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete a Fastly account.</td>
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
    <td>Fastly Account id.</td>
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
    defaultValue="get_fastly_account"
    values={[
        { label: 'get_fastly_account', value: 'get_fastly_account' },
        { label: 'list_fastly_accounts', value: 'list_fastly_accounts' }
    ]}
>
<TabItem value="get_fastly_account">

Get a Fastly account.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.fastly_accounts
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="list_fastly_accounts">

List Fastly accounts.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.fastly_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fastly_account"
    values={[
        { label: 'create_fastly_account', value: 'create_fastly_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fastly_account">

Create a Fastly account.

```sql
INSERT INTO datadog.integrations.fastly_accounts (
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
- name: fastly_accounts
  props:
    - name: data
      description: |
        Data object for creating a Fastly account.
      value:
        attributes:
          api_key: "{{ api_key }}"
          name: "{{ name }}"
          services:
            - id: "{{ id }}"
              tags: "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fastly_account"
    values={[
        { label: 'update_fastly_account', value: 'update_fastly_account' }
    ]}
>
<TabItem value="update_fastly_account">

Update a Fastly account.

```sql
UPDATE datadog.integrations.fastly_accounts
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
    defaultValue="delete_fastly_account"
    values={[
        { label: 'delete_fastly_account', value: 'delete_fastly_account' }
    ]}
>
<TabItem value="delete_fastly_account">

Delete a Fastly account.

```sql
DELETE FROM datadog.integrations.fastly_accounts
WHERE account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
