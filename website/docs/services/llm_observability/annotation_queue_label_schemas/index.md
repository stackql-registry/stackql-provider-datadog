--- 
title: annotation_queue_label_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_queue_label_schemas
  - llm_observability
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

Creates, updates, deletes, gets or lists an <code>annotation_queue_label_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotation_queue_label_schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.annotation_queue_label_schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_llmobs_annotation_queue_label_schema"
    values={[
        { label: 'get_llmobs_annotation_queue_label_schema', value: 'get_llmobs_annotation_queue_label_schema' }
    ]}
>
<TabItem value="get_llmobs_annotation_queue_label_schema">

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
    <td>Unique identifier of the annotation queue. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an annotation queue label schema.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability annotation queue. (queues) (example: queues)</td>
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
    <td><a href="#get_llmobs_annotation_queue_label_schema"><CopyableCode code="get_llmobs_annotation_queue_label_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a></td>
    <td></td>
    <td>Retrieve the label schema for a given annotation queue.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_annotation_queue_label_schema"><CopyableCode code="update_llmobs_annotation_queue_label_schema" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or replace the label schema for a given annotation queue.&lt;br /&gt;The label schema defines the labels annotators can apply to interactions in the queue.&lt;br /&gt;Label names must be unique within the queue and match the pattern `^&#91;a-zA-Z0-9_-&#93;+$`.&lt;br /&gt;Each label must have a valid type: score, categorical, boolean, or text.</td>
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
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Agent Observability annotation queue. (example: 00000000-0000-0000-0000-000000000001)</td>
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
    defaultValue="get_llmobs_annotation_queue_label_schema"
    values={[
        { label: 'get_llmobs_annotation_queue_label_schema', value: 'get_llmobs_annotation_queue_label_schema' }
    ]}
>
<TabItem value="get_llmobs_annotation_queue_label_schema">

Retrieve the label schema for a given annotation queue.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.annotation_queue_label_schemas
WHERE queue_id = '{{ queue_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_llmobs_annotation_queue_label_schema"
    values={[
        { label: 'update_llmobs_annotation_queue_label_schema', value: 'update_llmobs_annotation_queue_label_schema' }
    ]}
>
<TabItem value="update_llmobs_annotation_queue_label_schema">

Create or replace the label schema for a given annotation queue.&lt;br /&gt;The label schema defines the labels annotators can apply to interactions in the queue.&lt;br /&gt;Label names must be unique within the queue and match the pattern `^&#91;a-zA-Z0-9_-&#93;+$`.&lt;br /&gt;Each label must have a valid type: score, categorical, boolean, or text.

```sql
REPLACE datadog.llm_observability.annotation_queue_label_schemas
SET 
data = '{{ data }}'
WHERE 
queue_id = '{{ queue_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
