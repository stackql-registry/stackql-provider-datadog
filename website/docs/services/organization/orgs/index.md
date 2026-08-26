--- 
title: orgs
hide_title: false
hide_table_of_contents: false
keywords:
  - orgs
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

Creates, updates, deletes, gets or lists an <code>orgs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orgs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.orgs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org"
    values={[
        { label: 'get_org', value: 'get_org' },
        { label: 'list_orgs', value: 'list_orgs' }
    ]}
>
<TabItem value="get_org">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the child organization, limited to 32 characters. (example: New child org)</td>
</tr>
<tr>
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The `public_id` of the organization you are operating within. (example: abcdef12345)</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>object</code></td>
    <td>A JSON array of billing type.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string</code></td>
    <td>Date of the organization creation. (example: 2019-09-26T17:28:28Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the organization. (example: some description)</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>A JSON array of settings.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription" /></td>
    <td><code>object</code></td>
    <td>Subscription definition.</td>
</tr>
<tr>
    <td><CopyableCode code="trial" /></td>
    <td><code>boolean</code></td>
    <td>Only available for MSP customers. Allows child organizations to be created on a trial plan.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_orgs">

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
    <td><code>string (uuid)</code></td>
    <td>The UUID of the current organization. (example: 4dee724d-00cc-11ea-a77b-570c9d03c6c5)</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of the managed organizations resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type for managed organizations. (managed_orgs) (example: managed_orgs)</td>
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
    <td><a href="#get_org"><CopyableCode code="get_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Get organization information.</td>
</tr>
<tr>
    <td><a href="#list_orgs"><CopyableCode code="list_orgs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[name]"><code>filter[name]</code></a></td>
    <td>Returns the current organization and its managed organizations in JSON:API format.</td>
</tr>
<tr>
    <td><a href="#create_child_org"><CopyableCode code="create_child_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a child organization.&lt;br /&gt;&lt;br /&gt;This endpoint requires the&lt;br /&gt;&#91;multi-organization account&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/)&lt;br /&gt;feature and must be enabled by&lt;br /&gt;&#91;contacting support&#93;(https:​//docs.datadoghq.com/help/).&lt;br /&gt;&lt;br /&gt;Once a new child organization is created, you can interact with it&lt;br /&gt;by using the `org.public_id`, `api_key.key`, and&lt;br /&gt;`application_key.hash` provided in the response.</td>
</tr>
<tr>
    <td><a href="#update_org"><CopyableCode code="update_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Update your organization.</td>
</tr>
<tr>
    <td><a href="#disable_customer_org"><CopyableCode code="disable_customer_org" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Disable the Datadog organization associated with the authenticated user or API key.&lt;br /&gt;The request body uses JSON:API format. If `org_uuid` is supplied, it must match&lt;br /&gt;the authenticated org or the request is rejected. Successful calls disable the org&lt;br /&gt;and return the resulting state from the downstream service. Requires the&lt;br /&gt;`org_management` permission.</td>
</tr>
<tr>
    <td><a href="#downgrade_org"><CopyableCode code="downgrade_org" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Only available for MSP customers. Removes a child organization from the hierarchy of the master organization and places the child organization on a 30-day trial.</td>
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
<tr id="parameter-public_id">
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The `public_id` of the organization you are operating within.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter managed organizations by name. (example: My Child Org)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org"
    values={[
        { label: 'get_org', value: 'get_org' },
        { label: 'list_orgs', value: 'list_orgs' }
    ]}
>
<TabItem value="get_org">

Get organization information.

```sql
SELECT
name,
public_id,
billing,
created,
description,
settings,
subscription,
trial
FROM datadog.organization.orgs
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
<TabItem value="list_orgs">

Returns the current organization and its managed organizations in JSON:API format.

```sql
SELECT
id,
relationships,
type
FROM datadog.organization.orgs
WHERE filter[name] = '{{ filter[name] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_child_org"
    values={[
        { label: 'create_child_org', value: 'create_child_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_child_org">

Create a child organization.&lt;br /&gt;&lt;br /&gt;This endpoint requires the&lt;br /&gt;&#91;multi-organization account&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/)&lt;br /&gt;feature and must be enabled by&lt;br /&gt;&#91;contacting support&#93;(https:​//docs.datadoghq.com/help/).&lt;br /&gt;&lt;br /&gt;Once a new child organization is created, you can interact with it&lt;br /&gt;by using the `org.public_id`, `api_key.key`, and&lt;br /&gt;`application_key.hash` provided in the response.

```sql
INSERT INTO datadog.organization.orgs (
billing,
name,
subscription
)
SELECT 
'{{ billing }}',
'{{ name }}' /* required */,
'{{ subscription }}'
RETURNING
api_key,
application_key,
org,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: orgs
  props:
    - name: billing
      description: |
        A JSON array of billing type.
      value:
        type: "{{ type }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name of the new child-organization, limited to 32 characters.
    - name: subscription
      description: |
        Subscription definition.
      value:
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_org"
    values={[
        { label: 'update_org', value: 'update_org' }
    ]}
>
<TabItem value="update_org">

Update your organization.

```sql
REPLACE datadog.organization.orgs
SET 
billing = '{{ billing }}',
description = '{{ description }}',
name = '{{ name }}',
public_id = '{{ public_id }}',
settings = '{{ settings }}',
subscription = '{{ subscription }}',
trial = {{ trial }}
WHERE 
public_id = '{{ public_id }}' --required
RETURNING
org;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="disable_customer_org"
    values={[
        { label: 'disable_customer_org', value: 'disable_customer_org' },
        { label: 'downgrade_org', value: 'downgrade_org' }
    ]}
>
<TabItem value="disable_customer_org">

Disable the Datadog organization associated with the authenticated user or API key.&lt;br /&gt;The request body uses JSON:API format. If `org_uuid` is supplied, it must match&lt;br /&gt;the authenticated org or the request is rejected. Successful calls disable the org&lt;br /&gt;and return the resulting state from the downstream service. Requires the&lt;br /&gt;`org_management` permission.

```sql
EXEC datadog.organization.orgs.disable_customer_org 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="downgrade_org">

Only available for MSP customers. Removes a child organization from the hierarchy of the master organization and places the child organization on a 30-day trial.

```sql
EXEC datadog.organization.orgs.downgrade_org 
@public_id='{{ public_id }}' --required 
;
```
</TabItem>
</Tabs>
