--- 
title: change_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - change_requests
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

Creates, updates, deletes, gets or lists a <code>change_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.change_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_change_request"
    values={[
        { label: 'get_change_request', value: 'get_change_request' }
    ]}
>
<TabItem value="get_change_request">

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
    <td>The identifier of the change request. (example: CHM-1234)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a change request response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a change request.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Change request resource type. (change_request) (example: change_request)</td>
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
    <td><a href="#get_change_request"><CopyableCode code="get_change_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-change_request_id"><code>change_request_id</code></a></td>
    <td></td>
    <td>Get the details of a change request by its ID.</td>
</tr>
<tr>
    <td><a href="#create_change_request"><CopyableCode code="create_change_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new change request.</td>
</tr>
<tr>
    <td><a href="#update_change_request"><CopyableCode code="update_change_request" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-change_request_id"><code>change_request_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the properties of a change request.</td>
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
<tr id="parameter-change_request_id">
    <td><CopyableCode code="change_request_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the change request. (example: CHM-1234)</td>
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
    defaultValue="get_change_request"
    values={[
        { label: 'get_change_request', value: 'get_change_request' }
    ]}
>
<TabItem value="get_change_request">

Get the details of a change request by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.change_requests
WHERE change_request_id = '{{ change_request_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_change_request"
    values={[
        { label: 'create_change_request', value: 'create_change_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_change_request">

Create a new change request.

```sql
INSERT INTO datadog.service_management.change_requests (
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
- name: change_requests
  props:
    - name: data
      description: |
        Data object to create a change request.
      value:
        attributes:
          change_request_linked_incident_uuid: "{{ change_request_linked_incident_uuid }}"
          change_request_maintenance_window_query: "{{ change_request_maintenance_window_query }}"
          change_request_plan: "{{ change_request_plan }}"
          change_request_risk: "{{ change_request_risk }}"
          change_request_type: "{{ change_request_type }}"
          description: "{{ description }}"
          end_date: "{{ end_date }}"
          project_id: "{{ project_id }}"
          requested_teams:
            - "{{ requested_teams }}"
          start_date: "{{ start_date }}"
          title: "{{ title }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_change_request"
    values={[
        { label: 'update_change_request', value: 'update_change_request' }
    ]}
>
<TabItem value="update_change_request">

Update the properties of a change request.

```sql
UPDATE datadog.service_management.change_requests
SET 
data = '{{ data }}',
included = '{{ included }}'
WHERE 
change_request_id = '{{ change_request_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>
