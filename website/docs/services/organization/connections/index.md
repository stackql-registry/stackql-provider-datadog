--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_org_connections"
    values={[
        { label: 'list_org_connections', value: 'list_org_connections' }
    ]}
>
<TabItem value="list_org_connections">

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
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the org connection. (example: f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Org connection attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Related organizations and user.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org connection type. (org_connection) (example: org_connection)</td>
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
    <td><a href="#list_org_connections"><CopyableCode code="list_org_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-sink_org_id"><code>sink_org_id</code></a>, <a href="#parameter-source_org_id"><code>source_org_id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Returns a list of org connections.</td>
</tr>
<tr>
    <td><a href="#create_org_connections"><CopyableCode code="create_org_connections" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new org connection between the current org and a target org.</td>
</tr>
<tr>
    <td><a href="#update_org_connections"><CopyableCode code="update_org_connections" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing org connection.</td>
</tr>
<tr>
    <td><a href="#delete_org_connections"><CopyableCode code="delete_org_connections" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connection_id"><code>connection_id</code></a></td>
    <td></td>
    <td>Delete an existing org connection.</td>
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
<tr id="parameter-connection_id">
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the org connection.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The limit of number of entries you want to return. Default is 1000. (example: 1000)</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>The pagination offset which you want to query from. Default is 0. (example: 0)</td>
</tr>
<tr id="parameter-sink_org_id">
    <td><CopyableCode code="sink_org_id" /></td>
    <td><code>string</code></td>
    <td>The Org ID of the sink org. (example: 0879ce27-29a1-481f-a12e-bc2a48ec9ae1)</td>
</tr>
<tr id="parameter-source_org_id">
    <td><CopyableCode code="source_org_id" /></td>
    <td><code>string</code></td>
    <td>The Org ID of the source org. (example: 0879ce27-29a1-481f-a12e-bc2a48ec9ae1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_org_connections"
    values={[
        { label: 'list_org_connections', value: 'list_org_connections' }
    ]}
>
<TabItem value="list_org_connections">

Returns a list of org connections.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.connections
WHERE sink_org_id = '{{ sink_org_id }}'
AND source_org_id = '{{ source_org_id }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_org_connections"
    values={[
        { label: 'create_org_connections', value: 'create_org_connections' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_org_connections">

Create a new org connection between the current org and a target org.

```sql
INSERT INTO datadog.organization.connections (
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
- name: connections
  props:
    - name: data
      description: |
        Org connection creation data.
      value:
        attributes:
          connection_types:
            - "{{ connection_types }}"
        relationships:
          sink_org:
            data:
              id: "{{ id }}"
              name: "{{ name }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_connections"
    values={[
        { label: 'update_org_connections', value: 'update_org_connections' }
    ]}
>
<TabItem value="update_org_connections">

Update an existing org connection.

```sql
UPDATE datadog.organization.connections
SET 
data = '{{ data }}'
WHERE 
connection_id = '{{ connection_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_org_connections"
    values={[
        { label: 'delete_org_connections', value: 'delete_org_connections' }
    ]}
>
<TabItem value="delete_org_connections">

Delete an existing org connection.

```sql
DELETE FROM datadog.organization.connections
WHERE connection_id = '{{ connection_id }}' --required
;
```
</TabItem>
</Tabs>
