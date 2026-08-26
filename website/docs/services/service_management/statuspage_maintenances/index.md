--- 
title: statuspage_maintenances
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_maintenances
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

Creates, updates, deletes, gets or lists a <code>statuspage_maintenances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_maintenances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspage_maintenances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_maintenance"
    values={[
        { label: 'get_maintenance', value: 'get_maintenance' },
        { label: 'list_maintenances', value: 'list_maintenances' }
    ]}
>
<TabItem value="get_maintenance">

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
    <td>The ID of the maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Maintenances resource type. (maintenances) (default: maintenances, example: maintenances)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_maintenances">

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
    <td>The ID of the maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Maintenances resource type. (maintenances) (default: maintenances, example: maintenances)</td>
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
    <td><a href="#get_maintenance"><CopyableCode code="get_maintenance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-maintenance_id"><code>maintenance_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieves a specific maintenance by its ID.</td>
</tr>
<tr>
    <td><a href="#list_maintenances"><CopyableCode code="list_maintenances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[page_id]"><code>filter[page_id]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[status]"><code>filter[status]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Lists all maintenances for the organization. Optionally filter by status and page.</td>
</tr>
<tr>
    <td><a href="#create_maintenance"><CopyableCode code="create_maintenance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-notify_subscribers"><code>notify_subscribers</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Schedules a new maintenance.</td>
</tr>
<tr>
    <td><a href="#update_maintenance"><CopyableCode code="update_maintenance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a>, <a href="#parameter-maintenance_id"><code>maintenance_id</code></a></td>
    <td><a href="#parameter-notify_subscribers"><code>notify_subscribers</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Updates an existing maintenance's attributes.</td>
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
<tr id="parameter-maintenance_id">
    <td><CopyableCode code="maintenance_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the maintenance.</td>
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
<tr id="parameter-filter[status]">
    <td><CopyableCode code="filter[status]" /></td>
    <td><code>string</code></td>
    <td>Optional maintenance status filter. Supported values: scheduled, in_progress, completed.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.</td>
</tr>
<tr id="parameter-notify_subscribers">
    <td><CopyableCode code="notify_subscribers" /></td>
    <td><code>boolean</code></td>
    <td>Whether to notify page subscribers of the maintenance.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of maintenances to return per page.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset to use as the start of the page.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, start_date, -start_date.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_maintenance"
    values={[
        { label: 'get_maintenance', value: 'get_maintenance' },
        { label: 'list_maintenances', value: 'list_maintenances' }
    ]}
>
<TabItem value="get_maintenance">

Retrieves a specific maintenance by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_maintenances
WHERE page_id = '{{ page_id }}' -- required
AND maintenance_id = '{{ maintenance_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_maintenances">

Lists all maintenances for the organization. Optionally filter by status and page.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspage_maintenances
WHERE filter[page_id] = '{{ filter[page_id] }}'
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
AND include = '{{ include }}'
AND filter[status] = '{{ filter[status] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_maintenance"
    values={[
        { label: 'create_maintenance', value: 'create_maintenance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_maintenance">

Schedules a new maintenance.

```sql
INSERT INTO datadog.service_management.statuspage_maintenances (
data,
page_id,
notify_subscribers,
include
)
SELECT 
'{{ data }}',
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
- name: statuspage_maintenances
  props:
    - name: page_id
      value: "{{ page_id }}"
      description: Required parameter for the statuspage_maintenances resource.
    - name: data
      description: |
        The data object for creating a maintenance.
      value:
        attributes:
          completed_date: "{{ completed_date }}"
          completed_description: "{{ completed_description }}"
          components_affected:
            - id: "{{ id }}"
              name: "{{ name }}"
              status: "{{ status }}"
          in_progress_description: "{{ in_progress_description }}"
          scheduled_description: "{{ scheduled_description }}"
          start_date: "{{ start_date }}"
          title: "{{ title }}"
        relationships:
          template:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
    - name: notify_subscribers
      value: {{ notify_subscribers }}
      description: Whether to notify page subscribers of the maintenance.
      description: Whether to notify page subscribers of the maintenance.
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_maintenance"
    values={[
        { label: 'update_maintenance', value: 'update_maintenance' }
    ]}
>
<TabItem value="update_maintenance">

Updates an existing maintenance's attributes.

```sql
UPDATE datadog.service_management.statuspage_maintenances
SET 
data = '{{ data }}'
WHERE 
page_id = '{{ page_id }}' --required
AND maintenance_id = '{{ maintenance_id }}' --required
AND notify_subscribers = {{ notify_subscribers}}
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>
