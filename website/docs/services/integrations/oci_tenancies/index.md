--- 
title: oci_tenancies
hide_title: false
hide_table_of_contents: false
keywords:
  - oci_tenancies
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

Creates, updates, deletes, gets or lists an <code>oci_tenancies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oci_tenancies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.oci_tenancies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tenancy_config"
    values={[
        { label: 'get_tenancy_config', value: 'get_tenancy_config' },
        { label: 'get_tenancy_configs', value: 'get_tenancy_configs' }
    ]}
>
<TabItem value="get_tenancy_config">

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
    <td>The OCID of the OCI tenancy.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an OCI tenancy integration configuration, including authentication details, region settings, and collection options.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>OCI tenancy resource type. (oci_tenancy) (default: oci_tenancy, example: oci_tenancy)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_tenancy_configs">

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
    <td>The OCID of the OCI tenancy.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of an OCI tenancy integration configuration, including authentication details, region settings, and collection options.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>OCI tenancy resource type. (oci_tenancy) (default: oci_tenancy, example: oci_tenancy)</td>
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
    <td><a href="#get_tenancy_config"><CopyableCode code="get_tenancy_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tenancy_ocid"><code>tenancy_ocid</code></a></td>
    <td></td>
    <td>Get a single tenancy config object by its OCID. Returns detailed configuration including authentication credentials, enabled services, region settings, and collection preferences.</td>
</tr>
<tr>
    <td><a href="#get_tenancy_configs"><CopyableCode code="get_tenancy_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get a list of all configured OCI tenancy integrations. Returns basic information about each tenancy including authentication credentials, region settings, and collection preferences for metrics, logs, and resources.</td>
</tr>
<tr>
    <td><a href="#create_tenancy_config"><CopyableCode code="create_tenancy_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new tenancy config to establish monitoring and data collection from your OCI environment. Requires OCI authentication credentials and tenancy details. Warning: Datadog recommends interacting with this endpoint only through the Datadog web UI to ensure all necessary OCI resources have been created and configured properly.</td>
</tr>
<tr>
    <td><a href="#update_tenancy_config"><CopyableCode code="update_tenancy_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tenancy_ocid"><code>tenancy_ocid</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an existing tenancy config. You can modify authentication credentials, enable/disable collection types, update service filters, and change region settings. Warning: We recommend using the Datadog web UI to avoid unintended update effects.</td>
</tr>
<tr>
    <td><a href="#delete_tenancy_config"><CopyableCode code="delete_tenancy_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tenancy_ocid"><code>tenancy_ocid</code></a></td>
    <td></td>
    <td>Delete an existing tenancy config. This will stop all data collection from the specified OCI tenancy and remove the stored configuration. This operation cannot be undone.</td>
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
<tr id="parameter-tenancy_ocid">
    <td><CopyableCode code="tenancy_ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy config to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tenancy_config"
    values={[
        { label: 'get_tenancy_config', value: 'get_tenancy_config' },
        { label: 'get_tenancy_configs', value: 'get_tenancy_configs' }
    ]}
>
<TabItem value="get_tenancy_config">

Get a single tenancy config object by its OCID. Returns detailed configuration including authentication credentials, enabled services, region settings, and collection preferences.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.oci_tenancies
WHERE tenancy_ocid = '{{ tenancy_ocid }}' -- required
;
```
</TabItem>
<TabItem value="get_tenancy_configs">

Get a list of all configured OCI tenancy integrations. Returns basic information about each tenancy including authentication credentials, region settings, and collection preferences for metrics, logs, and resources.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.oci_tenancies
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tenancy_config"
    values={[
        { label: 'create_tenancy_config', value: 'create_tenancy_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tenancy_config">

Create a new tenancy config to establish monitoring and data collection from your OCI environment. Requires OCI authentication credentials and tenancy details. Warning: Datadog recommends interacting with this endpoint only through the Datadog web UI to ensure all necessary OCI resources have been created and configured properly.

```sql
INSERT INTO datadog.integrations.oci_tenancies (
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
- name: oci_tenancies
  props:
    - name: data
      description: |
        The data object for creating a new OCI tenancy integration configuration, including the tenancy ID, type, and configuration attributes.
      value:
        attributes:
          auth_credentials:
            fingerprint: "{{ fingerprint }}"
            private_key: "{{ private_key }}"
          config_version: {{ config_version }}
          cost_collection_enabled: {{ cost_collection_enabled }}
          dd_compartment_id: "{{ dd_compartment_id }}"
          dd_stack_id: "{{ dd_stack_id }}"
          home_region: "{{ home_region }}"
          logs_config:
            compartment_tag_filters:
              - "{{ compartment_tag_filters }}"
            enabled: {{ enabled }}
            enabled_services:
              - "{{ enabled_services }}"
          metrics_config:
            compartment_tag_filters:
              - "{{ compartment_tag_filters }}"
            enabled: {{ enabled }}
            excluded_services:
              - "{{ excluded_services }}"
          regions_config:
            available:
              - "{{ available }}"
            disabled:
              - "{{ disabled }}"
            enabled:
              - "{{ enabled }}"
          resource_collection_enabled: {{ resource_collection_enabled }}
          user_ocid: "{{ user_ocid }}"
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tenancy_config"
    values={[
        { label: 'update_tenancy_config', value: 'update_tenancy_config' }
    ]}
>
<TabItem value="update_tenancy_config">

Update an existing tenancy config. You can modify authentication credentials, enable/disable collection types, update service filters, and change region settings. Warning: We recommend using the Datadog web UI to avoid unintended update effects.

```sql
UPDATE datadog.integrations.oci_tenancies
SET 
data = '{{ data }}'
WHERE 
tenancy_ocid = '{{ tenancy_ocid }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tenancy_config"
    values={[
        { label: 'delete_tenancy_config', value: 'delete_tenancy_config' }
    ]}
>
<TabItem value="delete_tenancy_config">

Delete an existing tenancy config. This will stop all data collection from the specified OCI tenancy and remove the stored configuration. This operation cannot be undone.

```sql
DELETE FROM datadog.integrations.oci_tenancies
WHERE tenancy_ocid = '{{ tenancy_ocid }}' --required
;
```
</TabItem>
</Tabs>
