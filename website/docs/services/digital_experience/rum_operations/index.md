--- 
title: rum_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_operations
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

Creates, updates, deletes, gets or lists a <code>rum_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rumoperation"
    values={[
        { label: 'get_rumoperation', value: 'get_rumoperation' },
        { label: 'list_rumoperations', value: 'list_rumoperations' }
    ]}
>
<TabItem value="get_rumoperation">

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
    <td>The unique identifier of the RUM operation. (example: abc12345-1234-5678-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a RUM operation response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for RUM operation resources. (operations) (example: operations)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rumoperations">

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
    <td>The unique identifier of the RUM operation. (example: abc12345-1234-5678-abcd-ef1234567890)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a RUM operation response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for RUM operation resources. (operations) (example: operations)</td>
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
    <td><a href="#get_rumoperation"><CopyableCode code="get_rumoperation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rum_operation_id"><code>rum_operation_id</code></a></td>
    <td></td>
    <td>Retrieve a specific RUM operation by its unique identifier.</td>
</tr>
<tr>
    <td><a href="#list_rumoperations"><CopyableCode code="list_rumoperations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-creator"><code>creator</code></a>, <a href="#parameter-team"><code>team</code></a>, <a href="#parameter-feature_id"><code>feature_id</code></a>, <a href="#parameter-application_id"><code>application_id</code></a></td>
    <td>Search RUM operations for your organization. Supports filtering by query, creator, team, feature, and application.</td>
</tr>
<tr>
    <td><a href="#create_rumoperation"><CopyableCode code="create_rumoperation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new RUM operation, defining the journey used to detect it from RUM events.</td>
</tr>
<tr>
    <td><a href="#update_rumoperation"><CopyableCode code="update_rumoperation" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-rum_operation_id"><code>rum_operation_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing RUM operation. Fields omitted from the request body keep their existing value,&lt;br /&gt;with the exception of `journey_rum`, which is required and fully replaced on every update.</td>
</tr>
<tr>
    <td><a href="#delete_rumoperation"><CopyableCode code="delete_rumoperation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rum_operation_id"><code>rum_operation_id</code></a></td>
    <td></td>
    <td>Delete a RUM operation.</td>
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
<tr id="parameter-rum_operation_id">
    <td><CopyableCode code="rum_operation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the RUM operation to delete.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter operations by RUM application ID.</td>
</tr>
<tr id="parameter-creator">
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Filter operations by the email of their creator.</td>
</tr>
<tr id="parameter-feature_id">
    <td><CopyableCode code="feature_id" /></td>
    <td><code>string</code></td>
    <td>Filter operations by feature ID. Accepts a comma-separated list of feature IDs.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items per page. Maximum of 100.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset for pagination.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>A search query to filter operations by name.</td>
</tr>
<tr id="parameter-team">
    <td><CopyableCode code="team" /></td>
    <td><code>string</code></td>
    <td>Filter operations by team. Accepts a comma-separated list of teams.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_rumoperation"
    values={[
        { label: 'get_rumoperation', value: 'get_rumoperation' },
        { label: 'list_rumoperations', value: 'list_rumoperations' }
    ]}
>
<TabItem value="get_rumoperation">

Retrieve a specific RUM operation by its unique identifier.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_operations
WHERE rum_operation_id = '{{ rum_operation_id }}' -- required
;
```
</TabItem>
<TabItem value="list_rumoperations">

Search RUM operations for your organization. Supports filtering by query, creator, team, feature, and application.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_operations
WHERE query = '{{ query }}'
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
AND creator = '{{ creator }}'
AND team = '{{ team }}'
AND feature_id = '{{ feature_id }}'
AND application_id = '{{ application_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rumoperation"
    values={[
        { label: 'create_rumoperation', value: 'create_rumoperation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rumoperation">

Create a new RUM operation, defining the journey used to detect it from RUM events.

```sql
INSERT INTO datadog.digital_experience.rum_operations (
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
- name: rum_operations
  props:
    - name: data
      description: |
        The data object for creating a RUM operation.
      value:
        attributes:
          application_id: "{{ application_id }}"
          category: "{{ category }}"
          description: "{{ description }}"
          display_name: "{{ display_name }}"
          feature_ids:
            - "{{ feature_ids }}"
          journey_rum:
            rum_steps:
              - composite:
                  composite_rule_id: "{{ composite_rule_id }}"
                  config_version: "{{ config_version }}"
                  kind: "{{ kind }}"
                  max_window_ms: {{ max_window_ms }}
                  predicates: "{{ predicates }}"
                nodes: "{{ nodes }}"
                type: "{{ type }}"
          name: "{{ name }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_rumoperation"
    values={[
        { label: 'update_rumoperation', value: 'update_rumoperation' }
    ]}
>
<TabItem value="update_rumoperation">

Update an existing RUM operation. Fields omitted from the request body keep their existing value,&lt;br /&gt;with the exception of `journey_rum`, which is required and fully replaced on every update.

```sql
REPLACE datadog.digital_experience.rum_operations
SET 
data = '{{ data }}'
WHERE 
rum_operation_id = '{{ rum_operation_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rumoperation"
    values={[
        { label: 'delete_rumoperation', value: 'delete_rumoperation' }
    ]}
>
<TabItem value="delete_rumoperation">

Delete a RUM operation.

```sql
DELETE FROM datadog.digital_experience.rum_operations
WHERE rum_operation_id = '{{ rum_operation_id }}' --required
;
```
</TabItem>
</Tabs>
