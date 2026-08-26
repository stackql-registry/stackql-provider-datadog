--- 
title: finding_servicenow_tickets
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_servicenow_tickets
  - security
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

Creates, updates, deletes, gets or lists a <code>finding_servicenow_tickets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_servicenow_tickets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.finding_servicenow_tickets" /></td></tr>
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
    <td><a href="#create_service_now_tickets"><CopyableCode code="create_service_now_tickets" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create ServiceNow tickets for security findings.&lt;br /&gt;This operation creates a case in Datadog and a ServiceNow ticket linked to that case for bidirectional sync between Datadog and ServiceNow. You can create up to 50 ServiceNow tickets per request and associate up to 50 security findings per ServiceNow ticket. Security findings that are already attached to another ServiceNow ticket will be detached from their previous ServiceNow ticket and attached to the newly created ServiceNow ticket.</td>
</tr>
<tr>
    <td><a href="#attach_service_now_ticket"><CopyableCode code="attach_service_now_ticket" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Attach security findings to a ServiceNow ticket by providing the ServiceNow ticket URL.&lt;br /&gt;You can attach up to 50 security findings per ServiceNow ticket. If the ServiceNow ticket is not linked to any case, this operation will create a case for the security findings and link the ServiceNow ticket to the newly created case. Security findings that are already attached to another ServiceNow ticket will be detached from their previous ServiceNow ticket and attached to the specified ServiceNow ticket.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_service_now_tickets"
    values={[
        { label: 'create_service_now_tickets', value: 'create_service_now_tickets' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_now_tickets">

Create ServiceNow tickets for security findings.&lt;br /&gt;This operation creates a case in Datadog and a ServiceNow ticket linked to that case for bidirectional sync between Datadog and ServiceNow. You can create up to 50 ServiceNow tickets per request and associate up to 50 security findings per ServiceNow ticket. Security findings that are already attached to another ServiceNow ticket will be detached from their previous ServiceNow ticket and attached to the newly created ServiceNow ticket.

```sql
INSERT INTO datadog.security.finding_servicenow_tickets (
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
- name: finding_servicenow_tickets
  props:
    - name: data
      description: |
        Array of ServiceNow ticket creation request data objects.
      value:
        - attributes:
            assignee_id: "{{ assignee_id }}"
            description: "{{ description }}"
            priority: "{{ priority }}"
            title: "{{ title }}"
          relationships:
            findings:
              data:
                - id: "{{ id }}"
                  type: "{{ type }}"
            project:
              data:
                id: "{{ id }}"
                type: "{{ type }}"
          type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_service_now_ticket"
    values={[
        { label: 'attach_service_now_ticket', value: 'attach_service_now_ticket' }
    ]}
>
<TabItem value="attach_service_now_ticket">

Attach security findings to a ServiceNow ticket by providing the ServiceNow ticket URL.&lt;br /&gt;You can attach up to 50 security findings per ServiceNow ticket. If the ServiceNow ticket is not linked to any case, this operation will create a case for the security findings and link the ServiceNow ticket to the newly created case. Security findings that are already attached to another ServiceNow ticket will be detached from their previous ServiceNow ticket and attached to the specified ServiceNow ticket.

```sql
UPDATE datadog.security.finding_servicenow_tickets
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
