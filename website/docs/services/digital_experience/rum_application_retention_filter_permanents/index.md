--- 
title: rum_application_retention_filter_permanents
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_application_retention_filter_permanents
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

Creates, updates, deletes, gets or lists a <code>rum_application_retention_filter_permanents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_application_retention_filter_permanents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_application_retention_filter_permanents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_permanent_retention_filter"
    values={[
        { label: 'get_permanent_retention_filter', value: 'get_permanent_retention_filter' },
        { label: 'list_permanent_retention_filters', value: 'list_permanent_retention_filters' }
    ]}
>
<TabItem value="get_permanent_retention_filter">

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
    <td>The identifier of a permanent RUM retention filter. (rum_apm_flat_sampling, synthetics_sessions, forced_replay_sessions) (example: synthetics_sessions)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a permanent RUM retention filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `permanent_retention_filters`. (permanent_retention_filters) (default: permanent_retention_filters, example: permanent_retention_filters)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_permanent_retention_filters">

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
    <td>The identifier of a permanent RUM retention filter. (rum_apm_flat_sampling, synthetics_sessions, forced_replay_sessions) (example: synthetics_sessions)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a permanent RUM retention filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `permanent_retention_filters`. (permanent_retention_filters) (default: permanent_retention_filters, example: permanent_retention_filters)</td>
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
    <td><a href="#get_permanent_retention_filter"><CopyableCode code="get_permanent_retention_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-permanent_rf_id"><code>permanent_rf_id</code></a></td>
    <td></td>
    <td>Get a permanent RUM retention filter for a RUM application by its identifier.</td>
</tr>
<tr>
    <td><a href="#list_permanent_retention_filters"><CopyableCode code="list_permanent_retention_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Get the list of permanent RUM retention filters for a RUM application.&lt;br /&gt;Permanent retention filters are predefined filters that cannot be created or deleted.&lt;br /&gt;For each filter, the `editability` block indicates which cross-product fields can be updated.</td>
</tr>
<tr>
    <td><a href="#update_permanent_retention_filter"><CopyableCode code="update_permanent_retention_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-permanent_rf_id"><code>permanent_rf_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the cross-product sampling configuration of a permanent RUM retention filter for a RUM application.&lt;br /&gt;Only fields marked as editable in the `editability` block of the filter can be updated.&lt;br /&gt;Updating a non-editable field returns a `400` response.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>RUM application ID.</td>
</tr>
<tr id="parameter-permanent_rf_id">
    <td><CopyableCode code="permanent_rf_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the permanent RUM retention filter.</td>
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
    defaultValue="get_permanent_retention_filter"
    values={[
        { label: 'get_permanent_retention_filter', value: 'get_permanent_retention_filter' },
        { label: 'list_permanent_retention_filters', value: 'list_permanent_retention_filters' }
    ]}
>
<TabItem value="get_permanent_retention_filter">

Get a permanent RUM retention filter for a RUM application by its identifier.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_application_retention_filter_permanents
WHERE app_id = '{{ app_id }}' -- required
AND permanent_rf_id = '{{ permanent_rf_id }}' -- required
;
```
</TabItem>
<TabItem value="list_permanent_retention_filters">

Get the list of permanent RUM retention filters for a RUM application.&lt;br /&gt;Permanent retention filters are predefined filters that cannot be created or deleted.&lt;br /&gt;For each filter, the `editability` block indicates which cross-product fields can be updated.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_application_retention_filter_permanents
WHERE app_id = '{{ app_id }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_permanent_retention_filter"
    values={[
        { label: 'update_permanent_retention_filter', value: 'update_permanent_retention_filter' }
    ]}
>
<TabItem value="update_permanent_retention_filter">

Update the cross-product sampling configuration of a permanent RUM retention filter for a RUM application.&lt;br /&gt;Only fields marked as editable in the `editability` block of the filter can be updated.&lt;br /&gt;Updating a non-editable field returns a `400` response.

```sql
UPDATE datadog.digital_experience.rum_application_retention_filter_permanents
SET 
data = '{{ data }}'
WHERE 
app_id = '{{ app_id }}' --required
AND permanent_rf_id = '{{ permanent_rf_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
