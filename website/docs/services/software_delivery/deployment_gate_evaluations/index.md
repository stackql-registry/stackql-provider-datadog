--- 
title: deployment_gate_evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_gate_evaluations
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>deployment_gate_evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_gate_evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.deployment_gate_evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_gates_evaluation_result"
    values={[
        { label: 'get_deployment_gates_evaluation_result', value: 'get_deployment_gates_evaluation_result' }
    ]}
>
<TabItem value="get_deployment_gates_evaluation_result">

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
    <td>The unique identifier of the evaluation. (example: e9d2f04f-4f4b-494b-86e5-52f03e10c8e9)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for a deployment gate evaluation result response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API type for a deployment gate evaluation result response. (deployment_gates_evaluation_result_response) (default: deployment_gates_evaluation_result_response, example: deployment_gates_evaluation_result_response)</td>
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
    <td><a href="#get_deployment_gates_evaluation_result"><CopyableCode code="get_deployment_gates_evaluation_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Retrieves the result of a deployment gate evaluation by its evaluation ID.&lt;br /&gt;If the evaluation is still in progress, `data.attributes.gate_status` will be `in_progress`;&lt;br /&gt;continue polling until it returns `pass` or `fail`.&lt;br /&gt;Polling every 10-20 seconds is recommended.&lt;br /&gt;The endpoint may return a 404 if called too soon after triggering; retry after a few seconds.</td>
</tr>
<tr>
    <td><a href="#trigger_deployment_gates_evaluation"><CopyableCode code="trigger_deployment_gates_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Triggers an asynchronous deployment gate evaluation for the given service and environment.&lt;br /&gt;Returns an evaluation ID that can be used to poll for the result via the&lt;br /&gt;`GET /api/v2/deployments/gates/evaluation/&#123;id&#125;` endpoint.&lt;br /&gt;&lt;br /&gt;When the `configuration` attribute is provided, rules are evaluated inline from that configuration&lt;br /&gt;and no pre-configured gate is required. When `configuration` is omitted, rules are resolved from the&lt;br /&gt;gate pre-configured for the given service and environment through the Datadog UI, API, or Terraform.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The evaluation ID returned by the trigger endpoint.</td>
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
    defaultValue="get_deployment_gates_evaluation_result"
    values={[
        { label: 'get_deployment_gates_evaluation_result', value: 'get_deployment_gates_evaluation_result' }
    ]}
>
<TabItem value="get_deployment_gates_evaluation_result">

Retrieves the result of a deployment gate evaluation by its evaluation ID.&lt;br /&gt;If the evaluation is still in progress, `data.attributes.gate_status` will be `in_progress`;&lt;br /&gt;continue polling until it returns `pass` or `fail`.&lt;br /&gt;Polling every 10-20 seconds is recommended.&lt;br /&gt;The endpoint may return a 404 if called too soon after triggering; retry after a few seconds.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.deployment_gate_evaluations
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="trigger_deployment_gates_evaluation"
    values={[
        { label: 'trigger_deployment_gates_evaluation', value: 'trigger_deployment_gates_evaluation' }
    ]}
>
<TabItem value="trigger_deployment_gates_evaluation">

Triggers an asynchronous deployment gate evaluation for the given service and environment.&lt;br /&gt;Returns an evaluation ID that can be used to poll for the result via the&lt;br /&gt;`GET /api/v2/deployments/gates/evaluation/&#123;id&#125;` endpoint.&lt;br /&gt;&lt;br /&gt;When the `configuration` attribute is provided, rules are evaluated inline from that configuration&lt;br /&gt;and no pre-configured gate is required. When `configuration` is omitted, rules are resolved from the&lt;br /&gt;gate pre-configured for the given service and environment through the Datadog UI, API, or Terraform.

```sql
EXEC datadog.software_delivery.deployment_gate_evaluations.trigger_deployment_gates_evaluation 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
