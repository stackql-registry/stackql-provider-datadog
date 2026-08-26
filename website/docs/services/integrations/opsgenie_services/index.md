--- 
title: opsgenie_services
hide_title: false
hide_table_of_contents: false
keywords:
  - opsgenie_services
  - integrations
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

Creates, updates, deletes, gets or lists an <code>opsgenie_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="opsgenie_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.opsgenie_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_opsgenie_service"
    values={[
        { label: 'get_opsgenie_service', value: 'get_opsgenie_service' },
        { label: 'list_opsgenie_services', value: 'list_opsgenie_services' }
    ]}
>
<TabItem value="get_opsgenie_service">

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
    <td>The ID of the Opsgenie service. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes from an Opsgenie service response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Opsgenie service resource type. (opsgenie-service) (default: opsgenie-service, example: opsgenie-service)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_opsgenie_services">

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
    <td>The ID of the Opsgenie service. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes from an Opsgenie service response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Opsgenie service resource type. (opsgenie-service) (default: opsgenie-service, example: opsgenie-service)</td>
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
    <td><a href="#get_opsgenie_service"><CopyableCode code="get_opsgenie_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_service_id"><code>integration_service_id</code></a></td>
    <td></td>
    <td>Get a single service from the Datadog Opsgenie integration.</td>
</tr>
<tr>
    <td><a href="#list_opsgenie_services"><CopyableCode code="list_opsgenie_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get a list of all services from the Datadog Opsgenie integration.</td>
</tr>
<tr>
    <td><a href="#create_opsgenie_service"><CopyableCode code="create_opsgenie_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new service object in the Opsgenie integration.</td>
</tr>
<tr>
    <td><a href="#update_opsgenie_service"><CopyableCode code="update_opsgenie_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_service_id"><code>integration_service_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a single service object in the Datadog Opsgenie integration.</td>
</tr>
<tr>
    <td><a href="#delete_opsgenie_service"><CopyableCode code="delete_opsgenie_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_service_id"><code>integration_service_id</code></a></td>
    <td></td>
    <td>Delete a single service object in the Datadog Opsgenie integration.</td>
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
<tr id="parameter-integration_service_id">
    <td><CopyableCode code="integration_service_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the service.</td>
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
    defaultValue="get_opsgenie_service"
    values={[
        { label: 'get_opsgenie_service', value: 'get_opsgenie_service' },
        { label: 'list_opsgenie_services', value: 'list_opsgenie_services' }
    ]}
>
<TabItem value="get_opsgenie_service">

Get a single service from the Datadog Opsgenie integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.opsgenie_services
WHERE integration_service_id = '{{ integration_service_id }}' -- required
;
```
</TabItem>
<TabItem value="list_opsgenie_services">

Get a list of all services from the Datadog Opsgenie integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.opsgenie_services
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_opsgenie_service"
    values={[
        { label: 'create_opsgenie_service', value: 'create_opsgenie_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_opsgenie_service">

Create a new service object in the Opsgenie integration.

```sql
INSERT INTO datadog.integrations.opsgenie_services (
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
- name: opsgenie_services
  props:
    - name: data
      description: |
        Opsgenie service data for a create request.
      value:
        attributes:
          custom_url: "{{ custom_url }}"
          name: "{{ name }}"
          opsgenie_api_key: "{{ opsgenie_api_key }}"
          region: "{{ region }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_opsgenie_service"
    values={[
        { label: 'update_opsgenie_service', value: 'update_opsgenie_service' }
    ]}
>
<TabItem value="update_opsgenie_service">

Update a single service object in the Datadog Opsgenie integration.

```sql
UPDATE datadog.integrations.opsgenie_services
SET 
data = '{{ data }}'
WHERE 
integration_service_id = '{{ integration_service_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_opsgenie_service"
    values={[
        { label: 'delete_opsgenie_service', value: 'delete_opsgenie_service' }
    ]}
>
<TabItem value="delete_opsgenie_service">

Delete a single service object in the Datadog Opsgenie integration.

```sql
DELETE FROM datadog.integrations.opsgenie_services
WHERE integration_service_id = '{{ integration_service_id }}' --required
;
```
</TabItem>
</Tabs>
