--- 
title: app_builder_blueprint_slugs
hide_title: false
hide_table_of_contents: false
keywords:
  - app_builder_blueprint_slugs
  - infrastructure
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

Creates, updates, deletes, gets or lists an <code>app_builder_blueprint_slugs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_builder_blueprint_slugs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.app_builder_blueprint_slugs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blueprints_by_slugs"
    values={[
        { label: 'get_blueprints_by_slugs', value: 'get_blueprints_by_slugs' }
    ]}
>
<TabItem value="get_blueprints_by_slugs">

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
    <td>The ID of the blueprint. (example: 65bb1f25-52e1-4510-9f8d-22d1516ed693)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a blueprint resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for a blueprint. (blueprint) (example: blueprint)</td>
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
    <td><a href="#get_blueprints_by_slugs"><CopyableCode code="get_blueprints_by_slugs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slugs"><code>slugs</code></a></td>
    <td></td>
    <td>Retrieve app blueprints by their slugs.</td>
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
<tr id="parameter-slugs">
    <td><CopyableCode code="slugs" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of blueprint slugs. (example: aws-service-manager)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_blueprints_by_slugs"
    values={[
        { label: 'get_blueprints_by_slugs', value: 'get_blueprints_by_slugs' }
    ]}
>
<TabItem value="get_blueprints_by_slugs">

Retrieve app blueprints by their slugs.

```sql
SELECT
id,
attributes,
type
FROM datadog.infrastructure.app_builder_blueprint_slugs
WHERE slugs = '{{ slugs }}' -- required
;
```
</TabItem>
</Tabs>
