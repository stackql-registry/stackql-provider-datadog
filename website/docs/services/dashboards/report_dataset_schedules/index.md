--- 
title: report_dataset_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - report_dataset_schedules
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>report_dataset_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_dataset_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.report_dataset_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dataset_report_schedules"
    values={[
        { label: 'list_dataset_report_schedules', value: 'list_dataset_report_schedules' }
    ]}
>
<TabItem value="list_dataset_report_schedules">

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
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the dataset report schedule. (example: e1234567-1234-1234-1234-123456789012)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The configuration and derived state of a report schedule for a published dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for the report schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for report schedules. (schedule) (example: schedule)</td>
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
    <td><a href="#list_dataset_report_schedules"><CopyableCode code="list_dataset_report_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a></td>
    <td></td>
    <td>Retrieve all report schedules for a given published dataset.&lt;br /&gt;Returns report schedules belonging to the authenticated user's organization that target the specified dataset.&lt;br /&gt;Requires the `generate_log_reports` or `manage_log_reports` permission.</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the published dataset to retrieve report schedules for. (example: MW5vdGVib29rX2NlbGw6ZDI0ZTM2MWMtZDFlNC00NDYwLWIyOWUtNTg3YTczMzA3MDFm)</td>
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
    defaultValue="list_dataset_report_schedules"
    values={[
        { label: 'list_dataset_report_schedules', value: 'list_dataset_report_schedules' }
    ]}
>
<TabItem value="list_dataset_report_schedules">

Retrieve all report schedules for a given published dataset.&lt;br /&gt;Returns report schedules belonging to the authenticated user's organization that target the specified dataset.&lt;br /&gt;Requires the `generate_log_reports` or `manage_log_reports` permission.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.report_dataset_schedules
WHERE dataset_id = '{{ dataset_id }}' -- required
;
```
</TabItem>
</Tabs>
