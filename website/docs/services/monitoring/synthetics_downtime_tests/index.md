--- 
title: synthetics_downtime_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_downtime_tests
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

Creates, updates, deletes, gets or lists a <code>synthetics_downtime_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_downtime_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_downtime_tests" /></td></tr>
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
    <td><a href="#add_test_to_synthetics_downtime"><CopyableCode code="add_test_to_synthetics_downtime" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a>, <a href="#parameter-test_id"><code>test_id</code></a></td>
    <td></td>
    <td>Associate a Synthetics test with a downtime.</td>
</tr>
<tr>
    <td><a href="#remove_test_from_synthetics_downtime"><CopyableCode code="remove_test_from_synthetics_downtime" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-downtime_id"><code>downtime_id</code></a>, <a href="#parameter-test_id"><code>test_id</code></a></td>
    <td></td>
    <td>Disassociate a Synthetics test from a downtime.</td>
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
<tr id="parameter-downtime_id">
    <td><CopyableCode code="downtime_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the downtime.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-test_id">
    <td><CopyableCode code="test_id" /></td>
    <td><code>string</code></td>
    <td>The public ID of the Synthetics test to disassociate from the downtime.</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="add_test_to_synthetics_downtime"
    values={[
        { label: 'add_test_to_synthetics_downtime', value: 'add_test_to_synthetics_downtime' }
    ]}
>
<TabItem value="add_test_to_synthetics_downtime">

Associate a Synthetics test with a downtime.

```sql
REPLACE datadog.monitoring.synthetics_downtime_tests
SET 
-- No updatable properties
WHERE 
downtime_id = '{{ downtime_id }}' --required
AND test_id = '{{ test_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_test_from_synthetics_downtime"
    values={[
        { label: 'remove_test_from_synthetics_downtime', value: 'remove_test_from_synthetics_downtime' }
    ]}
>
<TabItem value="remove_test_from_synthetics_downtime">

Disassociate a Synthetics test from a downtime.

```sql
DELETE FROM datadog.monitoring.synthetics_downtime_tests
WHERE downtime_id = '{{ downtime_id }}' --required
AND test_id = '{{ test_id }}' --required
;
```
</TabItem>
</Tabs>
