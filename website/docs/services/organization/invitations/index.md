--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
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

Creates, updates, deletes, gets or lists an <code>invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_invitation"
    values={[
        { label: 'get_invitation', value: 'get_invitation' }
    ]}
>
<TabItem value="get_invitation">

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
    <td>ID of the user invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a user invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships data for user invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>User invitations type. (user_invitations) (default: user_invitations, example: user_invitations)</td>
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
    <td><a href="#get_invitation"><CopyableCode code="get_invitation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_invitation_uuid"><code>user_invitation_uuid</code></a></td>
    <td></td>
    <td>Returns a single user invitation by its UUID.</td>
</tr>
<tr>
    <td><a href="#send_invitations"><CopyableCode code="send_invitations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Sends emails to one or more users inviting them to join the organization.</td>
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
<tr id="parameter-user_invitation_uuid">
    <td><CopyableCode code="user_invitation_uuid" /></td>
    <td><code>string</code></td>
    <td>The UUID of the user invitation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_invitation"
    values={[
        { label: 'get_invitation', value: 'get_invitation' }
    ]}
>
<TabItem value="get_invitation">

Returns a single user invitation by its UUID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.invitations
WHERE user_invitation_uuid = '{{ user_invitation_uuid }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="send_invitations"
    values={[
        { label: 'send_invitations', value: 'send_invitations' }
    ]}
>
<TabItem value="send_invitations">

Sends emails to one or more users inviting them to join the organization.

```sql
EXEC datadog.organization.invitations.send_invitations 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
