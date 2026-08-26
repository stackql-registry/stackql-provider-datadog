--- 
title: prompt_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - prompt_versions
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

Creates, updates, deletes, gets or lists a <code>prompt_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prompt_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.prompt_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_llmobs_prompt_version"
    values={[
        { label: 'get_llmobs_prompt_version', value: 'get_llmobs_prompt_version' },
        { label: 'list_llmobs_prompt_versions', value: 'list_llmobs_prompt_versions' }
    ]}
>
<TabItem value="get_llmobs_prompt_version">

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
    <td>Unique identifier of the prompt version. (example: d83ab666-61cc-5545-a83b-2424bb85467b)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a specific version of an Agent Observability prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability prompt version. (prompt-template-versions) (example: prompt-template-versions)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_llmobs_prompt_versions">

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
    <td>Unique identifier of the prompt version. (example: d83ab666-61cc-5545-a83b-2424bb85467b)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a prompt version returned in a list, excluding its template.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability prompt version. (prompt-template-versions) (example: prompt-template-versions)</td>
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
    <td><a href="#get_llmobs_prompt_version"><CopyableCode code="get_llmobs_prompt_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-prompt_id"><code>prompt_id</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Get the full template of a single, specific version of an Agent Observability prompt.</td>
</tr>
<tr>
    <td><a href="#list_llmobs_prompt_versions"><CopyableCode code="list_llmobs_prompt_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-prompt_id"><code>prompt_id</code></a></td>
    <td></td>
    <td>List all versions of an Agent Observability prompt, ordered newest to oldest. If the prompt does not exist, is not registered, or is archived, the response contains an empty list.</td>
</tr>
<tr>
    <td><a href="#create_llmobs_prompt_version"><CopyableCode code="create_llmobs_prompt_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-prompt_id"><code>prompt_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new version of an existing Agent Observability prompt.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_prompt_version"><CopyableCode code="update_llmobs_prompt_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-prompt_id"><code>prompt_id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the description, the feature-flag environments, or both, for a specific version of an Agent Observability prompt.</td>
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
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the Agent Observability prompt. (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_llmobs_prompt_version"
    values={[
        { label: 'get_llmobs_prompt_version', value: 'get_llmobs_prompt_version' },
        { label: 'list_llmobs_prompt_versions', value: 'list_llmobs_prompt_versions' }
    ]}
>
<TabItem value="get_llmobs_prompt_version">

Get the full template of a single, specific version of an Agent Observability prompt.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.prompt_versions
WHERE prompt_id = '{{ prompt_id }}' -- required
AND version = '{{ version }}' -- required
;
```
</TabItem>
<TabItem value="list_llmobs_prompt_versions">

List all versions of an Agent Observability prompt, ordered newest to oldest. If the prompt does not exist, is not registered, or is archived, the response contains an empty list.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.prompt_versions
WHERE prompt_id = '{{ prompt_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_llmobs_prompt_version"
    values={[
        { label: 'create_llmobs_prompt_version', value: 'create_llmobs_prompt_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_prompt_version">

Create a new version of an existing Agent Observability prompt.

```sql
INSERT INTO datadog.llm_observability.prompt_versions (
data,
prompt_id
)
SELECT 
'{{ data }}' /* required */,
'{{ prompt_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: prompt_versions
  props:
    - name: prompt_id
      value: "{{ prompt_id }}"
      description: Required parameter for the prompt_versions resource.
    - name: data
      description: |
        Data object for creating an Agent Observability prompt version.
      value:
        attributes:
          description: "{{ description }}"
          env_ids:
            - "{{ env_ids }}"
          labels:
            - "{{ labels }}"
          template: "{{ template }}"
          user_version: "{{ user_version }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_llmobs_prompt_version"
    values={[
        { label: 'update_llmobs_prompt_version', value: 'update_llmobs_prompt_version' }
    ]}
>
<TabItem value="update_llmobs_prompt_version">

Update the description, the feature-flag environments, or both, for a specific version of an Agent Observability prompt.

```sql
UPDATE datadog.llm_observability.prompt_versions
SET 
data = '{{ data }}'
WHERE 
prompt_id = '{{ prompt_id }}' --required
AND version = '{{ version }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
