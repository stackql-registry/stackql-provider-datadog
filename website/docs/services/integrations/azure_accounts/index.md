--- 
title: azure_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - azure_accounts
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

Creates, updates, deletes, gets or lists an <code>azure_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="azure_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.azure_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_azure_integration"
    values={[
        { label: 'list_azure_integration', value: 'list_azure_integration' }
    ]}
>
<TabItem value="list_azure_integration">

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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>Your Azure web application ID. (example: testc7f6-1234-5678-9101-3fcbf464test)</td>
</tr>
<tr>
    <td><CopyableCode code="new_client_id" /></td>
    <td><code>string</code></td>
    <td>Your New Azure web application ID. (example: new1c7f6-1234-5678-9101-3fcbf464test)</td>
</tr>
<tr>
    <td><CopyableCode code="new_tenant_name" /></td>
    <td><code>string</code></td>
    <td>Your New Azure Active Directory ID. (example: new1c44-1234-5678-9101-cc00736ftest)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_name" /></td>
    <td><code>string</code></td>
    <td>Your Azure Active Directory ID. (example: testc44-1234-5678-9101-cc00736ftest)</td>
</tr>
<tr>
    <td><CopyableCode code="app_service_plan_filters" /></td>
    <td><code>string</code></td>
    <td>Limit the Azure app service plans that are pulled into Datadog using tags. Only app service plans that match one of the defined tags are imported into Datadog. (example: key:value,filter:example)</td>
</tr>
<tr>
    <td><CopyableCode code="automute" /></td>
    <td><code>boolean</code></td>
    <td>Silence monitors for expected Azure VM shutdowns.</td>
</tr>
<tr>
    <td><CopyableCode code="client_secret" /></td>
    <td><code>string</code></td>
    <td>Your Azure web application secret key. (example: TestingRh2nx664kUy5dIApvM54T4AtO)</td>
</tr>
<tr>
    <td><CopyableCode code="container_app_filters" /></td>
    <td><code>string</code></td>
    <td>Limit the Azure container apps that are pulled into Datadog using tags. Only container apps that match one of the defined tags are imported into Datadog. (example: key:value,filter:example)</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration. Note: This requires resource_collection_enabled to be set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_metrics_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable custom metrics for your organization.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Errors in your configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="host_filters" /></td>
    <td><code>string</code></td>
    <td>Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. (example: key:value,filter:example)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable Azure metrics for your organization.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_enabled_default" /></td>
    <td><code>boolean</code></td>
    <td>Enable Azure metrics for your organization for resource providers where no resource provider config is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_collection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When enabled, Datadog collects metadata and configuration info from cloud resources (compute instances, databases, load balancers, etc.) monitored by this app registration.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_provider_configs" /></td>
    <td><code>array</code></td>
    <td>Configuration settings applied to resources from the specified Azure resource providers.</td>
</tr>
<tr>
    <td><CopyableCode code="secretless_auth_enabled" /></td>
    <td><code>boolean</code></td>
    <td>(Preview) When enabled, Datadog authenticates with this app registration using federated workload identity credentials instead of a client secret.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_metrics_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable azure.usage metrics for your organization.</td>
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
    <td><a href="#list_azure_integration"><CopyableCode code="list_azure_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all Datadog-Azure integrations configured in your Datadog account.</td>
</tr>
<tr>
    <td><a href="#create_azure_integration"><CopyableCode code="create_azure_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a Datadog-Azure integration.&lt;br /&gt;&lt;br /&gt;Using the `POST` method updates your integration configuration by adding your new&lt;br /&gt;configuration to the existing one in your Datadog organization.&lt;br /&gt;&lt;br /&gt;Using the `PUT` method updates your integration configuration by replacing your&lt;br /&gt;current configuration with the new one sent to your Datadog organization.</td>
</tr>
<tr>
    <td><a href="#update_azure_integration"><CopyableCode code="update_azure_integration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`.&lt;br /&gt;Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`,&lt;br /&gt;use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.</td>
</tr>
<tr>
    <td><a href="#delete_azure_integration"><CopyableCode code="delete_azure_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete a given Datadog-Azure integration from your Datadog account.</td>
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
    defaultValue="list_azure_integration"
    values={[
        { label: 'list_azure_integration', value: 'list_azure_integration' }
    ]}
>
<TabItem value="list_azure_integration">

List all Datadog-Azure integrations configured in your Datadog account.

```sql
SELECT
client_id,
new_client_id,
new_tenant_name,
tenant_name,
app_service_plan_filters,
automute,
client_secret,
container_app_filters,
cspm_enabled,
custom_metrics_enabled,
errors,
host_filters,
metrics_enabled,
metrics_enabled_default,
resource_collection_enabled,
resource_provider_configs,
secretless_auth_enabled,
usage_metrics_enabled
FROM datadog.integrations.azure_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_azure_integration"
    values={[
        { label: 'create_azure_integration', value: 'create_azure_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_azure_integration">

Create a Datadog-Azure integration.&lt;br /&gt;&lt;br /&gt;Using the `POST` method updates your integration configuration by adding your new&lt;br /&gt;configuration to the existing one in your Datadog organization.&lt;br /&gt;&lt;br /&gt;Using the `PUT` method updates your integration configuration by replacing your&lt;br /&gt;current configuration with the new one sent to your Datadog organization.

```sql
INSERT INTO datadog.integrations.azure_accounts (
app_service_plan_filters,
automute,
client_id,
client_secret,
container_app_filters,
cspm_enabled,
custom_metrics_enabled,
errors,
host_filters,
metrics_enabled,
metrics_enabled_default,
new_client_id,
new_tenant_name,
resource_collection_enabled,
resource_provider_configs,
secretless_auth_enabled,
tenant_name,
usage_metrics_enabled
)
SELECT 
'{{ app_service_plan_filters }}',
{{ automute }},
'{{ client_id }}',
'{{ client_secret }}',
'{{ container_app_filters }}',
{{ cspm_enabled }},
{{ custom_metrics_enabled }},
'{{ errors }}',
'{{ host_filters }}',
{{ metrics_enabled }},
{{ metrics_enabled_default }},
'{{ new_client_id }}',
'{{ new_tenant_name }}',
{{ resource_collection_enabled }},
'{{ resource_provider_configs }}',
{{ secretless_auth_enabled }},
'{{ tenant_name }}',
{{ usage_metrics_enabled }}
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: azure_accounts
  props:
    - name: app_service_plan_filters
      value: "{{ app_service_plan_filters }}"
      description: |
        Limit the Azure app service plans that are pulled into Datadog using tags.
        Only app service plans that match one of the defined tags are imported into Datadog.
    - name: automute
      value: {{ automute }}
      description: |
        Silence monitors for expected Azure VM shutdowns.
    - name: client_id
      value: "{{ client_id }}"
      description: |
        Your Azure web application ID.
    - name: client_secret
      value: "{{ client_secret }}"
      description: |
        Your Azure web application secret key.
    - name: container_app_filters
      value: "{{ container_app_filters }}"
      description: |
        Limit the Azure container apps that are pulled into Datadog using tags.
        Only container apps that match one of the defined tags are imported into Datadog.
    - name: cspm_enabled
      value: {{ cspm_enabled }}
      description: |
        When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.
        Note: This requires resource_collection_enabled to be set to true.
    - name: custom_metrics_enabled
      value: {{ custom_metrics_enabled }}
      description: |
        Enable custom metrics for your organization.
    - name: errors
      value:
        - "{{ errors }}"
      description: |
        Errors in your configuration.
    - name: host_filters
      value: "{{ host_filters }}"
      description: |
        Limit the Azure instances that are pulled into Datadog by using tags.
        Only hosts that match one of the defined tags are imported into Datadog.
    - name: metrics_enabled
      value: {{ metrics_enabled }}
      description: |
        Enable Azure metrics for your organization.
    - name: metrics_enabled_default
      value: {{ metrics_enabled_default }}
      description: |
        Enable Azure metrics for your organization for resource providers where no resource provider config is specified.
    - name: new_client_id
      value: "{{ new_client_id }}"
      description: |
        Your New Azure web application ID.
    - name: new_tenant_name
      value: "{{ new_tenant_name }}"
      description: |
        Your New Azure Active Directory ID.
    - name: resource_collection_enabled
      value: {{ resource_collection_enabled }}
      description: |
        When enabled, Datadog collects metadata and configuration info from cloud resources (compute instances, databases, load balancers, etc.) monitored by this app registration.
    - name: resource_provider_configs
      description: |
        Configuration settings applied to resources from the specified Azure resource providers.
      value:
        - metrics_enabled: {{ metrics_enabled }}
          namespace: "{{ namespace }}"
    - name: secretless_auth_enabled
      value: {{ secretless_auth_enabled }}
      description: |
        (Preview) When enabled, Datadog authenticates with this app registration using federated workload identity credentials instead of a client secret.
    - name: tenant_name
      value: "{{ tenant_name }}"
      description: |
        Your Azure Active Directory ID.
    - name: usage_metrics_enabled
      value: {{ usage_metrics_enabled }}
      description: |
        Enable azure.usage metrics for your organization.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_azure_integration"
    values={[
        { label: 'update_azure_integration', value: 'update_azure_integration' }
    ]}
>
<TabItem value="update_azure_integration">

Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`.&lt;br /&gt;Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`,&lt;br /&gt;use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.

```sql
REPLACE datadog.integrations.azure_accounts
SET 
app_service_plan_filters = '{{ app_service_plan_filters }}',
automute = {{ automute }},
client_id = '{{ client_id }}',
client_secret = '{{ client_secret }}',
container_app_filters = '{{ container_app_filters }}',
cspm_enabled = {{ cspm_enabled }},
custom_metrics_enabled = {{ custom_metrics_enabled }},
errors = '{{ errors }}',
host_filters = '{{ host_filters }}',
metrics_enabled = {{ metrics_enabled }},
metrics_enabled_default = {{ metrics_enabled_default }},
new_client_id = '{{ new_client_id }}',
new_tenant_name = '{{ new_tenant_name }}',
resource_collection_enabled = {{ resource_collection_enabled }},
resource_provider_configs = '{{ resource_provider_configs }}',
secretless_auth_enabled = {{ secretless_auth_enabled }},
tenant_name = '{{ tenant_name }}',
usage_metrics_enabled = {{ usage_metrics_enabled }};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_azure_integration"
    values={[
        { label: 'delete_azure_integration', value: 'delete_azure_integration' }
    ]}
>
<TabItem value="delete_azure_integration">

Delete a given Datadog-Azure integration from your Datadog account.

```sql
DELETE FROM datadog.integrations.azure_accounts
;
```
</TabItem>
</Tabs>
