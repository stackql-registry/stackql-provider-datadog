--- 
title: feature_flag_variants
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_flag_variants
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

Creates, updates, deletes, gets or lists a <code>feature_flag_variants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_flag_variants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.feature_flag_variants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_variant_for_feature_flag"><CopyableCode code="create_variant_for_feature_flag" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Adds a single new variant to an existing feature flag. This endpoint is&lt;br /&gt;additive-only: it never modifies existing variants. A request whose `key`&lt;br /&gt;already exists on the flag is rejected with `409 Conflict`; a `value`&lt;br /&gt;whose type does not match the flag's `value_type` is rejected with `400`.&lt;br /&gt;The server generates the variant UUID and returns it in the response body;&lt;br /&gt;callers (for example, the flag-migration tool) need this UUID to reference&lt;br /&gt;the new variant in subsequent allocation syncs.</td>
</tr>
<tr>
    <td><a href="#update_variant_for_feature_flag"><CopyableCode code="update_variant_for_feature_flag" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-variant_id"><code>variant_id</code></a></td>
    <td></td>
    <td>Updates the name and value of an existing variant on a feature flag.&lt;br /&gt;&lt;br /&gt;When backend approvals are enabled and the flag requires approval, this endpoint creates and returns a `FlagSuggestion` with `201 Created` instead of applying the change immediately. Use the returned suggestion `id` to approve or reject the change. If a pending suggestion already exists for this flag's variant property, the endpoint returns `409 Conflict`.</td>
</tr>
<tr>
    <td><a href="#delete_variant_from_feature_flag"><CopyableCode code="delete_variant_from_feature_flag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-feature_flag_id"><code>feature_flag_id</code></a>, <a href="#parameter-variant_id"><code>variant_id</code></a></td>
    <td></td>
    <td>Deletes a variant from a feature flag.&lt;br /&gt;&lt;br /&gt;When backend approvals are enabled and the flag requires approval, this endpoint creates and returns a `FlagSuggestion` with `201 Created` instead of deleting the variant immediately. If a pending suggestion already exists for this flag's variant property, the endpoint returns `409 Conflict`.</td>
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
<tr id="parameter-variant_id">
    <td><CopyableCode code="variant_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the variant.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_variant_for_feature_flag"
    values={[
        { label: 'create_variant_for_feature_flag', value: 'create_variant_for_feature_flag' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_variant_for_feature_flag">

Adds a single new variant to an existing feature flag. This endpoint is&lt;br /&gt;additive-only: it never modifies existing variants. A request whose `key`&lt;br /&gt;already exists on the flag is rejected with `409 Conflict`; a `value`&lt;br /&gt;whose type does not match the flag's `value_type` is rejected with `400`.&lt;br /&gt;The server generates the variant UUID and returns it in the response body;&lt;br /&gt;callers (for example, the flag-migration tool) need this UUID to reference&lt;br /&gt;the new variant in subsequent allocation syncs.

```sql
INSERT INTO datadog.software_delivery.feature_flag_variants (
key,
name,
value,
feature_flag_id
)
SELECT 
'{{ key }}' /* required */,
'{{ name }}' /* required */,
'{{ value }}' /* required */,
'{{ feature_flag_id }}'
RETURNING
id,
name,
created_at,
key,
updated_at,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: feature_flag_variants
  props:
    - name: feature_flag_id
      value: "{{ feature_flag_id }}"
      description: Required parameter for the feature_flag_variants resource.
    - name: key
      value: "{{ key }}"
      description: |
        The unique key of the variant.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the variant.
    - name: value
      value: "{{ value }}"
      description: |
        The value of the variant as a string.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_variant_for_feature_flag"
    values={[
        { label: 'update_variant_for_feature_flag', value: 'update_variant_for_feature_flag' }
    ]}
>
<TabItem value="update_variant_for_feature_flag">

Updates the name and value of an existing variant on a feature flag.&lt;br /&gt;&lt;br /&gt;When backend approvals are enabled and the flag requires approval, this endpoint creates and returns a `FlagSuggestion` with `201 Created` instead of applying the change immediately. Use the returned suggestion `id` to approve or reject the change. If a pending suggestion already exists for this flag's variant property, the endpoint returns `409 Conflict`.

```sql
REPLACE datadog.software_delivery.feature_flag_variants
SET 
name = '{{ name }}',
value = '{{ value }}'
WHERE 
feature_flag_id = '{{ feature_flag_id }}' --required
AND variant_id = '{{ variant_id }}' --required
RETURNING
id,
name,
created_at,
key,
updated_at,
value;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_variant_from_feature_flag"
    values={[
        { label: 'delete_variant_from_feature_flag', value: 'delete_variant_from_feature_flag' }
    ]}
>
<TabItem value="delete_variant_from_feature_flag">

Deletes a variant from a feature flag.&lt;br /&gt;&lt;br /&gt;When backend approvals are enabled and the flag requires approval, this endpoint creates and returns a `FlagSuggestion` with `201 Created` instead of deleting the variant immediately. If a pending suggestion already exists for this flag's variant property, the endpoint returns `409 Conflict`.

```sql
DELETE FROM datadog.software_delivery.feature_flag_variants
WHERE feature_flag_id = '{{ feature_flag_id }}' --required
AND variant_id = '{{ variant_id }}' --required
;
```
</TabItem>
</Tabs>
