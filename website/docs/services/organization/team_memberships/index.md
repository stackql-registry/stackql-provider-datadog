--- 
title: team_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - team_memberships
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

Creates, updates, deletes, gets or lists a <code>team_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.team_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_team_memberships"
    values={[
        { label: 'get_team_memberships', value: 'get_team_memberships' }
    ]}
>
<TabItem value="get_team_memberships">

Represents a user's association to a team

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
    <td>The ID of a user's relationship with a team (example: TeamMembership-aeadc05e-98a8-11ec-ac2c-da7ad0900001-38835)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team membership attributes</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationship between membership and a user</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team membership type (team_memberships) (default: team_memberships, example: team_memberships)</td>
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
    <td><a href="#get_team_memberships"><CopyableCode code="get_team_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter[keyword]"><code>filter[keyword]</code></a></td>
    <td>Get a paginated list of members for a team</td>
</tr>
<tr>
    <td><a href="#create_team_membership"><CopyableCode code="create_team_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Add a user to a team.&lt;br /&gt;&lt;br /&gt;**Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see &#91;Team Membership documentation&#93;(https:​//docs.datadoghq.com/account_management/teams/manage/#team-membership).</td>
</tr>
<tr>
    <td><a href="#update_team_membership"><CopyableCode code="update_team_membership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a user's membership attributes on a team.&lt;br /&gt;&lt;br /&gt;**Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see &#91;Team Membership documentation&#93;(https:​//docs.datadoghq.com/account_management/teams/manage/#team-membership).</td>
</tr>
<tr>
    <td><a href="#delete_team_membership"><CopyableCode code="delete_team_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Remove a user from a team.&lt;br /&gt;&lt;br /&gt;**Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see &#91;Team Membership documentation&#93;(https:​//docs.datadoghq.com/account_management/teams/manage/#team-membership).</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>None</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>None</td>
</tr>
<tr id="parameter-filter[keyword]">
    <td><CopyableCode code="filter[keyword]" /></td>
    <td><code>string</code></td>
    <td>Search query, can be user email or name</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items to return per page. The maximum allowed value is 100.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Specifies the order of returned team memberships</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_team_memberships"
    values={[
        { label: 'get_team_memberships', value: 'get_team_memberships' }
    ]}
>
<TabItem value="get_team_memberships">

Get a paginated list of members for a team

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.team_memberships
WHERE team_id = '{{ team_id }}' -- required
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter[keyword] = '{{ filter[keyword] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_team_membership"
    values={[
        { label: 'create_team_membership', value: 'create_team_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_team_membership">

Add a user to a team.&lt;br /&gt;&lt;br /&gt;**Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see &#91;Team Membership documentation&#93;(https:​//docs.datadoghq.com/account_management/teams/manage/#team-membership).

```sql
INSERT INTO datadog.organization.team_memberships (
data,
team_id
)
SELECT 
'{{ data }}' /* required */,
'{{ team_id }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: team_memberships
  props:
    - name: team_id
      value: "{{ team_id }}"
      description: Required parameter for the team_memberships resource.
    - name: data
      description: |
        A user's relationship with a team
      value:
        attributes:
          provisioned_by: "{{ provisioned_by }}"
          provisioned_by_id: "{{ provisioned_by_id }}"
          role: "{{ role }}"
        relationships:
          team:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
          user:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_team_membership"
    values={[
        { label: 'update_team_membership', value: 'update_team_membership' }
    ]}
>
<TabItem value="update_team_membership">

Update a user's membership attributes on a team.&lt;br /&gt;&lt;br /&gt;**Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see &#91;Team Membership documentation&#93;(https:​//docs.datadoghq.com/account_management/teams/manage/#team-membership).

```sql
UPDATE datadog.organization.team_memberships
SET 
data = '{{ data }}'
WHERE 
team_id = '{{ team_id }}' --required
AND user_id = '{{ user_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_team_membership"
    values={[
        { label: 'delete_team_membership', value: 'delete_team_membership' }
    ]}
>
<TabItem value="delete_team_membership">

Remove a user from a team.&lt;br /&gt;&lt;br /&gt;**Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see &#91;Team Membership documentation&#93;(https:​//docs.datadoghq.com/account_management/teams/manage/#team-membership).

```sql
DELETE FROM datadog.organization.team_memberships
WHERE team_id = '{{ team_id }}' --required
AND user_id = '{{ user_id }}' --required
;
```
</TabItem>
</Tabs>
