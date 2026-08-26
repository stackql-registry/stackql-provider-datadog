--- 
title: monitoring_entra_id_azure_app_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_entra_id_azure_app_registrations
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

Creates, updates, deletes, gets or lists a <code>monitoring_entra_id_azure_app_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_entra_id_azure_app_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_entra_id_azure_app_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entra_id_azure_app_registrations"
    values={[
        { label: 'get_entra_id_azure_app_registrations', value: 'get_entra_id_azure_app_registrations' }
    ]}
>
<TabItem value="get_entra_id_azure_app_registrations">

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
    <td>The ID of the organization the Azure App Registrations belong to. (example: 123456)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the Entra ID Azure App Registration prerequisites.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `entra_id_azure_app_registrations`. (entra_id_azure_app_registrations) (default: entra_id_azure_app_registrations, example: entra_id_azure_app_registrations)</td>
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
    <td><a href="#get_entra_id_azure_app_registrations"><CopyableCode code="get_entra_id_azure_app_registrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the Azure App Registrations discovered for the organization and whether at least one of them has&lt;br /&gt;resource collection enabled, which is a prerequisite for activating the Entra ID entity context sync integration.</td>
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
    defaultValue="get_entra_id_azure_app_registrations"
    values={[
        { label: 'get_entra_id_azure_app_registrations', value: 'get_entra_id_azure_app_registrations' }
    ]}
>
<TabItem value="get_entra_id_azure_app_registrations">

Get the Azure App Registrations discovered for the organization and whether at least one of them has&lt;br /&gt;resource collection enabled, which is a prerequisite for activating the Entra ID entity context sync integration.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_entra_id_azure_app_registrations
;
```
</TabItem>
</Tabs>
