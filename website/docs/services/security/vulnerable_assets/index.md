--- 
title: vulnerable_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - vulnerable_assets
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

Creates, updates, deletes, gets or lists a <code>vulnerable_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vulnerable_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.vulnerable_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_vulnerable_assets"
    values={[
        { label: 'list_vulnerable_assets', value: 'list_vulnerable_assets' }
    ]}
>
<TabItem value="list_vulnerable_assets">

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
    <td>The unique ID for this asset. (example: Repository|github.com/DataDog/datadog-agent.git)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The JSON:API attributes of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type. (assets) (example: assets)</td>
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
    <td><a href="#list_vulnerable_assets"><CopyableCode code="list_vulnerable_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[token]"><code>page[token]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-filter[type]"><code>filter[type]</code></a>, <a href="#parameter-filter[version.first]"><code>filter[version.first]</code></a>, <a href="#parameter-filter[version.last]"><code>filter[version.last]</code></a>, <a href="#parameter-filter[repository_url]"><code>filter[repository_url]</code></a>, <a href="#parameter-filter[risks.in_production]"><code>filter[risks.in_production]</code></a>, <a href="#parameter-filter[risks.under_attack]"><code>filter[risks.under_attack]</code></a>, <a href="#parameter-filter[risks.is_publicly_accessible]"><code>filter[risks.is_publicly_accessible]</code></a>, <a href="#parameter-filter[risks.has_privileged_access]"><code>filter[risks.has_privileged_access]</code></a>, <a href="#parameter-filter[risks.has_access_to_sensitive_data]"><code>filter[risks.has_access_to_sensitive_data]</code></a>, <a href="#parameter-filter[environments]"><code>filter[environments]</code></a>, <a href="#parameter-filter[teams]"><code>filter[teams]</code></a>, <a href="#parameter-filter[arch]"><code>filter[arch]</code></a>, <a href="#parameter-filter[operating_system.name]"><code>filter[operating_system.name]</code></a>, <a href="#parameter-filter[operating_system.version]"><code>filter[operating_system.version]</code></a></td>
    <td>Get a list of vulnerable assets.&lt;br /&gt;&lt;br /&gt;### Pagination&lt;br /&gt;&lt;br /&gt;Please review the &#91;Pagination section for the "List Vulnerabilities"&#93;(#pagination) endpoint.&lt;br /&gt;&lt;br /&gt;### Filtering&lt;br /&gt;&lt;br /&gt;Please review the &#91;Filtering section for the "List Vulnerabilities"&#93;(#filtering) endpoint.&lt;br /&gt;&lt;br /&gt;### Metadata&lt;br /&gt;&lt;br /&gt;Please review the &#91;Metadata section for the "List Vulnerabilities"&#93;(#metadata) endpoint.</td>
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
<tr id="parameter-filter[arch]">
    <td><CopyableCode code="filter[arch]" /></td>
    <td><code>string</code></td>
    <td>Filter by architecture. (example: arm64)</td>
</tr>
<tr id="parameter-filter[environments]">
    <td><CopyableCode code="filter[environments]" /></td>
    <td><code>string</code></td>
    <td>Filter by environment. (example: staging)</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter by name. This field supports the usage of wildcards (*). (example: datadog-agent)</td>
</tr>
<tr id="parameter-filter[operating_system.name]">
    <td><CopyableCode code="filter[operating_system.name]" /></td>
    <td><code>string</code></td>
    <td>Filter by operating system name. (example: ubuntu)</td>
</tr>
<tr id="parameter-filter[operating_system.version]">
    <td><CopyableCode code="filter[operating_system.version]" /></td>
    <td><code>string</code></td>
    <td>Filter by operating system version. (example: 24.04)</td>
</tr>
<tr id="parameter-filter[repository_url]">
    <td><CopyableCode code="filter[repository_url]" /></td>
    <td><code>string</code></td>
    <td>Filter by the repository url associated to the asset. (example: github.com/DataDog/datadog-agent.git)</td>
</tr>
<tr id="parameter-filter[risks.has_access_to_sensitive_data]">
    <td><CopyableCode code="filter[risks.has_access_to_sensitive_data]" /></td>
    <td><code>boolean</code></td>
    <td>Filter whether the asset (Host)  has access to sensitive data or not. (example: false)</td>
</tr>
<tr id="parameter-filter[risks.has_privileged_access]">
    <td><CopyableCode code="filter[risks.has_privileged_access]" /></td>
    <td><code>boolean</code></td>
    <td>Filter whether the asset (Host) has privileged access or not. (example: false)</td>
</tr>
<tr id="parameter-filter[risks.in_production]">
    <td><CopyableCode code="filter[risks.in_production]" /></td>
    <td><code>boolean</code></td>
    <td>Filter whether the asset is in production or not. (example: false)</td>
</tr>
<tr id="parameter-filter[risks.is_publicly_accessible]">
    <td><CopyableCode code="filter[risks.is_publicly_accessible]" /></td>
    <td><code>boolean</code></td>
    <td>Filter whether the asset (Host) is publicly accessible or not. (example: false)</td>
</tr>
<tr id="parameter-filter[risks.under_attack]">
    <td><CopyableCode code="filter[risks.under_attack]" /></td>
    <td><code>boolean</code></td>
    <td>Filter whether the asset (Service) is under attack or not. (example: false)</td>
</tr>
<tr id="parameter-filter[teams]">
    <td><CopyableCode code="filter[teams]" /></td>
    <td><code>string</code></td>
    <td>Filter by teams. (example: compute)</td>
</tr>
<tr id="parameter-filter[type]">
    <td><CopyableCode code="filter[type]" /></td>
    <td><code>string</code></td>
    <td>Filter by type.</td>
</tr>
<tr id="parameter-filter[version.first]">
    <td><CopyableCode code="filter[version.first]" /></td>
    <td><code>string</code></td>
    <td>Filter by the first version of the asset since it has been vulnerable. (example: v1.15.1)</td>
</tr>
<tr id="parameter-filter[version.last]">
    <td><CopyableCode code="filter[version.last]" /></td>
    <td><code>string</code></td>
    <td>Filter by the last detected version of the asset. (example: v1.15.1)</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to be retrieved. It should be equal or greater than `1` (example: 1)</td>
</tr>
<tr id="parameter-page[token]">
    <td><CopyableCode code="page[token]" /></td>
    <td><code>string</code></td>
    <td>Its value must come from the `links` section of the response of the first request. Do not manually edit it. (example: b82cef018aab81ed1d4bb4xb35xxfc065da7efa685fbcecdbd338f3015e3afabbbfa3a911b4984_721ee28a-zecb-4e45-9960-c42065b574f4)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_vulnerable_assets"
    values={[
        { label: 'list_vulnerable_assets', value: 'list_vulnerable_assets' }
    ]}
>
<TabItem value="list_vulnerable_assets">

Get a list of vulnerable assets.&lt;br /&gt;&lt;br /&gt;### Pagination&lt;br /&gt;&lt;br /&gt;Please review the &#91;Pagination section for the "List Vulnerabilities"&#93;(#pagination) endpoint.&lt;br /&gt;&lt;br /&gt;### Filtering&lt;br /&gt;&lt;br /&gt;Please review the &#91;Filtering section for the "List Vulnerabilities"&#93;(#filtering) endpoint.&lt;br /&gt;&lt;br /&gt;### Metadata&lt;br /&gt;&lt;br /&gt;Please review the &#91;Metadata section for the "List Vulnerabilities"&#93;(#metadata) endpoint.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.vulnerable_assets
WHERE page[token] = '{{ page[token] }}'
AND page[number] = '{{ page[number] }}'
AND filter[name] = '{{ filter[name] }}'
AND filter[type] = '{{ filter[type] }}'
AND filter[version.first] = '{{ filter[version.first] }}'
AND filter[version.last] = '{{ filter[version.last] }}'
AND filter[repository_url] = '{{ filter[repository_url] }}'
AND filter[risks.in_production] = '{{ filter[risks.in_production] }}'
AND filter[risks.under_attack] = '{{ filter[risks.under_attack] }}'
AND filter[risks.is_publicly_accessible] = '{{ filter[risks.is_publicly_accessible] }}'
AND filter[risks.has_privileged_access] = '{{ filter[risks.has_privileged_access] }}'
AND filter[risks.has_access_to_sensitive_data] = '{{ filter[risks.has_access_to_sensitive_data] }}'
AND filter[environments] = '{{ filter[environments] }}'
AND filter[teams] = '{{ filter[teams] }}'
AND filter[arch] = '{{ filter[arch] }}'
AND filter[operating_system.name] = '{{ filter[operating_system.name] }}'
AND filter[operating_system.version] = '{{ filter[operating_system.version] }}'
;
```
</TabItem>
</Tabs>
