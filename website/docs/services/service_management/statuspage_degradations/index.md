--- 
title: statuspage_degradations
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_degradations
  - service_management
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

Creates, updates, deletes, gets or lists a <code>statuspage_degradations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_degradations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspage_degradations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_degradation"
    values={[
        { label: 'get_degradation', value: 'get_degradation' },
        { label: 'list_degradations', value: 'list_degradations' }
    ]}
>
<TabItem value="get_degradation">

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
    <td>The ID of the degradation.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a degradation.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a degradation.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Degradations resource type. (degradations) (default: degradations, example: degradations)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_degradations">

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
    <td>The ID of the degradation.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a degradation.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a degradation.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Degradations resource type. (degradations) (default: degradations, example: degradations)</td>
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
    <td><a href="#get_degradation"><CopyableCode code="get_degradation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-degradation_id"><code>degradation_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieves a specific degradation by its ID.</td>
</tr>
<tr>
    <td><a href="#list_degradations"><CopyableCode code="list_degradations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[page_id]"><code>filter[page_id]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[status]"><code>filter[status]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter[source_id]"><code>filter[source_id]</code></a></td>
    <td>Lists all degradations for the organization. Optionally filter by status and page.</td>
</tr>
<tr>
    <td><a href="#create_degradation"><CopyableCode code="create_degradation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-notify_subscribers"><code>notify_subscribers</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Creates a new degradation.</td>
</tr>
<tr>
    <td><a href="#update_degradation"><CopyableCode code="update_degradation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-degradation_id"><code>degradation_id</code></a></td>
    <td><a href="#parameter-notify_subscribers"><code>notify_subscribers</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Updates an existing degradation's attributes.</td>
</tr>
<tr>
    <td><a href="#delete_degradation"><CopyableCode code="delete_degradation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-degradation_id"><code>degradation_id</code></a></td>
    <td></td>
    <td>Deletes a degradation by its ID.</td>
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
<tr id="parameter-degradation_id">
    <td><CopyableCode code="degradation_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the degradation.</td>
</tr>
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the status page.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[page_id]">
    <td><CopyableCode code="filter[page_id]" /></td>
    <td><code>string</code></td>
    <td>Optional page id filter.</td>
</tr>
<tr id="parameter-filter[source_id]">
    <td><CopyableCode code="filter[source_id]" /></td>
    <td><code>string</code></td>
    <td>Optional source ID filter. Returns only degradations whose source matches this ID (for example, an incident ID).</td>
</tr>
<tr id="parameter-filter[status]">
    <td><CopyableCode code="filter[status]" /></td>
    <td><code>string</code></td>
    <td>Optional degradation status filter. Supported values: investigating, identified, monitoring, resolved.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.</td>
</tr>
<tr id="parameter-notify_subscribers">
    <td><CopyableCode code="notify_subscribers" /></td>
    <td><code>boolean</code></td>
    <td>Whether to notify page subscribers of the degradation.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of degradations to return per page.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset to use as the start of the page.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, modified_at, -modified_at.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_degradation"
    values={[
        { label: 'get_degradation', value: 'get_degradation' },
        { label: 'list_degradations', value: 'list_degradations' }
    ]}
>
<TabItem value="get_degradation">

Retrieves a specific degradation by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_degradations
WHERE page_id = '{{ page_id }}' -- required
AND degradation_id = '{{ degradation_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_degradations">

Lists all degradations for the organization. Optionally filter by status and page.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_degradations
WHERE filter[page_id] = '{{ filter[page_id] }}'
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
AND include = '{{ include }}'
AND filter[status] = '{{ filter[status] }}'
AND sort = '{{ sort }}'
AND filter[source_id] = '{{ filter[source_id] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_degradation"
    values={[
        { label: 'create_degradation', value: 'create_degradation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_degradation">

Creates a new degradation.

```sql
INSERT INTO datadog.service_management.statuspage_degradations (
data,
meta,
page_id,
notify_subscribers,
include
)
SELECT 
'{{ data }}',
'{{ meta }}',
'{{ page_id }}',
'{{ notify_subscribers }}',
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: statuspage_degradations
  props:
    - name: page_id
      value: "{{ page_id }}"
      description: Required parameter for the statuspage_degradations resource.
    - name: data
      description: |
        The data object for creating a degradation.
      value:
        attributes:
          components_affected:
            - id: "{{ id }}"
              name: "{{ name }}"
              status: "{{ status }}"
          description: "{{ description }}"
          status: "{{ status }}"
          title: "{{ title }}"
        relationships:
          template:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
    - name: meta
      description: |
        The supported metadata for creating a degradation.
      value:
        idempotency_key: "{{ idempotency_key }}"
    - name: notify_subscribers
      value: {{ notify_subscribers }}
      description: Whether to notify page subscribers of the degradation.
      description: Whether to notify page subscribers of the degradation.
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_degradation"
    values={[
        { label: 'update_degradation', value: 'update_degradation' }
    ]}
>
<TabItem value="update_degradation">

Updates an existing degradation's attributes.

```sql
UPDATE datadog.service_management.statuspage_degradations
SET 
data = '{{ data }}',
meta = '{{ meta }}'
WHERE 
page_id = '{{ page_id }}' --required
AND degradation_id = '{{ degradation_id }}' --required
AND notify_subscribers = {{ notify_subscribers}}
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_degradation"
    values={[
        { label: 'delete_degradation', value: 'delete_degradation' }
    ]}
>
<TabItem value="delete_degradation">

Deletes a degradation by its ID.

```sql
DELETE FROM datadog.service_management.statuspage_degradations
WHERE page_id = '{{ page_id }}' --required
AND degradation_id = '{{ degradation_id }}' --required
;
```
</TabItem>
</Tabs>
