--- 
title: agentless_scanning_account_azures
hide_title: false
hide_table_of_contents: false
keywords:
  - agentless_scanning_account_azures
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

Creates, updates, deletes, gets or lists an <code>agentless_scanning_account_azures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agentless_scanning_account_azures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.agentless_scanning_account_azures" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_azure_scan_options"
    values={[
        { label: 'get_azure_scan_options', value: 'get_azure_scan_options' },
        { label: 'list_azure_scan_options', value: 'list_azure_scan_options' }
    ]}
>
<TabItem value="get_azure_scan_options">

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
    <td>The Azure subscription ID. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for Azure scan options configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `azure_scan_options`. (azure_scan_options) (default: azure_scan_options, example: azure_scan_options)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_azure_scan_options">

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
    <td>The Azure subscription ID. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for Azure scan options configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `azure_scan_options`. (azure_scan_options) (default: azure_scan_options, example: azure_scan_options)</td>
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
    <td><a href="#get_azure_scan_options"><CopyableCode code="get_azure_scan_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subscription_id"><code>subscription_id</code></a></td>
    <td></td>
    <td>Fetches the Agentless scan options for an activated subscription.</td>
</tr>
<tr>
    <td><a href="#list_azure_scan_options"><CopyableCode code="list_azure_scan_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Fetches the scan options configured for Azure accounts.</td>
</tr>
<tr>
    <td><a href="#create_azure_scan_options"><CopyableCode code="create_azure_scan_options" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Activate Agentless scan options for an Azure subscription.</td>
</tr>
<tr>
    <td><a href="#update_azure_scan_options"><CopyableCode code="update_azure_scan_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-subscription_id"><code>subscription_id</code></a></td>
    <td></td>
    <td>Update the Agentless scan options for an activated subscription.</td>
</tr>
<tr>
    <td><a href="#delete_azure_scan_options"><CopyableCode code="delete_azure_scan_options" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subscription_id"><code>subscription_id</code></a></td>
    <td></td>
    <td>Delete Agentless scan options for an Azure subscription.</td>
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
<tr id="parameter-subscription_id">
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The Azure subscription ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_azure_scan_options"
    values={[
        { label: 'get_azure_scan_options', value: 'get_azure_scan_options' },
        { label: 'list_azure_scan_options', value: 'list_azure_scan_options' }
    ]}
>
<TabItem value="get_azure_scan_options">

Fetches the Agentless scan options for an activated subscription.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.agentless_scanning_account_azures
WHERE subscription_id = '{{ subscription_id }}' -- required
;
```
</TabItem>
<TabItem value="list_azure_scan_options">

Fetches the scan options configured for Azure accounts.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.agentless_scanning_account_azures
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_azure_scan_options"
    values={[
        { label: 'create_azure_scan_options', value: 'create_azure_scan_options' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_azure_scan_options">

Activate Agentless scan options for an Azure subscription.

```sql
INSERT INTO datadog.security.agentless_scanning_account_azures (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agentless_scanning_account_azures
  props:
    - name: data
      description: |
        Single Azure scan options entry.
      value:
        attributes:
          compliance_host: {{ compliance_host }}
          function: {{ function }}
          vuln_containers_os: {{ vuln_containers_os }}
          vuln_host_os: {{ vuln_host_os }}
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_azure_scan_options"
    values={[
        { label: 'update_azure_scan_options', value: 'update_azure_scan_options' }
    ]}
>
<TabItem value="update_azure_scan_options">

Update the Agentless scan options for an activated subscription.

```sql
UPDATE datadog.security.agentless_scanning_account_azures
SET 
data = '{{ data }}'
WHERE 
subscription_id = '{{ subscription_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_azure_scan_options"
    values={[
        { label: 'delete_azure_scan_options', value: 'delete_azure_scan_options' }
    ]}
>
<TabItem value="delete_azure_scan_options">

Delete Agentless scan options for an Azure subscription.

```sql
DELETE FROM datadog.security.agentless_scanning_account_azures
WHERE subscription_id = '{{ subscription_id }}' --required
;
```
</TabItem>
</Tabs>
