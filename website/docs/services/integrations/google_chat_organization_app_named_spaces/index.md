--- 
title: google_chat_organization_app_named_spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - google_chat_organization_app_named_spaces
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

Creates, updates, deletes, gets or lists a <code>google_chat_organization_app_named_spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="google_chat_organization_app_named_spaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.google_chat_organization_app_named_spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_space_by_display_name"
    values={[
        { label: 'get_space_by_display_name', value: 'get_space_by_display_name' }
    ]}
>
<TabItem value="get_space_by_display_name">

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
    <td>The ID of the Google Chat space. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Google Chat space attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Google Chat space resource type. (google-chat-app-named-space) (default: google-chat-app-named-space, example: google-chat-app-named-space)</td>
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
    <td><a href="#get_space_by_display_name"><CopyableCode code="get_space_by_display_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-space_display_name"><code>space_display_name</code></a></td>
    <td></td>
    <td>Get the resource name and organization binding ID of a space in the Datadog Google Chat integration.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The Google Chat domain name.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-space_display_name">
    <td><CopyableCode code="space_display_name" /></td>
    <td><code>string</code></td>
    <td>The Google Chat space display name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_space_by_display_name"
    values={[
        { label: 'get_space_by_display_name', value: 'get_space_by_display_name' }
    ]}
>
<TabItem value="get_space_by_display_name">

Get the resource name and organization binding ID of a space in the Datadog Google Chat integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.google_chat_organization_app_named_spaces
WHERE domain_name = '{{ domain_name }}' -- required
AND space_display_name = '{{ space_display_name }}' -- required
;
```
</TabItem>
</Tabs>
