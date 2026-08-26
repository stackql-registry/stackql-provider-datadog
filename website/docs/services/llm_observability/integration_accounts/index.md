--- 
title: integration_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_accounts
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

Creates, updates, deletes, gets or lists an <code>integration_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.integration_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_integration_accounts"
    values={[
        { label: 'list_llmobs_integration_accounts', value: 'list_llmobs_integration_accounts' }
    ]}
>
<TabItem value="list_llmobs_integration_accounts">

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
    <td>Unique identifier for the integration account. (example: account-abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Provider-specific account identifier. (example: org-XYZ123)</td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name for the integration account. (example: Production OpenAI)</td>
</tr>
<tr>
    <td><CopyableCode code="account_region" /></td>
    <td><code>string</code></td>
    <td>Provider region associated with the account, if applicable. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="azure_openai_metadata" /></td>
    <td><code>object</code></td>
    <td>Azure OpenAI-specific metadata for an integration account or inference request.</td>
</tr>
<tr>
    <td><CopyableCode code="integration" /></td>
    <td><code>string</code></td>
    <td>The name of the LLM provider integration. (example: openai)</td>
</tr>
<tr>
    <td><CopyableCode code="vertex_ai_metadata" /></td>
    <td><code>object</code></td>
    <td>Vertex AI-specific metadata for an integration account or inference request.</td>
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
    <td><a href="#list_llmobs_integration_accounts"><CopyableCode code="list_llmobs_integration_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration"><code>integration</code></a></td>
    <td></td>
    <td>Retrieve the list of configured accounts for the specified LLM provider integration.</td>
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
    defaultValue="list_llmobs_integration_accounts"
    values={[
        { label: 'list_llmobs_integration_accounts', value: 'list_llmobs_integration_accounts' }
    ]}
>
<TabItem value="list_llmobs_integration_accounts">

Retrieve the list of configured accounts for the specified LLM provider integration.

```sql
SELECT
id,
account_id,
account_name,
account_region,
azure_openai_metadata,
integration,
vertex_ai_metadata
FROM datadog.llm_observability.integration_accounts
WHERE integration = '{{ integration }}' -- required
;
```
</TabItem>
</Tabs>
