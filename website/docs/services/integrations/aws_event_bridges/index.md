--- 
title: aws_event_bridges
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_event_bridges
  - integrations
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

Creates, updates, deletes, gets or lists an <code>aws_event_bridges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_event_bridges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.aws_event_bridges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_awsevent_bridge_sources"
    values={[
        { label: 'list_awsevent_bridge_sources', value: 'list_awsevent_bridge_sources' }
    ]}
>
<TabItem value="list_awsevent_bridge_sources">

Amazon EventBridge sources list.

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
    <td>The ID of the Amazon EventBridge list response data. (default: get_event_bridge, example: get_event_bridge)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>An object describing the EventBridge configuration for multiple accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Amazon EventBridge resource type. (event_bridge) (default: event_bridge, example: event_bridge)</td>
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
    <td><a href="#list_awsevent_bridge_sources"><CopyableCode code="list_awsevent_bridge_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all Amazon EventBridge sources.</td>
</tr>
<tr>
    <td><a href="#create_awsevent_bridge_source"><CopyableCode code="create_awsevent_bridge_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an Amazon EventBridge source.</td>
</tr>
<tr>
    <td><a href="#delete_awsevent_bridge_source"><CopyableCode code="delete_awsevent_bridge_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete an Amazon EventBridge source.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_awsevent_bridge_sources"
    values={[
        { label: 'list_awsevent_bridge_sources', value: 'list_awsevent_bridge_sources' }
    ]}
>
<TabItem value="list_awsevent_bridge_sources">

Get all Amazon EventBridge sources.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_event_bridges
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_awsevent_bridge_source"
    values={[
        { label: 'create_awsevent_bridge_source', value: 'create_awsevent_bridge_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_awsevent_bridge_source">

Create an Amazon EventBridge source.

```sql
INSERT INTO datadog.integrations.aws_event_bridges (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: aws_event_bridges
  props:
    - name: data
      description: |
        Amazon EventBridge create request data.
      value:
        attributes:
          account_id: "{{ account_id }}"
          create_event_bus: {{ create_event_bus }}
          event_generator_name: "{{ event_generator_name }}"
          region: "{{ region }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_awsevent_bridge_source"
    values={[
        { label: 'delete_awsevent_bridge_source', value: 'delete_awsevent_bridge_source' }
    ]}
>
<TabItem value="delete_awsevent_bridge_source">

Delete an Amazon EventBridge source.

```sql
DELETE FROM datadog.integrations.aws_event_bridges
;
```
</TabItem>
</Tabs>
