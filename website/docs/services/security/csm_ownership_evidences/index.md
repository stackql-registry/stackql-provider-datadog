--- 
title: csm_ownership_evidences
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_ownership_evidences
  - security
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

Creates, updates, deletes, gets or lists a <code>csm_ownership_evidences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_ownership_evidences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.csm_ownership_evidences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ownership_evidence"
    values={[
        { label: 'get_ownership_evidence', value: 'get_ownership_evidence' }
    ]}
>
<TabItem value="get_ownership_evidence">

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
    <td>The identifier of the resource the evidence applies to. (example: test-resource)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an ownership evidence response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the ownership evidence resource. The value should always be `ownership_evidence`. (ownership_evidence) (default: ownership_evidence, example: ownership_evidence)</td>
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
    <td><a href="#get_ownership_evidence"><CopyableCode code="get_ownership_evidence" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-owner_type"><code>owner_type</code></a></td>
    <td><a href="#parameter-if-_none-_match"><code>if-_none-_match</code></a></td>
    <td>Get the evidence versions backing the current ownership inference for a resource and owner type.&lt;br /&gt;&lt;br /&gt;This endpoint supports weak ETag caching. Pass the previously returned `ETag` value in the `If-None-Match` request header to receive a `304 Not Modified` response when the evidence has not changed.</td>
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
<tr id="parameter-owner_type">
    <td><CopyableCode code="owner_type" /></td>
    <td><code>string</code></td>
    <td>The owner type of the inference to retrieve evidence for.</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource to retrieve evidence for.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-if-_none-_match">
    <td><CopyableCode code="if-_none-_match" /></td>
    <td><code>string</code></td>
    <td>A previously returned weak `ETag` value. When supplied and the evidence has not changed, the endpoint returns `304 Not Modified`. (wire: If-None-Match)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ownership_evidence"
    values={[
        { label: 'get_ownership_evidence', value: 'get_ownership_evidence' }
    ]}
>
<TabItem value="get_ownership_evidence">

Get the evidence versions backing the current ownership inference for a resource and owner type.&lt;br /&gt;&lt;br /&gt;This endpoint supports weak ETag caching. Pass the previously returned `ETag` value in the `If-None-Match` request header to receive a `304 Not Modified` response when the evidence has not changed.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.csm_ownership_evidences
WHERE resource_id = '{{ resource_id }}' -- required
AND owner_type = '{{ owner_type }}' -- required
AND if-_none-_match = '{{ if-_none-_match }}'
;
```
</TabItem>
</Tabs>
