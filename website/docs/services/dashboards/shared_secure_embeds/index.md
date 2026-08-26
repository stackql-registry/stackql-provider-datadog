--- 
title: shared_secure_embeds
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_secure_embeds
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>shared_secure_embeds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_secure_embeds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.shared_secure_embeds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard_secure_embed"
    values={[
        { label: 'get_dashboard_secure_embed', value: 'get_dashboard_secure_embed' }
    ]}
>
<TabItem value="get_dashboard_secure_embed">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Internal share ID. (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an existing secure embed shared dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type for secure embed get responses. (secure_embed_get_response) (example: secure_embed_get_response)</td>
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
    <td><a href="#get_dashboard_secure_embed"><CopyableCode code="get_dashboard_secure_embed" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Retrieve an existing secure embed configuration for a dashboard.</td>
</tr>
<tr>
    <td><a href="#create_dashboard_secure_embed"><CopyableCode code="create_dashboard_secure_embed" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a secure embed share for a dashboard. The response includes a one-time `credential` used for HMAC-SHA256 signing. Store it securely — it cannot be retrieved again.</td>
</tr>
<tr>
    <td><a href="#update_dashboard_secure_embed"><CopyableCode code="update_dashboard_secure_embed" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Partially update a secure embed configuration. All fields are optional (PATCH semantics).</td>
</tr>
<tr>
    <td><a href="#delete_dashboard_secure_embed"><CopyableCode code="delete_dashboard_secure_embed" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Delete a secure embed share for a dashboard.</td>
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
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dashboard. (example: abc-def-ghi)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The share token identifying the secure embed. (example: s3cur3t0k3n-abcdef123456)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dashboard_secure_embed"
    values={[
        { label: 'get_dashboard_secure_embed', value: 'get_dashboard_secure_embed' }
    ]}
>
<TabItem value="get_dashboard_secure_embed">

Retrieve an existing secure embed configuration for a dashboard.

```sql
SELECT
id,
attributes,
type
FROM datadog.dashboards.shared_secure_embeds
WHERE dashboard_id = '{{ dashboard_id }}' -- required
AND token = '{{ token }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dashboard_secure_embed"
    values={[
        { label: 'create_dashboard_secure_embed', value: 'create_dashboard_secure_embed' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dashboard_secure_embed">

Create a secure embed share for a dashboard. The response includes a one-time `credential` used for HMAC-SHA256 signing. Store it securely — it cannot be retrieved again.

```sql
INSERT INTO datadog.dashboards.shared_secure_embeds (
data,
dashboard_id
)
SELECT 
'{{ data }}' /* required */,
'{{ dashboard_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: shared_secure_embeds
  props:
    - name: dashboard_id
      value: "{{ dashboard_id }}"
      description: Required parameter for the shared_secure_embeds resource.
    - name: data
      description: |
        Data object for creating a secure embed.
      value:
        attributes:
          global_time:
            live_span: "{{ live_span }}"
          global_time_selectable: {{ global_time_selectable }}
          selectable_template_vars:
            - default_values: "{{ default_values }}"
              name: "{{ name }}"
              prefix: "{{ prefix }}"
              visible_tags: "{{ visible_tags }}"
          status: "{{ status }}"
          title: "{{ title }}"
          viewing_preferences:
            high_density: {{ high_density }}
            theme: "{{ theme }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dashboard_secure_embed"
    values={[
        { label: 'update_dashboard_secure_embed', value: 'update_dashboard_secure_embed' }
    ]}
>
<TabItem value="update_dashboard_secure_embed">

Partially update a secure embed configuration. All fields are optional (PATCH semantics).

```sql
UPDATE datadog.dashboards.shared_secure_embeds
SET 
data = '{{ data }}'
WHERE 
dashboard_id = '{{ dashboard_id }}' --required
AND token = '{{ token }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dashboard_secure_embed"
    values={[
        { label: 'delete_dashboard_secure_embed', value: 'delete_dashboard_secure_embed' }
    ]}
>
<TabItem value="delete_dashboard_secure_embed">

Delete a secure embed share for a dashboard.

```sql
DELETE FROM datadog.dashboards.shared_secure_embeds
WHERE dashboard_id = '{{ dashboard_id }}' --required
AND token = '{{ token }}' --required
;
```
</TabItem>
</Tabs>
