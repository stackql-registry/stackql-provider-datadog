--- 
title: annotation_queue_annotations
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_queue_annotations
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

Creates, updates, deletes, gets or lists an <code>annotation_queue_annotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotation_queue_annotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.annotation_queue_annotations" /></td></tr>
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
    <td><a href="#upsert_llmobs_annotations"><CopyableCode code="upsert_llmobs_annotations" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update annotations on interactions in a queue. Each annotation is matched&lt;br /&gt;by `interaction_id` and the requesting user's identity.&lt;br /&gt;Results and errors in the response are linked to request items by `interaction_id`.&lt;br /&gt;Errors for individual items are returned in the `errors` field without blocking the rest of the batch.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_annotations"><CopyableCode code="delete_llmobs_annotations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Delete one or more annotations from an annotation queue.</td>
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
    defaultValue="upsert_llmobs_annotations"
    values={[
        { label: 'upsert_llmobs_annotations', value: 'upsert_llmobs_annotations' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="upsert_llmobs_annotations">

Create or update annotations on interactions in a queue. Each annotation is matched&lt;br /&gt;by `interaction_id` and the requesting user's identity.&lt;br /&gt;Results and errors in the response are linked to request items by `interaction_id`.&lt;br /&gt;Errors for individual items are returned in the `errors` field without blocking the rest of the batch.

```sql
INSERT INTO datadog.llm_observability.annotation_queue_annotations (
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
- name: annotation_queue_annotations
  props:
    - name: queue_id
      value: "{{ queue_id }}"
      description: Required parameter for the annotation_queue_annotations resource.
    - name: data
      description: |
        Data object for creating or updating annotations.
      value:
        attributes:
          annotations:
            - interaction_id: "{{ interaction_id }}"
              label_values: "{{ label_values }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_llmobs_annotations"
    values={[
        { label: 'delete_llmobs_annotations', value: 'delete_llmobs_annotations' }
    ]}
>
<TabItem value="delete_llmobs_annotations">

Delete one or more annotations from an annotation queue.

```sql
EXEC datadog.llm_observability.annotation_queue_annotations.delete_llmobs_annotations 
@queue_id='{{ queue_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
