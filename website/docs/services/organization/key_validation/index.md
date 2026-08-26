--- 
title: key_validation
hide_title: false
hide_table_of_contents: false
keywords:
  - key_validation
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

Creates, updates, deletes, gets or lists a <code>key_validation</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_validation" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.key_validation" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="validate_apikey"
    values={[
        { label: 'validate_apikey', value: 'validate_apikey' }
    ]}
>
<TabItem value="validate_apikey">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the validation. Always `ok` when both the API key and the application key are valid. (ok) (example: ok)</td>
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
    <td><a href="#validate_apikey"><CopyableCode code="validate_apikey" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Check that the API key and application key used for the request are both valid.&lt;br /&gt;Returns `&#123;"status": "ok"&#125;` on success, `401` or `403` otherwise. Useful as a&lt;br /&gt;lightweight authentication probe before issuing other API calls that require&lt;br /&gt;full credentials.</td>
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
    defaultValue="validate_apikey"
    values={[
        { label: 'validate_apikey', value: 'validate_apikey' }
    ]}
>
<TabItem value="validate_apikey">

Check that the API key and application key used for the request are both valid.&lt;br /&gt;Returns `&#123;"status": "ok"&#125;` on success, `401` or `403` otherwise. Useful as a&lt;br /&gt;lightweight authentication probe before issuing other API calls that require&lt;br /&gt;full credentials.

```sql
SELECT
status
FROM datadog.organization.key_validation
;
```
</TabItem>
</Tabs>
