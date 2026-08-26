--- 
title: teams
hide_title: false
hide_table_of_contents: false
keywords:
  - teams
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

Creates, updates, deletes, gets or lists a <code>teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_team"
    values={[
        { label: 'get_team', value: 'get_team' },
        { label: 'list_teams', value: 'list_teams' }
    ]}
>
<TabItem value="get_team">

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
    <td>The team's identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team attributes</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Resources related to a team</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team type (team) (default: team, example: team)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_teams">

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
    <td>The team's identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team attributes</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Resources related to a team</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team type (team) (default: team, example: team)</td>
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
    <td><a href="#get_team"><CopyableCode code="get_team" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Get a single team using the team's `id`.</td>
</tr>
<tr>
    <td><a href="#list_teams"><CopyableCode code="list_teams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[keyword]"><code>filter[keyword]</code></a>, <a href="#parameter-filter[me]"><code>filter[me]</code></a>, <a href="#parameter-fields[team]"><code>fields[team]</code></a></td>
    <td>Get all teams.&lt;br /&gt;Can be used to search for teams using the `filter&#91;keyword&#93;` and `filter&#91;me&#93;` query parameters.</td>
</tr>
<tr>
    <td><a href="#create_team"><CopyableCode code="create_team" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new team.&lt;br /&gt;User IDs passed through the `users` relationship field are added to the team.</td>
</tr>
<tr>
    <td><a href="#update_team"><CopyableCode code="update_team" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a team using the team's `id`.&lt;br /&gt;If the `team_links` relationship is present, the associated links are updated to be in the order they appear in the array, and any existing team links not present are removed.</td>
</tr>
<tr>
    <td><a href="#delete_team"><CopyableCode code="delete_team" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Remove a team using the team's `id`.</td>
</tr>
<tr>
    <td><a href="#sync_teams"><CopyableCode code="sync_teams" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>This endpoint configures synchronization between your existing Datadog teams and GitHub teams by matching their names.&lt;br /&gt;It evaluates all current Datadog teams and compares them against teams in the GitHub organization&lt;br /&gt;connected to your Datadog account, based on Datadog Team handle and GitHub Team slug&lt;br /&gt;(lowercased and kebab-cased).&lt;br /&gt;&lt;br /&gt;This operation is read-only on the GitHub side, no teams will be modified or created.&lt;br /&gt;&lt;br /&gt;Optionally, provide `selection_state` to limit synchronization&lt;br /&gt;to specific teams or organizations and their subtrees, instead&lt;br /&gt;of syncing all teams.&lt;br /&gt;&lt;br /&gt;&#91;A GitHub organization must be connected to your Datadog account&#93;(https:​//docs.datadoghq.com/integrations/github/),&lt;br /&gt;and the GitHub App integrated with Datadog must have the `Members Read` permission. Matching is performed by comparing the Datadog team handle to the GitHub team slug&lt;br /&gt;using a normalized exact match; case is ignored and spaces are removed. No modifications are made&lt;br /&gt;to teams in GitHub. This only creates new teams in Datadog when type is set to `provision`.</td>
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
<tr id="parameter-fields[team]">
    <td><CopyableCode code="fields[team]" /></td>
    <td><code>array</code></td>
    <td>List of fields that need to be fetched.</td>
</tr>
<tr id="parameter-filter[keyword]">
    <td><CopyableCode code="filter[keyword]" /></td>
    <td><code>string</code></td>
    <td>Search query. Can be team name, team handle, or email of team member</td>
</tr>
<tr id="parameter-filter[me]">
    <td><CopyableCode code="filter[me]" /></td>
    <td><code>boolean</code></td>
    <td>When true, only returns teams the current user belongs to</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>array</code></td>
    <td>Included related resources optionally requested. Allowed enum values: `team_links, user_team_permissions`</td>
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
    <td>Specifies the order of the returned teams</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_team"
    values={[
        { label: 'get_team', value: 'get_team' },
        { label: 'list_teams', value: 'list_teams' }
    ]}
>
<TabItem value="get_team">

Get a single team using the team's `id`.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.teams
WHERE team_id = '{{ team_id }}' -- required
;
```
</TabItem>
<TabItem value="list_teams">

Get all teams.&lt;br /&gt;Can be used to search for teams using the `filter&#91;keyword&#93;` and `filter&#91;me&#93;` query parameters.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.teams
WHERE page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
AND sort = '{{ sort }}'
AND include = '{{ include }}'
AND filter[keyword] = '{{ filter[keyword] }}'
AND filter[me] = '{{ filter[me] }}'
AND fields[team] = '{{ fields[team] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_team"
    values={[
        { label: 'create_team', value: 'create_team' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_team">

Create a new team.&lt;br /&gt;User IDs passed through the `users` relationship field are added to the team.

```sql
INSERT INTO datadog.organization.teams (
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
- name: teams
  props:
    - name: data
      description: |
        Team create
      value:
        attributes:
          avatar: "{{ avatar }}"
          banner: {{ banner }}
          description: "{{ description }}"
          handle: "{{ handle }}"
          hidden_modules:
            - "{{ hidden_modules }}"
          name: "{{ name }}"
          visible_modules:
            - "{{ visible_modules }}"
        relationships:
          users:
            data:
              - id: "{{ id }}"
                type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_team"
    values={[
        { label: 'update_team', value: 'update_team' }
    ]}
>
<TabItem value="update_team">

Update a team using the team's `id`.&lt;br /&gt;If the `team_links` relationship is present, the associated links are updated to be in the order they appear in the array, and any existing team links not present are removed.

```sql
UPDATE datadog.organization.teams
SET 
data = '{{ data }}'
WHERE 
team_id = '{{ team_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_team"
    values={[
        { label: 'delete_team', value: 'delete_team' }
    ]}
>
<TabItem value="delete_team">

Remove a team using the team's `id`.

```sql
DELETE FROM datadog.organization.teams
WHERE team_id = '{{ team_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="sync_teams"
    values={[
        { label: 'sync_teams', value: 'sync_teams' }
    ]}
>
<TabItem value="sync_teams">

This endpoint configures synchronization between your existing Datadog teams and GitHub teams by matching their names.&lt;br /&gt;It evaluates all current Datadog teams and compares them against teams in the GitHub organization&lt;br /&gt;connected to your Datadog account, based on Datadog Team handle and GitHub Team slug&lt;br /&gt;(lowercased and kebab-cased).&lt;br /&gt;&lt;br /&gt;This operation is read-only on the GitHub side, no teams will be modified or created.&lt;br /&gt;&lt;br /&gt;Optionally, provide `selection_state` to limit synchronization&lt;br /&gt;to specific teams or organizations and their subtrees, instead&lt;br /&gt;of syncing all teams.&lt;br /&gt;&lt;br /&gt;&#91;A GitHub organization must be connected to your Datadog account&#93;(https:​//docs.datadoghq.com/integrations/github/),&lt;br /&gt;and the GitHub App integrated with Datadog must have the `Members Read` permission. Matching is performed by comparing the Datadog team handle to the GitHub team slug&lt;br /&gt;using a normalized exact match; case is ignored and spaces are removed. No modifications are made&lt;br /&gt;to teams in GitHub. This only creates new teams in Datadog when type is set to `provision`.

```sql
EXEC datadog.organization.teams.sync_teams 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
