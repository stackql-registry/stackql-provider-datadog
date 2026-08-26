--- 
title: pipeline_order
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_order
  - logs
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

Creates, updates, deletes, gets or lists a <code>pipeline_order</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_order" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.pipeline_order" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logs_pipeline_order"
    values={[
        { label: 'get_logs_pipeline_order', value: 'get_logs_pipeline_order' }
    ]}
>
<TabItem value="get_logs_pipeline_order">

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
    <td><CopyableCode code="pipeline_ids" /></td>
    <td><code>array</code></td>
    <td>Ordered Array of <code>&lt;PIPELINE_ID&gt;</code> strings, the order of pipeline IDs in the array define the overall Pipelines order for Datadog.</td>
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
    <td><a href="#get_logs_pipeline_order"><CopyableCode code="get_logs_pipeline_order" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the current order of your pipelines.&lt;br /&gt;This endpoint takes no JSON arguments.</td>
</tr>
<tr>
    <td><a href="#update_logs_pipeline_order"><CopyableCode code="update_logs_pipeline_order" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-pipeline_ids"><code>pipeline_ids</code></a></td>
    <td></td>
    <td>Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change&lt;br /&gt;the structure and content of the data processed by other pipelines and their processors.&lt;br /&gt;&lt;br /&gt;**Note**: Using the `PUT` method updates your pipeline order by replacing your current order&lt;br /&gt;with the new one sent to your Datadog organization.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_logs_pipeline_order"
    values={[
        { label: 'get_logs_pipeline_order', value: 'get_logs_pipeline_order' }
    ]}
>
<TabItem value="get_logs_pipeline_order">

Get the current order of your pipelines.&lt;br /&gt;This endpoint takes no JSON arguments.

```sql
SELECT
pipeline_ids
FROM datadog.logs.pipeline_order
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_logs_pipeline_order"
    values={[
        { label: 'update_logs_pipeline_order', value: 'update_logs_pipeline_order' }
    ]}
>
<TabItem value="update_logs_pipeline_order">

Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change&lt;br /&gt;the structure and content of the data processed by other pipelines and their processors.&lt;br /&gt;&lt;br /&gt;**Note**: Using the `PUT` method updates your pipeline order by replacing your current order&lt;br /&gt;with the new one sent to your Datadog organization.

```sql
REPLACE datadog.logs.pipeline_order
SET 
pipeline_ids = '{{ pipeline_ids }}'
WHERE 
pipeline_ids = '{{ pipeline_ids }}' --required
RETURNING
pipeline_ids;
```
</TabItem>
</Tabs>
