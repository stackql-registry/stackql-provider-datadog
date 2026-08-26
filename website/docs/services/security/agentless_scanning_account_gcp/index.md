--- 
title: agentless_scanning_account_gcp
hide_title: false
hide_table_of_contents: false
keywords:
  - agentless_scanning_account_gcp
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

Creates, updates, deletes, gets or lists an <code>agentless_scanning_account_gcp</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agentless_scanning_account_gcp" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.agentless_scanning_account_gcp" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gcp_scan_options"
    values={[
        { label: 'get_gcp_scan_options', value: 'get_gcp_scan_options' },
        { label: 'list_gcp_scan_options', value: 'list_gcp_scan_options' }
    ]}
>
<TabItem value="get_gcp_scan_options">

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
    <td>The GCP project ID. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for GCP scan options configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>GCP scan options resource type. (gcp_scan_options) (default: gcp_scan_options, example: gcp_scan_options)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gcp_scan_options">

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
    <td>The GCP project ID. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for GCP scan options configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>GCP scan options resource type. (gcp_scan_options) (default: gcp_scan_options, example: gcp_scan_options)</td>
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
    <td><a href="#get_gcp_scan_options"><CopyableCode code="get_gcp_scan_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Fetches the Agentless scan options for an activated GCP project.</td>
</tr>
<tr>
    <td><a href="#list_gcp_scan_options"><CopyableCode code="list_gcp_scan_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Fetches the scan options configured for all GCP projects.</td>
</tr>
<tr>
    <td><a href="#create_gcp_scan_options"><CopyableCode code="create_gcp_scan_options" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Activate Agentless scan options for a GCP project.</td>
</tr>
<tr>
    <td><a href="#update_gcp_scan_options"><CopyableCode code="update_gcp_scan_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Update the Agentless scan options for an activated GCP project.</td>
</tr>
<tr>
    <td><a href="#delete_gcp_scan_options"><CopyableCode code="delete_gcp_scan_options" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Delete Agentless scan options for a GCP project.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The GCP project ID.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_gcp_scan_options"
    values={[
        { label: 'get_gcp_scan_options', value: 'get_gcp_scan_options' },
        { label: 'list_gcp_scan_options', value: 'list_gcp_scan_options' }
    ]}
>
<TabItem value="get_gcp_scan_options">

Fetches the Agentless scan options for an activated GCP project.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.agentless_scanning_account_gcp
WHERE project_id = '{{ project_id }}' -- required
;
```
</TabItem>
<TabItem value="list_gcp_scan_options">

Fetches the scan options configured for all GCP projects.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.agentless_scanning_account_gcp
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gcp_scan_options"
    values={[
        { label: 'create_gcp_scan_options', value: 'create_gcp_scan_options' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gcp_scan_options">

Activate Agentless scan options for a GCP project.

```sql
INSERT INTO datadog.security.agentless_scanning_account_gcp (
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
- name: agentless_scanning_account_gcp
  props:
    - name: data
      description: |
        Single GCP scan options entry.
      value:
        attributes:
          cloud_function: {{ cloud_function }}
          compliance_host: {{ compliance_host }}
          vuln_containers_os: {{ vuln_containers_os }}
          vuln_host_os: {{ vuln_host_os }}
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gcp_scan_options"
    values={[
        { label: 'update_gcp_scan_options', value: 'update_gcp_scan_options' }
    ]}
>
<TabItem value="update_gcp_scan_options">

Update the Agentless scan options for an activated GCP project.

```sql
UPDATE datadog.security.agentless_scanning_account_gcp
SET 
data = '{{ data }}'
WHERE 
project_id = '{{ project_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gcp_scan_options"
    values={[
        { label: 'delete_gcp_scan_options', value: 'delete_gcp_scan_options' }
    ]}
>
<TabItem value="delete_gcp_scan_options">

Delete Agentless scan options for a GCP project.

```sql
DELETE FROM datadog.security.agentless_scanning_account_gcp
WHERE project_id = '{{ project_id }}' --required
;
```
</TabItem>
</Tabs>
