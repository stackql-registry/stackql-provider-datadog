--- 
title: static_analysis_custom_rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_custom_rulesets
  - security
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

Creates, updates, deletes, gets or lists a <code>static_analysis_custom_rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_custom_rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_custom_rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_ruleset"
    values={[
        { label: 'get_custom_ruleset', value: 'get_custom_ruleset' },
        { label: 'list_custom_rulesets', value: 'list_custom_rulesets' }
    ]}
>
<TabItem value="get_custom_ruleset">

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
    <td>Ruleset identifier (example: my-ruleset)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom ruleset, including its name, description, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type (custom_ruleset) (example: custom_ruleset)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_rulesets">

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
    <td>Ruleset identifier (example: my-ruleset)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom ruleset, including its name, description, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type (custom_ruleset) (example: custom_ruleset)</td>
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
    <td><a href="#get_custom_ruleset"><CopyableCode code="get_custom_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Get a custom ruleset by name</td>
</tr>
<tr>
    <td><a href="#list_custom_rulesets"><CopyableCode code="list_custom_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all custom rulesets for the authenticated organization.</td>
</tr>
<tr>
    <td><a href="#update_custom_ruleset"><CopyableCode code="update_custom_ruleset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Update an existing custom ruleset</td>
</tr>
<tr>
    <td><a href="#create_custom_ruleset"><CopyableCode code="create_custom_ruleset" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Create a new custom ruleset for the authenticated organization.</td>
</tr>
<tr>
    <td><a href="#delete_custom_ruleset"><CopyableCode code="delete_custom_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Delete a custom ruleset</td>
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
<tr id="parameter-ruleset_name">
    <td><CopyableCode code="ruleset_name" /></td>
    <td><code>string</code></td>
    <td>The ruleset name</td>
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
    defaultValue="get_custom_ruleset"
    values={[
        { label: 'get_custom_ruleset', value: 'get_custom_ruleset' },
        { label: 'list_custom_rulesets', value: 'list_custom_rulesets' }
    ]}
>
<TabItem value="get_custom_ruleset">

Get a custom ruleset by name

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_custom_rulesets
WHERE ruleset_name = '{{ ruleset_name }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_rulesets">

Get all custom rulesets for the authenticated organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_custom_rulesets
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_ruleset"
    values={[
        { label: 'update_custom_ruleset', value: 'update_custom_ruleset' }
    ]}
>
<TabItem value="update_custom_ruleset">

Update an existing custom ruleset

```sql
UPDATE datadog.security.static_analysis_custom_rulesets
SET 
data = '{{ data }}'
WHERE 
ruleset_name = '{{ ruleset_name }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="create_custom_ruleset"
    values={[
        { label: 'create_custom_ruleset', value: 'create_custom_ruleset' }
    ]}
>
<TabItem value="create_custom_ruleset">

Create a new custom ruleset for the authenticated organization.

```sql
REPLACE datadog.security.static_analysis_custom_rulesets
SET 
data = '{{ data }}'
WHERE 
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_ruleset"
    values={[
        { label: 'delete_custom_ruleset', value: 'delete_custom_ruleset' }
    ]}
>
<TabItem value="delete_custom_ruleset">

Delete a custom ruleset

```sql
DELETE FROM datadog.security.static_analysis_custom_rulesets
WHERE ruleset_name = '{{ ruleset_name }}' --required
;
```
</TabItem>
</Tabs>
