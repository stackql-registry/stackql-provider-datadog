--- 
title: dora_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - dora_deployments
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>dora_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dora_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.dora_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_doradeployment"
    values={[
        { label: 'get_doradeployment', value: 'get_doradeployment' },
        { label: 'list_doradeployments', value: 'list_doradeployments' }
    ]}
>
<TabItem value="get_doradeployment">

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
    <td>The ID of the deployment event.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the deployment event.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API type for DORA deployment events. (dora_deployment) (default: dora_deployment, example: dora_deployment)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_doradeployments">

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
    <td><CopyableCode code="data" /></td>
    <td><code>array</code></td>
    <td>The list of DORA deployment events.</td>
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
    <td><a href="#get_doradeployment"><CopyableCode code="get_doradeployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>Use this API endpoint to get a deployment event.</td>
</tr>
<tr>
    <td><a href="#list_doradeployments"><CopyableCode code="list_doradeployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Use this API endpoint to get a list of deployment events.</td>
</tr>
<tr>
    <td><a href="#create_doradeployment"><CopyableCode code="create_doradeployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Use this API endpoint to provide deployment data.&lt;br /&gt;&lt;br /&gt;This is necessary for:&lt;br /&gt;- Deployment Frequency&lt;br /&gt;- Change Lead Time&lt;br /&gt;- Change Failure Rate&lt;br /&gt;- Failed Deployment Recovery Time</td>
</tr>
<tr>
    <td><a href="#patch_doradeployment"><CopyableCode code="patch_doradeployment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a deployment's change failure status. Use this to mark a deployment as a change failure or back to stable. You can optionally include remediation details to enable failed deployment recovery time calculation.</td>
</tr>
<tr>
    <td><a href="#patch_doradeployment_by_version"><CopyableCode code="patch_doradeployment_by_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a deployment's change failure status, identifying the deployment by its service, environment, and version instead of its ID. Use this to mark a deployment as a change failure or back to stable. You can optionally include remediation details to enable failed deployment recovery time calculation. If multiple deployments match the given service, environment, and version, the most recently finished one is updated.</td>
</tr>
<tr>
    <td><a href="#delete_doradeployment"><CopyableCode code="delete_doradeployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>Use this API endpoint to delete a deployment event.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment event to delete.</td>
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
    defaultValue="get_doradeployment"
    values={[
        { label: 'get_doradeployment', value: 'get_doradeployment' },
        { label: 'list_doradeployments', value: 'list_doradeployments' }
    ]}
>
<TabItem value="get_doradeployment">

Use this API endpoint to get a deployment event.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.dora_deployments
WHERE deployment_id = '{{ deployment_id }}' -- required
;
```
</TabItem>
<TabItem value="list_doradeployments">

Use this API endpoint to get a list of deployment events.

```sql
SELECT
data
FROM datadog.software_delivery.dora_deployments
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_doradeployment"
    values={[
        { label: 'create_doradeployment', value: 'create_doradeployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_doradeployment">

Use this API endpoint to provide deployment data.&lt;br /&gt;&lt;br /&gt;This is necessary for:&lt;br /&gt;- Deployment Frequency&lt;br /&gt;- Change Lead Time&lt;br /&gt;- Change Failure Rate&lt;br /&gt;- Failed Deployment Recovery Time

```sql
INSERT INTO datadog.software_delivery.dora_deployments (
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
- name: dora_deployments
  props:
    - name: data
      description: |
        The JSON:API data.
      value:
        attributes:
          custom_tags:
            - "{{ custom_tags }}"
          env: "{{ env }}"
          finished_at: {{ finished_at }}
          git:
            commit_sha: "{{ commit_sha }}"
            repository_url: "{{ repository_url }}"
          id: "{{ id }}"
          service: "{{ service }}"
          started_at: {{ started_at }}
          team: "{{ team }}"
          version: "{{ version }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_doradeployment"
    values={[
        { label: 'patch_doradeployment', value: 'patch_doradeployment' },
        { label: 'patch_doradeployment_by_version', value: 'patch_doradeployment_by_version' }
    ]}
>
<TabItem value="patch_doradeployment">

Update a deployment's change failure status. Use this to mark a deployment as a change failure or back to stable. You can optionally include remediation details to enable failed deployment recovery time calculation.

```sql
UPDATE datadog.software_delivery.dora_deployments
SET 
data = '{{ data }}'
WHERE 
deployment_id = '{{ deployment_id }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
<TabItem value="patch_doradeployment_by_version">

Update a deployment's change failure status, identifying the deployment by its service, environment, and version instead of its ID. Use this to mark a deployment as a change failure or back to stable. You can optionally include remediation details to enable failed deployment recovery time calculation. If multiple deployments match the given service, environment, and version, the most recently finished one is updated.

```sql
UPDATE datadog.software_delivery.dora_deployments
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_doradeployment"
    values={[
        { label: 'delete_doradeployment', value: 'delete_doradeployment' }
    ]}
>
<TabItem value="delete_doradeployment">

Use this API endpoint to delete a deployment event.

```sql
DELETE FROM datadog.software_delivery.dora_deployments
WHERE deployment_id = '{{ deployment_id }}' --required
;
```
</TabItem>
</Tabs>
