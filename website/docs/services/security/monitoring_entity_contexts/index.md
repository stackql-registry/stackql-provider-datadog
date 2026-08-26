--- 
title: monitoring_entity_contexts
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_entity_contexts
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

Creates, updates, deletes, gets or lists a <code>monitoring_entity_contexts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_entity_contexts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_entity_contexts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_single_entity_context"
    values={[
        { label: 'get_single_entity_context', value: 'get_single_entity_context' },
        { label: 'get_entity_context', value: 'get_entity_context' }
    ]}
>
<TabItem value="get_single_entity_context">

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
    <td>The unique identifier of the entity. (example: user@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an entity context entry, grouping all the historical revisions of the entity.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the entity. Reflects the underlying entity kind from the entity context store (for example, `siem_entity_identity` for identities). Defaults to `entity` when the kind is unknown. (default: entity, example: siem_entity_identity)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_entity_context">

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
    <td>The unique identifier of the entity. (example: user@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an entity context entry, grouping all the historical revisions of the entity.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the entity. Reflects the underlying entity kind from the entity context store (for example, `siem_entity_identity` for identities). Defaults to `entity` when the kind is unknown. (default: entity, example: siem_entity_identity)</td>
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
    <td><a href="#get_single_entity_context"><CopyableCode code="get_single_entity_context" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-as_of"><code>as_of</code></a></td>
    <td>Get a single entity from the Cloud SIEM entity context store by its identifier, returning the historical&lt;br /&gt;revisions of the entity in the requested time range. The endpoint can either return revisions across an&lt;br /&gt;interval (`from` / `to`) or the snapshot of the entity at a single point in time (`as_of`); the two modes&lt;br /&gt;are mutually exclusive.</td>
</tr>
<tr>
    <td><a href="#get_entity_context"><CopyableCode code="get_entity_context" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-as_of"><code>as_of</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page_token"><code>page_token</code></a></td>
    <td>Search the Cloud SIEM entity context store for entities that match a query, and return the historical&lt;br /&gt;revisions of each entity in the requested time range. The endpoint can either return revisions across an&lt;br /&gt;interval (`from` / `to`) or the snapshot of each entity at a single point in time (`as_of`); the two modes&lt;br /&gt;are mutually exclusive.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the entity to retrieve.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-as_of">
    <td><CopyableCode code="as_of" /></td>
    <td><code>string</code></td>
    <td>A point in time at which to query the entity revisions, as an RFC3339 timestamp, a Unix timestamp (in seconds), or a relative time (for example, `now-1d`). When set, `from` and `to` are ignored. Cannot be combined with custom `from` / `to` values. (example: now-1d)</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>The start of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now-7d`). Defaults to `now-7d`. Ignored when `as_of` is set.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of entities to return.</td>
</tr>
<tr id="parameter-page_token">
    <td><CopyableCode code="page_token" /></td>
    <td><code>string</code></td>
    <td>An opaque token used to fetch the next page of results, as returned in `meta.page.next_token` of a previous response.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>A free-text query (for example, an email address or principal ID) used to filter the entities returned. (example: user@example.com)</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td>The end of the time range to query, as an RFC3339 timestamp or a relative time (for example, `now`). Defaults to `now`. Ignored when `as_of` is set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_single_entity_context"
    values={[
        { label: 'get_single_entity_context', value: 'get_single_entity_context' },
        { label: 'get_entity_context', value: 'get_entity_context' }
    ]}
>
<TabItem value="get_single_entity_context">

Get a single entity from the Cloud SIEM entity context store by its identifier, returning the historical&lt;br /&gt;revisions of the entity in the requested time range. The endpoint can either return revisions across an&lt;br /&gt;interval (`from` / `to`) or the snapshot of the entity at a single point in time (`as_of`); the two modes&lt;br /&gt;are mutually exclusive.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_entity_contexts
WHERE id = '{{ id }}' -- required
AND from = '{{ from }}'
AND to = '{{ to }}'
AND as_of = '{{ as_of }}'
;
```
</TabItem>
<TabItem value="get_entity_context">

Search the Cloud SIEM entity context store for entities that match a query, and return the historical&lt;br /&gt;revisions of each entity in the requested time range. The endpoint can either return revisions across an&lt;br /&gt;interval (`from` / `to`) or the snapshot of each entity at a single point in time (`as_of`); the two modes&lt;br /&gt;are mutually exclusive.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_entity_contexts
WHERE query = '{{ query }}'
AND from = '{{ from }}'
AND to = '{{ to }}'
AND as_of = '{{ as_of }}'
AND limit = '{{ limit }}'
AND page_token = '{{ page_token }}'
;
```
</TabItem>
</Tabs>
