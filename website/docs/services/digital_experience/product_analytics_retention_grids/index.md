--- 
title: product_analytics_retention_grids
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_retention_grids
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>product_analytics_retention_grids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_retention_grids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_retention_grids" /></td></tr>
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
    <td><a href="#query_product_analytics_retention_grid"><CopyableCode code="query_product_analytics_retention_grid" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute a retention grid, showing how much of each cohort came back over each subsequent period.&lt;br /&gt;Rows are cohorts, columns are return periods, and each cell holds the count and rate of entities that returned.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="query_product_analytics_retention_grid"
    values={[
        { label: 'query_product_analytics_retention_grid', value: 'query_product_analytics_retention_grid' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="query_product_analytics_retention_grid">

Compute a retention grid, showing how much of each cohort came back over each subsequent period.&lt;br /&gt;Rows are cohorts, columns are return periods, and each cell holds the count and rate of entities that returned.

```sql
INSERT INTO datadog.digital_experience.product_analytics_retention_grids (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: product_analytics_retention_grids
  props:
    - name: data
      description: |
        The single JSON:API resource carrying a retention grid query. Its attributes hold the time
        window to query and the cohort and return criteria that define the grid.
      value:
        attributes:
          exclude_anonymous_traffic: {{ exclude_anonymous_traffic }}
          from: {{ from }}
          query:
            computation_scope:
              target:
                type: "{{ type }}"
                value: {{ value }}
              type: "{{ type }}"
              cohort_target:
                type: "{{ type }}"
                value: {{ value }}
              return_period_target:
                type: "{{ type }}"
                value: {{ value }}
            compute:
              aggregation: "{{ aggregation }}"
              metric: "{{ metric }}"
            group_by:
              - facet: "{{ facet }}"
                limit: {{ limit }}
                should_exclude_missing: {{ should_exclude_missing }}
                sort:
                  aggregation: "{{ aggregation }}"
                  metric: "{{ metric }}"
                  order: "{{ order }}"
                source: "{{ source }}"
                target: "{{ target }}"
            search:
              cohort_criteria:
                base_query: "{{ base_query }}"
                time_interval: "{{ time_interval }}"
              filters:
                audience_filters: "{{ audience_filters }}"
                string_filter: "{{ string_filter }}"
              retention_entity: "{{ retention_entity }}"
              return_condition: "{{ return_condition }}"
              return_criteria:
                base_query: "{{ base_query }}"
                time_interval: "{{ time_interval }}"
          to: {{ to }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
