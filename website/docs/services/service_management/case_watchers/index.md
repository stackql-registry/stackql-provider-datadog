--- 
title: case_watchers
hide_title: false
hide_table_of_contents: false
keywords:
  - case_watchers
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

Creates, updates, deletes, gets or lists a <code>case_watchers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_watchers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_watchers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_case_watchers"
    values={[
        { label: 'list_case_watchers', value: 'list_case_watchers' }
    ]}
>
<TabItem value="list_case_watchers">

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
    <td>The primary identifier of the case watcher. (example: 8146583c-0b5f-11ec-abf8-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for a case watcher, linking to the underlying user resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for case watchers. (watcher) (default: watcher, example: watcher)</td>
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
    <td><a href="#list_case_watchers"><CopyableCode code="list_case_watchers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a></td>
    <td></td>
    <td>Returns the list of users who are watching a case. Watchers receive notifications about updates to the case.</td>
</tr>
<tr>
    <td><a href="#watch_case"><CopyableCode code="watch_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-user_uuid"><code>user_uuid</code></a></td>
    <td></td>
    <td>Adds a user (identified by their UUID) as a watcher of a case. The user receives notifications about subsequent updates to the case.</td>
</tr>
<tr>
    <td><a href="#unwatch_case"><CopyableCode code="unwatch_case" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-user_uuid"><code>user_uuid</code></a></td>
    <td></td>
    <td>Removes a user from the watchers list of a case. The user no longer receives notifications about updates to the case.</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Case's UUID or key (example: f98a5a5b-e0ff-45d4-b2f5-afe6e74de504)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-user_uuid">
    <td><CopyableCode code="user_uuid" /></td>
    <td><code>string</code></td>
    <td>The UUID of the user to add or remove as a watcher. (example: 8146583c-0b5f-11ec-abf8-da7ad0900001)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_case_watchers"
    values={[
        { label: 'list_case_watchers', value: 'list_case_watchers' }
    ]}
>
<TabItem value="list_case_watchers">

Returns the list of users who are watching a case. Watchers receive notifications about updates to the case.

```sql
SELECT
id,
relationships,
type
FROM datadog.service_management.case_watchers
WHERE case_id = '{{ case_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="watch_case"
    values={[
        { label: 'watch_case', value: 'watch_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="watch_case">

Adds a user (identified by their UUID) as a watcher of a case. The user receives notifications about subsequent updates to the case.

```sql
INSERT INTO datadog.service_management.case_watchers (
case_id,
user_uuid
)
SELECT 
'{{ case_id }}',
'{{ user_uuid }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_watchers
  props:
    - name: case_id
      value: "{{ case_id }}"
      description: Required parameter for the case_watchers resource.
    - name: user_uuid
      value: "{{ user_uuid }}"
      description: Required parameter for the case_watchers resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="unwatch_case"
    values={[
        { label: 'unwatch_case', value: 'unwatch_case' }
    ]}
>
<TabItem value="unwatch_case">

Removes a user from the watchers list of a case. The user no longer receives notifications about updates to the case.

```sql
DELETE FROM datadog.service_management.case_watchers
WHERE case_id = '{{ case_id }}' --required
AND user_uuid = '{{ user_uuid }}' --required
;
```
</TabItem>
</Tabs>
