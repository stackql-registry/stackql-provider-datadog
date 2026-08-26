--- 
title: rum_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_configs
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rum_config"
    values={[
        { label: 'get_rum_config', value: 'get_rum_config' }
    ]}
>
<TabItem value="get_rum_config">

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
    <td>The organization ID associated with the RUM configuration. (example: 1234)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the RUM configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `rum_config`. (rum_config) (default: rum_config, example: rum_config)</td>
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
    <td><a href="#get_rum_config"><CopyableCode code="get_rum_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the RUM configuration for your organization.</td>
</tr>
<tr>
    <td><a href="#create_rum_config"><CopyableCode code="create_rum_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create the RUM configuration for your organization.&lt;br /&gt;Returns the RUM configuration object from the request body when the request is successful.</td>
</tr>
<tr>
    <td><a href="#update_rum_config"><CopyableCode code="update_rum_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the RUM configuration for your organization.&lt;br /&gt;Returns the RUM configuration object from the request body when the request is successful.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_rum_config"
    values={[
        { label: 'get_rum_config', value: 'get_rum_config' }
    ]}
>
<TabItem value="get_rum_config">

Get the RUM configuration for your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_configs
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rum_config"
    values={[
        { label: 'create_rum_config', value: 'create_rum_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rum_config">

Create the RUM configuration for your organization.&lt;br /&gt;Returns the RUM configuration object from the request body when the request is successful.

```sql
INSERT INTO datadog.digital_experience.rum_configs (
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
- name: rum_configs
  props:
    - name: data
      description: |
        Object describing the RUM configuration to create.
      value:
        attributes:
          enforced_application_tags: {{ enforced_application_tags }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rum_config"
    values={[
        { label: 'update_rum_config', value: 'update_rum_config' }
    ]}
>
<TabItem value="update_rum_config">

Update the RUM configuration for your organization.&lt;br /&gt;Returns the RUM configuration object from the request body when the request is successful.

```sql
UPDATE datadog.digital_experience.rum_configs
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
