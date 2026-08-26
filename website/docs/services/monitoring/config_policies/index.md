--- 
title: config_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - config_policies
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

Creates, updates, deletes, gets or lists a <code>config_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="config_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.config_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor_config_policy"
    values={[
        { label: 'get_monitor_config_policy', value: 'get_monitor_config_policy' },
        { label: 'list_monitor_config_policies', value: 'list_monitor_config_policies' }
    ]}
>
<TabItem value="get_monitor_config_policy">

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
    <td>ID of this monitor configuration policy. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Policy and policy type for a monitor configuration policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Monitor configuration policy resource type. (monitor-config-policy) (default: monitor-config-policy, example: monitor-config-policy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitor_config_policies">

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
    <td>ID of this monitor configuration policy. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Policy and policy type for a monitor configuration policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Monitor configuration policy resource type. (monitor-config-policy) (default: monitor-config-policy, example: monitor-config-policy)</td>
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
    <td><a href="#get_monitor_config_policy"><CopyableCode code="get_monitor_config_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Get a monitor configuration policy by `policy_id`.</td>
</tr>
<tr>
    <td><a href="#list_monitor_config_policies"><CopyableCode code="list_monitor_config_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all monitor configuration policies.</td>
</tr>
<tr>
    <td><a href="#create_monitor_config_policy"><CopyableCode code="create_monitor_config_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a monitor configuration policy.</td>
</tr>
<tr>
    <td><a href="#update_monitor_config_policy"><CopyableCode code="update_monitor_config_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Edit a monitor configuration policy.</td>
</tr>
<tr>
    <td><a href="#delete_monitor_config_policy"><CopyableCode code="delete_monitor_config_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Delete a monitor configuration policy.</td>
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
    <td>ID of the monitor configuration policy.</td>
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
    defaultValue="get_monitor_config_policy"
    values={[
        { label: 'get_monitor_config_policy', value: 'get_monitor_config_policy' },
        { label: 'list_monitor_config_policies', value: 'list_monitor_config_policies' }
    ]}
>
<TabItem value="get_monitor_config_policy">

Get a monitor configuration policy by `policy_id`.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.config_policies
WHERE policy_id = '{{ policy_id }}' -- required
;
```
</TabItem>
<TabItem value="list_monitor_config_policies">

Get all monitor configuration policies.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.config_policies
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor_config_policy"
    values={[
        { label: 'create_monitor_config_policy', value: 'create_monitor_config_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor_config_policy">

Create a monitor configuration policy.

```sql
INSERT INTO datadog.monitoring.config_policies (
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
- name: config_policies
  props:
    - name: data
      description: |
        A monitor configuration policy data.
      value:
        attributes:
          policy:
            tag_key: "{{ tag_key }}"
            tag_key_required: {{ tag_key_required }}
            valid_tag_values:
              - "{{ valid_tag_values }}"
          policy_type: "{{ policy_type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitor_config_policy"
    values={[
        { label: 'update_monitor_config_policy', value: 'update_monitor_config_policy' }
    ]}
>
<TabItem value="update_monitor_config_policy">

Edit a monitor configuration policy.

```sql
UPDATE datadog.monitoring.config_policies
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
    defaultValue="delete_monitor_config_policy"
    values={[
        { label: 'delete_monitor_config_policy', value: 'delete_monitor_config_policy' }
    ]}
>
<TabItem value="delete_monitor_config_policy">

Delete a monitor configuration policy.

```sql
DELETE FROM datadog.monitoring.config_policies
WHERE policy_id = '{{ policy_id }}' --required
;
```
</TabItem>
</Tabs>
