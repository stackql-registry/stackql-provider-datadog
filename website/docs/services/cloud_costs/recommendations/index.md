--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#search_cost_recommendations"><CopyableCode code="search_cost_recommendations" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[token]"><code>page[token]</code></a></td>
    <td>List cost recommendations matching a filter, with pagination and sorting.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>string</code></td>
    <td>Number of results per page (1–10000).</td>
</tr>
<tr id="parameter-page[token]">
    <td><CopyableCode code="page[token]" /></td>
    <td><code>string</code></td>
    <td>Pagination token from a previous response.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="search_cost_recommendations"
    values={[
        { label: 'search_cost_recommendations', value: 'search_cost_recommendations' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="search_cost_recommendations">

List cost recommendations matching a filter, with pagination and sorting.

```sql
INSERT INTO datadog.cloud_costs.recommendations (
filter,
sort,
view,
page[size],
page[token]
)
SELECT 
'{{ filter }}',
'{{ sort }}',
'{{ view }}',
'{{ page[size] }}',
'{{ page[token] }}'
RETURNING
data,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recommendations
  props:
    - name: filter
      value: "{{ filter }}"
      description: |
        Filter expression applied to the recommendations.
    - name: sort
      description: |
        Ordered list of sort clauses applied to the result set.
      value:
        - expression: "{{ expression }}"
          order: "{{ order }}"
    - name: view
      value: "{{ view }}"
      description: |
        Active view name (for example, \`active\`, \`dismissed\`, \`open\`, \`in-progress\`, or \`completed\`).
    - name: page[size]
      value: "{{ page[size] }}"
      description: Number of results per page (1–10000).
      description: Number of results per page (1–10000).
    - name: page[token]
      value: "{{ page[token] }}"
      description: Pagination token from a previous response.
      description: Pagination token from a previous response.
`}</CodeBlock>

</TabItem>
</Tabs>
