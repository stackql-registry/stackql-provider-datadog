--- 
title: csm_ownership_feedbacks
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_ownership_feedbacks
  - security
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

Creates, updates, deletes, gets or lists a <code>csm_ownership_feedbacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_ownership_feedbacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.csm_ownership_feedbacks" /></td></tr>
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
    <td><a href="#create_ownership_feedback"><CopyableCode code="create_ownership_feedback" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-owner_type"><code>owner_type</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Submit feedback on the current ownership inference for a resource and owner type. Valid actions are `confirm`, `reject`, `correct`, and `persist`.&lt;br /&gt;&lt;br /&gt;The request must include the current inference `checksum` in `inference_checksum`. If the checksum does not match the current inference state, the endpoint returns `409 Conflict`.&lt;br /&gt;&lt;br /&gt;When `action` is `correct`, `corrected_owner_handle` and `corrected_owner_type` are required.</td>
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
<tr id="parameter-owner_type">
    <td><CopyableCode code="owner_type" /></td>
    <td><code>string</code></td>
    <td>The type of owner that the feedback applies to.</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource that the feedback applies to.</td>
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
    defaultValue="create_ownership_feedback"
    values={[
        { label: 'create_ownership_feedback', value: 'create_ownership_feedback' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ownership_feedback">

Submit feedback on the current ownership inference for a resource and owner type. Valid actions are `confirm`, `reject`, `correct`, and `persist`.&lt;br /&gt;&lt;br /&gt;The request must include the current inference `checksum` in `inference_checksum`. If the checksum does not match the current inference state, the endpoint returns `409 Conflict`.&lt;br /&gt;&lt;br /&gt;When `action` is `correct`, `corrected_owner_handle` and `corrected_owner_type` are required.

```sql
INSERT INTO datadog.security.csm_ownership_feedbacks (
data,
resource_id,
owner_type
)
SELECT 
'{{ data }}' /* required */,
'{{ resource_id }}',
'{{ owner_type }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: csm_ownership_feedbacks
  props:
    - name: resource_id
      value: "{{ resource_id }}"
      description: Required parameter for the csm_ownership_feedbacks resource.
    - name: owner_type
      value: "{{ owner_type }}"
      description: Required parameter for the csm_ownership_feedbacks resource.
    - name: data
      description: |
        The data wrapper for an ownership feedback request.
      value:
        attributes:
          action: "{{ action }}"
          actor_handle: "{{ actor_handle }}"
          actor_type: "{{ actor_type }}"
          corrected_owner_handle: "{{ corrected_owner_handle }}"
          corrected_owner_type: "{{ corrected_owner_type }}"
          inference_checksum: "{{ inference_checksum }}"
          reason: "{{ reason }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
