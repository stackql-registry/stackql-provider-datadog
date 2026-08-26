--- 
title: finding_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_cases
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

Creates, updates, deletes, gets or lists a <code>finding_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.finding_cases" /></td></tr>
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
    <td><a href="#create_cases"><CopyableCode code="create_cases" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create cases for security findings.&lt;br /&gt;You can create up to 50 cases per request and associate up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the newly created case.</td>
</tr>
<tr>
    <td><a href="#attach_case"><CopyableCode code="attach_case" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a></td>
    <td></td>
    <td>Attach security findings to a case.&lt;br /&gt;You can attach up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the specified case.</td>
</tr>
<tr>
    <td><a href="#detach_case"><CopyableCode code="detach_case" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Detach security findings from their case.&lt;br /&gt;This operation dissociates security findings from their associated cases without deleting the cases themselves. You can detach security findings from multiple different cases in a single request, with a limit of 50 security findings per request. Security findings that are not currently attached to any case will be ignored.</td>
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
    <td>Unique identifier of the case to attach security findings to</td>
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
    defaultValue="create_cases"
    values={[
        { label: 'create_cases', value: 'create_cases' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cases">

Create cases for security findings.&lt;br /&gt;You can create up to 50 cases per request and associate up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the newly created case.

```sql
INSERT INTO datadog.security.finding_cases (
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
- name: finding_cases
  props:
    - name: data
      description: |
        Array of case creation request data objects.
      value:
        - attributes:
            assignee_id: "{{ assignee_id }}"
            description: "{{ description }}"
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
    defaultValue="attach_case"
    values={[
        { label: 'attach_case', value: 'attach_case' }
    ]}
>
<TabItem value="attach_case">

Attach security findings to a case.&lt;br /&gt;You can attach up to 50 security findings per case. Security findings that are already attached to another case will be detached from their previous case and attached to the specified case.

```sql
UPDATE datadog.security.finding_cases
SET 
data = '{{ data }}'
WHERE 
case_id = '{{ case_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="detach_case"
    values={[
        { label: 'detach_case', value: 'detach_case' }
    ]}
>
<TabItem value="detach_case">

Detach security findings from their case.&lt;br /&gt;This operation dissociates security findings from their associated cases without deleting the cases themselves. You can detach security findings from multiple different cases in a single request, with a limit of 50 security findings per request. Security findings that are not currently attached to any case will be ignored.

```sql
DELETE FROM datadog.security.finding_cases
;
```
</TabItem>
</Tabs>
