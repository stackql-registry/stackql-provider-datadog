--- 
title: aws_account_metric_name_filter_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_account_metric_name_filter_previews
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

Creates, updates, deletes, gets or lists an <code>aws_account_metric_name_filter_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_account_metric_name_filter_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.aws_account_metric_name_filter_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_awsmetric_name_filter_preview"
    values={[
        { label: 'get_awsmetric_name_filter_preview', value: 'get_awsmetric_name_filter_preview' }
    ]}
>
<TabItem value="get_awsmetric_name_filter_preview">

AWS metric name filter preview result

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
    <td>AWS metric name filter preview response attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The `AWSMetricNameFilterPreviewResponseData` `type`. (metric_name_filter_preview) (default: metric_name_filter_preview, example: metric_name_filter_preview)</td>
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
    <td><a href="#get_awsmetric_name_filter_preview"><CopyableCode code="get_awsmetric_name_filter_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_config_id"><code>aws_account_config_id</code></a></td>
    <td></td>
    <td>Preview which collected CloudWatch metrics would be filtered by the account's saved metric name filters.</td>
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
    defaultValue="get_awsmetric_name_filter_preview"
    values={[
        { label: 'get_awsmetric_name_filter_preview', value: 'get_awsmetric_name_filter_preview' }
    ]}
>
<TabItem value="get_awsmetric_name_filter_preview">

Preview which collected CloudWatch metrics would be filtered by the account's saved metric name filters.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_account_metric_name_filter_previews
WHERE aws_account_config_id = '{{ aws_account_config_id }}' -- required
;
```
</TabItem>
</Tabs>
