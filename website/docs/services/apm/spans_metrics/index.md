--- 
title: spans_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - spans_metrics
  - apm
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

Creates, updates, deletes, gets or lists a <code>spans_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spans_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.apm.spans_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_spans_metric"
    values={[
        { label: 'get_spans_metric', value: 'get_spans_metric' },
        { label: 'list_spans_metrics', value: 'list_spans_metrics' }
    ]}
>
<TabItem value="get_spans_metric">

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
    <td>The name of the span-based metric. (example: my.metric)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object describing a Datadog span-based metric.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of resource. The value should always be spans_metrics. (spans_metrics) (default: spans_metrics, example: spans_metrics)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_spans_metrics">

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
    <td>The name of the span-based metric. (example: my.metric)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object describing a Datadog span-based metric.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of resource. The value should always be spans_metrics. (spans_metrics) (default: spans_metrics, example: spans_metrics)</td>
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
    <td><a href="#get_spans_metric"><CopyableCode code="get_spans_metric" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_id"><code>metric_id</code></a></td>
    <td></td>
    <td>Get a specific span-based metric from your organization.</td>
</tr>
<tr>
    <td><a href="#list_spans_metrics"><CopyableCode code="list_spans_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of configured span-based metrics with their definitions.</td>
</tr>
<tr>
    <td><a href="#create_spans_metric"><CopyableCode code="create_spans_metric" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a metric based on your ingested spans in your organization.&lt;br /&gt;Returns the span-based metric object from the request body when the request is successful.</td>
</tr>
<tr>
    <td><a href="#update_spans_metric"><CopyableCode code="update_spans_metric" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-metric_id"><code>metric_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific span-based metric from your organization.&lt;br /&gt;Returns the span-based metric object from the request body when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_spans_metric"><CopyableCode code="delete_spans_metric" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_id"><code>metric_id</code></a></td>
    <td></td>
    <td>Delete a specific span-based metric from your organization.</td>
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
<tr id="parameter-metric_id">
    <td><CopyableCode code="metric_id" /></td>
    <td><code>string</code></td>
    <td>The name of the span-based metric.</td>
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
    defaultValue="get_spans_metric"
    values={[
        { label: 'get_spans_metric', value: 'get_spans_metric' },
        { label: 'list_spans_metrics', value: 'list_spans_metrics' }
    ]}
>
<TabItem value="get_spans_metric">

Get a specific span-based metric from your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.apm.spans_metrics
WHERE metric_id = '{{ metric_id }}' -- required
;
```
</TabItem>
<TabItem value="list_spans_metrics">

Get the list of configured span-based metrics with their definitions.

```sql
SELECT
id,
attributes,
type
FROM datadog.apm.spans_metrics
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_spans_metric"
    values={[
        { label: 'create_spans_metric', value: 'create_spans_metric' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_spans_metric">

Create a metric based on your ingested spans in your organization.&lt;br /&gt;Returns the span-based metric object from the request body when the request is successful.

```sql
INSERT INTO datadog.apm.spans_metrics (
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
- name: spans_metrics
  props:
    - name: data
      description: |
        The new span-based metric properties.
      value:
        attributes:
          compute:
            aggregation_type: "{{ aggregation_type }}"
            include_percentiles: {{ include_percentiles }}
            path: "{{ path }}"
          filter:
            query: "{{ query }}"
          group_by:
            - path: "{{ path }}"
              tag_name: "{{ tag_name }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_spans_metric"
    values={[
        { label: 'update_spans_metric', value: 'update_spans_metric' }
    ]}
>
<TabItem value="update_spans_metric">

Update a specific span-based metric from your organization.&lt;br /&gt;Returns the span-based metric object from the request body when the request is successful.

```sql
UPDATE datadog.apm.spans_metrics
SET 
data = '{{ data }}'
WHERE 
metric_id = '{{ metric_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_spans_metric"
    values={[
        { label: 'delete_spans_metric', value: 'delete_spans_metric' }
    ]}
>
<TabItem value="delete_spans_metric">

Delete a specific span-based metric from your organization.

```sql
DELETE FROM datadog.apm.spans_metrics
WHERE metric_id = '{{ metric_id }}' --required
;
```
</TabItem>
</Tabs>
