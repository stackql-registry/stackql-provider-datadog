--- 
title: aws_on_demand_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_on_demand_tasks
  - security
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

Creates, updates, deletes, gets or lists an <code>aws_on_demand_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_on_demand_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.aws_on_demand_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aws_on_demand_task"
    values={[
        { label: 'get_aws_on_demand_task', value: 'get_aws_on_demand_task' },
        { label: 'list_aws_on_demand_tasks', value: 'list_aws_on_demand_tasks' }
    ]}
>
<TabItem value="get_aws_on_demand_task">

OK.

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
    <td>The UUID of the task. (example: 6d09294c-9ad9-42fd-a759-a0c1599b4828)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for the AWS on demand task.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the on demand task. The value should always be `aws_resource`. (aws_resource) (default: aws_resource, example: aws_resource)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_aws_on_demand_tasks">

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
    <td>The UUID of the task. (example: 6d09294c-9ad9-42fd-a759-a0c1599b4828)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for the AWS on demand task.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the on demand task. The value should always be `aws_resource`. (aws_resource) (default: aws_resource, example: aws_resource)</td>
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
    <td><a href="#get_aws_on_demand_task"><CopyableCode code="get_aws_on_demand_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>Fetch the data of a specific on demand task.</td>
</tr>
<tr>
    <td><a href="#list_aws_on_demand_tasks"><CopyableCode code="list_aws_on_demand_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Fetches the most recent 1000 AWS on demand tasks.</td>
</tr>
<tr>
    <td><a href="#create_aws_on_demand_task"><CopyableCode code="create_aws_on_demand_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Trigger the scan of an AWS resource with a high priority. Agentless scanning must be activated for the AWS account containing the resource to scan.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the task. (example: 6d09294c-9ad9-42fd-a759-a0c1599b4828)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_aws_on_demand_task"
    values={[
        { label: 'get_aws_on_demand_task', value: 'get_aws_on_demand_task' },
        { label: 'list_aws_on_demand_tasks', value: 'list_aws_on_demand_tasks' }
    ]}
>
<TabItem value="get_aws_on_demand_task">

Fetch the data of a specific on demand task.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.aws_on_demand_tasks
WHERE task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list_aws_on_demand_tasks">

Fetches the most recent 1000 AWS on demand tasks.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.aws_on_demand_tasks
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_aws_on_demand_task"
    values={[
        { label: 'create_aws_on_demand_task', value: 'create_aws_on_demand_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_aws_on_demand_task">

Trigger the scan of an AWS resource with a high priority. Agentless scanning must be activated for the AWS account containing the resource to scan.

```sql
INSERT INTO datadog.security.aws_on_demand_tasks (
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
- name: aws_on_demand_tasks
  props:
    - name: data
      description: |
        Object for a single AWS on demand task.
      value:
        attributes:
          arn: "{{ arn }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
