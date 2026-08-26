--- 
title: webhook_custom_variables
hide_title: false
hide_table_of_contents: false
keywords:
  - webhook_custom_variables
  - integrations
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

Creates, updates, deletes, gets or lists a <code>webhook_custom_variables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhook_custom_variables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.webhook_custom_variables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_webhooks_integration_custom_variable"
    values={[
        { label: 'get_webhooks_integration_custom_variable', value: 'get_webhooks_integration_custom_variable' }
    ]}
>
<TabItem value="get_webhooks_integration_custom_variable">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the variable. It corresponds with <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>. It must only contains upper-case characters, integers or underscores. (example: CUSTOM_VARIABLE_NAME)</td>
</tr>
<tr>
    <td><CopyableCode code="is_secret" /></td>
    <td><code>boolean</code></td>
    <td>Make custom variable is secret or not. If the custom variable is secret, the value is not returned in the response payload.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Value of the custom variable. It won't be returned if the variable is secret. (example: CUSTOM_VARIABLE_VALUE)</td>
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
    <td><a href="#get_webhooks_integration_custom_variable"><CopyableCode code="get_webhooks_integration_custom_variable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-custom_variable_name"><code>custom_variable_name</code></a></td>
    <td></td>
    <td>Shows the content of the custom variable with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.&lt;br /&gt;&lt;br /&gt;If the custom variable is secret, the value does not return in the&lt;br /&gt;response payload.</td>
</tr>
<tr>
    <td><a href="#create_webhooks_integration_custom_variable"><CopyableCode code="create_webhooks_integration_custom_variable" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a>, <a href="#parameter-is_secret"><code>is_secret</code></a></td>
    <td></td>
    <td>Creates an endpoint with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.</td>
</tr>
<tr>
    <td><a href="#update_webhooks_integration_custom_variable"><CopyableCode code="update_webhooks_integration_custom_variable" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-custom_variable_name"><code>custom_variable_name</code></a></td>
    <td></td>
    <td>Updates the endpoint with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.</td>
</tr>
<tr>
    <td><a href="#delete_webhooks_integration_custom_variable"><CopyableCode code="delete_webhooks_integration_custom_variable" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-custom_variable_name"><code>custom_variable_name</code></a></td>
    <td></td>
    <td>Deletes the endpoint with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.</td>
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
<tr id="parameter-custom_variable_name">
    <td><CopyableCode code="custom_variable_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom variable.</td>
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
    defaultValue="get_webhooks_integration_custom_variable"
    values={[
        { label: 'get_webhooks_integration_custom_variable', value: 'get_webhooks_integration_custom_variable' }
    ]}
>
<TabItem value="get_webhooks_integration_custom_variable">

Shows the content of the custom variable with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.&lt;br /&gt;&lt;br /&gt;If the custom variable is secret, the value does not return in the&lt;br /&gt;response payload.

```sql
SELECT
name,
is_secret,
value
FROM datadog.integrations.webhook_custom_variables
WHERE custom_variable_name = '{{ custom_variable_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_webhooks_integration_custom_variable"
    values={[
        { label: 'create_webhooks_integration_custom_variable', value: 'create_webhooks_integration_custom_variable' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_webhooks_integration_custom_variable">

Creates an endpoint with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.

```sql
INSERT INTO datadog.integrations.webhook_custom_variables (
is_secret,
name,
value
)
SELECT 
{{ is_secret }} /* required */,
'{{ name }}' /* required */,
'{{ value }}' /* required */
RETURNING
name,
is_secret,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: webhook_custom_variables
  props:
    - name: is_secret
      value: {{ is_secret }}
      description: |
        Make custom variable is secret or not.
        If the custom variable is secret, the value is not returned in the response payload.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the variable. It corresponds with \`<CUSTOM_VARIABLE_NAME>\`.
    - name: value
      value: "{{ value }}"
      description: |
        Value of the custom variable.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_webhooks_integration_custom_variable"
    values={[
        { label: 'update_webhooks_integration_custom_variable', value: 'update_webhooks_integration_custom_variable' }
    ]}
>
<TabItem value="update_webhooks_integration_custom_variable">

Updates the endpoint with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.

```sql
REPLACE datadog.integrations.webhook_custom_variables
SET 
is_secret = {{ is_secret }},
name = '{{ name }}',
value = '{{ value }}'
WHERE 
custom_variable_name = '{{ custom_variable_name }}' --required
RETURNING
name,
is_secret,
value;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_webhooks_integration_custom_variable"
    values={[
        { label: 'delete_webhooks_integration_custom_variable', value: 'delete_webhooks_integration_custom_variable' }
    ]}
>
<TabItem value="delete_webhooks_integration_custom_variable">

Deletes the endpoint with the name <code>&lt;CUSTOM_VARIABLE_NAME&gt;</code>.

```sql
DELETE FROM datadog.integrations.webhook_custom_variables
WHERE custom_variable_name = '{{ custom_variable_name }}' --required
;
```
</TabItem>
</Tabs>
