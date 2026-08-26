--- 
title: topic_discovery_topics
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_discovery_topics
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

Creates, updates, deletes, gets or lists a <code>topic_discovery_topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_discovery_topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.topic_discovery_topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_patterns_topics"
    values={[
        { label: 'list_llmobs_patterns_topics', value: 'list_llmobs_patterns_topics' }
    ]}
>
<TabItem value="list_llmobs_patterns_topics">

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
    <td>Identifier of the run the topics belong to. (example: 3fd6b5e0-8910-4b1c-a7d0-5b84de329012)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an Agent Observability patterns topics response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of an Agent Observability patterns topics response. (get_topics_response) (example: get_topics_response)</td>
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
    <td><a href="#list_llmobs_patterns_topics"><CopyableCode code="list_llmobs_patterns_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a></td>
    <td><a href="#parameter-run_id"><code>run_id</code></a></td>
    <td>List the topics discovered by a patterns run. When no run is specified,&lt;br /&gt;the most recent completed run is used.</td>
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
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a specific patterns run. Defaults to the most recent completed run. (example: 3fd6b5e0-8910-4b1c-a7d0-5b84de329012)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_llmobs_patterns_topics"
    values={[
        { label: 'list_llmobs_patterns_topics', value: 'list_llmobs_patterns_topics' }
    ]}
>
<TabItem value="list_llmobs_patterns_topics">

List the topics discovered by a patterns run. When no run is specified,&lt;br /&gt;the most recent completed run is used.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.topic_discovery_topics
WHERE config_id = '{{ config_id }}' -- required
AND run_id = '{{ run_id }}'
;
```
</TabItem>
</Tabs>
