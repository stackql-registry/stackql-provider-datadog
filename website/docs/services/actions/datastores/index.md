--- 
title: datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - datastores
  - actions
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

Creates, updates, deletes, gets or lists a <code>datastores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datastores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.actions.datastores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_datastore"
    values={[
        { label: 'get_datastore', value: 'get_datastore' },
        { label: 'list_datastores', value: 'list_datastores' }
    ]}
>
<TabItem value="get_datastore">

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
    <td>The unique identifier of the datastore.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Detailed information about a datastore.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for datastores. (datastores) (default: datastores, example: datastores)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_datastores">

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
    <td>The unique identifier of the datastore.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Detailed information about a datastore.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for datastores. (datastores) (default: datastores, example: datastores)</td>
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
    <td><a href="#get_datastore"><CopyableCode code="get_datastore" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a></td>
    <td></td>
    <td>Retrieves a specific datastore by its ID.</td>
</tr>
<tr>
    <td><a href="#list_datastores"><CopyableCode code="list_datastores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists all datastores for the organization.</td>
</tr>
<tr>
    <td><a href="#create_datastore"><CopyableCode code="create_datastore" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a new datastore.</td>
</tr>
<tr>
    <td><a href="#update_datastore"><CopyableCode code="update_datastore" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a></td>
    <td></td>
    <td>Updates an existing datastore's attributes.</td>
</tr>
<tr>
    <td><a href="#delete_datastore"><CopyableCode code="delete_datastore" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a></td>
    <td></td>
    <td>Deletes a datastore by its unique identifier.</td>
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
<tr id="parameter-datastore_id">
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the datastore to retrieve.</td>
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
    defaultValue="get_datastore"
    values={[
        { label: 'get_datastore', value: 'get_datastore' },
        { label: 'list_datastores', value: 'list_datastores' }
    ]}
>
<TabItem value="get_datastore">

Retrieves a specific datastore by its ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.actions.datastores
WHERE datastore_id = '{{ datastore_id }}' -- required
;
```
</TabItem>
<TabItem value="list_datastores">

Lists all datastores for the organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.actions.datastores
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_datastore"
    values={[
        { label: 'create_datastore', value: 'create_datastore' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_datastore">

Creates a new datastore.

```sql
INSERT INTO datadog.actions.datastores (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datastores
  props:
    - name: data
      description: |
        Data wrapper containing the configuration needed to create a new datastore.
      value:
        attributes:
          description: "{{ description }}"
          name: "{{ name }}"
          org_access: "{{ org_access }}"
          primary_column_name: "{{ primary_column_name }}"
          primary_key_generation_strategy: "{{ primary_key_generation_strategy }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_datastore"
    values={[
        { label: 'update_datastore', value: 'update_datastore' }
    ]}
>
<TabItem value="update_datastore">

Updates an existing datastore's attributes.

```sql
UPDATE datadog.actions.datastores
SET 
data = '{{ data }}'
WHERE 
datastore_id = '{{ datastore_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_datastore"
    values={[
        { label: 'delete_datastore', value: 'delete_datastore' }
    ]}
>
<TabItem value="delete_datastore">

Deletes a datastore by its unique identifier.

```sql
DELETE FROM datadog.actions.datastores
WHERE datastore_id = '{{ datastore_id }}' --required
;
```
</TabItem>
</Tabs>
