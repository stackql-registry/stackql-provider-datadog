--- 
title: monitoring_terraform_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_terraform_resources
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

Creates, updates, deletes, gets or lists a <code>monitoring_terraform_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_terraform_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_terraform_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="export_security_monitoring_terraform_resource"
    values={[
        { label: 'export_security_monitoring_terraform_resource', value: 'export_security_monitoring_terraform_resource' }
    ]}
>
<TabItem value="export_security_monitoring_terraform_resource">

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
    <td>The resource identifier composed of the Terraform type name and the resource ID separated by `|`. (example: datadog_security_monitoring_suppression|abc-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the Terraform export response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type. Always `format_resource`. (example: format_resource)</td>
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
    <td><a href="#export_security_monitoring_terraform_resource"><CopyableCode code="export_security_monitoring_terraform_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>Export a security monitoring resource to a Terraform configuration.&lt;br /&gt;The `resource_type` path parameter specifies the type of resource to export&lt;br /&gt;and must be one of `suppressions`, `critical_assets`, `security_filters`, or `rules`.&lt;br /&gt;For `rules`, partner rules cannot be exported and return a 400 error.</td>
</tr>
<tr>
    <td><a href="#convert_security_monitoring_terraform_resource"><CopyableCode code="convert_security_monitoring_terraform_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Convert a security monitoring resource that doesn't (yet) exist from JSON to Terraform.&lt;br /&gt;The `resource_type` path parameter specifies the type of resource to convert&lt;br /&gt;and must be one of `suppressions`, `critical_assets`, `security_filters`, or `rules`.</td>
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
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security monitoring resource to export.</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of security monitoring resource to export.</td>
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
    defaultValue="export_security_monitoring_terraform_resource"
    values={[
        { label: 'export_security_monitoring_terraform_resource', value: 'export_security_monitoring_terraform_resource' }
    ]}
>
<TabItem value="export_security_monitoring_terraform_resource">

Export a security monitoring resource to a Terraform configuration.&lt;br /&gt;The `resource_type` path parameter specifies the type of resource to export&lt;br /&gt;and must be one of `suppressions`, `critical_assets`, `security_filters`, or `rules`.&lt;br /&gt;For `rules`, partner rules cannot be exported and return a 400 error.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_terraform_resources
WHERE resource_type = '{{ resource_type }}' -- required
AND resource_id = '{{ resource_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="convert_security_monitoring_terraform_resource"
    values={[
        { label: 'convert_security_monitoring_terraform_resource', value: 'convert_security_monitoring_terraform_resource' }
    ]}
>
<TabItem value="convert_security_monitoring_terraform_resource">

Convert a security monitoring resource that doesn't (yet) exist from JSON to Terraform.&lt;br /&gt;The `resource_type` path parameter specifies the type of resource to convert&lt;br /&gt;and must be one of `suppressions`, `critical_assets`, `security_filters`, or `rules`.

```sql
EXEC datadog.security.monitoring_terraform_resources.convert_security_monitoring_terraform_resource 
@resource_type='{{ resource_type }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
