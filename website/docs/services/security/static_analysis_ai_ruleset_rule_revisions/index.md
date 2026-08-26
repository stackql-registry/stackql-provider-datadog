--- 
title: static_analysis_ai_ruleset_rule_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - static_analysis_ai_ruleset_rule_revisions
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

Creates, updates, deletes, gets or lists a <code>static_analysis_ai_ruleset_rule_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_analysis_ai_ruleset_rule_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.static_analysis_ai_ruleset_rule_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ai_custom_rule_revision"
    values={[
        { label: 'get_ai_custom_rule_revision', value: 'get_ai_custom_rule_revision' },
        { label: 'list_ai_custom_rule_revisions', value: 'list_ai_custom_rule_revisions' }
    ]}
>
<TabItem value="get_ai_custom_rule_revision">

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
    <td>The revision identifier. (example: revision-abc-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Response attributes of an AI custom rule revision.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AI custom rule revision resource type. (ai_rule_revision) (example: ai_rule_revision)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ai_custom_rule_revisions">

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
    <td>The revision identifier. (example: revision-abc-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Response attributes of an AI custom rule revision.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>AI custom rule revision resource type. (ai_rule_revision) (example: ai_rule_revision)</td>
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
    <td><a href="#get_ai_custom_rule_revision"><CopyableCode code="get_ai_custom_rule_revision" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get a specific revision of an AI custom rule.</td>
</tr>
<tr>
    <td><a href="#list_ai_custom_rule_revisions"><CopyableCode code="list_ai_custom_rule_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>Get all revisions for an AI custom rule.</td>
</tr>
<tr>
    <td><a href="#create_ai_custom_rule_revision"><CopyableCode code="create_ai_custom_rule_revision" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ruleset_name"><code>ruleset_name</code></a>, <a href="#parameter-rule_name"><code>rule_name</code></a></td>
    <td></td>
    <td>Create a new revision for an AI custom rule.</td>
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
    <td>The revision identifier.</td>
</tr>
<tr id="parameter-rule_name">
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The rule name.</td>
</tr>
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
    <td>The maximum number of revisions to return.</td>
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
    defaultValue="get_ai_custom_rule_revision"
    values={[
        { label: 'get_ai_custom_rule_revision', value: 'get_ai_custom_rule_revision' },
        { label: 'list_ai_custom_rule_revisions', value: 'list_ai_custom_rule_revisions' }
    ]}
>
<TabItem value="get_ai_custom_rule_revision">

Get a specific revision of an AI custom rule.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_ai_ruleset_rule_revisions
WHERE ruleset_name = '{{ ruleset_name }}' -- required
AND rule_name = '{{ rule_name }}' -- required
AND id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list_ai_custom_rule_revisions">

Get all revisions for an AI custom rule.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.static_analysis_ai_ruleset_rule_revisions
WHERE ruleset_name = '{{ ruleset_name }}' -- required
AND rule_name = '{{ rule_name }}' -- required
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_custom_rule_revision"
    values={[
        { label: 'create_ai_custom_rule_revision', value: 'create_ai_custom_rule_revision' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_custom_rule_revision">

Create a new revision for an AI custom rule.

```sql
INSERT INTO datadog.security.static_analysis_ai_ruleset_rule_revisions (
data,
ruleset_name,
rule_name
)
SELECT 
'{{ data }}',
'{{ ruleset_name }}',
'{{ rule_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: static_analysis_ai_ruleset_rule_revisions
  props:
    - name: ruleset_name
      value: "{{ ruleset_name }}"
      description: Required parameter for the static_analysis_ai_ruleset_rule_revisions resource.
    - name: rule_name
      value: "{{ rule_name }}"
      description: Required parameter for the static_analysis_ai_ruleset_rule_revisions resource.
    - name: data
      description: |
        Request data for creating an AI custom rule revision.
      value:
        attributes:
          category: "{{ category }}"
          content: "{{ content }}"
          cwe: "{{ cwe }}"
          description: "{{ description }}"
          directories:
            - "{{ directories }}"
          execution_mode: "{{ execution_mode }}"
          globs:
            - "{{ globs }}"
          is_published: {{ is_published }}
          is_testing: {{ is_testing }}
          severity: "{{ severity }}"
          short_description: "{{ short_description }}"
          version_id: {{ version_id }}
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
