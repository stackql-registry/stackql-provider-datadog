--- 
title: synthetics_variable_jsonpatches
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_variable_jsonpatches
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>synthetics_variable_jsonpatches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_variable_jsonpatches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_variable_jsonpatches" /></td></tr>
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
    <td><a href="#patch_global_variable"><CopyableCode code="patch_global_variable" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-variable_id"><code>variable_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Patch a global variable using JSON Patch (RFC 6902).&lt;br /&gt;This endpoint allows partial updates to a global variable by specifying only the fields to modify.&lt;br /&gt;&lt;br /&gt;Common operations include:&lt;br /&gt;- Replace field values: `&#123;"op": "replace", "path": "/name", "value": "new_name"&#125;`&lt;br /&gt;- Update nested values: `&#123;"op": "replace", "path": "/value/value", "value": "new_value"&#125;`&lt;br /&gt;- Add/update tags: `&#123;"op": "add", "path": "/tags/-", "value": "new_tag"&#125;`&lt;br /&gt;- Remove fields: `&#123;"op": "remove", "path": "/description"&#125;`</td>
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
<tr id="parameter-variable_id">
    <td><CopyableCode code="variable_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global variable.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="patch_global_variable"
    values={[
        { label: 'patch_global_variable', value: 'patch_global_variable' }
    ]}
>
<TabItem value="patch_global_variable">

Patch a global variable using JSON Patch (RFC 6902).&lt;br /&gt;This endpoint allows partial updates to a global variable by specifying only the fields to modify.&lt;br /&gt;&lt;br /&gt;Common operations include:&lt;br /&gt;- Replace field values: `&#123;"op": "replace", "path": "/name", "value": "new_name"&#125;`&lt;br /&gt;- Update nested values: `&#123;"op": "replace", "path": "/value/value", "value": "new_value"&#125;`&lt;br /&gt;- Add/update tags: `&#123;"op": "add", "path": "/tags/-", "value": "new_tag"&#125;`&lt;br /&gt;- Remove fields: `&#123;"op": "remove", "path": "/description"&#125;`

```sql
UPDATE datadog.monitoring.synthetics_variable_jsonpatches
SET 
data = '{{ data }}'
WHERE 
variable_id = '{{ variable_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
