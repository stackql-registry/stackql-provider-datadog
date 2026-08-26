--- 
title: spa_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - spa_recommendations
  - infrastructure
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

Creates, updates, deletes, gets or lists a <code>spa_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spa_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.spa_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sparecommendations_with_shard"
    values={[
        { label: 'get_sparecommendations_with_shard', value: 'get_sparecommendations_with_shard' },
        { label: 'get_sparecommendations', value: 'get_sparecommendations' }
    ]}
>
<TabItem value="get_sparecommendations_with_shard">

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
    <td>Resource identifier for the recommendation. Optional in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the SPA Recommendation resource. Contains recommendations for both driver and executor components.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for Spark Pod Autosizing recommendations. Identifies the Recommendation resource returned by SPA. (recommendation) (default: recommendation, example: recommendation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_sparecommendations">

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
    <td>Resource identifier for the recommendation. Optional in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the SPA Recommendation resource. Contains recommendations for both driver and executor components.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for Spark Pod Autosizing recommendations. Identifies the Recommendation resource returned by SPA. (recommendation) (default: recommendation, example: recommendation)</td>
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
    <td><a href="#get_sparecommendations_with_shard"><CopyableCode code="get_sparecommendations_with_shard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-shard"><code>shard</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-bypass_cache"><code>bypass_cache</code></a></td>
    <td>This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and shard identifier, and SPA returns structured recommendations for driver and executor resources.</td>
</tr>
<tr>
    <td><a href="#get_sparecommendations"><CopyableCode code="get_sparecommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-bypass_cache"><code>bypass_cache</code></a></td>
    <td>This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and SPA returns structured recommendations for driver and executor resources. The version with a shard should be preferred, where possible, as it gives more accurate results.</td>
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
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The service name for a spark job.</td>
</tr>
<tr id="parameter-shard">
    <td><CopyableCode code="shard" /></td>
    <td><code>string</code></td>
    <td>The shard tag for a spark job, which differentiates jobs within the same service that have different resource needs</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-bypass_cache">
    <td><CopyableCode code="bypass_cache" /></td>
    <td><code>string</code></td>
    <td>The recommendation service should not use its metrics cache.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sparecommendations_with_shard"
    values={[
        { label: 'get_sparecommendations_with_shard', value: 'get_sparecommendations_with_shard' },
        { label: 'get_sparecommendations', value: 'get_sparecommendations' }
    ]}
>
<TabItem value="get_sparecommendations_with_shard">

This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and shard identifier, and SPA returns structured recommendations for driver and executor resources.

```sql
SELECT
id,
attributes,
type
FROM datadog.infrastructure.spa_recommendations
WHERE shard = '{{ shard }}' -- required
AND service = '{{ service }}' -- required
AND bypass_cache = '{{ bypass_cache }}'
;
```
</TabItem>
<TabItem value="get_sparecommendations">

This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and SPA returns structured recommendations for driver and executor resources. The version with a shard should be preferred, where possible, as it gives more accurate results.

```sql
SELECT
id,
attributes,
type
FROM datadog.infrastructure.spa_recommendations
WHERE service = '{{ service }}' -- required
AND bypass_cache = '{{ bypass_cache }}'
;
```
</TabItem>
</Tabs>
