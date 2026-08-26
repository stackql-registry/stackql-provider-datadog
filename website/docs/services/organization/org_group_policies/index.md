--- 
title: org_group_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - org_group_policies
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

Creates, updates, deletes, gets or lists an <code>org_group_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_group_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.org_group_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_group_policy"
    values={[
        { label: 'get_org_group_policy', value: 'get_org_group_policy' },
        { label: 'list_org_group_policies', value: 'list_org_group_policies' }
    ]}
>
<TabItem value="get_org_group_policy">

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
    <td>The ID of the org group policy. (example: 1a2b3c4d-5e6f-7890-abcd-ef0123456789)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org group policy.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an org group policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org group policies resource type. (org_group_policies) (example: org_group_policies)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_group_policies">

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
    <td>The ID of the org group policy. (example: 1a2b3c4d-5e6f-7890-abcd-ef0123456789)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org group policy.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an org group policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org group policies resource type. (org_group_policies) (example: org_group_policies)</td>
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
    <td><a href="#get_org_group_policy"><CopyableCode code="get_org_group_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org_group_policy_id"><code>org_group_policy_id</code></a></td>
    <td></td>
    <td>Get a specific organization group policy by its ID.</td>
</tr>
<tr>
    <td><a href="#list_org_group_policies"><CopyableCode code="list_org_group_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[org_group_id]"><code>filter[org_group_id]</code></a></td>
    <td><a href="#parameter-filter[policy_name]"><code>filter[policy_name]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>List policies for an organization group. Requires a filter on org group ID.</td>
</tr>
<tr>
    <td><a href="#create_org_group_policy"><CopyableCode code="create_org_group_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new policy for an organization group.</td>
</tr>
<tr>
    <td><a href="#update_org_group_policy"><CopyableCode code="update_org_group_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org_group_policy_id"><code>org_group_policy_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing organization group policy.</td>
</tr>
<tr>
    <td><a href="#delete_org_group_policy"><CopyableCode code="delete_org_group_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org_group_policy_id"><code>org_group_policy_id</code></a></td>
    <td></td>
    <td>Delete an organization group policy by its ID.</td>
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
    <td>Filter policies by org group ID.</td>
</tr>
<tr id="parameter-org_group_policy_id">
    <td><CopyableCode code="org_group_policy_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the org group policy.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[policy_name]">
    <td><CopyableCode code="filter[policy_name]" /></td>
    <td><code>string</code></td>
    <td>Filter policies by policy name.</td>
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
    <td>Field to sort policies by. Supported values: `id`, `name`, `-id`, `-name`. Defaults to `id`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_group_policy"
    values={[
        { label: 'get_org_group_policy', value: 'get_org_group_policy' },
        { label: 'list_org_group_policies', value: 'list_org_group_policies' }
    ]}
>
<TabItem value="get_org_group_policy">

Get a specific organization group policy by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_group_policies
WHERE org_group_policy_id = '{{ org_group_policy_id }}' -- required
;
```
</TabItem>
<TabItem value="list_org_group_policies">

List policies for an organization group. Requires a filter on org group ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_group_policies
WHERE filter[org_group_id] = '{{ filter[org_group_id] }}' -- required
AND filter[policy_name] = '{{ filter[policy_name] }}'
AND page[number] = '{{ page[number] }}'
AND page[size] = '{{ page[size] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_org_group_policy"
    values={[
        { label: 'create_org_group_policy', value: 'create_org_group_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_org_group_policy">

Create a new policy for an organization group.

```sql
INSERT INTO datadog.organization.org_group_policies (
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
- name: org_group_policies
  props:
    - name: data
      description: |
        Data for creating an org group policy.
      value:
        attributes:
          content: "{{ content }}"
          enforcement_tier: "{{ enforcement_tier }}"
          policy_name: "{{ policy_name }}"
          policy_type: "{{ policy_type }}"
        relationships:
          org_group:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_group_policy"
    values={[
        { label: 'update_org_group_policy', value: 'update_org_group_policy' }
    ]}
>
<TabItem value="update_org_group_policy">

Update an existing organization group policy.

```sql
UPDATE datadog.organization.org_group_policies
SET 
data = '{{ data }}'
WHERE 
org_group_policy_id = '{{ org_group_policy_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_org_group_policy"
    values={[
        { label: 'delete_org_group_policy', value: 'delete_org_group_policy' }
    ]}
>
<TabItem value="delete_org_group_policy">

Delete an organization group policy by its ID.

```sql
DELETE FROM datadog.organization.org_group_policies
WHERE org_group_policy_id = '{{ org_group_policy_id }}' --required
;
```
</TabItem>
</Tabs>
