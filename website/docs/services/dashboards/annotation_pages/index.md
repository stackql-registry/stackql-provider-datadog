--- 
title: annotation_pages
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_pages
  - dashboards
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

Creates, updates, deletes, gets or lists an <code>annotation_pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotation_pages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.annotation_pages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_page_annotations"
    values={[
        { label: 'get_page_annotations', value: 'get_page_annotations' }
    ]}
>
<TabItem value="get_page_annotations">

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
    <td>ID of the page, prefixed with the page type and joined by a colon (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`). (example: dashboard:abc-def-xyz)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the annotations on a page.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Page annotations resource type. (page_annotations) (example: page_annotations)</td>
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
    <td><a href="#get_page_annotations"><CopyableCode code="get_page_annotations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-start_time"><code>start_time</code></a>, <a href="#parameter-end_time"><code>end_time</code></a></td>
    <td></td>
    <td>Returns all annotations on a specific page for a given time window, grouped by widget.&lt;br /&gt;Unlike `ListAnnotations`, this endpoint returns a single structured object with annotations&lt;br /&gt;indexed by their ID and a widget-to-annotation mapping for easy UI rendering.</td>
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
<tr id="parameter-end_time">
    <td><CopyableCode code="end_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>End of the time window in milliseconds since the Unix epoch. (example: 1704153600000)</td>
</tr>
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the page, prefixed with the page type and joined by a colon (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`). (example: dashboard:abc-def-xyz)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-start_time">
    <td><CopyableCode code="start_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start of the time window in milliseconds since the Unix epoch. (example: 1704067200000)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_page_annotations"
    values={[
        { label: 'get_page_annotations', value: 'get_page_annotations' }
    ]}
>
<TabItem value="get_page_annotations">

Returns all annotations on a specific page for a given time window, grouped by widget.&lt;br /&gt;Unlike `ListAnnotations`, this endpoint returns a single structured object with annotations&lt;br /&gt;indexed by their ID and a widget-to-annotation mapping for easy UI rendering.

```sql
SELECT
id,
attributes,
type
FROM datadog.dashboards.annotation_pages
WHERE page_id = '{{ page_id }}' -- required
AND start_time = '{{ start_time }}' -- required
AND end_time = '{{ end_time }}' -- required
;
```
</TabItem>
</Tabs>
