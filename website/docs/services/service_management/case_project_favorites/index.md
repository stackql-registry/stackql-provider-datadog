--- 
title: case_project_favorites
hide_title: false
hide_table_of_contents: false
keywords:
  - case_project_favorites
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

Creates, updates, deletes, gets or lists a <code>case_project_favorites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_project_favorites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_project_favorites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_user_case_project_favorites"
    values={[
        { label: 'list_user_case_project_favorites', value: 'list_user_case_project_favorites' }
    ]}
>
<TabItem value="list_user_case_project_favorites">

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
    <td>The UUID of the favorited project. (example: e555e290-ed65-49bd-ae18-8acbfcf18db7)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for project favorites. (project_favorite) (default: project_favorite, example: project_favorite)</td>
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
    <td><a href="#list_user_case_project_favorites"><CopyableCode code="list_user_case_project_favorites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns the list of case projects that the current authenticated user has marked as favorites.</td>
</tr>
<tr>
    <td><a href="#favorite_case_project"><CopyableCode code="favorite_case_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Marks a case project as a favorite for the current authenticated user.</td>
</tr>
<tr>
    <td><a href="#unfavorite_case_project"><CopyableCode code="unfavorite_case_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Removes a case project from the current user's favorites list.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project UUID. (example: e555e290-ed65-49bd-ae18-8acbfcf18db7)</td>
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
    defaultValue="list_user_case_project_favorites"
    values={[
        { label: 'list_user_case_project_favorites', value: 'list_user_case_project_favorites' }
    ]}
>
<TabItem value="list_user_case_project_favorites">

Returns the list of case projects that the current authenticated user has marked as favorites.

```sql
SELECT
id,
type
FROM datadog.service_management.case_project_favorites
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="favorite_case_project"
    values={[
        { label: 'favorite_case_project', value: 'favorite_case_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="favorite_case_project">

Marks a case project as a favorite for the current authenticated user.

```sql
INSERT INTO datadog.service_management.case_project_favorites (
project_id
)
SELECT 
'{{ project_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_project_favorites
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the case_project_favorites resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="unfavorite_case_project"
    values={[
        { label: 'unfavorite_case_project', value: 'unfavorite_case_project' }
    ]}
>
<TabItem value="unfavorite_case_project">

Removes a case project from the current user's favorites list.

```sql
DELETE FROM datadog.service_management.case_project_favorites
WHERE project_id = '{{ project_id }}' --required
;
```
</TabItem>
</Tabs>
