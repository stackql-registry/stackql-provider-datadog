--- 
title: observability_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - observability_pipelines
  - logs
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

Creates, updates, deletes, gets or lists an <code>observability_pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="observability_pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.observability_pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline"
    values={[
        { label: 'get_pipeline', value: 'get_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="get_pipeline">

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
    <td>Unique identifier for the pipeline. (example: 3fa85f64-5717-4562-b3fc-2c963f66afa6)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Defines the pipeline’s name and its components (sources, processors, and destinations).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type identifier. For pipeline resources, this should always be set to `pipelines`. (default: pipelines, example: pipelines)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipelines">

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
    <td>Unique identifier for the pipeline. (example: 3fa85f64-5717-4562-b3fc-2c963f66afa6)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Defines the pipeline’s name and its components (sources, processors, and destinations).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type identifier. For pipeline resources, this should always be set to `pipelines`. (default: pipelines, example: pipelines)</td>
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
    <td><a href="#get_pipeline"><CopyableCode code="get_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pipeline_id"><code>pipeline_id</code></a></td>
    <td></td>
    <td>Get a specific pipeline by its ID.</td>
</tr>
<tr>
    <td><a href="#list_pipelines"><CopyableCode code="list_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>Retrieve a list of pipelines.</td>
</tr>
<tr>
    <td><a href="#create_pipeline"><CopyableCode code="create_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new pipeline.</td>
</tr>
<tr>
    <td><a href="#update_pipeline"><CopyableCode code="update_pipeline" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-pipeline_id"><code>pipeline_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a pipeline.</td>
</tr>
<tr>
    <td><a href="#delete_pipeline"><CopyableCode code="delete_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pipeline_id"><code>pipeline_id</code></a></td>
    <td></td>
    <td>Delete a pipeline.</td>
</tr>
<tr>
    <td><a href="#validate_pipeline"><CopyableCode code="validate_pipeline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Validates a pipeline configuration without creating or updating any resources.&lt;br /&gt;Returns a list of validation errors, if any.</td>
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
<tr id="parameter-pipeline_id">
    <td><CopyableCode code="pipeline_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the pipeline to delete.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items to return per page. The maximum allowed value is 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pipeline"
    values={[
        { label: 'get_pipeline', value: 'get_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="get_pipeline">

Get a specific pipeline by its ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.logs.observability_pipelines
WHERE pipeline_id = '{{ pipeline_id }}' -- required
;
```
</TabItem>
<TabItem value="list_pipelines">

Retrieve a list of pipelines.

```sql
SELECT
id,
attributes,
type
FROM datadog.logs.observability_pipelines
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pipeline"
    values={[
        { label: 'create_pipeline', value: 'create_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pipeline">

Create a new pipeline.

```sql
INSERT INTO datadog.logs.observability_pipelines (
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
- name: observability_pipelines
  props:
    - name: data
      description: |
        Contains the the pipeline configuration.
      value:
        attributes:
          config:
            destinations:
              - api_version: "{{ api_version }}"
                auth:
                  password_key: "{{ password_key }}"
                  strategy: "{{ strategy }}"
                  username_key: "{{ username_key }}"
                buffer:
                  max_size: {{ max_size }}
                  type: "{{ type }}"
                  when_full: "{{ when_full }}"
                  max_events: {{ max_events }}
                bulk_index: "{{ bulk_index }}"
                compression:
                  algorithm: "{{ algorithm }}"
                  level: {{ level }}
                data_stream:
                  auto_routing: {{ auto_routing }}
                  dataset: "{{ dataset }}"
                  dtype: "{{ dtype }}"
                  namespace: "{{ namespace }}"
                  sync_fields: {{ sync_fields }}
                endpoint_url_key: "{{ endpoint_url_key }}"
                id: "{{ id }}"
                id_key: "{{ id_key }}"
                inputs: "{{ inputs }}"
                pipeline: "{{ pipeline }}"
                request_retry_partial: {{ request_retry_partial }}
                tls:
                  ca_file: "{{ ca_file }}"
                  crt_file: "{{ crt_file }}"
                  key_file: "{{ key_file }}"
                  key_pass_key: "{{ key_pass_key }}"
                type: "{{ type }}"
                auth_strategy: "{{ auth_strategy }}"
                custom_key: "{{ custom_key }}"
                encoding: "{{ encoding }}"
                password_key: "{{ password_key }}"
                token_key: "{{ token_key }}"
                uri_key: "{{ uri_key }}"
                username_key: "{{ username_key }}"
                bucket: "{{ bucket }}"
                key_prefix: "{{ key_prefix }}"
                region: "{{ region }}"
                server_side_encryption: "{{ server_side_encryption }}"
                ssekms_key_id: "{{ ssekms_key_id }}"
                storage_class: "{{ storage_class }}"
                batch_settings:
                  batch_size: {{ batch_size }}
                  timeout_secs: {{ timeout_secs }}
                custom_source_name: "{{ custom_source_name }}"
                blob_prefix: "{{ blob_prefix }}"
                connection_string_key: "{{ connection_string_key }}"
                container_name: "{{ container_name }}"
                batch:
                  max_events: {{ max_events }}
                  timeout_secs: {{ timeout_secs }}
                batch_encoding:
                  allow_nullable_fields: {{ allow_nullable_fields }}
                  codec: "{{ codec }}"
                database: "{{ database }}"
                date_time_best_effort: {{ date_time_best_effort }}
                format: "{{ format }}"
                skip_unknown_fields: {{ skip_unknown_fields }}
                table: "{{ table }}"
                routes: "{{ routes }}"
                customer_id: "{{ customer_id }}"
                log_type: "{{ log_type }}"
                acl: "{{ acl }}"
                metadata: "{{ metadata }}"
                project: "{{ project }}"
                topic: "{{ topic }}"
                bootstrap_servers_key: "{{ bootstrap_servers_key }}"
                headers_key: "{{ headers_key }}"
                key_field: "{{ key_field }}"
                librdkafka_options: "{{ librdkafka_options }}"
                message_timeout_ms: {{ message_timeout_ms }}
                rate_limit_duration_secs: {{ rate_limit_duration_secs }}
                rate_limit_num: {{ rate_limit_num }}
                sasl:
                  mechanism: "{{ mechanism }}"
                  password_key: "{{ password_key }}"
                  username_key: "{{ username_key }}"
                socket_timeout_ms: {{ socket_timeout_ms }}
                client_id: "{{ client_id }}"
                client_secret_key: "{{ client_secret_key }}"
                dce_uri_key: "{{ dce_uri_key }}"
                dcr_immutable_id: "{{ dcr_immutable_id }}"
                tenant_id: "{{ tenant_id }}"
                account_id_key: "{{ account_id_key }}"
                license_key_key: "{{ license_key_key }}"
                keepalive: {{ keepalive }}
                address_key: "{{ address_key }}"
                framing:
                  method: "{{ method }}"
                  delimiter: "{{ delimiter }}"
                mode: "{{ mode }}"
                auto_extract_timestamp: {{ auto_extract_timestamp }}
                index: "{{ index }}"
                indexed_fields: "{{ indexed_fields }}"
                sourcetype: "{{ sourcetype }}"
                token_strategy: "{{ token_strategy }}"
                header_custom_fields: "{{ header_custom_fields }}"
                header_host_name: "{{ header_host_name }}"
                header_source_category: "{{ header_source_category }}"
                header_source_name: "{{ header_source_name }}"
                ingestion_endpoint_key: "{{ ingestion_endpoint_key }}"
                table_name: "{{ table_name }}"
                unity_catalog_endpoint_key: "{{ unity_catalog_endpoint_key }}"
                default_namespace: "{{ default_namespace }}"
                source: "{{ source }}"
            pipeline_type: "{{ pipeline_type }}"
            processor_groups:
              - display_name: "{{ display_name }}"
                enabled: {{ enabled }}
                id: "{{ id }}"
                include: "{{ include }}"
                inputs: "{{ inputs }}"
                processors: "{{ processors }}"
            processors:
              - display_name: "{{ display_name }}"
                enabled: {{ enabled }}
                id: "{{ id }}"
                include: "{{ include }}"
                inputs: "{{ inputs }}"
                processors: "{{ processors }}"
            sources:
              - address_key: "{{ address_key }}"
                id: "{{ id }}"
                tls:
                  ca_file: "{{ ca_file }}"
                  crt_file: "{{ crt_file }}"
                  key_file: "{{ key_file }}"
                  key_pass_key: "{{ key_pass_key }}"
                type: "{{ type }}"
                auth:
                  assume_role: "{{ assume_role }}"
                  external_id: "{{ external_id }}"
                  session_name: "{{ session_name }}"
                compression: "{{ compression }}"
                region: "{{ region }}"
                url_key: "{{ url_key }}"
                decoding: "{{ decoding }}"
                project: "{{ project }}"
                subscription: "{{ subscription }}"
                auth_strategy: "{{ auth_strategy }}"
                custom_key: "{{ custom_key }}"
                endpoint_url_key: "{{ endpoint_url_key }}"
                password_key: "{{ password_key }}"
                scrape_interval_secs: {{ scrape_interval_secs }}
                scrape_timeout_secs: {{ scrape_timeout_secs }}
                token_key: "{{ token_key }}"
                username_key: "{{ username_key }}"
                valid_tokens: "{{ valid_tokens }}"
                bootstrap_servers_key: "{{ bootstrap_servers_key }}"
                group_id: "{{ group_id }}"
                librdkafka_options: "{{ librdkafka_options }}"
                sasl:
                  mechanism: "{{ mechanism }}"
                  password_key: "{{ password_key }}"
                  username_key: "{{ username_key }}"
                topics: "{{ topics }}"
                mode: "{{ mode }}"
                framing:
                  method: "{{ method }}"
                  delimiter: "{{ delimiter }}"
                store_hec_token: {{ store_hec_token }}
                uri_key: "{{ uri_key }}"
                grpc_address_key: "{{ grpc_address_key }}"
                http_address_key: "{{ http_address_key }}"
            use_legacy_search_syntax: {{ use_legacy_search_syntax }}
          name: "{{ name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_pipeline"
    values={[
        { label: 'update_pipeline', value: 'update_pipeline' }
    ]}
>
<TabItem value="update_pipeline">

Update a pipeline.

```sql
REPLACE datadog.logs.observability_pipelines
SET 
data = '{{ data }}'
WHERE 
pipeline_id = '{{ pipeline_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pipeline"
    values={[
        { label: 'delete_pipeline', value: 'delete_pipeline' }
    ]}
>
<TabItem value="delete_pipeline">

Delete a pipeline.

```sql
DELETE FROM datadog.logs.observability_pipelines
WHERE pipeline_id = '{{ pipeline_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="validate_pipeline"
    values={[
        { label: 'validate_pipeline', value: 'validate_pipeline' }
    ]}
>
<TabItem value="validate_pipeline">

Validates a pipeline configuration without creating or updating any resources.&lt;br /&gt;Returns a list of validation errors, if any.

```sql
EXEC datadog.logs.observability_pipelines.validate_pipeline 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
