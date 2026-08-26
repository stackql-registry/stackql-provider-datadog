--- 
title: finding_automation_due_date_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_automation_due_date_rules
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

Creates, updates, deletes, gets or lists a <code>finding_automation_due_date_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_automation_due_date_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.finding_automation_due_date_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_findings_automation_due_date_rule"
    values={[
        { label: 'get_security_findings_automation_due_date_rule', value: 'get_security_findings_automation_due_date_rule' },
        { label: 'list_security_findings_automation_due_date_rules', value: 'list_security_findings_automation_due_date_rules' }
    ]}
>
<TabItem value="get_security_findings_automation_due_date_rule">

Successfully retrieved the due date rule

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
    <td>The ID of the due date rule. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a due date rule returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for due date rules. (due_date_rules) (example: due_date_rules)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_findings_automation_due_date_rules">

Successfully retrieved the list of due date rules

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
    <td>The ID of the due date rule. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a due date rule returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for due date rules. (due_date_rules) (example: due_date_rules)</td>
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
    <td><a href="#get_security_findings_automation_due_date_rule"><CopyableCode code="get_security_findings_automation_due_date_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Get the details of a due date rule by ID.</td>
</tr>
<tr>
    <td><a href="#list_security_findings_automation_due_date_rules"><CopyableCode code="list_security_findings_automation_due_date_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>Get all due date rules for the current organization.</td>
</tr>
<tr>
    <td><a href="#create_security_findings_automation_due_date_rule"><CopyableCode code="create_security_findings_automation_due_date_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new due date rule for the current organization.</td>
</tr>
<tr>
    <td><a href="#update_security_findings_automation_due_date_rule"><CopyableCode code="update_security_findings_automation_due_date_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing due date rule by ID.</td>
</tr>
<tr>
    <td><a href="#delete_security_findings_automation_due_date_rule"><CopyableCode code="delete_security_findings_automation_due_date_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Delete an existing due date rule by ID.</td>
</tr>
<tr>
    <td><a href="#reorder_security_findings_automation_due_date_rules"><CopyableCode code="reorder_security_findings_automation_due_date_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Reorder the list of due date rules for the current organization.</td>
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
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the due date rule.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of rules per page. Maximum is 1000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_findings_automation_due_date_rule"
    values={[
        { label: 'get_security_findings_automation_due_date_rule', value: 'get_security_findings_automation_due_date_rule' },
        { label: 'list_security_findings_automation_due_date_rules', value: 'list_security_findings_automation_due_date_rules' }
    ]}
>
<TabItem value="get_security_findings_automation_due_date_rule">

Get the details of a due date rule by ID.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.finding_automation_due_date_rules
WHERE rule_id = '{{ rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_findings_automation_due_date_rules">

Get all due date rules for the current organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.finding_automation_due_date_rules
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_findings_automation_due_date_rule"
    values={[
        { label: 'create_security_findings_automation_due_date_rule', value: 'create_security_findings_automation_due_date_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_findings_automation_due_date_rule">

Create a new due date rule for the current organization.

```sql
INSERT INTO datadog.security.finding_automation_due_date_rules (
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
- name: finding_automation_due_date_rules
  props:
    - name: data
      description: |
        The data object for a due date rule create or update request.
      value:
        attributes:
          action:
            due_days_per_severity:
              - due_in_days: {{ due_in_days }}
                severity: "{{ severity }}"
            due_from: "{{ due_from }}"
            reason_description: "{{ reason_description }}"
          enabled: {{ enabled }}
          name: "{{ name }}"
          rule:
            finding_types:
              - "{{ finding_types }}"
            query: "{{ query }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_security_findings_automation_due_date_rule"
    values={[
        { label: 'update_security_findings_automation_due_date_rule', value: 'update_security_findings_automation_due_date_rule' }
    ]}
>
<TabItem value="update_security_findings_automation_due_date_rule">

Update an existing due date rule by ID.

```sql
REPLACE datadog.security.finding_automation_due_date_rules
SET 
data = '{{ data }}'
WHERE 
rule_id = '{{ rule_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_findings_automation_due_date_rule"
    values={[
        { label: 'delete_security_findings_automation_due_date_rule', value: 'delete_security_findings_automation_due_date_rule' }
    ]}
>
<TabItem value="delete_security_findings_automation_due_date_rule">

Delete an existing due date rule by ID.

```sql
DELETE FROM datadog.security.finding_automation_due_date_rules
WHERE rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reorder_security_findings_automation_due_date_rules"
    values={[
        { label: 'reorder_security_findings_automation_due_date_rules', value: 'reorder_security_findings_automation_due_date_rules' }
    ]}
>
<TabItem value="reorder_security_findings_automation_due_date_rules">

Reorder the list of due date rules for the current organization.

```sql
EXEC datadog.security.finding_automation_due_date_rules.reorder_security_findings_automation_due_date_rules 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
