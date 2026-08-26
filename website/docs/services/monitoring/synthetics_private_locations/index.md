--- 
title: synthetics_private_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_private_locations
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>synthetics_private_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_private_locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_private_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_private_location"
    values={[
        { label: 'get_private_location', value: 'get_private_location' }
    ]}
>
<TabItem value="get_private_location">

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
    <td>Unique identifier of the private location.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the private location. (example: New private location)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the private location. (example: Description of private location)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Object containing metadata about the private location.</td>
</tr>
<tr>
    <td><CopyableCode code="secrets" /></td>
    <td><code>object</code></td>
    <td>Secrets for the private location. Only present in the response when creating the private location.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Array of tags attached to the private location.</td>
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
    <td><a href="#get_private_location"><CopyableCode code="get_private_location" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-location_id"><code>location_id</code></a></td>
    <td></td>
    <td>Get a Synthetic private location.</td>
</tr>
<tr>
    <td><a href="#create_private_location"><CopyableCode code="create_private_location" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Create a new Synthetic private location.</td>
</tr>
<tr>
    <td><a href="#update_private_location"><CopyableCode code="update_private_location" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-location_id"><code>location_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Edit a Synthetic private location.</td>
</tr>
<tr>
    <td><a href="#delete_private_location"><CopyableCode code="delete_private_location" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-location_id"><code>location_id</code></a></td>
    <td></td>
    <td>Delete a Synthetic private location.</td>
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
<tr id="parameter-location_id">
    <td><CopyableCode code="location_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the private location.</td>
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
    defaultValue="get_private_location"
    values={[
        { label: 'get_private_location', value: 'get_private_location' }
    ]}
>
<TabItem value="get_private_location">

Get a Synthetic private location.

```sql
SELECT
id,
name,
description,
metadata,
secrets,
tags
FROM datadog.monitoring.synthetics_private_locations
WHERE location_id = '{{ location_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_private_location"
    values={[
        { label: 'create_private_location', value: 'create_private_location' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_private_location">

Create a new Synthetic private location.

```sql
INSERT INTO datadog.monitoring.synthetics_private_locations (
description,
metadata,
name,
tags
)
SELECT 
'{{ description }}' /* required */,
'{{ metadata }}',
'{{ name }}' /* required */,
'{{ tags }}' /* required */
RETURNING
config,
private_location,
result_encryption
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: synthetics_private_locations
  props:
    - name: description
      value: "{{ description }}"
      description: |
        Description of the private location.
    - name: metadata
      description: |
        Object containing metadata about the private location.
      value:
        restricted_roles:
          - "{{ restricted_roles }}"
    - name: name
      value: "{{ name }}"
      description: |
        Name of the private location.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        Array of tags attached to the private location.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_private_location"
    values={[
        { label: 'update_private_location', value: 'update_private_location' }
    ]}
>
<TabItem value="update_private_location">

Edit a Synthetic private location.

```sql
REPLACE datadog.monitoring.synthetics_private_locations
SET 
description = '{{ description }}',
metadata = '{{ metadata }}',
name = '{{ name }}',
tags = '{{ tags }}'
WHERE 
location_id = '{{ location_id }}' --required
AND name = '{{ name }}' --required
AND description = '{{ description }}' --required
AND tags = '{{ tags }}' --required
RETURNING
id,
name,
description,
metadata,
secrets,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_private_location"
    values={[
        { label: 'delete_private_location', value: 'delete_private_location' }
    ]}
>
<TabItem value="delete_private_location">

Delete a Synthetic private location.

```sql
DELETE FROM datadog.monitoring.synthetics_private_locations
WHERE location_id = '{{ location_id }}' --required
;
```
</TabItem>
</Tabs>
