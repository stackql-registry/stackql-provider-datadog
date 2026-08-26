--- 
title: personal_access_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - personal_access_tokens
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

Creates, updates, deletes, gets or lists a <code>personal_access_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="personal_access_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.personal_access_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_personal_access_token"
    values={[
        { label: 'get_personal_access_token', value: 'get_personal_access_token' },
        { label: 'list_personal_access_tokens', value: 'list_personal_access_tokens' }
    ]}
>
<TabItem value="get_personal_access_token">

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
    <td>ID of the access token.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an access token.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Resources related to the access token.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Personal access tokens resource type. (personal_access_tokens) (default: personal_access_tokens, example: personal_access_tokens)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_personal_access_tokens">

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
    <td>ID of the access token.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an access token.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Resources related to the access token entry in the mixed list response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type returned by the access tokens list endpoint. Includes both personal and service access tokens. (personal_access_tokens, service_access_tokens) (example: personal_access_tokens)</td>
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
    <td><a href="#get_personal_access_token"><CopyableCode code="get_personal_access_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-token_id"><code>token_id</code></a></td>
    <td></td>
    <td>Get a specific personal access token by its ID.</td>
</tr>
<tr>
    <td><a href="#list_personal_access_tokens"><CopyableCode code="list_personal_access_tokens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-filter[owned_by]"><code>filter[owned_by]</code></a></td>
    <td>List all access tokens for the organization.</td>
</tr>
<tr>
    <td><a href="#create_personal_access_token"><CopyableCode code="create_personal_access_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a personal access token for the current user.</td>
</tr>
<tr>
    <td><a href="#update_personal_access_token"><CopyableCode code="update_personal_access_token" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-token_id"><code>token_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific personal access token.</td>
</tr>
<tr>
    <td><a href="#revoke_personal_access_token"><CopyableCode code="revoke_personal_access_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-token_id"><code>token_id</code></a></td>
    <td></td>
    <td>Revoke a specific personal access token.</td>
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
<tr id="parameter-token_id">
    <td><CopyableCode code="token_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access token.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filter access tokens by the specified string.</td>
</tr>
<tr id="parameter-filter[owned_by]">
    <td><CopyableCode code="filter[owned_by]" /></td>
    <td><code>array</code></td>
    <td>Filter access tokens by the owner's ID. Supports multiple values.</td>
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
    <td>Access token attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_personal_access_token"
    values={[
        { label: 'get_personal_access_token', value: 'get_personal_access_token' },
        { label: 'list_personal_access_tokens', value: 'list_personal_access_tokens' }
    ]}
>
<TabItem value="get_personal_access_token">

Get a specific personal access token by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.personal_access_tokens
WHERE token_id = '{{ token_id }}' -- required
;
```
</TabItem>
<TabItem value="list_personal_access_tokens">

List all access tokens for the organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.personal_access_tokens
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter = '{{ filter }}'
AND filter[owned_by] = '{{ filter[owned_by] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_personal_access_token"
    values={[
        { label: 'create_personal_access_token', value: 'create_personal_access_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_personal_access_token">

Create a personal access token for the current user.

```sql
INSERT INTO datadog.organization.personal_access_tokens (
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
- name: personal_access_tokens
  props:
    - name: data
      description: |
        Object used to create an access token.
      value:
        attributes:
          expires_at: "{{ expires_at }}"
          name: "{{ name }}"
          scopes:
            - "{{ scopes }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_personal_access_token"
    values={[
        { label: 'update_personal_access_token', value: 'update_personal_access_token' }
    ]}
>
<TabItem value="update_personal_access_token">

Update a specific personal access token.

```sql
UPDATE datadog.organization.personal_access_tokens
SET 
data = '{{ data }}'
WHERE 
token_id = '{{ token_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="revoke_personal_access_token"
    values={[
        { label: 'revoke_personal_access_token', value: 'revoke_personal_access_token' }
    ]}
>
<TabItem value="revoke_personal_access_token">

Revoke a specific personal access token.

```sql
DELETE FROM datadog.organization.personal_access_tokens
WHERE token_id = '{{ token_id }}' --required
;
```
</TabItem>
</Tabs>
