--- 
title: deployment_gates
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_gates
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

Creates, updates, deletes, gets or lists a <code>deployment_gates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_gates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.deployment_gates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_gate"
    values={[
        { label: 'get_deployment_gate', value: 'get_deployment_gate' },
        { label: 'list_deployment_gates', value: 'list_deployment_gates' }
    ]}
>
<TabItem value="get_deployment_gate">

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
    <td>Unique identifier of the deployment gate. (example: 1111-2222-3333-4444-555566667777)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Basic information about a deployment gate.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Deployment gate resource type. (deployment_gate) (example: deployment_gate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_gates">

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
    <td>Unique identifier of the deployment gate. (example: 1111-2222-3333-4444-555566667777)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Basic information about a deployment gate.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Deployment gate resource type. (deployment_gate) (example: deployment_gate)</td>
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
    <td><a href="#get_deployment_gate"><CopyableCode code="get_deployment_gate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Endpoint to get a deployment gate.</td>
</tr>
<tr>
    <td><a href="#list_deployment_gates"><CopyableCode code="list_deployment_gates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a></td>
    <td>Returns a paginated list of all deployment gates for the organization.&lt;br /&gt;Use `page&#91;cursor&#93;` and `page&#91;size&#93;` query parameters to paginate through results.</td>
</tr>
<tr>
    <td><a href="#create_deployment_gate"><CopyableCode code="create_deployment_gate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Endpoint to create a deployment gate.</td>
</tr>
<tr>
    <td><a href="#update_deployment_gate"><CopyableCode code="update_deployment_gate" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Endpoint to update a deployment gate.</td>
</tr>
<tr>
    <td><a href="#delete_deployment_gate"><CopyableCode code="delete_deployment_gate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Endpoint to delete a deployment gate. Rules associated with the gate are also deleted.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment gate.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Cursor for pagination. Use the `meta.page.next_cursor` value from the previous response.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of results per page. Defaults to 50. Must be between 1 and 1000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_deployment_gate"
    values={[
        { label: 'get_deployment_gate', value: 'get_deployment_gate' },
        { label: 'list_deployment_gates', value: 'list_deployment_gates' }
    ]}
>
<TabItem value="get_deployment_gate">

Endpoint to get a deployment gate.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.deployment_gates
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_gates">

Returns a paginated list of all deployment gates for the organization.&lt;br /&gt;Use `page&#91;cursor&#93;` and `page&#91;size&#93;` query parameters to paginate through results.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.deployment_gates
WHERE page[cursor] = '{{ page[cursor] }}'
AND page[size] = '{{ page[size] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_gate"
    values={[
        { label: 'create_deployment_gate', value: 'create_deployment_gate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_gate">

Endpoint to create a deployment gate.

```sql
INSERT INTO datadog.software_delivery.deployment_gates (
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
- name: deployment_gates
  props:
    - name: data
      description: |
        Parameters for creating a deployment gate.
      value:
        attributes:
          dry_run: {{ dry_run }}
          env: "{{ env }}"
          identifier: "{{ identifier }}"
          service: "{{ service }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_deployment_gate"
    values={[
        { label: 'update_deployment_gate', value: 'update_deployment_gate' }
    ]}
>
<TabItem value="update_deployment_gate">

Endpoint to update a deployment gate.

```sql
REPLACE datadog.software_delivery.deployment_gates
SET 
data = '{{ data }}'
WHERE 
id = '{{ id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment_gate"
    values={[
        { label: 'delete_deployment_gate', value: 'delete_deployment_gate' }
    ]}
>
<TabItem value="delete_deployment_gate">

Endpoint to delete a deployment gate. Rules associated with the gate are also deleted.

```sql
DELETE FROM datadog.software_delivery.deployment_gates
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
