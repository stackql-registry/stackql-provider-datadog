--- 
title: static_analysis_ai_ruleset_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_ai_ruleset_rules
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

Creates, updates, deletes, gets or lists a <code>static_analysis_ai_ruleset_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_ai_ruleset_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_ai_ruleset_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ai_custom_rule"
    values={[
        { label: 'get_ai_custom_rule', value: 'get_ai_custom_rule' }
    ]}
>
<TabItem value="get_ai_custom_rule">

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
    <td>The rule identifier. (example: my-ai-rule)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>An AI custom rule embedded within a ruleset response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AI custom rule resource type. (ai_rule) (example: ai_rule)</td>
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
    <td><a href="#get_ai_custom_rule"><CopyableCode code="get_ai_custom_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td></td>
    <td>Get an AI custom rule by name within a ruleset.</td>
</tr>
<tr>
    <td><a href="#create_ai_custom_rule"><CopyableCode code="create_ai_custom_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Create a new AI custom rule within a ruleset.</td>
</tr>
<tr>
    <td><a href="#delete_ai_custom_rule"><CopyableCode code="delete_ai_custom_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td></td>
    <td>Delete an AI custom rule by name within a ruleset.</td>
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
    <td>The rule name.</td>
</tr>
<tr id="parameter-ruleset_name">
    <td><CopyableCode code="ruleset_name" /></td>
    <td><code>string</code></td>
    <td>The ruleset name.</td>
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
    defaultValue="get_ai_custom_rule"
    values={[
        { label: 'get_ai_custom_rule', value: 'get_ai_custom_rule' }
    ]}
>
<TabItem value="get_ai_custom_rule">

Get an AI custom rule by name within a ruleset.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_ai_ruleset_rules
WHERE ruleset_name = '{{ ruleset_name }}' -- required
AND rule_name = '{{ rule_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_custom_rule"
    values={[
        { label: 'create_ai_custom_rule', value: 'create_ai_custom_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_custom_rule">

Create a new AI custom rule within a ruleset.

```sql
INSERT INTO datadog.security.static_analysis_ai_ruleset_rules (
data,
ruleset_name
)
SELECT 
'{{ data }}',
'{{ ruleset_name }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: static_analysis_ai_ruleset_rules
  props:
    - name: ruleset_name
      value: "{{ ruleset_name }}"
      description: Required parameter for the static_analysis_ai_ruleset_rules resource.
    - name: data
      description: |
        Request data for creating an AI custom rule.
      value:
        attributes:
          name: "{{ name }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_custom_rule"
    values={[
        { label: 'delete_ai_custom_rule', value: 'delete_ai_custom_rule' }
    ]}
>
<TabItem value="delete_ai_custom_rule">

Delete an AI custom rule by name within a ruleset.

```sql
DELETE FROM datadog.security.static_analysis_ai_ruleset_rules
WHERE ruleset_name = '{{ ruleset_name }}' --required
AND rule_name = '{{ rule_name }}' --required
;
```
</TabItem>
</Tabs>
