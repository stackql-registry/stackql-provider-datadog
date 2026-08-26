--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
  - fleet
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.fleet.schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fleet_schedule_v2"
    values={[
        { label: 'get_fleet_schedule_v2', value: 'get_fleet_schedule_v2' },
        { label: 'list_fleet_schedules_v2', value: 'list_fleet_schedules_v2' }
    ]}
>
<TabItem value="get_fleet_schedule_v2">

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
    <td>Unique identifier for the schedule. (example: abc-def-ghi-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a fleet schedule in the v2 API response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of schedule resource. (schedule) (default: schedule, example: schedule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleet_schedules_v2">

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
    <td>Unique identifier for the schedule. (example: abc-def-ghi-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a fleet schedule in the v2 API response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of schedule resource. (schedule) (default: schedule, example: schedule)</td>
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
    <td><a href="#get_fleet_schedule_v2"><CopyableCode code="get_fleet_schedule_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Retrieve detailed information about a specific schedule by its unique identifier.</td>
</tr>
<tr>
    <td><a href="#list_fleet_schedules_v2"><CopyableCode code="list_fleet_schedules_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve all upgrade schedules for the organization.&lt;br /&gt;&lt;br /&gt;Schedules automate package upgrades by defining maintenance windows and recurrence rules.&lt;br /&gt;Each schedule automatically creates deployments based on its configuration.</td>
</tr>
<tr>
    <td><a href="#create_fleet_schedule"><CopyableCode code="create_fleet_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new schedule for automated package upgrades.&lt;br /&gt;&lt;br /&gt;Schedules define when and how often to automatically deploy package upgrades to a fleet&lt;br /&gt;of hosts. Each schedule includes:&lt;br /&gt;- A filter query to select target hosts&lt;br /&gt;- A recurrence rule defining maintenance windows&lt;br /&gt;- A version strategy (e.g., always latest, or N versions behind latest)&lt;br /&gt;&lt;br /&gt;When the schedule triggers during a maintenance window, it automatically creates a&lt;br /&gt;deployment that upgrades the Datadog Agent to the specified version on all matching hosts.</td>
</tr>
<tr>
    <td><a href="#update_fleet_schedule"><CopyableCode code="update_fleet_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update a schedule by providing only the fields you want to change.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to modify specific attributes of a schedule without&lt;br /&gt;affecting other fields. Common use cases include:&lt;br /&gt;- Changing the schedule status between active and inactive&lt;br /&gt;- Updating the maintenance window times&lt;br /&gt;- Modifying the filter query to target different hosts&lt;br /&gt;- Adjusting the version strategy&lt;br /&gt;&lt;br /&gt;Only include the fields you want to update in the request body. All fields&lt;br /&gt;are optional in a PATCH request.</td>
</tr>
<tr>
    <td><a href="#delete_fleet_schedule"><CopyableCode code="delete_fleet_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a schedule permanently.&lt;br /&gt;&lt;br /&gt;When you delete a schedule:&lt;br /&gt;- The schedule is permanently removed and will no longer create deployments&lt;br /&gt;- Any deployments already created by this schedule are not affected&lt;br /&gt;- This action cannot be undone&lt;br /&gt;&lt;br /&gt;If you want to temporarily stop a schedule from creating deployments, consider&lt;br /&gt;updating its status to "inactive" instead of deleting it.</td>
</tr>
<tr>
    <td><a href="#trigger_fleet_schedule"><CopyableCode code="trigger_fleet_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Manually trigger a schedule to immediately create and start a deployment.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to manually initiate a deployment using the schedule's&lt;br /&gt;configuration, without waiting for the next scheduled maintenance window. This is&lt;br /&gt;useful for:&lt;br /&gt;- Testing a schedule before it runs automatically&lt;br /&gt;- Performing an emergency update outside the regular maintenance window&lt;br /&gt;- Creating an ad-hoc deployment with the same settings as a schedule&lt;br /&gt;&lt;br /&gt;The deployment is created immediately with:&lt;br /&gt;- The same filter query as the schedule&lt;br /&gt;- The package version determined by the schedule's version strategy&lt;br /&gt;- All matching hosts as targets&lt;br /&gt;&lt;br /&gt;The manually triggered deployment is independent of the schedule and does not&lt;br /&gt;affect the schedule's normal recurrence pattern.</td>
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
    <td>The unique identifier of the schedule to trigger. (example: abc-def-ghi-123)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_fleet_schedule_v2"
    values={[
        { label: 'get_fleet_schedule_v2', value: 'get_fleet_schedule_v2' },
        { label: 'list_fleet_schedules_v2', value: 'list_fleet_schedules_v2' }
    ]}
>
<TabItem value="get_fleet_schedule_v2">

Retrieve detailed information about a specific schedule by its unique identifier.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.schedules
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_fleet_schedules_v2">

Retrieve all upgrade schedules for the organization.&lt;br /&gt;&lt;br /&gt;Schedules automate package upgrades by defining maintenance windows and recurrence rules.&lt;br /&gt;Each schedule automatically creates deployments based on its configuration.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.schedules
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet_schedule"
    values={[
        { label: 'create_fleet_schedule', value: 'create_fleet_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet_schedule">

Create a new schedule for automated package upgrades.&lt;br /&gt;&lt;br /&gt;Schedules define when and how often to automatically deploy package upgrades to a fleet&lt;br /&gt;of hosts. Each schedule includes:&lt;br /&gt;- A filter query to select target hosts&lt;br /&gt;- A recurrence rule defining maintenance windows&lt;br /&gt;- A version strategy (e.g., always latest, or N versions behind latest)&lt;br /&gt;&lt;br /&gt;When the schedule triggers during a maintenance window, it automatically creates a&lt;br /&gt;deployment that upgrades the Datadog Agent to the specified version on all matching hosts.

```sql
INSERT INTO datadog.fleet.schedules (
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
- name: schedules
  props:
    - name: data
      description: |
        Data for creating a new schedule.
      value:
        attributes:
          name: "{{ name }}"
          query: "{{ query }}"
          rule:
            days_of_week:
              - "{{ days_of_week }}"
            maintenance_window_duration: {{ maintenance_window_duration }}
            start_maintenance_window: "{{ start_maintenance_window }}"
            timezone: "{{ timezone }}"
          status: "{{ status }}"
          version_to_latest: {{ version_to_latest }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fleet_schedule"
    values={[
        { label: 'update_fleet_schedule', value: 'update_fleet_schedule' }
    ]}
>
<TabItem value="update_fleet_schedule">

Partially update a schedule by providing only the fields you want to change.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to modify specific attributes of a schedule without&lt;br /&gt;affecting other fields. Common use cases include:&lt;br /&gt;- Changing the schedule status between active and inactive&lt;br /&gt;- Updating the maintenance window times&lt;br /&gt;- Modifying the filter query to target different hosts&lt;br /&gt;- Adjusting the version strategy&lt;br /&gt;&lt;br /&gt;Only include the fields you want to update in the request body. All fields&lt;br /&gt;are optional in a PATCH request.

```sql
UPDATE datadog.fleet.schedules
SET 
data = '{{ data }}'
WHERE 
id = '{{ id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet_schedule"
    values={[
        { label: 'delete_fleet_schedule', value: 'delete_fleet_schedule' }
    ]}
>
<TabItem value="delete_fleet_schedule">

Delete a schedule permanently.&lt;br /&gt;&lt;br /&gt;When you delete a schedule:&lt;br /&gt;- The schedule is permanently removed and will no longer create deployments&lt;br /&gt;- Any deployments already created by this schedule are not affected&lt;br /&gt;- This action cannot be undone&lt;br /&gt;&lt;br /&gt;If you want to temporarily stop a schedule from creating deployments, consider&lt;br /&gt;updating its status to "inactive" instead of deleting it.

```sql
DELETE FROM datadog.fleet.schedules
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="trigger_fleet_schedule"
    values={[
        { label: 'trigger_fleet_schedule', value: 'trigger_fleet_schedule' }
    ]}
>
<TabItem value="trigger_fleet_schedule">

Manually trigger a schedule to immediately create and start a deployment.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to manually initiate a deployment using the schedule's&lt;br /&gt;configuration, without waiting for the next scheduled maintenance window. This is&lt;br /&gt;useful for:&lt;br /&gt;- Testing a schedule before it runs automatically&lt;br /&gt;- Performing an emergency update outside the regular maintenance window&lt;br /&gt;- Creating an ad-hoc deployment with the same settings as a schedule&lt;br /&gt;&lt;br /&gt;The deployment is created immediately with:&lt;br /&gt;- The same filter query as the schedule&lt;br /&gt;- The package version determined by the schedule's version strategy&lt;br /&gt;- All matching hosts as targets&lt;br /&gt;&lt;br /&gt;The manually triggered deployment is independent of the schedule and does not&lt;br /&gt;affect the schedule's normal recurrence pattern.

```sql
EXEC datadog.fleet.schedules.trigger_fleet_schedule 
@id='{{ id }}' --required 
;
```
</TabItem>
</Tabs>
