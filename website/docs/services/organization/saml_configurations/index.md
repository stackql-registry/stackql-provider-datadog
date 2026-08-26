--- 
title: saml_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - saml_configurations
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

Creates, updates, deletes, gets or lists a <code>saml_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="saml_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.saml_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_samlconfiguration"
    values={[
        { label: 'get_samlconfiguration', value: 'get_samlconfiguration' },
        { label: 'list_samlconfigurations', value: 'list_samlconfigurations' }
    ]}
>
<TabItem value="get_samlconfiguration">

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
    <td>The UUID of the SAML configuration. (example: 3653d3c6-0c75-11ea-ad28-fb5701eabc7d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a SAML configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a SAML configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>SAML configurations resource type. (saml_configurations) (default: saml_configurations, example: saml_configurations)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_samlconfigurations">

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
    <td>The UUID of the SAML configuration. (example: 3653d3c6-0c75-11ea-ad28-fb5701eabc7d)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a SAML configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a SAML configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>SAML configurations resource type. (saml_configurations) (default: saml_configurations, example: saml_configurations)</td>
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
    <td><a href="#get_samlconfiguration"><CopyableCode code="get_samlconfiguration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-saml_config_uuid"><code>saml_config_uuid</code></a></td>
    <td></td>
    <td>Get a single SAML configuration for the current organization by its UUID.</td>
</tr>
<tr>
    <td><a href="#list_samlconfigurations"><CopyableCode code="list_samlconfigurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of SAML configurations for the current organization. An organization has at most one SAML configuration.</td>
</tr>
<tr>
    <td><a href="#update_samlconfiguration"><CopyableCode code="update_samlconfiguration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-saml_config_uuid"><code>saml_config_uuid</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a single SAML configuration for the current organization.&lt;br /&gt;&lt;br /&gt;Use this endpoint to enable or disable identity-provider-initiated login, set the&lt;br /&gt;just-in-time provisioning domains, and set the default role assigned to&lt;br /&gt;just-in-time provisioned users. A default role is required to enable just-in-time provisioning.</td>
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
<tr id="parameter-saml_config_uuid">
    <td><CopyableCode code="saml_config_uuid" /></td>
    <td><code>string</code></td>
    <td>The UUID of the SAML configuration.</td>
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
    defaultValue="get_samlconfiguration"
    values={[
        { label: 'get_samlconfiguration', value: 'get_samlconfiguration' },
        { label: 'list_samlconfigurations', value: 'list_samlconfigurations' }
    ]}
>
<TabItem value="get_samlconfiguration">

Get a single SAML configuration for the current organization by its UUID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.saml_configurations
WHERE saml_config_uuid = '{{ saml_config_uuid }}' -- required
;
```
</TabItem>
<TabItem value="list_samlconfigurations">

Get the list of SAML configurations for the current organization. An organization has at most one SAML configuration.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.saml_configurations
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_samlconfiguration"
    values={[
        { label: 'update_samlconfiguration', value: 'update_samlconfiguration' }
    ]}
>
<TabItem value="update_samlconfiguration">

Update a single SAML configuration for the current organization.&lt;br /&gt;&lt;br /&gt;Use this endpoint to enable or disable identity-provider-initiated login, set the&lt;br /&gt;just-in-time provisioning domains, and set the default role assigned to&lt;br /&gt;just-in-time provisioned users. A default role is required to enable just-in-time provisioning.

```sql
UPDATE datadog.organization.saml_configurations
SET 
data = '{{ data }}'
WHERE 
saml_config_uuid = '{{ saml_config_uuid }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>
