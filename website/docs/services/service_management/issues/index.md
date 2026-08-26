--- 
title: issues
hide_title: false
hide_table_of_contents: false
keywords:
  - issues
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

Creates, updates, deletes, gets or lists an <code>issues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.issues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_issue"
    values={[
        { label: 'get_issue', value: 'get_issue' }
    ]}
>
<TabItem value="get_issue">

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
    <td>Issue identifier. (example: c1726a66-1f64-11ee-b338-da7ad0900002)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Object containing the information of an issue.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationship between the issue and an assignee, case and/or teams.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object. (issue) (example: issue)</td>
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
    <td><a href="#get_issue"><CopyableCode code="get_issue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-issue_id"><code>issue_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieve the full details for a specific error tracking issue, including attributes and relationships.</td>
</tr>
<tr>
    <td><a href="#search_issues"><CopyableCode code="search_issues" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Search issues endpoint allows you to programmatically search for issues within your organization. This endpoint returns a list of issues that match a given search query, following the event search syntax. The search results are limited to a maximum of 100 issues per request.</td>
</tr>
<tr>
    <td><a href="#update_issue_assignee"><CopyableCode code="update_issue_assignee" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-issue_id"><code>issue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the assignee of an issue by `issue_id`.</td>
</tr>
<tr>
    <td><a href="#update_issue_state"><CopyableCode code="update_issue_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-issue_id"><code>issue_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the state of an issue by `issue_id`. Use this endpoint to move an issue between states such as `OPEN`, `RESOLVED`, or `IGNORED`.</td>
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
<tr id="parameter-issue_id">
    <td><CopyableCode code="issue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the issue. (example: c1726a66-1f64-11ee-b338-da7ad0900002)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>array</code></td>
    <td>Comma-separated list of relationship objects that should be included in the response. Possible values are `issue`, `issue.assignee`, `issue.case`, and `issue.team_owners`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_issue"
    values={[
        { label: 'get_issue', value: 'get_issue' }
    ]}
>
<TabItem value="get_issue">

Retrieve the full details for a specific error tracking issue, including attributes and relationships.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.issues
WHERE issue_id = '{{ issue_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="search_issues"
    values={[
        { label: 'search_issues', value: 'search_issues' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="search_issues">

Search issues endpoint allows you to programmatically search for issues within your organization. This endpoint returns a list of issues that match a given search query, following the event search syntax. The search results are limited to a maximum of 100 issues per request.

```sql
INSERT INTO datadog.service_management.issues (
data,
include
)
SELECT 
'{{ data }}' /* required */,
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: issues
  props:
    - name: data
      description: |
        Search issues request.
      value:
        attributes:
          assignee_ids:
            - "{{ assignee_ids }}"
          from: {{ from }}
          order_by: "{{ order_by }}"
          persona: "{{ persona }}"
          query: "{{ query }}"
          states:
            - "{{ states }}"
          team_ids:
            - "{{ team_ids }}"
          to: {{ to }}
          track: "{{ track }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of relationship objects that should be included in the response. Possible values are \`issue\`, \`issue.assignee\`, \`issue.case\`, and \`issue.team_owners\`.
      description: Comma-separated list of relationship objects that should be included in the response. Possible values are \`issue\`, \`issue.assignee\`, \`issue.case\`, and \`issue.team_owners\`.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_issue_assignee"
    values={[
        { label: 'update_issue_assignee', value: 'update_issue_assignee' },
        { label: 'update_issue_state', value: 'update_issue_state' }
    ]}
>
<TabItem value="update_issue_assignee">

Update the assignee of an issue by `issue_id`.

```sql
EXEC datadog.service_management.issues.update_issue_assignee 
@issue_id='{{ issue_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="update_issue_state">

Update the state of an issue by `issue_id`. Use this endpoint to move an issue between states such as `OPEN`, `RESOLVED`, or `IGNORED`.

```sql
EXEC datadog.service_management.issues.update_issue_state 
@issue_id='{{ issue_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
