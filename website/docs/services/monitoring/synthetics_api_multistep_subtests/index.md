--- 
title: synthetics_api_multistep_subtests
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_api_multistep_subtests
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>synthetics_api_multistep_subtests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_api_multistep_subtests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_api_multistep_subtests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api_multistep_subtests"
    values={[
        { label: 'get_api_multistep_subtests', value: 'get_api_multistep_subtests' }
    ]}
>
<TabItem value="get_api_multistep_subtests">

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
    <td>The public ID of the subtest. (example: abc-def-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Synthetic API multistep subtest.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the subtest resource. (subtest) (default: subtest, example: subtest)</td>
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
    <td><a href="#get_api_multistep_subtests"><CopyableCode code="get_api_multistep_subtests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Get the list of API tests that can be added as subtests to a given API multistep test.&lt;br /&gt;The current test is excluded from the list since a test cannot be a subtest of itself.</td>
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
<tr id="parameter-public_id">
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The public ID of the API multistep test.</td>
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
    defaultValue="get_api_multistep_subtests"
    values={[
        { label: 'get_api_multistep_subtests', value: 'get_api_multistep_subtests' }
    ]}
>
<TabItem value="get_api_multistep_subtests">

Get the list of API tests that can be added as subtests to a given API multistep test.&lt;br /&gt;The current test is excluded from the list since a test cannot be a subtest of itself.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_api_multistep_subtests
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
</Tabs>
