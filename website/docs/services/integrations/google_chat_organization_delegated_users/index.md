--- 
title: google_chat_organization_delegated_users
hide_title: false
hide_table_of_contents: false
keywords:
  - google_chat_organization_delegated_users
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

Creates, updates, deletes, gets or lists a <code>google_chat_organization_delegated_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="google_chat_organization_delegated_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.google_chat_organization_delegated_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_google_chat_delegated_user"
    values={[
        { label: 'get_google_chat_delegated_user', value: 'get_google_chat_delegated_user' }
    ]}
>
<TabItem value="get_google_chat_delegated_user">

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
    <td>The ID of the delegated user. (example: 2b3c4d5e-6f78-9012-bcde-f23456789012)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Google Chat delegated user attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Google Chat delegated user resource type. (google-chat-delegated-user) (default: google-chat-delegated-user, example: google-chat-delegated-user)</td>
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
    <td><a href="#get_google_chat_delegated_user"><CopyableCode code="get_google_chat_delegated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a></td>
    <td></td>
    <td>Get the delegated user for a Google Chat organization binding in the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#delete_google_chat_delegated_user"><CopyableCode code="delete_google_chat_delegated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a></td>
    <td></td>
    <td>Delete the delegated user for a Google Chat organization binding from the Datadog Google Chat integration.</td>
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
<tr id="parameter-organization_binding_id">
    <td><CopyableCode code="organization_binding_id" /></td>
    <td><code>string</code></td>
    <td>Your organization binding ID.</td>
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
    defaultValue="get_google_chat_delegated_user"
    values={[
        { label: 'get_google_chat_delegated_user', value: 'get_google_chat_delegated_user' }
    ]}
>
<TabItem value="get_google_chat_delegated_user">

Get the delegated user for a Google Chat organization binding in the Datadog Google Chat integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.google_chat_organization_delegated_users
WHERE organization_binding_id = '{{ organization_binding_id }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_google_chat_delegated_user"
    values={[
        { label: 'delete_google_chat_delegated_user', value: 'delete_google_chat_delegated_user' }
    ]}
>
<TabItem value="delete_google_chat_delegated_user">

Delete the delegated user for a Google Chat organization binding from the Datadog Google Chat integration.

```sql
DELETE FROM datadog.integrations.google_chat_organization_delegated_users
WHERE organization_binding_id = '{{ organization_binding_id }}' --required
;
```
</TabItem>
</Tabs>
