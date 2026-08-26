--- 
title: seat_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - seat_assignments
  - organization
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

Creates, updates, deletes, gets or lists a <code>seat_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="seat_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.seat_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_seats_users"
    values={[
        { label: 'get_seats_users', value: 'get_seats_users' }
    ]}
>
<TabItem value="get_seats_users">

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
    <td>The ID of the seat user. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the seat user.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Seat users resource type. (seat-users) (default: seat-users, example: seat-users)</td>
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
    <td><a href="#get_seats_users"><CopyableCode code="get_seats_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-product_code"><code>product_code</code></a></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a></td>
    <td>Get the list of users assigned seats for a product code.</td>
</tr>
<tr>
    <td><a href="#assign_seats_user"><CopyableCode code="assign_seats_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Assign seats to users for a product code.</td>
</tr>
<tr>
    <td><a href="#unassign_seats_user"><CopyableCode code="unassign_seats_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Unassign seats from users for a product code.</td>
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
<tr id="parameter-product_code">
    <td><CopyableCode code="product_code" /></td>
    <td><code>string</code></td>
    <td>The product code for which to retrieve seat users.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Cursor for pagination.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_seats_users"
    values={[
        { label: 'get_seats_users', value: 'get_seats_users' }
    ]}
>
<TabItem value="get_seats_users">

Get the list of users assigned seats for a product code.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.seat_assignments
WHERE product_code = '{{ product_code }}' -- required
AND page[limit] = '{{ page[limit] }}'
AND page[cursor] = '{{ page[cursor] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="assign_seats_user"
    values={[
        { label: 'assign_seats_user', value: 'assign_seats_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="assign_seats_user">

Assign seats to users for a product code.

```sql
INSERT INTO datadog.organization.seat_assignments (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: seat_assignments
  props:
    - name: data
      description: |
        The data for the assign seats user request.
      value:
        attributes:
          product_code: "{{ product_code }}"
          user_uuids:
            - "{{ user_uuids }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="unassign_seats_user"
    values={[
        { label: 'unassign_seats_user', value: 'unassign_seats_user' }
    ]}
>
<TabItem value="unassign_seats_user">

Unassign seats from users for a product code.

```sql
DELETE FROM datadog.organization.seat_assignments
;
```
</TabItem>
</Tabs>
