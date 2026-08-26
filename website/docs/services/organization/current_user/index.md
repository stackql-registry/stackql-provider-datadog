--- 
title: current_user
hide_title: false
hide_table_of_contents: false
keywords:
  - current_user
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

Creates, updates, deletes, gets or lists a <code>current_user</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="current_user" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.current_user" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_current_user"
    values={[
        { label: 'get_current_user', value: 'get_current_user' }
    ]}
>
<TabItem value="get_current_user">

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
    <td>ID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of user object returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the user object returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Users resource type. (users) (default: users, example: users)</td>
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
    <td><a href="#get_current_user"><CopyableCode code="get_current_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the user associated with the current authentication context.&lt;br /&gt;The response includes the user's profile attributes (name, email, handle,&lt;br /&gt;status, MFA state), along with related resources: the user's organization,&lt;br /&gt;assigned roles with their granted permissions, and team-scoped roles.&lt;br /&gt;No additional permissions are required beyond valid authentication.</td>
</tr>
<tr>
    <td><a href="#update_current_user"><CopyableCode code="update_current_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Edit the profile of the currently authenticated user. Updatable fields&lt;br /&gt;include `name`, `title`, `email`, and `disabled` status. The `id` field&lt;br /&gt;in the request body must match the authenticated user's UUID; a mismatch&lt;br /&gt;returns a 422 error. Email address changes are recorded in the audit trail.&lt;br /&gt;Requires the `user_self_profile_write` permission.</td>
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
    defaultValue="get_current_user"
    values={[
        { label: 'get_current_user', value: 'get_current_user' }
    ]}
>
<TabItem value="get_current_user">

Get the user associated with the current authentication context.&lt;br /&gt;The response includes the user's profile attributes (name, email, handle,&lt;br /&gt;status, MFA state), along with related resources: the user's organization,&lt;br /&gt;assigned roles with their granted permissions, and team-scoped roles.&lt;br /&gt;No additional permissions are required beyond valid authentication.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.current_user
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_current_user"
    values={[
        { label: 'update_current_user', value: 'update_current_user' }
    ]}
>
<TabItem value="update_current_user">

Edit the profile of the currently authenticated user. Updatable fields&lt;br /&gt;include `name`, `title`, `email`, and `disabled` status. The `id` field&lt;br /&gt;in the request body must match the authenticated user's UUID; a mismatch&lt;br /&gt;returns a 422 error. Email address changes are recorded in the audit trail.&lt;br /&gt;Requires the `user_self_profile_write` permission.

```sql
UPDATE datadog.organization.current_user
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>
