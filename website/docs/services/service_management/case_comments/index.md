--- 
title: case_comments
hide_title: false
hide_table_of_contents: false
keywords:
  - case_comments
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

Creates, updates, deletes, gets or lists a <code>case_comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_comments" /></td></tr>
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
    <td><a href="#comment_case"><CopyableCode code="comment_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Comment case</td>
</tr>
<tr>
    <td><a href="#update_case_comment"><CopyableCode code="update_case_comment" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-cell_id"><code>cell_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates the text content of an existing comment on a case timeline. The comment is identified by its cell ID.</td>
</tr>
<tr>
    <td><a href="#delete_case_comment"><CopyableCode code="delete_case_comment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-cell_id"><code>cell_id</code></a></td>
    <td></td>
    <td>Delete case comment</td>
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
<tr id="parameter-cell_id">
    <td><CopyableCode code="cell_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the timeline cell (comment) to update. (example: f98a5a5b-e0ff-45d4-b2f5-afe6e74de504)</td>
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
    defaultValue="comment_case"
    values={[
        { label: 'comment_case', value: 'comment_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="comment_case">

Comment case

```sql
INSERT INTO datadog.service_management.case_comments (
data,
case_id
)
SELECT 
'{{ data }}' /* required */,
'{{ case_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_comments
  props:
    - name: case_id
      value: "{{ case_id }}"
      description: Required parameter for the case_comments resource.
    - name: data
      description: |
        Case comment
      value:
        attributes:
          comment: "{{ comment }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_case_comment"
    values={[
        { label: 'update_case_comment', value: 'update_case_comment' }
    ]}
>
<TabItem value="update_case_comment">

Updates the text content of an existing comment on a case timeline. The comment is identified by its cell ID.

```sql
REPLACE datadog.service_management.case_comments
SET 
data = '{{ data }}'
WHERE 
case_id = '{{ case_id }}' --required
AND cell_id = '{{ cell_id }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_case_comment"
    values={[
        { label: 'delete_case_comment', value: 'delete_case_comment' }
    ]}
>
<TabItem value="delete_case_comment">

Delete case comment

```sql
DELETE FROM datadog.service_management.case_comments
WHERE case_id = '{{ case_id }}' --required
AND cell_id = '{{ cell_id }}' --required
;
```
</TabItem>
</Tabs>
