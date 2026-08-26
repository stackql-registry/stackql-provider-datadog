--- 
title: feature_flag_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_flag_environments
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>feature_flag_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_flag_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.feature_flag_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_feature_flags_environment"
    values={[
        { label: 'get_feature_flags_environment', value: 'get_feature_flags_environment' },
        { label: 'list_feature_flags_environments', value: 'list_feature_flags_environments' }
    ]}
>
<TabItem value="get_feature_flags_environment">

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
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the environment. (example: 550e8400-e29b-41d4-a716-446655440001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an environment.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type. (environments) (example: environments)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_feature_flags_environments">

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
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the environment. (example: 550e8400-e29b-41d4-a716-446655440001)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an environment.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type. (environments) (example: environments)</td>
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
    <td><a href="#get_feature_flags_environment"><CopyableCode code="get_feature_flags_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td></td>
    <td>Returns the details of a specific environment.</td>
</tr>
<tr>
    <td><a href="#list_feature_flags_environments"><CopyableCode code="list_feature_flags_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-dd_env"><code>dd_env</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Returns a list of environments for the organization.&lt;br /&gt;Supports filtering by name, key, and DD_ENV.</td>
</tr>
<tr>
    <td><a href="#create_feature_flags_environment"><CopyableCode code="create_feature_flags_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new environment for organizing feature flags.</td>
</tr>
<tr>
    <td><a href="#update_feature_flags_environment"><CopyableCode code="update_feature_flags_environment" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates an existing environment's metadata such as&lt;br /&gt; name and description.</td>
</tr>
<tr>
    <td><a href="#delete_feature_flags_environment"><CopyableCode code="delete_feature_flags_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td></td>
    <td>Deletes an environment. This operation cannot be undone.</td>
</tr>
<tr>
    <td><a href="#disable_feature_flag_environment"><CopyableCode code="disable_feature_flag_environment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td></td>
    <td>Disable a feature flag in a specific environment.</td>
</tr>
<tr>
    <td><a href="#enable_feature_flag_environment"><CopyableCode code="enable_feature_flag_environment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a></td>
    <td></td>
    <td>Enable a feature flag in a specific environment.</td>
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
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the environment.</td>
</tr>
<tr id="parameter-feature_flag_id">
    <td><CopyableCode code="feature_flag_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the feature flag.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-dd_env">
    <td><CopyableCode code="dd_env" /></td>
    <td><code>string</code></td>
    <td>Filter environments by queries that contain the provided DD_ENV value. (example: staging)</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Filter environments by key (partial matching). (example: env-partial)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of results to return. (example: 10)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter environments by name (partial matching). (example: env-search-term)</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of results to skip. (example: 0)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_feature_flags_environment"
    values={[
        { label: 'get_feature_flags_environment', value: 'get_feature_flags_environment' },
        { label: 'list_feature_flags_environments', value: 'list_feature_flags_environments' }
    ]}
>
<TabItem value="get_feature_flags_environment">

Returns the details of a specific environment.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.feature_flag_environments
WHERE environment_id = '{{ environment_id }}' -- required
;
```
</TabItem>
<TabItem value="list_feature_flags_environments">

Returns a list of environments for the organization.&lt;br /&gt;Supports filtering by name, key, and DD_ENV.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.feature_flag_environments
WHERE name = '{{ name }}'
AND key = '{{ key }}'
AND dd_env = '{{ dd_env }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_feature_flags_environment"
    values={[
        { label: 'create_feature_flags_environment', value: 'create_feature_flags_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_feature_flags_environment">

Creates a new environment for organizing feature flags.

```sql
INSERT INTO datadog.software_delivery.feature_flag_environments (
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
- name: feature_flag_environments
  props:
    - name: data
      description: |
        Data for creating a new environment.
      value:
        attributes:
          is_production: {{ is_production }}
          name: "{{ name }}"
          queries:
            - "{{ queries }}"
          require_feature_flag_approval: {{ require_feature_flag_approval }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_feature_flags_environment"
    values={[
        { label: 'update_feature_flags_environment', value: 'update_feature_flags_environment' }
    ]}
>
<TabItem value="update_feature_flags_environment">

Updates an existing environment's metadata such as&lt;br /&gt; name and description.

```sql
REPLACE datadog.software_delivery.feature_flag_environments
SET 
data = '{{ data }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_feature_flags_environment"
    values={[
        { label: 'delete_feature_flags_environment', value: 'delete_feature_flags_environment' }
    ]}
>
<TabItem value="delete_feature_flags_environment">

Deletes an environment. This operation cannot be undone.

```sql
DELETE FROM datadog.software_delivery.feature_flag_environments
WHERE environment_id = '{{ environment_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="disable_feature_flag_environment"
    values={[
        { label: 'disable_feature_flag_environment', value: 'disable_feature_flag_environment' },
        { label: 'enable_feature_flag_environment', value: 'enable_feature_flag_environment' }
    ]}
>
<TabItem value="disable_feature_flag_environment">

Disable a feature flag in a specific environment.

```sql
EXEC datadog.software_delivery.feature_flag_environments.disable_feature_flag_environment 
@feature_flag_id='{{ feature_flag_id }}' --required, 
@environment_id='{{ environment_id }}' --required 
;
```
</TabItem>
<TabItem value="enable_feature_flag_environment">

Enable a feature flag in a specific environment.

```sql
EXEC datadog.software_delivery.feature_flag_environments.enable_feature_flag_environment 
@feature_flag_id='{{ feature_flag_id }}' --required, 
@environment_id='{{ environment_id }}' --required 
;
```
</TabItem>
</Tabs>
