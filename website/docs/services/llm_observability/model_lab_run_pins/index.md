--- 
title: model_lab_run_pins
hide_title: false
hide_table_of_contents: false
keywords:
  - model_lab_run_pins
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

Creates, updates, deletes, gets or lists a <code>model_lab_run_pins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_lab_run_pins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.llm_observability.model_lab_run_pins" /></td></tr>
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
    <td><a href="#pin_model_lab_run"><CopyableCode code="pin_model_lab_run" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Pin a Model Lab run for the current user.</td>
</tr>
<tr>
    <td><a href="#unpin_model_lab_run"><CopyableCode code="unpin_model_lab_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Remove the pin from a Model Lab run for the current user.</td>
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
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the Model Lab run.</td>
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
    defaultValue="pin_model_lab_run"
    values={[
        { label: 'pin_model_lab_run', value: 'pin_model_lab_run' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="pin_model_lab_run">

Pin a Model Lab run for the current user.

```sql
INSERT INTO datadog.llm_observability.model_lab_run_pins (
run_id
)
SELECT 
'{{ run_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_lab_run_pins
  props:
    - name: run_id
      value: "{{ run_id }}"
      description: Required parameter for the model_lab_run_pins resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="unpin_model_lab_run"
    values={[
        { label: 'unpin_model_lab_run', value: 'unpin_model_lab_run' }
    ]}
>
<TabItem value="unpin_model_lab_run">

Remove the pin from a Model Lab run for the current user.

```sql
DELETE FROM datadog.llm_observability.model_lab_run_pins
WHERE run_id = '{{ run_id }}' --required
;
```
</TabItem>
</Tabs>
