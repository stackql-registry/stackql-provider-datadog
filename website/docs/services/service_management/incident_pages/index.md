--- 
title: incident_pages
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_pages
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

Creates, updates, deletes, gets or lists an <code>incident_pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_pages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_pages" /></td></tr>
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
    <td><a href="#create_on_call_page_from_incident"><CopyableCode code="create_on_call_page_from_incident" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an on-call page directly from an incident.</td>
</tr>
<tr>
    <td><a href="#link_page_to_incident"><CopyableCode code="link_page_to_incident" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Link an existing on-call page to an incident.</td>
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
<tr id="parameter-incident_id">
    <td><CopyableCode code="incident_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the incident.</td>
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
    defaultValue="create_on_call_page_from_incident"
    values={[
        { label: 'create_on_call_page_from_incident', value: 'create_on_call_page_from_incident' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_on_call_page_from_incident">

Create an on-call page directly from an incident.

```sql
INSERT INTO datadog.service_management.incident_pages (
data,
incident_id
)
SELECT 
'{{ data }}' /* required */,
'{{ incident_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_pages
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_pages resource.
    - name: data
      description: |
        On-call page data in a create request.
      value:
        attributes:
          description: "{{ description }}"
          role:
            id: "{{ id }}"
            type: "{{ type }}"
          services:
            - "{{ services }}"
          tags:
            - "{{ tags }}"
          target:
            identifier: "{{ identifier }}"
            type: "{{ type }}"
          title: "{{ title }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="link_page_to_incident"
    values={[
        { label: 'link_page_to_incident', value: 'link_page_to_incident' }
    ]}
>
<TabItem value="link_page_to_incident">

Link an existing on-call page to an incident.

```sql
EXEC datadog.service_management.incident_pages.link_page_to_incident 
@incident_id='{{ incident_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
