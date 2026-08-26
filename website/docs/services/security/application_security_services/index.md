--- 
title: application_security_services
hide_title: false
hide_table_of_contents: false
keywords:
  - application_security_services
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

Creates, updates, deletes, gets or lists an <code>application_security_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_security_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.application_security_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asm_service_by_name"
    values={[
        { label: 'get_asm_service_by_name', value: 'get_asm_service_by_name' }
    ]}
>
<TabItem value="get_asm_service_by_name">

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
    <td>The unique identifier of the service, formatted as `&lt;service&gt;_&lt;environment&gt;`. (example: web-store_prod)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Application Security details describing a service in a given environment.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `service_env`. (service_env) (default: service_env, example: service_env)</td>
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
    <td><a href="#get_asm_service_by_name"><CopyableCode code="get_asm_service_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_filter"><code>service_filter</code></a></td>
    <td></td>
    <td>Retrieve Application Security details for services matching the given name.&lt;br /&gt;Returns Application Security activation, compatibility, and product enablement&lt;br /&gt;information for each matching `(service, environment)` pair, along with a count&lt;br /&gt;of services that have Application Security Management (Threats) enabled.</td>
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
<tr id="parameter-service_filter">
    <td><CopyableCode code="service_filter" /></td>
    <td><code>string</code></td>
    <td>The name of the service to retrieve Application Security details for. Returns all matching services across environments. (example: web-store)</td>
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
    defaultValue="get_asm_service_by_name"
    values={[
        { label: 'get_asm_service_by_name', value: 'get_asm_service_by_name' }
    ]}
>
<TabItem value="get_asm_service_by_name">

Retrieve Application Security details for services matching the given name.&lt;br /&gt;Returns Application Security activation, compatibility, and product enablement&lt;br /&gt;information for each matching `(service, environment)` pair, along with a count&lt;br /&gt;of services that have Application Security Management (Threats) enabled.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.application_security_services
WHERE service_filter = '{{ service_filter }}' -- required
;
```
</TabItem>
</Tabs>
