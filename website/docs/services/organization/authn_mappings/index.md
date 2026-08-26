--- 
title: authn_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - authn_mappings
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

Creates, updates, deletes, gets or lists an <code>authn_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authn_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.authn_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_auth_nmapping"
    values={[
        { label: 'get_auth_nmapping', value: 'get_auth_nmapping' },
        { label: 'list_auth_nmappings', value: 'list_auth_nmappings' }
    ]}
>
<TabItem value="get_auth_nmapping">

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
    <td>ID of the AuthN Mapping. (example: 3653d3c6-0c75-11ea-ad28-fb5701eabc7d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of AuthN Mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>All relationships associated with AuthN Mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AuthN Mappings resource type. (authn_mappings) (default: authn_mappings, example: authn_mappings)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_auth_nmappings">

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
    <td>ID of the AuthN Mapping. (example: 3653d3c6-0c75-11ea-ad28-fb5701eabc7d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of AuthN Mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>All relationships associated with AuthN Mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AuthN Mappings resource type. (authn_mappings) (default: authn_mappings, example: authn_mappings)</td>
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
    <td><a href="#get_auth_nmapping"><CopyableCode code="get_auth_nmapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-authn_mapping_id"><code>authn_mapping_id</code></a></td>
    <td></td>
    <td>Get an AuthN Mapping specified by the AuthN Mapping UUID.</td>
</tr>
<tr>
    <td><a href="#list_auth_nmappings"><CopyableCode code="list_auth_nmappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a></td>
    <td>List all AuthN Mappings in the org.</td>
</tr>
<tr>
    <td><a href="#create_auth_nmapping"><CopyableCode code="create_auth_nmapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an AuthN Mapping.</td>
</tr>
<tr>
    <td><a href="#update_auth_nmapping"><CopyableCode code="update_auth_nmapping" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-authn_mapping_id"><code>authn_mapping_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Edit an AuthN Mapping.</td>
</tr>
<tr>
    <td><a href="#delete_auth_nmapping"><CopyableCode code="delete_auth_nmapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-authn_mapping_id"><code>authn_mapping_id</code></a></td>
    <td></td>
    <td>Delete an AuthN Mapping specified by AuthN Mapping UUID.</td>
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
<tr id="parameter-authn_mapping_id">
    <td><CopyableCode code="authn_mapping_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the AuthN Mapping.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter all mappings by the given string.</td>
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
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Filter by mapping resource type. Defaults to "role" if not specified.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort AuthN Mappings depending on the given field.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_auth_nmapping"
    values={[
        { label: 'get_auth_nmapping', value: 'get_auth_nmapping' },
        { label: 'list_auth_nmappings', value: 'list_auth_nmappings' }
    ]}
>
<TabItem value="get_auth_nmapping">

Get an AuthN Mapping specified by the AuthN Mapping UUID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.authn_mappings
WHERE authn_mapping_id = '{{ authn_mapping_id }}' -- required
;
```
</TabItem>
<TabItem value="list_auth_nmappings">

List all AuthN Mappings in the org.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.authn_mappings
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter = '{{ filter }}'
AND resource_type = '{{ resource_type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_auth_nmapping"
    values={[
        { label: 'create_auth_nmapping', value: 'create_auth_nmapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_auth_nmapping">

Create an AuthN Mapping.

```sql
INSERT INTO datadog.organization.authn_mappings (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: authn_mappings
  props:
    - name: data
      description: |
        Data for creating an AuthN Mapping.
      value:
        attributes:
          attribute_key: "{{ attribute_key }}"
          attribute_value: "{{ attribute_value }}"
        relationships:
          role:
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


## `UPDATE` examples

<Tabs
    defaultValue="update_auth_nmapping"
    values={[
        { label: 'update_auth_nmapping', value: 'update_auth_nmapping' }
    ]}
>
<TabItem value="update_auth_nmapping">

Edit an AuthN Mapping.

```sql
UPDATE datadog.organization.authn_mappings
SET 
data = '{{ data }}'
WHERE 
authn_mapping_id = '{{ authn_mapping_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_auth_nmapping"
    values={[
        { label: 'delete_auth_nmapping', value: 'delete_auth_nmapping' }
    ]}
>
<TabItem value="delete_auth_nmapping">

Delete an AuthN Mapping specified by AuthN Mapping UUID.

```sql
DELETE FROM datadog.organization.authn_mappings
WHERE authn_mapping_id = '{{ authn_mapping_id }}' --required
;
```
</TabItem>
</Tabs>
