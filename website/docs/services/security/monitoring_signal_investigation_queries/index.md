--- 
title: monitoring_signal_investigation_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_signal_investigation_queries
  - security
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

Creates, updates, deletes, gets or lists a <code>monitoring_signal_investigation_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_signal_investigation_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_signal_investigation_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_investigation_log_queries_matching_signal"
    values={[
        { label: 'get_investigation_log_queries_matching_signal', value: 'get_investigation_log_queries_matching_signal' }
    ]}
>
<TabItem value="get_investigation_log_queries_matching_signal">

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
    <td>The unique ID of the suggested action. (example: w00-t10-992)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a suggested action for a security signal. The available fields depend on the action type.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the suggested action resource. (investigation_log_queries, recommended_blog_posts) (example: investigation_log_queries)</td>
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
    <td><a href="#get_investigation_log_queries_matching_signal"><CopyableCode code="get_investigation_log_queries_matching_signal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-signal_id"><code>signal_id</code></a></td>
    <td></td>
    <td>Get the list of investigation log queries available for a given security signal.</td>
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
<tr id="parameter-signal_id">
    <td><CopyableCode code="signal_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the signal.</td>
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
    defaultValue="get_investigation_log_queries_matching_signal"
    values={[
        { label: 'get_investigation_log_queries_matching_signal', value: 'get_investigation_log_queries_matching_signal' }
    ]}
>
<TabItem value="get_investigation_log_queries_matching_signal">

Get the list of investigation log queries available for a given security signal.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_signal_investigation_queries
WHERE signal_id = '{{ signal_id }}' -- required
;
```
</TabItem>
</Tabs>
