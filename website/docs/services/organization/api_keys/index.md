--- 
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
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

Creates, updates, deletes, gets or lists an <code>api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_apikey"
    values={[
        { label: 'get_apikey', value: 'get_apikey' },
        { label: 'list_apikeys', value: 'list_apikeys' }
    ]}
>
<TabItem value="get_apikey">

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
    <td>ID of the API key.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a full API key.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Resources related to the API key.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>API Keys resource type. (api_keys) (default: api_keys, example: api_keys)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apikeys">

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
    <td>ID of the API key.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a partial API key.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Resources related to the API key.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>API Keys resource type. (api_keys) (default: api_keys, example: api_keys)</td>
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
    <td><a href="#get_apikey"><CopyableCode code="get_apikey" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_key_id"><code>api_key_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get an API key.</td>
</tr>
<tr>
    <td><a href="#list_apikeys"><CopyableCode code="list_apikeys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-filter[created_at][start]"><code>filter[created_at][start]</code></a>, <a href="#parameter-filter[created_at][end]"><code>filter[created_at][end]</code></a>, <a href="#parameter-filter[modified_at][start]"><code>filter[modified_at][start]</code></a>, <a href="#parameter-filter[modified_at][end]"><code>filter[modified_at][end]</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[remote_config_read_enabled]"><code>filter[remote_config_read_enabled]</code></a>, <a href="#parameter-filter[category]"><code>filter[category]</code></a></td>
    <td>List all API keys available for your account.</td>
</tr>
<tr>
    <td><a href="#create_apikey"><CopyableCode code="create_apikey" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an API key.</td>
</tr>
<tr>
    <td><a href="#update_apikey"><CopyableCode code="update_apikey" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_key_id"><code>api_key_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an API key.</td>
</tr>
<tr>
    <td><a href="#delete_apikey"><CopyableCode code="delete_apikey" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_key_id"><code>api_key_id</code></a></td>
    <td></td>
    <td>Delete an API key.</td>
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
<tr id="parameter-api_key_id">
    <td><CopyableCode code="api_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the API key.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter API keys by the specified string.</td>
</tr>
<tr id="parameter-filter[category]">
    <td><CopyableCode code="filter[category]" /></td>
    <td><code>string</code></td>
    <td>Filter API keys by category.</td>
</tr>
<tr id="parameter-filter[created_at][end]">
    <td><CopyableCode code="filter[created_at][end]" /></td>
    <td><code>string</code></td>
    <td>Only include API keys created on or before the specified date.</td>
</tr>
<tr id="parameter-filter[created_at][start]">
    <td><CopyableCode code="filter[created_at][start]" /></td>
    <td><code>string</code></td>
    <td>Only include API keys created on or after the specified date.</td>
</tr>
<tr id="parameter-filter[modified_at][end]">
    <td><CopyableCode code="filter[modified_at][end]" /></td>
    <td><code>string</code></td>
    <td>Only include API keys modified on or before the specified date.</td>
</tr>
<tr id="parameter-filter[modified_at][start]">
    <td><CopyableCode code="filter[modified_at][start]" /></td>
    <td><code>string</code></td>
    <td>Only include API keys modified on or after the specified date.</td>
</tr>
<tr id="parameter-filter[remote_config_read_enabled]">
    <td><CopyableCode code="filter[remote_config_read_enabled]" /></td>
    <td><code>boolean</code></td>
    <td>Filter API keys by remote config read enabled status.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`.</td>
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
    <td>API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_apikey"
    values={[
        { label: 'get_apikey', value: 'get_apikey' },
        { label: 'list_apikeys', value: 'list_apikeys' }
    ]}
>
<TabItem value="get_apikey">

Get an API key.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.api_keys
WHERE api_key_id = '{{ api_key_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_apikeys">

List all API keys available for your account.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.api_keys
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter = '{{ filter }}'
AND filter[created_at][start] = '{{ filter[created_at][start] }}'
AND filter[created_at][end] = '{{ filter[created_at][end] }}'
AND filter[modified_at][start] = '{{ filter[modified_at][start] }}'
AND filter[modified_at][end] = '{{ filter[modified_at][end] }}'
AND include = '{{ include }}'
AND filter[remote_config_read_enabled] = '{{ filter[remote_config_read_enabled] }}'
AND filter[category] = '{{ filter[category] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_apikey"
    values={[
        { label: 'create_apikey', value: 'create_apikey' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_apikey">

Create an API key.

```sql
INSERT INTO datadog.organization.api_keys (
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
- name: api_keys
  props:
    - name: data
      description: |
        Object used to create an API key.
      value:
        attributes:
          category: "{{ category }}"
          name: "{{ name }}"
          remote_config_read_enabled: {{ remote_config_read_enabled }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_apikey"
    values={[
        { label: 'update_apikey', value: 'update_apikey' }
    ]}
>
<TabItem value="update_apikey">

Update an API key.

```sql
UPDATE datadog.organization.api_keys
SET 
data = '{{ data }}'
WHERE 
api_key_id = '{{ api_key_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_apikey"
    values={[
        { label: 'delete_apikey', value: 'delete_apikey' }
    ]}
>
<TabItem value="delete_apikey">

Delete an API key.

```sql
DELETE FROM datadog.organization.api_keys
WHERE api_key_id = '{{ api_key_id }}' --required
;
```
</TabItem>
</Tabs>
