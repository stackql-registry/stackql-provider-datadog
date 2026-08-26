--- 
title: csm_threats_agent_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_threats_agent_policies
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

Creates, updates, deletes, gets or lists a <code>csm_threats_agent_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_threats_agent_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.remote_config.csm_threats_agent_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_csmthreats_agent_policy"
    values={[
        { label: 'get_csmthreats_agent_policy', value: 'get_csmthreats_agent_policy' },
        { label: 'list_csmthreats_agent_policies', value: 'list_csmthreats_agent_policies' }
    ]}
>
<TabItem value="get_csmthreats_agent_policy">

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
    <td>The ID of the Agent policy (example: 6517fcc1-cec7-4394-a655-8d6e9d085255)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A Cloud Workload Security Agent policy returned by the API</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource, must always be `policy` (policy) (default: policy, example: policy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_csmthreats_agent_policies">

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
    <td>The ID of the Agent policy (example: 6517fcc1-cec7-4394-a655-8d6e9d085255)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A Cloud Workload Security Agent policy returned by the API</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource, must always be `policy` (policy) (default: policy, example: policy)</td>
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
    <td><a href="#get_csmthreats_agent_policy"><CopyableCode code="get_csmthreats_agent_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Get the details of a specific Workload Protection policy.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#list_csmthreats_agent_policies"><CopyableCode code="list_csmthreats_agent_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of Workload Protection policies.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#create_csmthreats_agent_policy"><CopyableCode code="create_csmthreats_agent_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Workload Protection policy with the given parameters.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#update_csmthreats_agent_policy"><CopyableCode code="update_csmthreats_agent_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific Workload Protection policy.&lt;br /&gt;Returns the policy object when the request is successful.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
</tr>
<tr>
    <td><a href="#delete_csmthreats_agent_policy"><CopyableCode code="delete_csmthreats_agent_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Delete a specific Workload Protection policy.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.</td>
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
    <td>The ID of the Agent policy (example: 6517fcc1-cec7-4394-a655-8d6e9d085255)</td>
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
    defaultValue="get_csmthreats_agent_policy"
    values={[
        { label: 'get_csmthreats_agent_policy', value: 'get_csmthreats_agent_policy' },
        { label: 'list_csmthreats_agent_policies', value: 'list_csmthreats_agent_policies' }
    ]}
>
<TabItem value="get_csmthreats_agent_policy">

Get the details of a specific Workload Protection policy.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.csm_threats_agent_policies
WHERE policy_id = '{{ policy_id }}' -- required
;
```
</TabItem>
<TabItem value="list_csmthreats_agent_policies">

Get the list of Workload Protection policies.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.csm_threats_agent_policies
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_csmthreats_agent_policy"
    values={[
        { label: 'create_csmthreats_agent_policy', value: 'create_csmthreats_agent_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_csmthreats_agent_policy">

Create a new Workload Protection policy with the given parameters.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
INSERT INTO datadog.remote_config.csm_threats_agent_policies (
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
- name: csm_threats_agent_policies
  props:
    - name: data
      description: |
        Object for a single Agent rule
      value:
        attributes:
          description: "{{ description }}"
          enabled: {{ enabled }}
          hostTags:
            - "{{ hostTags }}"
          hostTagsLists:
            - "{{ hostTagsLists }}"
          name: "{{ name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_csmthreats_agent_policy"
    values={[
        { label: 'update_csmthreats_agent_policy', value: 'update_csmthreats_agent_policy' }
    ]}
>
<TabItem value="update_csmthreats_agent_policy">

Update a specific Workload Protection policy.&lt;br /&gt;Returns the policy object when the request is successful.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
UPDATE datadog.remote_config.csm_threats_agent_policies
SET 
data = '{{ data }}'
WHERE 
policy_id = '{{ policy_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_csmthreats_agent_policy"
    values={[
        { label: 'delete_csmthreats_agent_policy', value: 'delete_csmthreats_agent_policy' }
    ]}
>
<TabItem value="delete_csmthreats_agent_policy">

Delete a specific Workload Protection policy.&lt;br /&gt;&lt;br /&gt;**Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.

```sql
DELETE FROM datadog.remote_config.csm_threats_agent_policies
WHERE policy_id = '{{ policy_id }}' --required
;
```
</TabItem>
</Tabs>
