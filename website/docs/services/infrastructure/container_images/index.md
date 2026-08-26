--- 
title: container_images
hide_title: false
hide_table_of_contents: false
keywords:
  - container_images
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

Creates, updates, deletes, gets or lists a <code>container_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.container_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_container_images"
    values={[
        { label: 'list_container_images', value: 'list_container_images' }
    ]}
>
<TabItem value="list_container_images">

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
    <td>Container Image ID.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for a Container Image.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships inside a Container Image Group.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of Container Image. (container_image) (default: container_image, example: container_image)</td>
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
    <td><a href="#list_container_images"><CopyableCode code="list_container_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-group_by"><code>group_by</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a></td>
    <td>Get all Container Images for your organization.&lt;br /&gt;**Note**: To enrich the data returned by this endpoint with security scans, see the new &#91;api/v2/security/scanned-assets-metadata&#93;(https:​//docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.</td>
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
    <td>Comma-separated list of tags to filter Container Images by. (example: short_image:redis,status:running)</td>
</tr>
<tr id="parameter-group_by">
    <td><CopyableCode code="group_by" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of tags to group Container Images by. (example: registry,image_tags)</td>
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
    <td>Attribute to sort Container Images by. (example: container_count)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_container_images"
    values={[
        { label: 'list_container_images', value: 'list_container_images' }
    ]}
>
<TabItem value="list_container_images">

Get all Container Images for your organization.&lt;br /&gt;**Note**: To enrich the data returned by this endpoint with security scans, see the new &#91;api/v2/security/scanned-assets-metadata&#93;(https:​//docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.infrastructure.container_images
WHERE filter[tags] = '{{ filter[tags] }}'
AND group_by = '{{ group_by }}'
AND sort = '{{ sort }}'
AND page[size] = '{{ page[size] }}'
AND page[cursor] = '{{ page[cursor] }}'
;
```
</TabItem>
</Tabs>
