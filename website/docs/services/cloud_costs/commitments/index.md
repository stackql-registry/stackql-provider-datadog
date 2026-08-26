--- 
title: commitments
hide_title: false
hide_table_of_contents: false
keywords:
  - commitments
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

Creates, updates, deletes, gets or lists a <code>commitments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commitments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.commitments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_commitments_commitment_list"
    values={[
        { label: 'get_commitments_commitment_list', value: 'get_commitments_commitment_list' }
    ]}
>
<TabItem value="get_commitments_commitment_list">

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
    <td><CopyableCode code="commitment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Reserved Instance. (example: ri-0123456789abcdef0)</td>
</tr>
<tr>
    <td><CopyableCode code="benefit_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the Azure reservation. (example: my-vm-reservation)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The availability zone of the reservation. (example: us-east-1a)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_engine" /></td>
    <td><code>string</code></td>
    <td>The cache engine type of the Reserved Instance. (example: Redis)</td>
</tr>
<tr>
    <td><CopyableCode code="committed_spend_per_hour" /></td>
    <td><code>number (double)</code></td>
    <td>The hourly committed spend for the Savings Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="database_engine" /></td>
    <td><code>string</code></td>
    <td>The database engine of the Reserved Instance. (example: MySQL)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string</code></td>
    <td>The expiration date of the commitment. (example: 2025-12-31T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The EC2 instance type. (example: m5.xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="is_multi_az" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Reserved Instance is Multi-AZ.</td>
</tr>
<tr>
    <td><CopyableCode code="meter_sub_category" /></td>
    <td><code>string</code></td>
    <td>The Azure meter sub-category for the reservation. (example: D4s v3)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_nfus" /></td>
    <td><code>number (double)</code></td>
    <td>The number of Normalized Capacity Units.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_reservations" /></td>
    <td><code>number (double)</code></td>
    <td>The number of reserved instances.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_class" /></td>
    <td><code>string</code></td>
    <td>The offering class of the Reserved Instance. (example: standard)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>The operating system of the Reserved Instance. (example: Linux)</td>
</tr>
<tr>
    <td><CopyableCode code="purchase_option" /></td>
    <td><code>string</code></td>
    <td>The payment option for the Reserved Instance. (example: All Upfront)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The AWS region of the Reserved Instance. (example: us-east-1)</td>
</tr>
<tr>
    <td><CopyableCode code="savings_plan_type" /></td>
    <td><code>string</code></td>
    <td>The Savings Plan type. (example: ComputeSavingsPlans)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string</code></td>
    <td>The start date of the commitment. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of an Azure VM Reserved Instance. (running, expired, cancelled) (example: running)</td>
</tr>
<tr>
    <td><CopyableCode code="term_length" /></td>
    <td><code>number (double)</code></td>
    <td>The term length in years.</td>
</tr>
<tr>
    <td><CopyableCode code="utilization" /></td>
    <td><code>number (double)</code></td>
    <td>The utilization percentage of the commitment.</td>
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
    <td><a href="#get_commitments_commitment_list"><CopyableCode code="get_commitments_commitment_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-product"><code>product</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a></td>
    <td><a href="#parameter-filter_by"><code>filter_by</code></a>, <a href="#parameter-commitment_type"><code>commitment_type</code></a></td>
    <td>Get a list of individual cloud commitments (Reserved Instances or Savings Plans) with their utilization details. The response schema varies based on the provider, product, and commitment type.</td>
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
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>integer (int64)</code></td>
    <td>End of the query time range in Unix milliseconds. (example: 1696118400000)</td>
</tr>
<tr id="parameter-product">
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Cloud product identifier (for example, ec2, rds, virtualmachines). (example: ec2)</td>
</tr>
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Cloud provider for commitment programs (aws or azure).</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start of the query time range in Unix milliseconds. (example: 1693526400000)</td>
</tr>
<tr id="parameter-commitment_type">
    <td><CopyableCode code="commitment_type" /></td>
    <td><code>string</code></td>
    <td>Type of commitment to query. ri for Reserved Instances, sp for Savings Plans. Defaults to ri. (wire: commitmentType)</td>
</tr>
<tr id="parameter-filter_by">
    <td><CopyableCode code="filter_by" /></td>
    <td><code>string</code></td>
    <td>Optional filter expression to narrow down results. (wire: filterBy)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_commitments_commitment_list"
    values={[
        { label: 'get_commitments_commitment_list', value: 'get_commitments_commitment_list' }
    ]}
>
<TabItem value="get_commitments_commitment_list">

Get a list of individual cloud commitments (Reserved Instances or Savings Plans) with their utilization details. The response schema varies based on the provider, product, and commitment type.

```sql
SELECT
commitment_id,
benefit_name,
availability_zone,
cache_engine,
committed_spend_per_hour,
database_engine,
expiration_date,
instance_type,
is_multi_az,
meter_sub_category,
number_of_nfus,
number_of_reservations,
offering_class,
operating_system,
purchase_option,
region,
savings_plan_type,
start_date,
status,
term_length,
utilization
FROM datadog.cloud_costs.commitments
WHERE provider = '{{ provider }}' -- required
AND product = '{{ product }}' -- required
AND start = '{{ start }}' -- required
AND end = '{{ end }}' -- required
AND filter_by = '{{ filter_by }}'
AND commitment_type = '{{ commitment_type }}'
;
```
</TabItem>
</Tabs>
