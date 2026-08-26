--- 
title: team_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - team_connections
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

Creates, updates, deletes, gets or lists a <code>team_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.team_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_team_connections"
    values={[
        { label: 'list_team_connections', value: 'list_team_connections' }
    ]}
>
<TabItem value="list_team_connections">

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
    <td>The unique identifier of the team connection. (example: 12345678-1234-5678-9abc-123456789012)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the team connection.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the team connection.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team connection resource type. (team_connection) (default: team_connection, example: team_connection)</td>
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
    <td><a href="#list_team_connections"><CopyableCode code="list_team_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-filter[sources]"><code>filter[sources]</code></a>, <a href="#parameter-filter[team_ids]"><code>filter[team_ids]</code></a>, <a href="#parameter-filter[connected_team_ids]"><code>filter[connected_team_ids]</code></a>, <a href="#parameter-filter[connection_ids]"><code>filter[connection_ids]</code></a></td>
    <td>Returns all team connections.</td>
</tr>
<tr>
    <td><a href="#create_team_connections"><CopyableCode code="create_team_connections" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create multiple team connections.</td>
</tr>
<tr>
    <td><a href="#delete_team_connections"><CopyableCode code="delete_team_connections" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete multiple team connections.</td>
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
<tr id="parameter-filter[connected_team_ids]">
    <td><CopyableCode code="filter[connected_team_ids]" /></td>
    <td><code>array</code></td>
    <td>Filter team connections by connected team IDs from external systems.</td>
</tr>
<tr id="parameter-filter[connection_ids]">
    <td><CopyableCode code="filter[connection_ids]" /></td>
    <td><code>array</code></td>
    <td>Filter team connections by connection IDs.</td>
</tr>
<tr id="parameter-filter[sources]">
    <td><CopyableCode code="filter[sources]" /></td>
    <td><code>array</code></td>
    <td>Filter team connections by external source systems.</td>
</tr>
<tr id="parameter-filter[team_ids]">
    <td><CopyableCode code="filter[team_ids]" /></td>
    <td><code>array</code></td>
    <td>Filter team connections by Datadog team IDs.</td>
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
    defaultValue="list_team_connections"
    values={[
        { label: 'list_team_connections', value: 'list_team_connections' }
    ]}
>
<TabItem value="list_team_connections">

Returns all team connections.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.team_connections
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND filter[sources] = '{{ filter[sources] }}'
AND filter[team_ids] = '{{ filter[team_ids] }}'
AND filter[connected_team_ids] = '{{ filter[connected_team_ids] }}'
AND filter[connection_ids] = '{{ filter[connection_ids] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_team_connections"
    values={[
        { label: 'create_team_connections', value: 'create_team_connections' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_team_connections">

Create multiple team connections.

```sql
INSERT INTO datadog.organization.team_connections (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: team_connections
  props:
    - name: data
      description: |
        Array of team connections to create.
      value:
        - attributes:
            managed_by: "{{ managed_by }}"
            source: "{{ source }}"
          relationships:
            connected_team:
              data:
                id: "{{ id }}"
                type: "{{ type }}"
            team:
              data:
                id: "{{ id }}"
                type: "{{ type }}"
          type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_team_connections"
    values={[
        { label: 'delete_team_connections', value: 'delete_team_connections' }
    ]}
>
<TabItem value="delete_team_connections">

Delete multiple team connections.

```sql
DELETE FROM datadog.organization.team_connections
;
```
</TabItem>
</Tabs>
