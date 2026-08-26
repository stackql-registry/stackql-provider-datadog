--- 
title: prompts
hide_title: false
hide_table_of_contents: false
keywords:
  - prompts
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

Creates, updates, deletes, gets or lists a <code>prompts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prompts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.prompts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_llmobs_prompt"
    values={[
        { label: 'get_llmobs_prompt', value: 'get_llmobs_prompt' },
        { label: 'list_llmobs_prompts', value: 'list_llmobs_prompts' }
    ]}
>
<TabItem value="get_llmobs_prompt">

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
    <td>Unique identifier of the prompt. (example: 4a1a28ff-8a25-5f0f-946f-f48264d772eb)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a flattened prompt version returned for SDK consumption. Exactly one of `template` and `chat_template` is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability prompt. (prompt-templates) (example: prompt-templates)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_llmobs_prompts">

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
    <td>Unique identifier of the prompt. (example: 4a1a28ff-8a25-5f0f-946f-f48264d772eb)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability prompt registry entry.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability prompt. (prompt-templates) (example: prompt-templates)</td>
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
    <td><a href="#get_llmobs_prompt"><CopyableCode code="get_llmobs_prompt" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-prompt_id"><code>prompt_id</code></a></td>
    <td><a href="#parameter-label"><code>label</code></a></td>
    <td>Get the latest version of an Agent Observability prompt by prompt ID.</td>
</tr>
<tr>
    <td><a href="#list_llmobs_prompts"><CopyableCode code="list_llmobs_prompts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[prompt_id]"><code>filter[prompt_id]</code></a></td>
    <td>List all Agent Observability prompts in the prompt registry for the organization.</td>
</tr>
<tr>
    <td><a href="#create_llmobs_prompt"><CopyableCode code="create_llmobs_prompt" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new prompt (and its first version) in the Agent Observability prompt registry.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_prompt"><CopyableCode code="update_llmobs_prompt" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-prompt_id"><code>prompt_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the title, the description, or both, for an Agent Observability prompt.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_prompt"><CopyableCode code="delete_llmobs_prompt" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-prompt_id"><code>prompt_id</code></a></td>
    <td></td>
    <td>Soft-delete an Agent Observability prompt. The prompt's version rows are retained, but they are no longer accessible through the public prompt registry endpoints.</td>
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
<tr id="parameter-prompt_id">
    <td><CopyableCode code="prompt_id" /></td>
    <td><code>string</code></td>
    <td>The customer-provided identifier of the Agent Observability prompt. (example: customer-support-assistant)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[prompt_id]">
    <td><CopyableCode code="filter[prompt_id]" /></td>
    <td><code>string</code></td>
    <td>Optional filter for prompts by prompt ID. (example: customer-support-assistant)</td>
</tr>
<tr id="parameter-label">
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** Optional label of the prompt version to return. Do not use this parameter for new integrations. If omitted, the latest version is returned. If the prompt has no labels, the latest version is returned even when a label is requested. If the prompt has labels but none match the requested label, a 404 response is returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_llmobs_prompt"
    values={[
        { label: 'get_llmobs_prompt', value: 'get_llmobs_prompt' },
        { label: 'list_llmobs_prompts', value: 'list_llmobs_prompts' }
    ]}
>
<TabItem value="get_llmobs_prompt">

Get the latest version of an Agent Observability prompt by prompt ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.prompts
WHERE prompt_id = '{{ prompt_id }}' -- required
AND label = '{{ label }}'
;
```
</TabItem>
<TabItem value="list_llmobs_prompts">

List all Agent Observability prompts in the prompt registry for the organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.prompts
WHERE filter[prompt_id] = '{{ filter[prompt_id] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_prompt"
    values={[
        { label: 'create_llmobs_prompt', value: 'create_llmobs_prompt' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_prompt">

Create a new prompt (and its first version) in the Agent Observability prompt registry.

```sql
INSERT INTO datadog.llm_observability.prompts (
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
- name: prompts
  props:
    - name: data
      description: |
        Data object for creating an Agent Observability prompt.
      value:
        attributes:
          description: "{{ description }}"
          env_ids:
            - "{{ env_ids }}"
          labels:
            - "{{ labels }}"
          prompt_id: "{{ prompt_id }}"
          template: "{{ template }}"
          title: "{{ title }}"
          user_version: "{{ user_version }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_llmobs_prompt"
    values={[
        { label: 'update_llmobs_prompt', value: 'update_llmobs_prompt' }
    ]}
>
<TabItem value="update_llmobs_prompt">

Update the title, the description, or both, for an Agent Observability prompt.

```sql
UPDATE datadog.llm_observability.prompts
SET 
data = '{{ data }}'
WHERE 
prompt_id = '{{ prompt_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_llmobs_prompt"
    values={[
        { label: 'delete_llmobs_prompt', value: 'delete_llmobs_prompt' }
    ]}
>
<TabItem value="delete_llmobs_prompt">

Soft-delete an Agent Observability prompt. The prompt's version rows are retained, but they are no longer accessible through the public prompt registry endpoints.

```sql
DELETE FROM datadog.llm_observability.prompts
WHERE prompt_id = '{{ prompt_id }}' --required
;
```
</TabItem>
</Tabs>
