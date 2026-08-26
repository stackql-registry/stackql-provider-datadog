--- 
title: incident_type_org_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_type_org_settings
  - service_management
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

Creates, updates, deletes, gets or lists an <code>incident_type_org_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_type_org_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_type_org_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_settings_by_incident_type"
    values={[
        { label: 'get_org_settings_by_incident_type', value: 'get_org_settings_by_incident_type' },
        { label: 'list_org_settings', value: 'list_org_settings' }
    ]}
>
<TabItem value="get_org_settings_by_incident_type">

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
    <td><code>string (uuid)</code></td>
    <td>The org settings identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident org settings resource in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for an incident org settings resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident org settings resource type. (incident_org_settings) (example: incident_org_settings)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_settings">

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
    <td><code>string (uuid)</code></td>
    <td>The org settings identifier. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an incident org settings resource in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships for an incident org settings resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Incident org settings resource type. (incident_org_settings) (example: incident_org_settings)</td>
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
    <td><a href="#get_org_settings_by_incident_type"><CopyableCode code="get_org_settings_by_incident_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_type_id"><code>incident_type_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get the org settings for a specific incident type.</td>
</tr>
<tr>
    <td><a href="#list_org_settings"><CopyableCode code="list_org_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-include-deleted"><code>include-deleted</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>List org settings for all incident types.</td>
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
<tr id="parameter-incident_type_id">
    <td><CopyableCode code="incident_type_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The UUID of the incident type.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of related resources to include in the response.</td>
</tr>
<tr id="parameter-include-deleted">
    <td><CopyableCode code="include-deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include deleted records.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The offset for pagination.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_settings_by_incident_type"
    values={[
        { label: 'get_org_settings_by_incident_type', value: 'get_org_settings_by_incident_type' },
        { label: 'list_org_settings', value: 'list_org_settings' }
    ]}
>
<TabItem value="get_org_settings_by_incident_type">

Get the org settings for a specific incident type.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_type_org_settings
WHERE incident_type_id = '{{ incident_type_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_org_settings">

List org settings for all incident types.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_type_org_settings
WHERE page[size] = '{{ page[size] }}'
AND page[offset] = '{{ page[offset] }}'
AND include-deleted = '{{ include-deleted }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>
