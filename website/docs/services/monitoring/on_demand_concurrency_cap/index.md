--- 
title: on_demand_concurrency_cap
hide_title: false
hide_table_of_contents: false
keywords:
  - on_demand_concurrency_cap
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

Creates, updates, deletes, gets or lists an <code>on_demand_concurrency_cap</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_demand_concurrency_cap" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.on_demand_concurrency_cap" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_on_demand_concurrency_cap"
    values={[
        { label: 'get_on_demand_concurrency_cap', value: 'get_on_demand_concurrency_cap' }
    ]}
>
<TabItem value="get_on_demand_concurrency_cap">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>On-demand concurrency cap attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>On-demand concurrency cap type. (on_demand_concurrency_cap)</td>
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
    <td><a href="#get_on_demand_concurrency_cap"><CopyableCode code="get_on_demand_concurrency_cap" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the on-demand concurrency cap.</td>
</tr>
<tr>
    <td><a href="#set_on_demand_concurrency_cap"><CopyableCode code="set_on_demand_concurrency_cap" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Save new value for on-demand concurrency cap.</td>
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
    defaultValue="get_on_demand_concurrency_cap"
    values={[
        { label: 'get_on_demand_concurrency_cap', value: 'get_on_demand_concurrency_cap' }
    ]}
>
<TabItem value="get_on_demand_concurrency_cap">

Get the on-demand concurrency cap.

```sql
SELECT
attributes,
type
FROM datadog.monitoring.on_demand_concurrency_cap
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="set_on_demand_concurrency_cap"
    values={[
        { label: 'set_on_demand_concurrency_cap', value: 'set_on_demand_concurrency_cap' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="set_on_demand_concurrency_cap">

Save new value for on-demand concurrency cap.

```sql
INSERT INTO datadog.monitoring.on_demand_concurrency_cap (
on_demand_concurrency_cap
)
SELECT 
{{ on_demand_concurrency_cap }}
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: on_demand_concurrency_cap
  props:
    - name: on_demand_concurrency_cap
      value: {{ on_demand_concurrency_cap }}
      description: |
        Value of the on-demand concurrency cap.
`}</CodeBlock>

</TabItem>
</Tabs>
