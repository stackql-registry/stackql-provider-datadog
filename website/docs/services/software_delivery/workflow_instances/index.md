--- 
title: workflow_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_instances
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>workflow_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.workflow_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_instance"
    values={[
        { label: 'get_workflow_instance', value: 'get_workflow_instance' },
        { label: 'list_workflow_instances', value: 'list_workflow_instances' }
    ]}
>
<TabItem value="get_workflow_instance">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the instance response data.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_instances">

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
    <td>The ID of the workflow instance</td>
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
    <td><a href="#get_workflow_instance"><CopyableCode code="get_workflow_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a></td>
    <td></td>
    <td>Get a specific execution of a given workflow. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#list_workflow_instances"><CopyableCode code="list_workflow_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>List all instances of a given workflow. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#create_workflow_instance"><CopyableCode code="create_workflow_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td></td>
    <td>Execute the given workflow. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#cancel_workflow_instance"><CopyableCode code="cancel_workflow_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a></td>
    <td></td>
    <td>Cancels a specific execution of a given workflow. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workflow instance.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workflow.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items to return per page. The maximum allowed value is 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_instance"
    values={[
        { label: 'get_workflow_instance', value: 'get_workflow_instance' },
        { label: 'list_workflow_instances', value: 'list_workflow_instances' }
    ]}
>
<TabItem value="get_workflow_instance">

Get a specific execution of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
SELECT
attributes
FROM datadog.software_delivery.workflow_instances
WHERE workflow_id = '{{ workflow_id }}' -- required
AND instance_id = '{{ instance_id }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_instances">

List all instances of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
SELECT
id
FROM datadog.software_delivery.workflow_instances
WHERE workflow_id = '{{ workflow_id }}' -- required
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow_instance"
    values={[
        { label: 'create_workflow_instance', value: 'create_workflow_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow_instance">

Execute the given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
INSERT INTO datadog.software_delivery.workflow_instances (
meta,
workflow_id
)
SELECT 
'{{ meta }}',
'{{ workflow_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_instances
  props:
    - name: workflow_id
      value: "{{ workflow_id }}"
      description: Required parameter for the workflow_instances resource.
    - name: meta
      description: |
        Additional information for creating a workflow instance.
      value:
        payload: "{{ payload }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel_workflow_instance"
    values={[
        { label: 'cancel_workflow_instance', value: 'cancel_workflow_instance' }
    ]}
>
<TabItem value="cancel_workflow_instance">

Cancels a specific execution of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
EXEC datadog.software_delivery.workflow_instances.cancel_workflow_instance 
@workflow_id='{{ workflow_id }}' --required, 
@instance_id='{{ instance_id }}' --required 
;
```
</TabItem>
</Tabs>
