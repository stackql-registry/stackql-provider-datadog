--- 
title: static_analysis_ai_rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_ai_rulesets
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

Creates, updates, deletes, gets or lists a <code>static_analysis_ai_rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_ai_rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_ai_rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ai_custom_ruleset"
    values={[
        { label: 'get_ai_custom_ruleset', value: 'get_ai_custom_ruleset' },
        { label: 'list_ai_custom_rulesets', value: 'list_ai_custom_rulesets' }
    ]}
>
<TabItem value="get_ai_custom_ruleset">

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
    <td>The ruleset identifier. (example: my-ai-ruleset)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Response attributes of an AI custom ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AI custom ruleset resource type. (ai_ruleset) (example: ai_ruleset)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ai_custom_rulesets">

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
    <td>The ruleset identifier. (example: my-ai-ruleset)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Response attributes of an AI custom ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AI custom ruleset resource type. (ai_ruleset) (example: ai_ruleset)</td>
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
    <td><a href="#get_ai_custom_ruleset"><CopyableCode code="get_ai_custom_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Get an AI custom ruleset by name.</td>
</tr>
<tr>
    <td><a href="#list_ai_custom_rulesets"><CopyableCode code="list_ai_custom_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>Get all AI custom rulesets for the authenticated organization.</td>
</tr>
<tr>
    <td><a href="#create_ai_custom_ruleset"><CopyableCode code="create_ai_custom_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new AI custom ruleset for the authenticated organization.</td>
</tr>
<tr>
    <td><a href="#update_ai_custom_ruleset"><CopyableCode code="update_ai_custom_ruleset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Update the description of an existing AI custom ruleset.</td>
</tr>
<tr>
    <td><a href="#delete_ai_custom_ruleset"><CopyableCode code="delete_ai_custom_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a></td>
    <td></td>
    <td>Delete an AI custom ruleset by name.</td>
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
<tr id="parameter-ruleset_name">
    <td><CopyableCode code="ruleset_name" /></td>
    <td><code>string</code></td>
    <td>The ruleset name.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of rulesets to return.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The offset for pagination.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ai_custom_ruleset"
    values={[
        { label: 'get_ai_custom_ruleset', value: 'get_ai_custom_ruleset' },
        { label: 'list_ai_custom_rulesets', value: 'list_ai_custom_rulesets' }
    ]}
>
<TabItem value="get_ai_custom_ruleset">

Get an AI custom ruleset by name.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_ai_rulesets
WHERE ruleset_name = '{{ ruleset_name }}' -- required
;
```
</TabItem>
<TabItem value="list_ai_custom_rulesets">

Get all AI custom rulesets for the authenticated organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_ai_rulesets
WHERE page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_custom_ruleset"
    values={[
        { label: 'create_ai_custom_ruleset', value: 'create_ai_custom_ruleset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_custom_ruleset">

Create a new AI custom ruleset for the authenticated organization.

```sql
INSERT INTO datadog.security.static_analysis_ai_rulesets (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: static_analysis_ai_rulesets
  props:
    - name: data
      description: |
        Request data for creating an AI custom ruleset.
      value:
        attributes:
          description: "{{ description }}"
          name: "{{ name }}"
          short_description: "{{ short_description }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ai_custom_ruleset"
    values={[
        { label: 'update_ai_custom_ruleset', value: 'update_ai_custom_ruleset' }
    ]}
>
<TabItem value="update_ai_custom_ruleset">

Update the description of an existing AI custom ruleset.

```sql
UPDATE datadog.security.static_analysis_ai_rulesets
SET 
data = '{{ data }}'
WHERE 
ruleset_name = '{{ ruleset_name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_custom_ruleset"
    values={[
        { label: 'delete_ai_custom_ruleset', value: 'delete_ai_custom_ruleset' }
    ]}
>
<TabItem value="delete_ai_custom_ruleset">

Delete an AI custom ruleset by name.

```sql
DELETE FROM datadog.security.static_analysis_ai_rulesets
WHERE ruleset_name = '{{ ruleset_name }}' --required
;
```
</TabItem>
</Tabs>
