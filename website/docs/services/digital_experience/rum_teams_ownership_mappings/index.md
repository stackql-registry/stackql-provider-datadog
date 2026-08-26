--- 
title: rum_teams_ownership_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_teams_ownership_mappings
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_teams_ownership_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_teams_ownership_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_teams_ownership_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_teams_ownership_mapping"
    values={[
        { label: 'get_teams_ownership_mapping', value: 'get_teams_ownership_mapping' },
        { label: 'list_teams_ownership_mappings', value: 'list_teams_ownership_mappings' }
    ]}
>
<TabItem value="get_teams_ownership_mapping">

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
    <td>The unique identifier of the teams ownership mapping. (example: 123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a teams ownership mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be teams_ownership_mappings. (teams_ownership_mappings) (default: teams_ownership_mappings, example: teams_ownership_mappings)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_teams_ownership_mappings">

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
    <td>The unique identifier of the teams ownership mapping. (example: 123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a teams ownership mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be teams_ownership_mappings. (teams_ownership_mappings) (default: teams_ownership_mappings, example: teams_ownership_mappings)</td>
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
    <td><a href="#get_teams_ownership_mapping"><CopyableCode code="get_teams_ownership_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a specific teams ownership mapping from your organization.</td>
</tr>
<tr>
    <td><a href="#list_teams_ownership_mappings"><CopyableCode code="list_teams_ownership_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[view_name]"><code>filter[view_name]</code></a>, <a href="#parameter-filter[team_handle]"><code>filter[team_handle]</code></a>, <a href="#parameter-filter[application_id]"><code>filter[application_id]</code></a>, <a href="#parameter-filter[service]"><code>filter[service]</code></a></td>
    <td>Get the list of teams ownership mappings for your organization, optionally filtered.</td>
</tr>
<tr>
    <td><a href="#create_teams_ownership_mapping"><CopyableCode code="create_teams_ownership_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a teams ownership mapping for your organization.&lt;br /&gt;Returns the teams ownership mapping object from the request body when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_teams_ownership_mapping"><CopyableCode code="delete_teams_ownership_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a specific teams ownership mapping from your organization.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the teams ownership mapping.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[application_id]">
    <td><CopyableCode code="filter[application_id]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by RUM application ID. Each value must be a valid UUID.</td>
</tr>
<tr id="parameter-filter[service]">
    <td><CopyableCode code="filter[service]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by RUM application service name.</td>
</tr>
<tr id="parameter-filter[team_handle]">
    <td><CopyableCode code="filter[team_handle]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by owning team handle.</td>
</tr>
<tr id="parameter-filter[view_name]">
    <td><CopyableCode code="filter[view_name]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by RUM view name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_teams_ownership_mapping"
    values={[
        { label: 'get_teams_ownership_mapping', value: 'get_teams_ownership_mapping' },
        { label: 'list_teams_ownership_mappings', value: 'list_teams_ownership_mappings' }
    ]}
>
<TabItem value="get_teams_ownership_mapping">

Get a specific teams ownership mapping from your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_teams_ownership_mappings
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_teams_ownership_mappings">

Get the list of teams ownership mappings for your organization, optionally filtered.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_teams_ownership_mappings
WHERE filter[view_name] = '{{ filter[view_name] }}'
AND filter[team_handle] = '{{ filter[team_handle] }}'
AND filter[application_id] = '{{ filter[application_id] }}'
AND filter[service] = '{{ filter[service] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_teams_ownership_mapping"
    values={[
        { label: 'create_teams_ownership_mapping', value: 'create_teams_ownership_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_teams_ownership_mapping">

Create a teams ownership mapping for your organization.&lt;br /&gt;Returns the teams ownership mapping object from the request body when the request is successful.

```sql
INSERT INTO datadog.digital_experience.rum_teams_ownership_mappings (
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
- name: rum_teams_ownership_mappings
  props:
    - name: data
      description: |
        The JSON:API data envelope for a teams ownership mapping create request.
      value:
        attributes:
          application_id: "{{ application_id }}"
          match_type: "{{ match_type }}"
          service: "{{ service }}"
          team_handle: "{{ team_handle }}"
          view_name: "{{ view_name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_teams_ownership_mapping"
    values={[
        { label: 'delete_teams_ownership_mapping', value: 'delete_teams_ownership_mapping' }
    ]}
>
<TabItem value="delete_teams_ownership_mapping">

Delete a specific teams ownership mapping from your organization.

```sql
DELETE FROM datadog.digital_experience.rum_teams_ownership_mappings
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
