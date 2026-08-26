--- 
title: arbitrary_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - arbitrary_rules
  - cloud_costs
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

Creates, updates, deletes, gets or lists an <code>arbitrary_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="arbitrary_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.arbitrary_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_allocation_rule"
    values={[
        { label: 'get_custom_allocation_rule', value: 'get_custom_allocation_rule' },
        { label: 'list_custom_allocation_rules', value: 'list_custom_allocation_rules' }
    ]}
>
<TabItem value="get_custom_allocation_rule">

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
    <td>The `ArbitraryRuleResponseData` `id`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of `ArbitraryRuleResponseDataAttributes` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Arbitrary rule resource type. (arbitrary_rule) (default: arbitrary_rule, example: arbitrary_rule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_allocation_rules">

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
    <td>The `ArbitraryRuleResponseData` `id`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of `ArbitraryRuleResponseDataAttributes` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Arbitrary rule resource type. (arbitrary_rule) (default: arbitrary_rule, example: arbitrary_rule)</td>
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
    <td><a href="#get_custom_allocation_rule"><CopyableCode code="get_custom_allocation_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Get a specific custom allocation rule - Retrieve a specific custom allocation rule by its ID</td>
</tr>
<tr>
    <td><a href="#list_custom_allocation_rules"><CopyableCode code="list_custom_allocation_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all custom allocation rules - Retrieve a list of all custom allocation rules for the organization</td>
</tr>
<tr>
    <td><a href="#create_custom_allocation_rule"><CopyableCode code="create_custom_allocation_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new custom allocation rule with the specified filters and allocation strategy.&lt;br /&gt;&lt;br /&gt;**Strategy Methods:**&lt;br /&gt;- **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.&lt;br /&gt;- **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.&lt;br /&gt;- **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).&lt;br /&gt;&lt;br /&gt;**Filter Conditions:**&lt;br /&gt;- Use **value** for single-value conditions: "is", "is not", "contains", "=", "!=", "like", "not like"&lt;br /&gt;- Use **values** for multi-value conditions: "in", "not in"&lt;br /&gt;- Cannot use both value and values simultaneously.&lt;br /&gt;&lt;br /&gt;**Supported operators**: is, is not, contains, in, not in, =, !=, like, not like</td>
</tr>
<tr>
    <td><a href="#update_custom_allocation_rule"><CopyableCode code="update_custom_allocation_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Update an existing custom allocation rule with new filters and allocation strategy.&lt;br /&gt;&lt;br /&gt;**Strategy Methods:**&lt;br /&gt;- **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.&lt;br /&gt;- **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.&lt;br /&gt;- **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).&lt;br /&gt;- **USAGE_METRIC**: Allocates based on usage metrics (implementation varies).&lt;br /&gt;&lt;br /&gt;**Filter Conditions:**&lt;br /&gt;- Use **value** for single-value conditions: "is", "is not", "contains", "=", "!=", "like", "not like"&lt;br /&gt;- Use **values** for multi-value conditions: "in", "not in"&lt;br /&gt;- Cannot use both value and values simultaneously.&lt;br /&gt;&lt;br /&gt;**Supported operators**: is, is not, contains, in, not in, =, !=, like, not like</td>
</tr>
<tr>
    <td><a href="#delete_custom_allocation_rule"><CopyableCode code="delete_custom_allocation_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Delete a custom allocation rule - Delete an existing custom allocation rule by its ID</td>
</tr>
<tr>
    <td><a href="#reorder_custom_allocation_rules"><CopyableCode code="reorder_custom_allocation_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Reorder custom allocation rules - Change the execution order of custom allocation rules.&lt;br /&gt;&lt;br /&gt;**Important**: You must provide the **complete list** of all rule IDs in the desired execution order. The API will reorder ALL rules according to the provided sequence.&lt;br /&gt;&lt;br /&gt;Rules are executed in the order specified, with lower indices (earlier in the array) having higher priority.&lt;br /&gt;&lt;br /&gt;**Example**: If you have rules with IDs &#91;123, 456, 789&#93; and want to change order from 123→456→789 to 456→123→789, send: &#91;&#123;"id": "456"&#125;, &#123;"id": "123"&#125;, &#123;"id": "789"&#125;&#93;</td>
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
    <td><code>integer (int64)</code></td>
    <td>The unique identifier of the custom allocation rule</td>
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
    defaultValue="get_custom_allocation_rule"
    values={[
        { label: 'get_custom_allocation_rule', value: 'get_custom_allocation_rule' },
        { label: 'list_custom_allocation_rules', value: 'list_custom_allocation_rules' }
    ]}
>
<TabItem value="get_custom_allocation_rule">

Get a specific custom allocation rule - Retrieve a specific custom allocation rule by its ID

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.arbitrary_rules
WHERE rule_id = '{{ rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_allocation_rules">

List all custom allocation rules - Retrieve a list of all custom allocation rules for the organization

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.arbitrary_rules
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_allocation_rule"
    values={[
        { label: 'create_custom_allocation_rule', value: 'create_custom_allocation_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_allocation_rule">

Create a new custom allocation rule with the specified filters and allocation strategy.&lt;br /&gt;&lt;br /&gt;**Strategy Methods:**&lt;br /&gt;- **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.&lt;br /&gt;- **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.&lt;br /&gt;- **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).&lt;br /&gt;&lt;br /&gt;**Filter Conditions:**&lt;br /&gt;- Use **value** for single-value conditions: "is", "is not", "contains", "=", "!=", "like", "not like"&lt;br /&gt;- Use **values** for multi-value conditions: "in", "not in"&lt;br /&gt;- Cannot use both value and values simultaneously.&lt;br /&gt;&lt;br /&gt;**Supported operators**: is, is not, contains, in, not in, =, !=, like, not like

```sql
INSERT INTO datadog.cloud_costs.arbitrary_rules (
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
- name: arbitrary_rules
  props:
    - name: data
      description: |
        The definition of \`ArbitraryCostUpsertRequestData\` object.
      value:
        attributes:
          costs_to_allocate:
            - condition: "{{ condition }}"
              tag: "{{ tag }}"
              value: "{{ value }}"
              values: "{{ values }}"
          enabled: {{ enabled }}
          order_id: {{ order_id }}
          provider:
            - "{{ provider }}"
          rejected: {{ rejected }}
          rule_name: "{{ rule_name }}"
          strategy:
            allocated_by:
              - allocated_tags: "{{ allocated_tags }}"
                percentage: {{ percentage }}
            allocated_by_filters:
              - condition: "{{ condition }}"
                tag: "{{ tag }}"
                value: "{{ value }}"
                values: "{{ values }}"
            allocated_by_tag_keys:
              - "{{ allocated_by_tag_keys }}"
            based_on_costs:
              - condition: "{{ condition }}"
                tag: "{{ tag }}"
                value: "{{ value }}"
                values: "{{ values }}"
            based_on_timeseries: "{{ based_on_timeseries }}"
            evaluate_grouped_by_filters:
              - condition: "{{ condition }}"
                tag: "{{ tag }}"
                value: "{{ value }}"
                values: "{{ values }}"
            evaluate_grouped_by_tag_keys:
              - "{{ evaluate_grouped_by_tag_keys }}"
            granularity: "{{ granularity }}"
            method: "{{ method }}"
          type: "{{ type }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_allocation_rule"
    values={[
        { label: 'update_custom_allocation_rule', value: 'update_custom_allocation_rule' }
    ]}
>
<TabItem value="update_custom_allocation_rule">

Update an existing custom allocation rule with new filters and allocation strategy.&lt;br /&gt;&lt;br /&gt;**Strategy Methods:**&lt;br /&gt;- **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.&lt;br /&gt;- **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.&lt;br /&gt;- **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).&lt;br /&gt;- **USAGE_METRIC**: Allocates based on usage metrics (implementation varies).&lt;br /&gt;&lt;br /&gt;**Filter Conditions:**&lt;br /&gt;- Use **value** for single-value conditions: "is", "is not", "contains", "=", "!=", "like", "not like"&lt;br /&gt;- Use **values** for multi-value conditions: "in", "not in"&lt;br /&gt;- Cannot use both value and values simultaneously.&lt;br /&gt;&lt;br /&gt;**Supported operators**: is, is not, contains, in, not in, =, !=, like, not like

```sql
UPDATE datadog.cloud_costs.arbitrary_rules
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
    defaultValue="delete_custom_allocation_rule"
    values={[
        { label: 'delete_custom_allocation_rule', value: 'delete_custom_allocation_rule' }
    ]}
>
<TabItem value="delete_custom_allocation_rule">

Delete a custom allocation rule - Delete an existing custom allocation rule by its ID

```sql
DELETE FROM datadog.cloud_costs.arbitrary_rules
WHERE rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reorder_custom_allocation_rules"
    values={[
        { label: 'reorder_custom_allocation_rules', value: 'reorder_custom_allocation_rules' }
    ]}
>
<TabItem value="reorder_custom_allocation_rules">

Reorder custom allocation rules - Change the execution order of custom allocation rules.&lt;br /&gt;&lt;br /&gt;**Important**: You must provide the **complete list** of all rule IDs in the desired execution order. The API will reorder ALL rules according to the provided sequence.&lt;br /&gt;&lt;br /&gt;Rules are executed in the order specified, with lower indices (earlier in the array) having higher priority.&lt;br /&gt;&lt;br /&gt;**Example**: If you have rules with IDs &#91;123, 456, 789&#93; and want to change order from 123→456→789 to 456→123→789, send: &#91;&#123;"id": "456"&#125;, &#123;"id": "123"&#125;, &#123;"id": "789"&#125;&#93;

```sql
EXEC datadog.cloud_costs.arbitrary_rules.reorder_custom_allocation_rules 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
