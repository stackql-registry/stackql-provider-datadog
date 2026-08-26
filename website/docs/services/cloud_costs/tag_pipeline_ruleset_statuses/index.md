--- 
title: tag_pipeline_ruleset_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_pipeline_ruleset_statuses
  - cloud_costs
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

Creates, updates, deletes, gets or lists a <code>tag_pipeline_ruleset_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_pipeline_ruleset_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tag_pipeline_ruleset_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tag_pipelines_rulesets_status"
    values={[
        { label: 'list_tag_pipelines_rulesets_status', value: 'list_tag_pipelines_rulesets_status' }
    ]}
>
<TabItem value="list_tag_pipelines_rulesets_status">

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
    <td>The unique identifier of the ruleset. (example: 55ef2385-9ae1-4410-90c4-5ac1b60fec10)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Processing status for a tag pipeline ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Ruleset status resource type. (ruleset_status) (default: ruleset_status, example: ruleset_status)</td>
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
    <td><a href="#list_tag_pipelines_rulesets_status"><CopyableCode code="list_tag_pipelines_rulesets_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List the processing status of all tag pipeline rulesets. Returns only the ID and processing status for each ruleset.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tag_pipelines_rulesets_status"
    values={[
        { label: 'list_tag_pipelines_rulesets_status', value: 'list_tag_pipelines_rulesets_status' }
    ]}
>
<TabItem value="list_tag_pipelines_rulesets_status">

List the processing status of all tag pipeline rulesets. Returns only the ID and processing status for each ruleset.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_pipeline_ruleset_statuses
;
```
</TabItem>
</Tabs>
