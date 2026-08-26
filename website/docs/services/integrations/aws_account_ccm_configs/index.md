--- 
title: aws_account_ccm_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_account_ccm_configs
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

Creates, updates, deletes, gets or lists an <code>aws_account_ccm_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_account_ccm_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.aws_account_ccm_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_awsaccount_ccmconfig"
    values={[
        { label: 'get_awsaccount_ccmconfig', value: 'get_awsaccount_ccmconfig' }
    ]}
>
<TabItem value="get_awsaccount_ccmconfig">

AWS CCM Config object

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
    <td>Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the &#91;List all AWS integrations&#93;(https:​//docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID. (example: 00000000-abcd-0001-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>AWS CCM Config response attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AWS CCM Config resource type. (ccm_config) (default: ccm_config, example: ccm_config)</td>
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
    <td><a href="#get_awsaccount_ccmconfig"><CopyableCode code="get_awsaccount_ccmconfig" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a></td>
    <td></td>
    <td>Get the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.</td>
</tr>
<tr>
    <td><a href="#create_awsaccount_ccmconfig"><CopyableCode code="create_awsaccount_ccmconfig" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.</td>
</tr>
<tr>
    <td><a href="#update_awsaccount_ccmconfig"><CopyableCode code="update_awsaccount_ccmconfig" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.</td>
</tr>
<tr>
    <td><a href="#delete_awsaccount_ccmconfig"><CopyableCode code="delete_awsaccount_ccmconfig" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a></td>
    <td></td>
    <td>Delete the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.</td>
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
<tr id="parameter-aws_account_config_id">
    <td><CopyableCode code="aws_account_config_id" /></td>
    <td><code>string</code></td>
    <td>Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the &#91;List all AWS integrations&#93;(https:​//docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID.</td>
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
    defaultValue="get_awsaccount_ccmconfig"
    values={[
        { label: 'get_awsaccount_ccmconfig', value: 'get_awsaccount_ccmconfig' }
    ]}
>
<TabItem value="get_awsaccount_ccmconfig">

Get the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_account_ccm_configs
WHERE aws_account_config_id = '{{ aws_account_config_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_awsaccount_ccmconfig"
    values={[
        { label: 'create_awsaccount_ccmconfig', value: 'create_awsaccount_ccmconfig' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_awsaccount_ccmconfig">

Create the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.

```sql
INSERT INTO datadog.integrations.aws_account_ccm_configs (
data,
aws_account_config_id
)
SELECT 
'{{ data }}' /* required */,
'{{ aws_account_config_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: aws_account_ccm_configs
  props:
    - name: aws_account_config_id
      value: "{{ aws_account_config_id }}"
      description: Required parameter for the aws_account_ccm_configs resource.
    - name: data
      description: |
        AWS CCM Config Create/Update Request data.
      value:
        attributes:
          ccm_config:
            data_export_configs:
              - bucket_name: "{{ bucket_name }}"
                bucket_region: "{{ bucket_region }}"
                report_name: "{{ report_name }}"
                report_prefix: "{{ report_prefix }}"
                report_type: "{{ report_type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_awsaccount_ccmconfig"
    values={[
        { label: 'update_awsaccount_ccmconfig', value: 'update_awsaccount_ccmconfig' }
    ]}
>
<TabItem value="update_awsaccount_ccmconfig">

Update the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.

```sql
UPDATE datadog.integrations.aws_account_ccm_configs
SET 
data = '{{ data }}'
WHERE 
aws_account_config_id = '{{ aws_account_config_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_awsaccount_ccmconfig"
    values={[
        { label: 'delete_awsaccount_ccmconfig', value: 'delete_awsaccount_ccmconfig' }
    ]}
>
<TabItem value="delete_awsaccount_ccmconfig">

Delete the Cloud Cost Management config for an AWS Account Integration Config using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 by config ID.

```sql
DELETE FROM datadog.integrations.aws_account_ccm_configs
WHERE aws_account_config_id = '{{ aws_account_config_id }}' --required
;
```
</TabItem>
</Tabs>
