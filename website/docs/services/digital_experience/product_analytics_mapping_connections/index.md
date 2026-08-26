--- 
title: product_analytics_mapping_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_mapping_connections
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

Creates, updates, deletes, gets or lists a <code>product_analytics_mapping_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_mapping_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_mapping_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connections"
    values={[
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="list_connections">

Successful response with list of connections

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
    <td>Unique identifier for the list connections response resource.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the list connections response, containing the collection of data source connections.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>List connections response resource type. (list_connections_response) (default: list_connections_response, example: list_connections_response)</td>
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
    <td><a href="#list_connections"><CopyableCode code="list_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-entity"><code>entity</code></a></td>
    <td></td>
    <td>List all data connections for an entity</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-entity"><code>entity</code></a></td>
    <td></td>
    <td>Create a new data connection and its fields for an entity</td>
</tr>
<tr>
    <td><a href="#update_connection"><CopyableCode code="update_connection" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-entity"><code>entity</code></a></td>
    <td></td>
    <td>Update an existing data connection by adding, updating, or deleting fields</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-entity"><code>entity</code></a></td>
    <td></td>
    <td>Delete an existing data connection for an entity</td>
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
<tr id="parameter-entity">
    <td><CopyableCode code="entity" /></td>
    <td><code>string</code></td>
    <td>The entity for which to delete the connection</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The connection ID to delete</td>
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
    defaultValue="list_connections"
    values={[
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="list_connections">

List all data connections for an entity

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.product_analytics_mapping_connections
WHERE entity = '{{ entity }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Create a new data connection and its fields for an entity

```sql
INSERT INTO datadog.digital_experience.product_analytics_mapping_connections (
data,
entity
)
SELECT 
'{{ data }}',
'{{ entity }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: product_analytics_mapping_connections
  props:
    - name: entity
      value: "{{ entity }}"
      description: Required parameter for the product_analytics_mapping_connections resource.
    - name: data
      description: |
        The data object containing the resource type and attributes for creating a new connection.
      value:
        attributes:
          fields:
            - description: "{{ description }}"
              display_name: "{{ display_name }}"
              groups: "{{ groups }}"
              id: "{{ id }}"
              source_name: "{{ source_name }}"
              type: "{{ type }}"
          join_attribute: "{{ join_attribute }}"
          join_type: "{{ join_type }}"
          metadata: "{{ metadata }}"
          type: "{{ type }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_connection"
    values={[
        { label: 'update_connection', value: 'update_connection' }
    ]}
>
<TabItem value="update_connection">

Update an existing data connection by adding, updating, or deleting fields

```sql
REPLACE datadog.digital_experience.product_analytics_mapping_connections
SET 
data = '{{ data }}'
WHERE 
entity = '{{ entity }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Delete an existing data connection for an entity

```sql
DELETE FROM datadog.digital_experience.product_analytics_mapping_connections
WHERE id = '{{ id }}' --required
AND entity = '{{ entity }}' --required
;
```
</TabItem>
</Tabs>
