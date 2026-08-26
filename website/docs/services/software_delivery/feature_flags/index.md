--- 
title: feature_flags
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_flags
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

Creates, updates, deletes, gets or lists a <code>feature_flags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_flags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.feature_flags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_feature_flag"
    values={[
        { label: 'get_feature_flag', value: 'get_feature_flag' },
        { label: 'list_feature_flags', value: 'list_feature_flags' }
    ]}
>
<TabItem value="get_feature_flag">

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
    <td>The unique identifier of the feature flag. (example: 550e8400-e29b-41d4-a716-446655440000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a feature flag.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type. (feature-flags) (example: feature-flags)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_feature_flags">

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
    <td>The unique identifier of the feature flag. (example: 550e8400-e29b-41d4-a716-446655440000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a feature flag in list responses.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type. (feature-flags) (example: feature-flags)</td>
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
    <td><a href="#get_feature_flag"><CopyableCode code="get_feature_flag" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a></td>
    <td></td>
    <td>Returns the details of a specific feature flag&lt;br /&gt;including variants and environment status.</td>
</tr>
<tr>
    <td><a href="#list_feature_flags"><CopyableCode code="list_feature_flags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-is_archived"><code>is_archived</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Returns a list of feature flags for the organization.&lt;br /&gt;Supports filtering by key and archived status.</td>
</tr>
<tr>
    <td><a href="#create_feature_flag"><CopyableCode code="create_feature_flag" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new feature flag with variants.</td>
</tr>
<tr>
    <td><a href="#update_feature_flag"><CopyableCode code="update_feature_flag" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates an existing feature flag's metadata such as&lt;br /&gt; name and description. Does not modify targeting rules or allocations.</td>
</tr>
<tr>
    <td><a href="#archive_feature_flag"><CopyableCode code="archive_feature_flag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a></td>
    <td></td>
    <td>Archives a feature flag. Archived flags are&lt;br /&gt;hidden from the main list but remain accessible and can be unarchived.</td>
</tr>
<tr>
    <td><a href="#unarchive_feature_flag"><CopyableCode code="unarchive_feature_flag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a></td>
    <td></td>
    <td>Unarchives a previously archived feature flag,&lt;br /&gt;making it visible in the main list again.</td>
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
<tr id="parameter-is_archived">
    <td><CopyableCode code="is_archived" /></td>
    <td><code>boolean</code></td>
    <td>Filter by archived status. (example: false)</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Filter feature flags by key (partial matching). (example: flag-search-term)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of results to return. (example: 10)</td>
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
    defaultValue="get_feature_flag"
    values={[
        { label: 'get_feature_flag', value: 'get_feature_flag' },
        { label: 'list_feature_flags', value: 'list_feature_flags' }
    ]}
>
<TabItem value="get_feature_flag">

Returns the details of a specific feature flag&lt;br /&gt;including variants and environment status.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.feature_flags
WHERE feature_flag_id = '{{ feature_flag_id }}' -- required
;
```
</TabItem>
<TabItem value="list_feature_flags">

Returns a list of feature flags for the organization.&lt;br /&gt;Supports filtering by key and archived status.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.feature_flags
WHERE key = '{{ key }}'
AND is_archived = '{{ is_archived }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_feature_flag"
    values={[
        { label: 'create_feature_flag', value: 'create_feature_flag' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_feature_flag">

Creates a new feature flag with variants.

```sql
INSERT INTO datadog.software_delivery.feature_flags (
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
- name: feature_flags
  props:
    - name: data
      description: |
        Data for creating a new feature flag.
      value:
        attributes:
          default_variant_key: "{{ default_variant_key }}"
          description: "{{ description }}"
          json_schema: "{{ json_schema }}"
          key: "{{ key }}"
          name: "{{ name }}"
          value_type: "{{ value_type }}"
          variants:
            - key: "{{ key }}"
              name: "{{ name }}"
              value: "{{ value }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_feature_flag"
    values={[
        { label: 'update_feature_flag', value: 'update_feature_flag' }
    ]}
>
<TabItem value="update_feature_flag">

Updates an existing feature flag's metadata such as&lt;br /&gt; name and description. Does not modify targeting rules or allocations.

```sql
REPLACE datadog.software_delivery.feature_flags
SET 
data = '{{ data }}'
WHERE 
feature_flag_id = '{{ feature_flag_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="archive_feature_flag"
    values={[
        { label: 'archive_feature_flag', value: 'archive_feature_flag' },
        { label: 'unarchive_feature_flag', value: 'unarchive_feature_flag' }
    ]}
>
<TabItem value="archive_feature_flag">

Archives a feature flag. Archived flags are&lt;br /&gt;hidden from the main list but remain accessible and can be unarchived.

```sql
EXEC datadog.software_delivery.feature_flags.archive_feature_flag 
@feature_flag_id='{{ feature_flag_id }}' --required 
;
```
</TabItem>
<TabItem value="unarchive_feature_flag">

Unarchives a previously archived feature flag,&lt;br /&gt;making it visible in the main list again.

```sql
EXEC datadog.software_delivery.feature_flags.unarchive_feature_flag 
@feature_flag_id='{{ feature_flag_id }}' --required 
;
```
</TabItem>
</Tabs>
