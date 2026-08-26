--- 
title: incident_attachment_postmortems
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_attachment_postmortems
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

Creates, updates, deletes, gets or lists an <code>incident_attachment_postmortems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_attachment_postmortems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_attachment_postmortems" /></td></tr>
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
    <td><a href="#create_incident_postmortem_attachment"><CopyableCode code="create_incident_postmortem_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a postmortem attachment for an incident.&lt;br /&gt;&lt;br /&gt;The endpoint accepts markdown for notebooks created in Confluence or Google Docs.&lt;br /&gt;Postmortems created from notebooks need to be formatted using frontend notebook cells,&lt;br /&gt;in addition to markdown format.</td>
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
    <td>The ID of the incident</td>
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
    defaultValue="create_incident_postmortem_attachment"
    values={[
        { label: 'create_incident_postmortem_attachment', value: 'create_incident_postmortem_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_postmortem_attachment">

Create a postmortem attachment for an incident.&lt;br /&gt;&lt;br /&gt;The endpoint accepts markdown for notebooks created in Confluence or Google Docs.&lt;br /&gt;Postmortems created from notebooks need to be formatted using frontend notebook cells,&lt;br /&gt;in addition to markdown format.

```sql
INSERT INTO datadog.service_management.incident_attachment_postmortems (
data,
incident_id
)
SELECT 
'{{ data }}' /* required */,
'{{ incident_id }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_attachment_postmortems
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_attachment_postmortems resource.
    - name: data
      description: |
        Postmortem attachment data
      value:
        attributes:
          cells:
            - attributes:
                definition:
                  content: "{{ content }}"
              id: "{{ id }}"
              type: "{{ type }}"
          content: "{{ content }}"
          postmortem_template_id: "{{ postmortem_template_id }}"
          title: "{{ title }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
