--- 
title: rum_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_applications
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

Creates, updates, deletes, gets or lists a <code>rum_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rumapplication"
    values={[
        { label: 'get_rumapplication', value: 'get_rumapplication' },
        { label: 'get_rumapplications', value: 'get_rumapplications' }
    ]}
>
<TabItem value="get_rumapplication">

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
    <td>RUM application ID. (example: abcd1234-0000-0000-abcd-1234abcd5678)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>RUM application attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>RUM application response type. (rum_application) (default: rum_application, example: rum_application)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_rumapplications">

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
    <td>RUM application ID. (example: abcd1234-0000-0000-abcd-1234abcd5678)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>RUM application list attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>RUM application list type. (rum_application) (default: rum_application, example: rum_application)</td>
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
    <td><a href="#get_rumapplication"><CopyableCode code="get_rumapplication" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get the RUM application with given ID in your organization.</td>
</tr>
<tr>
    <td><a href="#get_rumapplications"><CopyableCode code="get_rumapplications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all the RUM applications in your organization.</td>
</tr>
<tr>
    <td><a href="#create_rumapplication"><CopyableCode code="create_rumapplication" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new RUM application in your organization.</td>
</tr>
<tr>
    <td><a href="#update_rumapplication"><CopyableCode code="update_rumapplication" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the RUM application with given ID in your organization.</td>
</tr>
<tr>
    <td><a href="#delete_rumapplication"><CopyableCode code="delete_rumapplication" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Delete an existing RUM application in your organization.</td>
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
    <td>RUM application ID.</td>
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
    defaultValue="get_rumapplication"
    values={[
        { label: 'get_rumapplication', value: 'get_rumapplication' },
        { label: 'get_rumapplications', value: 'get_rumapplications' }
    ]}
>
<TabItem value="get_rumapplication">

Get the RUM application with given ID in your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_applications
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="get_rumapplications">

List all the RUM applications in your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_applications
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rumapplication"
    values={[
        { label: 'create_rumapplication', value: 'create_rumapplication' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rumapplication">

Create a new RUM application in your organization.

```sql
INSERT INTO datadog.digital_experience.rum_applications (
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
- name: rum_applications
  props:
    - name: data
      description: |
        RUM application creation.
      value:
        attributes:
          name: "{{ name }}"
          product_analytics_retention_state: "{{ product_analytics_retention_state }}"
          rum_event_processing_state: "{{ rum_event_processing_state }}"
          type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rumapplication"
    values={[
        { label: 'update_rumapplication', value: 'update_rumapplication' }
    ]}
>
<TabItem value="update_rumapplication">

Update the RUM application with given ID in your organization.

```sql
UPDATE datadog.digital_experience.rum_applications
SET 
data = '{{ data }}'
WHERE 
id = '{{ id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rumapplication"
    values={[
        { label: 'delete_rumapplication', value: 'delete_rumapplication' }
    ]}
>
<TabItem value="delete_rumapplication">

Delete an existing RUM application in your organization.

```sql
DELETE FROM datadog.digital_experience.rum_applications
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
