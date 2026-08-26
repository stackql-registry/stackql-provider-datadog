--- 
title: waf_custom_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - waf_custom_rules
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

Creates, updates, deletes, gets or lists a <code>waf_custom_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="waf_custom_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.remote_config.waf_custom_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_security_waf_custom_rule"
    values={[
        { label: 'get_application_security_waf_custom_rule', value: 'get_application_security_waf_custom_rule' },
        { label: 'list_application_security_wafcustom_rules', value: 'list_application_security_wafcustom_rules' }
    ]}
>
<TabItem value="get_application_security_waf_custom_rule">

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
    <td>The ID of the custom rule. (example: 2857c47d-1e3a-4300-8b2f-dc24089c084b)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A WAF custom rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `custom_rule`. (custom_rule) (default: custom_rule, example: custom_rule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_security_wafcustom_rules">

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
    <td>The ID of the custom rule. (example: 2857c47d-1e3a-4300-8b2f-dc24089c084b)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A WAF custom rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `custom_rule`. (custom_rule) (default: custom_rule, example: custom_rule)</td>
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
    <td><a href="#get_application_security_waf_custom_rule"><CopyableCode code="get_application_security_waf_custom_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-custom_rule_id"><code>custom_rule_id</code></a></td>
    <td></td>
    <td>Retrieve a WAF custom rule by ID.</td>
</tr>
<tr>
    <td><a href="#list_application_security_wafcustom_rules"><CopyableCode code="list_application_security_wafcustom_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve a list of WAF custom rule.</td>
</tr>
<tr>
    <td><a href="#create_application_security_waf_custom_rule"><CopyableCode code="create_application_security_waf_custom_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new WAF custom rule with the given parameters.</td>
</tr>
<tr>
    <td><a href="#update_application_security_waf_custom_rule"><CopyableCode code="update_application_security_waf_custom_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-custom_rule_id"><code>custom_rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific WAF custom Rule.&lt;br /&gt;Returns the Custom Rule object when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_application_security_waf_custom_rule"><CopyableCode code="delete_application_security_waf_custom_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-custom_rule_id"><code>custom_rule_id</code></a></td>
    <td></td>
    <td>Delete a specific WAF custom rule.</td>
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
<tr id="parameter-custom_rule_id">
    <td><CopyableCode code="custom_rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the custom rule. (example: 3b5-v82-ns6)</td>
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
    defaultValue="get_application_security_waf_custom_rule"
    values={[
        { label: 'get_application_security_waf_custom_rule', value: 'get_application_security_waf_custom_rule' },
        { label: 'list_application_security_wafcustom_rules', value: 'list_application_security_wafcustom_rules' }
    ]}
>
<TabItem value="get_application_security_waf_custom_rule">

Retrieve a WAF custom rule by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.waf_custom_rules
WHERE custom_rule_id = '{{ custom_rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list_application_security_wafcustom_rules">

Retrieve a list of WAF custom rule.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.waf_custom_rules
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_security_waf_custom_rule"
    values={[
        { label: 'create_application_security_waf_custom_rule', value: 'create_application_security_waf_custom_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_security_waf_custom_rule">

Create a new WAF custom rule with the given parameters.

```sql
INSERT INTO datadog.remote_config.waf_custom_rules (
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
- name: waf_custom_rules
  props:
    - name: data
      description: |
        Object for a single WAF custom rule.
      value:
        attributes:
          action:
            action: "{{ action }}"
            parameters:
              location: "{{ location }}"
              status_code: {{ status_code }}
          blocking: {{ blocking }}
          conditions:
            - operator: "{{ operator }}"
              parameters:
                data: "{{ data }}"
                inputs:
                  - address: "{{ address }}"
                    key_path: "{{ key_path }}"
                list:
                  - "{{ list }}"
                options:
                  case_sensitive: {{ case_sensitive }}
                  min_length: {{ min_length }}
                regex: "{{ regex }}"
                type: "{{ type }}"
                value: "{{ value }}"
          enabled: {{ enabled }}
          name: "{{ name }}"
          path_glob: "{{ path_glob }}"
          scope:
            - env: "{{ env }}"
              service: "{{ service }}"
          tags:
            category: "{{ category }}"
            type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_application_security_waf_custom_rule"
    values={[
        { label: 'update_application_security_waf_custom_rule', value: 'update_application_security_waf_custom_rule' }
    ]}
>
<TabItem value="update_application_security_waf_custom_rule">

Update a specific WAF custom Rule.&lt;br /&gt;Returns the Custom Rule object when the request is successful.

```sql
REPLACE datadog.remote_config.waf_custom_rules
SET 
data = '{{ data }}'
WHERE 
custom_rule_id = '{{ custom_rule_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_security_waf_custom_rule"
    values={[
        { label: 'delete_application_security_waf_custom_rule', value: 'delete_application_security_waf_custom_rule' }
    ]}
>
<TabItem value="delete_application_security_waf_custom_rule">

Delete a specific WAF custom rule.

```sql
DELETE FROM datadog.remote_config.waf_custom_rules
WHERE custom_rule_id = '{{ custom_rule_id }}' --required
;
```
</TabItem>
</Tabs>
