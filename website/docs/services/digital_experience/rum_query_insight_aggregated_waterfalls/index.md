--- 
title: rum_query_insight_aggregated_waterfalls
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_query_insight_aggregated_waterfalls
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

Creates, updates, deletes, gets or lists a <code>rum_query_insight_aggregated_waterfalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_query_insight_aggregated_waterfalls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_query_insight_aggregated_waterfalls" /></td></tr>
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
    <td><a href="#query_aggregated_waterfall"><CopyableCode code="query_aggregated_waterfall" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Get aggregated network resource waterfall data for a RUM view, sampled across multiple view instances.</td>
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
    defaultValue="query_aggregated_waterfall"
    values={[
        { label: 'query_aggregated_waterfall', value: 'query_aggregated_waterfall' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="query_aggregated_waterfall">

Get aggregated network resource waterfall data for a RUM view, sampled across multiple view instances.

```sql
INSERT INTO datadog.digital_experience.rum_query_insight_aggregated_waterfalls (
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
- name: rum_query_insight_aggregated_waterfalls
  props:
    - name: data
      description: |
        Data envelope for an aggregated waterfall request.
      value:
        attributes:
          application_id: "{{ application_id }}"
          criteria:
            max: {{ max }}
            metric: "{{ metric }}"
            min: {{ min }}
          filter: "{{ filter }}"
          from: {{ from }}
          include_global_appearance: {{ include_global_appearance }}
          sample_size: {{ sample_size }}
          to: {{ to }}
          view_name: "{{ view_name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
