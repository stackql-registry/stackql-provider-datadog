--- 
title: org_group_policy_suggestions
hide_title: false
hide_table_of_contents: false
keywords:
  - org_group_policy_suggestions
  - organization
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

Creates, updates, deletes, gets or lists an <code>org_group_policy_suggestions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_group_policy_suggestions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.org_group_policy_suggestions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_org_group_policy_suggestions"
    values={[
        { label: 'list_org_group_policy_suggestions', value: 'list_org_group_policy_suggestions' }
    ]}
>
<TabItem value="list_org_group_policy_suggestions">

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
    <td>The ID of the org group policy suggestion. (example: 1a2b3c4d-5e6f-7890-abcd-ef0123456789)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an org group policy suggestion.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of an org group policy suggestion.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Org group policy suggestions resource type. (org_group_policy_suggestions) (example: org_group_policy_suggestions)</td>
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
    <td><a href="#list_org_group_policy_suggestions"><CopyableCode code="list_org_group_policy_suggestions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-filter[org_group_id]"><code>filter[org_group_id]</code></a></td>
    <td></td>
    <td>List suggested organization group policies. Requires a filter on org group ID.</td>
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
<tr id="parameter-filter[org_group_id]">
    <td><CopyableCode code="filter[org_group_id]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter policies by org group ID.</td>
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
    defaultValue="list_org_group_policy_suggestions"
    values={[
        { label: 'list_org_group_policy_suggestions', value: 'list_org_group_policy_suggestions' }
    ]}
>
<TabItem value="list_org_group_policy_suggestions">

List suggested organization group policies. Requires a filter on org group ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.org_group_policy_suggestions
WHERE filter[org_group_id] = '{{ filter[org_group_id] }}' -- required
;
```
</TabItem>
</Tabs>
