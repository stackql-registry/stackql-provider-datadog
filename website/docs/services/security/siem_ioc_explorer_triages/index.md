--- 
title: siem_ioc_explorer_triages
hide_title: false
hide_table_of_contents: false
keywords:
  - siem_ioc_explorer_triages
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

Creates, updates, deletes, gets or lists a <code>siem_ioc_explorer_triages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="siem_ioc_explorer_triages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.siem_ioc_explorer_triages" /></td></tr>
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
    <td><a href="#create_io_ctriage_state"><CopyableCode code="create_io_ctriage_state" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Set the triage state of an indicator of compromise (IoC). This creates or&lt;br /&gt;updates the triage state for the indicator in your organization.</td>
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
    defaultValue="create_io_ctriage_state"
    values={[
        { label: 'create_io_ctriage_state', value: 'create_io_ctriage_state' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_io_ctriage_state">

Set the triage state of an indicator of compromise (IoC). This creates or&lt;br /&gt;updates the triage state for the indicator in your organization.

```sql
INSERT INTO datadog.security.siem_ioc_explorer_triages (
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
- name: siem_ioc_explorer_triages
  props:
    - name: data
      description: |
        Data object for the triage write request.
      value:
        attributes:
          indicator: "{{ indicator }}"
          triage_state: "{{ triage_state }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
