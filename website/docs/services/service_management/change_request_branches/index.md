--- 
title: change_request_branches
hide_title: false
hide_table_of_contents: false
keywords:
  - change_request_branches
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

Creates, updates, deletes, gets or lists a <code>change_request_branches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="change_request_branches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.change_request_branches" /></td></tr>
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
    <td><a href="#create_change_request_branch"><CopyableCode code="create_change_request_branch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-change_request_id"><code>change_request_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new branch in a repository for a change request.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_change_request_branch"
    values={[
        { label: 'create_change_request_branch', value: 'create_change_request_branch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_change_request_branch">

Create a new branch in a repository for a change request.

```sql
INSERT INTO datadog.service_management.change_request_branches (
data,
change_request_id
)
SELECT 
'{{ data }}' /* required */,
'{{ change_request_id }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: change_request_branches
  props:
    - name: change_request_id
      value: "{{ change_request_id }}"
      description: Required parameter for the change_request_branches resource.
    - name: data
      description: |
        Data object to create a change request branch.
      value:
        attributes:
          branch_name: "{{ branch_name }}"
          repo_id: "{{ repo_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
