--- 
title: team_hierarchy_links
hide_title: false
hide_table_of_contents: false
keywords:
  - team_hierarchy_links
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

Creates, updates, deletes, gets or lists a <code>team_hierarchy_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_hierarchy_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.team_hierarchy_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_team_hierarchy_link"
    values={[
        { label: 'get_team_hierarchy_link', value: 'get_team_hierarchy_link' },
        { label: 'list_team_hierarchy_links', value: 'list_team_hierarchy_links' }
    ]}
>
<TabItem value="get_team_hierarchy_link">

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
    <td>The team hierarchy link's identifier (example: b8626d7e-cedd-11eb-abf5-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team hierarchy link attributes</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Team hierarchy link relationships</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team hierarchy link type (team_hierarchy_links) (default: team_hierarchy_links, example: team_hierarchy_links)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_team_hierarchy_links">

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
    <td>The team hierarchy link's identifier (example: b8626d7e-cedd-11eb-abf5-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team hierarchy link attributes</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Team hierarchy link relationships</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team hierarchy link type (team_hierarchy_links) (default: team_hierarchy_links, example: team_hierarchy_links)</td>
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
    <td><a href="#get_team_hierarchy_link"><CopyableCode code="get_team_hierarchy_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-link_id"><code>link_id</code></a></td>
    <td></td>
    <td>Get a single team hierarchy link for the given link_id.</td>
</tr>
<tr>
    <td><a href="#list_team_hierarchy_links"><CopyableCode code="list_team_hierarchy_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-filter[parent_team]"><code>filter[parent_team]</code></a>, <a href="#parameter-filter[sub_team]"><code>filter[sub_team]</code></a></td>
    <td>List all team hierarchy links that match the provided filters.</td>
</tr>
<tr>
    <td><a href="#add_team_hierarchy_link"><CopyableCode code="add_team_hierarchy_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new team hierarchy link between a parent team and a sub team.</td>
</tr>
<tr>
    <td><a href="#remove_team_hierarchy_link"><CopyableCode code="remove_team_hierarchy_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-link_id"><code>link_id</code></a></td>
    <td></td>
    <td>Remove a team hierarchy link by the given link_id.</td>
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
    <td>The team hierarchy link's identifier</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[parent_team]">
    <td><CopyableCode code="filter[parent_team]" /></td>
    <td><code>string</code></td>
    <td>Filter by parent team ID</td>
</tr>
<tr id="parameter-filter[sub_team]">
    <td><CopyableCode code="filter[sub_team]" /></td>
    <td><code>string</code></td>
    <td>Filter by sub team ID</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_team_hierarchy_link"
    values={[
        { label: 'get_team_hierarchy_link', value: 'get_team_hierarchy_link' },
        { label: 'list_team_hierarchy_links', value: 'list_team_hierarchy_links' }
    ]}
>
<TabItem value="get_team_hierarchy_link">

Get a single team hierarchy link for the given link_id.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.team_hierarchy_links
WHERE link_id = '{{ link_id }}' -- required
;
```
</TabItem>
<TabItem value="list_team_hierarchy_links">

List all team hierarchy links that match the provided filters.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.team_hierarchy_links
WHERE page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
AND filter[parent_team] = '{{ filter[parent_team] }}'
AND filter[sub_team] = '{{ filter[sub_team] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_team_hierarchy_link"
    values={[
        { label: 'add_team_hierarchy_link', value: 'add_team_hierarchy_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_team_hierarchy_link">

Create a new team hierarchy link between a parent team and a sub team.

```sql
INSERT INTO datadog.organization.team_hierarchy_links (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
included,
links
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: team_hierarchy_links
  props:
    - name: data
      description: |
        Data provided when creating a team hierarchy link
      value:
        relationships:
          parent_team:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
          sub_team:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_team_hierarchy_link"
    values={[
        { label: 'remove_team_hierarchy_link', value: 'remove_team_hierarchy_link' }
    ]}
>
<TabItem value="remove_team_hierarchy_link">

Remove a team hierarchy link by the given link_id.

```sql
DELETE FROM datadog.organization.team_hierarchy_links
WHERE link_id = '{{ link_id }}' --required
;
```
</TabItem>
</Tabs>
