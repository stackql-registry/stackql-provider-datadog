--- 
title: finding_linear_issues
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_linear_issues
  - security
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

Creates, updates, deletes, gets or lists a <code>finding_linear_issues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_linear_issues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.finding_linear_issues" /></td></tr>
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
    <td><a href="#create_linear_issues"><CopyableCode code="create_linear_issues" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create Linear issues for security findings.&lt;br /&gt;This operation creates a case in Datadog and a Linear issue linked to that case for bidirectional sync between Datadog and Linear. You can create up to 50 Linear issues per request and associate up to 50 security findings per Linear issue. Security findings that are already attached to another Linear issue will be detached from their previous Linear issue and attached to the newly created Linear issue.</td>
</tr>
<tr>
    <td><a href="#attach_linear_issue"><CopyableCode code="attach_linear_issue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Attach security findings to a Linear issue by providing the Linear issue URL.&lt;br /&gt;You can attach up to 50 security findings per Linear issue. If the Linear issue is not linked to any case, this operation will create a case for the security findings and link the Linear issue to the newly created case. Security findings that are already attached to another Linear issue will be detached from their previous Linear issue and attached to the specified Linear issue.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_linear_issues"
    values={[
        { label: 'create_linear_issues', value: 'create_linear_issues' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_linear_issues">

Create Linear issues for security findings.&lt;br /&gt;This operation creates a case in Datadog and a Linear issue linked to that case for bidirectional sync between Datadog and Linear. You can create up to 50 Linear issues per request and associate up to 50 security findings per Linear issue. Security findings that are already attached to another Linear issue will be detached from their previous Linear issue and attached to the newly created Linear issue.

```sql
INSERT INTO datadog.security.finding_linear_issues (
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
- name: finding_linear_issues
  props:
    - name: data
      description: |
        Array of Linear issue creation request data objects.
      value:
        - attributes:
            assignee_id: "{{ assignee_id }}"
            description: "{{ description }}"
            label_ids:
              - "{{ label_ids }}"
            linear_project_id: "{{ linear_project_id }}"
            priority: "{{ priority }}"
            title: "{{ title }}"
          relationships:
            findings:
              data:
                - id: "{{ id }}"
                  type: "{{ type }}"
            project:
              data:
                id: "{{ id }}"
                type: "{{ type }}"
          type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_linear_issue"
    values={[
        { label: 'attach_linear_issue', value: 'attach_linear_issue' }
    ]}
>
<TabItem value="attach_linear_issue">

Attach security findings to a Linear issue by providing the Linear issue URL.&lt;br /&gt;You can attach up to 50 security findings per Linear issue. If the Linear issue is not linked to any case, this operation will create a case for the security findings and link the Linear issue to the newly created case. Security findings that are already attached to another Linear issue will be detached from their previous Linear issue and attached to the specified Linear issue.

```sql
UPDATE datadog.security.finding_linear_issues
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
