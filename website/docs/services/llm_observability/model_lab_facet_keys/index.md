--- 
title: model_lab_facet_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - model_lab_facet_keys
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

Creates, updates, deletes, gets or lists a <code>model_lab_facet_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_lab_facet_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.model_lab_facet_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_model_lab_run_facet_keys"
    values={[
        { label: 'list_model_lab_run_facet_keys', value: 'list_model_lab_run_facet_keys' }
    ]}
>
<TabItem value="list_model_lab_run_facet_keys">

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
    <td>The unique identifier of the facet keys resource. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Available facet key names for filtering resources.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for a facet keys resource. (facet_keys) (example: facet_keys)</td>
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
    <td><a href="#list_model_lab_run_facet_keys"><CopyableCode code="list_model_lab_run_facet_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[project_id]"><code>filter[project_id]</code></a></td>
    <td></td>
    <td>List all available facet keys for filtering Model Lab runs.</td>
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
<tr id="parameter-filter[project_id]">
    <td><CopyableCode code="filter[project_id]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Filter by project ID.</td>
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
    defaultValue="list_model_lab_run_facet_keys"
    values={[
        { label: 'list_model_lab_run_facet_keys', value: 'list_model_lab_run_facet_keys' }
    ]}
>
<TabItem value="list_model_lab_run_facet_keys">

List all available facet keys for filtering Model Lab runs.

```sql
SELECT
id,
attributes,
type
FROM datadog.llm_observability.model_lab_facet_keys
WHERE filter[project_id] = '{{ filter[project_id] }}' -- required
;
```
</TabItem>
</Tabs>
