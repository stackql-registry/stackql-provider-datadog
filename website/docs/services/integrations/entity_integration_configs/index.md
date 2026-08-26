--- 
title: entity_integration_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_integration_configs
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

Creates, updates, deletes, gets or lists an <code>entity_integration_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_integration_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.entity_integration_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entity_integration_config"
    values={[
        { label: 'get_entity_integration_config', value: 'get_entity_integration_config' }
    ]}
>
<TabItem value="get_entity_integration_config">

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
    <td>Unique identifier of the entity integration configuration. (example: 01HJABCD12345678ABCDEFGHIJ)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The organization ID, integration identifier, and integration-specific configuration payload for an entity integration configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for an entity integration configuration. Always `entity_integration_configs`. (entity_integration_configs) (default: entity_integration_configs, example: entity_integration_configs)</td>
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
    <td><a href="#get_entity_integration_config"><CopyableCode code="get_entity_integration_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td></td>
    <td>Retrieve the configuration currently stored for a given integration in the caller's organization.</td>
</tr>
<tr>
    <td><a href="#update_entity_integration_config"><CopyableCode code="update_entity_integration_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create or replace the configuration for a given integration in the caller's organization. The shape of `data.attributes.config` depends on the integration:&lt;br /&gt;&lt;br /&gt;- For `github`: `config` must contain an `enabled_repos` array of objects with `hostname`, `github_org_name`, and `repo_name`.&lt;br /&gt;- For `jira`: `config` must contain an `enabled_projects` array of objects with `hostname`, `account_id`, and `project_key`.&lt;br /&gt;- For `pagerduty`: `config` must contain an `accounts` array of objects with a required `enabled` boolean and an optional `subdomain` string.</td>
</tr>
<tr>
    <td><a href="#delete_entity_integration_config"><CopyableCode code="delete_entity_integration_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_id"><code>integration_id</code></a></td>
    <td></td>
    <td>Delete the configuration stored for a given integration in the caller's organization.</td>
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
<tr id="parameter-integration_id">
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the integration whose configuration is being managed. Supported values are `github`, `jira`, and `pagerduty`.</td>
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
    defaultValue="get_entity_integration_config"
    values={[
        { label: 'get_entity_integration_config', value: 'get_entity_integration_config' }
    ]}
>
<TabItem value="get_entity_integration_config">

Retrieve the configuration currently stored for a given integration in the caller's organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.entity_integration_configs
WHERE integration_id = '{{ integration_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_entity_integration_config"
    values={[
        { label: 'update_entity_integration_config', value: 'update_entity_integration_config' }
    ]}
>
<TabItem value="update_entity_integration_config">

Create or replace the configuration for a given integration in the caller's organization. The shape of `data.attributes.config` depends on the integration:&lt;br /&gt;&lt;br /&gt;- For `github`: `config` must contain an `enabled_repos` array of objects with `hostname`, `github_org_name`, and `repo_name`.&lt;br /&gt;- For `jira`: `config` must contain an `enabled_projects` array of objects with `hostname`, `account_id`, and `project_key`.&lt;br /&gt;- For `pagerduty`: `config` must contain an `accounts` array of objects with a required `enabled` boolean and an optional `subdomain` string.

```sql
REPLACE datadog.integrations.entity_integration_configs
SET 
data = '{{ data }}'
WHERE 
integration_id = '{{ integration_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_entity_integration_config"
    values={[
        { label: 'delete_entity_integration_config', value: 'delete_entity_integration_config' }
    ]}
>
<TabItem value="delete_entity_integration_config">

Delete the configuration stored for a given integration in the caller's organization.

```sql
DELETE FROM datadog.integrations.entity_integration_configs
WHERE integration_id = '{{ integration_id }}' --required
;
```
</TabItem>
</Tabs>
