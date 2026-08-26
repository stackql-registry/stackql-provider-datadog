--- 
title: scanned_assets_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - scanned_assets_metadata
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

Creates, updates, deletes, gets or lists a <code>scanned_assets_metadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scanned_assets_metadata" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.scanned_assets_metadata" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_scanned_assets_metadata"
    values={[
        { label: 'list_scanned_assets_metadata', value: 'list_scanned_assets_metadata' }
    ]}
>
<TabItem value="list_scanned_assets_metadata">

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
    <td>The ID of the scanned asset metadata. (example: Host|i-0fc7edef1ab26d7ef)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a scanned asset metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type. (scanned-assets-metadata) (example: scanned-assets-metadata)</td>
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
    <td><a href="#list_scanned_assets_metadata"><CopyableCode code="list_scanned_assets_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[token]"><code>page[token]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-filter[asset.type]"><code>filter[asset.type]</code></a>, <a href="#parameter-filter[asset.name]"><code>filter[asset.name]</code></a>, <a href="#parameter-filter[last_success.origin]"><code>filter[last_success.origin]</code></a>, <a href="#parameter-filter[last_success.env]"><code>filter[last_success.env]</code></a></td>
    <td>Get a list of security scanned assets metadata for an organization.&lt;br /&gt;&lt;br /&gt;### Pagination&lt;br /&gt;&lt;br /&gt;For the "List Vulnerabilities" endpoint, see the &#91;Pagination section&#93;(#pagination).&lt;br /&gt;&lt;br /&gt;### Filtering&lt;br /&gt;&lt;br /&gt;For the "List Vulnerabilities" endpoint, see the &#91;Filtering section&#93;(#filtering).&lt;br /&gt;&lt;br /&gt;### Metadata&lt;br /&gt;&lt;br /&gt; For the "List Vulnerabilities" endpoint, see the &#91;Metadata section&#93;(#metadata).&lt;br /&gt;&lt;br /&gt;### Related endpoints&lt;br /&gt;&lt;br /&gt;This endpoint returns additional metadata for cloud resources that is not available from the standard resource endpoints. To access a richer dataset, call this endpoint together with the relevant resource endpoint(s) and merge (join) their results using the resource identifier.&lt;br /&gt;&lt;br /&gt;**Hosts**&lt;br /&gt;&lt;br /&gt;To enrich host data, join the response from the &#91;Hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:&lt;br /&gt;&lt;br /&gt;| ENDPOINT | JOIN KEY | TYPE |&lt;br /&gt;| --- | --- | --- |&lt;br /&gt;| &#91;/api/v1/hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) | host_list.host_name | string |&lt;br /&gt;| /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |&lt;br /&gt;&lt;br /&gt;**Host Images**&lt;br /&gt;&lt;br /&gt;To enrich host image data, join the response from the &#91;Hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:&lt;br /&gt;&lt;br /&gt;| ENDPOINT | JOIN KEY | TYPE |&lt;br /&gt;| --- | --- | --- |&lt;br /&gt;| &#91;/api/v1/hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) | host_list.tags_by_source&#91;"Amazon Web Services"&#93;&#91;"image"&#93; | string |&lt;br /&gt;| /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |&lt;br /&gt;&lt;br /&gt;**Container Images**&lt;br /&gt;&lt;br /&gt;To enrich container image data, join the response from the &#91;Container Images&#93;(https:​//docs.datadoghq.com/api/latest/container-images/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:&lt;br /&gt;&lt;br /&gt;| ENDPOINT | JOIN KEY | TYPE |&lt;br /&gt;| --- | --- | --- |&lt;br /&gt;| &#91;/api/v2/container_images&#93;(https:​//docs.datadoghq.com/api/latest/container-images/) | `data.attributes.name`@`data.attributes.repo_digest` | string |&lt;br /&gt;| /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |</td>
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
<tr id="parameter-filter[asset.name]">
    <td><CopyableCode code="filter[asset.name]" /></td>
    <td><code>string</code></td>
    <td>The name of the scanned asset. (example: i-0fc7edef1ab26d7ef)</td>
</tr>
<tr id="parameter-filter[asset.type]">
    <td><CopyableCode code="filter[asset.type]" /></td>
    <td><code>string</code></td>
    <td>The type of the scanned asset.</td>
</tr>
<tr id="parameter-filter[last_success.env]">
    <td><CopyableCode code="filter[last_success.env]" /></td>
    <td><code>string</code></td>
    <td>The environment of last success scan. (example: prod)</td>
</tr>
<tr id="parameter-filter[last_success.origin]">
    <td><CopyableCode code="filter[last_success.origin]" /></td>
    <td><code>string</code></td>
    <td>The origin of last success scan. (example: agent)</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to be retrieved. It should be equal to or greater than 1. (example: 1)</td>
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
    defaultValue="list_scanned_assets_metadata"
    values={[
        { label: 'list_scanned_assets_metadata', value: 'list_scanned_assets_metadata' }
    ]}
>
<TabItem value="list_scanned_assets_metadata">

Get a list of security scanned assets metadata for an organization.&lt;br /&gt;&lt;br /&gt;### Pagination&lt;br /&gt;&lt;br /&gt;For the "List Vulnerabilities" endpoint, see the &#91;Pagination section&#93;(#pagination).&lt;br /&gt;&lt;br /&gt;### Filtering&lt;br /&gt;&lt;br /&gt;For the "List Vulnerabilities" endpoint, see the &#91;Filtering section&#93;(#filtering).&lt;br /&gt;&lt;br /&gt;### Metadata&lt;br /&gt;&lt;br /&gt; For the "List Vulnerabilities" endpoint, see the &#91;Metadata section&#93;(#metadata).&lt;br /&gt;&lt;br /&gt;### Related endpoints&lt;br /&gt;&lt;br /&gt;This endpoint returns additional metadata for cloud resources that is not available from the standard resource endpoints. To access a richer dataset, call this endpoint together with the relevant resource endpoint(s) and merge (join) their results using the resource identifier.&lt;br /&gt;&lt;br /&gt;**Hosts**&lt;br /&gt;&lt;br /&gt;To enrich host data, join the response from the &#91;Hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:&lt;br /&gt;&lt;br /&gt;| ENDPOINT | JOIN KEY | TYPE |&lt;br /&gt;| --- | --- | --- |&lt;br /&gt;| &#91;/api/v1/hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) | host_list.host_name | string |&lt;br /&gt;| /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |&lt;br /&gt;&lt;br /&gt;**Host Images**&lt;br /&gt;&lt;br /&gt;To enrich host image data, join the response from the &#91;Hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:&lt;br /&gt;&lt;br /&gt;| ENDPOINT | JOIN KEY | TYPE |&lt;br /&gt;| --- | --- | --- |&lt;br /&gt;| &#91;/api/v1/hosts&#93;(https:​//docs.datadoghq.com/api/latest/hosts/) | host_list.tags_by_source&#91;"Amazon Web Services"&#93;&#91;"image"&#93; | string |&lt;br /&gt;| /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |&lt;br /&gt;&lt;br /&gt;**Container Images**&lt;br /&gt;&lt;br /&gt;To enrich container image data, join the response from the &#91;Container Images&#93;(https:​//docs.datadoghq.com/api/latest/container-images/) endpoint with the response from the scanned-assets-metadata endpoint on the following key fields:&lt;br /&gt;&lt;br /&gt;| ENDPOINT | JOIN KEY | TYPE |&lt;br /&gt;| --- | --- | --- |&lt;br /&gt;| &#91;/api/v2/container_images&#93;(https:​//docs.datadoghq.com/api/latest/container-images/) | `data.attributes.name`@`data.attributes.repo_digest` | string |&lt;br /&gt;| /api/v2/security/scanned-assets-metadata | data.attributes.asset.name | string |

```sql
SELECT
id,
attributes,
type
FROM datadog.security.scanned_assets_metadata
WHERE page[token] = '{{ page[token] }}'
AND page[number] = '{{ page[number] }}'
AND filter[asset.type] = '{{ filter[asset.type] }}'
AND filter[asset.name] = '{{ filter[asset.name] }}'
AND filter[last_success.origin] = '{{ filter[last_success.origin] }}'
AND filter[last_success.env] = '{{ filter[last_success.env] }}'
;
```
</TabItem>
</Tabs>
