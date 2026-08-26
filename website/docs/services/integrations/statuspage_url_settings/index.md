--- 
title: statuspage_url_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspage_url_settings
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

Creates, updates, deletes, gets or lists a <code>statuspage_url_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspage_url_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.statuspage_url_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_statuspage_url_settings"
    values={[
        { label: 'list_statuspage_url_settings', value: 'list_statuspage_url_settings' }
    ]}
>
<TabItem value="list_statuspage_url_settings">

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
    <td>The ID of the Statuspage URL setting. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes from a Statuspage URL setting response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Statuspage URL setting resource type. (statuspage-url-setting) (default: statuspage-url-setting, example: statuspage-url-setting)</td>
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
    <td><a href="#list_statuspage_url_settings"><CopyableCode code="list_statuspage_url_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all Statuspage URL settings configured for your organization.</td>
</tr>
<tr>
    <td><a href="#create_statuspage_url_setting"><CopyableCode code="create_statuspage_url_setting" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Statuspage URL setting for your organization.</td>
</tr>
<tr>
    <td><a href="#update_statuspage_url_setting"><CopyableCode code="update_statuspage_url_setting" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-statuspage_url_setting_id"><code>statuspage_url_setting_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a single Statuspage URL setting in your organization.</td>
</tr>
<tr>
    <td><a href="#delete_statuspage_url_setting"><CopyableCode code="delete_statuspage_url_setting" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-statuspage_url_setting_id"><code>statuspage_url_setting_id</code></a></td>
    <td></td>
    <td>Delete a single Statuspage URL setting from your organization.</td>
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
<tr id="parameter-statuspage_url_setting_id">
    <td><CopyableCode code="statuspage_url_setting_id" /></td>
    <td><code>string</code></td>
    <td>The UUID of the Statuspage URL setting.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_statuspage_url_settings"
    values={[
        { label: 'list_statuspage_url_settings', value: 'list_statuspage_url_settings' }
    ]}
>
<TabItem value="list_statuspage_url_settings">

Get all Statuspage URL settings configured for your organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.statuspage_url_settings
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_statuspage_url_setting"
    values={[
        { label: 'create_statuspage_url_setting', value: 'create_statuspage_url_setting' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_statuspage_url_setting">

Create a Statuspage URL setting for your organization.

```sql
INSERT INTO datadog.integrations.statuspage_url_settings (
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
- name: statuspage_url_settings
  props:
    - name: data
      description: |
        Statuspage URL setting data for a create request.
      value:
        attributes:
          custom_tags: "{{ custom_tags }}"
          url: "{{ url }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_statuspage_url_setting"
    values={[
        { label: 'update_statuspage_url_setting', value: 'update_statuspage_url_setting' }
    ]}
>
<TabItem value="update_statuspage_url_setting">

Update a single Statuspage URL setting in your organization.

```sql
UPDATE datadog.integrations.statuspage_url_settings
SET 
data = '{{ data }}'
WHERE 
statuspage_url_setting_id = '{{ statuspage_url_setting_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_statuspage_url_setting"
    values={[
        { label: 'delete_statuspage_url_setting', value: 'delete_statuspage_url_setting' }
    ]}
>
<TabItem value="delete_statuspage_url_setting">

Delete a single Statuspage URL setting from your organization.

```sql
DELETE FROM datadog.integrations.statuspage_url_settings
WHERE statuspage_url_setting_id = '{{ statuspage_url_setting_id }}' --required
;
```
</TabItem>
</Tabs>
