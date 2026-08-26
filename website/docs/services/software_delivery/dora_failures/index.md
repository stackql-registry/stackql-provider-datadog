--- 
title: dora_failures
hide_title: false
hide_table_of_contents: false
keywords:
  - dora_failures
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>dora_failures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dora_failures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.dora_failures" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dorafailure"
    values={[
        { label: 'get_dorafailure', value: 'get_dorafailure' },
        { label: 'list_dorafailures', value: 'list_dorafailures' }
    ]}
>
<TabItem value="get_dorafailure">

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
    <td>The ID of the incident event.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the incident event.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API type for DORA incident events. (dora_failure) (default: dora_failure, example: dora_failure)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dorafailures">

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
    <td><CopyableCode code="data" /></td>
    <td><code>array</code></td>
    <td>The list of DORA incident events.</td>
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
    <td><a href="#get_dorafailure"><CopyableCode code="get_dorafailure" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-failure_id"><code>failure_id</code></a></td>
    <td></td>
    <td>Use this API endpoint to get an incident event.</td>
</tr>
<tr>
    <td><a href="#list_dorafailures"><CopyableCode code="list_dorafailures" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Use this API endpoint to get a list of incident events.</td>
</tr>
<tr>
    <td><a href="#create_dorafailure"><CopyableCode code="create_dorafailure" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Use this API endpoint to provide incident data for DORA Metrics.&lt;br /&gt;Note that change failure rate and failed deployment recovery time are computed from change failures detected on deployments, not from incident events sent through this endpoint.&lt;br /&gt;Tracking incidents gives a side-by-side view of how failed deployments translate into real-world incidents, including their severity and frequency.</td>
</tr>
<tr>
    <td><a href="#delete_dorafailure"><CopyableCode code="delete_dorafailure" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-failure_id"><code>failure_id</code></a></td>
    <td></td>
    <td>Use this API endpoint to delete an incident event.</td>
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
<tr id="parameter-failure_id">
    <td><CopyableCode code="failure_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the incident event to delete.</td>
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
    defaultValue="get_dorafailure"
    values={[
        { label: 'get_dorafailure', value: 'get_dorafailure' },
        { label: 'list_dorafailures', value: 'list_dorafailures' }
    ]}
>
<TabItem value="get_dorafailure">

Use this API endpoint to get an incident event.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.dora_failures
WHERE failure_id = '{{ failure_id }}' -- required
;
```
</TabItem>
<TabItem value="list_dorafailures">

Use this API endpoint to get a list of incident events.

```sql
SELECT
data
FROM datadog.software_delivery.dora_failures
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dorafailure"
    values={[
        { label: 'create_dorafailure', value: 'create_dorafailure' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dorafailure">

Use this API endpoint to provide incident data for DORA Metrics.&lt;br /&gt;Note that change failure rate and failed deployment recovery time are computed from change failures detected on deployments, not from incident events sent through this endpoint.&lt;br /&gt;Tracking incidents gives a side-by-side view of how failed deployments translate into real-world incidents, including their severity and frequency.

```sql
INSERT INTO datadog.software_delivery.dora_failures (
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
- name: dora_failures
  props:
    - name: data
      description: |
        The JSON:API data.
      value:
        attributes:
          custom_tags:
            - "{{ custom_tags }}"
          env: "{{ env }}"
          finished_at: {{ finished_at }}
          git:
            commit_sha: "{{ commit_sha }}"
            repository_url: "{{ repository_url }}"
          id: "{{ id }}"
          name: "{{ name }}"
          services:
            - "{{ services }}"
          severity: "{{ severity }}"
          started_at: {{ started_at }}
          team: "{{ team }}"
          version: "{{ version }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dorafailure"
    values={[
        { label: 'delete_dorafailure', value: 'delete_dorafailure' }
    ]}
>
<TabItem value="delete_dorafailure">

Use this API endpoint to delete an incident event.

```sql
DELETE FROM datadog.software_delivery.dora_failures
WHERE failure_id = '{{ failure_id }}' --required
;
```
</TabItem>
</Tabs>
