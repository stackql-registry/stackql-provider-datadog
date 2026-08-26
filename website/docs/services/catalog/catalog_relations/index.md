--- 
title: catalog_relations
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_relations
  - catalog
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

Creates, updates, deletes, gets or lists a <code>catalog_relations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_relations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.catalog.catalog_relations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_catalog_relation"
    values={[
        { label: 'list_catalog_relation', value: 'list_catalog_relation' }
    ]}
>
<TabItem value="list_catalog_relation">

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
    <td>Relation ID.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Relation attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Relation metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relation relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="subtype" /></td>
    <td><code>string</code></td>
    <td>Relation subtype.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Relation type. (relation)</td>
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
    <td><a href="#list_catalog_relation"><CopyableCode code="list_catalog_relation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-filter[type]"><code>filter[type]</code></a>, <a href="#parameter-filter[from_ref]"><code>filter[from_ref]</code></a>, <a href="#parameter-filter[to_ref]"><code>filter[to_ref]</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-include_discovered"><code>include_discovered</code></a></td>
    <td>Get a list of entity relations from Software Catalog.</td>
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
<tr id="parameter-filter[from_ref]">
    <td><CopyableCode code="filter[from_ref]" /></td>
    <td><code>string</code></td>
    <td>Filter relations by the reference of the first entity in the relation. (example: service:shopping-cart)</td>
</tr>
<tr id="parameter-filter[to_ref]">
    <td><CopyableCode code="filter[to_ref]" /></td>
    <td><code>string</code></td>
    <td>Filter relations by the reference of the second entity in the relation. (example: service:shopping-cart)</td>
</tr>
<tr id="parameter-filter[type]">
    <td><CopyableCode code="filter[type]" /></td>
    <td><code>string</code></td>
    <td>Filter relations by type.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Include relationship data.</td>
</tr>
<tr id="parameter-include_discovered">
    <td><CopyableCode code="include_discovered" /></td>
    <td><code>boolean</code></td>
    <td>If true, includes relationships discovered by APM and USM. (wire: includeDiscovered)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of relations in the response. (example: 100)</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific offset to use as the beginning of the returned page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_catalog_relation"
    values={[
        { label: 'list_catalog_relation', value: 'list_catalog_relation' }
    ]}
>
<TabItem value="list_catalog_relation">

Get a list of entity relations from Software Catalog.

```sql
SELECT
id,
attributes,
meta,
relationships,
subtype,
type
FROM datadog.catalog.catalog_relations
WHERE page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
AND filter[type] = '{{ filter[type] }}'
AND filter[from_ref] = '{{ filter[from_ref] }}'
AND filter[to_ref] = '{{ filter[to_ref] }}'
AND include = '{{ include }}'
AND include_discovered = '{{ include_discovered }}'
;
```
</TabItem>
</Tabs>
