--- 
title: downtimes
hide_title: false
hide_table_of_contents: false
keywords:
  - downtimes
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

Creates, updates, deletes, gets or lists a <code>downtimes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="downtimes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.downtimes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_downtime"
    values={[
        { label: 'get_downtime', value: 'get_downtime' },
        { label: 'list_downtimes', value: 'list_downtimes' }
    ]}
>
<TabItem value="get_downtime">

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
    <td>The downtime ID. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Downtime details.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>All relationships associated with downtime.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Downtime resource type. (downtime) (default: downtime, example: downtime)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_downtimes">

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
    <td>The downtime ID. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Downtime details.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>All relationships associated with downtime.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Downtime resource type. (downtime) (default: downtime, example: downtime)</td>
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
    <td><a href="#get_downtime"><CopyableCode code="get_downtime" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get downtime detail by `downtime_id`.</td>
</tr>
<tr>
    <td><a href="#list_downtimes"><CopyableCode code="list_downtimes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-current_only"><code>current_only</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>Get all scheduled downtimes.</td>
</tr>
<tr>
    <td><a href="#create_downtime"><CopyableCode code="create_downtime" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Schedule a downtime.</td>
</tr>
<tr>
    <td><a href="#update_downtime"><CopyableCode code="update_downtime" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a downtime by `downtime_id`.</td>
</tr>
<tr>
    <td><a href="#cancel_downtime"><CopyableCode code="cancel_downtime" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a></td>
    <td></td>
    <td>Cancel a downtime.&lt;br /&gt;&lt;br /&gt;**Note**: Downtimes canceled through the API are no longer active, but are retained for approximately two days before being permanently removed. The downtime may still appear in search results until it is permanently removed.</td>
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
    <td>ID of the downtime to cancel.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-current_only">
    <td><CopyableCode code="current_only" /></td>
    <td><code>boolean</code></td>
    <td>Only return downtimes that are active when the request is made.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `monitor`.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of downtimes in the response. (example: 100)</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific offset to use as the beginning of the returned page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_downtime"
    values={[
        { label: 'get_downtime', value: 'get_downtime' },
        { label: 'list_downtimes', value: 'list_downtimes' }
    ]}
>
<TabItem value="get_downtime">

Get downtime detail by `downtime_id`.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.downtimes
WHERE downtime_id = '{{ downtime_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_downtimes">

Get all scheduled downtimes.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.downtimes
WHERE current_only = '{{ current_only }}'
AND include = '{{ include }}'
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_downtime"
    values={[
        { label: 'create_downtime', value: 'create_downtime' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_downtime">

Schedule a downtime.

```sql
INSERT INTO datadog.service_management.downtimes (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: downtimes
  props:
    - name: data
      description: |
        Object to create a downtime.
      value:
        attributes:
          display_timezone: "{{ display_timezone }}"
          message: "{{ message }}"
          monitor_identifier:
            monitor_id: {{ monitor_id }}
            monitor_tags:
              - "{{ monitor_tags }}"
          mute_first_recovery_notification: {{ mute_first_recovery_notification }}
          notify_end_states:
            - "{{ notify_end_states }}"
          notify_end_types:
            - "{{ notify_end_types }}"
          schedule:
            recurrences:
              - duration: "{{ duration }}"
                rrule: "{{ rrule }}"
                start: "{{ start }}"
            timezone: "{{ timezone }}"
            end: "{{ end }}"
            start: "{{ start }}"
          scope: "{{ scope }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_downtime"
    values={[
        { label: 'update_downtime', value: 'update_downtime' }
    ]}
>
<TabItem value="update_downtime">

Update a downtime by `downtime_id`.

```sql
UPDATE datadog.service_management.downtimes
SET 
data = '{{ data }}'
WHERE 
downtime_id = '{{ downtime_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="cancel_downtime"
    values={[
        { label: 'cancel_downtime', value: 'cancel_downtime' }
    ]}
>
<TabItem value="cancel_downtime">

Cancel a downtime.&lt;br /&gt;&lt;br /&gt;**Note**: Downtimes canceled through the API are no longer active, but are retained for approximately two days before being permanently removed. The downtime may still appear in search results until it is permanently removed.

```sql
DELETE FROM datadog.service_management.downtimes
WHERE downtime_id = '{{ downtime_id }}' --required
;
```
</TabItem>
</Tabs>
