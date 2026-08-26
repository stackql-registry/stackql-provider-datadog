--- 
title: annotation_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_queues
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

Creates, updates, deletes, gets or lists an <code>annotation_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotation_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.annotation_queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_annotation_queues"
    values={[
        { label: 'list_llmobs_annotation_queues', value: 'list_llmobs_annotation_queues' }
    ]}
>
<TabItem value="list_llmobs_annotation_queues">

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
    <td>Attributes of an Agent Observability annotation queue.</td>
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
    <td><a href="#list_llmobs_annotation_queues"><CopyableCode code="list_llmobs_annotation_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-queue_ids"><code>queue_ids</code></a></td>
    <td>List annotation queues. Optionally filter by project ID or queue IDs. These parameters are mutually exclusive.&lt;br /&gt;If neither is provided, all queues in the organization are returned.</td>
</tr>
<tr>
    <td><a href="#create_llmobs_annotation_queue"><CopyableCode code="create_llmobs_annotation_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an annotation queue. The `name` and `project_id` fields are required.&lt;br /&gt;An optional `annotation_schema` can be provided to define the labels for the queue.&lt;br /&gt;Fields such as `created_by`, `owned_by`, `created_at`, `modified_by`,&lt;br /&gt;and `modified_at` are inferred by the backend.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_annotation_queue"><CopyableCode code="update_llmobs_annotation_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update an annotation queue. The `name`, `description`, and `annotation_schema` fields can be updated.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_annotation_queue"><CopyableCode code="delete_llmobs_annotation_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a></td>
    <td></td>
    <td>Delete an annotation queue by its ID.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Filter annotation queues by project ID. Cannot be used together with `queueIds`. (wire: projectId)</td>
</tr>
<tr id="parameter-queue_ids">
    <td><CopyableCode code="queue_ids" /></td>
    <td><code>array</code></td>
    <td>Filter annotation queues by queue IDs (comma-separated). Cannot be used together with `projectId`. (wire: queueIds)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_llmobs_annotation_queues"
    values={[
        { label: 'list_llmobs_annotation_queues', value: 'list_llmobs_annotation_queues' }
    ]}
>
<TabItem value="list_llmobs_annotation_queues">

List annotation queues. Optionally filter by project ID or queue IDs. These parameters are mutually exclusive.&lt;br /&gt;If neither is provided, all queues in the organization are returned.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.annotation_queues
WHERE project_id = '{{ project_id }}'
AND queue_ids = '{{ queue_ids }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_annotation_queue"
    values={[
        { label: 'create_llmobs_annotation_queue', value: 'create_llmobs_annotation_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_annotation_queue">

Create an annotation queue. The `name` and `project_id` fields are required.&lt;br /&gt;An optional `annotation_schema` can be provided to define the labels for the queue.&lt;br /&gt;Fields such as `created_by`, `owned_by`, `created_at`, `modified_by`,&lt;br /&gt;and `modified_at` are inferred by the backend.

```sql
INSERT INTO datadog.llm_observability.annotation_queues (
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
- name: annotation_queues
  props:
    - name: data
      description: |
        Data object for creating an Agent Observability annotation queue.
      value:
        attributes:
          annotation_schema:
            label_schemas:
              - description: "{{ description }}"
                has_assessment: {{ has_assessment }}
                has_reasoning: {{ has_reasoning }}
                id: "{{ id }}"
                is_assessment: {{ is_assessment }}
                is_integer: {{ is_integer }}
                is_required: {{ is_required }}
                max: {{ max }}
                min: {{ min }}
                name: "{{ name }}"
                type: "{{ type }}"
                values: "{{ values }}"
          description: "{{ description }}"
          name: "{{ name }}"
          project_id: "{{ project_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_llmobs_annotation_queue"
    values={[
        { label: 'update_llmobs_annotation_queue', value: 'update_llmobs_annotation_queue' }
    ]}
>
<TabItem value="update_llmobs_annotation_queue">

Partially update an annotation queue. The `name`, `description`, and `annotation_schema` fields can be updated.

```sql
UPDATE datadog.llm_observability.annotation_queues
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


## `DELETE` examples

<Tabs
    defaultValue="delete_llmobs_annotation_queue"
    values={[
        { label: 'delete_llmobs_annotation_queue', value: 'delete_llmobs_annotation_queue' }
    ]}
>
<TabItem value="delete_llmobs_annotation_queue">

Delete an annotation queue by its ID.

```sql
DELETE FROM datadog.llm_observability.annotation_queues
WHERE queue_id = '{{ queue_id }}' --required
;
```
</TabItem>
</Tabs>
