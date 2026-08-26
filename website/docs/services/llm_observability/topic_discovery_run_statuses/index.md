--- 
title: topic_discovery_run_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_discovery_run_statuses
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

Creates, updates, deletes, gets or lists a <code>topic_discovery_run_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_discovery_run_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.topic_discovery_run_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_llmobs_patterns_run_status"
    values={[
        { label: 'get_llmobs_patterns_run_status', value: 'get_llmobs_patterns_run_status' }
    ]}
>
<TabItem value="get_llmobs_patterns_run_status">

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
    <td>The ID of the patterns run. (example: 3fd6b5e0-8910-4b1c-a7d0-5b84de329012)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability patterns run status.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability patterns run status. (topic_discovery_run_status) (example: topic_discovery_run_status)</td>
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
    <td><a href="#get_llmobs_patterns_run_status"><CopyableCode code="get_llmobs_patterns_run_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a></td>
    <td></td>
    <td>Retrieve the status and step-by-step progress of the current or most recent&lt;br /&gt;patterns run for a configuration.</td>
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
    defaultValue="get_llmobs_patterns_run_status"
    values={[
        { label: 'get_llmobs_patterns_run_status', value: 'get_llmobs_patterns_run_status' }
    ]}
>
<TabItem value="get_llmobs_patterns_run_status">

Retrieve the status and step-by-step progress of the current or most recent&lt;br /&gt;patterns run for a configuration.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.topic_discovery_run_statuses
WHERE config_id = '{{ config_id }}' -- required
;
```
</TabItem>
</Tabs>
