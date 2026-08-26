--- 
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
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

Creates, updates, deletes, gets or lists a <code>pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.logs.pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logs_pipeline"
    values={[
        { label: 'get_logs_pipeline', value: 'get_logs_pipeline' },
        { label: 'list_logs_pipelines', value: 'list_logs_pipelines' }
    ]}
>
<TabItem value="get_logs_pipeline">

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
    <td>ID of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the pipeline. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Filter for logs.</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the pipeline is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the pipeline can be edited.</td>
</tr>
<tr>
    <td><CopyableCode code="processors" /></td>
    <td><code>array</code></td>
    <td>Ordered list of processors in this pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of pipeline. (example: pipeline)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_logs_pipelines">

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
    <td>ID of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the pipeline. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Filter for logs.</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the pipeline is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the pipeline can be edited.</td>
</tr>
<tr>
    <td><CopyableCode code="processors" /></td>
    <td><code>array</code></td>
    <td>Ordered list of processors in this pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of pipeline. (example: pipeline)</td>
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
    <td><a href="#get_logs_pipeline"><CopyableCode code="get_logs_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pipeline_id"><code>pipeline_id</code></a></td>
    <td></td>
    <td>Get a specific pipeline from your organization.&lt;br /&gt;This endpoint takes no JSON arguments.</td>
</tr>
<tr>
    <td><a href="#list_logs_pipelines"><CopyableCode code="list_logs_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all pipelines from your organization.&lt;br /&gt;This endpoint takes no JSON arguments.</td>
</tr>
<tr>
    <td><a href="#create_logs_pipeline"><CopyableCode code="create_logs_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a pipeline in your organization.</td>
</tr>
<tr>
    <td><a href="#update_logs_pipeline"><CopyableCode code="update_logs_pipeline" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-pipeline_id"><code>pipeline_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update a given pipeline configuration to change it’s processors or their order.&lt;br /&gt;&lt;br /&gt;**Note**: Using this method updates your pipeline configuration by **replacing**&lt;br /&gt;your current configuration with the new one sent to your Datadog organization.</td>
</tr>
<tr>
    <td><a href="#delete_logs_pipeline"><CopyableCode code="delete_logs_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pipeline_id"><code>pipeline_id</code></a></td>
    <td></td>
    <td>Delete a given pipeline from your organization.&lt;br /&gt;This endpoint takes no JSON arguments.</td>
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
    <td>ID of the pipeline to delete.</td>
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
    defaultValue="get_logs_pipeline"
    values={[
        { label: 'get_logs_pipeline', value: 'get_logs_pipeline' },
        { label: 'list_logs_pipelines', value: 'list_logs_pipelines' }
    ]}
>
<TabItem value="get_logs_pipeline">

Get a specific pipeline from your organization.&lt;br /&gt;This endpoint takes no JSON arguments.

```sql
SELECT
id,
name,
description,
filter,
is_enabled,
is_read_only,
processors,
tags,
type
FROM datadog.logs.pipelines
WHERE pipeline_id = '{{ pipeline_id }}' -- required
;
```
</TabItem>
<TabItem value="list_logs_pipelines">

Get all pipelines from your organization.&lt;br /&gt;This endpoint takes no JSON arguments.

```sql
SELECT
id,
name,
description,
filter,
is_enabled,
is_read_only,
processors,
tags,
type
FROM datadog.logs.pipelines
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_logs_pipeline"
    values={[
        { label: 'create_logs_pipeline', value: 'create_logs_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_logs_pipeline">

Create a pipeline in your organization.

```sql
INSERT INTO datadog.logs.pipelines (
description,
filter,
is_enabled,
name,
processors,
tags
)
SELECT 
'{{ description }}',
'{{ filter }}',
{{ is_enabled }},
'{{ name }}' /* required */,
'{{ processors }}',
'{{ tags }}'
RETURNING
id,
name,
description,
filter,
is_enabled,
is_read_only,
processors,
tags,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pipelines
  props:
    - name: description
      value: "{{ description }}"
      description: |
        A description of the pipeline.
    - name: filter
      description: |
        Filter for logs.
      value:
        query: "{{ query }}"
    - name: is_enabled
      value: {{ is_enabled }}
      description: |
        Whether or not the pipeline is enabled.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the pipeline.
    - name: processors
      description: |
        Ordered list of processors in this pipeline.
      value:
        - grok:
            match_rules: "{{ match_rules }}"
            support_rules: "{{ support_rules }}"
          is_enabled: {{ is_enabled }}
          name: "{{ name }}"
          samples: "{{ samples }}"
          source: "{{ source }}"
          type: "{{ type }}"
          sources: "{{ sources }}"
          override_on_conflict: {{ override_on_conflict }}
          preserve_source: {{ preserve_source }}
          source_type: "{{ source_type }}"
          target: "{{ target }}"
          target_format: "{{ target_format }}"
          target_type: "{{ target_type }}"
          normalize_ending_slashes: {{ normalize_ending_slashes }}
          is_encoded: {{ is_encoded }}
          categories: "{{ categories }}"
          expression: "{{ expression }}"
          is_replace_missing: {{ is_replace_missing }}
          template: "{{ template }}"
          description: "{{ description }}"
          filter:
            query: "{{ query }}"
          processors: "{{ processors }}"
          tags: "{{ tags }}"
          default_lookup: "{{ default_lookup }}"
          lookup_table: "{{ lookup_table }}"
          lookup_enrichment_table: "{{ lookup_enrichment_table }}"
          operation:
            preserve_source: {{ preserve_source }}
            source: "{{ source }}"
            target: "{{ target }}"
            type: "{{ type }}"
            filter: "{{ filter }}"
            value_to_extract: "{{ value_to_extract }}"
            key_to_extract: "{{ key_to_extract }}"
            override_on_conflict: {{ override_on_conflict }}
          binary_to_text_encoding: "{{ binary_to_text_encoding }}"
          input_representation: "{{ input_representation }}"
          mappers: "{{ mappers }}"
          schema:
            class_name: "{{ class_name }}"
            class_uid: {{ class_uid }}
            profiles:
              - "{{ profiles }}"
            schema_type: "{{ schema_type }}"
            version: "{{ version }}"
          attribute_to_exclude: "{{ attribute_to_exclude }}"
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        A list of tags associated with the pipeline.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_logs_pipeline"
    values={[
        { label: 'update_logs_pipeline', value: 'update_logs_pipeline' }
    ]}
>
<TabItem value="update_logs_pipeline">

Update a given pipeline configuration to change it’s processors or their order.&lt;br /&gt;&lt;br /&gt;**Note**: Using this method updates your pipeline configuration by **replacing**&lt;br /&gt;your current configuration with the new one sent to your Datadog organization.

```sql
REPLACE datadog.logs.pipelines
SET 
description = '{{ description }}',
filter = '{{ filter }}',
is_enabled = {{ is_enabled }},
name = '{{ name }}',
processors = '{{ processors }}',
tags = '{{ tags }}'
WHERE 
pipeline_id = '{{ pipeline_id }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
description,
filter,
is_enabled,
is_read_only,
processors,
tags,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_logs_pipeline"
    values={[
        { label: 'delete_logs_pipeline', value: 'delete_logs_pipeline' }
    ]}
>
<TabItem value="delete_logs_pipeline">

Delete a given pipeline from your organization.&lt;br /&gt;This endpoint takes no JSON arguments.

```sql
DELETE FROM datadog.logs.pipelines
WHERE pipeline_id = '{{ pipeline_id }}' --required
;
```
</TabItem>
</Tabs>
