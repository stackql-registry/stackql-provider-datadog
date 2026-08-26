--- 
title: product_analytics_journey_funnels
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_journey_funnels
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

Creates, updates, deletes, gets or lists a <code>product_analytics_journey_funnels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_journey_funnels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_journey_funnels" /></td></tr>
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
    <td><a href="#query_product_analytics_journey_funnel"><CopyableCode code="query_product_analytics_journey_funnel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Compute a funnel over an ordered sequence of Product Analytics events.&lt;br /&gt;Returns the per-step conversion counts, conversion rates, and elapsed times,&lt;br /&gt;optionally segmented by group-by facets.</td>
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
    defaultValue="query_product_analytics_journey_funnel"
    values={[
        { label: 'query_product_analytics_journey_funnel', value: 'query_product_analytics_journey_funnel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="query_product_analytics_journey_funnel">

Compute a funnel over an ordered sequence of Product Analytics events.&lt;br /&gt;Returns the per-step conversion counts, conversion rates, and elapsed times,&lt;br /&gt;optionally segmented by group-by facets.

```sql
INSERT INTO datadog.digital_experience.product_analytics_journey_funnels (
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
- name: product_analytics_journey_funnels
  props:
    - name: data
      description: |
        The single JSON:API resource carrying a funnel query. Its attributes hold the time window to
        query and the journey whose step-to-step conversion should be measured.
      value:
        attributes:
          exclude_anonymous_traffic: {{ exclude_anonymous_traffic }}
          from: {{ from }}
          query:
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
                target:
                  type: "{{ type }}"
                  value: "{{ value }}"
                  end: "{{ end }}"
                  start: "{{ start }}"
                value_filters: "{{ value_filters }}"
            search:
              expression: "{{ expression }}"
              filters:
                audience_filters: "{{ audience_filters }}"
                graph_filters: "{{ graph_filters }}"
                string_filter: "{{ string_filter }}"
              join_keys:
                primary: "{{ primary }}"
                secondary: "{{ secondary }}"
              node_objects: "{{ node_objects }}"
          to: {{ to }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
