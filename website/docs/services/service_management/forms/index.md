--- 
title: forms
hide_title: false
hide_table_of_contents: false
keywords:
  - forms
  - service_management
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

Creates, updates, deletes, gets or lists a <code>forms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="forms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.forms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_form"
    values={[
        { label: 'get_form', value: 'get_form' },
        { label: 'list_forms', value: 'list_forms' }
    ]}
>
<TabItem value="get_form">

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
    <td>The ID of the form. (example: 22f6006a-2302-4926-9396-d2dfcf7b0b34)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a form.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for a form. (forms) (default: forms, example: forms)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_forms">

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
    <td>The ID of the form. (example: 22f6006a-2302-4926-9396-d2dfcf7b0b34)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a form.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for a form. (forms) (default: forms, example: forms)</td>
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
    <td><a href="#get_form"><CopyableCode code="get_form" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-form_id"><code>form_id</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Get a form definition by its ID.</td>
</tr>
<tr>
    <td><a href="#list_forms"><CopyableCode code="list_forms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all forms for the authenticated user's organization.</td>
</tr>
<tr>
    <td><a href="#create_form"><CopyableCode code="create_form" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new form. The form is created in draft mode and must be published before it can be used. This also creates a new datastore for form responses and links it to the form.</td>
</tr>
<tr>
    <td><a href="#update_form"><CopyableCode code="update_form" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-form_id"><code>form_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a form's properties such as its name, description, or datastore configuration.</td>
</tr>
<tr>
    <td><a href="#delete_form"><CopyableCode code="delete_form" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-form_id"><code>form_id</code></a></td>
    <td></td>
    <td>Delete a form by its ID. This will also try to delete the associated datastore.</td>
</tr>
<tr>
    <td><a href="#create_and_publish_form"><CopyableCode code="create_and_publish_form" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new form and immediately publishes its initial version. This also creates a new datastore for form responses and links it to the form.</td>
</tr>
<tr>
    <td><a href="#clone_form"><CopyableCode code="clone_form" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-form_id"><code>form_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Clone an existing form. The clone is created in draft mode using the source form's latest version.</td>
</tr>
<tr>
    <td><a href="#publish_form"><CopyableCode code="publish_form" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-form_id"><code>form_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Publish a specific version of a form, making it available for submissions.</td>
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
<tr id="parameter-form_id">
    <td><CopyableCode code="form_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the form. (example: 22f6006a-2302-4926-9396-d2dfcf7b0b34)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the form to retrieve. Use 'latest' for the most recent draft, 'published' for the last published version, or a specific version number.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_form"
    values={[
        { label: 'get_form', value: 'get_form' },
        { label: 'list_forms', value: 'list_forms' }
    ]}
>
<TabItem value="get_form">

Get a form definition by its ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.forms
WHERE form_id = '{{ form_id }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_forms">

Get all forms for the authenticated user's organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.forms
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_form"
    values={[
        { label: 'create_form', value: 'create_form' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_form">

Create a new form. The form is created in draft mode and must be published before it can be used. This also creates a new datastore for form responses and links it to the form.

```sql
INSERT INTO datadog.service_management.forms (
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
- name: forms
  props:
    - name: data
      description: |
        The data for creating a form.
      value:
        attributes:
          anonymous: {{ anonymous }}
          data_definition:
            description: "{{ description }}"
            properties: "{{ properties }}"
            required:
              - "{{ required }}"
            title: "{{ title }}"
            type: "{{ type }}"
          description: "{{ description }}"
          idp_survey: {{ idp_survey }}
          name: "{{ name }}"
          single_response: {{ single_response }}
          ui_definition:
            ui:order:
              - "{{ ui:order }}"
            ui:theme:
              primaryColor: "{{ primaryColor }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_form"
    values={[
        { label: 'update_form', value: 'update_form' }
    ]}
>
<TabItem value="update_form">

Update a form's properties such as its name, description, or datastore configuration.

```sql
UPDATE datadog.service_management.forms
SET 
data = '{{ data }}'
WHERE 
form_id = '{{ form_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_form"
    values={[
        { label: 'delete_form', value: 'delete_form' }
    ]}
>
<TabItem value="delete_form">

Delete a form by its ID. This will also try to delete the associated datastore.

```sql
DELETE FROM datadog.service_management.forms
WHERE form_id = '{{ form_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="create_and_publish_form"
    values={[
        { label: 'create_and_publish_form', value: 'create_and_publish_form' },
        { label: 'clone_form', value: 'clone_form' },
        { label: 'publish_form', value: 'publish_form' }
    ]}
>
<TabItem value="create_and_publish_form">

Creates a new form and immediately publishes its initial version. This also creates a new datastore for form responses and links it to the form.

```sql
EXEC datadog.service_management.forms.create_and_publish_form 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="clone_form">

Clone an existing form. The clone is created in draft mode using the source form's latest version.

```sql
EXEC datadog.service_management.forms.clone_form 
@form_id='{{ form_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="publish_form">

Publish a specific version of a form, making it available for submissions.

```sql
EXEC datadog.service_management.forms.publish_form 
@form_id='{{ form_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
