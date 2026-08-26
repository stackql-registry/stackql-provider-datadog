--- 
title: usage_summary_available_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_summary_available_fields
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

Creates, updates, deletes, gets or lists a <code>usage_summary_available_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_summary_available_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.usage_summary_available_fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_summary_available_fields"
    values={[
        { label: 'get_usage_summary_available_fields', value: 'get_usage_summary_available_fields' }
    ]}
>
<TabItem value="get_usage_summary_available_fields">

OK.

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
    <td>The identifier for the discovery scope. Always `"all"`. (example: all)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The lists of field names returned by `GET /api/v1/usage/summary` at each of its three response levels. Each list contains every key the data endpoint emits—both typed fields declared in the OpenAPI spec and untyped keys exposed through `additionalProperties`.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of available-fields data. (usage_summary_available_fields) (default: usage_summary_available_fields)</td>
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
    <td><a href="#get_usage_summary_available_fields"><CopyableCode code="get_usage_summary_available_fields" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List the field names returned by `GET /api/v1/usage/summary` at each of its&lt;br /&gt;three response levels. Each list contains every key the data endpoint&lt;br /&gt;emits—both typed fields declared in the OpenAPI spec and untyped keys&lt;br /&gt;exposed through `additionalProperties` (the latter used for billing&lt;br /&gt;dimensions and usage types added after the v1 schema freeze).&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).&lt;br /&gt;&lt;br /&gt;Go example:&lt;br /&gt;&lt;br /&gt;```go&lt;br /&gt;fields, _, err := api.GetUsageSummaryAvailableFields(ctx)&lt;br /&gt;attr := fields.Data.GetAttributes()&lt;br /&gt;&lt;br /&gt;// resp is the *UsageSummaryResponse returned by api.GetUsageSummary(ctx, ...)&lt;br /&gt;// Layer 1: UsageSummaryResponse&lt;br /&gt;for _, key := range attr.GetResponseFields() &#123;&lt;br /&gt;    if val, ok := resp.AdditionalProperties&#91;key&#93;; ok &#123;&lt;br /&gt;        fmt.Println(key, val.(json.Number))&lt;br /&gt;    &#125;&lt;br /&gt;&#125;&lt;br /&gt;// Layer 2: UsageSummaryDate (per month)&lt;br /&gt;for _, date := range resp.GetUsage() &#123;&lt;br /&gt;    for _, key := range attr.GetDateFields() &#123;&lt;br /&gt;        if val, ok := date.AdditionalProperties&#91;key&#93;; ok &#123;&lt;br /&gt;            fmt.Println(key, val.(json.Number))&lt;br /&gt;        &#125;&lt;br /&gt;    &#125;&lt;br /&gt;    // Layer 3: UsageSummaryDateOrg (per org per month)&lt;br /&gt;    for _, org := range date.GetOrgs() &#123;&lt;br /&gt;        for _, key := range attr.GetDateOrgFields() &#123;&lt;br /&gt;            if val, ok := org.AdditionalProperties&#91;key&#93;; ok &#123;&lt;br /&gt;                fmt.Println(key, val.(json.Number))&lt;br /&gt;            &#125;&lt;br /&gt;        &#125;&lt;br /&gt;    &#125;&lt;br /&gt;&#125;&lt;br /&gt;```</td>
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
    defaultValue="get_usage_summary_available_fields"
    values={[
        { label: 'get_usage_summary_available_fields', value: 'get_usage_summary_available_fields' }
    ]}
>
<TabItem value="get_usage_summary_available_fields">

List the field names returned by `GET /api/v1/usage/summary` at each of its&lt;br /&gt;three response levels. Each list contains every key the data endpoint&lt;br /&gt;emits—both typed fields declared in the OpenAPI spec and untyped keys&lt;br /&gt;exposed through `additionalProperties` (the latter used for billing&lt;br /&gt;dimensions and usage types added after the v1 schema freeze).&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).&lt;br /&gt;&lt;br /&gt;Go example:&lt;br /&gt;&lt;br /&gt;```go&lt;br /&gt;fields, _, err := api.GetUsageSummaryAvailableFields(ctx)&lt;br /&gt;attr := fields.Data.GetAttributes()&lt;br /&gt;&lt;br /&gt;// resp is the *UsageSummaryResponse returned by api.GetUsageSummary(ctx, ...)&lt;br /&gt;// Layer 1: UsageSummaryResponse&lt;br /&gt;for _, key := range attr.GetResponseFields() &#123;&lt;br /&gt;    if val, ok := resp.AdditionalProperties&#91;key&#93;; ok &#123;&lt;br /&gt;        fmt.Println(key, val.(json.Number))&lt;br /&gt;    &#125;&lt;br /&gt;&#125;&lt;br /&gt;// Layer 2: UsageSummaryDate (per month)&lt;br /&gt;for _, date := range resp.GetUsage() &#123;&lt;br /&gt;    for _, key := range attr.GetDateFields() &#123;&lt;br /&gt;        if val, ok := date.AdditionalProperties&#91;key&#93;; ok &#123;&lt;br /&gt;            fmt.Println(key, val.(json.Number))&lt;br /&gt;        &#125;&lt;br /&gt;    &#125;&lt;br /&gt;    // Layer 3: UsageSummaryDateOrg (per org per month)&lt;br /&gt;    for _, org := range date.GetOrgs() &#123;&lt;br /&gt;        for _, key := range attr.GetDateOrgFields() &#123;&lt;br /&gt;            if val, ok := org.AdditionalProperties&#91;key&#93;; ok &#123;&lt;br /&gt;                fmt.Println(key, val.(json.Number))&lt;br /&gt;            &#125;&lt;br /&gt;        &#125;&lt;br /&gt;    &#125;&lt;br /&gt;&#125;&lt;br /&gt;```

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.usage_summary_available_fields
;
```
</TabItem>
</Tabs>
