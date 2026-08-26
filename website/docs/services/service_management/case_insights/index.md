--- 
title: case_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - case_insights
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

Creates, updates, deletes, gets or lists a <code>case_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_insights" /></td></tr>
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
    <td><a href="#add_case_insights"><CopyableCode code="add_case_insights" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Adds one or more insights to a case. Insights are references to related Datadog resources (such as monitors, security signals, incidents, or error tracking issues) that provide investigative context. Up to 100 insights can be added per request. Each insight requires a type (see `CaseInsightType` for allowed values), a ref (URL path to the resource), and a resource_id.</td>
</tr>
<tr>
    <td><a href="#remove_case_insights"><CopyableCode code="remove_case_insights" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a></td>
    <td></td>
    <td>Removes one or more previously added insights from a case by specifying their type and resource identifier in the request body.</td>
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
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="add_case_insights"
    values={[
        { label: 'add_case_insights', value: 'add_case_insights' }
    ]}
>
<TabItem value="add_case_insights">

Adds one or more insights to a case. Insights are references to related Datadog resources (such as monitors, security signals, incidents, or error tracking issues) that provide investigative context. Up to 100 insights can be added per request. Each insight requires a type (see `CaseInsightType` for allowed values), a ref (URL path to the resource), and a resource_id.

```sql
REPLACE datadog.service_management.case_insights
SET 
data = '{{ data }}'
WHERE 
case_id = '{{ case_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_case_insights"
    values={[
        { label: 'remove_case_insights', value: 'remove_case_insights' }
    ]}
>
<TabItem value="remove_case_insights">

Removes one or more previously added insights from a case by specifying their type and resource identifier in the request body.

```sql
DELETE FROM datadog.service_management.case_insights
WHERE case_id = '{{ case_id }}' --required
;
```
</TabItem>
</Tabs>
