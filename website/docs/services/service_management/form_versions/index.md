--- 
title: form_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - form_versions
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

Creates, updates, deletes, gets or lists a <code>form_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="form_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.form_versions" /></td></tr>
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
    <td><a href="#upsert_form_version"><CopyableCode code="upsert_form_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-form_id"><code>form_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or update the latest draft version of a form. The `upsert_params` field controls&lt;br /&gt;optimistic concurrency behavior.</td>
</tr>
<tr>
    <td><a href="#upsert_and_publish_form_version"><CopyableCode code="upsert_and_publish_form_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-form_id"><code>form_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Upsert the latest form version and publish it in a single atomic transaction.</td>
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
<tr id="parameter-form_id">
    <td><CopyableCode code="form_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the form. (example: 22f6006a-2302-4926-9396-d2dfcf7b0b34)</td>
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
    defaultValue="upsert_form_version"
    values={[
        { label: 'upsert_form_version', value: 'upsert_form_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="upsert_form_version">

Create or update the latest draft version of a form. The `upsert_params` field controls&lt;br /&gt;optimistic concurrency behavior.

```sql
INSERT INTO datadog.service_management.form_versions (
data,
form_id
)
SELECT 
'{{ data }}' /* required */,
'{{ form_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: form_versions
  props:
    - name: form_id
      value: "{{ form_id }}"
      description: Required parameter for the form_versions resource.
    - name: data
      description: |
        The data for creating or updating a form version.
      value:
        attributes:
          data_definition:
            description: "{{ description }}"
            properties: "{{ properties }}"
            required:
              - "{{ required }}"
            title: "{{ title }}"
            type: "{{ type }}"
          state: "{{ state }}"
          ui_definition:
            ui:order:
              - "{{ ui:order }}"
            ui:theme:
              primaryColor: "{{ primaryColor }}"
          upsert_params:
            etag: "{{ etag }}"
            insert_only: {{ insert_only }}
            match_policy: "{{ match_policy }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="upsert_and_publish_form_version"
    values={[
        { label: 'upsert_and_publish_form_version', value: 'upsert_and_publish_form_version' }
    ]}
>
<TabItem value="upsert_and_publish_form_version">

Upsert the latest form version and publish it in a single atomic transaction.

```sql
EXEC datadog.service_management.form_versions.upsert_and_publish_form_version 
@form_id='{{ form_id }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
