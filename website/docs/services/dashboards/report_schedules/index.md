--- 
title: report_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - report_schedules
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

Creates, updates, deletes, gets or lists a <code>report_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.report_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_report_schedules_for_resource"
    values={[
        { label: 'get_report_schedules_for_resource', value: 'get_report_schedules_for_resource' },
        { label: 'get_report_schedule', value: 'get_report_schedule' },
        { label: 'list_report_schedules', value: 'list_report_schedules' }
    ]}
>
<TabItem value="get_report_schedules_for_resource">

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
    <td>The unique identifier of the report schedule. (example: 11111111-2222-3333-4444-555555555555)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The configuration and derived state of a report schedule in a list response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a report schedule in a list response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for report schedules. (schedule) (example: schedule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_report_schedule">

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
    <td>The unique identifier of the report schedule. (example: 11111111-2222-3333-4444-555555555555)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The configuration and derived state of a report schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for the report schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for report schedules. (schedule) (example: schedule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_report_schedules">

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
    <td>The unique identifier of the report schedule. (example: 11111111-2222-3333-4444-555555555555)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The configuration and derived state of a report schedule in a list response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a report schedule in a list response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for report schedules. (schedule) (example: schedule)</td>
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
    <td><a href="#get_report_schedules_for_resource"><CopyableCode code="get_report_schedules_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>Get all report schedules that target a dashboard or integration dashboard resource.&lt;br /&gt;Requires a reporting read permission appropriate to the targeted resource type.</td>
</tr>
<tr>
    <td><a href="#get_report_schedule"><CopyableCode code="get_report_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-schedule_uuid"><code>schedule_uuid</code></a></td>
    <td></td>
    <td>Get a report schedule by its unique identifier.&lt;br /&gt;Requires a reporting read permission appropriate to the targeted resource type.</td>
</tr>
<tr>
    <td><a href="#list_report_schedules"><CopyableCode code="list_report_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-filter[title]"><code>filter[title]</code></a>, <a href="#parameter-filter[author_uuid]"><code>filter[author_uuid]</code></a>, <a href="#parameter-filter[recipients]"><code>filter[recipients]</code></a></td>
    <td>List dashboard and integration dashboard report schedules for the organization.&lt;br /&gt;The response is paginated and can be filtered by title, author UUID, or recipients.&lt;br /&gt;Requires the `generate_dashboard_reports` permission.</td>
</tr>
<tr>
    <td><a href="#create_report_schedule"><CopyableCode code="create_report_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new scheduled report. A schedule renders a dashboard or integration dashboard&lt;br /&gt;on a recurring cadence and delivers it to the configured recipients over email, Slack,&lt;br /&gt;or Microsoft Teams.&lt;br /&gt;Requires the `generate_dashboard_reports` permission.</td>
</tr>
<tr>
    <td><a href="#patch_report_schedule"><CopyableCode code="patch_report_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-schedule_uuid"><code>schedule_uuid</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing scheduled report by its identifier. The editable attributes&lt;br /&gt;are replaced with the supplied values; the targeted resource (`resource_id` and&lt;br /&gt;`resource_type`) cannot be changed after creation.&lt;br /&gt;Requires the `generate_dashboard_reports` permission and schedule ownership.</td>
</tr>
<tr>
    <td><a href="#delete_report_schedule"><CopyableCode code="delete_report_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schedule_uuid"><code>schedule_uuid</code></a></td>
    <td></td>
    <td>Delete a report schedule by its unique identifier. The response returns the deleted schedule.&lt;br /&gt;Requires a reporting write permission appropriate to the targeted resource type and schedule ownership.</td>
</tr>
<tr>
    <td><a href="#toggle_report_schedule"><CopyableCode code="toggle_report_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schedule_uuid"><code>schedule_uuid</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Activate or pause a report schedule by setting its status to `active` or `inactive`.&lt;br /&gt;Requires a reporting write permission appropriate to the targeted resource type and schedule ownership.</td>
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
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource to fetch report schedules for. (example: abc-def-ghi)</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource to fetch report schedules for.</td>
</tr>
<tr id="parameter-schedule_uuid">
    <td><CopyableCode code="schedule_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the report schedule to toggle. (example: 11111111-2222-3333-4444-555555555555)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[author_uuid]">
    <td><CopyableCode code="filter[author_uuid]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter schedules by author UUID. (example: aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee)</td>
</tr>
<tr id="parameter-filter[recipients]">
    <td><CopyableCode code="filter[recipients]" /></td>
    <td><code>string</code></td>
    <td>Filter schedules by a comma-separated list of recipients. (example: user@example.com,team@example.com)</td>
</tr>
<tr id="parameter-filter[title]">
    <td><CopyableCode code="filter[title]" /></td>
    <td><code>string</code></td>
    <td>Filter schedules by report title. (example: Weekly)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of schedules to return. The maximum value is 50. (example: 25)</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The offset from which to start returning schedules. (example: 0)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_report_schedules_for_resource"
    values={[
        { label: 'get_report_schedules_for_resource', value: 'get_report_schedules_for_resource' },
        { label: 'get_report_schedule', value: 'get_report_schedule' },
        { label: 'list_report_schedules', value: 'list_report_schedules' }
    ]}
>
<TabItem value="get_report_schedules_for_resource">

Get all report schedules that target a dashboard or integration dashboard resource.&lt;br /&gt;Requires a reporting read permission appropriate to the targeted resource type.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.report_schedules
WHERE resource_type = '{{ resource_type }}' -- required
AND resource_id = '{{ resource_id }}' -- required
;
```
</TabItem>
<TabItem value="get_report_schedule">

Get a report schedule by its unique identifier.&lt;br /&gt;Requires a reporting read permission appropriate to the targeted resource type.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.report_schedules
WHERE schedule_uuid = '{{ schedule_uuid }}' -- required
;
```
</TabItem>
<TabItem value="list_report_schedules">

List dashboard and integration dashboard report schedules for the organization.&lt;br /&gt;The response is paginated and can be filtered by title, author UUID, or recipients.&lt;br /&gt;Requires the `generate_dashboard_reports` permission.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.report_schedules
WHERE page[limit] = '{{ page[limit] }}'
AND page[offset] = '{{ page[offset] }}'
AND filter[title] = '{{ filter[title] }}'
AND filter[author_uuid] = '{{ filter[author_uuid] }}'
AND filter[recipients] = '{{ filter[recipients] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_report_schedule"
    values={[
        { label: 'create_report_schedule', value: 'create_report_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_report_schedule">

Create a new scheduled report. A schedule renders a dashboard or integration dashboard&lt;br /&gt;on a recurring cadence and delivers it to the configured recipients over email, Slack,&lt;br /&gt;or Microsoft Teams.&lt;br /&gt;Requires the `generate_dashboard_reports` permission.

```sql
INSERT INTO datadog.dashboards.report_schedules (
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
- name: report_schedules
  props:
    - name: data
      description: |
        The JSON:API data object for a report schedule creation request.
      value:
        attributes:
          delivery_format: "{{ delivery_format }}"
          description: "{{ description }}"
          recipients:
            - "{{ recipients }}"
          resource_id: "{{ resource_id }}"
          resource_type: "{{ resource_type }}"
          rrule: "{{ rrule }}"
          tab_id: "{{ tab_id }}"
          template_variables:
            - name: "{{ name }}"
              values: "{{ values }}"
          timeframe: "{{ timeframe }}"
          timezone: "{{ timezone }}"
          title: "{{ title }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_report_schedule"
    values={[
        { label: 'patch_report_schedule', value: 'patch_report_schedule' }
    ]}
>
<TabItem value="patch_report_schedule">

Update an existing scheduled report by its identifier. The editable attributes&lt;br /&gt;are replaced with the supplied values; the targeted resource (`resource_id` and&lt;br /&gt;`resource_type`) cannot be changed after creation.&lt;br /&gt;Requires the `generate_dashboard_reports` permission and schedule ownership.

```sql
UPDATE datadog.dashboards.report_schedules
SET 
data = '{{ data }}'
WHERE 
schedule_uuid = '{{ schedule_uuid }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_report_schedule"
    values={[
        { label: 'delete_report_schedule', value: 'delete_report_schedule' }
    ]}
>
<TabItem value="delete_report_schedule">

Delete a report schedule by its unique identifier. The response returns the deleted schedule.&lt;br /&gt;Requires a reporting write permission appropriate to the targeted resource type and schedule ownership.

```sql
DELETE FROM datadog.dashboards.report_schedules
WHERE schedule_uuid = '{{ schedule_uuid }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="toggle_report_schedule"
    values={[
        { label: 'toggle_report_schedule', value: 'toggle_report_schedule' }
    ]}
>
<TabItem value="toggle_report_schedule">

Activate or pause a report schedule by setting its status to `active` or `inactive`.&lt;br /&gt;Requires a reporting write permission appropriate to the targeted resource type and schedule ownership.

```sql
EXEC datadog.dashboards.report_schedules.toggle_report_schedule 
@schedule_uuid='{{ schedule_uuid }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
