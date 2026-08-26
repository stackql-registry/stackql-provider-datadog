--- 
title: deployment_gate_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_gate_rules
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

Creates, updates, deletes, gets or lists a <code>deployment_gate_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_gate_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.deployment_gate_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_rule"
    values={[
        { label: 'get_deployment_rule', value: 'get_deployment_rule' },
        { label: 'get_deployment_gate_rules', value: 'get_deployment_gate_rules' }
    ]}
>
<TabItem value="get_deployment_rule">

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
    <td>Unique identifier of the deployment rule. (example: 1111-2222-3333-4444-555566667777)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Basic information about a deployment rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Deployment rule resource type. (deployment_rule) (example: deployment_rule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_deployment_gate_rules">

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
    <td>Unique identifier of the deployment rule. (example: 1111-2222-3333-4444-555566667777)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the response for listing deployment rules.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>List deployment rule resource type. (list_deployment_rules) (example: list_deployment_rules)</td>
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
    <td><a href="#get_deployment_rule"><CopyableCode code="get_deployment_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gate_id"><code>gate_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Endpoint to get a deployment rule.</td>
</tr>
<tr>
    <td><a href="#get_deployment_gate_rules"><CopyableCode code="get_deployment_gate_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gate_id"><code>gate_id</code></a></td>
    <td></td>
    <td>Endpoint to get rules for a deployment gate.</td>
</tr>
<tr>
    <td><a href="#create_deployment_rule"><CopyableCode code="create_deployment_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gate_id"><code>gate_id</code></a></td>
    <td></td>
    <td>Endpoint to create a deployment rule. A gate for the rule must already exist.</td>
</tr>
<tr>
    <td><a href="#update_deployment_rule"><CopyableCode code="update_deployment_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-gate_id"><code>gate_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Endpoint to update a deployment rule.</td>
</tr>
<tr>
    <td><a href="#delete_deployment_rule"><CopyableCode code="delete_deployment_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gate_id"><code>gate_id</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Endpoint to delete a deployment rule.</td>
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
<tr id="parameter-gate_id">
    <td><CopyableCode code="gate_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment gate.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment rule.</td>
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
    defaultValue="get_deployment_rule"
    values={[
        { label: 'get_deployment_rule', value: 'get_deployment_rule' },
        { label: 'get_deployment_gate_rules', value: 'get_deployment_gate_rules' }
    ]}
>
<TabItem value="get_deployment_rule">

Endpoint to get a deployment rule.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.deployment_gate_rules
WHERE gate_id = '{{ gate_id }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="get_deployment_gate_rules">

Endpoint to get rules for a deployment gate.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.deployment_gate_rules
WHERE gate_id = '{{ gate_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_rule"
    values={[
        { label: 'create_deployment_rule', value: 'create_deployment_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_rule">

Endpoint to create a deployment rule. A gate for the rule must already exist.

```sql
INSERT INTO datadog.software_delivery.deployment_gate_rules (
data,
gate_id
)
SELECT 
'{{ data }}',
'{{ gate_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployment_gate_rules
  props:
    - name: gate_id
      value: "{{ gate_id }}"
      description: Required parameter for the deployment_gate_rules resource.
    - name: data
      description: |
        Parameters for creating a deployment rule.
      value:
        attributes:
          dry_run: {{ dry_run }}
          name: "{{ name }}"
          options:
            allowed_resources:
              - "{{ allowed_resources }}"
            duration: {{ duration }}
            excluded_resources:
              - "{{ excluded_resources }}"
            query: "{{ query }}"
          type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_deployment_rule"
    values={[
        { label: 'update_deployment_rule', value: 'update_deployment_rule' }
    ]}
>
<TabItem value="update_deployment_rule">

Endpoint to update a deployment rule.

```sql
REPLACE datadog.software_delivery.deployment_gate_rules
SET 
data = '{{ data }}'
WHERE 
gate_id = '{{ gate_id }}' --required
AND id = '{{ id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment_rule"
    values={[
        { label: 'delete_deployment_rule', value: 'delete_deployment_rule' }
    ]}
>
<TabItem value="delete_deployment_rule">

Endpoint to delete a deployment rule.

```sql
DELETE FROM datadog.software_delivery.deployment_gate_rules
WHERE gate_id = '{{ gate_id }}' --required
AND id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
