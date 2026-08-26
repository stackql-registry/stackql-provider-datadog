--- 
title: topic_discovery_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_discovery_configs
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

Creates, updates, deletes, gets or lists a <code>topic_discovery_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_discovery_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.topic_discovery_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_llmobs_patterns_configs"
    values={[
        { label: 'list_llmobs_patterns_configs', value: 'list_llmobs_patterns_configs' }
    ]}
>
<TabItem value="list_llmobs_patterns_configs">

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
    <td>Identifier of the list response. (example: 1000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a list of Agent Observability patterns configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type of a list of Agent Observability patterns configurations. (list_topic_discovery_configs_response) (example: list_topic_discovery_configs_response)</td>
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
    <td><a href="#list_llmobs_patterns_configs"><CopyableCode code="list_llmobs_patterns_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all patterns configurations for the organization.</td>
</tr>
<tr>
    <td><a href="#upsert_llmobs_patterns_config"><CopyableCode code="upsert_llmobs_patterns_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new patterns configuration, or update an existing one when a configuration ID is provided.</td>
</tr>
<tr>
    <td><a href="#delete_llmobs_patterns_config"><CopyableCode code="delete_llmobs_patterns_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a></td>
    <td></td>
    <td>Delete a patterns configuration by its ID.</td>
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
    defaultValue="list_llmobs_patterns_configs"
    values={[
        { label: 'list_llmobs_patterns_configs', value: 'list_llmobs_patterns_configs' }
    ]}
>
<TabItem value="list_llmobs_patterns_configs">

List all patterns configurations for the organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.topic_discovery_configs
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="upsert_llmobs_patterns_config"
    values={[
        { label: 'upsert_llmobs_patterns_config', value: 'upsert_llmobs_patterns_config' }
    ]}
>
<TabItem value="upsert_llmobs_patterns_config">

Create a new patterns configuration, or update an existing one when a configuration ID is provided.

```sql
REPLACE datadog.llm_observability.topic_discovery_configs
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_llmobs_patterns_config"
    values={[
        { label: 'delete_llmobs_patterns_config', value: 'delete_llmobs_patterns_config' }
    ]}
>
<TabItem value="delete_llmobs_patterns_config">

Delete a patterns configuration by its ID.

```sql
DELETE FROM datadog.llm_observability.topic_discovery_configs
WHERE config_id = '{{ config_id }}' --required
;
```
</TabItem>
</Tabs>
