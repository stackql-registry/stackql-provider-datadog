--- 
title: hamr_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - hamr_connections
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

Creates, updates, deletes, gets or lists a <code>hamr_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hamr_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.hamr_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hamr_org_connection"
    values={[
        { label: 'get_hamr_org_connection', value: 'get_hamr_org_connection' }
    ]}
>
<TabItem value="get_hamr_org_connection">

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
    <td>The organization UUID for this HAMR connection. (example: 550e8400-e29b-41d4-a716-446655440000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a HAMR organization connection response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the HAMR organization connection resource. (hamr_org_connections) (example: hamr_org_connections)</td>
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
    <td><a href="#get_hamr_org_connection"><CopyableCode code="get_hamr_org_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve the High Availability Multi-Region (HAMR) organization connection details for the authenticated organization.&lt;br /&gt;This endpoint returns information about the HAMR connection configuration, including the target organization,&lt;br /&gt;datacenter, status, and whether this is the primary or secondary organization in the HAMR relationship.</td>
</tr>
<tr>
    <td><a href="#create_hamr_org_connection"><CopyableCode code="create_hamr_org_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update the High Availability Multi-Region (HAMR) organization connection.&lt;br /&gt;This endpoint allows you to configure the HAMR connection between the authenticated organization&lt;br /&gt;and a target organization, including setting the connection status (ONBOARDING, PASSIVE, FAILOVER, ACTIVE, RECOVERY)</td>
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
    defaultValue="get_hamr_org_connection"
    values={[
        { label: 'get_hamr_org_connection', value: 'get_hamr_org_connection' }
    ]}
>
<TabItem value="get_hamr_org_connection">

Retrieve the High Availability Multi-Region (HAMR) organization connection details for the authenticated organization.&lt;br /&gt;This endpoint returns information about the HAMR connection configuration, including the target organization,&lt;br /&gt;datacenter, status, and whether this is the primary or secondary organization in the HAMR relationship.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.hamr_connections
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hamr_org_connection"
    values={[
        { label: 'create_hamr_org_connection', value: 'create_hamr_org_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hamr_org_connection">

Create or update the High Availability Multi-Region (HAMR) organization connection.&lt;br /&gt;This endpoint allows you to configure the HAMR connection between the authenticated organization&lt;br /&gt;and a target organization, including setting the connection status (ONBOARDING, PASSIVE, FAILOVER, ACTIVE, RECOVERY)

```sql
INSERT INTO datadog.organization.hamr_connections (
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
- name: hamr_connections
  props:
    - name: data
      description: |
        Data object for a HAMR organization connection request.
      value:
        attributes:
          hamr_status: {{ hamr_status }}
          is_primary: {{ is_primary }}
          modified_by: "{{ modified_by }}"
          target_org_datacenter: "{{ target_org_datacenter }}"
          target_org_name: "{{ target_org_name }}"
          target_org_uuid: "{{ target_org_uuid }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
