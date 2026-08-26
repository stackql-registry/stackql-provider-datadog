--- 
title: slack_user_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_user_bindings
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

Creates, updates, deletes, gets or lists a <code>slack_user_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_user_bindings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.slack_user_bindings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_slack_user_bindings"
    values={[
        { label: 'list_slack_user_bindings', value: 'list_slack_user_bindings' }
    ]}
>
<TabItem value="list_slack_user_bindings">

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
    <td>The Slack team ID. (example: T01234567)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Slack user binding resource type. (team_id) (default: team_id, example: team_id)</td>
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
    <td><a href="#list_slack_user_bindings"><CopyableCode code="list_slack_user_bindings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_uuid"><code>user_uuid</code></a></td>
    <td></td>
    <td>List all Slack user bindings for a given Datadog user from the Datadog Slack integration.</td>
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
<tr id="parameter-user_uuid">
    <td><CopyableCode code="user_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the Datadog user to list Slack bindings for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_slack_user_bindings"
    values={[
        { label: 'list_slack_user_bindings', value: 'list_slack_user_bindings' }
    ]}
>
<TabItem value="list_slack_user_bindings">

List all Slack user bindings for a given Datadog user from the Datadog Slack integration.

```sql
SELECT
id,
type
FROM datadog.integrations.slack_user_bindings
WHERE user_uuid = '{{ user_uuid }}' -- required
;
```
</TabItem>
</Tabs>
