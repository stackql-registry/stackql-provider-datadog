--- 
title: monitoring_integration_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_integration_configs
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

Creates, updates, deletes, gets or lists a <code>monitoring_integration_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_integration_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_integration_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_monitoring_integration_config"
    values={[
        { label: 'get_security_monitoring_integration_config', value: 'get_security_monitoring_integration_config' },
        { label: 'list_security_monitoring_integration_configs', value: 'list_security_monitoring_integration_configs' }
    ]}
>
<TabItem value="get_security_monitoring_integration_config">

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
    <td>The unique identifier of the integration configuration. (example: 11111111-2222-3333-4444-555555555555)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an entity context sync configuration as returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `integration_config`. (integration_config) (default: integration_config, example: integration_config)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_monitoring_integration_configs">

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
    <td>The unique identifier of the integration configuration. (example: 11111111-2222-3333-4444-555555555555)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an entity context sync configuration as returned by the API.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `integration_config`. (integration_config) (default: integration_config, example: integration_config)</td>
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
    <td><a href="#get_security_monitoring_integration_config"><CopyableCode code="get_security_monitoring_integration_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_config_id"><code>integration_config_id</code></a></td>
    <td></td>
    <td>Get the details of a specific entity context sync configuration.</td>
</tr>
<tr>
    <td><a href="#list_security_monitoring_integration_configs"><CopyableCode code="list_security_monitoring_integration_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[integration_type]"><code>filter[integration_type]</code></a></td>
    <td>List the entity context sync configurations for Cloud SIEM. Each configuration connects Cloud SIEM&lt;br /&gt;to an external source that provides entities (for example, users from an identity provider) for use&lt;br /&gt;in signals and the entity explorer.</td>
</tr>
<tr>
    <td><a href="#create_security_monitoring_integration_config"><CopyableCode code="create_security_monitoring_integration_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new entity context sync configuration so Cloud SIEM can ingest entities from an external&lt;br /&gt;source. The credentials provided in `secrets` are validated against the source before the configuration&lt;br /&gt;is stored and never returned in subsequent responses.</td>
</tr>
<tr>
    <td><a href="#update_security_monitoring_integration_config"><CopyableCode code="update_security_monitoring_integration_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_config_id"><code>integration_config_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing entity context sync configuration. Supports partial updates; only the fields provided in the request body are modified.</td>
</tr>
<tr>
    <td><a href="#delete_security_monitoring_integration_config"><CopyableCode code="delete_security_monitoring_integration_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_config_id"><code>integration_config_id</code></a></td>
    <td></td>
    <td>Delete an entity context sync configuration. Cloud SIEM stops ingesting entities from this source,&lt;br /&gt;and the credentials stored for the configuration are removed from the secrets store.</td>
</tr>
<tr>
    <td><a href="#validate_security_monitoring_integration_credentials"><CopyableCode code="validate_security_monitoring_integration_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Validate a set of credentials against the external entity source before creating a sync configuration.&lt;br /&gt;Returns a 200 status code if the credentials are valid.</td>
</tr>
<tr>
    <td><a href="#validate_security_monitoring_integration_config"><CopyableCode code="validate_security_monitoring_integration_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_config_id"><code>integration_config_id</code></a></td>
    <td></td>
    <td>Validate the credentials currently stored on an existing entity context sync configuration.&lt;br /&gt;Returns a 200 status code if the credentials are still valid against the external entity source.</td>
</tr>
<tr>
    <td><a href="#activate_integration"><CopyableCode code="activate_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_type"><code>integration_type</code></a></td>
    <td></td>
    <td>Activate an entity context sync integration for a source type that does not require manually&lt;br /&gt;supplied credentials (for example, Entra ID). If an integration of this type already exists,&lt;br /&gt;it is returned (re-enabling it first if it was disabled) instead of creating a duplicate.</td>
</tr>
<tr>
    <td><a href="#deactivate_integration"><CopyableCode code="deactivate_integration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_type"><code>integration_type</code></a></td>
    <td></td>
    <td>Deactivate all active entity context sync integrations of the given source type (for example, Entra ID).</td>
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
<tr id="parameter-integration_config_id">
    <td><CopyableCode code="integration_config_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the entity context sync configuration.</td>
</tr>
<tr id="parameter-integration_type">
    <td><CopyableCode code="integration_type" /></td>
    <td><code>string</code></td>
    <td>The integration type to deactivate (for example, `entra_id`).</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[integration_type]">
    <td><CopyableCode code="filter[integration_type]" /></td>
    <td><code>string</code></td>
    <td>Filter the entity context sync configurations by source type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_monitoring_integration_config"
    values={[
        { label: 'get_security_monitoring_integration_config', value: 'get_security_monitoring_integration_config' },
        { label: 'list_security_monitoring_integration_configs', value: 'list_security_monitoring_integration_configs' }
    ]}
>
<TabItem value="get_security_monitoring_integration_config">

Get the details of a specific entity context sync configuration.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_integration_configs
WHERE integration_config_id = '{{ integration_config_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_monitoring_integration_configs">

List the entity context sync configurations for Cloud SIEM. Each configuration connects Cloud SIEM&lt;br /&gt;to an external source that provides entities (for example, users from an identity provider) for use&lt;br /&gt;in signals and the entity explorer.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_integration_configs
WHERE filter[integration_type] = '{{ filter[integration_type] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_monitoring_integration_config"
    values={[
        { label: 'create_security_monitoring_integration_config', value: 'create_security_monitoring_integration_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_monitoring_integration_config">

Create a new entity context sync configuration so Cloud SIEM can ingest entities from an external&lt;br /&gt;source. The credentials provided in `secrets` are validated against the source before the configuration&lt;br /&gt;is stored and never returned in subsequent responses.

```sql
INSERT INTO datadog.security.monitoring_integration_configs (
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
- name: monitoring_integration_configs
  props:
    - name: data
      description: |
        The entity context sync configuration to create.
      value:
        attributes:
          domain: "{{ domain }}"
          integration_type: "{{ integration_type }}"
          name: "{{ name }}"
          secrets:
            admin_email: "{{ admin_email }}"
            service_account_json:
              client_email: "{{ client_email }}"
              private_key: "{{ private_key }}"
              project_id: "{{ project_id }}"
              type: "{{ type }}"
          settings: "{{ settings }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_monitoring_integration_config"
    values={[
        { label: 'update_security_monitoring_integration_config', value: 'update_security_monitoring_integration_config' }
    ]}
>
<TabItem value="update_security_monitoring_integration_config">

Update an existing entity context sync configuration. Supports partial updates; only the fields provided in the request body are modified.

```sql
UPDATE datadog.security.monitoring_integration_configs
SET 
data = '{{ data }}'
WHERE 
integration_config_id = '{{ integration_config_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_monitoring_integration_config"
    values={[
        { label: 'delete_security_monitoring_integration_config', value: 'delete_security_monitoring_integration_config' }
    ]}
>
<TabItem value="delete_security_monitoring_integration_config">

Delete an entity context sync configuration. Cloud SIEM stops ingesting entities from this source,&lt;br /&gt;and the credentials stored for the configuration are removed from the secrets store.

```sql
DELETE FROM datadog.security.monitoring_integration_configs
WHERE integration_config_id = '{{ integration_config_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="validate_security_monitoring_integration_credentials"
    values={[
        { label: 'validate_security_monitoring_integration_credentials', value: 'validate_security_monitoring_integration_credentials' },
        { label: 'validate_security_monitoring_integration_config', value: 'validate_security_monitoring_integration_config' },
        { label: 'activate_integration', value: 'activate_integration' },
        { label: 'deactivate_integration', value: 'deactivate_integration' }
    ]}
>
<TabItem value="validate_security_monitoring_integration_credentials">

Validate a set of credentials against the external entity source before creating a sync configuration.&lt;br /&gt;Returns a 200 status code if the credentials are valid.

```sql
EXEC datadog.security.monitoring_integration_configs.validate_security_monitoring_integration_credentials 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="validate_security_monitoring_integration_config">

Validate the credentials currently stored on an existing entity context sync configuration.&lt;br /&gt;Returns a 200 status code if the credentials are still valid against the external entity source.

```sql
EXEC datadog.security.monitoring_integration_configs.validate_security_monitoring_integration_config 
@integration_config_id='{{ integration_config_id }}' --required 
;
```
</TabItem>
<TabItem value="activate_integration">

Activate an entity context sync integration for a source type that does not require manually&lt;br /&gt;supplied credentials (for example, Entra ID). If an integration of this type already exists,&lt;br /&gt;it is returned (re-enabling it first if it was disabled) instead of creating a duplicate.

```sql
EXEC datadog.security.monitoring_integration_configs.activate_integration 
@integration_type='{{ integration_type }}' --required, 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="deactivate_integration">

Deactivate all active entity context sync integrations of the given source type (for example, Entra ID).

```sql
EXEC datadog.security.monitoring_integration_configs.deactivate_integration 
@integration_type='{{ integration_type }}' --required 
;
```
</TabItem>
</Tabs>
