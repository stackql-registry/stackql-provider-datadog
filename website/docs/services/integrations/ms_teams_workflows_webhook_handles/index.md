--- 
title: ms_teams_workflows_webhook_handles
hide_title: false
hide_table_of_contents: false
keywords:
  - ms_teams_workflows_webhook_handles
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

Creates, updates, deletes, gets or lists a <code>ms_teams_workflows_webhook_handles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ms_teams_workflows_webhook_handles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.ms_teams_workflows_webhook_handles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflows_webhook_handle"
    values={[
        { label: 'get_workflows_webhook_handle', value: 'get_workflows_webhook_handle' },
        { label: 'list_workflows_webhook_handles', value: 'list_workflows_webhook_handles' }
    ]}
>
<TabItem value="get_workflows_webhook_handle">

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
    <td>The ID of the Workflows webhook handle. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Workflows Webhook handle attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Specifies the Workflows webhook handle resource type. (workflows-webhook-handle) (default: workflows-webhook-handle, example: workflows-webhook-handle)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflows_webhook_handles">

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
    <td>The ID of the Workflows webhook handle. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Workflows Webhook handle attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Specifies the Workflows webhook handle resource type. (workflows-webhook-handle) (default: workflows-webhook-handle, example: workflows-webhook-handle)</td>
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
    <td><a href="#get_workflows_webhook_handle"><CopyableCode code="get_workflows_webhook_handle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-handle_id"><code>handle_id</code></a></td>
    <td></td>
    <td>Get the name of a Workflows webhook handle from the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#list_workflows_webhook_handles"><CopyableCode code="list_workflows_webhook_handles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Get a list of all Workflows webhook handles from the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#create_workflows_webhook_handle"><CopyableCode code="create_workflows_webhook_handle" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Workflows webhook handle in the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#update_workflows_webhook_handle"><CopyableCode code="update_workflows_webhook_handle" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-handle_id"><code>handle_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a Workflows webhook handle from the Datadog Microsoft Teams integration.</td>
</tr>
<tr>
    <td><a href="#delete_workflows_webhook_handle"><CopyableCode code="delete_workflows_webhook_handle" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-handle_id"><code>handle_id</code></a></td>
    <td></td>
    <td>Delete a Workflows webhook handle from the Datadog Microsoft Teams integration.</td>
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
    <td>Your Workflows webhook handle id.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Your Workflows webhook handle name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflows_webhook_handle"
    values={[
        { label: 'get_workflows_webhook_handle', value: 'get_workflows_webhook_handle' },
        { label: 'list_workflows_webhook_handles', value: 'list_workflows_webhook_handles' }
    ]}
>
<TabItem value="get_workflows_webhook_handle">

Get the name of a Workflows webhook handle from the Datadog Microsoft Teams integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.ms_teams_workflows_webhook_handles
WHERE handle_id = '{{ handle_id }}' -- required
;
```
</TabItem>
<TabItem value="list_workflows_webhook_handles">

Get a list of all Workflows webhook handles from the Datadog Microsoft Teams integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.ms_teams_workflows_webhook_handles
WHERE name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflows_webhook_handle"
    values={[
        { label: 'create_workflows_webhook_handle', value: 'create_workflows_webhook_handle' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflows_webhook_handle">

Create a Workflows webhook handle in the Datadog Microsoft Teams integration.

```sql
INSERT INTO datadog.integrations.ms_teams_workflows_webhook_handles (
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
- name: ms_teams_workflows_webhook_handles
  props:
    - name: data
      description: |
        Workflows Webhook handle data from a response.
      value:
        attributes:
          name: "{{ name }}"
          url: "{{ url }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflows_webhook_handle"
    values={[
        { label: 'update_workflows_webhook_handle', value: 'update_workflows_webhook_handle' }
    ]}
>
<TabItem value="update_workflows_webhook_handle">

Update a Workflows webhook handle from the Datadog Microsoft Teams integration.

```sql
UPDATE datadog.integrations.ms_teams_workflows_webhook_handles
SET 
data = '{{ data }}'
WHERE 
handle_id = '{{ handle_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflows_webhook_handle"
    values={[
        { label: 'delete_workflows_webhook_handle', value: 'delete_workflows_webhook_handle' }
    ]}
>
<TabItem value="delete_workflows_webhook_handle">

Delete a Workflows webhook handle from the Datadog Microsoft Teams integration.

```sql
DELETE FROM datadog.integrations.ms_teams_workflows_webhook_handles
WHERE handle_id = '{{ handle_id }}' --required
;
```
</TabItem>
</Tabs>
