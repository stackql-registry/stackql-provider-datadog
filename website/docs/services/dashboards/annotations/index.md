--- 
title: annotations
hide_title: false
hide_table_of_contents: false
keywords:
  - annotations
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

Creates, updates, deletes, gets or lists an <code>annotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.annotations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_annotations"
    values={[
        { label: 'list_annotations', value: 'list_annotations' }
    ]}
>
<TabItem value="list_annotations">

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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the annotation. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an annotation returned in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Annotation resource type. (annotation) (example: annotation)</td>
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
    <td><a href="#list_annotations"><CopyableCode code="list_annotations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-start_time"><code>start_time</code></a>, <a href="#parameter-end_time"><code>end_time</code></a></td>
    <td><a href="#parameter-widget_id"><code>widget_id</code></a></td>
    <td>Returns a flat list of annotations matching the given page, time window, and optional widget filter.</td>
</tr>
<tr>
    <td><a href="#create_annotation"><CopyableCode code="create_annotation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new annotation on a dashboard or notebook page.&lt;br /&gt;Valid `color` values: `gray`, `blue`, `purple`, `green`, `yellow`, `red`.&lt;br /&gt;Valid `type` values: `pointInTime` (marks a single moment) or `timeRegion` (spans a range and requires `end_time`).</td>
</tr>
<tr>
    <td><a href="#update_annotation"><CopyableCode code="update_annotation" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-annotation_id"><code>annotation_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates an existing annotation.&lt;br /&gt;Valid `color` values: `gray`, `blue`, `purple`, `green`, `yellow`, `red`.&lt;br /&gt;Valid `type` values: `pointInTime` (marks a single moment) or `timeRegion` (spans a range and requires `end_time`).</td>
</tr>
<tr>
    <td><a href="#delete_annotation"><CopyableCode code="delete_annotation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-annotation_id"><code>annotation_id</code></a></td>
    <td></td>
    <td>Deletes an existing annotation by ID.&lt;br /&gt;Returns `204 No Content` if the annotation does not exist (idempotent).</td>
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
<tr id="parameter-annotation_id">
    <td><CopyableCode code="annotation_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the annotation. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr id="parameter-end_time">
    <td><CopyableCode code="end_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>End of the time window in milliseconds since the Unix epoch. (example: 1704153600000)</td>
</tr>
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string</code></td>
    <td>ID of the page to list annotations for, prefixed with the page type and joined by a colon (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`). (example: dashboard:abc-def-xyz)</td>
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
<tr id="parameter-widget_id">
    <td><CopyableCode code="widget_id" /></td>
    <td><code>string</code></td>
    <td>Optional widget ID to restrict results to annotations on a specific widget.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_annotations"
    values={[
        { label: 'list_annotations', value: 'list_annotations' }
    ]}
>
<TabItem value="list_annotations">

Returns a flat list of annotations matching the given page, time window, and optional widget filter.

```sql
SELECT
id,
attributes,
type
FROM datadog.dashboards.annotations
WHERE page_id = '{{ page_id }}' -- required
AND start_time = '{{ start_time }}' -- required
AND end_time = '{{ end_time }}' -- required
AND widget_id = '{{ widget_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_annotation"
    values={[
        { label: 'create_annotation', value: 'create_annotation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_annotation">

Creates a new annotation on a dashboard or notebook page.&lt;br /&gt;Valid `color` values: `gray`, `blue`, `purple`, `green`, `yellow`, `red`.&lt;br /&gt;Valid `type` values: `pointInTime` (marks a single moment) or `timeRegion` (spans a range and requires `end_time`).

```sql
INSERT INTO datadog.dashboards.annotations (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: annotations
  props:
    - name: data
      description: |
        Data for creating an annotation.
      value:
        attributes:
          color: "{{ color }}"
          description: "{{ description }}"
          end_time: {{ end_time }}
          page_id: "{{ page_id }}"
          start_time: {{ start_time }}
          type: "{{ type }}"
          widget_ids:
            - "{{ widget_ids }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_annotation"
    values={[
        { label: 'update_annotation', value: 'update_annotation' }
    ]}
>
<TabItem value="update_annotation">

Updates an existing annotation.&lt;br /&gt;Valid `color` values: `gray`, `blue`, `purple`, `green`, `yellow`, `red`.&lt;br /&gt;Valid `type` values: `pointInTime` (marks a single moment) or `timeRegion` (spans a range and requires `end_time`).

```sql
REPLACE datadog.dashboards.annotations
SET 
data = '{{ data }}'
WHERE 
annotation_id = '{{ annotation_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_annotation"
    values={[
        { label: 'delete_annotation', value: 'delete_annotation' }
    ]}
>
<TabItem value="delete_annotation">

Deletes an existing annotation by ID.&lt;br /&gt;Returns `204 No Content` if the annotation does not exist (idempotent).

```sql
DELETE FROM datadog.dashboards.annotations
WHERE annotation_id = '{{ annotation_id }}' --required
;
```
</TabItem>
</Tabs>
