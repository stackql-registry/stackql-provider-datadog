--- 
title: gcp_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - gcp_accounts
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

Creates, updates, deletes, gets or lists a <code>gcp_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gcp_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.gcp_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_gcpstsaccounts"
    values={[
        { label: 'list_gcpstsaccounts', value: 'list_gcpstsaccounts' }
    ]}
>
<TabItem value="list_gcpstsaccounts">

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
    <td>Your service account's unique ID. (example: d291291f-12c2-22g4-j290-123456678897)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes associated with your service account.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Additional information related to your service account.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of account. (gcp_service_account) (default: gcp_service_account, example: gcp_service_account)</td>
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
    <td><a href="#list_gcpstsaccounts"><CopyableCode code="list_gcpstsaccounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all GCP STS-enabled service accounts configured in your Datadog account.</td>
</tr>
<tr>
    <td><a href="#create_gcpstsaccount"><CopyableCode code="create_gcpstsaccount" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new entry within Datadog for your STS enabled service account.</td>
</tr>
<tr>
    <td><a href="#update_gcpstsaccount"><CopyableCode code="update_gcpstsaccount" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Update an STS enabled service account.</td>
</tr>
<tr>
    <td><a href="#delete_gcpstsaccount"><CopyableCode code="delete_gcpstsaccount" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete an STS enabled GCP account from within Datadog.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>Your GCP STS enabled service account's unique ID.</td>
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
    defaultValue="list_gcpstsaccounts"
    values={[
        { label: 'list_gcpstsaccounts', value: 'list_gcpstsaccounts' }
    ]}
>
<TabItem value="list_gcpstsaccounts">

List all GCP STS-enabled service accounts configured in your Datadog account.

```sql
SELECT
id,
attributes,
meta,
type
FROM datadog.integrations.gcp_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gcpstsaccount"
    values={[
        { label: 'create_gcpstsaccount', value: 'create_gcpstsaccount' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gcpstsaccount">

Create a new entry within Datadog for your STS enabled service account.

```sql
INSERT INTO datadog.integrations.gcp_accounts (
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
- name: gcp_accounts
  props:
    - name: data
      description: |
        Additional metadata on your generated service account.
      value:
        attributes:
          account_tags:
            - "{{ account_tags }}"
          automute: {{ automute }}
          client_email: "{{ client_email }}"
          cloud_run_revision_filters:
            - "{{ cloud_run_revision_filters }}"
          host_filters:
            - "{{ host_filters }}"
          is_cspm_enabled: {{ is_cspm_enabled }}
          is_global_location_enabled: {{ is_global_location_enabled }}
          is_per_project_quota_enabled: {{ is_per_project_quota_enabled }}
          is_resource_change_collection_enabled: {{ is_resource_change_collection_enabled }}
          is_security_command_center_enabled: {{ is_security_command_center_enabled }}
          metric_namespace_configs:
            - disabled: {{ disabled }}
              filters: "{{ filters }}"
              id: "{{ id }}"
          monitored_resource_configs:
            - filters: "{{ filters }}"
              type: "{{ type }}"
          region_filter_configs:
            - "{{ region_filter_configs }}"
          resource_collection_enabled: {{ resource_collection_enabled }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gcpstsaccount"
    values={[
        { label: 'update_gcpstsaccount', value: 'update_gcpstsaccount' }
    ]}
>
<TabItem value="update_gcpstsaccount">

Update an STS enabled service account.

```sql
UPDATE datadog.integrations.gcp_accounts
SET 
data = '{{ data }}'
WHERE 
account_id = '{{ account_id }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gcpstsaccount"
    values={[
        { label: 'delete_gcpstsaccount', value: 'delete_gcpstsaccount' }
    ]}
>
<TabItem value="delete_gcpstsaccount">

Delete an STS enabled GCP account from within Datadog.

```sql
DELETE FROM datadog.integrations.gcp_accounts
WHERE account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
