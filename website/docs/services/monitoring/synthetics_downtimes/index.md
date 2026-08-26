--- 
title: synthetics_downtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_downtimes
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>synthetics_downtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_downtimes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_downtimes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_synthetics_downtime"
    values={[
        { label: 'get_synthetics_downtime', value: 'get_synthetics_downtime' },
        { label: 'list_synthetics_downtimes', value: 'list_synthetics_downtimes' }
    ]}
>
<TabItem value="get_synthetics_downtime">

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
    <td>The unique identifier of the downtime. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Synthetics downtime response object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for a Synthetics downtime. (downtime) (example: downtime)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_synthetics_downtimes">

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
    <td>The unique identifier of the downtime. (example: 00000000-0000-0000-0000-000000000001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Synthetics downtime response object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for a Synthetics downtime. (downtime) (example: downtime)</td>
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
    <td><a href="#get_synthetics_downtime"><CopyableCode code="get_synthetics_downtime" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a></td>
    <td></td>
    <td>Get a Synthetics downtime by its ID.</td>
</tr>
<tr>
    <td><a href="#list_synthetics_downtimes"><CopyableCode code="list_synthetics_downtimes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[test_ids]"><code>filter[test_ids]</code></a>, <a href="#parameter-filter[active]"><code>filter[active]</code></a></td>
    <td>Get a list of all Synthetics downtimes for your organization.</td>
</tr>
<tr>
    <td><a href="#create_synthetics_downtime"><CopyableCode code="create_synthetics_downtime" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Synthetics downtime.</td>
</tr>
<tr>
    <td><a href="#update_synthetics_downtime"><CopyableCode code="update_synthetics_downtime" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a Synthetics downtime by its ID.</td>
</tr>
<tr>
    <td><a href="#delete_synthetics_downtime"><CopyableCode code="delete_synthetics_downtime" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a></td>
    <td></td>
    <td>Delete a Synthetics downtime by its ID.</td>
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
<tr id="parameter-downtime_id">
    <td><CopyableCode code="downtime_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the downtime to delete.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[active]">
    <td><CopyableCode code="filter[active]" /></td>
    <td><code>string</code></td>
    <td>If set to `true`, return only downtimes that are currently active.</td>
</tr>
<tr id="parameter-filter[test_ids]">
    <td><CopyableCode code="filter[test_ids]" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of Synthetics test public IDs to filter downtimes by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_synthetics_downtime"
    values={[
        { label: 'get_synthetics_downtime', value: 'get_synthetics_downtime' },
        { label: 'list_synthetics_downtimes', value: 'list_synthetics_downtimes' }
    ]}
>
<TabItem value="get_synthetics_downtime">

Get a Synthetics downtime by its ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_downtimes
WHERE downtime_id = '{{ downtime_id }}' -- required
;
```
</TabItem>
<TabItem value="list_synthetics_downtimes">

Get a list of all Synthetics downtimes for your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_downtimes
WHERE filter[test_ids] = '{{ filter[test_ids] }}'
AND filter[active] = '{{ filter[active] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_synthetics_downtime"
    values={[
        { label: 'create_synthetics_downtime', value: 'create_synthetics_downtime' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_synthetics_downtime">

Create a new Synthetics downtime.

```sql
INSERT INTO datadog.monitoring.synthetics_downtimes (
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
- name: synthetics_downtimes
  props:
    - name: data
      description: |
        The data object for a Synthetics downtime create or update request.
      value:
        attributes:
          description: "{{ description }}"
          isEnabled: {{ isEnabled }}
          name: "{{ name }}"
          tags:
            - "{{ tags }}"
          testIds:
            - "{{ testIds }}"
          timeSlots:
            - duration: {{ duration }}
              name: "{{ name }}"
              recurrence:
                end:
                  day: {{ day }}
                  hour: {{ hour }}
                  minute: {{ minute }}
                  month: {{ month }}
                  year: {{ year }}
                frequency: "{{ frequency }}"
                interval: {{ interval }}
                weekdayPositions:
                  - {{ weekdayPositions }}
                weekdays:
                  - "{{ weekdays }}"
              start:
                day: {{ day }}
                hour: {{ hour }}
                minute: {{ minute }}
                month: {{ month }}
                year: {{ year }}
              timezone: "{{ timezone }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_synthetics_downtime"
    values={[
        { label: 'update_synthetics_downtime', value: 'update_synthetics_downtime' }
    ]}
>
<TabItem value="update_synthetics_downtime">

Update a Synthetics downtime by its ID.

```sql
REPLACE datadog.monitoring.synthetics_downtimes
SET 
data = '{{ data }}'
WHERE 
downtime_id = '{{ downtime_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_synthetics_downtime"
    values={[
        { label: 'delete_synthetics_downtime', value: 'delete_synthetics_downtime' }
    ]}
>
<TabItem value="delete_synthetics_downtime">

Delete a Synthetics downtime by its ID.

```sql
DELETE FROM datadog.monitoring.synthetics_downtimes
WHERE downtime_id = '{{ downtime_id }}' --required
;
```
</TabItem>
</Tabs>
