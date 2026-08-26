--- 
title: scorecard_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - scorecard_rules
  - apm
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

Creates, updates, deletes, gets or lists a <code>scorecard_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scorecard_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.apm.scorecard_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_scorecard_rules"
    values={[
        { label: 'list_scorecard_rules', value: 'list_scorecard_rules' }
    ]}
>
<TabItem value="list_scorecard_rules">

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
    <td>The unique ID for a scorecard rule. (example: q8MQxk8TCqrHnWkx)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Details of a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Scorecard create rule response relationship.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for scorecard rules. (rule) (default: rule, example: rule)</td>
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
    <td><a href="#list_scorecard_rules"><CopyableCode code="list_scorecard_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[rule][id]"><code>filter[rule][id]</code></a>, <a href="#parameter-filter[rule][enabled]"><code>filter[rule][enabled]</code></a>, <a href="#parameter-filter[rule][custom]"><code>filter[rule][custom]</code></a>, <a href="#parameter-filter[rule][name]"><code>filter[rule][name]</code></a>, <a href="#parameter-filter[rule][description]"><code>filter[rule][description]</code></a>, <a href="#parameter-fields[rule]"><code>fields[rule]</code></a>, <a href="#parameter-fields[scorecard]"><code>fields[scorecard]</code></a></td>
    <td>Fetch all rules.</td>
</tr>
<tr>
    <td><a href="#create_scorecard_rule"><CopyableCode code="create_scorecard_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a new rule.</td>
</tr>
<tr>
    <td><a href="#update_scorecard_rule"><CopyableCode code="update_scorecard_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Updates an existing rule.</td>
</tr>
<tr>
    <td><a href="#delete_scorecard_rule"><CopyableCode code="delete_scorecard_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Deletes a single rule.</td>
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
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-fields[rule]">
    <td><CopyableCode code="fields[rule]" /></td>
    <td><code>string</code></td>
    <td>Return only specific fields in the response for rule attributes.</td>
</tr>
<tr id="parameter-fields[scorecard]">
    <td><CopyableCode code="fields[scorecard]" /></td>
    <td><code>string</code></td>
    <td>Return only specific fields in the included response for scorecard attributes.</td>
</tr>
<tr id="parameter-filter[rule][custom]">
    <td><CopyableCode code="filter[rule][custom]" /></td>
    <td><code>boolean</code></td>
    <td>Filter for custom rules only.</td>
</tr>
<tr id="parameter-filter[rule][description]">
    <td><CopyableCode code="filter[rule][description]" /></td>
    <td><code>string</code></td>
    <td>Filter rules on the rule description.</td>
</tr>
<tr id="parameter-filter[rule][enabled]">
    <td><CopyableCode code="filter[rule][enabled]" /></td>
    <td><code>boolean</code></td>
    <td>Filter for enabled rules only.</td>
</tr>
<tr id="parameter-filter[rule][id]">
    <td><CopyableCode code="filter[rule][id]" /></td>
    <td><code>string</code></td>
    <td>Filter the rules on a rule ID.</td>
</tr>
<tr id="parameter-filter[rule][name]">
    <td><CopyableCode code="filter[rule][name]" /></td>
    <td><code>string</code></td>
    <td>Filter rules on the rule name.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Include related scorecard details in the response.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific offset to use as the beginning of the returned page.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items to return per page. The maximum allowed value is 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_scorecard_rules"
    values={[
        { label: 'list_scorecard_rules', value: 'list_scorecard_rules' }
    ]}
>
<TabItem value="list_scorecard_rules">

Fetch all rules.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.apm.scorecard_rules
WHERE page[size] = '{{ page[size] }}'
AND page[offset] = '{{ page[offset] }}'
AND include = '{{ include }}'
AND filter[rule][id] = '{{ filter[rule][id] }}'
AND filter[rule][enabled] = '{{ filter[rule][enabled] }}'
AND filter[rule][custom] = '{{ filter[rule][custom] }}'
AND filter[rule][name] = '{{ filter[rule][name] }}'
AND filter[rule][description] = '{{ filter[rule][description] }}'
AND fields[rule] = '{{ fields[rule] }}'
AND fields[scorecard] = '{{ fields[scorecard] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scorecard_rule"
    values={[
        { label: 'create_scorecard_rule', value: 'create_scorecard_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scorecard_rule">

Creates a new rule.

```sql
INSERT INTO datadog.apm.scorecard_rules (
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
- name: scorecard_rules
  props:
    - name: data
      description: |
        Scorecard create rule request data.
      value:
        attributes:
          description: "{{ description }}"
          enabled: {{ enabled }}
          level: {{ level }}
          name: "{{ name }}"
          owner: "{{ owner }}"
          scope_query: "{{ scope_query }}"
          scorecard_name: "{{ scorecard_name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_scorecard_rule"
    values={[
        { label: 'update_scorecard_rule', value: 'update_scorecard_rule' }
    ]}
>
<TabItem value="update_scorecard_rule">

Updates an existing rule.

```sql
REPLACE datadog.apm.scorecard_rules
SET 
data = '{{ data }}'
WHERE 
rule_id = '{{ rule_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scorecard_rule"
    values={[
        { label: 'delete_scorecard_rule', value: 'delete_scorecard_rule' }
    ]}
>
<TabItem value="delete_scorecard_rule">

Deletes a single rule.

```sql
DELETE FROM datadog.apm.scorecard_rules
WHERE rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>
