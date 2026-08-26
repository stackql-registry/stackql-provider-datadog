--- 
title: siem_ioc_explorer_indicators
hide_title: false
hide_table_of_contents: false
keywords:
  - siem_ioc_explorer_indicators
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

Creates, updates, deletes, gets or lists a <code>siem_ioc_explorer_indicators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="siem_ioc_explorer_indicators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.siem_ioc_explorer_indicators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_indicator_of_compromise"
    values={[
        { label: 'get_indicator_of_compromise', value: 'get_indicator_of_compromise' }
    ]}
>
<TabItem value="get_indicator_of_compromise">

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
    <td>Unique identifier for the response.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the get indicator response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Response type identifier.</td>
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
    <td><a href="#get_indicator_of_compromise"><CopyableCode code="get_indicator_of_compromise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-indicator"><code>indicator</code></a></td>
    <td><a href="#parameter-ocsf"><code>ocsf</code></a>, <a href="#parameter-include_triage_history"><code>include_triage_history</code></a>, <a href="#parameter-triage_history_limit"><code>triage_history_limit</code></a>, <a href="#parameter-triage_history_offset"><code>triage_history_offset</code></a></td>
    <td>Get detailed information about a specific indicator of compromise (IoC).</td>
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
<tr id="parameter-indicator">
    <td><CopyableCode code="indicator" /></td>
    <td><code>string</code></td>
    <td>The indicator value to look up (for example, an IP address or domain).</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include_triage_history">
    <td><CopyableCode code="include_triage_history" /></td>
    <td><code>boolean</code></td>
    <td>Include full triage history for the indicator.</td>
</tr>
<tr id="parameter-ocsf">
    <td><CopyableCode code="ocsf" /></td>
    <td><code>boolean</code></td>
    <td>When true, return only OCSF field-based matches. When false, return regex/message-based matches.</td>
</tr>
<tr id="parameter-triage_history_limit">
    <td><CopyableCode code="triage_history_limit" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of triage history events returned. Only applied when `include_triage_history` is true.</td>
</tr>
<tr id="parameter-triage_history_offset">
    <td><CopyableCode code="triage_history_offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Pagination offset into the triage history. Only applied when `include_triage_history` is true.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_indicator_of_compromise"
    values={[
        { label: 'get_indicator_of_compromise', value: 'get_indicator_of_compromise' }
    ]}
>
<TabItem value="get_indicator_of_compromise">

Get detailed information about a specific indicator of compromise (IoC).

```sql
SELECT
id,
attributes,
type
FROM datadog.security.siem_ioc_explorer_indicators
WHERE indicator = '{{ indicator }}' -- required
AND ocsf = '{{ ocsf }}'
AND include_triage_history = '{{ include_triage_history }}'
AND triage_history_limit = '{{ triage_history_limit }}'
AND triage_history_offset = '{{ triage_history_offset }}'
;
```
</TabItem>
</Tabs>
