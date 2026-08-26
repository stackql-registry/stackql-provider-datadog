--- 
title: powerpacks
hide_title: false
hide_table_of_contents: false
keywords:
  - powerpacks
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>powerpacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="powerpacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.powerpacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_powerpack"
    values={[
        { label: 'get_powerpack', value: 'get_powerpack' },
        { label: 'list_powerpacks', value: 'list_powerpacks' }
    ]}
>
<TabItem value="get_powerpack">

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
    <td>ID of the powerpack.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Powerpack attribute object.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Powerpack relationship object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of widget, must be powerpack. (example: powerpack)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_powerpacks">

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
    <td>ID of the powerpack.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Powerpack attribute object.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Powerpack relationship object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of widget, must be powerpack. (example: powerpack)</td>
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
    <td><a href="#get_powerpack"><CopyableCode code="get_powerpack" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-powerpack_id"><code>powerpack_id</code></a></td>
    <td></td>
    <td>Get a powerpack.</td>
</tr>
<tr>
    <td><a href="#list_powerpacks"><CopyableCode code="list_powerpacks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a></td>
    <td>Get a list of all powerpacks.</td>
</tr>
<tr>
    <td><a href="#create_powerpack"><CopyableCode code="create_powerpack" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a powerpack.</td>
</tr>
<tr>
    <td><a href="#update_powerpack"><CopyableCode code="update_powerpack" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-powerpack_id"><code>powerpack_id</code></a></td>
    <td></td>
    <td>Update a powerpack.</td>
</tr>
<tr>
    <td><a href="#delete_powerpack"><CopyableCode code="delete_powerpack" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-powerpack_id"><code>powerpack_id</code></a></td>
    <td></td>
    <td>Delete a powerpack.</td>
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
<tr id="parameter-powerpack_id">
    <td><CopyableCode code="powerpack_id" /></td>
    <td><code>string</code></td>
    <td>Powerpack id</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of powerpacks in the response. (example: 25)</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific offset to use as the beginning of the returned page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_powerpack"
    values={[
        { label: 'get_powerpack', value: 'get_powerpack' },
        { label: 'list_powerpacks', value: 'list_powerpacks' }
    ]}
>
<TabItem value="get_powerpack">

Get a powerpack.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.powerpacks
WHERE powerpack_id = '{{ powerpack_id }}' -- required
;
```
</TabItem>
<TabItem value="list_powerpacks">

Get a list of all powerpacks.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.powerpacks
WHERE page[limit] = '{{ page[limit] }}'
AND page[offset] = '{{ page[offset] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_powerpack"
    values={[
        { label: 'create_powerpack', value: 'create_powerpack' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_powerpack">

Create a powerpack.

```sql
INSERT INTO datadog.dashboards.powerpacks (
data
)
SELECT 
'{{ data }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: powerpacks
  props:
    - name: data
      description: |
        Powerpack data object.
      value:
        attributes:
          description: "{{ description }}"
          group_widget:
            definition:
              layout_type: "{{ layout_type }}"
              show_title: {{ show_title }}
              title: "{{ title }}"
              type: "{{ type }}"
              widgets:
                - definition: "{{ definition }}"
                  layout:
                    height: {{ height }}
                    width: {{ width }}
                    x: {{ x }}
                    y: {{ y }}
            layout:
              height: {{ height }}
              width: {{ width }}
              x: {{ x }}
              y: {{ y }}
            live_span: "{{ live_span }}"
          name: "{{ name }}"
          tags:
            - "{{ tags }}"
          template_variables:
            - available_values: "{{ available_values }}"
              defaults: "{{ defaults }}"
              name: "{{ name }}"
              prefix: "{{ prefix }}"
        id: "{{ id }}"
        relationships:
          author:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_powerpack"
    values={[
        { label: 'update_powerpack', value: 'update_powerpack' }
    ]}
>
<TabItem value="update_powerpack">

Update a powerpack.

```sql
UPDATE datadog.dashboards.powerpacks
SET 
data = '{{ data }}'
WHERE 
powerpack_id = '{{ powerpack_id }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_powerpack"
    values={[
        { label: 'delete_powerpack', value: 'delete_powerpack' }
    ]}
>
<TabItem value="delete_powerpack">

Delete a powerpack.

```sql
DELETE FROM datadog.dashboards.powerpacks
WHERE powerpack_id = '{{ powerpack_id }}' --required
;
```
</TabItem>
</Tabs>
