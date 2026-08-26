--- 
title: slo_corrections
hide_title: false
hide_table_of_contents: false
keywords:
  - slo_corrections
  - service_management
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

Creates, updates, deletes, gets or lists a <code>slo_corrections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slo_corrections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.slo_corrections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_slocorrection"
    values={[
        { label: 'get_slocorrection', value: 'get_slocorrection' },
        { label: 'get_slocorrections', value: 'get_slocorrections' },
        { label: 'list_slocorrection', value: 'list_slocorrection' }
    ]}
>
<TabItem value="get_slocorrection">

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
    <td>The ID of the SLO correction.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attribute object associated with the SLO correction.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>SLO correction resource type. (correction) (default: correction, example: correction)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_slocorrections">

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
    <td>The ID of the SLO correction.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attribute object associated with the SLO correction.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>SLO correction resource type. (correction) (default: correction, example: correction)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_slocorrection">

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
    <td>The ID of the SLO correction.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attribute object associated with the SLO correction.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>SLO correction resource type. (correction) (default: correction, example: correction)</td>
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
    <td><a href="#get_slocorrection"><CopyableCode code="get_slocorrection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slo_correction_id"><code>slo_correction_id</code></a></td>
    <td></td>
    <td>Get an SLO correction.</td>
</tr>
<tr>
    <td><a href="#get_slocorrections"><CopyableCode code="get_slocorrections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slo_id"><code>slo_id</code></a></td>
    <td></td>
    <td>Get corrections applied to an SLO</td>
</tr>
<tr>
    <td><a href="#list_slocorrection"><CopyableCode code="list_slocorrection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Get all Service Level Objective corrections.</td>
</tr>
<tr>
    <td><a href="#create_slocorrection"><CopyableCode code="create_slocorrection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create an SLO correction. Use `slo_id` to apply the correction to a single SLO, or `slo_query` to apply the&lt;br /&gt;correction to SLOs that match a query. Exactly one of `slo_id` or `slo_query` is required.</td>
</tr>
<tr>
    <td><a href="#update_slocorrection"><CopyableCode code="update_slocorrection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-slo_correction_id"><code>slo_correction_id</code></a></td>
    <td></td>
    <td>Update the specified SLO correction object.</td>
</tr>
<tr>
    <td><a href="#delete_slocorrection"><CopyableCode code="delete_slocorrection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-slo_correction_id"><code>slo_correction_id</code></a></td>
    <td></td>
    <td>Permanently delete the specified SLO correction object.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-slo_correction_id">
    <td><CopyableCode code="slo_correction_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the SLO correction object.</td>
</tr>
<tr id="parameter-slo_id">
    <td><CopyableCode code="slo_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service level objective object.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of SLO corrections to return in the response. Default is 25.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>The specific offset to use as the beginning of the returned response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_slocorrection"
    values={[
        { label: 'get_slocorrection', value: 'get_slocorrection' },
        { label: 'get_slocorrections', value: 'get_slocorrections' },
        { label: 'list_slocorrection', value: 'list_slocorrection' }
    ]}
>
<TabItem value="get_slocorrection">

Get an SLO correction.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.slo_corrections
WHERE slo_correction_id = '{{ slo_correction_id }}' -- required
;
```
</TabItem>
<TabItem value="get_slocorrections">

Get corrections applied to an SLO

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.slo_corrections
WHERE slo_id = '{{ slo_id }}' -- required
;
```
</TabItem>
<TabItem value="list_slocorrection">

Get all Service Level Objective corrections.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.slo_corrections
WHERE offset = '{{ offset }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_slocorrection"
    values={[
        { label: 'create_slocorrection', value: 'create_slocorrection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_slocorrection">

Create an SLO correction. Use `slo_id` to apply the correction to a single SLO, or `slo_query` to apply the&lt;br /&gt;correction to SLOs that match a query. Exactly one of `slo_id` or `slo_query` is required.

```sql
INSERT INTO datadog.service_management.slo_corrections (
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
- name: slo_corrections
  props:
    - name: data
      description: |
        The data object associated with the SLO correction to be created.
      value:
        attributes:
          category: "{{ category }}"
          description: "{{ description }}"
          duration: {{ duration }}
          end: {{ end }}
          rrule: "{{ rrule }}"
          slo_id: "{{ slo_id }}"
          slo_query: "{{ slo_query }}"
          start: {{ start }}
          timezone: "{{ timezone }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_slocorrection"
    values={[
        { label: 'update_slocorrection', value: 'update_slocorrection' }
    ]}
>
<TabItem value="update_slocorrection">

Update the specified SLO correction object.

```sql
UPDATE datadog.service_management.slo_corrections
SET 
data = '{{ data }}'
WHERE 
slo_correction_id = '{{ slo_correction_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slocorrection"
    values={[
        { label: 'delete_slocorrection', value: 'delete_slocorrection' }
    ]}
>
<TabItem value="delete_slocorrection">

Permanently delete the specified SLO correction object.

```sql
DELETE FROM datadog.service_management.slo_corrections
WHERE slo_correction_id = '{{ slo_correction_id }}' --required
;
```
</TabItem>
</Tabs>
