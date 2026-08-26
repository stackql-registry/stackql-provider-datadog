--- 
title: on_call_escalation_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - on_call_escalation_policies
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

Creates, updates, deletes, gets or lists an <code>on_call_escalation_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_call_escalation_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.on_call_escalation_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_on_call_escalation_policy"
    values={[
        { label: 'get_on_call_escalation_policy', value: 'get_on_call_escalation_policy' }
    ]}
>
<TabItem value="get_on_call_escalation_policy">

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
    <td>Specifies the unique identifier of the escalation policy. (example: ab000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Defines the main attributes of an escalation policy, such as its name and behavior on policy end.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Represents the relationships for an escalation policy, including references to steps and teams.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates that the resource is of type `policies`. (policies) (default: policies, example: policies)</td>
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
    <td><a href="#get_on_call_escalation_policy"><CopyableCode code="get_on_call_escalation_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Get an On-Call escalation policy</td>
</tr>
<tr>
    <td><a href="#create_on_call_escalation_policy"><CopyableCode code="create_on_call_escalation_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Create a new On-Call escalation policy</td>
</tr>
<tr>
    <td><a href="#update_on_call_escalation_policy"><CopyableCode code="update_on_call_escalation_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Update an On-Call escalation policy</td>
</tr>
<tr>
    <td><a href="#delete_on_call_escalation_policy"><CopyableCode code="delete_on_call_escalation_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Delete an On-Call escalation policy</td>
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
<tr id="parameter-policy_id">
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the escalation policy</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_on_call_escalation_policy"
    values={[
        { label: 'get_on_call_escalation_policy', value: 'get_on_call_escalation_policy' }
    ]}
>
<TabItem value="get_on_call_escalation_policy">

Get an On-Call escalation policy

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.on_call_escalation_policies
WHERE policy_id = '{{ policy_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_on_call_escalation_policy"
    values={[
        { label: 'create_on_call_escalation_policy', value: 'create_on_call_escalation_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_on_call_escalation_policy">

Create a new On-Call escalation policy

```sql
INSERT INTO datadog.service_management.on_call_escalation_policies (
data,
include
)
SELECT 
'{{ data }}' /* required */,
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: on_call_escalation_policies
  props:
    - name: data
      description: |
        Represents the data for creating an escalation policy, including its attributes, relationships, and resource type.
      value:
        attributes:
          name: "{{ name }}"
          resolve_page_on_policy_end: {{ resolve_page_on_policy_end }}
          retries: {{ retries }}
          steps:
            - assignment: "{{ assignment }}"
              escalate_after_seconds: {{ escalate_after_seconds }}
              targets: "{{ targets }}"
        relationships:
          teams:
            data:
              - id: "{{ id }}"
                type: "{{ type }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of included relationships to be returned. Allowed values: \`teams\`, \`steps\`, \`steps.targets\`.
      description: Comma-separated list of included relationships to be returned. Allowed values: \`teams\`, \`steps\`, \`steps.targets\`.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_on_call_escalation_policy"
    values={[
        { label: 'update_on_call_escalation_policy', value: 'update_on_call_escalation_policy' }
    ]}
>
<TabItem value="update_on_call_escalation_policy">

Update an On-Call escalation policy

```sql
REPLACE datadog.service_management.on_call_escalation_policies
SET 
data = '{{ data }}'
WHERE 
policy_id = '{{ policy_id }}' --required
AND data = '{{ data }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_on_call_escalation_policy"
    values={[
        { label: 'delete_on_call_escalation_policy', value: 'delete_on_call_escalation_policy' }
    ]}
>
<TabItem value="delete_on_call_escalation_policy">

Delete an On-Call escalation policy

```sql
DELETE FROM datadog.service_management.on_call_escalation_policies
WHERE policy_id = '{{ policy_id }}' --required
;
```
</TabItem>
</Tabs>
