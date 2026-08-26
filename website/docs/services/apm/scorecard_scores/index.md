--- 
title: scorecard_scores
hide_title: false
hide_table_of_contents: false
keywords:
  - scorecard_scores
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

Creates, updates, deletes, gets or lists a <code>scorecard_scores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scorecard_scores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.apm.scorecard_scores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_scorecard_scores"
    values={[
        { label: 'list_scorecard_scores', value: 'list_scorecard_scores' }
    ]}
>
<TabItem value="list_scorecard_scores">

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
    <td>The ID of the entity or resource being scored. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a scorecard score.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a scorecard score, depending on the aggregation type.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API resource type. (score) (default: score, example: score)</td>
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
    <td><a href="#list_scorecard_scores"><CopyableCode code="list_scorecard_scores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aggregation"><code>aggregation</code></a></td>
    <td><a href="#parameter-filter[rule][id]"><code>filter[rule][id]</code></a>, <a href="#parameter-filter[rule][name]"><code>filter[rule][name]</code></a>, <a href="#parameter-filter[rule][level]"><code>filter[rule][level]</code></a>, <a href="#parameter-filter[rule][scorecard_id]"><code>filter[rule][scorecard_id]</code></a>, <a href="#parameter-filter[rule][is_custom]"><code>filter[rule][is_custom]</code></a>, <a href="#parameter-filter[rule][is_enabled]"><code>filter[rule][is_enabled]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>Returns a list of scorecard scores for each aggregation type, with score breakdowns.</td>
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
<tr id="parameter-aggregation">
    <td><CopyableCode code="aggregation" /></td>
    <td><code>string</code></td>
    <td>The type of scores being requested.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[rule][id]">
    <td><CopyableCode code="filter[rule][id]" /></td>
    <td><code>string</code></td>
    <td>Filter scores by rule ID(s), comma-separated.</td>
</tr>
<tr id="parameter-filter[rule][is_custom]">
    <td><CopyableCode code="filter[rule][is_custom]" /></td>
    <td><code>boolean</code></td>
    <td>Filter scores to show only custom rules.</td>
</tr>
<tr id="parameter-filter[rule][is_enabled]">
    <td><CopyableCode code="filter[rule][is_enabled]" /></td>
    <td><code>boolean</code></td>
    <td>Filter scores to show only enabled rules.</td>
</tr>
<tr id="parameter-filter[rule][level]">
    <td><CopyableCode code="filter[rule][level]" /></td>
    <td><code>string</code></td>
    <td>Filter scores by rule level(s), comma-separated.</td>
</tr>
<tr id="parameter-filter[rule][name]">
    <td><CopyableCode code="filter[rule][name]" /></td>
    <td><code>string</code></td>
    <td>Filter scores by rule name.</td>
</tr>
<tr id="parameter-filter[rule][scorecard_id]">
    <td><CopyableCode code="filter[rule][scorecard_id]" /></td>
    <td><code>string</code></td>
    <td>Filter scores by scorecard ID(s), comma-separated.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of scores to return. Max is 1000.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset for pagination.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort scores by field. Use a hyphen prefix for descending order. Options: score, numerator, denominator, total_pass, total_fail, total_skip, total_no_data.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_scorecard_scores"
    values={[
        { label: 'list_scorecard_scores', value: 'list_scorecard_scores' }
    ]}
>
<TabItem value="list_scorecard_scores">

Returns a list of scorecard scores for each aggregation type, with score breakdowns.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.apm.scorecard_scores
WHERE aggregation = '{{ aggregation }}' -- required
AND filter[rule][id] = '{{ filter[rule][id] }}'
AND filter[rule][name] = '{{ filter[rule][name] }}'
AND filter[rule][level] = '{{ filter[rule][level] }}'
AND filter[rule][scorecard_id] = '{{ filter[rule][scorecard_id] }}'
AND filter[rule][is_custom] = '{{ filter[rule][is_custom] }}'
AND filter[rule][is_enabled] = '{{ filter[rule][is_enabled] }}'
AND sort = '{{ sort }}'
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>
