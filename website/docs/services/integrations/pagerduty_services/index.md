--- 
title: pagerduty_services
hide_title: false
hide_table_of_contents: false
keywords:
  - pagerduty_services
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

Creates, updates, deletes, gets or lists a <code>pagerduty_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pagerduty_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.pagerduty_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pager_duty_integration_service"
    values={[
        { label: 'get_pager_duty_integration_service', value: 'get_pager_duty_integration_service' }
    ]}
>
<TabItem value="get_pager_duty_integration_service">

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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Your service name associated service key in PagerDuty. (example: )</td>
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
    <td><a href="#get_pager_duty_integration_service"><CopyableCode code="get_pager_duty_integration_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get service name in the Datadog-PagerDuty integration.</td>
</tr>
<tr>
    <td><a href="#create_pager_duty_integration_service"><CopyableCode code="create_pager_duty_integration_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-service_key"><code>service_key</code></a></td>
    <td></td>
    <td>Create a new service object in the PagerDuty integration.</td>
</tr>
<tr>
    <td><a href="#update_pager_duty_integration_service"><CopyableCode code="update_pager_duty_integration_service" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-service_key"><code>service_key</code></a></td>
    <td></td>
    <td>Update a single service object in the Datadog-PagerDuty integration.</td>
</tr>
<tr>
    <td><a href="#delete_pager_duty_integration_service"><CopyableCode code="delete_pager_duty_integration_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a single service object in the Datadog-PagerDuty integration.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The service name</td>
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
    defaultValue="get_pager_duty_integration_service"
    values={[
        { label: 'get_pager_duty_integration_service', value: 'get_pager_duty_integration_service' }
    ]}
>
<TabItem value="get_pager_duty_integration_service">

Get service name in the Datadog-PagerDuty integration.

```sql
SELECT
service_name
FROM datadog.integrations.pagerduty_services
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pager_duty_integration_service"
    values={[
        { label: 'create_pager_duty_integration_service', value: 'create_pager_duty_integration_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pager_duty_integration_service">

Create a new service object in the PagerDuty integration.

```sql
INSERT INTO datadog.integrations.pagerduty_services (
service_key,
service_name
)
SELECT 
'{{ service_key }}' /* required */,
'{{ service_name }}' /* required */
RETURNING
service_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pagerduty_services
  props:
    - name: service_key
      value: "{{ service_key }}"
      description: |
        Your service key in PagerDuty.
    - name: service_name
      value: "{{ service_name }}"
      description: |
        Your service name associated with a service key in PagerDuty.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_pager_duty_integration_service"
    values={[
        { label: 'update_pager_duty_integration_service', value: 'update_pager_duty_integration_service' }
    ]}
>
<TabItem value="update_pager_duty_integration_service">

Update a single service object in the Datadog-PagerDuty integration.

```sql
REPLACE datadog.integrations.pagerduty_services
SET 
service_key = '{{ service_key }}'
WHERE 
service_name = '{{ service_name }}' --required
AND service_key = '{{ service_key }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pager_duty_integration_service"
    values={[
        { label: 'delete_pager_duty_integration_service', value: 'delete_pager_duty_integration_service' }
    ]}
>
<TabItem value="delete_pager_duty_integration_service">

Delete a single service object in the Datadog-PagerDuty integration.

```sql
DELETE FROM datadog.integrations.pagerduty_services
WHERE service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
