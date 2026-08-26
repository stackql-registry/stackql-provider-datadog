--- 
title: bits_ai_investigations
hide_title: false
hide_table_of_contents: false
keywords:
  - bits_ai_investigations
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

Creates, updates, deletes, gets or lists a <code>bits_ai_investigations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bits_ai_investigations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.bits_ai_investigations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_investigation"
    values={[
        { label: 'get_investigation', value: 'get_investigation' },
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
<TabItem value="get_investigation">

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
    <td>The unique identifier of the investigation. (example: a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the investigation.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for investigations. (investigation) (example: investigation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_investigations">

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
    <td>The unique identifier of the investigation. (example: a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an investigation list item.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for investigations. (investigation) (example: investigation)</td>
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
    <td><a href="#get_investigation"><CopyableCode code="get_investigation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a specific Bits AI investigation by ID.</td>
</tr>
<tr>
    <td><a href="#list_investigations"><CopyableCode code="list_investigations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-filter[monitor_id]"><code>filter[monitor_id]</code></a></td>
    <td>List all Bits AI investigations for the organization.</td>
</tr>
<tr>
    <td><a href="#trigger_investigation"><CopyableCode code="trigger_investigation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Trigger a new Bits AI investigation based on a monitor alert.</td>
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
    <td>The ID of the investigation. (example: a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[monitor_id]">
    <td><CopyableCode code="filter[monitor_id]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Filter investigations by monitor ID. (example: 12345678)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of investigations to return. (example: 25)</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset for pagination. (example: 0)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_investigation"
    values={[
        { label: 'get_investigation', value: 'get_investigation' },
        { label: 'list_investigations', value: 'list_investigations' }
    ]}
>
<TabItem value="get_investigation">

Get a specific Bits AI investigation by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.bits_ai_investigations
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_investigations">

List all Bits AI investigations for the organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.bits_ai_investigations
WHERE page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
AND filter[monitor_id] = '{{ filter[monitor_id] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="trigger_investigation"
    values={[
        { label: 'trigger_investigation', value: 'trigger_investigation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="trigger_investigation">

Trigger a new Bits AI investigation based on a monitor alert.

```sql
INSERT INTO datadog.service_management.bits_ai_investigations (
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
- name: bits_ai_investigations
  props:
    - name: data
      description: |
        Data for the trigger investigation request.
      value:
        attributes:
          trigger:
            monitor_alert_trigger:
              event_id: "{{ event_id }}"
              event_ts: {{ event_ts }}
              monitor_id: {{ monitor_id }}
            type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
