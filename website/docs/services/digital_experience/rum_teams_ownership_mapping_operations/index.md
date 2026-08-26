--- 
title: rum_teams_ownership_mapping_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_teams_ownership_mapping_operations
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>rum_teams_ownership_mapping_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_teams_ownership_mapping_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_teams_ownership_mapping_operations" /></td></tr>
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
    <td><a href="#create_teams_ownership_mappings_batch"><CopyableCode code="create_teams_ownership_mappings_batch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-atomic:operations"><code>atomic:operations</code></a></td>
    <td></td>
    <td>Add and remove teams ownership mappings for your organization in a single atomic request, following&lt;br /&gt;the JSON:API &#91;atomic operations extension&#93;(https:​//jsonapi.org/ext/atomic/).&lt;br /&gt;Operations are applied together: if any operation is invalid, none of the operations are applied.&lt;br /&gt;Add operations are processed before remove operations, so results may not appear in the same&lt;br /&gt;order as the request.</td>
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
    defaultValue="create_teams_ownership_mappings_batch"
    values={[
        { label: 'create_teams_ownership_mappings_batch', value: 'create_teams_ownership_mappings_batch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_teams_ownership_mappings_batch">

Add and remove teams ownership mappings for your organization in a single atomic request, following&lt;br /&gt;the JSON:API &#91;atomic operations extension&#93;(https:​//jsonapi.org/ext/atomic/).&lt;br /&gt;Operations are applied together: if any operation is invalid, none of the operations are applied.&lt;br /&gt;Add operations are processed before remove operations, so results may not appear in the same&lt;br /&gt;order as the request.

```sql
INSERT INTO datadog.digital_experience.rum_teams_ownership_mapping_operations (
atomic:operations
)
SELECT 
'{{ atomic:operations }}' /* required */
RETURNING
atomic:results,
errors
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rum_teams_ownership_mapping_operations
  props:
    - name: atomic:operations
      description: |
        The list of add and remove operations to apply atomically.
      value:
        - data:
            attributes:
              application_id: "{{ application_id }}"
              match_type: "{{ match_type }}"
              service: "{{ service }}"
              team_handle: "{{ team_handle }}"
              view_name: "{{ view_name }}"
            type: "{{ type }}"
          op: "{{ op }}"
          ref:
            id: "{{ id }}"
            type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
