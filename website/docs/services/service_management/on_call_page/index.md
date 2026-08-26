--- 
title: on_call_page
hide_title: false
hide_table_of_contents: false
keywords:
  - on_call_page
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

Creates, updates, deletes, gets or lists an <code>on_call_page</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_call_page" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.on_call_page" /></td></tr>
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
    <td><a href="#create_on_call_page"><CopyableCode code="create_on_call_page" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Trigger a new On-Call Page.</td>
</tr>
<tr>
    <td><a href="#acknowledge_on_call_page"><CopyableCode code="acknowledge_on_call_page" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td></td>
    <td>Acknowledges an On-Call Page.</td>
</tr>
<tr>
    <td><a href="#escalate_on_call_page"><CopyableCode code="escalate_on_call_page" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td></td>
    <td>Escalates an On-Call Page.</td>
</tr>
<tr>
    <td><a href="#resolve_on_call_page"><CopyableCode code="resolve_on_call_page" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td></td>
    <td>Resolves an On-Call Page.</td>
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
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The page ID.</td>
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
    defaultValue="create_on_call_page"
    values={[
        { label: 'create_on_call_page', value: 'create_on_call_page' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_on_call_page">

Trigger a new On-Call Page.

```sql
INSERT INTO datadog.service_management.on_call_page (
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
- name: on_call_page
  props:
    - name: data
      description: |
        The main request body, including attributes and resource type.
      value:
        attributes:
          description: "{{ description }}"
          tags:
            - "{{ tags }}"
          target:
            identifier: "{{ identifier }}"
            type: "{{ type }}"
          title: "{{ title }}"
          urgency: "{{ urgency }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="acknowledge_on_call_page"
    values={[
        { label: 'acknowledge_on_call_page', value: 'acknowledge_on_call_page' },
        { label: 'escalate_on_call_page', value: 'escalate_on_call_page' },
        { label: 'resolve_on_call_page', value: 'resolve_on_call_page' }
    ]}
>
<TabItem value="acknowledge_on_call_page">

Acknowledges an On-Call Page.

```sql
EXEC datadog.service_management.on_call_page.acknowledge_on_call_page 
@page_id='{{ page_id }}' --required 
;
```
</TabItem>
<TabItem value="escalate_on_call_page">

Escalates an On-Call Page.

```sql
EXEC datadog.service_management.on_call_page.escalate_on_call_page 
@page_id='{{ page_id }}' --required 
;
```
</TabItem>
<TabItem value="resolve_on_call_page">

Resolves an On-Call Page.

```sql
EXEC datadog.service_management.on_call_page.resolve_on_call_page 
@page_id='{{ page_id }}' --required 
;
```
</TabItem>
</Tabs>
