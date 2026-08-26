--- 
title: security_entity_risk_scores
hide_title: false
hide_table_of_contents: false
keywords:
  - security_entity_risk_scores
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

Creates, updates, deletes, gets or lists a <code>security_entity_risk_scores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_entity_risk_scores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.security_entity_risk_scores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entity_risk_score"
    values={[
        { label: 'get_entity_risk_score', value: 'get_entity_risk_score' },
        { label: 'list_entity_risk_scores', value: 'list_entity_risk_scores' }
    ]}
>
<TabItem value="get_entity_risk_score">

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
    <td>Unique identifier for the entity (example: arn:aws:iam::123456789012:user/john.doe)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an entity risk score.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type. (SecurityEntityRiskScore) (example: SecurityEntityRiskScore)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_entity_risk_scores">

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
    <td>Unique identifier for the entity (example: arn:aws:iam::123456789012:user/john.doe)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an entity risk score.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type. (SecurityEntityRiskScore) (example: SecurityEntityRiskScore)</td>
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
    <td><a href="#get_entity_risk_score"><CopyableCode code="get_entity_risk_score" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-entity_id"><code>entity_id</code></a></td>
    <td></td>
    <td>Get the risk score for a specific entity by its ID. Returns security risk assessment including risk score, severity, detected signals, misconfigurations, and identity risks.</td>
</tr>
<tr>
    <td><a href="#list_entity_risk_scores"><CopyableCode code="list_entity_risk_scores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-page[query_id]"><code>page[query_id]</code></a>, <a href="#parameter-filter[sort]"><code>filter[sort]</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a></td>
    <td>Get a list of entity risk scores for your organization. Entity risk scores provide security risk assessment for entities like cloud resources, identities, or services based on detected signals, misconfigurations, and identity risks.</td>
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
<tr id="parameter-entity_id">
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>The URL-encoded unique identifier for the entity.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>array</code></td>
    <td>Filter by entity type(s). Can specify multiple values. (wire: entityType)</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Supports filtering by entity attributes, risk scores, severity, and more. Example: `severity:critical AND entityType:aws_iam_user`</td>
</tr>
<tr id="parameter-filter[sort]">
    <td><CopyableCode code="filter[sort]" /></td>
    <td><code>string</code></td>
    <td>Sort order for results. Format: `field:direction` where direction is `asc` or `desc`. Supported fields: `riskScore`, `lastDetected`, `firstDetected`, `entityName`, `signalsDetected`.</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start time for the query in Unix timestamp (milliseconds). Defaults to 2 weeks ago.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number to return (1-indexed).</td>
</tr>
<tr id="parameter-page[query_id]">
    <td><CopyableCode code="page[query_id]" /></td>
    <td><code>string</code></td>
    <td>Query ID for pagination consistency. (wire: page&#91;queryId&#93;)</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size of the page to return. Maximum is 1000.</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>integer (int64)</code></td>
    <td>End time for the query in Unix timestamp (milliseconds). Defaults to now.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_entity_risk_score"
    values={[
        { label: 'get_entity_risk_score', value: 'get_entity_risk_score' },
        { label: 'list_entity_risk_scores', value: 'list_entity_risk_scores' }
    ]}
>
<TabItem value="get_entity_risk_score">

Get the risk score for a specific entity by its ID. Returns security risk assessment including risk score, severity, detected signals, misconfigurations, and identity risks.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.security_entity_risk_scores
WHERE entity_id = '{{ entity_id }}' -- required
;
```
</TabItem>
<TabItem value="list_entity_risk_scores">

Get a list of entity risk scores for your organization. Entity risk scores provide security risk assessment for entities like cloud resources, identities, or services based on detected signals, misconfigurations, and identity risks.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.security_entity_risk_scores
WHERE from = '{{ from }}'
AND to = '{{ to }}'
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND page[query_id] = '{{ page[query_id] }}'
AND filter[sort] = '{{ filter[sort] }}'
AND filter[query] = '{{ filter[query] }}'
AND entity_type = '{{ entity_type }}'
;
```
</TabItem>
</Tabs>
