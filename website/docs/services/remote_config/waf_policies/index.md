--- 
title: waf_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - waf_policies
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

Creates, updates, deletes, gets or lists a <code>waf_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="waf_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.remote_config.waf_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_security_waf_policy"
    values={[
        { label: 'get_application_security_waf_policy', value: 'get_application_security_waf_policy' },
        { label: 'list_application_security_wafpolicies', value: 'list_application_security_wafpolicies' }
    ]}
>
<TabItem value="get_application_security_waf_policy">

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
    <td>The ID of the policy. (example: 2857c47d-1e3a-4300-8b2f-dc24089c084b)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A WAF policy.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with the WAF policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `policy`. (policy) (default: policy, example: policy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_security_wafpolicies">

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
    <td>The ID of the policy. (example: 2857c47d-1e3a-4300-8b2f-dc24089c084b)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A WAF policy.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with the WAF policy.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `policy`. (policy) (default: policy, example: policy)</td>
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
    <td><a href="#get_application_security_waf_policy"><CopyableCode code="get_application_security_waf_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Retrieve a WAF policy by ID.</td>
</tr>
<tr>
    <td><a href="#list_application_security_wafpolicies"><CopyableCode code="list_application_security_wafpolicies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve a list of WAF policies.</td>
</tr>
<tr>
    <td><a href="#create_application_security_waf_policy"><CopyableCode code="create_application_security_waf_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new WAF policy.</td>
</tr>
<tr>
    <td><a href="#update_application_security_waf_policy"><CopyableCode code="update_application_security_waf_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific WAF policy.&lt;br /&gt;Returns the policy object when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_application_security_waf_policy"><CopyableCode code="delete_application_security_waf_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Delete a specific WAF policy.</td>
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
    <td>The ID of the policy. (example: recommended)</td>
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
    defaultValue="get_application_security_waf_policy"
    values={[
        { label: 'get_application_security_waf_policy', value: 'get_application_security_waf_policy' },
        { label: 'list_application_security_wafpolicies', value: 'list_application_security_wafpolicies' }
    ]}
>
<TabItem value="get_application_security_waf_policy">

Retrieve a WAF policy by ID.

```sql
SELECT
id,
attributes,
meta,
type
FROM datadog.remote_config.waf_policies
WHERE policy_id = '{{ policy_id }}' -- required
;
```
</TabItem>
<TabItem value="list_application_security_wafpolicies">

Retrieve a list of WAF policies.

```sql
SELECT
id,
attributes,
meta,
type
FROM datadog.remote_config.waf_policies
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_security_waf_policy"
    values={[
        { label: 'create_application_security_waf_policy', value: 'create_application_security_waf_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_security_waf_policy">

Create a new WAF policy.

```sql
INSERT INTO datadog.remote_config.waf_policies (
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
- name: waf_policies
  props:
    - name: data
      description: |
        Object for a single WAF policy.
      value:
        attributes:
          basedOn: "{{ basedOn }}"
          description: "{{ description }}"
          isDefault: {{ isDefault }}
          name: "{{ name }}"
          protectionPresets:
            - "{{ protectionPresets }}"
          rules:
            - blocking: {{ blocking }}
              enabled: {{ enabled }}
              extended_data_collection: {{ extended_data_collection }}
              id: "{{ id }}"
          rulesets:
            - blocking: {{ blocking }}
              enabled: {{ enabled }}
              id: "{{ id }}"
          scope:
            - env: "{{ env }}"
              service: "{{ service }}"
          version: {{ version }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_application_security_waf_policy"
    values={[
        { label: 'update_application_security_waf_policy', value: 'update_application_security_waf_policy' }
    ]}
>
<TabItem value="update_application_security_waf_policy">

Update a specific WAF policy.&lt;br /&gt;Returns the policy object when the request is successful.

```sql
REPLACE datadog.remote_config.waf_policies
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
    defaultValue="delete_application_security_waf_policy"
    values={[
        { label: 'delete_application_security_waf_policy', value: 'delete_application_security_waf_policy' }
    ]}
>
<TabItem value="delete_application_security_waf_policy">

Delete a specific WAF policy.

```sql
DELETE FROM datadog.remote_config.waf_policies
WHERE policy_id = '{{ policy_id }}' --required
;
```
</TabItem>
</Tabs>
