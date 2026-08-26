--- 
title: execution_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_policies
  - actions
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

Creates, updates, deletes, gets or lists an <code>execution_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="execution_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.actions.execution_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_execution_policy"
    values={[
        { label: 'get_execution_policy', value: 'get_execution_policy' },
        { label: 'list_execution_policies', value: 'list_execution_policies' }
    ]}
>
<TabItem value="get_execution_policy">

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
    <td>The ID of the execution policy. (example: 3fa85f64-5717-4562-b3fc-2c963f66afa6)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>An execution policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `execution_policy`. (execution_policy) (default: execution_policy, example: execution_policy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_execution_policies">

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
    <td>The ID of the execution policy. (example: 3fa85f64-5717-4562-b3fc-2c963f66afa6)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>An execution policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `execution_policy`. (execution_policy) (default: execution_policy, example: execution_policy)</td>
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
    <td><a href="#get_execution_policy"><CopyableCode code="get_execution_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Retrieve an existing execution policy by ID.</td>
</tr>
<tr>
    <td><a href="#list_execution_policies"><CopyableCode code="list_execution_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-filter[ids]"><code>filter[ids]</code></a>, <a href="#parameter-filter[integration]"><code>filter[integration]</code></a>, <a href="#parameter-filter[effects]"><code>filter[effects]</code></a>, <a href="#parameter-filter[creator_ids]"><code>filter[creator_ids]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Retrieve a list of execution policies for the current organization.</td>
</tr>
<tr>
    <td><a href="#create_execution_policy"><CopyableCode code="create_execution_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new execution policy.</td>
</tr>
<tr>
    <td><a href="#update_execution_policy"><CopyableCode code="update_execution_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing execution policy.&lt;br /&gt;Returns the execution policy object when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_execution_policy"><CopyableCode code="delete_execution_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Delete a specific execution policy.</td>
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
<tr id="parameter-policy_id">
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the execution policy. (example: 3fa85f64-5717-4562-b3fc-2c963f66afa6)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[creator_ids]">
    <td><CopyableCode code="filter[creator_ids]" /></td>
    <td><code>array</code></td>
    <td>Filter execution policies by a list of creator IDs. (example: &#91;3fa85f64-5717-4562-b3fc-2c963f66afa6&#93;)</td>
</tr>
<tr id="parameter-filter[effects]">
    <td><CopyableCode code="filter[effects]" /></td>
    <td><code>array</code></td>
    <td>Filter execution policies by a list of effects. (example: &#91;allow&#93;)</td>
</tr>
<tr id="parameter-filter[ids]">
    <td><CopyableCode code="filter[ids]" /></td>
    <td><code>array</code></td>
    <td>Filter execution policies by a list of IDs. (example: &#91;3fa85f64-5717-4562-b3fc-2c963f66afa6&#93;)</td>
</tr>
<tr id="parameter-filter[integration]">
    <td><CopyableCode code="filter[integration]" /></td>
    <td><code>array</code></td>
    <td>Filter execution policies by a list of integrations. (example: &#91;INTEGRATION_SCRIPT&#93;)</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter execution policies by name. (example: Block prod restarts)</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int32)</code></td>
    <td>The page number to return. (example: 0)</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of execution policies to return per page. (example: 100)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>array</code></td>
    <td>The sort order for the results. Prefix a field with `-` to sort in descending order. Valid fields are `name`, `effect`, `integration`, `created_at`, and `updated_at`. (example: &#91;-created_at&#93;)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_execution_policy"
    values={[
        { label: 'get_execution_policy', value: 'get_execution_policy' },
        { label: 'list_execution_policies', value: 'list_execution_policies' }
    ]}
>
<TabItem value="get_execution_policy">

Retrieve an existing execution policy by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.actions.execution_policies
WHERE policy_id = '{{ policy_id }}' -- required
;
```
</TabItem>
<TabItem value="list_execution_policies">

Retrieve a list of execution policies for the current organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.actions.execution_policies
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND filter[name] = '{{ filter[name] }}'
AND filter[ids] = '{{ filter[ids] }}'
AND filter[integration] = '{{ filter[integration] }}'
AND filter[effects] = '{{ filter[effects] }}'
AND filter[creator_ids] = '{{ filter[creator_ids] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_execution_policy"
    values={[
        { label: 'create_execution_policy', value: 'create_execution_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_execution_policy">

Create a new execution policy.

```sql
INSERT INTO datadog.actions.execution_policies (
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
- name: execution_policies
  props:
    - name: data
      description: |
        Object for a single execution policy.
      value:
        attributes:
          action_pattern:
            action_fqns:
              - "{{ action_fqns }}"
            integration: "{{ integration }}"
          effect: "{{ effect }}"
          name: "{{ name }}"
          scope:
            kubernetes:
              rules:
                - target_namespaces: "{{ target_namespaces }}"
            remote_action_rshell:
              rules:
                - access: "{{ access }}"
                  target_paths: "{{ target_paths }}"
            scripts:
              rules:
                - target_script_names: "{{ target_script_names }}"
          targets:
            - agent_tags: "{{ agent_tags }}"
              name: "{{ name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_execution_policy"
    values={[
        { label: 'update_execution_policy', value: 'update_execution_policy' }
    ]}
>
<TabItem value="update_execution_policy">

Update an existing execution policy.&lt;br /&gt;Returns the execution policy object when the request is successful.

```sql
REPLACE datadog.actions.execution_policies
SET 
data = '{{ data }}'
WHERE 
policy_id = '{{ policy_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_execution_policy"
    values={[
        { label: 'delete_execution_policy', value: 'delete_execution_policy' }
    ]}
>
<TabItem value="delete_execution_policy">

Delete a specific execution policy.

```sql
DELETE FROM datadog.actions.execution_policies
WHERE policy_id = '{{ policy_id }}' --required
;
```
</TabItem>
</Tabs>
