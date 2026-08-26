--- 
title: ci_test_optimization_setting_services
hide_title: false
hide_table_of_contents: false
keywords:
  - ci_test_optimization_setting_services
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

Creates, updates, deletes, gets or lists a <code>ci_test_optimization_setting_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ci_test_optimization_setting_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.ci_test_optimization_setting_services" /></td></tr>
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
    <td><a href="#get_test_optimization_service_settings"><CopyableCode code="get_test_optimization_service_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Retrieve Test Optimization settings for a specific service identified by repository, service name, and environment.</td>
</tr>
<tr>
    <td><a href="#update_test_optimization_service_settings"><CopyableCode code="update_test_optimization_service_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update Test Optimization settings for a specific service identified by repository, service name, and environment.&lt;br /&gt;Only provided fields are updated; setting a field to `null` is a no-op.&lt;br /&gt;To reset a setting to inherit from the repository level, use the corresponding `&lt;setting&gt;_inherit` field.&lt;br /&gt;The `pr_comments_enabled` field is ignored as it cannot be overridden at the service level.</td>
</tr>
<tr>
    <td><a href="#delete_test_optimization_service_settings"><CopyableCode code="delete_test_optimization_service_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete Test Optimization settings for a specific service identified by repository, service name, and environment.</td>
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
    defaultValue="get_test_optimization_service_settings"
    values={[
        { label: 'get_test_optimization_service_settings', value: 'get_test_optimization_service_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="get_test_optimization_service_settings">

Retrieve Test Optimization settings for a specific service identified by repository, service name, and environment.

```sql
INSERT INTO datadog.software_delivery.ci_test_optimization_setting_services (
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
- name: ci_test_optimization_setting_services
  props:
    - name: data
      description: |
        Data object for get service settings request.
      value:
        attributes:
          env: "{{ env }}"
          repository_id: "{{ repository_id }}"
          service_name: "{{ service_name }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_test_optimization_service_settings"
    values={[
        { label: 'update_test_optimization_service_settings', value: 'update_test_optimization_service_settings' }
    ]}
>
<TabItem value="update_test_optimization_service_settings">

Partially update Test Optimization settings for a specific service identified by repository, service name, and environment.&lt;br /&gt;Only provided fields are updated; setting a field to `null` is a no-op.&lt;br /&gt;To reset a setting to inherit from the repository level, use the corresponding `&lt;setting&gt;_inherit` field.&lt;br /&gt;The `pr_comments_enabled` field is ignored as it cannot be overridden at the service level.

```sql
UPDATE datadog.software_delivery.ci_test_optimization_setting_services
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_test_optimization_service_settings"
    values={[
        { label: 'delete_test_optimization_service_settings', value: 'delete_test_optimization_service_settings' }
    ]}
>
<TabItem value="delete_test_optimization_service_settings">

Delete Test Optimization settings for a specific service identified by repository, service name, and environment.

```sql
DELETE FROM datadog.software_delivery.ci_test_optimization_setting_services
;
```
</TabItem>
</Tabs>
