--- 
title: reference_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - reference_tables
  - integrations
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

Creates, updates, deletes, gets or lists a <code>reference_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reference_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.reference_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table"
    values={[
        { label: 'get_table', value: 'get_table' },
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
<TabItem value="get_table">

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
    <td>Unique identifier for the reference table.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes that define the reference table's configuration and properties.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Reference table resource type. (reference_table) (default: reference_table, example: reference_table)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tables">

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
    <td>Unique identifier for the reference table.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes that define the reference table's configuration and properties.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Reference table resource type. (reference_table) (default: reference_table, example: reference_table)</td>
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
    <td><a href="#get_table"><CopyableCode code="get_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a reference table by ID</td>
</tr>
<tr>
    <td><a href="#list_tables"><CopyableCode code="list_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter[status]"><code>filter[status]</code></a>, <a href="#parameter-filter[table_name][exact]"><code>filter[table_name][exact]</code></a>, <a href="#parameter-filter[table_name][contains]"><code>filter[table_name][contains]</code></a></td>
    <td>List all reference tables in this organization.</td>
</tr>
<tr>
    <td><a href="#create_reference_table"><CopyableCode code="create_reference_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Creates a reference table. You can provide data in two ways:&lt;br /&gt;1. Call POST /api/v2/reference-tables/upload to get an upload ID. Then, PUT the CSV data&lt;br /&gt;   (not the file itself) in chunks to each URL in the request body. Finally, call this&lt;br /&gt;   POST endpoint with `upload_id` in `file_metadata`.&lt;br /&gt;2. Provide `access_details` in `file_metadata` pointing to a CSV file in cloud storage.</td>
</tr>
<tr>
    <td><a href="#update_reference_table"><CopyableCode code="update_reference_table" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Update a reference table by ID. You can update the table's data, description, and tags. Note: The source type cannot be changed after table creation. For data updates: For existing tables of type `source:LOCAL_FILE`, call POST api/v2/reference-tables/uploads first to get an upload ID, then PUT chunks of CSV data to each provided URL, and finally call this PATCH endpoint with the upload_id in file_metadata. For existing tables with `source:` types of `S3`, `GCS`, or `AZURE`, provide updated access_details in file_metadata pointing to a CSV file in the same type of cloud storage.</td>
</tr>
<tr>
    <td><a href="#delete_table"><CopyableCode code="delete_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete a reference table by ID</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the reference table to delete</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[status]">
    <td><CopyableCode code="filter[status]" /></td>
    <td><code>string</code></td>
    <td>Filter by table status. (example: DONE)</td>
</tr>
<tr id="parameter-filter[table_name][contains]">
    <td><CopyableCode code="filter[table_name][contains]" /></td>
    <td><code>string</code></td>
    <td>Filter by table name containing substring. (example: user)</td>
</tr>
<tr id="parameter-filter[table_name][exact]">
    <td><CopyableCode code="filter[table_name][exact]" /></td>
    <td><code>string</code></td>
    <td>Filter by exact table name match. (example: my_reference_table)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of tables to return. (example: 15)</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of tables to skip for pagination. (example: 0)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort field and direction for the list of reference tables. Use field name for ascending, prefix with "-" for descending. (example: -updated_at)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table"
    values={[
        { label: 'get_table', value: 'get_table' },
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
<TabItem value="get_table">

Get a reference table by ID

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.reference_tables
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_tables">

List all reference tables in this organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.reference_tables
WHERE page[limit] = '{{ page[limit] }}'
AND page[offset] = '{{ page[offset] }}'
AND sort = '{{ sort }}'
AND filter[status] = '{{ filter[status] }}'
AND filter[table_name][exact] = '{{ filter[table_name][exact] }}'
AND filter[table_name][contains] = '{{ filter[table_name][contains] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_reference_table"
    values={[
        { label: 'create_reference_table', value: 'create_reference_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_reference_table">

Creates a reference table. You can provide data in two ways:&lt;br /&gt;1. Call POST /api/v2/reference-tables/upload to get an upload ID. Then, PUT the CSV data&lt;br /&gt;   (not the file itself) in chunks to each URL in the request body. Finally, call this&lt;br /&gt;   POST endpoint with `upload_id` in `file_metadata`.&lt;br /&gt;2. Provide `access_details` in `file_metadata` pointing to a CSV file in cloud storage.

```sql
INSERT INTO datadog.integrations.reference_tables (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reference_tables
  props:
    - name: data
      description: |
        The data object containing the table definition.
      value:
        attributes:
          description: "{{ description }}"
          file_metadata:
            access_details:
              aws_detail:
                aws_account_id: "{{ aws_account_id }}"
                aws_bucket_name: "{{ aws_bucket_name }}"
                file_path: "{{ file_path }}"
              azure_detail:
                azure_client_id: "{{ azure_client_id }}"
                azure_container_name: "{{ azure_container_name }}"
                azure_storage_account_name: "{{ azure_storage_account_name }}"
                azure_tenant_id: "{{ azure_tenant_id }}"
                file_path: "{{ file_path }}"
              gcp_detail:
                file_path: "{{ file_path }}"
                gcp_bucket_name: "{{ gcp_bucket_name }}"
                gcp_project_id: "{{ gcp_project_id }}"
                gcp_service_account_email: "{{ gcp_service_account_email }}"
            sync_enabled: {{ sync_enabled }}
            upload_id: "{{ upload_id }}"
          schema:
            fields:
              - name: "{{ name }}"
                type: "{{ type }}"
            primary_keys:
              - "{{ primary_keys }}"
          source: "{{ source }}"
          table_name: "{{ table_name }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_reference_table"
    values={[
        { label: 'update_reference_table', value: 'update_reference_table' }
    ]}
>
<TabItem value="update_reference_table">

Update a reference table by ID. You can update the table's data, description, and tags. Note: The source type cannot be changed after table creation. For data updates: For existing tables of type `source:LOCAL_FILE`, call POST api/v2/reference-tables/uploads first to get an upload ID, then PUT chunks of CSV data to each provided URL, and finally call this PATCH endpoint with the upload_id in file_metadata. For existing tables with `source:` types of `S3`, `GCS`, or `AZURE`, provide updated access_details in file_metadata pointing to a CSV file in the same type of cloud storage.

```sql
UPDATE datadog.integrations.reference_tables
SET 
data = '{{ data }}'
WHERE 
id = '{{ id }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table"
    values={[
        { label: 'delete_table', value: 'delete_table' }
    ]}
>
<TabItem value="delete_table">

Delete a reference table by ID

```sql
DELETE FROM datadog.integrations.reference_tables
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
