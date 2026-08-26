--- 
title: metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics
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

Creates, updates, deletes, gets or lists a <code>metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#submit_metrics"><CopyableCode code="submit_metrics" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-series"><code>series</code></a></td>
    <td><a href="#parameter-content-_encoding"><code>content-_encoding</code></a></td>
    <td>The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards.&lt;br /&gt;The maximum payload size is 500 kilobytes (512000 bytes). Compressed payloads must have a decompressed size of less than 5 megabytes (5242880 bytes).&lt;br /&gt;&lt;br /&gt;If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:&lt;br /&gt;&lt;br /&gt;- 64 bits for the timestamp&lt;br /&gt;- 64 bits for the value&lt;br /&gt;- 20 bytes for the metric names&lt;br /&gt;- 50 bytes for the timeseries&lt;br /&gt;- The full payload is approximately 100 bytes.&lt;br /&gt;&lt;br /&gt;Host name is one of the resources in the Resources field.</td>
</tr>
<tr>
    <td><a href="#query_scalar_data"><CopyableCode code="query_scalar_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Query scalar values (as seen on Query Value, Table, and Toplist widgets).&lt;br /&gt;Multiple data sources are supported with the ability to&lt;br /&gt;process the data using formulas and functions.</td>
</tr>
<tr>
    <td><a href="#query_timeseries_data"><CopyableCode code="query_timeseries_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Query timeseries data across various data sources and&lt;br /&gt;process the data by applying formulas and functions. Datadog recommends&lt;br /&gt;using this endpoint over the v1 `/api/v1/query` endpoint for querying&lt;br /&gt;timeseries data.</td>
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
<tr id="parameter-content-_encoding">
    <td><CopyableCode code="content-_encoding" /></td>
    <td><code>string</code></td>
    <td>HTTP header used to compress the media-type. (wire: Content-Encoding)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="submit_metrics"
    values={[
        { label: 'submit_metrics', value: 'submit_metrics' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="submit_metrics">

The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards.&lt;br /&gt;The maximum payload size is 500 kilobytes (512000 bytes). Compressed payloads must have a decompressed size of less than 5 megabytes (5242880 bytes).&lt;br /&gt;&lt;br /&gt;If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:&lt;br /&gt;&lt;br /&gt;- 64 bits for the timestamp&lt;br /&gt;- 64 bits for the value&lt;br /&gt;- 20 bytes for the metric names&lt;br /&gt;- 50 bytes for the timeseries&lt;br /&gt;- The full payload is approximately 100 bytes.&lt;br /&gt;&lt;br /&gt;Host name is one of the resources in the Resources field.

```sql
INSERT INTO datadog.metrics.metrics (
series,
content-_encoding
)
SELECT 
'{{ series }}' /* required */,
'{{ content-_encoding }}'
RETURNING
errors
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: metrics
  props:
    - name: series
      description: |
        A list of timeseries to submit to Datadog.
      value:
        - interval: {{ interval }}
          metadata:
            origin:
              metric_type: {{ metric_type }}
              product: {{ product }}
              service: {{ service }}
          metric: "{{ metric }}"
          points: "{{ points }}"
          resources: "{{ resources }}"
          source_type_name: "{{ source_type_name }}"
          tags: "{{ tags }}"
          type: {{ type }}
          unit: "{{ unit }}"
    - name: content-_encoding
      value: "{{ content-_encoding }}"
      description: HTTP header used to compress the media-type.
      description: HTTP header used to compress the media-type.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="query_scalar_data"
    values={[
        { label: 'query_scalar_data', value: 'query_scalar_data' },
        { label: 'query_timeseries_data', value: 'query_timeseries_data' }
    ]}
>
<TabItem value="query_scalar_data">

Query scalar values (as seen on Query Value, Table, and Toplist widgets).&lt;br /&gt;Multiple data sources are supported with the ability to&lt;br /&gt;process the data using formulas and functions.

```sql
EXEC datadog.metrics.metrics.query_scalar_data 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="query_timeseries_data">

Query timeseries data across various data sources and&lt;br /&gt;process the data by applying formulas and functions. Datadog recommends&lt;br /&gt;using this endpoint over the v1 `/api/v1/query` endpoint for querying&lt;br /&gt;timeseries data.

```sql
EXEC datadog.metrics.metrics.query_timeseries_data 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
