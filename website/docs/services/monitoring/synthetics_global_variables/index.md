--- 
title: synthetics_global_variables
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_global_variables
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

Creates, updates, deletes, gets or lists a <code>synthetics_global_variables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_global_variables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_global_variables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_global_variable"
    values={[
        { label: 'get_global_variable', value: 'get_global_variable' },
        { label: 'list_global_variables', value: 'list_global_variables' }
    ]}
>
<TabItem value="get_global_variable">

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
    <td>Unique identifier of the global variable.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the global variable. Unique across Synthetic global variables. (example: MY_VARIABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="parse_test_public_id" /></td>
    <td><code>string</code></td>
    <td>A Synthetic test ID to use as a test to generate the variable value. (example: abc-def-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the global variable.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the global variable. (example: Example description)</td>
</tr>
<tr>
    <td><CopyableCode code="is_fido" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the global variable is a FIDO variable.</td>
</tr>
<tr>
    <td><CopyableCode code="is_totp" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the global variable is a TOTP/MFA variable.</td>
</tr>
<tr>
    <td><CopyableCode code="parse_test_options" /></td>
    <td><code>object</code></td>
    <td>Parser options to use for retrieving a Synthetic global variable from a Synthetic test. Used in conjunction with `parse_test_public_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags of the global variable.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>Value of the global variable.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_global_variables">

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
    <td>Unique identifier of the global variable.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the global variable. Unique across Synthetic global variables. (example: MY_VARIABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="parse_test_public_id" /></td>
    <td><code>string</code></td>
    <td>A Synthetic test ID to use as a test to generate the variable value. (example: abc-def-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the global variable.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the global variable. (example: Example description)</td>
</tr>
<tr>
    <td><CopyableCode code="is_fido" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the global variable is a FIDO variable.</td>
</tr>
<tr>
    <td><CopyableCode code="is_totp" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the global variable is a TOTP/MFA variable.</td>
</tr>
<tr>
    <td><CopyableCode code="parse_test_options" /></td>
    <td><code>object</code></td>
    <td>Parser options to use for retrieving a Synthetic global variable from a Synthetic test. Used in conjunction with `parse_test_public_id`.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags of the global variable.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>object</code></td>
    <td>Value of the global variable.</td>
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
    <td><a href="#get_global_variable"><CopyableCode code="get_global_variable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-variable_id"><code>variable_id</code></a></td>
    <td></td>
    <td>Get the detailed configuration of a global variable.</td>
</tr>
<tr>
    <td><a href="#list_global_variables"><CopyableCode code="list_global_variables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of all Synthetic global variables.</td>
</tr>
<tr>
    <td><a href="#create_global_variable"><CopyableCode code="create_global_variable" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Create a Synthetic global variable.</td>
</tr>
<tr>
    <td><a href="#edit_global_variable"><CopyableCode code="edit_global_variable" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-variable_id"><code>variable_id</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Edit a Synthetic global variable.</td>
</tr>
<tr>
    <td><a href="#delete_global_variable"><CopyableCode code="delete_global_variable" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-variable_id"><code>variable_id</code></a></td>
    <td></td>
    <td>Delete a Synthetic global variable.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-variable_id">
    <td><CopyableCode code="variable_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global variable.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_global_variable"
    values={[
        { label: 'get_global_variable', value: 'get_global_variable' },
        { label: 'list_global_variables', value: 'list_global_variables' }
    ]}
>
<TabItem value="get_global_variable">

Get the detailed configuration of a global variable.

```sql
SELECT
id,
name,
parse_test_public_id,
attributes,
description,
is_fido,
is_totp,
parse_test_options,
tags,
value
FROM datadog.monitoring.synthetics_global_variables
WHERE variable_id = '{{ variable_id }}' -- required
;
```
</TabItem>
<TabItem value="list_global_variables">

Get the list of all Synthetic global variables.

```sql
SELECT
id,
name,
parse_test_public_id,
attributes,
description,
is_fido,
is_totp,
parse_test_options,
tags,
value
FROM datadog.monitoring.synthetics_global_variables
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_global_variable"
    values={[
        { label: 'create_global_variable', value: 'create_global_variable' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_global_variable">

Create a Synthetic global variable.

```sql
INSERT INTO datadog.monitoring.synthetics_global_variables (
attributes,
description,
is_fido,
is_totp,
name,
parse_test_options,
parse_test_public_id,
tags,
value
)
SELECT 
'{{ attributes }}',
'{{ description }}' /* required */,
{{ is_fido }},
{{ is_totp }},
'{{ name }}' /* required */,
'{{ parse_test_options }}',
'{{ parse_test_public_id }}',
'{{ tags }}' /* required */,
'{{ value }}'
RETURNING
id,
name,
parse_test_public_id,
attributes,
description,
is_fido,
is_totp,
parse_test_options,
tags,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: synthetics_global_variables
  props:
    - name: attributes
      description: |
        Attributes of the global variable.
      value:
        restricted_roles:
          - "{{ restricted_roles }}"
    - name: description
      value: "{{ description }}"
      description: |
        Description of the global variable.
    - name: is_fido
      value: {{ is_fido }}
      description: |
        Determines if the global variable is a FIDO variable.
    - name: is_totp
      value: {{ is_totp }}
      description: |
        Determines if the global variable is a TOTP/MFA variable.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the global variable. Unique across Synthetic global variables.
    - name: parse_test_options
      description: |
        Parser options to use for retrieving a Synthetic global variable from a Synthetic test. Used in conjunction with \`parse_test_public_id\`.
      value:
        field: "{{ field }}"
        localVariableName: "{{ localVariableName }}"
        parser:
          type: "{{ type }}"
          value: "{{ value }}"
        type: "{{ type }}"
    - name: parse_test_public_id
      value: "{{ parse_test_public_id }}"
      description: |
        A Synthetic test ID to use as a test to generate the variable value.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        Tags of the global variable.
    - name: value
      description: |
        Value of the global variable.
      value:
        options:
          totp_parameters:
            digits: {{ digits }}
            refresh_interval: {{ refresh_interval }}
        secure: {{ secure }}
        value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="edit_global_variable"
    values={[
        { label: 'edit_global_variable', value: 'edit_global_variable' }
    ]}
>
<TabItem value="edit_global_variable">

Edit a Synthetic global variable.

```sql
REPLACE datadog.monitoring.synthetics_global_variables
SET 
attributes = '{{ attributes }}',
description = '{{ description }}',
is_fido = {{ is_fido }},
is_totp = {{ is_totp }},
name = '{{ name }}',
parse_test_options = '{{ parse_test_options }}',
parse_test_public_id = '{{ parse_test_public_id }}',
tags = '{{ tags }}',
value = '{{ value }}'
WHERE 
variable_id = '{{ variable_id }}' --required
AND description = '{{ description }}' --required
AND name = '{{ name }}' --required
AND tags = '{{ tags }}' --required
RETURNING
id,
name,
parse_test_public_id,
attributes,
description,
is_fido,
is_totp,
parse_test_options,
tags,
value;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_global_variable"
    values={[
        { label: 'delete_global_variable', value: 'delete_global_variable' }
    ]}
>
<TabItem value="delete_global_variable">

Delete a Synthetic global variable.

```sql
DELETE FROM datadog.monitoring.synthetics_global_variables
WHERE variable_id = '{{ variable_id }}' --required
;
```
</TabItem>
</Tabs>
