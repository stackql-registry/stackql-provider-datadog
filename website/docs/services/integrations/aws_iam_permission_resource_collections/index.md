--- 
title: aws_iam_permission_resource_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_iam_permission_resource_collections
  - integrations
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

Creates, updates, deletes, gets or lists an <code>aws_iam_permission_resource_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_iam_permission_resource_collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.aws_iam_permission_resource_collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_awsintegration_iampermissions_resource_collection"
    values={[
        { label: 'get_awsintegration_iampermissions_resource_collection', value: 'get_awsintegration_iampermissions_resource_collection' }
    ]}
>
<TabItem value="get_awsintegration_iampermissions_resource_collection">

AWS integration resource collection IAM permissions.

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
    <td>The `AWSIntegrationIamPermissionsResponseData` `id`. (default: permissions, example: permissions)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>AWS Integration IAM Permissions response attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The `AWSIntegrationIamPermissionsResponseData` `type`. (permissions) (default: permissions, example: permissions)</td>
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
    <td><a href="#get_awsintegration_iampermissions_resource_collection"><CopyableCode code="get_awsintegration_iampermissions_resource_collection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all resource collection AWS IAM permissions required for the AWS integration.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_awsintegration_iampermissions_resource_collection"
    values={[
        { label: 'get_awsintegration_iampermissions_resource_collection', value: 'get_awsintegration_iampermissions_resource_collection' }
    ]}
>
<TabItem value="get_awsintegration_iampermissions_resource_collection">

Get all resource collection AWS IAM permissions required for the AWS integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_iam_permission_resource_collections
;
```
</TabItem>
</Tabs>
