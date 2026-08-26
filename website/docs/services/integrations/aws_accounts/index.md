--- 
title: aws_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_accounts
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

Creates, updates, deletes, gets or lists an <code>aws_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.aws_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_awsaccount"
    values={[
        { label: 'get_awsaccount', value: 'get_awsaccount' },
        { label: 'list_awsaccounts', value: 'list_awsaccounts' }
    ]}
>
<TabItem value="get_awsaccount">

AWS Account object

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
    <td>AWS Account response attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AWS Account resource type. (account) (default: account, example: account)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_awsaccounts">

AWS Accounts List object

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
    <td>AWS Account response attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AWS Account resource type. (account) (default: account, example: account)</td>
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
    <td><a href="#get_awsaccount"><CopyableCode code="get_awsaccount" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a></td>
    <td></td>
    <td>Get an AWS Account Integration Config by config ID.</td>
</tr>
<tr>
    <td><a href="#list_awsaccounts"><CopyableCode code="list_awsaccounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a></td>
    <td>Get a list of AWS Account Integration Configs.</td>
</tr>
<tr>
    <td><a href="#create_awsaccount"><CopyableCode code="create_awsaccount" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new AWS Account Integration Config.</td>
</tr>
<tr>
    <td><a href="#update_awsaccount"><CopyableCode code="update_awsaccount" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an AWS Account Integration Config by config ID.</td>
</tr>
<tr>
    <td><a href="#delete_awsaccount"><CopyableCode code="delete_awsaccount" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a></td>
    <td></td>
    <td>Delete an AWS Account Integration Config by config ID.</td>
</tr>
<tr>
    <td><a href="#preview_awsmetric_name_filter"><CopyableCode code="preview_awsmetric_name_filter" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Preview which collected CloudWatch metrics would be filtered by the supplied metric name filters.&lt;br /&gt;The filters are not persisted.</td>
</tr>
<tr>
    <td><a href="#create_new_awsexternal_id"><CopyableCode code="create_new_awsexternal_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Generate a new external ID for AWS role-based authentication.</td>
</tr>
<tr>
    <td><a href="#validate_awsccmconfig"><CopyableCode code="validate_awsccmconfig" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Validate a Cloud Cost Management config for an AWS account using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 against Datadog's ingest requirements without persisting it.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>Optional query parameter to filter accounts by AWS Account ID. If not provided, all accounts are returned. (example: 123456789012)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_awsaccount"
    values={[
        { label: 'get_awsaccount', value: 'get_awsaccount' },
        { label: 'list_awsaccounts', value: 'list_awsaccounts' }
    ]}
>
<TabItem value="get_awsaccount">

Get an AWS Account Integration Config by config ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_accounts
WHERE aws_account_config_id = '{{ aws_account_config_id }}' -- required
;
```
</TabItem>
<TabItem value="list_awsaccounts">

Get a list of AWS Account Integration Configs.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_accounts
WHERE aws_account_id = '{{ aws_account_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_awsaccount"
    values={[
        { label: 'create_awsaccount', value: 'create_awsaccount' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_awsaccount">

Create a new AWS Account Integration Config.

```sql
INSERT INTO datadog.integrations.aws_accounts (
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
- name: aws_accounts
  props:
    - name: data
      description: |
        AWS Account Create Request data.
      value:
        attributes:
          account_tags:
            - "{{ account_tags }}"
          auth_config:
            access_key_id: "{{ access_key_id }}"
            secret_access_key: "{{ secret_access_key }}"
            external_id: "{{ external_id }}"
            role_name: "{{ role_name }}"
          aws_account_id: "{{ aws_account_id }}"
          aws_partition: "{{ aws_partition }}"
          aws_regions:
            include_all: {{ include_all }}
            include_only:
              - "{{ include_only }}"
          logs_config:
            lambda_forwarder:
              lambdas:
                - "{{ lambdas }}"
              log_source_config:
                tag_filters: "{{ tag_filters }}"
              sources:
                - "{{ sources }}"
          metrics_config:
            automute_enabled: {{ automute_enabled }}
            collect_cloudwatch_alarms: {{ collect_cloudwatch_alarms }}
            collect_custom_metrics: {{ collect_custom_metrics }}
            enabled: {{ enabled }}
            metric_name_filters:
              - include_only: "{{ include_only }}"
                namespace: "{{ namespace }}"
                exclude_only: "{{ exclude_only }}"
            namespace_filters:
              exclude_only:
                - "{{ exclude_only }}"
              include_only:
                - "{{ include_only }}"
            tag_filters:
              - namespace: "{{ namespace }}"
                tags: "{{ tags }}"
          resources_config:
            cloud_security_posture_management_collection: {{ cloud_security_posture_management_collection }}
            extended_collection: {{ extended_collection }}
          traces_config:
            xray_services:
              include_all: {{ include_all }}
              include_only:
                - "{{ include_only }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_awsaccount"
    values={[
        { label: 'update_awsaccount', value: 'update_awsaccount' }
    ]}
>
<TabItem value="update_awsaccount">

Update an AWS Account Integration Config by config ID.

```sql
UPDATE datadog.integrations.aws_accounts
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
    defaultValue="delete_awsaccount"
    values={[
        { label: 'delete_awsaccount', value: 'delete_awsaccount' }
    ]}
>
<TabItem value="delete_awsaccount">

Delete an AWS Account Integration Config by config ID.

```sql
DELETE FROM datadog.integrations.aws_accounts
WHERE aws_account_config_id = '{{ aws_account_config_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="preview_awsmetric_name_filter"
    values={[
        { label: 'preview_awsmetric_name_filter', value: 'preview_awsmetric_name_filter' },
        { label: 'create_new_awsexternal_id', value: 'create_new_awsexternal_id' },
        { label: 'validate_awsccmconfig', value: 'validate_awsccmconfig' }
    ]}
>
<TabItem value="preview_awsmetric_name_filter">

Preview which collected CloudWatch metrics would be filtered by the supplied metric name filters.&lt;br /&gt;The filters are not persisted.

```sql
EXEC datadog.integrations.aws_accounts.preview_awsmetric_name_filter 
@aws_account_config_id='{{ aws_account_config_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="create_new_awsexternal_id">

Generate a new external ID for AWS role-based authentication.

```sql
EXEC datadog.integrations.aws_accounts.create_new_awsexternal_id 
;
```
</TabItem>
<TabItem value="validate_awsccmconfig">

Validate a Cloud Cost Management config for an AWS account using Cost and Usage Report&lt;br /&gt;(CUR) 2.0 against Datadog's ingest requirements without persisting it.

```sql
EXEC datadog.integrations.aws_accounts.validate_awsccmconfig 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
