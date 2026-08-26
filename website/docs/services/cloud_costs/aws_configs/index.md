--- 
title: aws_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_configs
  - cloud_costs
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

Creates, updates, deletes, gets or lists an <code>aws_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.aws_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cost_awscurconfigs"
    values={[
        { label: 'list_cost_awscurconfigs', value: 'list_cost_awscurconfigs' }
    ]}
>
<TabItem value="list_cost_awscurconfigs">

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
    <td>The ID of the AWS CUR config.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for An AWS CUR config.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of AWS CUR config. (aws_cur_config) (default: aws_cur_config, example: aws_cur_config)</td>
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
    <td><a href="#list_cost_awscurconfigs"><CopyableCode code="list_cost_awscurconfigs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List the AWS CUR configs.</td>
</tr>
<tr>
    <td><a href="#create_cost_awscurconfig"><CopyableCode code="create_cost_awscurconfig" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Cloud Cost Management account for an AWS CUR config.</td>
</tr>
<tr>
    <td><a href="#update_cost_awscurconfig"><CopyableCode code="update_cost_awscurconfig" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cloud_account_id"><code>cloud_account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the status (active/archived) and/or account filtering configuration of an AWS CUR config.</td>
</tr>
<tr>
    <td><a href="#delete_cost_awscurconfig"><CopyableCode code="delete_cost_awscurconfig" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cloud_account_id"><code>cloud_account_id</code></a></td>
    <td></td>
    <td>Archive a Cloud Cost Management Account.</td>
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
<tr id="parameter-cloud_account_id">
    <td><CopyableCode code="cloud_account_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Cloud Account id.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cost_awscurconfigs"
    values={[
        { label: 'list_cost_awscurconfigs', value: 'list_cost_awscurconfigs' }
    ]}
>
<TabItem value="list_cost_awscurconfigs">

List the AWS CUR configs.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.aws_configs
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cost_awscurconfig"
    values={[
        { label: 'create_cost_awscurconfig', value: 'create_cost_awscurconfig' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cost_awscurconfig">

Create a Cloud Cost Management account for an AWS CUR config.

```sql
INSERT INTO datadog.cloud_costs.aws_configs (
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
- name: aws_configs
  props:
    - name: data
      description: |
        AWS CUR config Post data.
      value:
        attributes:
          account_filters:
            excluded_accounts:
              - "{{ excluded_accounts }}"
            include_new_accounts: {{ include_new_accounts }}
            included_accounts:
              - "{{ included_accounts }}"
          account_id: "{{ account_id }}"
          bucket_name: "{{ bucket_name }}"
          bucket_region: "{{ bucket_region }}"
          months: {{ months }}
          report_name: "{{ report_name }}"
          report_prefix: "{{ report_prefix }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cost_awscurconfig"
    values={[
        { label: 'update_cost_awscurconfig', value: 'update_cost_awscurconfig' }
    ]}
>
<TabItem value="update_cost_awscurconfig">

Update the status (active/archived) and/or account filtering configuration of an AWS CUR config.

```sql
UPDATE datadog.cloud_costs.aws_configs
SET 
data = '{{ data }}'
WHERE 
cloud_account_id = '{{ cloud_account_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cost_awscurconfig"
    values={[
        { label: 'delete_cost_awscurconfig', value: 'delete_cost_awscurconfig' }
    ]}
>
<TabItem value="delete_cost_awscurconfig">

Archive a Cloud Cost Management Account.

```sql
DELETE FROM datadog.cloud_costs.aws_configs
WHERE cloud_account_id = '{{ cloud_account_id }}' --required
;
```
</TabItem>
</Tabs>
