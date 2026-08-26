--- 
title: monitoring_dataset_dependencies
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_dataset_dependencies
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

Creates, updates, deletes, gets or lists a <code>monitoring_dataset_dependencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_dataset_dependencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_dataset_dependencies" /></td></tr>
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
    <td><a href="#batch_get_security_monitoring_dataset_dependencies"><CopyableCode code="batch_get_security_monitoring_dataset_dependencies" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Return, for each of the requested datasets, the list of detection rules that depend&lt;br /&gt;on it. Useful for understanding the impact of updating or deleting a dataset.</td>
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
    defaultValue="batch_get_security_monitoring_dataset_dependencies"
    values={[
        { label: 'batch_get_security_monitoring_dataset_dependencies', value: 'batch_get_security_monitoring_dataset_dependencies' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="batch_get_security_monitoring_dataset_dependencies">

Return, for each of the requested datasets, the list of detection rules that depend&lt;br /&gt;on it. Useful for understanding the impact of updating or deleting a dataset.

```sql
INSERT INTO datadog.security.monitoring_dataset_dependencies (
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
- name: monitoring_dataset_dependencies
  props:
    - name: data
      description: |
        The data wrapper of a dataset dependencies request.
      value:
        attributes:
          datasetIds:
            - "{{ datasetIds }}"
`}</CodeBlock>

</TabItem>
</Tabs>
