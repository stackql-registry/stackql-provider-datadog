--- 
title: usage_billable_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_billable_summary
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

Creates, updates, deletes, gets or lists a <code>usage_billable_summary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_billable_summary" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.usage_billable_summary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_billable_summary"
    values={[
        { label: 'get_usage_billable_summary', value: 'get_usage_billable_summary' }
    ]}
>
<TabItem value="get_usage_billable_summary">

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
    <td><CopyableCode code="account_public_id" /></td>
    <td><code>string</code></td>
    <td>The account public ID.</td>
</tr>
<tr>
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The organization public ID.</td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>The account name.</td>
</tr>
<tr>
    <td><CopyableCode code="org_name" /></td>
    <td><code>string</code></td>
    <td>The organization name.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_plan" /></td>
    <td><code>string</code></td>
    <td>The billing plan (metadata). (Deprecated from June 2026)</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Shows the last date of usage.</td>
</tr>
<tr>
    <td><CopyableCode code="num_orgs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ratio_in_month" /></td>
    <td><code>number (double)</code></td>
    <td>Shows usage aggregation for a billing period.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region of the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Shows the first date of usage.</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>object</code></td>
    <td>Response with aggregated usage types.</td>
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
    <td><a href="#get_usage_billable_summary"><CopyableCode code="get_usage_billable_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-month"><code>month</code></a>, <a href="#parameter-include_connected_accounts"><code>include_connected_accounts</code></a></td>
    <td>Get billable usage across your account.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).</td>
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
<tr id="parameter-include_connected_accounts">
    <td><CopyableCode code="include_connected_accounts" /></td>
    <td><code>boolean</code></td>
    <td>Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.</td>
</tr>
<tr id="parameter-month">
    <td><CopyableCode code="month" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to month: `&#91;YYYY-MM&#93;` for usage starting this month.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage_billable_summary"
    values={[
        { label: 'get_usage_billable_summary', value: 'get_usage_billable_summary' }
    ]}
>
<TabItem value="get_usage_billable_summary">

Get billable usage across your account.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).

```sql
SELECT
account_public_id,
public_id,
account_name,
org_name,
billing_plan,
end_date,
num_orgs,
ratio_in_month,
region,
start_date,
usage
FROM datadog.organization.usage_billable_summary
WHERE month = '{{ month }}'
AND include_connected_accounts = '{{ include_connected_accounts }}'
;
```
</TabItem>
</Tabs>
