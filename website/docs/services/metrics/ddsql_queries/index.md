--- 
title: ddsql_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - ddsql_queries
  - metrics
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

Creates, updates, deletes, gets or lists a <code>ddsql_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ddsql_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.ddsql_queries" /></td></tr>
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
    <td><a href="#execute_ddsql_tabular_query"><CopyableCode code="execute_ddsql_tabular_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Submit a DDSQL statement and return either a `running` state with an opaque `query_id`&lt;br /&gt;for the client to poll, or a `completed` state with the column-major result set inlined&lt;br /&gt;when the query finishes quickly enough to be served synchronously.</td>
</tr>
<tr>
    <td><a href="#fetch_ddsql_tabular_query"><CopyableCode code="fetch_ddsql_tabular_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Poll a previously submitted DDSQL query for results. Pass the opaque `query_id` returned&lt;br /&gt;by a prior `ExecuteDdsqlTabularQuery` (or by a prior `FetchDdsqlTabularQuery` that&lt;br /&gt;returned `state: running`) and the server returns either a `running` state to poll again&lt;br /&gt;or a `completed` state with the column-major result set inlined.</td>
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
    defaultValue="execute_ddsql_tabular_query"
    values={[
        { label: 'execute_ddsql_tabular_query', value: 'execute_ddsql_tabular_query' },
        { label: 'fetch_ddsql_tabular_query', value: 'fetch_ddsql_tabular_query' }
    ]}
>
<TabItem value="execute_ddsql_tabular_query">

Submit a DDSQL statement and return either a `running` state with an opaque `query_id`&lt;br /&gt;for the client to poll, or a `completed` state with the column-major result set inlined&lt;br /&gt;when the query finishes quickly enough to be served synchronously.

```sql
EXEC datadog.metrics.ddsql_queries.execute_ddsql_tabular_query 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="fetch_ddsql_tabular_query">

Poll a previously submitted DDSQL query for results. Pass the opaque `query_id` returned&lt;br /&gt;by a prior `ExecuteDdsqlTabularQuery` (or by a prior `FetchDdsqlTabularQuery` that&lt;br /&gt;returned `state: running`) and the server returns either a `running` state to poll again&lt;br /&gt;or a `completed` state with the column-major result set inlined.

```sql
EXEC datadog.metrics.ddsql_queries.fetch_ddsql_tabular_query 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
