--- 
title: domain_allowlist
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_allowlist
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

Creates, updates, deletes, gets or lists a <code>domain_allowlist</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_allowlist" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.domain_allowlist" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_allowlist"
    values={[
        { label: 'get_domain_allowlist', value: 'get_domain_allowlist' }
    ]}
>
<TabItem value="get_domain_allowlist">

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
    <td>The unique identifier of the org.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The details of the email domain allowlist.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Email domain allowlist allowlist type. (domain_allowlist) (default: domain_allowlist, example: domain_allowlist)</td>
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
    <td><a href="#get_domain_allowlist"><CopyableCode code="get_domain_allowlist" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the domain allowlist for an organization.</td>
</tr>
<tr>
    <td><a href="#patch_domain_allowlist"><CopyableCode code="patch_domain_allowlist" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the domain allowlist for an organization.</td>
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
    defaultValue="get_domain_allowlist"
    values={[
        { label: 'get_domain_allowlist', value: 'get_domain_allowlist' }
    ]}
>
<TabItem value="get_domain_allowlist">

Get the domain allowlist for an organization.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.domain_allowlist
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="patch_domain_allowlist"
    values={[
        { label: 'patch_domain_allowlist', value: 'patch_domain_allowlist' }
    ]}
>
<TabItem value="patch_domain_allowlist">

Update the domain allowlist for an organization.

```sql
UPDATE datadog.organization.domain_allowlist
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
