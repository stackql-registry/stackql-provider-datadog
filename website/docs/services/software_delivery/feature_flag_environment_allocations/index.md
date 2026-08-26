--- 
title: feature_flag_environment_allocations
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_flag_environment_allocations
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

Creates, updates, deletes, gets or lists a <code>feature_flag_environment_allocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_flag_environment_allocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.feature_flag_environment_allocations" /></td></tr>
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
    <td><a href="#create_allocations_for_feature_flag_in_environment"><CopyableCode code="create_allocations_for_feature_flag_in_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new targeting rule (allocation) for a specific feature flag in a specific environment.</td>
</tr>
<tr>
    <td><a href="#update_allocations_for_feature_flag_in_environment"><CopyableCode code="update_allocations_for_feature_flag_in_environment" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates targeting rules (allocations) for a specific feature flag in a specific environment.&lt;br /&gt;This operation replaces the existing allocation set with the request payload.</td>
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
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the environment.</td>
</tr>
<tr id="parameter-feature_flag_id">
    <td><CopyableCode code="feature_flag_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the feature flag.</td>
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
    defaultValue="create_allocations_for_feature_flag_in_environment"
    values={[
        { label: 'create_allocations_for_feature_flag_in_environment', value: 'create_allocations_for_feature_flag_in_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_allocations_for_feature_flag_in_environment">

Creates a new targeting rule (allocation) for a specific feature flag in a specific environment.

```sql
INSERT INTO datadog.software_delivery.feature_flag_environment_allocations (
data,
feature_flag_id,
environment_id
)
SELECT 
'{{ data }}' /* required */,
'{{ feature_flag_id }}',
'{{ environment_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: feature_flag_environment_allocations
  props:
    - name: feature_flag_id
      value: "{{ feature_flag_id }}"
      description: Required parameter for the feature_flag_environment_allocations resource.
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the feature_flag_environment_allocations resource.
    - name: data
      description: |
        Data wrapper for allocation request payloads.
      value:
        attributes:
          experiment_id: "{{ experiment_id }}"
          exposure_schedule:
            absolute_start_time: "{{ absolute_start_time }}"
            control_variant_id: "{{ control_variant_id }}"
            control_variant_key: "{{ control_variant_key }}"
            id: "{{ id }}"
            rollout_options:
              autostart: {{ autostart }}
              selection_interval_ms: {{ selection_interval_ms }}
              strategy: "{{ strategy }}"
            rollout_steps:
              - exposure_ratio: {{ exposure_ratio }}
                grouped_step_index: {{ grouped_step_index }}
                id: "{{ id }}"
                interval_ms: {{ interval_ms }}
                is_pause_record: {{ is_pause_record }}
          guardrail_metrics:
            - metric_id: "{{ metric_id }}"
              trigger_action: "{{ trigger_action }}"
          id: "{{ id }}"
          key: "{{ key }}"
          name: "{{ name }}"
          targeting_rules:
            - conditions: "{{ conditions }}"
          type: "{{ type }}"
          variant_weights:
            - value: {{ value }}
              variant_id: "{{ variant_id }}"
              variant_key: "{{ variant_key }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_allocations_for_feature_flag_in_environment"
    values={[
        { label: 'update_allocations_for_feature_flag_in_environment', value: 'update_allocations_for_feature_flag_in_environment' }
    ]}
>
<TabItem value="update_allocations_for_feature_flag_in_environment">

Updates targeting rules (allocations) for a specific feature flag in a specific environment.&lt;br /&gt;This operation replaces the existing allocation set with the request payload.

```sql
REPLACE datadog.software_delivery.feature_flag_environment_allocations
SET 
data = '{{ data }}'
WHERE 
feature_flag_id = '{{ feature_flag_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
