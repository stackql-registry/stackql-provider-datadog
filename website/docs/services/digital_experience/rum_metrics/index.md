--- 
title: rum_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_metrics
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rum_metric"
    values={[
        { label: 'get_rum_metric', value: 'get_rum_metric' },
        { label: 'list_rum_metrics', value: 'list_rum_metrics' }
    ]}
>
<TabItem value="get_rum_metric">

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
    <td>The name of the RUM-based metric. (example: rum.sessions.webui.count)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object describing a Datadog RUM-based metric.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be rum_metrics. (rum_metrics) (default: rum_metrics, example: rum_metrics)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rum_metrics">

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
    <td>The name of the RUM-based metric. (example: rum.sessions.webui.count)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object describing a Datadog RUM-based metric.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be rum_metrics. (rum_metrics) (default: rum_metrics, example: rum_metrics)</td>
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
    <td><a href="#get_rum_metric"><CopyableCode code="get_rum_metric" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_id"><code>metric_id</code></a></td>
    <td></td>
    <td>Get a specific RUM-based metric from your organization.</td>
</tr>
<tr>
    <td><a href="#list_rum_metrics"><CopyableCode code="list_rum_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of configured RUM-based metrics with their definitions.</td>
</tr>
<tr>
    <td><a href="#create_rum_metric"><CopyableCode code="create_rum_metric" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a metric based on your organization's RUM data.&lt;br /&gt;Returns the RUM-based metric object from the request body when the request is successful.</td>
</tr>
<tr>
    <td><a href="#update_rum_metric"><CopyableCode code="update_rum_metric" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-metric_id"><code>metric_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific RUM-based metric from your organization.&lt;br /&gt;Returns the RUM-based metric object from the request body when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_rum_metric"><CopyableCode code="delete_rum_metric" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_id"><code>metric_id</code></a></td>
    <td></td>
    <td>Delete a specific RUM-based metric from your organization.</td>
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
    <td>The name of the RUM-based metric.</td>
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
    defaultValue="get_rum_metric"
    values={[
        { label: 'get_rum_metric', value: 'get_rum_metric' },
        { label: 'list_rum_metrics', value: 'list_rum_metrics' }
    ]}
>
<TabItem value="get_rum_metric">

Get a specific RUM-based metric from your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_metrics
WHERE metric_id = '{{ metric_id }}' -- required
;
```
</TabItem>
<TabItem value="list_rum_metrics">

Get the list of configured RUM-based metrics with their definitions.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_metrics
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rum_metric"
    values={[
        { label: 'create_rum_metric', value: 'create_rum_metric' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rum_metric">

Create a metric based on your organization's RUM data.&lt;br /&gt;Returns the RUM-based metric object from the request body when the request is successful.

```sql
INSERT INTO datadog.digital_experience.rum_metrics (
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
- name: rum_metrics
  props:
    - name: data
      description: |
        The new RUM-based metric properties.
      value:
        attributes:
          compute:
            aggregation_type: "{{ aggregation_type }}"
            include_percentiles: {{ include_percentiles }}
            path: "{{ path }}"
          event_type: "{{ event_type }}"
          filter:
            query: "{{ query }}"
          group_by:
            - path: "{{ path }}"
              tag_name: "{{ tag_name }}"
          uniqueness:
            when: "{{ when }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rum_metric"
    values={[
        { label: 'update_rum_metric', value: 'update_rum_metric' }
    ]}
>
<TabItem value="update_rum_metric">

Update a specific RUM-based metric from your organization.&lt;br /&gt;Returns the RUM-based metric object from the request body when the request is successful.

```sql
UPDATE datadog.digital_experience.rum_metrics
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
    defaultValue="delete_rum_metric"
    values={[
        { label: 'delete_rum_metric', value: 'delete_rum_metric' }
    ]}
>
<TabItem value="delete_rum_metric">

Delete a specific RUM-based metric from your organization.

```sql
DELETE FROM datadog.digital_experience.rum_metrics
WHERE metric_id = '{{ metric_id }}' --required
;
```
</TabItem>
</Tabs>
