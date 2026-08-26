--- 
title: twilio_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - twilio_accounts
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

Creates, updates, deletes, gets or lists a <code>twilio_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="twilio_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.twilio_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_twilio_integration_account"
    values={[
        { label: 'get_twilio_integration_account', value: 'get_twilio_integration_account' },
        { label: 'list_twilio_integration_accounts', value: 'list_twilio_integration_accounts' }
    ]}
>
<TabItem value="get_twilio_integration_account">

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
    <td>Server-generated unique identifier of the Twilio integration account. (example: 953a0060-81ec-4221-aed4-d4733b59cd96)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Twilio integration account returned in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the integration account resource. Always `integration-account`. (integration-account) (default: integration-account, example: integration-account)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_twilio_integration_accounts">

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
    <td>Server-generated unique identifier of the Twilio integration account. (example: 953a0060-81ec-4221-aed4-d4733b59cd96)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a Twilio integration account returned in responses.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the integration account resource. Always `integration-account`. (integration-account) (default: integration-account, example: integration-account)</td>
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
    <td><a href="#get_twilio_integration_account"><CopyableCode code="get_twilio_integration_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Get a Twilio integration account.</td>
</tr>
<tr>
    <td><a href="#list_twilio_integration_accounts"><CopyableCode code="list_twilio_integration_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List Twilio integration accounts.</td>
</tr>
<tr>
    <td><a href="#create_twilio_integration_account"><CopyableCode code="create_twilio_integration_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a Twilio integration account.</td>
</tr>
<tr>
    <td><a href="#update_twilio_integration_account"><CopyableCode code="update_twilio_integration_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a Twilio integration account. Only the fields provided are changed.</td>
</tr>
<tr>
    <td><a href="#delete_twilio_integration_account"><CopyableCode code="delete_twilio_integration_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete a Twilio integration account.</td>
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
    <td>Unique identifier of the integration account.</td>
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
    defaultValue="get_twilio_integration_account"
    values={[
        { label: 'get_twilio_integration_account', value: 'get_twilio_integration_account' },
        { label: 'list_twilio_integration_accounts', value: 'list_twilio_integration_accounts' }
    ]}
>
<TabItem value="get_twilio_integration_account">

Get a Twilio integration account.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.twilio_accounts
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="list_twilio_integration_accounts">

List Twilio integration accounts.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.twilio_accounts
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_twilio_integration_account"
    values={[
        { label: 'create_twilio_integration_account', value: 'create_twilio_integration_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_twilio_integration_account">

Create a Twilio integration account.

```sql
INSERT INTO datadog.integrations.twilio_accounts (
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
- name: twilio_accounts
  props:
    - name: data
      description: |
        Data envelope for creating a Twilio integration account.
      value:
        attributes:
          authentication:
            auth_type: "{{ auth_type }}"
            password: "{{ password }}"
            username: "{{ username }}"
          dataflows:
            twilio-alerts-logs:
              enabled: {{ enabled }}
            twilio-call-summaries-logs:
              enabled: {{ enabled }}
            twilio-cloud-cost-metrics:
              enabled: {{ enabled }}
            twilio-events-logs:
              enabled: {{ enabled }}
            twilio-messages-logs:
              enabled: {{ enabled }}
          name: "{{ name }}"
          settings:
            account_sid: "{{ account_sid }}"
            censor_logs: {{ censor_logs }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_twilio_integration_account"
    values={[
        { label: 'update_twilio_integration_account', value: 'update_twilio_integration_account' }
    ]}
>
<TabItem value="update_twilio_integration_account">

Update a Twilio integration account. Only the fields provided are changed.

```sql
UPDATE datadog.integrations.twilio_accounts
SET 
data = '{{ data }}'
WHERE 
account_id = '{{ account_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_twilio_integration_account"
    values={[
        { label: 'delete_twilio_integration_account', value: 'delete_twilio_integration_account' }
    ]}
>
<TabItem value="delete_twilio_integration_account">

Delete a Twilio integration account.

```sql
DELETE FROM datadog.integrations.twilio_accounts
WHERE account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
