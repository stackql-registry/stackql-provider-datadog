--- 
title: team_links
hide_title: false
hide_table_of_contents: false
keywords:
  - team_links
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

Creates, updates, deletes, gets or lists a <code>team_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.team_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_team_link"
    values={[
        { label: 'get_team_link', value: 'get_team_link' },
        { label: 'get_team_links', value: 'get_team_links' }
    ]}
>
<TabItem value="get_team_link">

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
    <td>The team link's identifier (example: b8626d7e-cedd-11eb-abf5-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team link attributes</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team link type (team_links) (default: team_links, example: team_links)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_team_links">

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
    <td>The team link's identifier (example: b8626d7e-cedd-11eb-abf5-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team link attributes</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team link type (team_links) (default: team_links, example: team_links)</td>
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
    <td><a href="#get_team_link"><CopyableCode code="get_team_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a></td>
    <td></td>
    <td>Get a single link for a team.</td>
</tr>
<tr>
    <td><a href="#get_team_links"><CopyableCode code="get_team_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Get all links for a given team.</td>
</tr>
<tr>
    <td><a href="#create_team_link"><CopyableCode code="create_team_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Add a new link to a team.</td>
</tr>
<tr>
    <td><a href="#update_team_link"><CopyableCode code="update_team_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a team link.</td>
</tr>
<tr>
    <td><a href="#delete_team_link"><CopyableCode code="delete_team_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-link_id"><code>link_id</code></a></td>
    <td></td>
    <td>Remove a link from a team.</td>
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
<tr id="parameter-link_id">
    <td><CopyableCode code="link_id" /></td>
    <td><code>string</code></td>
    <td>None</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_team_link"
    values={[
        { label: 'get_team_link', value: 'get_team_link' },
        { label: 'get_team_links', value: 'get_team_links' }
    ]}
>
<TabItem value="get_team_link">

Get a single link for a team.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.team_links
WHERE team_id = '{{ team_id }}' -- required
AND link_id = '{{ link_id }}' -- required
;
```
</TabItem>
<TabItem value="get_team_links">

Get all links for a given team.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.team_links
WHERE team_id = '{{ team_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_team_link"
    values={[
        { label: 'create_team_link', value: 'create_team_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_team_link">

Add a new link to a team.

```sql
INSERT INTO datadog.organization.team_links (
data,
team_id
)
SELECT 
'{{ data }}' /* required */,
'{{ team_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: team_links
  props:
    - name: team_id
      value: "{{ team_id }}"
      description: Required parameter for the team_links resource.
    - name: data
      description: |
        Team link create
      value:
        attributes:
          label: "{{ label }}"
          position: {{ position }}
          team_id: "{{ team_id }}"
          url: "{{ url }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_team_link"
    values={[
        { label: 'update_team_link', value: 'update_team_link' }
    ]}
>
<TabItem value="update_team_link">

Update a team link.

```sql
UPDATE datadog.organization.team_links
SET 
data = '{{ data }}'
WHERE 
team_id = '{{ team_id }}' --required
AND link_id = '{{ link_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_team_link"
    values={[
        { label: 'delete_team_link', value: 'delete_team_link' }
    ]}
>
<TabItem value="delete_team_link">

Remove a link from a team.

```sql
DELETE FROM datadog.organization.team_links
WHERE team_id = '{{ team_id }}' --required
AND link_id = '{{ link_id }}' --required
;
```
</TabItem>
</Tabs>
