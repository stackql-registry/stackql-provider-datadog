--- 
title: csm_threats_agent_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_threats_agent_rules
  - remote_config
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

Creates, updates, deletes, gets or lists a <code>csm_threats_agent_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_threats_agent_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.remote_config.csm_threats_agent_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_csmthreats_agent_rule"
    values={[
        { label: 'get_csmthreats_agent_rule', value: 'get_csmthreats_agent_rule' },
        { label: 'list_csmthreats_agent_rules', value: 'list_csmthreats_agent_rules' }
    ]}
>
<TabItem value="get_csmthreats_agent_rule">

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
    <td>The ID of the Agent rule (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A Cloud Workload Security Agent rule returned by the API</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource, must always be `agent_rule` (agent_rule) (default: agent_rule, example: agent_rule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_csmthreats_agent_rules">

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
    <td>The ID of the Agent rule (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A Cloud Workload Security Agent rule returned by the API</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource, must always be `agent_rule` (agent_rule) (default: agent_rule, example: agent_rule)</td>
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
    <td><a href="#get_csmthreats_agent_rule"><CopyableCode code="get_csmthreats_agent_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_rule_id"><code>agent_rule_id</code></a></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td>Get the details of a specific Workload Protection agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#list_csmthreats_agent_rules"><CopyableCode code="list_csmthreats_agent_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td>Get the list of Workload Protection agent rules.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#create_csmthreats_agent_rule"><CopyableCode code="create_csmthreats_agent_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Workload Protection agent rule with the given parameters.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#update_csmthreats_agent_rule"><CopyableCode code="update_csmthreats_agent_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_rule_id"><code>agent_rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td>Update a specific Workload Protection Agent rule.&lt;br /&gt;Returns the agent rule object when the request is successful.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#delete_csmthreats_agent_rule"><CopyableCode code="delete_csmthreats_agent_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_rule_id"><code>agent_rule_id</code></a></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td>Delete a specific Workload Protection agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
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
<tr id="parameter-agent_rule_id">
    <td><CopyableCode code="agent_rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Agent rule (example: 3b5-v82-ns6)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-policy_id">
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Agent policy (example: 6517fcc1-cec7-4394-a655-8d6e9d085255)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_csmthreats_agent_rule"
    values={[
        { label: 'get_csmthreats_agent_rule', value: 'get_csmthreats_agent_rule' },
        { label: 'list_csmthreats_agent_rules', value: 'list_csmthreats_agent_rules' }
    ]}
>
<TabItem value="get_csmthreats_agent_rule">

Get the details of a specific Workload Protection agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.csm_threats_agent_rules
WHERE agent_rule_id = '{{ agent_rule_id }}' -- required
AND policy_id = '{{ policy_id }}'
;
```
</TabItem>
<TabItem value="list_csmthreats_agent_rules">

Get the list of Workload Protection agent rules.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.csm_threats_agent_rules
WHERE policy_id = '{{ policy_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_csmthreats_agent_rule"
    values={[
        { label: 'create_csmthreats_agent_rule', value: 'create_csmthreats_agent_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_csmthreats_agent_rule">

Create a new Workload Protection agent rule with the given parameters.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
INSERT INTO datadog.remote_config.csm_threats_agent_rules (
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
- name: csm_threats_agent_rules
  props:
    - name: data
      description: |
        Object for a single Agent rule
      value:
        attributes:
          actions:
            - filter: "{{ filter }}"
              hash:
                field: "{{ field }}"
              kill:
                signal: "{{ signal }}"
              metadata:
                image_tag: "{{ image_tag }}"
                service: "{{ service }}"
                short_image: "{{ short_image }}"
              set:
                append: {{ append }}
                default_value: "{{ default_value }}"
                expression: "{{ expression }}"
                field: "{{ field }}"
                inherited: {{ inherited }}
                name: "{{ name }}"
                scope: "{{ scope }}"
                size: {{ size }}
                ttl: {{ ttl }}
                value: "{{ value }}"
          agent_version: "{{ agent_version }}"
          blocking:
            - "{{ blocking }}"
          description: "{{ description }}"
          disabled:
            - "{{ disabled }}"
          enabled: {{ enabled }}
          expression: "{{ expression }}"
          filters:
            - "{{ filters }}"
          monitoring:
            - "{{ monitoring }}"
          name: "{{ name }}"
          policy_id: "{{ policy_id }}"
          product_tags:
            - "{{ product_tags }}"
          silent: {{ silent }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_csmthreats_agent_rule"
    values={[
        { label: 'update_csmthreats_agent_rule', value: 'update_csmthreats_agent_rule' }
    ]}
>
<TabItem value="update_csmthreats_agent_rule">

Update a specific Workload Protection Agent rule.&lt;br /&gt;Returns the agent rule object when the request is successful.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
UPDATE datadog.remote_config.csm_threats_agent_rules
SET 
data = '{{ data }}'
WHERE 
agent_rule_id = '{{ agent_rule_id }}' --required
AND data = '{{ data }}' --required
AND policy_id = '{{ policy_id}}'
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_csmthreats_agent_rule"
    values={[
        { label: 'delete_csmthreats_agent_rule', value: 'delete_csmthreats_agent_rule' }
    ]}
>
<TabItem value="delete_csmthreats_agent_rule">

Delete a specific Workload Protection agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
DELETE FROM datadog.remote_config.csm_threats_agent_rules
WHERE agent_rule_id = '{{ agent_rule_id }}' --required
AND policy_id = '{{ policy_id }}'
;
```
</TabItem>
</Tabs>
