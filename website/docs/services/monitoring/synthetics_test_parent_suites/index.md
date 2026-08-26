--- 
title: synthetics_test_parent_suites
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_test_parent_suites
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

Creates, updates, deletes, gets or lists a <code>synthetics_test_parent_suites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_test_parent_suites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_test_parent_suites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test_parent_suites"
    values={[
        { label: 'get_test_parent_suites', value: 'get_test_parent_suites' }
    ]}
>
<TabItem value="get_test_parent_suites">

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
    <td>The public ID of the parent suite. (example: abc-def-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Object containing details about a parent suite of a Synthetic test.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the parent suite resource. (parent_suite) (default: parent_suite, example: parent_suite)</td>
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
    <td><a href="#get_test_parent_suites"><CopyableCode code="get_test_parent_suites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Get the list of parent suites and their status for a given Synthetic test.</td>
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
    <td>The public ID of the Synthetic test.</td>
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
    defaultValue="get_test_parent_suites"
    values={[
        { label: 'get_test_parent_suites', value: 'get_test_parent_suites' }
    ]}
>
<TabItem value="get_test_parent_suites">

Get the list of parent suites and their status for a given Synthetic test.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_test_parent_suites
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
</Tabs>
