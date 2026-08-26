--- 
title: static_analysis_custom_ruleset_rule_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_custom_ruleset_rule_revisions
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

Creates, updates, deletes, gets or lists a <code>static_analysis_custom_ruleset_rule_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_custom_ruleset_rule_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_custom_ruleset_rule_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_rule_revision"
    values={[
        { label: 'get_custom_rule_revision', value: 'get_custom_rule_revision' },
        { label: 'list_custom_rule_revisions', value: 'list_custom_rule_revisions' }
    ]}
>
<TabItem value="get_custom_rule_revision">

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
    <td>Revision identifier (example: revision-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom rule revision, including code, metadata, and test cases.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type (custom_rule_revision) (example: custom_rule_revision)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_rule_revisions">

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
    <td>Revision identifier (example: revision-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a custom rule revision, including code, metadata, and test cases.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type (custom_rule_revision) (example: custom_rule_revision)</td>
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
    <td><a href="#get_custom_rule_revision"><CopyableCode code="get_custom_rule_revision" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a specific revision of a custom rule</td>
</tr>
<tr>
    <td><a href="#list_custom_rule_revisions"><CopyableCode code="list_custom_rule_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>Get all revisions for a custom rule</td>
</tr>
<tr>
    <td><a href="#create_custom_rule_revision"><CopyableCode code="create_custom_rule_revision" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td></td>
    <td>Create a new revision for a custom rule</td>
</tr>
<tr>
    <td><a href="#revert_custom_rule_revision"><CopyableCode code="revert_custom_rule_revision" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td></td>
    <td>Revert a custom rule to a previous revision</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The revision ID</td>
</tr>
<tr id="parameter-rule_name">
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The rule name</td>
</tr>
<tr id="parameter-ruleset_name">
    <td><CopyableCode code="ruleset_name" /></td>
    <td><code>string</code></td>
    <td>The ruleset name</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Pagination limit</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Pagination offset</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_rule_revision"
    values={[
        { label: 'get_custom_rule_revision', value: 'get_custom_rule_revision' },
        { label: 'list_custom_rule_revisions', value: 'list_custom_rule_revisions' }
    ]}
>
<TabItem value="get_custom_rule_revision">

Get a specific revision of a custom rule

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_custom_ruleset_rule_revisions
WHERE ruleset_name = '{{ ruleset_name }}' -- required
AND rule_name = '{{ rule_name }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_rule_revisions">

Get all revisions for a custom rule

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_custom_ruleset_rule_revisions
WHERE ruleset_name = '{{ ruleset_name }}' -- required
AND rule_name = '{{ rule_name }}' -- required
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="create_custom_rule_revision"
    values={[
        { label: 'create_custom_rule_revision', value: 'create_custom_rule_revision' }
    ]}
>
<TabItem value="create_custom_rule_revision">

Create a new revision for a custom rule

```sql
REPLACE datadog.security.static_analysis_custom_ruleset_rule_revisions
SET 
data = '{{ data }}'
WHERE 
ruleset_name = '{{ ruleset_name }}' --required
AND rule_name = '{{ rule_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="revert_custom_rule_revision"
    values={[
        { label: 'revert_custom_rule_revision', value: 'revert_custom_rule_revision' }
    ]}
>
<TabItem value="revert_custom_rule_revision">

Revert a custom rule to a previous revision

```sql
EXEC datadog.security.static_analysis_custom_ruleset_rule_revisions.revert_custom_rule_revision 
@ruleset_name='{{ ruleset_name }}' --required, 
@rule_name='{{ rule_name }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
