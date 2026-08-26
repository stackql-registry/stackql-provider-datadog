--- 
title: widgets
hide_title: false
hide_table_of_contents: false
keywords:
  - widgets
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

Creates, updates, deletes, gets or lists a <code>widgets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="widgets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.widgets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_widget"
    values={[
        { label: 'get_widget', value: 'get_widget' },
        { label: 'search_widgets', value: 'search_widgets' }
    ]}
>
<TabItem value="get_widget">

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
    <td>The unique identifier of the widget. (example: a1b2c3d4-e5f6-7890-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a widget resource.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the widget resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Widgets resource type. (example: widgets)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_widgets">

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
    <td>The unique identifier of the widget. (example: a1b2c3d4-e5f6-7890-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a widget resource.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the widget resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Widgets resource type. (example: widgets)</td>
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
    <td><a href="#get_widget"><CopyableCode code="get_widget" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-experience_type"><code>experience_type</code></a>, <a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>Retrieve a widget by its UUID for a given experience type.</td>
</tr>
<tr>
    <td><a href="#search_widgets"><CopyableCode code="search_widgets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-experience_type"><code>experience_type</code></a></td>
    <td><a href="#parameter-filter[widget_type]"><code>filter[widget_type]</code></a>, <a href="#parameter-filter[creator_handle]"><code>filter[creator_handle]</code></a>, <a href="#parameter-filter[is_favorited]"><code>filter[is_favorited]</code></a>, <a href="#parameter-filter[title]"><code>filter[title]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a></td>
    <td>Search and list widgets for a given experience type, with filtering, sorting, and pagination.&lt;br /&gt;&lt;br /&gt;**Response meta** carries totals scoped to the current filter:&lt;br /&gt;- `filtered_total` — widgets matching the filter.&lt;br /&gt;- `created_by_you_total` — among the matches, how many the current user created.&lt;br /&gt;- `favorited_by_you_total` — among the matches, how many the current user has favorited.&lt;br /&gt;- `created_by_anyone_total` — total widgets in the experience type, ignoring filters.&lt;br /&gt;&lt;br /&gt;Each returned widget includes `is_favorited` reflecting the current user's favorite status.&lt;br /&gt;Favoriting itself is performed through the shared favorites API, not this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_widget"><CopyableCode code="create_widget" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-experience_type"><code>experience_type</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new widget for a given experience type.</td>
</tr>
<tr>
    <td><a href="#update_widget"><CopyableCode code="update_widget" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-experience_type"><code>experience_type</code></a>, <a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a widget by its UUID for a given experience type. This performs a full replacement of the widget definition.</td>
</tr>
<tr>
    <td><a href="#delete_widget"><CopyableCode code="delete_widget" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-experience_type"><code>experience_type</code></a>, <a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>Soft-delete a widget by its UUID for a given experience type.</td>
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
<tr id="parameter-experience_type">
    <td><CopyableCode code="experience_type" /></td>
    <td><code>string</code></td>
    <td>The experience type for the widget.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the widget.</td>
</tr>
<tr id="parameter-filter[creator_handle]">
    <td><CopyableCode code="filter[creator_handle]" /></td>
    <td><code>string</code></td>
    <td>Filter widgets by the email handle of the creator. (wire: filter&#91;creatorHandle&#93;)</td>
</tr>
<tr id="parameter-filter[is_favorited]">
    <td><CopyableCode code="filter[is_favorited]" /></td>
    <td><code>boolean</code></td>
    <td>Filter to only widgets favorited by the current user. (wire: filter&#91;isFavorited&#93;)</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Filter widgets by tags. Format as bracket-delimited CSV, e.g. `&#91;tag1,tag2&#93;`.</td>
</tr>
<tr id="parameter-filter[title]">
    <td><CopyableCode code="filter[title]" /></td>
    <td><code>string</code></td>
    <td>Filter widgets by title (substring match).</td>
</tr>
<tr id="parameter-filter[widget_type]">
    <td><CopyableCode code="filter[widget_type]" /></td>
    <td><code>string</code></td>
    <td>Filter widgets by widget type. (wire: filter&#91;widgetType&#93;)</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number for pagination (0-indexed).</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of widgets per page.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort field for the results.  **`title`, `created_at`, `modified_at`** — both ascending and descending are supported. Use the bare field name for ascending (e.g. `sort=title`) or prefix with `-` for descending (e.g. `sort=-modified_at`).  **`is_favorited`** — returns favorites-first ordering (favorited widgets first, then the rest). Direction is fixed; the `-` prefix is ignored for this field.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_widget"
    values={[
        { label: 'get_widget', value: 'get_widget' },
        { label: 'search_widgets', value: 'search_widgets' }
    ]}
>
<TabItem value="get_widget">

Retrieve a widget by its UUID for a given experience type.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.widgets
WHERE experience_type = '{{ experience_type }}' -- required
AND uuid = '{{ uuid }}' -- required
;
```
</TabItem>
<TabItem value="search_widgets">

Search and list widgets for a given experience type, with filtering, sorting, and pagination.&lt;br /&gt;&lt;br /&gt;**Response meta** carries totals scoped to the current filter:&lt;br /&gt;- `filtered_total` — widgets matching the filter.&lt;br /&gt;- `created_by_you_total` — among the matches, how many the current user created.&lt;br /&gt;- `favorited_by_you_total` — among the matches, how many the current user has favorited.&lt;br /&gt;- `created_by_anyone_total` — total widgets in the experience type, ignoring filters.&lt;br /&gt;&lt;br /&gt;Each returned widget includes `is_favorited` reflecting the current user's favorite status.&lt;br /&gt;Favoriting itself is performed through the shared favorites API, not this endpoint.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.widgets
WHERE experience_type = '{{ experience_type }}' -- required
AND filter[widget_type] = '{{ filter[widget_type] }}'
AND filter[creator_handle] = '{{ filter[creator_handle] }}'
AND filter[is_favorited] = '{{ filter[is_favorited] }}'
AND filter[title] = '{{ filter[title] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND sort = '{{ sort }}'
AND page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_widget"
    values={[
        { label: 'create_widget', value: 'create_widget' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_widget">

Create a new widget for a given experience type.

```sql
INSERT INTO datadog.dashboards.widgets (
data,
experience_type
)
SELECT 
'{{ data }}' /* required */,
'{{ experience_type }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: widgets
  props:
    - name: experience_type
      value: "{{ experience_type }}"
      description: Required parameter for the widgets resource.
    - name: data
      description: |
        Data for creating or updating a widget.
      value:
        attributes:
          definition:
            title: "{{ title }}"
            type: "{{ type }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_widget"
    values={[
        { label: 'update_widget', value: 'update_widget' }
    ]}
>
<TabItem value="update_widget">

Update a widget by its UUID for a given experience type. This performs a full replacement of the widget definition.

```sql
REPLACE datadog.dashboards.widgets
SET 
data = '{{ data }}'
WHERE 
experience_type = '{{ experience_type }}' --required
AND uuid = '{{ uuid }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_widget"
    values={[
        { label: 'delete_widget', value: 'delete_widget' }
    ]}
>
<TabItem value="delete_widget">

Soft-delete a widget by its UUID for a given experience type.

```sql
DELETE FROM datadog.dashboards.widgets
WHERE experience_type = '{{ experience_type }}' --required
AND uuid = '{{ uuid }}' --required
;
```
</TabItem>
</Tabs>
