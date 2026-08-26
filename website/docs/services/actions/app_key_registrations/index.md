--- 
title: app_key_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - app_key_registrations
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

Creates, updates, deletes, gets or lists an <code>app_key_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_key_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.actions.app_key_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app_key_registration"
    values={[
        { label: 'get_app_key_registration', value: 'get_app_key_registration' },
        { label: 'list_app_key_registrations', value: 'list_app_key_registrations' }
    ]}
>
<TabItem value="get_app_key_registration">

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
    <td>The app key registration identifier</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The definition of `AppKeyRegistrationDataType` object. (app_key_registration) (example: app_key_registration)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_key_registrations">

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
    <td>The app key registration identifier</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The definition of `AppKeyRegistrationDataType` object. (app_key_registration) (example: app_key_registration)</td>
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
    <td><a href="#get_app_key_registration"><CopyableCode code="get_app_key_registration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_key_id"><code>app_key_id</code></a></td>
    <td></td>
    <td>Get an existing App Key Registration</td>
</tr>
<tr>
    <td><a href="#list_app_key_registrations"><CopyableCode code="list_app_key_registrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>List App Key Registrations</td>
</tr>
<tr>
    <td><a href="#unregister_app_key"><CopyableCode code="unregister_app_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_key_id"><code>app_key_id</code></a></td>
    <td></td>
    <td>Unregister an App Key</td>
</tr>
<tr>
    <td><a href="#register_app_key"><CopyableCode code="register_app_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_key_id"><code>app_key_id</code></a></td>
    <td></td>
    <td>Register a new App Key</td>
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
<tr id="parameter-app_key_id">
    <td><CopyableCode code="app_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app key</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of App Key Registrations to return per page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_app_key_registration"
    values={[
        { label: 'get_app_key_registration', value: 'get_app_key_registration' },
        { label: 'list_app_key_registrations', value: 'list_app_key_registrations' }
    ]}
>
<TabItem value="get_app_key_registration">

Get an existing App Key Registration

```sql
SELECT
id,
type
FROM datadog.actions.app_key_registrations
WHERE app_key_id = '{{ app_key_id }}' -- required
;
```
</TabItem>
<TabItem value="list_app_key_registrations">

List App Key Registrations

```sql
SELECT
id,
type
FROM datadog.actions.app_key_registrations
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="unregister_app_key"
    values={[
        { label: 'unregister_app_key', value: 'unregister_app_key' },
        { label: 'register_app_key', value: 'register_app_key' }
    ]}
>
<TabItem value="unregister_app_key">

Unregister an App Key

```sql
EXEC datadog.actions.app_key_registrations.unregister_app_key 
@app_key_id='{{ app_key_id }}' --required 
;
```
</TabItem>
<TabItem value="register_app_key">

Register a new App Key

```sql
EXEC datadog.actions.app_key_registrations.register_app_key 
@app_key_id='{{ app_key_id }}' --required 
;
```
</TabItem>
</Tabs>
