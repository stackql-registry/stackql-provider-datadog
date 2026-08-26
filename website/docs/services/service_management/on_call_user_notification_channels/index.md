--- 
title: on_call_user_notification_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - on_call_user_notification_channels
  - service_management
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

Creates, updates, deletes, gets or lists an <code>on_call_user_notification_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_call_user_notification_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.on_call_user_notification_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_notification_channel"
    values={[
        { label: 'get_user_notification_channel', value: 'get_user_notification_channel' },
        { label: 'list_user_notification_channels', value: 'list_user_notification_channels' }
    ]}
>
<TabItem value="get_user_notification_channel">

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
    <td>Unique identifier for the channel</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for an on-call notification channel.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates that the resource is of type 'notification_channels'. (notification_channels) (default: notification_channels, example: notification_channels)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_notification_channels">

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
    <td>Unique identifier for the channel</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for an on-call notification channel.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates that the resource is of type 'notification_channels'. (notification_channels) (default: notification_channels, example: notification_channels)</td>
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
    <td><a href="#get_user_notification_channel"><CopyableCode code="get_user_notification_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-channel_id"><code>channel_id</code></a></td>
    <td></td>
    <td>Get a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
</tr>
<tr>
    <td><a href="#list_user_notification_channels"><CopyableCode code="list_user_notification_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>List the notification channels for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
</tr>
<tr>
    <td><a href="#create_user_notification_channel"><CopyableCode code="create_user_notification_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
</tr>
<tr>
    <td><a href="#delete_user_notification_channel"><CopyableCode code="delete_user_notification_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-channel_id"><code>channel_id</code></a></td>
    <td></td>
    <td>Delete a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission</td>
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
<tr id="parameter-channel_id">
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The channel ID</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_notification_channel"
    values={[
        { label: 'get_user_notification_channel', value: 'get_user_notification_channel' },
        { label: 'list_user_notification_channels', value: 'list_user_notification_channels' }
    ]}
>
<TabItem value="get_user_notification_channel">

Get a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.on_call_user_notification_channels
WHERE user_id = '{{ user_id }}' -- required
AND channel_id = '{{ channel_id }}' -- required
;
```
</TabItem>
<TabItem value="list_user_notification_channels">

List the notification channels for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.on_call_user_notification_channels
WHERE user_id = '{{ user_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_notification_channel"
    values={[
        { label: 'create_user_notification_channel', value: 'create_user_notification_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_notification_channel">

Create a new notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
INSERT INTO datadog.service_management.on_call_user_notification_channels (
data,
user_id
)
SELECT 
'{{ data }}' /* required */,
'{{ user_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: on_call_user_notification_channels
  props:
    - name: user_id
      value: "{{ user_id }}"
      description: Required parameter for the on_call_user_notification_channels resource.
    - name: data
      description: |
        Data for creating an on-call notification channel
      value:
        attributes:
          config:
            number: "{{ number }}"
            type: "{{ type }}"
            address: "{{ address }}"
            formats:
              - "{{ formats }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_notification_channel"
    values={[
        { label: 'delete_user_notification_channel', value: 'delete_user_notification_channel' }
    ]}
>
<TabItem value="delete_user_notification_channel">

Delete a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission

```sql
DELETE FROM datadog.service_management.on_call_user_notification_channels
WHERE user_id = '{{ user_id }}' --required
AND channel_id = '{{ channel_id }}' --required
;
```
</TabItem>
</Tabs>
