--- 
title: topic_discovery_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_discovery_runs
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

Creates, updates, deletes, gets or lists a <code>topic_discovery_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_discovery_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.topic_discovery_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_patterns_runs"
    values={[
        { label: 'list_llmobs_patterns_runs', value: 'list_llmobs_patterns_runs' }
    ]}
>
<TabItem value="list_llmobs_patterns_runs">

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
    <td>Identifier of the configuration the runs belong to. (example: a7c8d9e0-1234-5678-9abc-def012345678)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability patterns runs response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of a list of Agent Observability patterns runs. (list_topic_discovery_runs_response) (example: list_topic_discovery_runs_response)</td>
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
    <td><a href="#list_llmobs_patterns_runs"><CopyableCode code="list_llmobs_patterns_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a></td>
    <td></td>
    <td>List the completed patterns runs for a configuration.</td>
</tr>
<tr>
    <td><a href="#trigger_llmobs_patterns"><CopyableCode code="trigger_llmobs_patterns" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Start a patterns run for a given configuration. The run executes asynchronously.</td>
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
<tr id="parameter-config_id">
    <td><CopyableCode code="config_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the patterns configuration. (example: a7c8d9e0-1234-5678-9abc-def012345678)</td>
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
    defaultValue="list_llmobs_patterns_runs"
    values={[
        { label: 'list_llmobs_patterns_runs', value: 'list_llmobs_patterns_runs' }
    ]}
>
<TabItem value="list_llmobs_patterns_runs">

List the completed patterns runs for a configuration.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.topic_discovery_runs
WHERE config_id = '{{ config_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="trigger_llmobs_patterns"
    values={[
        { label: 'trigger_llmobs_patterns', value: 'trigger_llmobs_patterns' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="trigger_llmobs_patterns">

Start a patterns run for a given configuration. The run executes asynchronously.

```sql
INSERT INTO datadog.llm_observability.topic_discovery_runs (
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
- name: topic_discovery_runs
  props:
    - name: data
      description: |
        Data object for triggering an Agent Observability patterns run.
      value:
        attributes:
          config_id: "{{ config_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
