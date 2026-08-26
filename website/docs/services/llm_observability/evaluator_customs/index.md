--- 
title: evaluator_customs
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluator_customs
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

Creates, updates, deletes, gets or lists an <code>evaluator_customs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluator_customs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.evaluator_customs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_llmobs_custom_eval_config"
    values={[
        { label: 'get_llmobs_custom_eval_config', value: 'get_llmobs_custom_eval_config' },
        { label: 'list_llmobs_custom_eval_configs', value: 'list_llmobs_custom_eval_configs' }
    ]}
>
<TabItem value="get_llmobs_custom_eval_config">

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
    <td>Unique name identifier of the evaluator configuration. (example: my-custom-evaluator)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom Agent Observability evaluator configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the custom Agent Observability evaluator configuration resource. (evaluator_config) (example: evaluator_config)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_llmobs_custom_eval_configs">

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
    <td>Unique name identifier of the evaluator configuration. (example: my-custom-evaluator)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom Agent Observability evaluator configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the custom Agent Observability evaluator configuration resource. (evaluator_config) (example: evaluator_config)</td>
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
    <td><a href="#get_llmobs_custom_eval_config"><CopyableCode code="get_llmobs_custom_eval_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-eval_name"><code>eval_name</code></a></td>
    <td></td>
    <td>Retrieve a custom Agent Observability evaluator configuration by its name.</td>
</tr>
<tr>
    <td><a href="#list_llmobs_custom_eval_configs"><CopyableCode code="list_llmobs_custom_eval_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all custom Agent Observability evaluator configurations for the organization.</td>
</tr>
<tr>
    <td><a href="#update_llmobs_custom_eval_config"><CopyableCode code="update_llmobs_custom_eval_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-eval_name"><code>eval_name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update a custom Agent Observability evaluator configuration by its name.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_custom_eval_config"><CopyableCode code="delete_llmobs_custom_eval_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-eval_name"><code>eval_name</code></a></td>
    <td></td>
    <td>Delete a custom Agent Observability evaluator configuration by its name.</td>
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
<tr id="parameter-eval_name">
    <td><CopyableCode code="eval_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom Agent Observability evaluator configuration. (example: my-custom-evaluator)</td>
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
    defaultValue="get_llmobs_custom_eval_config"
    values={[
        { label: 'get_llmobs_custom_eval_config', value: 'get_llmobs_custom_eval_config' },
        { label: 'list_llmobs_custom_eval_configs', value: 'list_llmobs_custom_eval_configs' }
    ]}
>
<TabItem value="get_llmobs_custom_eval_config">

Retrieve a custom Agent Observability evaluator configuration by its name.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.evaluator_customs
WHERE eval_name = '{{ eval_name }}' -- required
;
```
</TabItem>
<TabItem value="list_llmobs_custom_eval_configs">

List all custom Agent Observability evaluator configurations for the organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.evaluator_customs
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_llmobs_custom_eval_config"
    values={[
        { label: 'update_llmobs_custom_eval_config', value: 'update_llmobs_custom_eval_config' }
    ]}
>
<TabItem value="update_llmobs_custom_eval_config">

Create or update a custom Agent Observability evaluator configuration by its name.

```sql
REPLACE datadog.llm_observability.evaluator_customs
SET 
data = '{{ data }}'
WHERE 
eval_name = '{{ eval_name }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_llmobs_custom_eval_config"
    values={[
        { label: 'delete_llmobs_custom_eval_config', value: 'delete_llmobs_custom_eval_config' }
    ]}
>
<TabItem value="delete_llmobs_custom_eval_config">

Delete a custom Agent Observability evaluator configuration by its name.

```sql
DELETE FROM datadog.llm_observability.evaluator_customs
WHERE eval_name = '{{ eval_name }}' --required
;
```
</TabItem>
</Tabs>
