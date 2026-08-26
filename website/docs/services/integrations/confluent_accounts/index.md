--- 
title: confluent_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - confluent_accounts
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

Creates, updates, deletes, gets or lists a <code>confluent_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="confluent_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.confluent_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_confluent_account"
    values={[
        { label: 'get_confluent_account', value: 'get_confluent_account' },
        { label: 'list_confluent_account', value: 'list_confluent_account' }
    ]}
>
<TabItem value="get_confluent_account">

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
    <td>A randomly generated ID associated with a Confluent account. (example: account_id_abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a Confluent account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for this API. Should always be `confluent-cloud-accounts`. (confluent-cloud-accounts) (default: confluent-cloud-accounts, example: confluent-cloud-accounts)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_confluent_account">

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
    <td>A randomly generated ID associated with a Confluent account. (example: account_id_abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a Confluent account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for this API. Should always be `confluent-cloud-accounts`. (confluent-cloud-accounts) (default: confluent-cloud-accounts, example: confluent-cloud-accounts)</td>
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
    <td><a href="#get_confluent_account"><CopyableCode code="get_confluent_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Get the Confluent account with the provided account ID.</td>
</tr>
<tr>
    <td><a href="#list_confluent_account"><CopyableCode code="list_confluent_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List Confluent accounts.</td>
</tr>
<tr>
    <td><a href="#create_confluent_account"><CopyableCode code="create_confluent_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Confluent account.</td>
</tr>
<tr>
    <td><a href="#update_confluent_account"><CopyableCode code="update_confluent_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the Confluent account with the provided account ID.</td>
</tr>
<tr>
    <td><a href="#delete_confluent_account"><CopyableCode code="delete_confluent_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete a Confluent account with the provided account ID.</td>
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
    <td>Confluent Account ID.</td>
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
    defaultValue="get_confluent_account"
    values={[
        { label: 'get_confluent_account', value: 'get_confluent_account' },
        { label: 'list_confluent_account', value: 'list_confluent_account' }
    ]}
>
<TabItem value="get_confluent_account">

Get the Confluent account with the provided account ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.confluent_accounts
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="list_confluent_account">

List Confluent accounts.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.confluent_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_confluent_account"
    values={[
        { label: 'create_confluent_account', value: 'create_confluent_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_confluent_account">

Create a Confluent account.

```sql
INSERT INTO datadog.integrations.confluent_accounts (
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
- name: confluent_accounts
  props:
    - name: data
      description: |
        The data body for adding a Confluent account.
      value:
        attributes:
          api_key: "{{ api_key }}"
          api_secret: "{{ api_secret }}"
          resources:
            - enable_custom_metrics: {{ enable_custom_metrics }}
              id: "{{ id }}"
              resource_type: "{{ resource_type }}"
              tags: "{{ tags }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_confluent_account"
    values={[
        { label: 'update_confluent_account', value: 'update_confluent_account' }
    ]}
>
<TabItem value="update_confluent_account">

Update the Confluent account with the provided account ID.

```sql
UPDATE datadog.integrations.confluent_accounts
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
    defaultValue="delete_confluent_account"
    values={[
        { label: 'delete_confluent_account', value: 'delete_confluent_account' }
    ]}
>
<TabItem value="delete_confluent_account">

Delete a Confluent account with the provided account ID.

```sql
DELETE FROM datadog.integrations.confluent_accounts
WHERE account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
