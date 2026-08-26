--- 
title: governance_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - governance_controls
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

Creates, updates, deletes, gets or lists a <code>governance_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="governance_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.governance_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_governance_control"
    values={[
        { label: 'get_governance_control', value: 'get_governance_control' },
        { label: 'list_governance_controls', value: 'list_governance_controls' }
    ]}
>
<TabItem value="get_governance_control">

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
    <td>The detection type that uniquely identifies the control. (example: unused_api_keys)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a governance control.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for a governance control. (governance_control) (example: governance_control)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_governance_controls">

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
    <td>The detection type that uniquely identifies the control. (example: unused_api_keys)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a governance control.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for a governance control. (governance_control) (example: governance_control)</td>
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
    <td><a href="#get_governance_control"><CopyableCode code="get_governance_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detection_type"><code>detection_type</code></a></td>
    <td></td>
    <td>Retrieve a single governance control by its detection type, including the organization's current&lt;br /&gt;detection, notification, and mitigation configuration and detection counts.</td>
</tr>
<tr>
    <td><a href="#list_governance_controls"><CopyableCode code="list_governance_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve the list of governance controls configured for the organization. Each control pairs a&lt;br /&gt;detection definition with the organization's current detection, notification, and mitigation&lt;br /&gt;configuration, along with counts of active and mitigated detections.</td>
</tr>
<tr>
    <td><a href="#update_governance_control"><CopyableCode code="update_governance_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detection_type"><code>detection_type</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the detection, notification, and mitigation configuration of a governance control. Only&lt;br /&gt;the attributes present in the request are modified. Changing the mitigation type or its&lt;br /&gt;parameters may require additional permissions.</td>
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
    <td>The detection type that identifies the control, for example `unused_api_keys`. (example: unused_api_keys)</td>
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
    defaultValue="get_governance_control"
    values={[
        { label: 'get_governance_control', value: 'get_governance_control' },
        { label: 'list_governance_controls', value: 'list_governance_controls' }
    ]}
>
<TabItem value="get_governance_control">

Retrieve a single governance control by its detection type, including the organization's current&lt;br /&gt;detection, notification, and mitigation configuration and detection counts.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.governance_controls
WHERE detection_type = '{{ detection_type }}' -- required
;
```
</TabItem>
<TabItem value="list_governance_controls">

Retrieve the list of governance controls configured for the organization. Each control pairs a&lt;br /&gt;detection definition with the organization's current detection, notification, and mitigation&lt;br /&gt;configuration, along with counts of active and mitigated detections.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.governance_controls
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_governance_control"
    values={[
        { label: 'update_governance_control', value: 'update_governance_control' }
    ]}
>
<TabItem value="update_governance_control">

Update the detection, notification, and mitigation configuration of a governance control. Only&lt;br /&gt;the attributes present in the request are modified. Changing the mitigation type or its&lt;br /&gt;parameters may require additional permissions.

```sql
UPDATE datadog.organization.governance_controls
SET 
data = '{{ data }}'
WHERE 
detection_type = '{{ detection_type }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
