--- 
title: elastic_cloud_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - elastic_cloud_accounts
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

Creates, updates, deletes, gets or lists an <code>elastic_cloud_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="elastic_cloud_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.elastic_cloud_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_elastic_cloud_integration_account"
    values={[
        { label: 'get_elastic_cloud_integration_account', value: 'get_elastic_cloud_integration_account' },
        { label: 'list_elastic_cloud_integration_accounts', value: 'list_elastic_cloud_integration_accounts' }
    ]}
>
<TabItem value="get_elastic_cloud_integration_account">

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
    <td>Server-generated unique identifier of the Elastic Cloud integration account. (example: 953a0060-81ec-4221-aed4-d4733b59cd96)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Elastic Cloud integration account returned in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the integration account resource. Always `integration-account`. (integration-account) (default: integration-account, example: integration-account)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_elastic_cloud_integration_accounts">

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
    <td>Server-generated unique identifier of the Elastic Cloud integration account. (example: 953a0060-81ec-4221-aed4-d4733b59cd96)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Elastic Cloud integration account returned in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the integration account resource. Always `integration-account`. (integration-account) (default: integration-account, example: integration-account)</td>
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
    <td><a href="#get_elastic_cloud_integration_account"><CopyableCode code="get_elastic_cloud_integration_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Get an Elastic Cloud integration account.</td>
</tr>
<tr>
    <td><a href="#list_elastic_cloud_integration_accounts"><CopyableCode code="list_elastic_cloud_integration_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List Elastic Cloud integration accounts.</td>
</tr>
<tr>
    <td><a href="#create_elastic_cloud_integration_account"><CopyableCode code="create_elastic_cloud_integration_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an Elastic Cloud integration account.</td>
</tr>
<tr>
    <td><a href="#update_elastic_cloud_integration_account"><CopyableCode code="update_elastic_cloud_integration_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an Elastic Cloud integration account. Only the fields provided are changed.</td>
</tr>
<tr>
    <td><a href="#delete_elastic_cloud_integration_account"><CopyableCode code="delete_elastic_cloud_integration_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete an Elastic Cloud integration account.</td>
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
    <td>Unique identifier of the integration account.</td>
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
    defaultValue="get_elastic_cloud_integration_account"
    values={[
        { label: 'get_elastic_cloud_integration_account', value: 'get_elastic_cloud_integration_account' },
        { label: 'list_elastic_cloud_integration_accounts', value: 'list_elastic_cloud_integration_accounts' }
    ]}
>
<TabItem value="get_elastic_cloud_integration_account">

Get an Elastic Cloud integration account.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.elastic_cloud_accounts
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="list_elastic_cloud_integration_accounts">

List Elastic Cloud integration accounts.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.elastic_cloud_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_elastic_cloud_integration_account"
    values={[
        { label: 'create_elastic_cloud_integration_account', value: 'create_elastic_cloud_integration_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_elastic_cloud_integration_account">

Create an Elastic Cloud integration account.

```sql
INSERT INTO datadog.integrations.elastic_cloud_accounts (
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
- name: elastic_cloud_accounts
  props:
    - name: data
      description: |
        Data envelope for creating an Elastic Cloud integration account.
      value:
        attributes:
          authentication:
            auth_type: "{{ auth_type }}"
            password: "{{ password }}"
            username: "{{ username }}"
          dataflows:
            elastic-cloud-detailed-index-stats:
              enabled: {{ enabled }}
            elastic-cloud-index-stats:
              enabled: {{ enabled }}
            elastic-cloud-pending-task-stats:
              enabled: {{ enabled }}
            elastic-cloud-primary-shard-graceful-timeout:
              enabled: {{ enabled }}
            elastic-cloud-primary-shard-stats:
              enabled: {{ enabled }}
            elastic-cloud-shard-allocation-stats:
              enabled: {{ enabled }}
            elastic-cloud-slm-stats:
              enabled: {{ enabled }}
          name: "{{ name }}"
          settings:
            tags: "{{ tags }}"
            url: "{{ url }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_elastic_cloud_integration_account"
    values={[
        { label: 'update_elastic_cloud_integration_account', value: 'update_elastic_cloud_integration_account' }
    ]}
>
<TabItem value="update_elastic_cloud_integration_account">

Update an Elastic Cloud integration account. Only the fields provided are changed.

```sql
UPDATE datadog.integrations.elastic_cloud_accounts
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
    defaultValue="delete_elastic_cloud_integration_account"
    values={[
        { label: 'delete_elastic_cloud_integration_account', value: 'delete_elastic_cloud_integration_account' }
    ]}
>
<TabItem value="delete_elastic_cloud_integration_account">

Delete an Elastic Cloud integration account.

```sql
DELETE FROM datadog.integrations.elastic_cloud_accounts
WHERE account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
