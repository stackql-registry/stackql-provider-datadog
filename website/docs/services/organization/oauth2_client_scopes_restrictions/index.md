--- 
title: oauth2_client_scopes_restrictions
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth2_client_scopes_restrictions
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

Creates, updates, deletes, gets or lists an <code>oauth2_client_scopes_restrictions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth2_client_scopes_restrictions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.oauth2_client_scopes_restrictions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scopes_restriction"
    values={[
        { label: 'get_scopes_restriction', value: 'get_scopes_restriction' }
    ]}
>
<TabItem value="get_scopes_restriction">

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
    <td>UUID of the OAuth2 client this restriction applies to. (example: fafa8e1c-36a5-11f0-a83d-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an OAuth2 client scopes restriction.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for an OAuth2 client scopes restriction. (scopes_restriction) (default: scopes_restriction, example: scopes_restriction)</td>
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
    <td><a href="#get_scopes_restriction"><CopyableCode code="get_scopes_restriction" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-client_uuid"><code>client_uuid</code></a></td>
    <td></td>
    <td>Get the scopes restriction configured for the OAuth2 client.</td>
</tr>
<tr>
    <td><a href="#upsert_scopes_restriction"><CopyableCode code="upsert_scopes_restriction" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-client_uuid"><code>client_uuid</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update the scopes restriction configured for the OAuth2 client.</td>
</tr>
<tr>
    <td><a href="#delete_scopes_restriction"><CopyableCode code="delete_scopes_restriction" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-client_uuid"><code>client_uuid</code></a></td>
    <td></td>
    <td>Delete the scopes restriction configured for the OAuth2 client.</td>
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
<tr id="parameter-client_uuid">
    <td><CopyableCode code="client_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>UUID of the OAuth2 client.</td>
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
    defaultValue="get_scopes_restriction"
    values={[
        { label: 'get_scopes_restriction', value: 'get_scopes_restriction' }
    ]}
>
<TabItem value="get_scopes_restriction">

Get the scopes restriction configured for the OAuth2 client.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.oauth2_client_scopes_restrictions
WHERE client_uuid = '{{ client_uuid }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="upsert_scopes_restriction"
    values={[
        { label: 'upsert_scopes_restriction', value: 'upsert_scopes_restriction' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="upsert_scopes_restriction">

Create or update the scopes restriction configured for the OAuth2 client.

```sql
INSERT INTO datadog.organization.oauth2_client_scopes_restrictions (
data,
client_uuid
)
SELECT 
'{{ data }}' /* required */,
'{{ client_uuid }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: oauth2_client_scopes_restrictions
  props:
    - name: client_uuid
      value: "{{ client_uuid }}"
      description: Required parameter for the oauth2_client_scopes_restrictions resource.
    - name: data
      description: |
        Data object of an upsert OAuth2 scopes restriction request.
      value:
        attributes:
          oidc_scopes:
            - "{{ oidc_scopes }}"
          permission_scopes:
            - "{{ permission_scopes }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scopes_restriction"
    values={[
        { label: 'delete_scopes_restriction', value: 'delete_scopes_restriction' }
    ]}
>
<TabItem value="delete_scopes_restriction">

Delete the scopes restriction configured for the OAuth2 client.

```sql
DELETE FROM datadog.organization.oauth2_client_scopes_restrictions
WHERE client_uuid = '{{ client_uuid }}' --required
;
```
</TabItem>
</Tabs>
