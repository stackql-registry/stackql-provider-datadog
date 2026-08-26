--- 
title: integration_models
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_models
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

Creates, updates, deletes, gets or lists an <code>integration_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.integration_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_integration_models"
    values={[
        { label: 'list_llmobs_integration_models', value: 'list_llmobs_integration_models' }
    ]}
>
<TabItem value="list_llmobs_integration_models">

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
    <td>Unique identifier for the model entry. (example: gpt-4o)</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>Provider-specific model identifier used in inference calls. (example: gpt-4o)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_display_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the LLM provider integration. (example: OpenAI)</td>
</tr>
<tr>
    <td><CopyableCode code="model_display_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable model name. (example: GPT-4o)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_display_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the underlying model provider. (example: OpenAI)</td>
</tr>
<tr>
    <td><CopyableCode code="has_access" /></td>
    <td><code>boolean</code></td>
    <td>Whether the account has access to this model.</td>
</tr>
<tr>
    <td><CopyableCode code="integration" /></td>
    <td><code>string</code></td>
    <td>The name of the LLM provider integration. (example: openai)</td>
</tr>
<tr>
    <td><CopyableCode code="json_schema" /></td>
    <td><code>boolean</code></td>
    <td>Whether the model supports structured output via JSON schema.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The underlying model provider. (example: openai)</td>
</tr>
<tr>
    <td><CopyableCode code="region_prefix_overrides" /></td>
    <td><code>object</code></td>
    <td>Map of region-specific model ID prefix overrides.</td>
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
    <td><a href="#list_llmobs_integration_models"><CopyableCode code="list_llmobs_integration_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration"><code>integration</code></a>, <a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Retrieve the list of models available for the specified LLM provider integration and account.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="list_llmobs_integration_models"
    values={[
        { label: 'list_llmobs_integration_models', value: 'list_llmobs_integration_models' }
    ]}
>
<TabItem value="list_llmobs_integration_models">

Retrieve the list of models available for the specified LLM provider integration and account.

```sql
SELECT
id,
model_id,
integration_display_name,
model_display_name,
provider_display_name,
has_access,
integration,
json_schema,
provider,
region_prefix_overrides
FROM datadog.llm_observability.integration_models
WHERE integration = '{{ integration }}' -- required
AND account_id = '{{ account_id }}' -- required
;
```
</TabItem>
</Tabs>
