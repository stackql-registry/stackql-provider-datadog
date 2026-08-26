--- 
title: ci_github_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - ci_github_accounts
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>ci_github_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ci_github_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.ci_github_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ciapp_git_hub_accounts"
    values={[
        { label: 'list_ciapp_git_hub_accounts', value: 'list_ciapp_git_hub_accounts' }
    ]}
>
<TabItem value="list_ciapp_git_hub_accounts">

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
    <td>The account's unique identifier, in the form `&lt;host&gt;/&lt;account name&gt;` (for example `github.com/datadog`). (example: github.com/datadog)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes describing a GitHub account's CI Visibility opt-in status.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API type for the GitHub account resource. The value must always be `ci_github_account`. (ci_github_account) (example: ci_github_account)</td>
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
    <td><a href="#list_ciapp_git_hub_accounts"><CopyableCode code="list_ciapp_git_hub_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve the list of GitHub accounts (organizations or users) available to this Datadog organization&lt;br /&gt;through its GitHub App installation, along with each account's and repository's CI Visibility opt-in status.</td>
</tr>
<tr>
    <td><a href="#update_ciapp_git_hub_account"><CopyableCode code="update_ciapp_git_hub_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Enable or disable CI Visibility for a GitHub account, one of its repositories, or both in the same request.&lt;br /&gt;The account (and, optionally, repository) are identified by name. Account-level and repository-level&lt;br /&gt;changes are independent and may both be supplied in the same request. At least one of `enabled` or&lt;br /&gt;`repository.enabled` must be provided. If the account name matches installations on more than one host,&lt;br /&gt;`host` must be supplied to disambiguate, otherwise a 409 is returned. Returns a 404 if the CI Visibility&lt;br /&gt;GitHub integration is not enabled for this organization, or if the given account or repository cannot be&lt;br /&gt;found by name.</td>
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
    defaultValue="list_ciapp_git_hub_accounts"
    values={[
        { label: 'list_ciapp_git_hub_accounts', value: 'list_ciapp_git_hub_accounts' }
    ]}
>
<TabItem value="list_ciapp_git_hub_accounts">

Retrieve the list of GitHub accounts (organizations or users) available to this Datadog organization&lt;br /&gt;through its GitHub App installation, along with each account's and repository's CI Visibility opt-in status.

```sql
SELECT
id,
attributes,
type
FROM datadog.software_delivery.ci_github_accounts
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ciapp_git_hub_account"
    values={[
        { label: 'update_ciapp_git_hub_account', value: 'update_ciapp_git_hub_account' }
    ]}
>
<TabItem value="update_ciapp_git_hub_account">

Enable or disable CI Visibility for a GitHub account, one of its repositories, or both in the same request.&lt;br /&gt;The account (and, optionally, repository) are identified by name. Account-level and repository-level&lt;br /&gt;changes are independent and may both be supplied in the same request. At least one of `enabled` or&lt;br /&gt;`repository.enabled` must be provided. If the account name matches installations on more than one host,&lt;br /&gt;`host` must be supplied to disambiguate, otherwise a 409 is returned. Returns a 404 if the CI Visibility&lt;br /&gt;GitHub integration is not enabled for this organization, or if the given account or repository cannot be&lt;br /&gt;found by name.

```sql
UPDATE datadog.software_delivery.ci_github_accounts
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
