--- 
title: statuspage_degradation_backfills
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_degradation_backfills
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

Creates, updates, deletes, gets or lists a <code>statuspage_degradation_backfills</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_degradation_backfills" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspage_degradation_backfills" /></td></tr>
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
    <td><a href="#create_backfilled_degradation"><CopyableCode code="create_backfilled_degradation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Creates a backfilled degradation with predefined updates.</td>
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
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the status page.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_backfilled_degradation"
    values={[
        { label: 'create_backfilled_degradation', value: 'create_backfilled_degradation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backfilled_degradation">

Creates a backfilled degradation with predefined updates.

```sql
INSERT INTO datadog.service_management.statuspage_degradation_backfills (
data,
page_id,
include
)
SELECT 
'{{ data }}',
'{{ page_id }}',
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: statuspage_degradation_backfills
  props:
    - name: page_id
      value: "{{ page_id }}"
      description: Required parameter for the statuspage_degradation_backfills resource.
    - name: data
      description: |
        The data object for creating a backfilled degradation.
      value:
        attributes:
          title: "{{ title }}"
          updates:
            - components_affected: "{{ components_affected }}"
              description: "{{ description }}"
              started_at: "{{ started_at }}"
              status: "{{ status }}"
        relationships:
          template:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
`}</CodeBlock>

</TabItem>
</Tabs>
