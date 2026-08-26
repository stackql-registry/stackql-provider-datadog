--- 
title: product_analytics_sankeys
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_sankeys
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

Creates, updates, deletes, gets or lists a <code>product_analytics_sankeys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_sankeys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_sankeys" /></td></tr>
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
    <td><a href="#query_product_analytics_sankey"><CopyableCode code="query_product_analytics_sankey" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute a Sankey diagram of how sessions flow between the values of two facets,&lt;br /&gt;showing where users continue and where they drop off at each step.</td>
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
    defaultValue="query_product_analytics_sankey"
    values={[
        { label: 'query_product_analytics_sankey', value: 'query_product_analytics_sankey' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="query_product_analytics_sankey">

Compute a Sankey diagram of how sessions flow between the values of two facets,&lt;br /&gt;showing where users continue and where they drop off at each step.

```sql
INSERT INTO datadog.digital_experience.product_analytics_sankeys (
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
- name: product_analytics_sankeys
  props:
    - name: data
      description: |
        The single JSON:API resource carrying a Sankey query. Its attributes hold the time window to
        query, the search that selects the sessions, and the definition of the diagram to build.
      value:
        attributes:
          definition:
            entries_per_step: {{ entries_per_step }}
            number_of_steps: {{ number_of_steps }}
            source: "{{ source }}"
            target: "{{ target }}"
          search:
            audience_filters:
              accounts:
                - name: "{{ name }}"
                  query: "{{ query }}"
              formula: "{{ formula }}"
              segments:
                - name: "{{ name }}"
                  segment_id: "{{ segment_id }}"
              users:
                - name: "{{ name }}"
                  query: "{{ query }}"
            join_keys:
              primary: "{{ primary }}"
              secondary:
                - "{{ secondary }}"
            query: "{{ query }}"
          time:
            from: {{ from }}
            to: {{ to }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
