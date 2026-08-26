--- 
title: rum_teams_ownership_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_teams_ownership_rules
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_teams_ownership_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_teams_ownership_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_teams_ownership_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_teams_ownership_rules"
    values={[
        { label: 'list_teams_ownership_rules', value: 'list_teams_ownership_rules' }
    ]}
>
<TabItem value="list_teams_ownership_rules">

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
    <td>A deterministic identifier derived from the rule's grouping key. This ID cannot be used to delete the rule directly; delete individual mappings using the `mapping_id` under `teams` instead. (example: 3b1e2f7a9c4d6e8f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a teams ownership rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be teams_ownership_grouped_mappings. (teams_ownership_grouped_mappings) (default: teams_ownership_grouped_mappings, example: teams_ownership_grouped_mappings)</td>
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
    <td><a href="#list_teams_ownership_rules"><CopyableCode code="list_teams_ownership_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[view_name]"><code>filter[view_name]</code></a>, <a href="#parameter-filter[team_handle]"><code>filter[team_handle]</code></a>, <a href="#parameter-filter[application_id]"><code>filter[application_id]</code></a>, <a href="#parameter-filter[service]"><code>filter[service]</code></a></td>
    <td>Get the list of teams ownership rules for your organization, optionally filtered.&lt;br /&gt;Rules group the underlying mappings by `view_name`, `application_id`, `service`, and `match_type`,&lt;br /&gt;collapsing every team that owns the same view into a single entry.</td>
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
<tr id="parameter-filter[application_id]">
    <td><CopyableCode code="filter[application_id]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by RUM application ID. Each value must be a valid UUID.</td>
</tr>
<tr id="parameter-filter[service]">
    <td><CopyableCode code="filter[service]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by RUM application service name.</td>
</tr>
<tr id="parameter-filter[team_handle]">
    <td><CopyableCode code="filter[team_handle]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by owning team handle.</td>
</tr>
<tr id="parameter-filter[view_name]">
    <td><CopyableCode code="filter[view_name]" /></td>
    <td><code>array</code></td>
    <td>Filter mappings by RUM view name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_teams_ownership_rules"
    values={[
        { label: 'list_teams_ownership_rules', value: 'list_teams_ownership_rules' }
    ]}
>
<TabItem value="list_teams_ownership_rules">

Get the list of teams ownership rules for your organization, optionally filtered.&lt;br /&gt;Rules group the underlying mappings by `view_name`, `application_id`, `service`, and `match_type`,&lt;br /&gt;collapsing every team that owns the same view into a single entry.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_teams_ownership_rules
WHERE filter[view_name] = '{{ filter[view_name] }}'
AND filter[team_handle] = '{{ filter[team_handle] }}'
AND filter[application_id] = '{{ filter[application_id] }}'
AND filter[service] = '{{ filter[service] }}'
;
```
</TabItem>
</Tabs>
