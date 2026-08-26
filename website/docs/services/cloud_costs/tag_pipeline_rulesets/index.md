--- 
title: tag_pipeline_rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_pipeline_rulesets
  - cloud_costs
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

Creates, updates, deletes, gets or lists a <code>tag_pipeline_rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_pipeline_rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.cloud_costs.tag_pipeline_rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tag_pipelines_ruleset"
    values={[
        { label: 'get_tag_pipelines_ruleset', value: 'get_tag_pipelines_ruleset' },
        { label: 'list_tag_pipelines_rulesets', value: 'list_tag_pipelines_rulesets' }
    ]}
>
<TabItem value="get_tag_pipelines_ruleset">

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
    <td>The `RulesetRespData` `id`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of `RulesetRespDataAttributes` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Ruleset resource type. (ruleset) (default: ruleset, example: ruleset)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tag_pipelines_rulesets">

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
    <td>The `RulesetRespData` `id`.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of `RulesetRespDataAttributes` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Ruleset resource type. (ruleset) (default: ruleset, example: ruleset)</td>
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
    <td><a href="#get_tag_pipelines_ruleset"><CopyableCode code="get_tag_pipelines_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Get a specific tag pipeline ruleset - Retrieve a specific tag pipeline ruleset by its ID</td>
</tr>
<tr>
    <td><a href="#list_tag_pipelines_rulesets"><CopyableCode code="list_tag_pipelines_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all tag pipeline rulesets - Retrieve a list of all tag pipeline rulesets for the organization</td>
</tr>
<tr>
    <td><a href="#create_tag_pipelines_ruleset"><CopyableCode code="create_tag_pipelines_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new tag pipeline ruleset with the specified rules and configuration</td>
</tr>
<tr>
    <td><a href="#update_tag_pipelines_ruleset"><CopyableCode code="update_tag_pipelines_ruleset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Update a tag pipeline ruleset - Update an existing tag pipeline ruleset with new rules and configuration</td>
</tr>
<tr>
    <td><a href="#delete_tag_pipelines_ruleset"><CopyableCode code="delete_tag_pipelines_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Delete a tag pipeline ruleset - Delete an existing tag pipeline ruleset by its ID</td>
</tr>
<tr>
    <td><a href="#reorder_tag_pipelines_rulesets"><CopyableCode code="reorder_tag_pipelines_rulesets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Reorder tag pipeline rulesets - Change the execution order of tag pipeline rulesets</td>
</tr>
<tr>
    <td><a href="#validate_query"><CopyableCode code="validate_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Validate a tag pipeline query - Validate the syntax and structure of a tag pipeline query</td>
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
<tr id="parameter-ruleset_id">
    <td><CopyableCode code="ruleset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ruleset</td>
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
    defaultValue="get_tag_pipelines_ruleset"
    values={[
        { label: 'get_tag_pipelines_ruleset', value: 'get_tag_pipelines_ruleset' },
        { label: 'list_tag_pipelines_rulesets', value: 'list_tag_pipelines_rulesets' }
    ]}
>
<TabItem value="get_tag_pipelines_ruleset">

Get a specific tag pipeline ruleset - Retrieve a specific tag pipeline ruleset by its ID

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_pipeline_rulesets
WHERE ruleset_id = '{{ ruleset_id }}' -- required
;
```
</TabItem>
<TabItem value="list_tag_pipelines_rulesets">

List all tag pipeline rulesets - Retrieve a list of all tag pipeline rulesets for the organization

```sql
SELECT
id,
attributes,
type
FROM datadog.cloud_costs.tag_pipeline_rulesets
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag_pipelines_ruleset"
    values={[
        { label: 'create_tag_pipelines_ruleset', value: 'create_tag_pipelines_ruleset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag_pipelines_ruleset">

Create a new tag pipeline ruleset with the specified rules and configuration

```sql
INSERT INTO datadog.cloud_costs.tag_pipeline_rulesets (
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
- name: tag_pipeline_rulesets
  props:
    - name: data
      description: |
        The definition of \`CreateRulesetRequestData\` object.
      value:
        attributes:
          enabled: {{ enabled }}
          rules:
            - enabled: {{ enabled }}
              mapping:
                destination_key: "{{ destination_key }}"
                if_not_exists: {{ if_not_exists }}
                if_tag_exists: "{{ if_tag_exists }}"
                source_keys:
                  - "{{ source_keys }}"
              metadata: "{{ metadata }}"
              name: "{{ name }}"
              query:
                addition:
                  key: "{{ key }}"
                  value: "{{ value }}"
                case_insensitivity: {{ case_insensitivity }}
                if_not_exists: {{ if_not_exists }}
                if_tag_exists: "{{ if_tag_exists }}"
                query: "{{ query }}"
              reference_table:
                case_insensitivity: {{ case_insensitivity }}
                field_pairs:
                  - input_column: "{{ input_column }}"
                    output_key: "{{ output_key }}"
                if_not_exists: {{ if_not_exists }}
                if_tag_exists: "{{ if_tag_exists }}"
                source_keys:
                  - "{{ source_keys }}"
                table_name: "{{ table_name }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tag_pipelines_ruleset"
    values={[
        { label: 'update_tag_pipelines_ruleset', value: 'update_tag_pipelines_ruleset' }
    ]}
>
<TabItem value="update_tag_pipelines_ruleset">

Update a tag pipeline ruleset - Update an existing tag pipeline ruleset with new rules and configuration

```sql
UPDATE datadog.cloud_costs.tag_pipeline_rulesets
SET 
data = '{{ data }}'
WHERE 
ruleset_id = '{{ ruleset_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tag_pipelines_ruleset"
    values={[
        { label: 'delete_tag_pipelines_ruleset', value: 'delete_tag_pipelines_ruleset' }
    ]}
>
<TabItem value="delete_tag_pipelines_ruleset">

Delete a tag pipeline ruleset - Delete an existing tag pipeline ruleset by its ID

```sql
DELETE FROM datadog.cloud_costs.tag_pipeline_rulesets
WHERE ruleset_id = '{{ ruleset_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reorder_tag_pipelines_rulesets"
    values={[
        { label: 'reorder_tag_pipelines_rulesets', value: 'reorder_tag_pipelines_rulesets' },
        { label: 'validate_query', value: 'validate_query' }
    ]}
>
<TabItem value="reorder_tag_pipelines_rulesets">

Reorder tag pipeline rulesets - Change the execution order of tag pipeline rulesets

```sql
EXEC datadog.cloud_costs.tag_pipeline_rulesets.reorder_tag_pipelines_rulesets 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="validate_query">

Validate a tag pipeline query - Validate the syntax and structure of a tag pipeline query

```sql
EXEC datadog.cloud_costs.tag_pipeline_rulesets.validate_query 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
