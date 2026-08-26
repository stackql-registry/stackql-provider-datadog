--- 
title: restriction_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - restriction_policies
  - organization
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

Creates, updates, deletes, gets or lists a <code>restriction_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restriction_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.restriction_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restriction_policy"
    values={[
        { label: 'get_restriction_policy', value: 'get_restriction_policy' }
    ]}
>
<TabItem value="get_restriction_policy">

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
    <td>The identifier, always equivalent to the value specified in the `resource_id` path parameter. (example: dashboard:abc-def-ghi)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Restriction policy attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Restriction policy type. (restriction_policy) (default: restriction_policy, example: restriction_policy)</td>
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
    <td><a href="#get_restriction_policy"><CopyableCode code="get_restriction_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>Retrieves the restriction policy associated with a specified resource.</td>
</tr>
<tr>
    <td><a href="#update_restriction_policy"><CopyableCode code="update_restriction_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-allow_self_lockout"><code>allow_self_lockout</code></a></td>
    <td>Updates the restriction policy associated with a resource.&lt;br /&gt;&lt;br /&gt;#### Supported resources&lt;br /&gt;Restriction policies can be applied to the following resources:&lt;br /&gt;- Dashboards: `dashboard`&lt;br /&gt;- Integration Services: `integration-service`&lt;br /&gt;- Integration Webhooks: `integration-webhook`&lt;br /&gt;- Notebooks: `notebook`&lt;br /&gt;- Powerpacks: `powerpack`&lt;br /&gt;- Reference Tables: `reference-table`&lt;br /&gt;- Security Rules: `security-rule`&lt;br /&gt;- Service Level Objectives: `slo`&lt;br /&gt;- Synthetic Global Variables: `synthetics-global-variable`&lt;br /&gt;- Synthetic Tests: `synthetics-test`&lt;br /&gt;- Synthetic Private Locations: `synthetics-private-location`&lt;br /&gt;- Monitors: `monitor`&lt;br /&gt;- Workflows: `workflow`&lt;br /&gt;- App Builder Apps: `app-builder-app`&lt;br /&gt;- Connections: `connection`&lt;br /&gt;- Connection Groups: `connection-group`&lt;br /&gt;- RUM Applications: `rum-application`&lt;br /&gt;- Cross Org Connections: `cross-org-connection`&lt;br /&gt;- Spreadsheets: `spreadsheet`&lt;br /&gt;- On-Call Schedules: `on-call-schedule`&lt;br /&gt;- On-Call Escalation Policies: `on-call-escalation-policy`&lt;br /&gt;- On-Call Team Routing Rules: `on-call-team-routing-rules`&lt;br /&gt;- Logs Pipelines: `logs-pipeline`&lt;br /&gt;- Case Management Projects: `case-management-project`&lt;br /&gt;- Monitor Notification Rules: `monitor-notification-rule`&lt;br /&gt;- Status Pages: `status-page`&lt;br /&gt;- Feature Flags: `feature-flag`&lt;br /&gt;&lt;br /&gt;#### Supported relations for resources&lt;br /&gt;Resource Type               | Supported Relations&lt;br /&gt;----------------------------|--------------------------&lt;br /&gt;Dashboards                  | `viewer`, `editor`&lt;br /&gt;Integration Services        | `viewer`, `editor`&lt;br /&gt;Integration Webhooks        | `viewer`, `editor`&lt;br /&gt;Notebooks                   | `viewer`, `editor`&lt;br /&gt;Powerpacks                  | `viewer`, `editor`&lt;br /&gt;Security Rules              | `viewer`, `editor`&lt;br /&gt;Service Level Objectives    | `viewer`, `editor`&lt;br /&gt;Synthetic Global Variables  | `viewer`, `editor`&lt;br /&gt;Synthetic Tests             | `viewer`, `editor`&lt;br /&gt;Synthetic Private Locations | `viewer`, `editor`&lt;br /&gt;Monitors                    | `viewer`, `editor`&lt;br /&gt;Reference Tables            | `viewer`, `editor`&lt;br /&gt;Workflows                   | `viewer`, `runner`, `editor`&lt;br /&gt;App Builder Apps            | `viewer`, `editor`&lt;br /&gt;Connections                 | `viewer`, `resolver`, `editor`&lt;br /&gt;Connection Groups           | `viewer`, `editor`&lt;br /&gt;RUM Application             | `viewer`, `editor`&lt;br /&gt;Cross Org Connections       | `viewer`, `editor`&lt;br /&gt;Spreadsheets                | `viewer`, `editor`&lt;br /&gt;On-Call Schedules           | `viewer`, `overrider`, `editor`&lt;br /&gt;On-Call Escalation Policies | `viewer`, `editor`&lt;br /&gt;On-Call Team Routing Rules  | `viewer`, `editor`&lt;br /&gt;Logs Pipelines              | `viewer`, `processors_editor`, `editor`&lt;br /&gt;Case Management Projects    | `viewer`, `contributor`, `manager`&lt;br /&gt;Monitor Notification Rules  | `viewer`, `editor`&lt;br /&gt;Status Pages                | `viewer`, `responder`, `manager`&lt;br /&gt;Feature Flags               | `viewer`, `contributor`, `editor`</td>
</tr>
<tr>
    <td><a href="#delete_restriction_policy"><CopyableCode code="delete_restriction_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>Deletes the restriction policy associated with a specified resource.</td>
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
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `powerpack`, `reference-table`, `security-rule`, `slo`, `synthetics-global-variable`, `synthetics-test`, `synthetics-private-location`, `monitor`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`, `case-management-project`, `monitor-notification-rule`, `status-page`, `feature-flag`. (example: dashboard:abc-def-ghi)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-allow_self_lockout">
    <td><CopyableCode code="allow_self_lockout" /></td>
    <td><code>boolean</code></td>
    <td>Allows admins (users with the `user_access_manage` permission) to remove their own access from the resource if set to `true`. By default, this is set to `false`, preventing admins from locking themselves out.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restriction_policy"
    values={[
        { label: 'get_restriction_policy', value: 'get_restriction_policy' }
    ]}
>
<TabItem value="get_restriction_policy">

Retrieves the restriction policy associated with a specified resource.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.restriction_policies
WHERE resource_id = '{{ resource_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_restriction_policy"
    values={[
        { label: 'update_restriction_policy', value: 'update_restriction_policy' }
    ]}
>
<TabItem value="update_restriction_policy">

Updates the restriction policy associated with a resource.&lt;br /&gt;&lt;br /&gt;#### Supported resources&lt;br /&gt;Restriction policies can be applied to the following resources:&lt;br /&gt;- Dashboards: `dashboard`&lt;br /&gt;- Integration Services: `integration-service`&lt;br /&gt;- Integration Webhooks: `integration-webhook`&lt;br /&gt;- Notebooks: `notebook`&lt;br /&gt;- Powerpacks: `powerpack`&lt;br /&gt;- Reference Tables: `reference-table`&lt;br /&gt;- Security Rules: `security-rule`&lt;br /&gt;- Service Level Objectives: `slo`&lt;br /&gt;- Synthetic Global Variables: `synthetics-global-variable`&lt;br /&gt;- Synthetic Tests: `synthetics-test`&lt;br /&gt;- Synthetic Private Locations: `synthetics-private-location`&lt;br /&gt;- Monitors: `monitor`&lt;br /&gt;- Workflows: `workflow`&lt;br /&gt;- App Builder Apps: `app-builder-app`&lt;br /&gt;- Connections: `connection`&lt;br /&gt;- Connection Groups: `connection-group`&lt;br /&gt;- RUM Applications: `rum-application`&lt;br /&gt;- Cross Org Connections: `cross-org-connection`&lt;br /&gt;- Spreadsheets: `spreadsheet`&lt;br /&gt;- On-Call Schedules: `on-call-schedule`&lt;br /&gt;- On-Call Escalation Policies: `on-call-escalation-policy`&lt;br /&gt;- On-Call Team Routing Rules: `on-call-team-routing-rules`&lt;br /&gt;- Logs Pipelines: `logs-pipeline`&lt;br /&gt;- Case Management Projects: `case-management-project`&lt;br /&gt;- Monitor Notification Rules: `monitor-notification-rule`&lt;br /&gt;- Status Pages: `status-page`&lt;br /&gt;- Feature Flags: `feature-flag`&lt;br /&gt;&lt;br /&gt;#### Supported relations for resources&lt;br /&gt;Resource Type               | Supported Relations&lt;br /&gt;----------------------------|--------------------------&lt;br /&gt;Dashboards                  | `viewer`, `editor`&lt;br /&gt;Integration Services        | `viewer`, `editor`&lt;br /&gt;Integration Webhooks        | `viewer`, `editor`&lt;br /&gt;Notebooks                   | `viewer`, `editor`&lt;br /&gt;Powerpacks                  | `viewer`, `editor`&lt;br /&gt;Security Rules              | `viewer`, `editor`&lt;br /&gt;Service Level Objectives    | `viewer`, `editor`&lt;br /&gt;Synthetic Global Variables  | `viewer`, `editor`&lt;br /&gt;Synthetic Tests             | `viewer`, `editor`&lt;br /&gt;Synthetic Private Locations | `viewer`, `editor`&lt;br /&gt;Monitors                    | `viewer`, `editor`&lt;br /&gt;Reference Tables            | `viewer`, `editor`&lt;br /&gt;Workflows                   | `viewer`, `runner`, `editor`&lt;br /&gt;App Builder Apps            | `viewer`, `editor`&lt;br /&gt;Connections                 | `viewer`, `resolver`, `editor`&lt;br /&gt;Connection Groups           | `viewer`, `editor`&lt;br /&gt;RUM Application             | `viewer`, `editor`&lt;br /&gt;Cross Org Connections       | `viewer`, `editor`&lt;br /&gt;Spreadsheets                | `viewer`, `editor`&lt;br /&gt;On-Call Schedules           | `viewer`, `overrider`, `editor`&lt;br /&gt;On-Call Escalation Policies | `viewer`, `editor`&lt;br /&gt;On-Call Team Routing Rules  | `viewer`, `editor`&lt;br /&gt;Logs Pipelines              | `viewer`, `processors_editor`, `editor`&lt;br /&gt;Case Management Projects    | `viewer`, `contributor`, `manager`&lt;br /&gt;Monitor Notification Rules  | `viewer`, `editor`&lt;br /&gt;Status Pages                | `viewer`, `responder`, `manager`&lt;br /&gt;Feature Flags               | `viewer`, `contributor`, `editor`

```sql
REPLACE datadog.organization.restriction_policies
SET 
data = '{{ data }}'
WHERE 
resource_id = '{{ resource_id }}' --required
AND data = '{{ data }}' --required
AND allow_self_lockout = {{ allow_self_lockout}}
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_restriction_policy"
    values={[
        { label: 'delete_restriction_policy', value: 'delete_restriction_policy' }
    ]}
>
<TabItem value="delete_restriction_policy">

Deletes the restriction policy associated with a specified resource.

```sql
DELETE FROM datadog.organization.restriction_policies
WHERE resource_id = '{{ resource_id }}' --required
;
```
</TabItem>
</Tabs>
