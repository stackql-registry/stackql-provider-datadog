--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
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

Creates, updates, deletes, gets or lists a <code>workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

Successfully got a workflow.

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
    <td>The workflow identifier</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The definition of `WorkflowDataAttributes` object.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The definition of `WorkflowDataRelationships` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The definition of `WorkflowDataType` object. (workflows) (example: workflows)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflows">

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
    <td>The workflow identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a workflow returned in a list response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The definition of `WorkflowDataRelationships` object.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The definition of `WorkflowDataType` object. (workflows) (example: workflows)</td>
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
    <td><a href="#get_workflow"><CopyableCode code="get_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td></td>
    <td>Get a workflow by ID. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[trigger_ids]"><code>filter[trigger_ids]</code></a>, <a href="#parameter-filter[include_unpublished]"><code>filter[include_unpublished]</code></a>, <a href="#parameter-filter[include_specs]"><code>filter[include_specs]</code></a></td>
    <td>List all workflows in your organization. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#create_workflow"><CopyableCode code="create_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new workflow, returning the workflow ID. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#update_workflow"><CopyableCode code="update_workflow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a workflow by ID. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td></td>
    <td>Delete a workflow by ID. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
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
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workflow.</td>
</tr>
<tr id="parameter-filter[include_specs]">
    <td><CopyableCode code="filter[include_specs]" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include the full spec of each workflow in the response. When `false` (the default), each workflow's `spec` is returned as `null`. (wire: filter&#91;includeSpecs&#93;)</td>
</tr>
<tr id="parameter-filter[include_unpublished]">
    <td><CopyableCode code="filter[include_unpublished]" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include unpublished workflows in the response. (wire: filter&#91;includeUnpublished&#93;)</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>A search query used to filter the returned workflows. The query performs a case-insensitive substring match against each workflow's name, creator name, and handle. If the query contains a colon (for example, `team:infra`), the query is treated as a `key:value` tag filter. (example: deploy)</td>
</tr>
<tr id="parameter-filter[trigger_ids]">
    <td><CopyableCode code="filter[trigger_ids]" /></td>
    <td><code>array</code></td>
    <td>Filters the returned workflows by one or more trigger types, such as `monitor`, `schedule`, or `githubWebhook`. To specify the multiple types, repeat this parameter. (example: &#91;monitor&#93;) (wire: filter&#91;triggerIds&#93;)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of workflows to return per page. (example: 50)</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to return, starting from 0. (example: 0)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The sort order for the returned workflows. Provide a comma-separated list of fields, each optionally prefixed with `-` for descending order. Supported fields are `name`, `createdAt`, `updatedAt`, `creatorName`, `ownerName`, and `lastExecutedAt`. (example: -updatedAt)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

Get a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.software_delivery.workflows
WHERE workflow_id = '{{ workflow_id }}' -- required
;
```
</TabItem>
<TabItem value="list_workflows">

List all workflows in your organization. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.software_delivery.workflows
WHERE limit = '{{ limit }}'
AND page = '{{ page }}'
AND sort = '{{ sort }}'
AND filter[query] = '{{ filter[query] }}'
AND filter[trigger_ids] = '{{ filter[trigger_ids] }}'
AND filter[include_unpublished] = '{{ filter[include_unpublished] }}'
AND filter[include_specs] = '{{ filter[include_specs] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow"
    values={[
        { label: 'create_workflow', value: 'create_workflow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow">

Create a new workflow, returning the workflow ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
INSERT INTO datadog.software_delivery.workflows (
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
- name: workflows
  props:
    - name: data
      description: |
        Data related to the workflow.
      value:
        attributes:
          createdAt: "{{ createdAt }}"
          description: "{{ description }}"
          name: "{{ name }}"
          published: {{ published }}
          spec:
            annotations:
              - display:
                  bounds: "{{ bounds }}"
                id: "{{ id }}"
                markdownTextAnnotation:
                  text: "{{ text }}"
            connectionEnvs:
              - connectionGroups: "{{ connectionGroups }}"
                connections: "{{ connections }}"
                env: "{{ env }}"
            handle: "{{ handle }}"
            inputSchema:
              parameters:
                - allowExtraValues: {{ allowExtraValues }}
                  allowedValues: "{{ allowedValues }}"
                  defaultValue: "{{ defaultValue }}"
                  description: "{{ description }}"
                  label: "{{ label }}"
                  name: "{{ name }}"
                  type: "{{ type }}"
            outputSchema:
              parameters:
                - defaultValue: "{{ defaultValue }}"
                  description: "{{ description }}"
                  label: "{{ label }}"
                  name: "{{ name }}"
                  type: "{{ type }}"
                  value: "{{ value }}"
            steps:
              - actionId: "{{ actionId }}"
                completionGate:
                  completionCondition: "{{ completionCondition }}"
                  retryStrategy: "{{ retryStrategy }}"
                connectionLabel: "{{ connectionLabel }}"
                display:
                  bounds: "{{ bounds }}"
                errorHandlers: "{{ errorHandlers }}"
                name: "{{ name }}"
                outboundEdges: "{{ outboundEdges }}"
                parameters: "{{ parameters }}"
                readinessGate:
                  thresholdType: "{{ thresholdType }}"
            triggers:
              - agentTrigger:
                  rateLimit: "{{ rateLimit }}"
                startStepNames: "{{ startStepNames }}"
                apiTrigger:
                  rateLimit: "{{ rateLimit }}"
                appTrigger: "{{ appTrigger }}"
                caseTrigger:
                  rateLimit: "{{ rateLimit }}"
                changeEventTrigger: "{{ changeEventTrigger }}"
                databaseMonitoringTrigger: "{{ databaseMonitoringTrigger }}"
                datastoreTrigger:
                  rateLimit: "{{ rateLimit }}"
                dashboardTrigger: "{{ dashboardTrigger }}"
                formTrigger:
                  formId: "{{ formId }}"
                githubWebhookTrigger:
                  rateLimit: "{{ rateLimit }}"
                incidentTrigger:
                  rateLimit: "{{ rateLimit }}"
                monitorTrigger:
                  rateLimit: "{{ rateLimit }}"
                notebookTrigger: "{{ notebookTrigger }}"
                onCallTrigger:
                  rateLimit: "{{ rateLimit }}"
                scheduleTrigger:
                  overlapBehavior: "{{ overlapBehavior }}"
                  rruleExpression: "{{ rruleExpression }}"
                securityTrigger:
                  rateLimit: "{{ rateLimit }}"
                selfServiceTrigger: "{{ selfServiceTrigger }}"
                slackTrigger: "{{ slackTrigger }}"
                softwareCatalogTrigger: "{{ softwareCatalogTrigger }}"
                workflowTrigger: "{{ workflowTrigger }}"
          tags:
            - "{{ tags }}"
          updatedAt: "{{ updatedAt }}"
          webhookSecret: "{{ webhookSecret }}"
        id: "{{ id }}"
        relationships:
          creator:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
          owner:
            data:
              id: "{{ id }}"
              type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflow"
    values={[
        { label: 'update_workflow', value: 'update_workflow' }
    ]}
>
<TabItem value="update_workflow">

Update a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
UPDATE datadog.software_delivery.workflows
SET 
data = '{{ data }}'
WHERE 
workflow_id = '{{ workflow_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow"
    values={[
        { label: 'delete_workflow', value: 'delete_workflow' }
    ]}
>
<TabItem value="delete_workflow">

Delete a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
DELETE FROM datadog.software_delivery.workflows
WHERE workflow_id = '{{ workflow_id }}' --required
;
```
</TabItem>
</Tabs>
