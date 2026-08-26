--- 
title: servicenow_handles
hide_title: false
hide_table_of_contents: false
keywords:
  - servicenow_handles
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

Creates, updates, deletes, gets or lists a <code>servicenow_handles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servicenow_handles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.servicenow_handles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_now_template"
    values={[
        { label: 'get_service_now_template', value: 'get_service_now_template' },
        { label: 'list_service_now_templates', value: 'list_service_now_templates' }
    ]}
>
<TabItem value="get_service_now_template">

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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier for the ServiceNow template (example: 65b3341b-0680-47f9-a6d4-134db45c603e)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a ServiceNow template</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type identifier for ServiceNow template resources (servicenow_templates) (example: servicenow_templates)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_now_templates">

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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier for the ServiceNow template (example: 65b3341b-0680-47f9-a6d4-134db45c603e)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a ServiceNow template</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type identifier for ServiceNow template resources (servicenow_templates) (example: servicenow_templates)</td>
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
    <td><a href="#get_service_now_template"><CopyableCode code="get_service_now_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a></td>
    <td></td>
    <td>Get a ServiceNow template by ID.</td>
</tr>
<tr>
    <td><a href="#list_service_now_templates"><CopyableCode code="list_service_now_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all ServiceNow templates for the organization.</td>
</tr>
<tr>
    <td><a href="#create_service_now_template"><CopyableCode code="create_service_now_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new ServiceNow template.</td>
</tr>
<tr>
    <td><a href="#update_service_now_template"><CopyableCode code="update_service_now_template" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a ServiceNow template by ID.</td>
</tr>
<tr>
    <td><a href="#delete_service_now_template"><CopyableCode code="delete_service_now_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a></td>
    <td></td>
    <td>Delete a ServiceNow template by ID.</td>
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
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the ServiceNow template to delete (example: 65b3341b-0680-47f9-a6d4-134db45c603e)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_now_template"
    values={[
        { label: 'get_service_now_template', value: 'get_service_now_template' },
        { label: 'list_service_now_templates', value: 'list_service_now_templates' }
    ]}
>
<TabItem value="get_service_now_template">

Get a ServiceNow template by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.servicenow_handles
WHERE template_id = '{{ template_id }}' -- required
;
```
</TabItem>
<TabItem value="list_service_now_templates">

Get all ServiceNow templates for the organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.servicenow_handles
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_now_template"
    values={[
        { label: 'create_service_now_template', value: 'create_service_now_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_now_template">

Create a new ServiceNow template.

```sql
INSERT INTO datadog.integrations.servicenow_handles (
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
- name: servicenow_handles
  props:
    - name: data
      description: |
        Data object for creating a ServiceNow template
      value:
        attributes:
          assignment_group_id: "{{ assignment_group_id }}"
          business_service_id: "{{ business_service_id }}"
          fields_mapping: "{{ fields_mapping }}"
          handle_name: "{{ handle_name }}"
          instance_id: "{{ instance_id }}"
          servicenow_tablename: "{{ servicenow_tablename }}"
          user_id: "{{ user_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_service_now_template"
    values={[
        { label: 'update_service_now_template', value: 'update_service_now_template' }
    ]}
>
<TabItem value="update_service_now_template">

Update a ServiceNow template by ID.

```sql
REPLACE datadog.integrations.servicenow_handles
SET 
data = '{{ data }}'
WHERE 
template_id = '{{ template_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_now_template"
    values={[
        { label: 'delete_service_now_template', value: 'delete_service_now_template' }
    ]}
>
<TabItem value="delete_service_now_template">

Delete a ServiceNow template by ID.

```sql
DELETE FROM datadog.integrations.servicenow_handles
WHERE template_id = '{{ template_id }}' --required
;
```
</TabItem>
</Tabs>
