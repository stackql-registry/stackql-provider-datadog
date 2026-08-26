--- 
title: governance_detections
hide_title: false
hide_table_of_contents: false
keywords:
  - governance_detections
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

Creates, updates, deletes, gets or lists a <code>governance_detections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="governance_detections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.governance_detections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_governance_detection"
    values={[
        { label: 'get_governance_detection', value: 'get_governance_detection' }
    ]}
>
<TabItem value="get_governance_detection">

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
    <td><a href="#get_governance_detection"><CopyableCode code="get_governance_detection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detection_id"><code>detection_id</code></a></td>
    <td></td>
    <td>Retrieve a single governance detection by its unique identifier.</td>
</tr>
<tr>
    <td><a href="#update_governance_detection"><CopyableCode code="update_governance_detection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detection_id"><code>detection_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a governance detection by its unique identifier. Only the attributes present in the&lt;br /&gt;request are modified, allowing a detection to be acknowledged as an exception, reopened,&lt;br /&gt;reassigned, or deferred for mitigation.</td>
</tr>
<tr>
    <td><a href="#mitigate_governance_detections"><CopyableCode code="mitigate_governance_detections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Apply a mitigation to a set of governance detections of a given detection type. When the&lt;br /&gt;mitigation type is omitted, the control's configured mitigation is used. The request is&lt;br /&gt;accepted for asynchronous processing.</td>
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
<tr id="parameter-detection_id">
    <td><CopyableCode code="detection_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the detection. (example: 3f9b2c1a-8d4e-4a6b-9c2f-1e7d5a0b3c4d)</td>
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
    defaultValue="get_governance_detection"
    values={[
        { label: 'get_governance_detection', value: 'get_governance_detection' }
    ]}
>
<TabItem value="get_governance_detection">

Retrieve a single governance detection by its unique identifier.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.governance_detections
WHERE detection_id = '{{ detection_id }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_governance_detection"
    values={[
        { label: 'update_governance_detection', value: 'update_governance_detection' }
    ]}
>
<TabItem value="update_governance_detection">

Update a governance detection by its unique identifier. Only the attributes present in the&lt;br /&gt;request are modified, allowing a detection to be acknowledged as an exception, reopened,&lt;br /&gt;reassigned, or deferred for mitigation.

```sql
UPDATE datadog.organization.governance_detections
SET 
data = '{{ data }}'
WHERE 
detection_id = '{{ detection_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="mitigate_governance_detections"
    values={[
        { label: 'mitigate_governance_detections', value: 'mitigate_governance_detections' }
    ]}
>
<TabItem value="mitigate_governance_detections">

Apply a mitigation to a set of governance detections of a given detection type. When the&lt;br /&gt;mitigation type is omitted, the control's configured mitigation is used. The request is&lt;br /&gt;accepted for asynchronous processing.

```sql
EXEC datadog.organization.governance_detections.mitigate_governance_detections 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
