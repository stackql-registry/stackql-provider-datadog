--- 
title: slack_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_channels
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

Creates, updates, deletes, gets or lists a <code>slack_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.slack_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_slack_integration_channel"
    values={[
        { label: 'get_slack_integration_channel', value: 'get_slack_integration_channel' },
        { label: 'get_slack_integration_channels', value: 'get_slack_integration_channels' }
    ]}
>
<TabItem value="get_slack_integration_channel">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Your channel name. (example: #general)</td>
</tr>
<tr>
    <td><CopyableCode code="display" /></td>
    <td><code>object</code></td>
    <td>Configuration options for what is shown in an alert event message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_slack_integration_channels">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Your channel name. (example: #general)</td>
</tr>
<tr>
    <td><CopyableCode code="display" /></td>
    <td><code>object</code></td>
    <td>Configuration options for what is shown in an alert event message.</td>
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
    <td><a href="#get_slack_integration_channel"><CopyableCode code="get_slack_integration_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a></td>
    <td></td>
    <td>Get a channel configured for your Datadog-Slack integration.</td>
</tr>
<tr>
    <td><a href="#get_slack_integration_channels"><CopyableCode code="get_slack_integration_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a></td>
    <td></td>
    <td>Get a list of all channels configured for your Datadog-Slack integration.</td>
</tr>
<tr>
    <td><a href="#create_slack_integration_channel"><CopyableCode code="create_slack_integration_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a></td>
    <td></td>
    <td>Add a channel to your Datadog-Slack integration.</td>
</tr>
<tr>
    <td><a href="#update_slack_integration_channel"><CopyableCode code="update_slack_integration_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a></td>
    <td></td>
    <td>Update a channel used in your Datadog-Slack integration.</td>
</tr>
<tr>
    <td><a href="#remove_slack_integration_channel"><CopyableCode code="remove_slack_integration_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a></td>
    <td></td>
    <td>Remove a channel from your Datadog-Slack integration.</td>
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
<tr id="parameter-account_name">
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Your Slack account name.</td>
</tr>
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Slack channel being operated on.</td>
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
    defaultValue="get_slack_integration_channel"
    values={[
        { label: 'get_slack_integration_channel', value: 'get_slack_integration_channel' },
        { label: 'get_slack_integration_channels', value: 'get_slack_integration_channels' }
    ]}
>
<TabItem value="get_slack_integration_channel">

Get a channel configured for your Datadog-Slack integration.

```sql
SELECT
name,
display
FROM datadog.integrations.slack_channels
WHERE account_name = '{{ account_name }}' -- required
AND channel_name = '{{ channel_name }}' -- required
;
```
</TabItem>
<TabItem value="get_slack_integration_channels">

Get a list of all channels configured for your Datadog-Slack integration.

```sql
SELECT
name,
display
FROM datadog.integrations.slack_channels
WHERE account_name = '{{ account_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_slack_integration_channel"
    values={[
        { label: 'create_slack_integration_channel', value: 'create_slack_integration_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_slack_integration_channel">

Add a channel to your Datadog-Slack integration.

```sql
INSERT INTO datadog.integrations.slack_channels (
display,
name,
account_name
)
SELECT 
'{{ display }}',
'{{ name }}',
'{{ account_name }}'
RETURNING
name,
display
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: slack_channels
  props:
    - name: account_name
      value: "{{ account_name }}"
      description: Required parameter for the slack_channels resource.
    - name: display
      description: |
        Configuration options for what is shown in an alert event message.
      value:
        message: {{ message }}
        mute_buttons: {{ mute_buttons }}
        notified: {{ notified }}
        snapshot: {{ snapshot }}
        tags: {{ tags }}
    - name: name
      value: "{{ name }}"
      description: |
        Your channel name.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_slack_integration_channel"
    values={[
        { label: 'update_slack_integration_channel', value: 'update_slack_integration_channel' }
    ]}
>
<TabItem value="update_slack_integration_channel">

Update a channel used in your Datadog-Slack integration.

```sql
UPDATE datadog.integrations.slack_channels
SET 
display = '{{ display }}',
name = '{{ name }}'
WHERE 
account_name = '{{ account_name }}' --required
AND channel_name = '{{ channel_name }}' --required
RETURNING
name,
display;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_slack_integration_channel"
    values={[
        { label: 'remove_slack_integration_channel', value: 'remove_slack_integration_channel' }
    ]}
>
<TabItem value="remove_slack_integration_channel">

Remove a channel from your Datadog-Slack integration.

```sql
DELETE FROM datadog.integrations.slack_channels
WHERE account_name = '{{ account_name }}' --required
AND channel_name = '{{ channel_name }}' --required
;
```
</TabItem>
</Tabs>
