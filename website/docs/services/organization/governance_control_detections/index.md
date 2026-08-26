--- 
title: governance_control_detections
hide_title: false
hide_table_of_contents: false
keywords:
  - governance_control_detections
  - organization
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

Creates, updates, deletes, gets or lists a <code>governance_control_detections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="governance_control_detections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.governance_control_detections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_governance_control_detections"
    values={[
        { label: 'list_governance_control_detections', value: 'list_governance_control_detections' }
    ]}
>
<TabItem value="list_governance_control_detections">

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
    <td>The unique identifier of the detection. (example: 3f9b2c1a-8d4e-4a6b-9c2f-1e7d5a0b3c4d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a governance control detection.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Governance control detection resource type. (governance_control_detection) (example: governance_control_detection)</td>
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
    <td><a href="#list_governance_control_detections"><CopyableCode code="list_governance_control_detections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detection_type"><code>detection_type</code></a></td>
    <td><a href="#parameter-filter[state]"><code>filter[state]</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a></td>
    <td>Retrieve the detections produced by the governance control with the given detection type.&lt;br /&gt;Results can be filtered by state and free-text query, sorted, and paginated.</td>
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
<tr id="parameter-detection_type">
    <td><CopyableCode code="detection_type" /></td>
    <td><code>string</code></td>
    <td>The detection type that identifies the control; for example, `unused_api_keys`. (example: unused_api_keys)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Restrict the results to detections matching the given free-text query. (example: production)</td>
</tr>
<tr id="parameter-filter[state]">
    <td><CopyableCode code="filter[state]" /></td>
    <td><code>string</code></td>
    <td>Restrict the results to detections in the given state. (example: active)</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The zero-based index of the page to return; the first page is 0. (example: 0)</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of detections to return per page. (example: 50)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of attributes to sort detections by. Prefix an attribute with `-` for descending order.  The attributes available for sorting are `id`, `created_at`, `assigned_to`, `detection_type`, `display_name`, `exception_at`, `mitigate_after`, `mitigated_at`, `priority`, `resource_id`, and `state`. Defaults to `created_at,-id`. (example: -created_at,-id)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_governance_control_detections"
    values={[
        { label: 'list_governance_control_detections', value: 'list_governance_control_detections' }
    ]}
>
<TabItem value="list_governance_control_detections">

Retrieve the detections produced by the governance control with the given detection type.&lt;br /&gt;Results can be filtered by state and free-text query, sorted, and paginated.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.governance_control_detections
WHERE detection_type = '{{ detection_type }}' -- required
AND filter[state] = '{{ filter[state] }}'
AND filter[query] = '{{ filter[query] }}'
AND sort = '{{ sort }}'
AND page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
;
```
</TabItem>
</Tabs>
