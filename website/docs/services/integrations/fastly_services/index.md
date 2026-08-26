--- 
title: fastly_services
hide_title: false
hide_table_of_contents: false
keywords:
  - fastly_services
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

Creates, updates, deletes, gets or lists a <code>fastly_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fastly_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.fastly_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fastly_service"
    values={[
        { label: 'get_fastly_service', value: 'get_fastly_service' },
        { label: 'list_fastly_services', value: 'list_fastly_services' }
    ]}
>
<TabItem value="get_fastly_service">

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
    <td>The ID of the Fastly service. (example: abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object for Fastly service requests.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for this API. Should always be `fastly-services`. (fastly-services) (default: fastly-services, example: fastly-services)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fastly_services">

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
    <td>The ID of the Fastly service. (example: abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes object for Fastly service requests.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for this API. Should always be `fastly-services`. (fastly-services) (default: fastly-services, example: fastly-services)</td>
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
    <td><a href="#get_fastly_service"><CopyableCode code="get_fastly_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Get a Fastly service for an account.</td>
</tr>
<tr>
    <td><a href="#list_fastly_services"><CopyableCode code="list_fastly_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>List Fastly services for an account.</td>
</tr>
<tr>
    <td><a href="#create_fastly_service"><CopyableCode code="create_fastly_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Fastly service for an account.</td>
</tr>
<tr>
    <td><a href="#update_fastly_service"><CopyableCode code="update_fastly_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a Fastly service for an account.</td>
</tr>
<tr>
    <td><a href="#delete_fastly_service"><CopyableCode code="delete_fastly_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Delete a Fastly service for an account.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Fastly Account id.</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Fastly Service ID.</td>
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
    defaultValue="get_fastly_service"
    values={[
        { label: 'get_fastly_service', value: 'get_fastly_service' },
        { label: 'list_fastly_services', value: 'list_fastly_services' }
    ]}
>
<TabItem value="get_fastly_service">

Get a Fastly service for an account.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.fastly_services
WHERE account_id = '{{ account_id }}' -- required
AND service_id = '{{ service_id }}' -- required
;
```
</TabItem>
<TabItem value="list_fastly_services">

List Fastly services for an account.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.fastly_services
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fastly_service"
    values={[
        { label: 'create_fastly_service', value: 'create_fastly_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fastly_service">

Create a Fastly service for an account.

```sql
INSERT INTO datadog.integrations.fastly_services (
data,
account_id
)
SELECT 
'{{ data }}' /* required */,
'{{ account_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fastly_services
  props:
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the fastly_services resource.
    - name: data
      description: |
        Data object for Fastly service requests.
      value:
        attributes:
          tags:
            - "{{ tags }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fastly_service"
    values={[
        { label: 'update_fastly_service', value: 'update_fastly_service' }
    ]}
>
<TabItem value="update_fastly_service">

Update a Fastly service for an account.

```sql
UPDATE datadog.integrations.fastly_services
SET 
data = '{{ data }}'
WHERE 
account_id = '{{ account_id }}' --required
AND service_id = '{{ service_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fastly_service"
    values={[
        { label: 'delete_fastly_service', value: 'delete_fastly_service' }
    ]}
>
<TabItem value="delete_fastly_service">

Delete a Fastly service for an account.

```sql
DELETE FROM datadog.integrations.fastly_services
WHERE account_id = '{{ account_id }}' --required
AND service_id = '{{ service_id }}' --required
;
```
</TabItem>
</Tabs>
