--- 
title: incident_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - incident_attachments
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

Creates, updates, deletes, gets or lists an <code>incident_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="incident_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.incident_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_incident_attachments"
    values={[
        { label: 'list_incident_attachments', value: 'list_incident_attachments' }
    ]}
>
<TabItem value="list_incident_attachments">

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
    <td>The unique identifier of the attachment. (example: 00000000-abcd-0002-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attachment's attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The attachment's resource relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The incident attachment resource type. (incident_attachments) (default: incident_attachments, example: incident_attachments)</td>
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
    <td><a href="#list_incident_attachments"><CopyableCode code="list_incident_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td><a href="#parameter-filter[attachment_type]"><code>filter[attachment_type]</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>List incident attachments.</td>
</tr>
<tr>
    <td><a href="#create_incident_attachment"><CopyableCode code="create_incident_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Create an incident attachment.</td>
</tr>
<tr>
    <td><a href="#update_incident_attachment"><CopyableCode code="update_incident_attachment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-attachment_id"><code>attachment_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_incident_attachment"><CopyableCode code="delete_incident_attachment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-incident_id"><code>incident_id</code></a>, <a href="#parameter-attachment_id"><code>attachment_id</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-attachment_id">
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
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
<tr id="parameter-filter[attachment_type]">
    <td><CopyableCode code="filter[attachment_type]" /></td>
    <td><code>string</code></td>
    <td>Filter attachments by type. Supported values are `1` (`postmortem`) and `2` (`link`).</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Resource to include in the response. Supported value: `last_modified_by_user`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_incident_attachments"
    values={[
        { label: 'list_incident_attachments', value: 'list_incident_attachments' }
    ]}
>
<TabItem value="list_incident_attachments">

List incident attachments.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.incident_attachments
WHERE incident_id = '{{ incident_id }}' -- required
AND filter[attachment_type] = '{{ filter[attachment_type] }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_incident_attachment"
    values={[
        { label: 'create_incident_attachment', value: 'create_incident_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_incident_attachment">

Create an incident attachment.

```sql
INSERT INTO datadog.service_management.incident_attachments (
data,
incident_id,
include
)
SELECT 
'{{ data }}',
'{{ incident_id }}',
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: incident_attachments
  props:
    - name: incident_id
      value: "{{ incident_id }}"
      description: Required parameter for the incident_attachments resource.
    - name: data
      description: |
        Attachment data for a create request.
      value:
        attributes:
          attachment:
            documentUrl: "{{ documentUrl }}"
            title: "{{ title }}"
          attachment_type: "{{ attachment_type }}"
        id: "{{ id }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Resource to include in the response. Supported value: \`last_modified_by_user\`.
      description: Resource to include in the response. Supported value: \`last_modified_by_user\`.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_incident_attachment"
    values={[
        { label: 'update_incident_attachment', value: 'update_incident_attachment' }
    ]}
>
<TabItem value="update_incident_attachment">

No description available.

```sql
UPDATE datadog.service_management.incident_attachments
SET 
data = '{{ data }}'
WHERE 
incident_id = '{{ incident_id }}' --required
AND attachment_id = '{{ attachment_id }}' --required
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_incident_attachment"
    values={[
        { label: 'delete_incident_attachment', value: 'delete_incident_attachment' }
    ]}
>
<TabItem value="delete_incident_attachment">

No description available.

```sql
DELETE FROM datadog.service_management.incident_attachments
WHERE incident_id = '{{ incident_id }}' --required
AND attachment_id = '{{ attachment_id }}' --required
;
```
</TabItem>
</Tabs>
