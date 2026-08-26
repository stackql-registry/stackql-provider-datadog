--- 
title: csm_ownership_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_ownership_settings
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

Creates, updates, deletes, gets or lists a <code>csm_ownership_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_ownership_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.csm_ownership_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ownership_settings"
    values={[
        { label: 'get_ownership_settings', value: 'get_ownership_settings' }
    ]}
>
<TabItem value="get_ownership_settings">

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
    <td>The identifier of the ownership settings resource. (example: settings)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the ownership settings response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the ownership settings resource. The value should always be `ownership_settings`. (ownership_settings) (default: ownership_settings, example: ownership_settings)</td>
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
    <td><a href="#get_ownership_settings"><CopyableCode code="get_ownership_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get ownership settings for the org. When settings are unset, the API returns the default opt-out configuration with `auto_tag` set to `true` and `confidence_level` set to `high`.</td>
</tr>
<tr>
    <td><a href="#post_ownership_settings"><CopyableCode code="post_ownership_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update ownership settings for the org.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_ownership_settings"
    values={[
        { label: 'get_ownership_settings', value: 'get_ownership_settings' }
    ]}
>
<TabItem value="get_ownership_settings">

Get ownership settings for the org. When settings are unset, the API returns the default opt-out configuration with `auto_tag` set to `true` and `confidence_level` set to `high`.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.csm_ownership_settings
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="post_ownership_settings"
    values={[
        { label: 'post_ownership_settings', value: 'post_ownership_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="post_ownership_settings">

Update ownership settings for the org.

```sql
INSERT INTO datadog.security.csm_ownership_settings (
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
- name: csm_ownership_settings
  props:
    - name: data
      description: |
        The data wrapper for an ownership settings request.
      value:
        attributes:
          auto_tag: {{ auto_tag }}
          confidence_level: "{{ confidence_level }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
