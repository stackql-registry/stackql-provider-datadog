--- 
title: monitoring_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_datasets
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

Creates, updates, deletes, gets or lists a <code>monitoring_datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_monitoring_dataset"
    values={[
        { label: 'get_security_monitoring_dataset', value: 'get_security_monitoring_dataset' },
        { label: 'list_security_monitoring_datasets', value: 'list_security_monitoring_datasets' }
    ]}
>
<TabItem value="get_security_monitoring_dataset">

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
    <td>The UUID of the dataset. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a Cloud SIEM dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of resource for a dataset response. (dataset) (example: dataset)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_monitoring_datasets">

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
    <td>The UUID of the dataset. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a Cloud SIEM dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of resource for a dataset response. (dataset) (example: dataset)</td>
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
    <td><a href="#get_security_monitoring_dataset"><CopyableCode code="get_security_monitoring_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a></td>
    <td></td>
    <td>Get the current version of a Cloud SIEM dataset by ID.</td>
</tr>
<tr>
    <td><a href="#list_security_monitoring_datasets"><CopyableCode code="list_security_monitoring_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a></td>
    <td>List all Cloud SIEM datasets available to the organization, including both&lt;br /&gt;customer-defined datasets and Datadog out-of-the-box datasets.</td>
</tr>
<tr>
    <td><a href="#create_security_monitoring_dataset"><CopyableCode code="create_security_monitoring_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Cloud SIEM dataset. A dataset bundles a data source, a set of&lt;br /&gt;indexes, and a search query that can be referenced from detection rules.</td>
</tr>
<tr>
    <td><a href="#update_security_monitoring_dataset"><CopyableCode code="update_security_monitoring_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing Cloud SIEM dataset. The current version of the dataset can be&lt;br /&gt;provided to detect concurrent modifications.</td>
</tr>
<tr>
    <td><a href="#delete_security_monitoring_dataset"><CopyableCode code="delete_security_monitoring_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a></td>
    <td></td>
    <td>Delete a Cloud SIEM dataset. Out-of-the-box datasets cannot be deleted and&lt;br /&gt;deleting a dataset that is referenced by a detection rule is rejected.</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the dataset.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>A search query to filter datasets by name or description.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size for a given page. The maximum allowed value is 100.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Attribute used to sort datasets. Prefix with `-` to sort in descending order.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_monitoring_dataset"
    values={[
        { label: 'get_security_monitoring_dataset', value: 'get_security_monitoring_dataset' },
        { label: 'list_security_monitoring_datasets', value: 'list_security_monitoring_datasets' }
    ]}
>
<TabItem value="get_security_monitoring_dataset">

Get the current version of a Cloud SIEM dataset by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_datasets
WHERE dataset_id = '{{ dataset_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_monitoring_datasets">

List all Cloud SIEM datasets available to the organization, including both&lt;br /&gt;customer-defined datasets and Datadog out-of-the-box datasets.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_datasets
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter[query] = '{{ filter[query] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_monitoring_dataset"
    values={[
        { label: 'create_security_monitoring_dataset', value: 'create_security_monitoring_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_monitoring_dataset">

Create a new Cloud SIEM dataset. A dataset bundles a data source, a set of&lt;br /&gt;indexes, and a search query that can be referenced from detection rules.

```sql
INSERT INTO datadog.security.monitoring_datasets (
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
- name: monitoring_datasets
  props:
    - name: data
      description: |
        The data wrapper of a dataset create request.
      value:
        attributes:
          definition:
            columns:
              - column: "{{ column }}"
                type: "{{ type }}"
            data_source: "{{ data_source }}"
            indexes:
              - "{{ indexes }}"
            name: "{{ name }}"
            query_filter: "{{ query_filter }}"
            search:
              query: "{{ query }}"
            storage: "{{ storage }}"
            table_name: "{{ table_name }}"
            time_window:
              from: {{ from }}
              to: {{ to }}
          description: "{{ description }}"
          version: {{ version }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_monitoring_dataset"
    values={[
        { label: 'update_security_monitoring_dataset', value: 'update_security_monitoring_dataset' }
    ]}
>
<TabItem value="update_security_monitoring_dataset">

Update an existing Cloud SIEM dataset. The current version of the dataset can be&lt;br /&gt;provided to detect concurrent modifications.

```sql
UPDATE datadog.security.monitoring_datasets
SET 
data = '{{ data }}'
WHERE 
dataset_id = '{{ dataset_id }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_monitoring_dataset"
    values={[
        { label: 'delete_security_monitoring_dataset', value: 'delete_security_monitoring_dataset' }
    ]}
>
<TabItem value="delete_security_monitoring_dataset">

Delete a Cloud SIEM dataset. Out-of-the-box datasets cannot be deleted and&lt;br /&gt;deleting a dataset that is referenced by a detection rule is rejected.

```sql
DELETE FROM datadog.security.monitoring_datasets
WHERE dataset_id = '{{ dataset_id }}' --required
;
```
</TabItem>
</Tabs>
