--- 
title: monitoring_signals
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_signals
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

Creates, updates, deletes, gets or lists a <code>monitoring_signals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_signals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_signals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_monitoring_signal"
    values={[
        { label: 'get_security_monitoring_signal', value: 'get_security_monitoring_signal' },
        { label: 'list_security_monitoring_signals', value: 'list_security_monitoring_signals' }
    ]}
>
<TabItem value="get_security_monitoring_signal">

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
    <td>The unique ID of the security signal. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object containing all signal attributes and their associated values.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of event. (signal) (default: signal, example: signal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_monitoring_signals">

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
    <td>The unique ID of the security signal. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object containing all signal attributes and their associated values.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of event. (signal) (default: signal, example: signal)</td>
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
    <td><a href="#get_security_monitoring_signal"><CopyableCode code="get_security_monitoring_signal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-signal_id"><code>signal_id</code></a></td>
    <td></td>
    <td>Get a signal's details.</td>
</tr>
<tr>
    <td><a href="#list_security_monitoring_signals"><CopyableCode code="list_security_monitoring_signals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[from]"><code>filter[from]</code></a>, <a href="#parameter-filter[to]"><code>filter[to]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>The list endpoint returns security signals that match a search query.&lt;br /&gt;Both this endpoint and the POST endpoint can be used interchangeably when listing&lt;br /&gt;security signals.</td>
</tr>
<tr>
    <td><a href="#bulk_edit_security_monitoring_signals_assignee"><CopyableCode code="bulk_edit_security_monitoring_signals_assignee" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Change the triage assignees of multiple security signals at once.&lt;br /&gt;The maximum number of signals that can be updated in a single request is 199.</td>
</tr>
<tr>
    <td><a href="#bulk_edit_security_monitoring_signals_state"><CopyableCode code="bulk_edit_security_monitoring_signals_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Change the triage states of multiple security signals at once.&lt;br /&gt;The maximum number of signals that can be updated in a single request is 199.</td>
</tr>
<tr>
    <td><a href="#bulk_edit_security_monitoring_signals"><CopyableCode code="bulk_edit_security_monitoring_signals" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the triage state or assignee of multiple security signals at once.&lt;br /&gt;The maximum number of signals that can be updated in a single request is 199.</td>
</tr>
<tr>
    <td><a href="#search_security_monitoring_signals"><CopyableCode code="search_security_monitoring_signals" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Returns security signals that match a search query.&lt;br /&gt;Both this endpoint and the GET endpoint can be used interchangeably for listing&lt;br /&gt;security signals.</td>
</tr>
<tr>
    <td><a href="#edit_security_monitoring_signal_assignee"><CopyableCode code="edit_security_monitoring_signal_assignee" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-signal_id"><code>signal_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Modify the triage assignee of a security signal.</td>
</tr>
<tr>
    <td><a href="#edit_security_monitoring_signal_incidents"><CopyableCode code="edit_security_monitoring_signal_incidents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-signal_id"><code>signal_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Change the related incidents for a security signal.</td>
</tr>
<tr>
    <td><a href="#edit_security_monitoring_signal_state"><CopyableCode code="edit_security_monitoring_signal_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-signal_id"><code>signal_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Change the triage state of a security signal.</td>
</tr>
<tr>
    <td><a href="#edit_security_monitoring_signal"><CopyableCode code="edit_security_monitoring_signal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-signal_id"><code>signal_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the triage state or assignee of a security signal.</td>
</tr>
<tr>
    <td><a href="#add_security_monitoring_signal_to_incident"><CopyableCode code="add_security_monitoring_signal_to_incident" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-signal_id"><code>signal_id</code></a>, <a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td></td>
    <td>Add a security signal to an incident. This makes it possible to search for signals by incident within the signal explorer and to view the signals on the incident timeline.</td>
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
<tr id="parameter-filter[from]">
    <td><CopyableCode code="filter[from]" /></td>
    <td><code>string (date-time)</code></td>
    <td>The minimum timestamp for requested security signals. (example: 2019-01-02T09:42:36.320Z)</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>The search query for security signals. (example: security:attack status:high)</td>
</tr>
<tr id="parameter-filter[to]">
    <td><CopyableCode code="filter[to]" /></td>
    <td><code>string (date-time)</code></td>
    <td>The maximum timestamp for requested security signals. (example: 2019-01-03T09:42:36.320Z)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>A list of results using the cursor provided in the previous query. (example: eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of security signals in the response. (example: 25)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The order of the security signals in results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_monitoring_signal"
    values={[
        { label: 'get_security_monitoring_signal', value: 'get_security_monitoring_signal' },
        { label: 'list_security_monitoring_signals', value: 'list_security_monitoring_signals' }
    ]}
>
<TabItem value="get_security_monitoring_signal">

Get a signal's details.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_signals
WHERE signal_id = '{{ signal_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_monitoring_signals">

The list endpoint returns security signals that match a search query.&lt;br /&gt;Both this endpoint and the POST endpoint can be used interchangeably when listing&lt;br /&gt;security signals.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_signals
WHERE filter[query] = '{{ filter[query] }}'
AND filter[from] = '{{ filter[from] }}'
AND filter[to] = '{{ filter[to] }}'
AND sort = '{{ sort }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="bulk_edit_security_monitoring_signals_assignee"
    values={[
        { label: 'bulk_edit_security_monitoring_signals_assignee', value: 'bulk_edit_security_monitoring_signals_assignee' },
        { label: 'bulk_edit_security_monitoring_signals_state', value: 'bulk_edit_security_monitoring_signals_state' },
        { label: 'bulk_edit_security_monitoring_signals', value: 'bulk_edit_security_monitoring_signals' },
        { label: 'search_security_monitoring_signals', value: 'search_security_monitoring_signals' },
        { label: 'edit_security_monitoring_signal_assignee', value: 'edit_security_monitoring_signal_assignee' },
        { label: 'edit_security_monitoring_signal_incidents', value: 'edit_security_monitoring_signal_incidents' },
        { label: 'edit_security_monitoring_signal_state', value: 'edit_security_monitoring_signal_state' },
        { label: 'edit_security_monitoring_signal', value: 'edit_security_monitoring_signal' },
        { label: 'add_security_monitoring_signal_to_incident', value: 'add_security_monitoring_signal_to_incident' }
    ]}
>
<TabItem value="bulk_edit_security_monitoring_signals_assignee">

Change the triage assignees of multiple security signals at once.&lt;br /&gt;The maximum number of signals that can be updated in a single request is 199.

```sql
EXEC datadog.security.monitoring_signals.bulk_edit_security_monitoring_signals_assignee 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="bulk_edit_security_monitoring_signals_state">

Change the triage states of multiple security signals at once.&lt;br /&gt;The maximum number of signals that can be updated in a single request is 199.

```sql
EXEC datadog.security.monitoring_signals.bulk_edit_security_monitoring_signals_state 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="bulk_edit_security_monitoring_signals">

Update the triage state or assignee of multiple security signals at once.&lt;br /&gt;The maximum number of signals that can be updated in a single request is 199.

```sql
EXEC datadog.security.monitoring_signals.bulk_edit_security_monitoring_signals 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="search_security_monitoring_signals">

Returns security signals that match a search query.&lt;br /&gt;Both this endpoint and the GET endpoint can be used interchangeably for listing&lt;br /&gt;security signals.

```sql
EXEC datadog.security.monitoring_signals.search_security_monitoring_signals 
@@json=
'{
"filter": "{{ filter }}", 
"page": "{{ page }}", 
"sort": "{{ sort }}"
}'
;
```
</TabItem>
<TabItem value="edit_security_monitoring_signal_assignee">

Modify the triage assignee of a security signal.

```sql
EXEC datadog.security.monitoring_signals.edit_security_monitoring_signal_assignee 
@signal_id='{{ signal_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="edit_security_monitoring_signal_incidents">

Change the related incidents for a security signal.

```sql
EXEC datadog.security.monitoring_signals.edit_security_monitoring_signal_incidents 
@signal_id='{{ signal_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="edit_security_monitoring_signal_state">

Change the triage state of a security signal.

```sql
EXEC datadog.security.monitoring_signals.edit_security_monitoring_signal_state 
@signal_id='{{ signal_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="edit_security_monitoring_signal">

Update the triage state or assignee of a security signal.

```sql
EXEC datadog.security.monitoring_signals.edit_security_monitoring_signal 
@signal_id='{{ signal_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="add_security_monitoring_signal_to_incident">

Add a security signal to an incident. This makes it possible to search for signals by incident within the signal explorer and to view the signals on the incident timeline.

```sql
EXEC datadog.security.monitoring_signals.add_security_monitoring_signal_to_incident 
@signal_id='{{ signal_id }}' --required, 
@@json=
'{
"add_to_signal_timeline": {{ add_to_signal_timeline }}, 
"incident_id": {{ incident_id }}, 
"version": {{ version }}
}'
;
```
</TabItem>
</Tabs>
