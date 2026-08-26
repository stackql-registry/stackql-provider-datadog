--- 
title: change_change_request_decisions
hide_title: false
hide_table_of_contents: false
keywords:
  - change_change_request_decisions
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

Creates, updates, deletes, gets or lists a <code>change_change_request_decisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_change_request_decisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.change_change_request_decisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_change_request_decision"><CopyableCode code="update_change_request_decision" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-change_request_id"><code>change_request_id</code></a>, <a href="#parameter-decision_id"><code>decision_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a decision on a change request, such as approving or declining it.</td>
</tr>
<tr>
    <td><a href="#delete_change_request_decision"><CopyableCode code="delete_change_request_decision" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-change_request_id"><code>change_request_id</code></a>, <a href="#parameter-decision_id"><code>decision_id</code></a></td>
    <td></td>
    <td>Delete a decision from a change request.</td>
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
<tr id="parameter-decision_id">
    <td><CopyableCode code="decision_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the change request decision. (example: decision-id-0)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_change_request_decision"
    values={[
        { label: 'update_change_request_decision', value: 'update_change_request_decision' }
    ]}
>
<TabItem value="update_change_request_decision">

Update a decision on a change request, such as approving or declining it.

```sql
UPDATE datadog.service_management.change_change_request_decisions
SET 
data = '{{ data }}',
included = '{{ included }}'
WHERE 
change_request_id = '{{ change_request_id }}' --required
AND decision_id = '{{ decision_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_change_request_decision"
    values={[
        { label: 'delete_change_request_decision', value: 'delete_change_request_decision' }
    ]}
>
<TabItem value="delete_change_request_decision">

Delete a decision from a change request.

```sql
DELETE FROM datadog.service_management.change_change_request_decisions
WHERE change_request_id = '{{ change_request_id }}' --required
AND decision_id = '{{ decision_id }}' --required
;
```
</TabItem>
</Tabs>
