--- 
title: static_analysis_default_rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_default_rulesets
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

Creates, updates, deletes, gets or lists a <code>static_analysis_default_rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_default_rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_default_rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_static_analysis_default_rulesets"
    values={[
        { label: 'get_static_analysis_default_rulesets', value: 'get_static_analysis_default_rulesets' }
    ]}
>
<TabItem value="get_static_analysis_default_rulesets">

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
    <td>The language identifier used as the resource identifier. (example: python)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the default rulesets per language response, containing the list of default ruleset names.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Default rulesets per language resource type. (defaultRulesetsPerLanguage) (default: defaultRulesetsPerLanguage, example: defaultRulesetsPerLanguage)</td>
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
    <td><a href="#get_static_analysis_default_rulesets"><CopyableCode code="get_static_analysis_default_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Get the default SAST ruleset names for a given programming language.</td>
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
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The programming language for which to retrieve the default rulesets.</td>
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
    defaultValue="get_static_analysis_default_rulesets"
    values={[
        { label: 'get_static_analysis_default_rulesets', value: 'get_static_analysis_default_rulesets' }
    ]}
>
<TabItem value="get_static_analysis_default_rulesets">

Get the default SAST ruleset names for a given programming language.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_default_rulesets
WHERE language = '{{ language }}' -- required
;
```
</TabItem>
</Tabs>
