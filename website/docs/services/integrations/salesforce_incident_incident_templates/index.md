--- 
title: salesforce_incident_incident_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - salesforce_incident_incident_templates
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

Creates, updates, deletes, gets or lists a <code>salesforce_incident_incident_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="salesforce_incident_incident_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.salesforce_incident_incident_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_incident_templates"
    values={[
        { label: 'get_incident_templates', value: 'get_incident_templates' }
    ]}
>
<TabItem value="get_incident_templates">

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
    <td>The ID of the Salesforce incident template. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Salesforce incident template attributes returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Salesforce incident template resource type. (salesforce-incidents-incident-template) (default: salesforce-incidents-incident-template, example: salesforce-incidents-incident-template)</td>
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
    <td><a href="#get_incident_templates"><CopyableCode code="get_incident_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all Salesforce incident templates configured for your organization.</td>
</tr>
<tr>
    <td><a href="#create_incident_template"><CopyableCode code="create_incident_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Salesforce incident template for your organization. Template&lt;br /&gt;names must be unique within an organization.</td>
</tr>
<tr>
    <td><a href="#update_incident_template"><CopyableCode code="update_incident_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_template_id"><code>incident_template_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a single Salesforce incident template in your organization.</td>
</tr>
<tr>
    <td><a href="#delete_incident_template"><CopyableCode code="delete_incident_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_template_id"><code>incident_template_id</code></a></td>
    <td></td>
    <td>Delete a single Salesforce incident template from your organization.</td>
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
<tr id="parameter-incident_template_id">
    <td><CopyableCode code="incident_template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Salesforce incident template.</td>
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
    defaultValue="get_incident_templates"
    values={[
        { label: 'get_incident_templates', value: 'get_incident_templates' }
    ]}
>
<TabItem value="get_incident_templates">

Get all Salesforce incident templates configured for your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.salesforce_incident_incident_templates
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_template"
    values={[
        { label: 'create_incident_template', value: 'create_incident_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_template">

Create a new Salesforce incident template for your organization. Template&lt;br /&gt;names must be unique within an organization.

```sql
INSERT INTO datadog.integrations.salesforce_incident_incident_templates (
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
- name: salesforce_incident_incident_templates
  props:
    - name: data
      description: |
        Salesforce incident template data for a create request.
      value:
        attributes:
          description: "{{ description }}"
          name: "{{ name }}"
          owner_id: "{{ owner_id }}"
          priority: "{{ priority }}"
          salesforce_org_id: "{{ salesforce_org_id }}"
          subject: "{{ subject }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_template"
    values={[
        { label: 'update_incident_template', value: 'update_incident_template' }
    ]}
>
<TabItem value="update_incident_template">

Update a single Salesforce incident template in your organization.

```sql
UPDATE datadog.integrations.salesforce_incident_incident_templates
SET 
data = '{{ data }}'
WHERE 
incident_template_id = '{{ incident_template_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_template"
    values={[
        { label: 'delete_incident_template', value: 'delete_incident_template' }
    ]}
>
<TabItem value="delete_incident_template">

Delete a single Salesforce incident template from your organization.

```sql
DELETE FROM datadog.integrations.salesforce_incident_incident_templates
WHERE incident_template_id = '{{ incident_template_id }}' --required
;
```
</TabItem>
</Tabs>
