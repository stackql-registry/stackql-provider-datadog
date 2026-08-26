--- 
title: incident_postmortem_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_postmortem_templates
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

Creates, updates, deletes, gets or lists an <code>incident_postmortem_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_postmortem_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_postmortem_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_postmortem_template"
    values={[
        { label: 'get_incident_postmortem_template', value: 'get_incident_postmortem_template' },
        { label: 'list_incident_postmortem_templates', value: 'list_incident_postmortem_templates' }
    ]}
>
<TabItem value="get_incident_postmortem_template">

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
    <td>The ID of the template. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a postmortem template returned in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a postmortem template returned in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Postmortem template resource type. (postmortem_templates, postmortem_template) (example: postmortem_templates)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_incident_postmortem_templates">

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
    <td>The ID of the template. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a postmortem template returned in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a postmortem template returned in a response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Postmortem template resource type. (postmortem_templates, postmortem_template) (example: postmortem_templates)</td>
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
    <td><a href="#get_incident_postmortem_template"><CopyableCode code="get_incident_postmortem_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a></td>
    <td></td>
    <td>Retrieve details of a specific postmortem template.</td>
</tr>
<tr>
    <td><a href="#list_incident_postmortem_templates"><CopyableCode code="list_incident_postmortem_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[incident-type]"><code>filter[incident-type]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Retrieve a list of all postmortem templates for incidents.</td>
</tr>
<tr>
    <td><a href="#create_incident_postmortem_template"><CopyableCode code="create_incident_postmortem_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new postmortem template for incidents.</td>
</tr>
<tr>
    <td><a href="#update_incident_postmortem_template"><CopyableCode code="update_incident_postmortem_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing postmortem template.</td>
</tr>
<tr>
    <td><a href="#delete_incident_postmortem_template"><CopyableCode code="delete_incident_postmortem_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a></td>
    <td></td>
    <td>Delete a postmortem template.</td>
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
    <td><code>string</code></td>
    <td>The ID of the postmortem template. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr id="parameter-filter[incident-type]">
    <td><CopyableCode code="filter[incident-type]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter postmortem templates by the associated incident type ID.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The attribute to sort results by. Prefix with `-` for descending order.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_incident_postmortem_template"
    values={[
        { label: 'get_incident_postmortem_template', value: 'get_incident_postmortem_template' },
        { label: 'list_incident_postmortem_templates', value: 'list_incident_postmortem_templates' }
    ]}
>
<TabItem value="get_incident_postmortem_template">

Retrieve details of a specific postmortem template.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_postmortem_templates
WHERE template_id = '{{ template_id }}' -- required
;
```
</TabItem>
<TabItem value="list_incident_postmortem_templates">

Retrieve a list of all postmortem templates for incidents.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_postmortem_templates
WHERE filter[incident-type] = '{{ filter[incident-type] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_postmortem_template"
    values={[
        { label: 'create_incident_postmortem_template', value: 'create_incident_postmortem_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_postmortem_template">

Create a new postmortem template for incidents.

```sql
INSERT INTO datadog.service_management.incident_postmortem_templates (
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
- name: incident_postmortem_templates
  props:
    - name: data
      description: |
        Data object for creating or updating a postmortem template.
      value:
        attributes:
          confluence_postmortem_settings:
            account_id: "{{ account_id }}"
            parent_id: "{{ parent_id }}"
            space_id: "{{ space_id }}"
          content: "{{ content }}"
          google_docs_postmortem_settings:
            account_id: "{{ account_id }}"
            parent_folder_id: "{{ parent_folder_id }}"
          is_default: "{{ is_default }}"
          location: "{{ location }}"
          name: "{{ name }}"
        id: "{{ id }}"
        relationships:
          incident_type:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_postmortem_template"
    values={[
        { label: 'update_incident_postmortem_template', value: 'update_incident_postmortem_template' }
    ]}
>
<TabItem value="update_incident_postmortem_template">

Update an existing postmortem template.

```sql
UPDATE datadog.service_management.incident_postmortem_templates
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
    defaultValue="delete_incident_postmortem_template"
    values={[
        { label: 'delete_incident_postmortem_template', value: 'delete_incident_postmortem_template' }
    ]}
>
<TabItem value="delete_incident_postmortem_template">

Delete a postmortem template.

```sql
DELETE FROM datadog.service_management.incident_postmortem_templates
WHERE template_id = '{{ template_id }}' --required
;
```
</TabItem>
</Tabs>
