--- 
title: static_analysis_rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_rulesets
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

Creates, updates, deletes, gets or lists a <code>static_analysis_rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_static_analysis_ruleset"
    values={[
        { label: 'get_static_analysis_ruleset', value: 'get_static_analysis_ruleset' }
    ]}
>
<TabItem value="get_static_analysis_ruleset">

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
    <td>The unique identifier of the ruleset resource. (example: python-best-practices)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a SAST ruleset, including its name, description, and rules.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Rulesets resource type. (rulesets) (default: rulesets, example: rulesets)</td>
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
    <td><a href="#get_static_analysis_ruleset"><CopyableCode code="get_static_analysis_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td><a href="#parameter-include_tests"><code>include_tests</code></a>, <a href="#parameter-include_testing_rules"><code>include_testing_rules</code></a></td>
    <td>Get a SAST ruleset by name, including all its rules.</td>
</tr>
<tr>
    <td><a href="#list_multiple_rulesets"><CopyableCode code="list_multiple_rulesets" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Get rules for multiple rulesets in batch.</td>
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
    <td>The name of the ruleset to retrieve.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include_testing_rules">
    <td><CopyableCode code="include_testing_rules" /></td>
    <td><code>boolean</code></td>
    <td>When true, rules that are in testing mode are included in the response.</td>
</tr>
<tr id="parameter-include_tests">
    <td><CopyableCode code="include_tests" /></td>
    <td><code>boolean</code></td>
    <td>When true, test cases for each rule are included in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_static_analysis_ruleset"
    values={[
        { label: 'get_static_analysis_ruleset', value: 'get_static_analysis_ruleset' }
    ]}
>
<TabItem value="get_static_analysis_ruleset">

Get a SAST ruleset by name, including all its rules.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_rulesets
WHERE ruleset_name = '{{ ruleset_name }}' -- required
AND include_tests = '{{ include_tests }}'
AND include_testing_rules = '{{ include_testing_rules }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="list_multiple_rulesets"
    values={[
        { label: 'list_multiple_rulesets', value: 'list_multiple_rulesets' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="list_multiple_rulesets">

Get rules for multiple rulesets in batch.

```sql
INSERT INTO datadog.security.static_analysis_rulesets (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: static_analysis_rulesets
  props:
    - name: data
      description: |
        The primary data object in the get-multiple-rulesets request, containing request attributes and resource type.
      value:
        attributes:
          include_testing_rules: {{ include_testing_rules }}
          include_tests: {{ include_tests }}
          rulesets:
            - "{{ rulesets }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
