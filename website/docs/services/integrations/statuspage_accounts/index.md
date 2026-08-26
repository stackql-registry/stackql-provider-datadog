--- 
title: statuspage_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_accounts
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

Creates, updates, deletes, gets or lists a <code>statuspage_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.statuspage_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_statuspage_account"
    values={[
        { label: 'get_statuspage_account', value: 'get_statuspage_account' }
    ]}
>
<TabItem value="get_statuspage_account">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes from a Statuspage account response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Statuspage account resource type. (statuspage-account) (default: statuspage-account, example: statuspage-account)</td>
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
    <td><a href="#get_statuspage_account"><CopyableCode code="get_statuspage_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the Statuspage account configured for your organization.</td>
</tr>
<tr>
    <td><a href="#create_statuspage_account"><CopyableCode code="create_statuspage_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Statuspage account for your organization. Only one Statuspage&lt;br /&gt;account can be configured per organization.</td>
</tr>
<tr>
    <td><a href="#update_statuspage_account"><CopyableCode code="update_statuspage_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the Statuspage account configured for your organization.</td>
</tr>
<tr>
    <td><a href="#delete_statuspage_account"><CopyableCode code="delete_statuspage_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete the Statuspage account configured for your organization.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_statuspage_account"
    values={[
        { label: 'get_statuspage_account', value: 'get_statuspage_account' }
    ]}
>
<TabItem value="get_statuspage_account">

Get the Statuspage account configured for your organization.

```sql
SELECT
attributes,
type
FROM datadog.integrations.statuspage_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_statuspage_account"
    values={[
        { label: 'create_statuspage_account', value: 'create_statuspage_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_statuspage_account">

Create a Statuspage account for your organization. Only one Statuspage&lt;br /&gt;account can be configured per organization.

```sql
INSERT INTO datadog.integrations.statuspage_accounts (
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
- name: statuspage_accounts
  props:
    - name: data
      description: |
        Statuspage account data for a create request.
      value:
        attributes:
          api_key: "{{ api_key }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_statuspage_account"
    values={[
        { label: 'update_statuspage_account', value: 'update_statuspage_account' }
    ]}
>
<TabItem value="update_statuspage_account">

Update the Statuspage account configured for your organization.

```sql
UPDATE datadog.integrations.statuspage_accounts
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_statuspage_account"
    values={[
        { label: 'delete_statuspage_account', value: 'delete_statuspage_account' }
    ]}
>
<TabItem value="delete_statuspage_account">

Delete the Statuspage account configured for your organization.

```sql
DELETE FROM datadog.integrations.statuspage_accounts
;
```
</TabItem>
</Tabs>
