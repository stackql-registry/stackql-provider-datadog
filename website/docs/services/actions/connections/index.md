--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - actions
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.actions.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_action_connection"
    values={[
        { label: 'get_action_connection', value: 'get_action_connection' }
    ]}
>
<TabItem value="get_action_connection">

Successfully get Action Connection

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
    <td>The connection identifier</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of `ActionConnectionAttributes` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The definition of `ActionConnectionDataType` object. (action_connection) (example: action_connection)</td>
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
    <td><a href="#get_action_connection"><CopyableCode code="get_action_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a></td>
    <td></td>
    <td>Get an existing Action Connection. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).</td>
</tr>
<tr>
    <td><a href="#create_action_connection"><CopyableCode code="create_action_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Action Connection. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).</td>
</tr>
<tr>
    <td><a href="#update_action_connection"><CopyableCode code="update_action_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing Action Connection. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).</td>
</tr>
<tr>
    <td><a href="#delete_action_connection"><CopyableCode code="delete_action_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a></td>
    <td></td>
    <td>Delete an existing Action Connection. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
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
<tr id="parameter-connection_id">
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the action connection</td>
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
    defaultValue="get_action_connection"
    values={[
        { label: 'get_action_connection', value: 'get_action_connection' }
    ]}
>
<TabItem value="get_action_connection">

Get an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).

```sql
SELECT
id,
attributes,
type
FROM datadog.actions.connections
WHERE connection_id = '{{ connection_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_action_connection"
    values={[
        { label: 'create_action_connection', value: 'create_action_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_action_connection">

Create a new Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).

```sql
INSERT INTO datadog.actions.connections (
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
- name: connections
  props:
    - name: data
      description: |
        Data related to the connection.
      value:
        attributes:
          integration:
            credentials:
              account_id: "{{ account_id }}"
              external_id: "{{ external_id }}"
              principal_id: "{{ principal_id }}"
              role: "{{ role }}"
              type: "{{ type }}"
            type: "{{ type }}"
            base_url: "{{ base_url }}"
          name: "{{ name }}"
          tags:
            - "{{ tags }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_action_connection"
    values={[
        { label: 'update_action_connection', value: 'update_action_connection' }
    ]}
>
<TabItem value="update_action_connection">

Update an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).

```sql
UPDATE datadog.actions.connections
SET 
data = '{{ data }}'
WHERE 
connection_id = '{{ connection_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_action_connection"
    values={[
        { label: 'delete_action_connection', value: 'delete_action_connection' }
    ]}
>
<TabItem value="delete_action_connection">

Delete an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
DELETE FROM datadog.actions.connections
WHERE connection_id = '{{ connection_id }}' --required
;
```
</TabItem>
</Tabs>
