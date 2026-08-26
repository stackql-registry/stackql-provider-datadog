--- 
title: sourcemaps
hide_title: false
hide_table_of_contents: false
keywords:
  - sourcemaps
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>sourcemaps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sourcemaps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.sourcemaps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sourcemaps"
    values={[
        { label: 'get_sourcemaps', value: 'get_sourcemaps' },
        { label: 'list_sourcemaps', value: 'list_sourcemaps' }
    ]}
>
<TabItem value="get_sourcemaps">

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
    <td>The unique identifier of the source map file, typically the path to the file. (example: path/to/sourcemap.js.map)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a JavaScript source map file.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for source map file objects. (sourcemap_files) (example: sourcemap_files)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sourcemaps">

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
    <td>The unique identifier of the source map. (example: 5)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a JavaScript source map.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for source map objects. (sourcemaps) (example: sourcemaps)</td>
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
    <td><a href="#get_sourcemaps"><CopyableCode code="get_sourcemaps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filename"><code>filename</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Retrieves the content of a specific JavaScript source map file by its&lt;br /&gt;filename, service name, and version.</td>
</tr>
<tr>
    <td><a href="#list_sourcemaps"><CopyableCode code="list_sourcemaps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-mapkind"><code>mapkind</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-filter[service]"><code>filter[service]</code></a>, <a href="#parameter-filter[version]"><code>filter[version]</code></a>, <a href="#parameter-filter[variant]"><code>filter[variant]</code></a>, <a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-filter[build_id]"><code>filter[build_id]</code></a>, <a href="#parameter-filter[uuid]"><code>filter[uuid]</code></a>, <a href="#parameter-filter[platform]"><code>filter[platform]</code></a>, <a href="#parameter-filter[build_number]"><code>filter[build_number]</code></a>, <a href="#parameter-filter[bundle_name]"><code>filter[bundle_name]</code></a>, <a href="#parameter-filter[arch]"><code>filter[arch]</code></a>, <a href="#parameter-filter[symbol_source]"><code>filter[symbol_source]</code></a>, <a href="#parameter-filter[origin]"><code>filter[origin]</code></a>, <a href="#parameter-filter[origin_version]"><code>filter[origin_version]</code></a>, <a href="#parameter-filter[filename]"><code>filter[filename]</code></a>, <a href="#parameter-filter[debug_id]"><code>filter[debug_id]</code></a>, <a href="#parameter-filter[gnu_build_id]"><code>filter[gnu_build_id]</code></a>, <a href="#parameter-filter[go_build_id]"><code>filter[go_build_id]</code></a>, <a href="#parameter-filter[file_hash]"><code>filter[file_hash]</code></a></td>
    <td>Retrieves a paginated list of source maps matching the specified filter criteria.</td>
</tr>
<tr>
    <td><a href="#delete_sourcemaps"><CopyableCode code="delete_sourcemaps" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mapkind"><code>mapkind</code></a>, <a href="#parameter-dry_run"><code>dry_run</code></a></td>
    <td><a href="#parameter-filter[service]"><code>filter[service]</code></a>, <a href="#parameter-filter[version]"><code>filter[version]</code></a>, <a href="#parameter-filter[variant]"><code>filter[variant]</code></a>, <a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-filter[build_id]"><code>filter[build_id]</code></a>, <a href="#parameter-filter[uuid]"><code>filter[uuid]</code></a>, <a href="#parameter-filter[platform]"><code>filter[platform]</code></a>, <a href="#parameter-filter[build_number]"><code>filter[build_number]</code></a>, <a href="#parameter-filter[bundle_name]"><code>filter[bundle_name]</code></a>, <a href="#parameter-filter[arch]"><code>filter[arch]</code></a>, <a href="#parameter-filter[symbol_source]"><code>filter[symbol_source]</code></a>, <a href="#parameter-filter[origin]"><code>filter[origin]</code></a>, <a href="#parameter-filter[origin_version]"><code>filter[origin_version]</code></a>, <a href="#parameter-filter[filename]"><code>filter[filename]</code></a>, <a href="#parameter-filter[debug_id]"><code>filter[debug_id]</code></a>, <a href="#parameter-filter[gnu_build_id]"><code>filter[gnu_build_id]</code></a>, <a href="#parameter-filter[go_build_id]"><code>filter[go_build_id]</code></a>, <a href="#parameter-filter[file_hash]"><code>filter[file_hash]</code></a></td>
    <td>Deletes source maps matching the specified filter criteria. Supports&lt;br /&gt;dry-run mode to preview which source maps would be deleted without&lt;br /&gt;performing the actual deletion.</td>
</tr>
<tr>
    <td><a href="#restore_sourcemaps"><CopyableCode code="restore_sourcemaps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-mapkind"><code>mapkind</code></a>, <a href="#parameter-dry_run"><code>dry_run</code></a></td>
    <td><a href="#parameter-filter[service]"><code>filter[service]</code></a>, <a href="#parameter-filter[version]"><code>filter[version]</code></a>, <a href="#parameter-filter[variant]"><code>filter[variant]</code></a>, <a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-filter[build_id]"><code>filter[build_id]</code></a>, <a href="#parameter-filter[uuid]"><code>filter[uuid]</code></a>, <a href="#parameter-filter[platform]"><code>filter[platform]</code></a>, <a href="#parameter-filter[build_number]"><code>filter[build_number]</code></a>, <a href="#parameter-filter[bundle_name]"><code>filter[bundle_name]</code></a>, <a href="#parameter-filter[arch]"><code>filter[arch]</code></a>, <a href="#parameter-filter[symbol_source]"><code>filter[symbol_source]</code></a>, <a href="#parameter-filter[origin]"><code>filter[origin]</code></a>, <a href="#parameter-filter[origin_version]"><code>filter[origin_version]</code></a>, <a href="#parameter-filter[filename]"><code>filter[filename]</code></a>, <a href="#parameter-filter[debug_id]"><code>filter[debug_id]</code></a>, <a href="#parameter-filter[gnu_build_id]"><code>filter[gnu_build_id]</code></a>, <a href="#parameter-filter[go_build_id]"><code>filter[go_build_id]</code></a>, <a href="#parameter-filter[file_hash]"><code>filter[file_hash]</code></a></td>
    <td>Restores previously deleted source maps matching the specified filter&lt;br /&gt;criteria. Supports dry-run mode to preview which source maps would be&lt;br /&gt;restored without performing the actual restoration.</td>
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
<tr id="parameter-dry_run">
    <td><CopyableCode code="dry_run" /></td>
    <td><code>boolean</code></td>
    <td>When set to `true`, returns the source maps that would be restored without performing the actual restoration. When set to `false`, performs the restoration.</td>
</tr>
<tr id="parameter-filename">
    <td><CopyableCode code="filename" /></td>
    <td><code>string</code></td>
    <td>The path to the source map file.</td>
</tr>
<tr id="parameter-mapkind">
    <td><CopyableCode code="mapkind" /></td>
    <td><code>string</code></td>
    <td>The type of source map. Valid values are `js`, `jvm`, `ios`, `react`, `flutter`, `elf`, `ndk`, `il2cpp`.</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The service name associated with the source map.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the service associated with the source map.</td>
</tr>
<tr id="parameter-filter[arch]">
    <td><CopyableCode code="filter[arch]" /></td>
    <td><code>array</code></td>
    <td>Filter by architecture values (multiple values allowed). Supported for `flutter`, `elf`, and `ndk`.</td>
</tr>
<tr id="parameter-filter[build_id]">
    <td><CopyableCode code="filter[build_id]" /></td>
    <td><code>array</code></td>
    <td>Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, and `il2cpp`.</td>
</tr>
<tr id="parameter-filter[build_number]">
    <td><CopyableCode code="filter[build_number]" /></td>
    <td><code>array</code></td>
    <td>Filter by build number values (multiple values allowed). Supported for `react`.</td>
</tr>
<tr id="parameter-filter[bundle_name]">
    <td><CopyableCode code="filter[bundle_name]" /></td>
    <td><code>array</code></td>
    <td>Filter by bundle name values (multiple values allowed). Supported for `react`.</td>
</tr>
<tr id="parameter-filter[debug_id]">
    <td><CopyableCode code="filter[debug_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by debug ID (single value). Supported for `react`.</td>
</tr>
<tr id="parameter-filter[file_hash]">
    <td><CopyableCode code="filter[file_hash]" /></td>
    <td><code>string</code></td>
    <td>Filter by file hash (single value). Supported for `elf`.</td>
</tr>
<tr id="parameter-filter[filename]">
    <td><CopyableCode code="filter[filename]" /></td>
    <td><code>string</code></td>
    <td>Filter by filename (single value). Supported for `js`, `elf`, and `ndk`.</td>
</tr>
<tr id="parameter-filter[gnu_build_id]">
    <td><CopyableCode code="filter[gnu_build_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by GNU build ID (single value). Supported for `elf`.</td>
</tr>
<tr id="parameter-filter[go_build_id]">
    <td><CopyableCode code="filter[go_build_id]" /></td>
    <td><code>string</code></td>
    <td>Filter by Go build ID (single value). Supported for `elf`.</td>
</tr>
<tr id="parameter-filter[id]">
    <td><CopyableCode code="filter[id]" /></td>
    <td><code>array</code></td>
    <td>Filter by source map ID values (multiple values allowed). Supported for all map kinds.</td>
</tr>
<tr id="parameter-filter[origin]">
    <td><CopyableCode code="filter[origin]" /></td>
    <td><code>array</code></td>
    <td>Filter by origin values (multiple values allowed). Supported for `elf`.</td>
</tr>
<tr id="parameter-filter[origin_version]">
    <td><CopyableCode code="filter[origin_version]" /></td>
    <td><code>array</code></td>
    <td>Filter by origin version values (multiple values allowed). Supported for `elf`.</td>
</tr>
<tr id="parameter-filter[platform]">
    <td><CopyableCode code="filter[platform]" /></td>
    <td><code>array</code></td>
    <td>Filter by platform values (multiple values allowed). Supported for `react`.</td>
</tr>
<tr id="parameter-filter[service]">
    <td><CopyableCode code="filter[service]" /></td>
    <td><code>array</code></td>
    <td>Filter by service names (multiple values allowed). Required for `js`, `jvm`, `react`, and `flutter` map kinds.</td>
</tr>
<tr id="parameter-filter[symbol_source]">
    <td><CopyableCode code="filter[symbol_source]" /></td>
    <td><code>array</code></td>
    <td>Filter by symbol source values (multiple values allowed). Supported for `elf`.</td>
</tr>
<tr id="parameter-filter[uuid]">
    <td><CopyableCode code="filter[uuid]" /></td>
    <td><code>array</code></td>
    <td>Filter by UUID values (multiple values allowed). Supported for `ios`.</td>
</tr>
<tr id="parameter-filter[variant]">
    <td><CopyableCode code="filter[variant]" /></td>
    <td><code>array</code></td>
    <td>Filter by variant values (multiple values allowed). Supported for `jvm`.</td>
</tr>
<tr id="parameter-filter[version]">
    <td><CopyableCode code="filter[version]" /></td>
    <td><code>array</code></td>
    <td>Filter by version values (multiple values allowed, maximum 10). Required for `js`, `jvm`, `react`, and `flutter` map kinds.</td>
</tr>
<tr id="parameter-mapkind">
    <td><CopyableCode code="mapkind" /></td>
    <td><code>string</code></td>
    <td>The type of source map. Defaults to `js`.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to retrieve, starting from 1.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of results to return per page. Must be at least 1.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sourcemaps"
    values={[
        { label: 'get_sourcemaps', value: 'get_sourcemaps' },
        { label: 'list_sourcemaps', value: 'list_sourcemaps' }
    ]}
>
<TabItem value="get_sourcemaps">

Retrieves the content of a specific JavaScript source map file by its&lt;br /&gt;filename, service name, and version.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.sourcemaps
WHERE filename = '{{ filename }}' -- required
AND service = '{{ service }}' -- required
AND version = '{{ version }}' -- required
;
```
</TabItem>
<TabItem value="list_sourcemaps">

Retrieves a paginated list of source maps matching the specified filter criteria.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.sourcemaps
WHERE mapkind = '{{ mapkind }}'
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND filter[service] = '{{ filter[service] }}'
AND filter[version] = '{{ filter[version] }}'
AND filter[variant] = '{{ filter[variant] }}'
AND filter[id] = '{{ filter[id] }}'
AND filter[build_id] = '{{ filter[build_id] }}'
AND filter[uuid] = '{{ filter[uuid] }}'
AND filter[platform] = '{{ filter[platform] }}'
AND filter[build_number] = '{{ filter[build_number] }}'
AND filter[bundle_name] = '{{ filter[bundle_name] }}'
AND filter[arch] = '{{ filter[arch] }}'
AND filter[symbol_source] = '{{ filter[symbol_source] }}'
AND filter[origin] = '{{ filter[origin] }}'
AND filter[origin_version] = '{{ filter[origin_version] }}'
AND filter[filename] = '{{ filter[filename] }}'
AND filter[debug_id] = '{{ filter[debug_id] }}'
AND filter[gnu_build_id] = '{{ filter[gnu_build_id] }}'
AND filter[go_build_id] = '{{ filter[go_build_id] }}'
AND filter[file_hash] = '{{ filter[file_hash] }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sourcemaps"
    values={[
        { label: 'delete_sourcemaps', value: 'delete_sourcemaps' }
    ]}
>
<TabItem value="delete_sourcemaps">

Deletes source maps matching the specified filter criteria. Supports&lt;br /&gt;dry-run mode to preview which source maps would be deleted without&lt;br /&gt;performing the actual deletion.

```sql
DELETE FROM datadog.digital_experience.sourcemaps
WHERE mapkind = '{{ mapkind }}' --required
AND dry_run = '{{ dry_run }}' --required
AND filter[service] = '{{ filter[service] }}'
AND filter[version] = '{{ filter[version] }}'
AND filter[variant] = '{{ filter[variant] }}'
AND filter[id] = '{{ filter[id] }}'
AND filter[build_id] = '{{ filter[build_id] }}'
AND filter[uuid] = '{{ filter[uuid] }}'
AND filter[platform] = '{{ filter[platform] }}'
AND filter[build_number] = '{{ filter[build_number] }}'
AND filter[bundle_name] = '{{ filter[bundle_name] }}'
AND filter[arch] = '{{ filter[arch] }}'
AND filter[symbol_source] = '{{ filter[symbol_source] }}'
AND filter[origin] = '{{ filter[origin] }}'
AND filter[origin_version] = '{{ filter[origin_version] }}'
AND filter[filename] = '{{ filter[filename] }}'
AND filter[debug_id] = '{{ filter[debug_id] }}'
AND filter[gnu_build_id] = '{{ filter[gnu_build_id] }}'
AND filter[go_build_id] = '{{ filter[go_build_id] }}'
AND filter[file_hash] = '{{ filter[file_hash] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="restore_sourcemaps"
    values={[
        { label: 'restore_sourcemaps', value: 'restore_sourcemaps' }
    ]}
>
<TabItem value="restore_sourcemaps">

Restores previously deleted source maps matching the specified filter&lt;br /&gt;criteria. Supports dry-run mode to preview which source maps would be&lt;br /&gt;restored without performing the actual restoration.

```sql
EXEC datadog.digital_experience.sourcemaps.restore_sourcemaps 
@mapkind='{{ mapkind }}' --required, 
@dry_run='{{ dry_run }}' --required, 
@filter[service]='{{ filter[service] }}', 
@filter[version]='{{ filter[version] }}', 
@filter[variant]='{{ filter[variant] }}', 
@filter[id]='{{ filter[id] }}', 
@filter[build_id]='{{ filter[build_id] }}', 
@filter[uuid]='{{ filter[uuid] }}', 
@filter[platform]='{{ filter[platform] }}', 
@filter[build_number]='{{ filter[build_number] }}', 
@filter[bundle_name]='{{ filter[bundle_name] }}', 
@filter[arch]='{{ filter[arch] }}', 
@filter[symbol_source]='{{ filter[symbol_source] }}', 
@filter[origin]='{{ filter[origin] }}', 
@filter[origin_version]='{{ filter[origin_version] }}', 
@filter[filename]='{{ filter[filename] }}', 
@filter[debug_id]='{{ filter[debug_id] }}', 
@filter[gnu_build_id]='{{ filter[gnu_build_id] }}', 
@filter[go_build_id]='{{ filter[go_build_id] }}', 
@filter[file_hash]='{{ filter[file_hash] }}'
;
```
</TabItem>
</Tabs>
