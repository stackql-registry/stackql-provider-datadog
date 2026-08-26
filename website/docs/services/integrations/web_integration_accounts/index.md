--- 
title: web_integration_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - web_integration_accounts
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

Creates, updates, deletes, gets or lists a <code>web_integration_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_integration_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.web_integration_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_web_integration_account"
    values={[
        { label: 'get_web_integration_account', value: 'get_web_integration_account' },
        { label: 'list_web_integration_accounts', value: 'list_web_integration_accounts' }
    ]}
>
<TabItem value="get_web_integration_account">

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
    <td>The unique identifier of the web integration account. (example: abc123def456)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object of a web integration account. Secrets are never returned.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Account resource type. (Account) (default: Account, example: Account)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_web_integration_accounts">

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
    <td>The unique identifier of the web integration account. (example: abc123def456)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object of a web integration account. Secrets are never returned.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Account resource type. (Account) (default: Account, example: Account)</td>
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
    <td><a href="#get_web_integration_account"><CopyableCode code="get_web_integration_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_name"><code>integration_name</code></a>, <a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Get a single account for a given web integration.</td>
</tr>
<tr>
    <td><a href="#list_web_integration_accounts"><CopyableCode code="list_web_integration_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_name"><code>integration_name</code></a></td>
    <td></td>
    <td>List accounts for a given web integration.</td>
</tr>
<tr>
    <td><a href="#create_web_integration_account"><CopyableCode code="create_web_integration_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-integration_name"><code>integration_name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new account for a given web integration.</td>
</tr>
<tr>
    <td><a href="#update_web_integration_account"><CopyableCode code="update_web_integration_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_name"><code>integration_name</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing account for a given web integration.</td>
</tr>
<tr>
    <td><a href="#delete_web_integration_account"><CopyableCode code="delete_web_integration_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_name"><code>integration_name</code></a>, <a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete an account for a given web integration.</td>
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
    <td>The unique identifier of the web integration account.</td>
</tr>
<tr id="parameter-integration_name">
    <td><CopyableCode code="integration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the integration (for example, `databricks`).</td>
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
    defaultValue="get_web_integration_account"
    values={[
        { label: 'get_web_integration_account', value: 'get_web_integration_account' },
        { label: 'list_web_integration_accounts', value: 'list_web_integration_accounts' }
    ]}
>
<TabItem value="get_web_integration_account">

Get a single account for a given web integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.web_integration_accounts
WHERE integration_name = '{{ integration_name }}' -- required
AND account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="list_web_integration_accounts">

List accounts for a given web integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.web_integration_accounts
WHERE integration_name = '{{ integration_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_web_integration_account"
    values={[
        { label: 'create_web_integration_account', value: 'create_web_integration_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_web_integration_account">

Create a new account for a given web integration.

```sql
INSERT INTO datadog.integrations.web_integration_accounts (
data,
integration_name
)
SELECT 
'{{ data }}' /* required */,
'{{ integration_name }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: web_integration_accounts
  props:
    - name: integration_name
      value: "{{ integration_name }}"
      description: Required parameter for the web_integration_accounts resource.
    - name: data
      description: |
        Data object for creating a web integration account.
      value:
        attributes:
          name: "{{ name }}"
          secrets: "{{ secrets }}"
          settings: "{{ settings }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_web_integration_account"
    values={[
        { label: 'update_web_integration_account', value: 'update_web_integration_account' }
    ]}
>
<TabItem value="update_web_integration_account">

Update an existing account for a given web integration.

```sql
UPDATE datadog.integrations.web_integration_accounts
SET 
data = '{{ data }}'
WHERE 
integration_name = '{{ integration_name }}' --required
AND account_id = '{{ account_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_web_integration_account"
    values={[
        { label: 'delete_web_integration_account', value: 'delete_web_integration_account' }
    ]}
>
<TabItem value="delete_web_integration_account">

Delete an account for a given web integration.

```sql
DELETE FROM datadog.integrations.web_integration_accounts
WHERE integration_name = '{{ integration_name }}' --required
AND account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
