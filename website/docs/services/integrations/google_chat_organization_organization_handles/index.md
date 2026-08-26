--- 
title: google_chat_organization_organization_handles
hide_title: false
hide_table_of_contents: false
keywords:
  - google_chat_organization_organization_handles
  - integrations
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

Creates, updates, deletes, gets or lists a <code>google_chat_organization_organization_handles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="google_chat_organization_organization_handles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.google_chat_organization_organization_handles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_organization_handle"
    values={[
        { label: 'get_organization_handle', value: 'get_organization_handle' },
        { label: 'list_organization_handles', value: 'list_organization_handles' }
    ]}
>
<TabItem value="get_organization_handle">

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
    <td>The ID of the organization handle. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Organization handle attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Organization handle resource type. (google-chat-organization-handle) (default: google-chat-organization-handle, example: google-chat-organization-handle)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_organization_handles">

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
    <td>The ID of the organization handle. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Organization handle attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Organization handle resource type. (google-chat-organization-handle) (default: google-chat-organization-handle, example: google-chat-organization-handle)</td>
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
    <td><a href="#get_organization_handle"><CopyableCode code="get_organization_handle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-handle_id"><code>handle_id</code></a></td>
    <td></td>
    <td>Get an organization handle from the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#list_organization_handles"><CopyableCode code="list_organization_handles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a></td>
    <td></td>
    <td>Get a list of all organization handles from the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#create_organization_handle"><CopyableCode code="create_organization_handle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an organization handle in the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#update_organization_handle"><CopyableCode code="update_organization_handle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-handle_id"><code>handle_id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an organization handle from the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#delete_organization_handle"><CopyableCode code="delete_organization_handle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-handle_id"><code>handle_id</code></a></td>
    <td></td>
    <td>Delete an organization handle from the Datadog Google Chat integration.</td>
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
<tr id="parameter-handle_id">
    <td><CopyableCode code="handle_id" /></td>
    <td><code>string</code></td>
    <td>Your organization handle ID.</td>
</tr>
<tr id="parameter-organization_binding_id">
    <td><CopyableCode code="organization_binding_id" /></td>
    <td><code>string</code></td>
    <td>Your organization binding ID.</td>
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
    defaultValue="get_organization_handle"
    values={[
        { label: 'get_organization_handle', value: 'get_organization_handle' },
        { label: 'list_organization_handles', value: 'list_organization_handles' }
    ]}
>
<TabItem value="get_organization_handle">

Get an organization handle from the Datadog Google Chat integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.google_chat_organization_organization_handles
WHERE organization_binding_id = '{{ organization_binding_id }}' -- required
AND handle_id = '{{ handle_id }}' -- required
;
```
</TabItem>
<TabItem value="list_organization_handles">

Get a list of all organization handles from the Datadog Google Chat integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.google_chat_organization_organization_handles
WHERE organization_binding_id = '{{ organization_binding_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_organization_handle"
    values={[
        { label: 'create_organization_handle', value: 'create_organization_handle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_organization_handle">

Create an organization handle in the Datadog Google Chat integration.

```sql
INSERT INTO datadog.integrations.google_chat_organization_organization_handles (
data,
type,
organization_binding_id
)
SELECT 
'{{ data }}' /* required */,
'{{ type }}' /* required */,
'{{ organization_binding_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: google_chat_organization_organization_handles
  props:
    - name: organization_binding_id
      value: "{{ organization_binding_id }}"
      description: Required parameter for the google_chat_organization_organization_handles resource.
    - name: data
      description: |
        Organization handle data for a create request.
      value:
        attributes:
          name: "{{ name }}"
          space_resource_name: "{{ space_resource_name }}"
    - name: type
      value: "{{ type }}"
      description: |
        Organization handle resource type.
      valid_values: ['google-chat-organization-handle']
      default: google-chat-organization-handle
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_organization_handle"
    values={[
        { label: 'update_organization_handle', value: 'update_organization_handle' }
    ]}
>
<TabItem value="update_organization_handle">

Update an organization handle from the Datadog Google Chat integration.

```sql
UPDATE datadog.integrations.google_chat_organization_organization_handles
SET 
data = '{{ data }}',
type = '{{ type }}'
WHERE 
organization_binding_id = '{{ organization_binding_id }}' --required
AND handle_id = '{{ handle_id }}' --required
AND type = '{{ type }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_organization_handle"
    values={[
        { label: 'delete_organization_handle', value: 'delete_organization_handle' }
    ]}
>
<TabItem value="delete_organization_handle">

Delete an organization handle from the Datadog Google Chat integration.

```sql
DELETE FROM datadog.integrations.google_chat_organization_organization_handles
WHERE organization_binding_id = '{{ organization_binding_id }}' --required
AND handle_id = '{{ handle_id }}' --required
;
```
</TabItem>
</Tabs>
