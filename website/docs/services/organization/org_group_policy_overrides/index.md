--- 
title: org_group_policy_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - org_group_policy_overrides
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

Creates, updates, deletes, gets or lists an <code>org_group_policy_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_group_policy_overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.org_group_policy_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_group_policy_override"
    values={[
        { label: 'get_org_group_policy_override', value: 'get_org_group_policy_override' },
        { label: 'list_org_group_policy_overrides', value: 'list_org_group_policy_overrides' }
    ]}
>
<TabItem value="get_org_group_policy_override">

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
    <td>The ID of the policy override. (example: 9f8e7d6c-5b4a-3210-fedc-ba0987654321)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org group policy override.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an org group policy override.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org group policy overrides resource type. (org_group_policy_overrides) (example: org_group_policy_overrides)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_group_policy_overrides">

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
    <td>The ID of the policy override. (example: 9f8e7d6c-5b4a-3210-fedc-ba0987654321)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org group policy override.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an org group policy override.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org group policy overrides resource type. (org_group_policy_overrides) (example: org_group_policy_overrides)</td>
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
    <td><a href="#get_org_group_policy_override"><CopyableCode code="get_org_group_policy_override" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org_group_policy_override_id"><code>org_group_policy_override_id</code></a></td>
    <td></td>
    <td>Get a specific organization group policy override by its ID.</td>
</tr>
<tr>
    <td><a href="#list_org_group_policy_overrides"><CopyableCode code="list_org_group_policy_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[org_group_id]"><code>filter[org_group_id]</code></a></td>
    <td><a href="#parameter-filter[policy_id]"><code>filter[policy_id]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>List policy overrides for an organization group. Requires a filter on org group ID. Optionally filter by policy ID.</td>
</tr>
<tr>
    <td><a href="#create_org_group_policy_override"><CopyableCode code="create_org_group_policy_override" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new policy override for an organization within an org group.</td>
</tr>
<tr>
    <td><a href="#update_org_group_policy_override"><CopyableCode code="update_org_group_policy_override" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org_group_policy_override_id"><code>org_group_policy_override_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing organization group policy override.</td>
</tr>
<tr>
    <td><a href="#delete_org_group_policy_override"><CopyableCode code="delete_org_group_policy_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org_group_policy_override_id"><code>org_group_policy_override_id</code></a></td>
    <td></td>
    <td>Delete an organization group policy override by its ID.</td>
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
<tr id="parameter-filter[org_group_id]">
    <td><CopyableCode code="filter[org_group_id]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter policy overrides by org group ID.</td>
</tr>
<tr id="parameter-org_group_policy_override_id">
    <td><CopyableCode code="org_group_policy_override_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the org group policy override.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[policy_id]">
    <td><CopyableCode code="filter[policy_id]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter policy overrides by policy ID.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of items per page. Maximum is 1000.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Field to sort overrides by. Supported values: `id`, `org_uuid`, `-id`, `-org_uuid`. Defaults to `id`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_group_policy_override"
    values={[
        { label: 'get_org_group_policy_override', value: 'get_org_group_policy_override' },
        { label: 'list_org_group_policy_overrides', value: 'list_org_group_policy_overrides' }
    ]}
>
<TabItem value="get_org_group_policy_override">

Get a specific organization group policy override by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_group_policy_overrides
WHERE org_group_policy_override_id = '{{ org_group_policy_override_id }}' -- required
;
```
</TabItem>
<TabItem value="list_org_group_policy_overrides">

List policy overrides for an organization group. Requires a filter on org group ID. Optionally filter by policy ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_group_policy_overrides
WHERE filter[org_group_id] = '{{ filter[org_group_id] }}' -- required
AND filter[policy_id] = '{{ filter[policy_id] }}'
AND page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_org_group_policy_override"
    values={[
        { label: 'create_org_group_policy_override', value: 'create_org_group_policy_override' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_org_group_policy_override">

Create a new policy override for an organization within an org group.

```sql
INSERT INTO datadog.organization.org_group_policy_overrides (
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
- name: org_group_policy_overrides
  props:
    - name: data
      description: |
        Data for creating an org group policy override.
      value:
        attributes:
          org_site: "{{ org_site }}"
          org_uuid: "{{ org_uuid }}"
        relationships:
          org_group:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
          org_group_policy:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_group_policy_override"
    values={[
        { label: 'update_org_group_policy_override', value: 'update_org_group_policy_override' }
    ]}
>
<TabItem value="update_org_group_policy_override">

Update an existing organization group policy override.

```sql
UPDATE datadog.organization.org_group_policy_overrides
SET 
data = '{{ data }}'
WHERE 
org_group_policy_override_id = '{{ org_group_policy_override_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_org_group_policy_override"
    values={[
        { label: 'delete_org_group_policy_override', value: 'delete_org_group_policy_override' }
    ]}
>
<TabItem value="delete_org_group_policy_override">

Delete an organization group policy override by its ID.

```sql
DELETE FROM datadog.organization.org_group_policy_overrides
WHERE org_group_policy_override_id = '{{ org_group_policy_override_id }}' --required
;
```
</TabItem>
</Tabs>
