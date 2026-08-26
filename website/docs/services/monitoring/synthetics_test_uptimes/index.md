--- 
title: synthetics_test_uptimes
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_test_uptimes
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

Creates, updates, deletes, gets or lists a <code>synthetics_test_uptimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_test_uptimes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_test_uptimes" /></td></tr>
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
    <td><a href="#fetch_uptimes"><CopyableCode code="fetch_uptimes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-from_ts"><code>from_ts</code></a>, <a href="#parameter-to_ts"><code>to_ts</code></a>, <a href="#parameter-public_ids"><code>public_ids</code></a></td>
    <td></td>
    <td>Fetch uptime for multiple Synthetic tests by ID.</td>
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

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="fetch_uptimes"
    values={[
        { label: 'fetch_uptimes', value: 'fetch_uptimes' }
    ]}
>
<TabItem value="fetch_uptimes">

Fetch uptime for multiple Synthetic tests by ID.

```sql
EXEC datadog.monitoring.synthetics_test_uptimes.fetch_uptimes 
@@json=
'{
"from_ts": {{ from_ts }}, 
"public_ids": "{{ public_ids }}", 
"to_ts": {{ to_ts }}
}'
;
```
</TabItem>
</Tabs>
