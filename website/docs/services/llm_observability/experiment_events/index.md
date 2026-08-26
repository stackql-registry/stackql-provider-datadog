--- 
title: experiment_events
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_events
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

Creates, updates, deletes, gets or lists an <code>experiment_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiment_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.experiment_events" /></td></tr>
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
    <td><a href="#create_llmobs_experiment_events"><CopyableCode code="create_llmobs_experiment_events" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-experiment_id"><code>experiment_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Push spans and metrics for an Agent Observability experiment.</td>
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
<tr id="parameter-experiment_id">
    <td><CopyableCode code="experiment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Agent Observability experiment. (example: 3fd6b5e0-8910-4b1c-a7d0-5b84de329012)</td>
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
    defaultValue="create_llmobs_experiment_events"
    values={[
        { label: 'create_llmobs_experiment_events', value: 'create_llmobs_experiment_events' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_llmobs_experiment_events">

Push spans and metrics for an Agent Observability experiment.

```sql
INSERT INTO datadog.llm_observability.experiment_events (
data,
experiment_id
)
SELECT 
'{{ data }}' /* required */,
'{{ experiment_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: experiment_events
  props:
    - name: experiment_id
      value: "{{ experiment_id }}"
      description: Required parameter for the experiment_events resource.
    - name: data
      description: |
        Data object for pushing experiment events.
      value:
        attributes:
          metrics:
            - assessment: "{{ assessment }}"
              boolean_value: {{ boolean_value }}
              categorical_value: "{{ categorical_value }}"
              error:
                message: "{{ message }}"
              json_value: "{{ json_value }}"
              label: "{{ label }}"
              metadata: "{{ metadata }}"
              metric_type: "{{ metric_type }}"
              reasoning: "{{ reasoning }}"
              score_value: {{ score_value }}
              span_id: "{{ span_id }}"
              tags: "{{ tags }}"
              timestamp_ms: {{ timestamp_ms }}
          spans:
            - dataset_id: "{{ dataset_id }}"
              duration: {{ duration }}
              meta:
                error:
                  message: "{{ message }}"
                  stack: "{{ stack }}"
                  type: "{{ type }}"
                expected_output: "{{ expected_output }}"
                input: "{{ input }}"
                output: "{{ output }}"
              name: "{{ name }}"
              project_id: "{{ project_id }}"
              span_id: "{{ span_id }}"
              start_ns: {{ start_ns }}
              status: "{{ status }}"
              tags: "{{ tags }}"
              trace_id: "{{ trace_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
