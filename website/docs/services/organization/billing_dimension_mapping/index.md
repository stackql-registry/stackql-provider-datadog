--- 
title: billing_dimension_mapping
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_dimension_mapping
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

Creates, updates, deletes, gets or lists a <code>billing_dimension_mapping</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_dimension_mapping" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.billing_dimension_mapping" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_billing_dimension_mapping"
    values={[
        { label: 'get_billing_dimension_mapping', value: 'get_billing_dimension_mapping' }
    ]}
>
<TabItem value="get_billing_dimension_mapping">

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
    <td>ID of the billing dimension.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Mapping of billing dimensions to endpoint keys.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of active billing dimensions data. (billing_dimensions) (default: billing_dimensions)</td>
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
    <td><a href="#get_billing_dimension_mapping"><CopyableCode code="get_billing_dimension_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[month]"><code>filter[month]</code></a>, <a href="#parameter-filter[view]"><code>filter[view]</code></a></td>
    <td>Get a mapping of billing dimensions to the corresponding keys for the supported usage metering public API endpoints.&lt;br /&gt;Mapping data is updated on a monthly cadence.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible to &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).</td>
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
<tr id="parameter-filter[month]">
    <td><CopyableCode code="filter[month]" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, and for mappings beginning this month. Defaults to the current month.</td>
</tr>
<tr id="parameter-filter[view]">
    <td><CopyableCode code="filter[view]" /></td>
    <td><code>string</code></td>
    <td>String to specify whether to retrieve active billing dimension mappings for the contract or for all available mappings. Allowed views have the string `active` or `all`. Defaults to `active`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_billing_dimension_mapping"
    values={[
        { label: 'get_billing_dimension_mapping', value: 'get_billing_dimension_mapping' }
    ]}
>
<TabItem value="get_billing_dimension_mapping">

Get a mapping of billing dimensions to the corresponding keys for the supported usage metering public API endpoints.&lt;br /&gt;Mapping data is updated on a monthly cadence.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible to &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.billing_dimension_mapping
WHERE filter[month] = '{{ filter[month] }}'
AND filter[view] = '{{ filter[view] }}'
;
```
</TabItem>
</Tabs>
