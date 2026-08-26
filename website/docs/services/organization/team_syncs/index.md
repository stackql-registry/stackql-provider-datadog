--- 
title: team_syncs
hide_title: false
hide_table_of_contents: false
keywords:
  - team_syncs
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

Creates, updates, deletes, gets or lists a <code>team_syncs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_syncs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.team_syncs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_team_sync"
    values={[
        { label: 'get_team_sync', value: 'get_team_sync' }
    ]}
>
<TabItem value="get_team_sync">

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
    <td>The sync's identifier (example: aeadc05e-98a8-11ec-ac2c-da7ad0900001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Team sync attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Team sync bulk type. (team_sync_bulk) (example: team_sync_bulk)</td>
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
    <td><a href="#get_team_sync"><CopyableCode code="get_team_sync" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[source]"><code>filter[source]</code></a></td>
    <td></td>
    <td>Get all team synchronization configurations.&lt;br /&gt;Returns a list of configurations used for linking or provisioning teams with external sources like GitHub.</td>
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
<tr id="parameter-filter[source]">
    <td><CopyableCode code="filter[source]" /></td>
    <td><code>string</code></td>
    <td>Filter by the external source platform for team synchronization</td>
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
    defaultValue="get_team_sync"
    values={[
        { label: 'get_team_sync', value: 'get_team_sync' }
    ]}
>
<TabItem value="get_team_sync">

Get all team synchronization configurations.&lt;br /&gt;Returns a list of configurations used for linking or provisioning teams with external sources like GitHub.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.team_syncs
WHERE filter[source] = '{{ filter[source] }}' -- required
;
```
</TabItem>
</Tabs>
