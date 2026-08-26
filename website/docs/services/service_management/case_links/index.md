--- 
title: case_links
hide_title: false
hide_table_of_contents: false
keywords:
  - case_links
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

Creates, updates, deletes, gets or lists a <code>case_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.case_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_case_links"
    values={[
        { label: 'list_case_links', value: 'list_case_links' }
    ]}
>
<TabItem value="list_case_links">

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
    <td>The case link identifier. (example: 804cd682-55f6-4541-ab00-b608b282ea7d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes describing a directional relationship between two entities (cases, incidents, or pages).</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for case links. (link) (example: link)</td>
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
    <td><a href="#list_case_links"><CopyableCode code="list_case_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_id"><code>entity_id</code></a></td>
    <td><a href="#parameter-relationship"><code>relationship</code></a></td>
    <td>Returns all links associated with a case. Links define relationships (for example, BLOCKS) between cases. Requires entity_type and entity_id query parameters.</td>
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
<tr id="parameter-entity_id">
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the entity to look up links for.</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The entity type to look up links for. Use `CASE` to find links for a specific case.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-relationship">
    <td><CopyableCode code="relationship" /></td>
    <td><code>string</code></td>
    <td>Optional filter to only return links of a specific relationship type (for example, `BLOCKS` or `CAUSES`).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_case_links"
    values={[
        { label: 'list_case_links', value: 'list_case_links' }
    ]}
>
<TabItem value="list_case_links">

Returns all links associated with a case. Links define relationships (for example, BLOCKS) between cases. Requires entity_type and entity_id query parameters.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.case_links
WHERE entity_type = '{{ entity_type }}' -- required
AND entity_id = '{{ entity_id }}' -- required
AND relationship = '{{ relationship }}'
;
```
</TabItem>
</Tabs>
