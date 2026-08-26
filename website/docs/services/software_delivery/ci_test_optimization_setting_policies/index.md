--- 
title: ci_test_optimization_setting_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - ci_test_optimization_setting_policies
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

Creates, updates, deletes, gets or lists a <code>ci_test_optimization_setting_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ci_test_optimization_setting_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.ci_test_optimization_setting_policies" /></td></tr>
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
    <td><a href="#get_flaky_tests_management_policies"><CopyableCode code="get_flaky_tests_management_policies" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Retrieve Flaky Tests Management repository-level policies for the given repository.</td>
</tr>
<tr>
    <td><a href="#update_flaky_tests_management_policies"><CopyableCode code="update_flaky_tests_management_policies" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update Flaky Tests Management repository-level policies for the given repository.&lt;br /&gt;Only provided policy blocks are updated; omitted blocks are left unchanged.</td>
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
    defaultValue="get_flaky_tests_management_policies"
    values={[
        { label: 'get_flaky_tests_management_policies', value: 'get_flaky_tests_management_policies' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="get_flaky_tests_management_policies">

Retrieve Flaky Tests Management repository-level policies for the given repository.

```sql
INSERT INTO datadog.software_delivery.ci_test_optimization_setting_policies (
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
- name: ci_test_optimization_setting_policies
  props:
    - name: data
      description: |
        Data object for get Flaky Tests Management policies request.
      value:
        attributes:
          repository_id: "{{ repository_id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flaky_tests_management_policies"
    values={[
        { label: 'update_flaky_tests_management_policies', value: 'update_flaky_tests_management_policies' }
    ]}
>
<TabItem value="update_flaky_tests_management_policies">

Partially update Flaky Tests Management repository-level policies for the given repository.&lt;br /&gt;Only provided policy blocks are updated; omitted blocks are left unchanged.

```sql
UPDATE datadog.software_delivery.ci_test_optimization_setting_policies
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
