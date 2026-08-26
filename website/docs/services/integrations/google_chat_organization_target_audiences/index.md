--- 
title: google_chat_organization_target_audiences
hide_title: false
hide_table_of_contents: false
keywords:
  - google_chat_organization_target_audiences
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

Creates, updates, deletes, gets or lists a <code>google_chat_organization_target_audiences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="google_chat_organization_target_audiences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.google_chat_organization_target_audiences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_google_chat_target_audience"
    values={[
        { label: 'get_google_chat_target_audience', value: 'get_google_chat_target_audience' },
        { label: 'list_google_chat_target_audiences', value: 'list_google_chat_target_audiences' }
    ]}
>
<TabItem value="get_google_chat_target_audience">

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
    <td>The ID of the target audience. (example: 1f3e5ce6-944a-4075-97ae-105b5920b5cb)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Google Chat target audience attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Google Chat target audience resource type. (google-chat-target-audience) (default: google-chat-target-audience, example: google-chat-target-audience)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_google_chat_target_audiences">

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
    <td>The ID of the target audience. (example: 1f3e5ce6-944a-4075-97ae-105b5920b5cb)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Google Chat target audience attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Google Chat target audience resource type. (google-chat-target-audience) (default: google-chat-target-audience, example: google-chat-target-audience)</td>
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
    <td><a href="#get_google_chat_target_audience"><CopyableCode code="get_google_chat_target_audience" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-target_audience_id"><code>target_audience_id</code></a></td>
    <td></td>
    <td>Get a target audience for a Google Chat organization binding in the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#list_google_chat_target_audiences"><CopyableCode code="list_google_chat_target_audiences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a></td>
    <td></td>
    <td>Get a list of all target audiences for a Google Chat organization binding in the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#create_google_chat_target_audience"><CopyableCode code="create_google_chat_target_audience" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a target audience for a Google Chat organization binding in the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#update_google_chat_target_audience"><CopyableCode code="update_google_chat_target_audience" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-target_audience_id"><code>target_audience_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a target audience for a Google Chat organization binding in the Datadog Google Chat integration.</td>
</tr>
<tr>
    <td><a href="#delete_google_chat_target_audience"><CopyableCode code="delete_google_chat_target_audience" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-organization_binding_id"><code>organization_binding_id</code></a>, <a href="#parameter-target_audience_id"><code>target_audience_id</code></a></td>
    <td></td>
    <td>Delete a target audience from a Google Chat organization binding in the Datadog Google Chat integration.</td>
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
<tr id="parameter-target_audience_id">
    <td><CopyableCode code="target_audience_id" /></td>
    <td><code>string</code></td>
    <td>Your target audience ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_google_chat_target_audience"
    values={[
        { label: 'get_google_chat_target_audience', value: 'get_google_chat_target_audience' },
        { label: 'list_google_chat_target_audiences', value: 'list_google_chat_target_audiences' }
    ]}
>
<TabItem value="get_google_chat_target_audience">

Get a target audience for a Google Chat organization binding in the Datadog Google Chat integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.google_chat_organization_target_audiences
WHERE organization_binding_id = '{{ organization_binding_id }}' -- required
AND target_audience_id = '{{ target_audience_id }}' -- required
;
```
</TabItem>
<TabItem value="list_google_chat_target_audiences">

Get a list of all target audiences for a Google Chat organization binding in the Datadog Google Chat integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.google_chat_organization_target_audiences
WHERE organization_binding_id = '{{ organization_binding_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_google_chat_target_audience"
    values={[
        { label: 'create_google_chat_target_audience', value: 'create_google_chat_target_audience' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_google_chat_target_audience">

Create a target audience for a Google Chat organization binding in the Datadog Google Chat integration.

```sql
INSERT INTO datadog.integrations.google_chat_organization_target_audiences (
data,
organization_binding_id
)
SELECT 
'{{ data }}' /* required */,
'{{ organization_binding_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: google_chat_organization_target_audiences
  props:
    - name: organization_binding_id
      value: "{{ organization_binding_id }}"
      description: Required parameter for the google_chat_organization_target_audiences resource.
    - name: data
      description: |
        Data for a create target audience request.
      value:
        attributes:
          audience_id: "{{ audience_id }}"
          audience_name: "{{ audience_name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_google_chat_target_audience"
    values={[
        { label: 'update_google_chat_target_audience', value: 'update_google_chat_target_audience' }
    ]}
>
<TabItem value="update_google_chat_target_audience">

Update a target audience for a Google Chat organization binding in the Datadog Google Chat integration.

```sql
UPDATE datadog.integrations.google_chat_organization_target_audiences
SET 
data = '{{ data }}'
WHERE 
organization_binding_id = '{{ organization_binding_id }}' --required
AND target_audience_id = '{{ target_audience_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_google_chat_target_audience"
    values={[
        { label: 'delete_google_chat_target_audience', value: 'delete_google_chat_target_audience' }
    ]}
>
<TabItem value="delete_google_chat_target_audience">

Delete a target audience from a Google Chat organization binding in the Datadog Google Chat integration.

```sql
DELETE FROM datadog.integrations.google_chat_organization_target_audiences
WHERE organization_binding_id = '{{ organization_binding_id }}' --required
AND target_audience_id = '{{ target_audience_id }}' --required
;
```
</TabItem>
</Tabs>
