--- 
title: tag_descriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_descriptions
  - cloud_costs
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

Creates, updates, deletes, gets or lists a <code>tag_descriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_descriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tag_descriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_tag_description_by_key"
    values={[
        { label: 'get_cost_tag_description_by_key', value: 'get_cost_tag_description_by_key' },
        { label: 'list_cost_tag_descriptions', value: 'list_cost_tag_descriptions' }
    ]}
>
<TabItem value="get_cost_tag_description_by_key">

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
    <td>Stable identifier of the tag description. Equals the tag key when the description is the cross-cloud default; encodes both the cloud and the tag key when the description is cloud-specific. (example: account_id)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Human-readable description and metadata attached to a Cloud Cost Management tag key, optionally scoped to a single cloud provider.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management tag description resource. (cost_tag_description) (default: cost_tag_description, example: cost_tag_description)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cost_tag_descriptions">

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
    <td>Stable identifier of the tag description. Equals the tag key when the description is the cross-cloud default; encodes both the cloud and the tag key when the description is cloud-specific. (example: account_id)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Human-readable description and metadata attached to a Cloud Cost Management tag key, optionally scoped to a single cloud provider.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Cloud Cost Management tag description resource. (cost_tag_description) (default: cost_tag_description, example: cost_tag_description)</td>
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
    <td><a href="#get_cost_tag_description_by_key"><CopyableCode code="get_cost_tag_description_by_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tag_key"><code>tag_key</code></a></td>
    <td><a href="#parameter-filter[cloud]"><code>filter[cloud]</code></a></td>
    <td>Get the Cloud Cost Management description for a single tag key. Use `filter&#91;cloud&#93;` to scope the lookup to a specific cloud provider; when omitted, the response resolves the description in fallback order (cloud-specific organization override, then cloudless organization default, then Datadog's global default).</td>
</tr>
<tr>
    <td><a href="#list_cost_tag_descriptions"><CopyableCode code="list_cost_tag_descriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[cloud]"><code>filter[cloud]</code></a></td>
    <td>List Cloud Cost Management tag key descriptions for the organization. Use `filter&#91;cloud&#93;` to scope the result to a single cloud provider; when omitted, both cross-cloud defaults and cloud-specific descriptions are returned.</td>
</tr>
<tr>
    <td><a href="#upsert_cost_tag_description_by_key"><CopyableCode code="upsert_cost_tag_description_by_key" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-tag_key"><code>tag_key</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update a Cloud Cost Management tag key description. The new description and optional cloud scoping are supplied in the request body. Omit `cloud` to set a cross-cloud default for the tag key.</td>
</tr>
<tr>
    <td><a href="#delete_cost_tag_description_by_key"><CopyableCode code="delete_cost_tag_description_by_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tag_key"><code>tag_key</code></a></td>
    <td><a href="#parameter-cloud"><code>cloud</code></a></td>
    <td>Delete a Cloud Cost Management tag key description. When `cloud` is omitted, deletes every description for the tag key, falling back to Datadog's global default when available. When `cloud` is provided, deletes only the description scoped to that cloud provider.</td>
</tr>
<tr>
    <td><a href="#generate_cost_tag_description_by_key"><CopyableCode code="generate_cost_tag_description_by_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tag_key"><code>tag_key</code></a></td>
    <td></td>
    <td>Use AI to draft a Cloud Cost Management tag key description based on associated cost data. The generated description is returned in the response and is not persisted by this endpoint; follow up with `UpsertCostTagDescriptionByKey` to save it.</td>
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
<tr id="parameter-tag_key">
    <td><CopyableCode code="tag_key" /></td>
    <td><code>string</code></td>
    <td>The tag key to generate an AI description for.</td>
</tr>
<tr id="parameter-cloud">
    <td><CopyableCode code="cloud" /></td>
    <td><code>string</code></td>
    <td>Cloud provider to scope the deletion to (for example, `aws`). Omit to delete every description for the tag key.</td>
</tr>
<tr id="parameter-filter[cloud]">
    <td><CopyableCode code="filter[cloud]" /></td>
    <td><code>string</code></td>
    <td>Filter descriptions to a specific cloud provider (for example, `aws`). Omit to return descriptions across all clouds.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cost_tag_description_by_key"
    values={[
        { label: 'get_cost_tag_description_by_key', value: 'get_cost_tag_description_by_key' },
        { label: 'list_cost_tag_descriptions', value: 'list_cost_tag_descriptions' }
    ]}
>
<TabItem value="get_cost_tag_description_by_key">

Get the Cloud Cost Management description for a single tag key. Use `filter[cloud]` to scope the lookup to a specific cloud provider; when omitted, the response resolves the description in fallback order (cloud-specific organization override, then cloudless organization default, then Datadog's global default).

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_descriptions
WHERE tag_key = '{{ tag_key }}' -- required
AND filter[cloud] = '{{ filter[cloud] }}'
;
```
</TabItem>
<TabItem value="list_cost_tag_descriptions">

List Cloud Cost Management tag key descriptions for the organization. Use `filter[cloud]` to scope the result to a single cloud provider; when omitted, both cross-cloud defaults and cloud-specific descriptions are returned.

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_descriptions
WHERE filter[cloud] = '{{ filter[cloud] }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="upsert_cost_tag_description_by_key"
    values={[
        { label: 'upsert_cost_tag_description_by_key', value: 'upsert_cost_tag_description_by_key' }
    ]}
>
<TabItem value="upsert_cost_tag_description_by_key">

Create or update a Cloud Cost Management tag key description. The new description and optional cloud scoping are supplied in the request body. Omit `cloud` to set a cross-cloud default for the tag key.

```sql
REPLACE datadog.cloud_costs.tag_descriptions
SET 
data = '{{ data }}'
WHERE 
tag_key = '{{ tag_key }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cost_tag_description_by_key"
    values={[
        { label: 'delete_cost_tag_description_by_key', value: 'delete_cost_tag_description_by_key' }
    ]}
>
<TabItem value="delete_cost_tag_description_by_key">

Delete a Cloud Cost Management tag key description. When `cloud` is omitted, deletes every description for the tag key, falling back to Datadog's global default when available. When `cloud` is provided, deletes only the description scoped to that cloud provider.

```sql
DELETE FROM datadog.cloud_costs.tag_descriptions
WHERE tag_key = '{{ tag_key }}' --required
AND cloud = '{{ cloud }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="generate_cost_tag_description_by_key"
    values={[
        { label: 'generate_cost_tag_description_by_key', value: 'generate_cost_tag_description_by_key' }
    ]}
>
<TabItem value="generate_cost_tag_description_by_key">

Use AI to draft a Cloud Cost Management tag key description based on associated cost data. The generated description is returned in the response and is not persisted by this endpoint; follow up with `UpsertCostTagDescriptionByKey` to save it.

```sql
EXEC datadog.cloud_costs.tag_descriptions.generate_cost_tag_description_by_key 
@tag_key='{{ tag_key }}' --required 
;
```
</TabItem>
</Tabs>
