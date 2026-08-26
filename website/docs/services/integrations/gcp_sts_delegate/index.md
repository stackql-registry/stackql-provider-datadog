--- 
title: gcp_sts_delegate
hide_title: false
hide_table_of_contents: false
keywords:
  - gcp_sts_delegate
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

Creates, updates, deletes, gets or lists a <code>gcp_sts_delegate</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gcp_sts_delegate" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.gcp_sts_delegate" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gcpstsdelegate"
    values={[
        { label: 'get_gcpstsdelegate', value: 'get_gcpstsdelegate' }
    ]}
>
<TabItem value="get_gcpstsdelegate">

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
    <td>The ID of the delegate service account. (example: ddgci-1a19n28hb1a812221893@datadog-gci-sts-us5-prod.iam.gserviceaccount.com)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Your delegate account attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of account. (gcp_sts_delegate) (default: gcp_sts_delegate, example: gcp_sts_delegate)</td>
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
    <td><a href="#get_gcpstsdelegate"><CopyableCode code="get_gcpstsdelegate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List your Datadog-GCP STS delegate account configured in your Datadog account.</td>
</tr>
<tr>
    <td><a href="#make_gcpstsdelegate"><CopyableCode code="make_gcpstsdelegate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Create a Datadog GCP principal.</td>
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
    defaultValue="get_gcpstsdelegate"
    values={[
        { label: 'get_gcpstsdelegate', value: 'get_gcpstsdelegate' }
    ]}
>
<TabItem value="get_gcpstsdelegate">

List your Datadog-GCP STS delegate account configured in your Datadog account.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.gcp_sts_delegate
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="make_gcpstsdelegate"
    values={[
        { label: 'make_gcpstsdelegate', value: 'make_gcpstsdelegate' }
    ]}
>
<TabItem value="make_gcpstsdelegate">

Create a Datadog GCP principal.

```sql
EXEC datadog.integrations.gcp_sts_delegate.make_gcpstsdelegate 
;
```
</TabItem>
</Tabs>
