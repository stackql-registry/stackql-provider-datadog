--- 
title: product_analytics_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_accounts
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>product_analytics_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_accounts" /></td></tr>
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
    <td><a href="#get_account_facet_info"><CopyableCode code="get_account_facet_info" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Get facet information for account attributes including possible values and counts</td>
</tr>
<tr>
    <td><a href="#query_accounts"><CopyableCode code="query_accounts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Query accounts with flexible filtering by account properties</td>
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

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="get_account_facet_info"
    values={[
        { label: 'get_account_facet_info', value: 'get_account_facet_info' },
        { label: 'query_accounts', value: 'query_accounts' }
    ]}
>
<TabItem value="get_account_facet_info">

Get facet information for account attributes including possible values and counts

```sql
EXEC datadog.digital_experience.product_analytics_accounts.get_account_facet_info 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_accounts">

Query accounts with flexible filtering by account properties

```sql
EXEC datadog.digital_experience.product_analytics_accounts.query_accounts 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
