--- 
title: integration_inferences
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_inferences
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

Creates, updates, deletes, gets or lists an <code>integration_inferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_inferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.integration_inferences" /></td></tr>
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
    <td><a href="#create_llmobs_integration_inference"><CopyableCode code="create_llmobs_integration_inference" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-integration"><code>integration</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-messages"><code>messages</code></a></td>
    <td></td>
    <td>Run an LLM inference request through the specified integration and account, returning the model response and token usage.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the integration account. (example: account-abc123)</td>
</tr>
<tr id="parameter-integration">
    <td><CopyableCode code="integration" /></td>
    <td><code>string</code></td>
    <td>The name of the LLM integration.</td>
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
    defaultValue="create_llmobs_integration_inference"
    values={[
        { label: 'create_llmobs_integration_inference', value: 'create_llmobs_integration_inference' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_integration_inference">

Run an LLM inference request through the specified integration and account, returning the model response and token usage.

```sql
INSERT INTO datadog.llm_observability.integration_inferences (
anthropic_metadata,
azure_openai_metadata,
bedrock_metadata,
frequency_penalty,
json_schema,
max_completion_tokens,
max_tokens,
messages,
model_id,
openai_metadata,
presence_penalty,
temperature,
tools,
top_k,
top_p,
vertex_ai_metadata,
integration,
account_id
)
SELECT 
'{{ anthropic_metadata }}',
'{{ azure_openai_metadata }}',
'{{ bedrock_metadata }}',
{{ frequency_penalty }},
'{{ json_schema }}',
{{ max_completion_tokens }},
{{ max_tokens }},
'{{ messages }}' /* required */,
'{{ model_id }}' /* required */,
'{{ openai_metadata }}',
{{ presence_penalty }},
{{ temperature }},
'{{ tools }}',
{{ top_k }},
{{ top_p }},
'{{ vertex_ai_metadata }}',
'{{ integration }}',
'{{ account_id }}'
RETURNING
model_id,
anthropic_metadata,
azure_openai_metadata,
bedrock_metadata,
error_response,
frequency_penalty,
json_schema,
max_completion_tokens,
max_tokens,
messages,
openai_metadata,
presence_penalty,
response,
temperature,
tools,
top_k,
top_p,
vertex_ai_metadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integration_inferences
  props:
    - name: integration
      value: "{{ integration }}"
      description: Required parameter for the integration_inferences resource.
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the integration_inferences resource.
    - name: anthropic_metadata
      description: |
        Anthropic-specific metadata for an inference request.
      value:
        effort: "{{ effort }}"
        thinking:
          budget_tokens: {{ budget_tokens }}
          type: "{{ type }}"
    - name: azure_openai_metadata
      description: |
        Azure OpenAI-specific metadata for an integration account or inference request.
      value:
        deployment_id: "{{ deployment_id }}"
        model_version: "{{ model_version }}"
        resource_name: "{{ resource_name }}"
    - name: bedrock_metadata
      description: |
        Amazon Bedrock-specific metadata for an inference request.
      value:
        region: "{{ region }}"
    - name: frequency_penalty
      value: {{ frequency_penalty }}
      description: |
        Penalty for token frequency to reduce repetition.
    - name: json_schema
      value: "{{ json_schema }}"
      description: |
        JSON schema for structured output, if supported by the model.
    - name: max_completion_tokens
      value: {{ max_completion_tokens }}
      description: |
        Maximum number of completion tokens to generate (alternative to max_tokens for some providers).
    - name: max_tokens
      value: {{ max_tokens }}
      description: |
        Maximum number of tokens to generate.
    - name: messages
      description: |
        List of messages in an inference conversation.
      value:
        - content: "{{ content }}"
          contents: "{{ contents }}"
          id: "{{ id }}"
          role: "{{ role }}"
          tool_calls: "{{ tool_calls }}"
          tool_results: "{{ tool_results }}"
    - name: model_id
      value: "{{ model_id }}"
      description: |
        The model identifier to use for inference.
    - name: openai_metadata
      description: |
        OpenAI-specific metadata for an inference request.
      value:
        reasoning_effort: "{{ reasoning_effort }}"
        reasoning_summary: "{{ reasoning_summary }}"
    - name: presence_penalty
      value: {{ presence_penalty }}
      description: |
        Penalty for token presence to encourage topic diversity.
    - name: temperature
      value: {{ temperature }}
      description: |
        Sampling temperature between 0 and 2. Higher values produce more random output.
    - name: tools
      description: |
        List of tools available to the model.
      value:
        - function:
            description: "{{ description }}"
            name: "{{ name }}"
            parameters: "{{ parameters }}"
          type: "{{ type }}"
    - name: top_k
      value: {{ top_k }}
      description: |
        Top-K sampling parameter.
    - name: top_p
      value: {{ top_p }}
      description: |
        Nucleus sampling probability mass.
    - name: vertex_ai_metadata
      description: |
        Vertex AI-specific metadata for an integration account or inference request.
      value:
        location: "{{ location }}"
        project: "{{ project }}"
        project_ids:
          - "{{ project_ids }}"
`}</CodeBlock>

</TabItem>
</Tabs>
