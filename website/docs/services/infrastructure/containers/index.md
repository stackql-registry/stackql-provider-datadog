--- 
title: containers
hide_title: false
hide_table_of_contents: false
keywords:
  - containers
  - infrastructure
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

Creates, updates, deletes, gets or lists a <code>containers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="containers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.containers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_containers"
    values={[
        { label: 'list_containers', value: 'list_containers' }
    ]}
>
<TabItem value="list_containers">

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
    <td>Container ID.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for a container.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships to containers inside a container group.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of container. (container) (default: container, example: container)</td>
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
    <td><a href="#list_containers"><CopyableCode code="list_containers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-group_by"><code>group_by</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a></td>
    <td>Get all containers for your organization.</td>
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
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of tags to filter containers by. (example: env:prod,short_image:cassandra)</td>
</tr>
<tr id="parameter-group_by">
    <td><CopyableCode code="group_by" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of tags to group containers by. (example: datacenter,cluster)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>String to query the next page of results. This key is provided with each valid response from the API in `meta.pagination.next_cursor`.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of results returned.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Attribute to sort containers by. (example: started_at)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_containers"
    values={[
        { label: 'list_containers', value: 'list_containers' }
    ]}
>
<TabItem value="list_containers">

Get all containers for your organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.infrastructure.containers
WHERE filter[tags] = '{{ filter[tags] }}'
AND group_by = '{{ group_by }}'
AND sort = '{{ sort }}'
AND page[size] = '{{ page[size] }}'
AND page[cursor] = '{{ page[cursor] }}'
;
```
</TabItem>
</Tabs>
