--- 
title: ip_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_ranges
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

Creates, updates, deletes, gets or lists an <code>ip_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.ip_ranges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipranges"
    values={[
        { label: 'get_ipranges', value: 'get_ipranges' }
    ]}
>
<TabItem value="get_ipranges">

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
    <td><CopyableCode code="agents" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Agent endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="api" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the API endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="apm" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the APM endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="global" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for all Datadog endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Logs endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string</code></td>
    <td>Date when last updated, in the form `YYYY-MM-DD-hh-mm-ss`. (example: 2019-10-31-20-00-00)</td>
</tr>
<tr>
    <td><CopyableCode code="orchestrator" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Orchestrator endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="process" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Process endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="remote-configuration" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Remote Configuration endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="synthetics" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Synthetics endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="synthetics-private-locations" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Synthetics Private Locations endpoints.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version of the IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="webhooks" /></td>
    <td><code>object</code></td>
    <td>Available prefix information for the Webhook endpoints.</td>
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
    <td><a href="#get_ipranges"><CopyableCode code="get_ipranges" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get information about Datadog IP ranges.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipranges"
    values={[
        { label: 'get_ipranges', value: 'get_ipranges' }
    ]}
>
<TabItem value="get_ipranges">

Get information about Datadog IP ranges.

```sql
SELECT
agents,
api,
apm,
global,
logs,
modified,
orchestrator,
process,
remote-configuration,
synthetics,
synthetics-private-locations,
version,
webhooks
FROM datadog.organization.ip_ranges
;
```
</TabItem>
</Tabs>
