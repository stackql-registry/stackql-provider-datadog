--- 
title: monitoring_critical_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_critical_assets
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

Creates, updates, deletes, gets or lists a <code>monitoring_critical_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_critical_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_critical_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_monitoring_critical_asset"
    values={[
        { label: 'get_security_monitoring_critical_asset', value: 'get_security_monitoring_critical_asset' },
        { label: 'list_security_monitoring_critical_assets', value: 'list_security_monitoring_critical_assets' }
    ]}
>
<TabItem value="get_security_monitoring_critical_asset">

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
    <td>The ID of the critical asset. (example: 4e2435a5-6670-4b8f-baff-46083cd1c250)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the critical asset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `critical_assets`. (critical_assets) (default: critical_assets, example: critical_assets)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_monitoring_critical_assets">

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
    <td>The ID of the critical asset. (example: 4e2435a5-6670-4b8f-baff-46083cd1c250)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the critical asset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `critical_assets`. (critical_assets) (default: critical_assets, example: critical_assets)</td>
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
    <td><a href="#get_security_monitoring_critical_asset"><CopyableCode code="get_security_monitoring_critical_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-critical_asset_id"><code>critical_asset_id</code></a></td>
    <td></td>
    <td>Get the details of a specific critical asset.</td>
</tr>
<tr>
    <td><a href="#list_security_monitoring_critical_assets"><CopyableCode code="list_security_monitoring_critical_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of all critical assets.</td>
</tr>
<tr>
    <td><a href="#create_security_monitoring_critical_asset"><CopyableCode code="create_security_monitoring_critical_asset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new critical asset.</td>
</tr>
<tr>
    <td><a href="#update_security_monitoring_critical_asset"><CopyableCode code="update_security_monitoring_critical_asset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-critical_asset_id"><code>critical_asset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific critical asset.</td>
</tr>
<tr>
    <td><a href="#delete_security_monitoring_critical_asset"><CopyableCode code="delete_security_monitoring_critical_asset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-critical_asset_id"><code>critical_asset_id</code></a></td>
    <td></td>
    <td>Delete a specific critical asset.</td>
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
<tr id="parameter-critical_asset_id">
    <td><CopyableCode code="critical_asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the critical asset.</td>
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
    defaultValue="get_security_monitoring_critical_asset"
    values={[
        { label: 'get_security_monitoring_critical_asset', value: 'get_security_monitoring_critical_asset' },
        { label: 'list_security_monitoring_critical_assets', value: 'list_security_monitoring_critical_assets' }
    ]}
>
<TabItem value="get_security_monitoring_critical_asset">

Get the details of a specific critical asset.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_critical_assets
WHERE critical_asset_id = '{{ critical_asset_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_monitoring_critical_assets">

Get the list of all critical assets.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_critical_assets
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_monitoring_critical_asset"
    values={[
        { label: 'create_security_monitoring_critical_asset', value: 'create_security_monitoring_critical_asset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_monitoring_critical_asset">

Create a new critical asset.

```sql
INSERT INTO datadog.security.monitoring_critical_assets (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitoring_critical_assets
  props:
    - name: data
      description: |
        Object for a single critical asset.
      value:
        attributes:
          description: "{{ description }}"
          enabled: {{ enabled }}
          query: "{{ query }}"
          rule_query: "{{ rule_query }}"
          severity: "{{ severity }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_monitoring_critical_asset"
    values={[
        { label: 'update_security_monitoring_critical_asset', value: 'update_security_monitoring_critical_asset' }
    ]}
>
<TabItem value="update_security_monitoring_critical_asset">

Update a specific critical asset.

```sql
UPDATE datadog.security.monitoring_critical_assets
SET 
data = '{{ data }}'
WHERE 
critical_asset_id = '{{ critical_asset_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_monitoring_critical_asset"
    values={[
        { label: 'delete_security_monitoring_critical_asset', value: 'delete_security_monitoring_critical_asset' }
    ]}
>
<TabItem value="delete_security_monitoring_critical_asset">

Delete a specific critical asset.

```sql
DELETE FROM datadog.security.monitoring_critical_assets
WHERE critical_asset_id = '{{ critical_asset_id }}' --required
;
```
</TabItem>
</Tabs>
