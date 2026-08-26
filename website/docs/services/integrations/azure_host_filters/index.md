--- 
title: azure_host_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - azure_host_filters
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

Creates, updates, deletes, gets or lists an <code>azure_host_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="azure_host_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.azure_host_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_azure_host_filters"><CopyableCode code="update_azure_host_filters" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Update the defined list of host filters for a given Datadog-Azure integration.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="update_azure_host_filters"
    values={[
        { label: 'update_azure_host_filters', value: 'update_azure_host_filters' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="update_azure_host_filters">

Update the defined list of host filters for a given Datadog-Azure integration.

```sql
INSERT INTO datadog.integrations.azure_host_filters (
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
- name: azure_host_filters
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
