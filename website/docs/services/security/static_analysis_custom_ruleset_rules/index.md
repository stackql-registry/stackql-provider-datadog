--- 
title: static_analysis_custom_ruleset_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_custom_ruleset_rules
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

Creates, updates, deletes, gets or lists a <code>static_analysis_custom_ruleset_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_custom_ruleset_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_custom_ruleset_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_rule"
    values={[
        { label: 'get_custom_rule', value: 'get_custom_rule' }
    ]}
>
<TabItem value="get_custom_rule">

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
    <td>Rule identifier (example: my-rule)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A custom static analysis rule within a ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type (custom_rule) (example: custom_rule)</td>
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
    <td><a href="#get_custom_rule"><CopyableCode code="get_custom_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td></td>
    <td>Get a custom rule by name</td>
</tr>
<tr>
    <td><a href="#create_custom_rule"><CopyableCode code="create_custom_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Create a new custom rule within a ruleset</td>
</tr>
<tr>
    <td><a href="#delete_custom_rule"><CopyableCode code="delete_custom_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td></td>
    <td>Delete a custom rule</td>
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
<tr id="parameter-rule_name">
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The rule name</td>
</tr>
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
    defaultValue="get_custom_rule"
    values={[
        { label: 'get_custom_rule', value: 'get_custom_rule' }
    ]}
>
<TabItem value="get_custom_rule">

Get a custom rule by name

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_custom_ruleset_rules
WHERE ruleset_name = '{{ ruleset_name }}' -- required
AND rule_name = '{{ rule_name }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="create_custom_rule"
    values={[
        { label: 'create_custom_rule', value: 'create_custom_rule' }
    ]}
>
<TabItem value="create_custom_rule">

Create a new custom rule within a ruleset

```sql
REPLACE datadog.security.static_analysis_custom_ruleset_rules
SET 
data = '{{ data }}'
WHERE 
ruleset_name = '{{ ruleset_name }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_rule"
    values={[
        { label: 'delete_custom_rule', value: 'delete_custom_rule' }
    ]}
>
<TabItem value="delete_custom_rule">

Delete a custom rule

```sql
DELETE FROM datadog.security.static_analysis_custom_ruleset_rules
WHERE ruleset_name = '{{ ruleset_name }}' --required
AND rule_name = '{{ rule_name }}' --required
;
```
</TabItem>
</Tabs>
