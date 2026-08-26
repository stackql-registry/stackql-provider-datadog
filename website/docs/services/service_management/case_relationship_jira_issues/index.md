--- 
title: case_relationship_jira_issues
hide_title: false
hide_table_of_contents: false
keywords:
  - case_relationship_jira_issues
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

Creates, updates, deletes, gets or lists a <code>case_relationship_jira_issues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_relationship_jira_issues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_relationship_jira_issues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_case_jira_issue"><CopyableCode code="create_case_jira_issue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new Jira issue and link it to a case</td>
</tr>
<tr>
    <td><a href="#link_jira_issue_to_case"><CopyableCode code="link_jira_issue_to_case" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Link an existing Jira issue to a case</td>
</tr>
<tr>
    <td><a href="#unlink_jira_issue"><CopyableCode code="unlink_jira_issue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a></td>
    <td></td>
    <td>Remove the link between a Jira issue and a case</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Case's UUID or key (example: f98a5a5b-e0ff-45d4-b2f5-afe6e74de504)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_case_jira_issue"
    values={[
        { label: 'create_case_jira_issue', value: 'create_case_jira_issue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case_jira_issue">

Create a new Jira issue and link it to a case

```sql
INSERT INTO datadog.service_management.case_relationship_jira_issues (
data,
case_id
)
SELECT 
'{{ data }}' /* required */,
'{{ case_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_relationship_jira_issues
  props:
    - name: case_id
      value: "{{ case_id }}"
      description: Required parameter for the case_relationship_jira_issues resource.
    - name: data
      description: |
        Jira issue creation data
      value:
        attributes:
          fields: "{{ fields }}"
          issue_type_id: "{{ issue_type_id }}"
          jira_account_id: "{{ jira_account_id }}"
          project_id: "{{ project_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="link_jira_issue_to_case"
    values={[
        { label: 'link_jira_issue_to_case', value: 'link_jira_issue_to_case' }
    ]}
>
<TabItem value="link_jira_issue_to_case">

Link an existing Jira issue to a case

```sql
UPDATE datadog.service_management.case_relationship_jira_issues
SET 
data = '{{ data }}'
WHERE 
case_id = '{{ case_id }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="unlink_jira_issue"
    values={[
        { label: 'unlink_jira_issue', value: 'unlink_jira_issue' }
    ]}
>
<TabItem value="unlink_jira_issue">

Remove the link between a Jira issue and a case

```sql
DELETE FROM datadog.service_management.case_relationship_jira_issues
WHERE case_id = '{{ case_id }}' --required
;
```
</TabItem>
</Tabs>
