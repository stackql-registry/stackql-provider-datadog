--- 
title: static_analysis_server
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_server
  - security
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

Creates, updates, deletes, gets or lists a <code>static_analysis_server</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_server" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_server" /></td></tr>
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
    <td><a href="#create_static_analysis_server_analysis"><CopyableCode code="create_static_analysis_server_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Run static analysis rules against a source code file and return violations found.</td>
</tr>
<tr>
    <td><a href="#create_static_analysis_ast"><CopyableCode code="create_static_analysis_ast" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Parse source code into an abstract syntax tree (AST) for the specified language.</td>
</tr>
<tr>
    <td><a href="#get_static_analysis_node_types"><CopyableCode code="get_static_analysis_node_types" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Retrieve tree-sitter node type definitions for a given programming language.</td>
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
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The programming language for which to retrieve node type definitions.</td>
</tr>
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
    defaultValue="create_static_analysis_server_analysis"
    values={[
        { label: 'create_static_analysis_server_analysis', value: 'create_static_analysis_server_analysis' },
        { label: 'create_static_analysis_ast', value: 'create_static_analysis_ast' },
        { label: 'get_static_analysis_node_types', value: 'get_static_analysis_node_types' }
    ]}
>
<TabItem value="create_static_analysis_server_analysis">

Run static analysis rules against a source code file and return violations found.

```sql
EXEC datadog.security.static_analysis_server.create_static_analysis_server_analysis 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="create_static_analysis_ast">

Parse source code into an abstract syntax tree (AST) for the specified language.

```sql
EXEC datadog.security.static_analysis_server.create_static_analysis_ast 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="get_static_analysis_node_types">

Retrieve tree-sitter node type definitions for a given programming language.

```sql
EXEC datadog.security.static_analysis_server.get_static_analysis_node_types 
@language='{{ language }}' --required 
;
```
</TabItem>
</Tabs>
