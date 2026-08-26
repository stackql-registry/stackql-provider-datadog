--- 
title: governance_control_notification_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - governance_control_notification_settings
  - organization
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

Creates, updates, deletes, gets or lists a <code>governance_control_notification_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="governance_control_notification_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.governance_control_notification_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_governance_control_notification_settings"
    values={[
        { label: 'get_governance_control_notification_settings', value: 'get_governance_control_notification_settings' }
    ]}
>
<TabItem value="get_governance_control_notification_settings">

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
    <td>The detection type the notification settings apply to. (example: unused_api_keys)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a governance control's notification settings.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Control notification settings resource type. (control_notification_settings) (example: control_notification_settings)</td>
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
    <td><a href="#get_governance_control_notification_settings"><CopyableCode code="get_governance_control_notification_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detection_type"><code>detection_type</code></a></td>
    <td></td>
    <td>Retrieve the notification settings for the governance control with the given detection type,&lt;br /&gt;including, for each supported event type, whether notifications are enabled and which&lt;br /&gt;destinations receive them.</td>
</tr>
<tr>
    <td><a href="#update_governance_control_notification_settings"><CopyableCode code="update_governance_control_notification_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-detection_type"><code>detection_type</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Replace the notification settings for the governance control with the given detection type,&lt;br /&gt;setting, for each supported event type, whether notifications are enabled and which&lt;br /&gt;destinations receive them.</td>
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
<tr id="parameter-detection_type">
    <td><CopyableCode code="detection_type" /></td>
    <td><code>string</code></td>
    <td>The detection type that identifies the control; for example, `unused_api_keys`. (example: unused_api_keys)</td>
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
    defaultValue="get_governance_control_notification_settings"
    values={[
        { label: 'get_governance_control_notification_settings', value: 'get_governance_control_notification_settings' }
    ]}
>
<TabItem value="get_governance_control_notification_settings">

Retrieve the notification settings for the governance control with the given detection type,&lt;br /&gt;including, for each supported event type, whether notifications are enabled and which&lt;br /&gt;destinations receive them.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.governance_control_notification_settings
WHERE detection_type = '{{ detection_type }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_governance_control_notification_settings"
    values={[
        { label: 'update_governance_control_notification_settings', value: 'update_governance_control_notification_settings' }
    ]}
>
<TabItem value="update_governance_control_notification_settings">

Replace the notification settings for the governance control with the given detection type,&lt;br /&gt;setting, for each supported event type, whether notifications are enabled and which&lt;br /&gt;destinations receive them.

```sql
REPLACE datadog.organization.governance_control_notification_settings
SET 
data = '{{ data }}'
WHERE 
detection_type = '{{ detection_type }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
