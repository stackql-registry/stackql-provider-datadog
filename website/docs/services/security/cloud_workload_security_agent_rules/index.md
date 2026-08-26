--- 
title: cloud_workload_security_agent_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_workload_security_agent_rules
  - security
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

Creates, updates, deletes, gets or lists a <code>cloud_workload_security_agent_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_workload_security_agent_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.cloud_workload_security_agent_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_workload_security_agent_rule"
    values={[
        { label: 'get_cloud_workload_security_agent_rule', value: 'get_cloud_workload_security_agent_rule' },
        { label: 'list_cloud_workload_security_agent_rules', value: 'list_cloud_workload_security_agent_rules' }
    ]}
>
<TabItem value="get_cloud_workload_security_agent_rule">

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
<TabItem value="list_cloud_workload_security_agent_rules">

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
    <td><a href="#get_cloud_workload_security_agent_rule"><CopyableCode code="get_cloud_workload_security_agent_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_rule_id"><code>agent_rule_id</code></a></td>
    <td></td>
    <td>Get the details of a specific agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.</td>
</tr>
<tr>
    <td><a href="#list_cloud_workload_security_agent_rules"><CopyableCode code="list_cloud_workload_security_agent_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of agent rules.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.</td>
</tr>
<tr>
    <td><a href="#create_cloud_workload_security_agent_rule"><CopyableCode code="create_cloud_workload_security_agent_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new agent rule with the given parameters.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.</td>
</tr>
<tr>
    <td><a href="#update_cloud_workload_security_agent_rule"><CopyableCode code="update_cloud_workload_security_agent_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_rule_id"><code>agent_rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific agent rule.&lt;br /&gt;Returns the agent rule object when the request is successful.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_workload_security_agent_rule"><CopyableCode code="delete_cloud_workload_security_agent_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_rule_id"><code>agent_rule_id</code></a></td>
    <td></td>
    <td>Delete a specific agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cloud_workload_security_agent_rule"
    values={[
        { label: 'get_cloud_workload_security_agent_rule', value: 'get_cloud_workload_security_agent_rule' },
        { label: 'list_cloud_workload_security_agent_rules', value: 'list_cloud_workload_security_agent_rules' }
    ]}
>
<TabItem value="get_cloud_workload_security_agent_rule">

Get the details of a specific agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.cloud_workload_security_agent_rules
WHERE agent_rule_id = '{{ agent_rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_workload_security_agent_rules">

Get the list of agent rules.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.cloud_workload_security_agent_rules
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_workload_security_agent_rule"
    values={[
        { label: 'create_cloud_workload_security_agent_rule', value: 'create_cloud_workload_security_agent_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_workload_security_agent_rule">

Create a new agent rule with the given parameters.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.

```sql
INSERT INTO datadog.security.cloud_workload_security_agent_rules (
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
- name: cloud_workload_security_agent_rules
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
    defaultValue="update_cloud_workload_security_agent_rule"
    values={[
        { label: 'update_cloud_workload_security_agent_rule', value: 'update_cloud_workload_security_agent_rule' }
    ]}
>
<TabItem value="update_cloud_workload_security_agent_rule">

Update a specific agent rule.&lt;br /&gt;Returns the agent rule object when the request is successful.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.

```sql
UPDATE datadog.security.cloud_workload_security_agent_rules
SET 
data = '{{ data }}'
WHERE 
agent_rule_id = '{{ agent_rule_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_workload_security_agent_rule"
    values={[
        { label: 'delete_cloud_workload_security_agent_rule', value: 'delete_cloud_workload_security_agent_rule' }
    ]}
>
<TabItem value="delete_cloud_workload_security_agent_rule">

Delete a specific agent rule.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint should only be used for the Government (US1-FED) site.

```sql
DELETE FROM datadog.security.cloud_workload_security_agent_rules
WHERE agent_rule_id = '{{ agent_rule_id }}' --required
;
```
</TabItem>
</Tabs>
