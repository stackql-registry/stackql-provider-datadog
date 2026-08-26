--- 
title: app_builder_app_publish_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - app_builder_app_publish_requests
  - infrastructure
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

Creates, updates, deletes, gets or lists an <code>app_builder_app_publish_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_builder_app_publish_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.app_builder_app_publish_requests" /></td></tr>
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
    <td><a href="#create_publish_request"><CopyableCode code="create_publish_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Create a publish request to ask for approval to publish an app whose protection level is `approval_required`. Publishing happens automatically once the request is approved by a user with the appropriate permissions.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the app. (example: 65bb1f25-52e1-4510-9f8d-22d1516ed693)</td>
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
    defaultValue="create_publish_request"
    values={[
        { label: 'create_publish_request', value: 'create_publish_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_publish_request">

Create a publish request to ask for approval to publish an app whose protection level is `approval_required`. Publishing happens automatically once the request is approved by a user with the appropriate permissions.

```sql
INSERT INTO datadog.infrastructure.app_builder_app_publish_requests (
data,
app_id
)
SELECT 
'{{ data }}',
'{{ app_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_builder_app_publish_requests
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the app_builder_app_publish_requests resource.
    - name: data
      description: |
        Data for creating a publish request.
      value:
        attributes:
          description: "{{ description }}"
          title: "{{ title }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
