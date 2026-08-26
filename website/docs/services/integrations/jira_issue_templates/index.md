--- 
title: jira_issue_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - jira_issue_templates
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

Creates, updates, deletes, gets or lists a <code>jira_issue_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jira_issue_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.jira_issue_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_jira_issue_template"
    values={[
        { label: 'get_jira_issue_template', value: 'get_jira_issue_template' },
        { label: 'list_jira_issue_templates', value: 'list_jira_issue_templates' }
    ]}
>
<TabItem value="get_jira_issue_template">

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
    <td>Unique identifier for the Jira issue template (example: 65b3341b-0680-47f9-a6d4-134db45c603e)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Jira issue template</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a Jira issue template</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type identifier for Jira issue template resources (jira-issue-template) (example: jira-issue-template)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_jira_issue_templates">

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
    <td>Unique identifier for the Jira issue template (example: 65b3341b-0680-47f9-a6d4-134db45c603e)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Jira issue template</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a Jira issue template</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type identifier for Jira issue template resources (jira-issue-template) (example: jira-issue-template)</td>
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
    <td><a href="#get_jira_issue_template"><CopyableCode code="get_jira_issue_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-issue_template_id"><code>issue_template_id</code></a></td>
    <td></td>
    <td>Get a Jira issue template by ID.</td>
</tr>
<tr>
    <td><a href="#list_jira_issue_templates"><CopyableCode code="list_jira_issue_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all Jira issue templates for the organization.</td>
</tr>
<tr>
    <td><a href="#create_jira_issue_template"><CopyableCode code="create_jira_issue_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new Jira issue template.</td>
</tr>
<tr>
    <td><a href="#update_jira_issue_template"><CopyableCode code="update_jira_issue_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-issue_template_id"><code>issue_template_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a Jira issue template by ID.</td>
</tr>
<tr>
    <td><a href="#delete_jira_issue_template"><CopyableCode code="delete_jira_issue_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-issue_template_id"><code>issue_template_id</code></a></td>
    <td></td>
    <td>Delete a Jira issue template by ID.</td>
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
<tr id="parameter-issue_template_id">
    <td><CopyableCode code="issue_template_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the Jira issue template to delete (example: 65b3341b-0680-47f9-a6d4-134db45c603e)</td>
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
    defaultValue="get_jira_issue_template"
    values={[
        { label: 'get_jira_issue_template', value: 'get_jira_issue_template' },
        { label: 'list_jira_issue_templates', value: 'list_jira_issue_templates' }
    ]}
>
<TabItem value="get_jira_issue_template">

Get a Jira issue template by ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.integrations.jira_issue_templates
WHERE issue_template_id = '{{ issue_template_id }}' -- required
;
```
</TabItem>
<TabItem value="list_jira_issue_templates">

Get all Jira issue templates for the organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.integrations.jira_issue_templates
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_jira_issue_template"
    values={[
        { label: 'create_jira_issue_template', value: 'create_jira_issue_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_jira_issue_template">

Create a new Jira issue template.

```sql
INSERT INTO datadog.integrations.jira_issue_templates (
data
)
SELECT 
'{{ data }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jira_issue_templates
  props:
    - name: data
      description: |
        Data object for creating a Jira issue template
      value:
        attributes:
          fields: "{{ fields }}"
          issue_type_id: "{{ issue_type_id }}"
          jira-account:
            id: "{{ id }}"
          name: "{{ name }}"
          project_id: "{{ project_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_jira_issue_template"
    values={[
        { label: 'update_jira_issue_template', value: 'update_jira_issue_template' }
    ]}
>
<TabItem value="update_jira_issue_template">

Update a Jira issue template by ID.

```sql
UPDATE datadog.integrations.jira_issue_templates
SET 
data = '{{ data }}'
WHERE 
issue_template_id = '{{ issue_template_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_jira_issue_template"
    values={[
        { label: 'delete_jira_issue_template', value: 'delete_jira_issue_template' }
    ]}
>
<TabItem value="delete_jira_issue_template">

Delete a Jira issue template by ID.

```sql
DELETE FROM datadog.integrations.jira_issue_templates
WHERE issue_template_id = '{{ issue_template_id }}' --required
;
```
</TabItem>
</Tabs>
