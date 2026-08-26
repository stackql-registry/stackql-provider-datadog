--- 
title: annotation_queue_interactions
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_queue_interactions
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

Creates, updates, deletes, gets or lists an <code>annotation_queue_interactions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotation_queue_interactions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.annotation_queue_interactions" /></td></tr>
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
    <td><a href="#create_llmobs_annotation_queue_interactions"><CopyableCode code="create_llmobs_annotation_queue_interactions" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Add one or more interactions to an annotation queue. At least one&lt;br /&gt;interaction must be provided. Each interaction has a `type`:&lt;br /&gt;&lt;br /&gt;- `trace`, `experiment_trace`, `session`: `content_id` references the&lt;br /&gt;  upstream entity; the server fetches the actual content.&lt;br /&gt;- `display_block`: omit `content_id` and provide the rendered content&lt;br /&gt;  in `display_block`. The server generates `content_id` as a&lt;br /&gt;  deterministic hash of the block list.&lt;br /&gt;&lt;br /&gt;Items of different types can be mixed in a single request.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_annotation_queue_interactions"><CopyableCode code="delete_llmobs_annotation_queue_interactions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Delete one or more interactions from an annotation queue.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_annotation_queue_interactions"
    values={[
        { label: 'create_llmobs_annotation_queue_interactions', value: 'create_llmobs_annotation_queue_interactions' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_annotation_queue_interactions">

Add one or more interactions to an annotation queue. At least one&lt;br /&gt;interaction must be provided. Each interaction has a `type`:&lt;br /&gt;&lt;br /&gt;- `trace`, `experiment_trace`, `session`: `content_id` references the&lt;br /&gt;  upstream entity; the server fetches the actual content.&lt;br /&gt;- `display_block`: omit `content_id` and provide the rendered content&lt;br /&gt;  in `display_block`. The server generates `content_id` as a&lt;br /&gt;  deterministic hash of the block list.&lt;br /&gt;&lt;br /&gt;Items of different types can be mixed in a single request.

```sql
INSERT INTO datadog.llm_observability.annotation_queue_interactions (
data,
queue_id
)
SELECT 
'{{ data }}' /* required */,
'{{ queue_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: annotation_queue_interactions
  props:
    - name: queue_id
      value: "{{ queue_id }}"
      description: Required parameter for the annotation_queue_interactions resource.
    - name: data
      description: |
        Data object for adding interactions to an annotation queue.
      value:
        attributes:
          interactions:
            - content_id: "{{ content_id }}"
              type: "{{ type }}"
              display_block: "{{ display_block }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_llmobs_annotation_queue_interactions"
    values={[
        { label: 'delete_llmobs_annotation_queue_interactions', value: 'delete_llmobs_annotation_queue_interactions' }
    ]}
>
<TabItem value="delete_llmobs_annotation_queue_interactions">

Delete one or more interactions from an annotation queue.

```sql
EXEC datadog.llm_observability.annotation_queue_interactions.delete_llmobs_annotation_queue_interactions 
@queue_id='{{ queue_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
