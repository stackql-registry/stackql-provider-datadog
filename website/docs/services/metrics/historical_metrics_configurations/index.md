--- 
title: historical_metrics_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - historical_metrics_configurations
  - metrics
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

Creates, updates, deletes, gets or lists a <code>historical_metrics_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="historical_metrics_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.historical_metrics_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_historical_metrics_configuration"
    values={[
        { label: 'get_historical_metrics_configuration', value: 'get_historical_metrics_configuration' }
    ]}
>
<TabItem value="get_historical_metrics_configuration">

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
    <td>The metric name, used as the resource ID. (example: dd.test.metric)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a historical metrics configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The historical metrics configuration resource type. (historical_metrics_configurations) (default: historical_metrics_configurations, example: historical_metrics_configurations)</td>
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
    <td><a href="#get_historical_metrics_configuration"><CopyableCode code="get_historical_metrics_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Get the historical metrics ingestion configuration for a metric. Existence of the&lt;br /&gt;resource means historical metrics ingestion is enabled; returns 404 when it is not&lt;br /&gt;enabled for the metric.</td>
</tr>
<tr>
    <td><a href="#create_historical_metrics_configuration"><CopyableCode code="create_historical_metrics_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Enable historical metrics ingestion (late data ingestion) for a metric. Idempotent:&lt;br /&gt;enabling an already-enabled metric returns 200 instead of 201. Not supported for&lt;br /&gt;distribution metrics, metrics with an existing tag configuration, or most standard&lt;br /&gt;(non-custom) metrics.</td>
</tr>
<tr>
    <td><a href="#delete_historical_metrics_configuration"><CopyableCode code="delete_historical_metrics_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Disable historical metrics ingestion for a metric. Idempotent: always returns 204,&lt;br /&gt;whether or not the configuration existed or the metric itself still exists, so that&lt;br /&gt;Terraform destroy succeeds for a metric removed out-of-band.</td>
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
<tr id="parameter-metric_name">
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric. (example: dist.http.endpoint.request)</td>
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
    defaultValue="get_historical_metrics_configuration"
    values={[
        { label: 'get_historical_metrics_configuration', value: 'get_historical_metrics_configuration' }
    ]}
>
<TabItem value="get_historical_metrics_configuration">

Get the historical metrics ingestion configuration for a metric. Existence of the&lt;br /&gt;resource means historical metrics ingestion is enabled; returns 404 when it is not&lt;br /&gt;enabled for the metric.

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.historical_metrics_configurations
WHERE metric_name = '{{ metric_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_historical_metrics_configuration"
    values={[
        { label: 'create_historical_metrics_configuration', value: 'create_historical_metrics_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_historical_metrics_configuration">

Enable historical metrics ingestion (late data ingestion) for a metric. Idempotent:&lt;br /&gt;enabling an already-enabled metric returns 200 instead of 201. Not supported for&lt;br /&gt;distribution metrics, metrics with an existing tag configuration, or most standard&lt;br /&gt;(non-custom) metrics.

```sql
INSERT INTO datadog.metrics.historical_metrics_configurations (
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
- name: historical_metrics_configurations
  props:
    - name: data
      description: |
        Data object for enabling historical metrics ingestion for a metric.
      value:
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_historical_metrics_configuration"
    values={[
        { label: 'delete_historical_metrics_configuration', value: 'delete_historical_metrics_configuration' }
    ]}
>
<TabItem value="delete_historical_metrics_configuration">

Disable historical metrics ingestion for a metric. Idempotent: always returns 204,&lt;br /&gt;whether or not the configuration existed or the metric itself still exists, so that&lt;br /&gt;Terraform destroy succeeds for a metric removed out-of-band.

```sql
DELETE FROM datadog.metrics.historical_metrics_configurations
WHERE metric_name = '{{ metric_name }}' --required
;
```
</TabItem>
</Tabs>
