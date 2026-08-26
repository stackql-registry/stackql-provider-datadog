--- 
title: salesforce_incident_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - salesforce_incident_organizations
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

Creates, updates, deletes, gets or lists a <code>salesforce_incident_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="salesforce_incident_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.salesforce_incident_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_salesforce_organizations"
    values={[
        { label: 'get_salesforce_organizations', value: 'get_salesforce_organizations' }
    ]}
>
<TabItem value="get_salesforce_organizations">

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
    <td>The Datadog-assigned ID of the connected Salesforce organization. (example: 596da4af-0563-4097-90ff-07230c3f9db3)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Salesforce organization connected to the Datadog Salesforce integration.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Salesforce organization resource type. (salesforce-incidents-org) (default: salesforce-incidents-org, example: salesforce-incidents-org)</td>
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
    <td><a href="#get_salesforce_organizations"><CopyableCode code="get_salesforce_organizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get all Salesforce organizations connected to your Datadog organization&lt;br /&gt;through the Salesforce integration. Salesforce organizations are connected&lt;br /&gt;through the OAuth setup flow in the Datadog Salesforce integration page.</td>
</tr>
<tr>
    <td><a href="#delete_salesforce_organization"><CopyableCode code="delete_salesforce_organization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-salesforce_org_id"><code>salesforce_org_id</code></a></td>
    <td></td>
    <td>Disconnect a Salesforce organization from your Datadog organization.&lt;br /&gt;This also deletes any incident templates referencing the organization.</td>
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
<tr id="parameter-salesforce_org_id">
    <td><CopyableCode code="salesforce_org_id" /></td>
    <td><code>string</code></td>
    <td>The Datadog-assigned ID of the connected Salesforce organization.</td>
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
    defaultValue="get_salesforce_organizations"
    values={[
        { label: 'get_salesforce_organizations', value: 'get_salesforce_organizations' }
    ]}
>
<TabItem value="get_salesforce_organizations">

Get all Salesforce organizations connected to your Datadog organization&lt;br /&gt;through the Salesforce integration. Salesforce organizations are connected&lt;br /&gt;through the OAuth setup flow in the Datadog Salesforce integration page.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.salesforce_incident_organizations
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_salesforce_organization"
    values={[
        { label: 'delete_salesforce_organization', value: 'delete_salesforce_organization' }
    ]}
>
<TabItem value="delete_salesforce_organization">

Disconnect a Salesforce organization from your Datadog organization.&lt;br /&gt;This also deletes any incident templates referencing the organization.

```sql
DELETE FROM datadog.integrations.salesforce_incident_organizations
WHERE salesforce_org_id = '{{ salesforce_org_id }}' --required
;
```
</TabItem>
</Tabs>
