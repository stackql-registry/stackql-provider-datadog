--- 
title: monitoring_sample_log_generation_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_sample_log_generation_subscriptions
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

Creates, updates, deletes, gets or lists a <code>monitoring_sample_log_generation_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_sample_log_generation_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_sample_log_generation_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sample_log_generation_subscriptions"
    values={[
        { label: 'list_sample_log_generation_subscriptions', value: 'list_sample_log_generation_subscriptions' }
    ]}
>
<TabItem value="list_sample_log_generation_subscriptions">

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
    <td>The unique identifier of the subscription. (example: 789)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes describing a sample log generation subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `subscriptions`. (subscriptions) (default: subscriptions, example: subscriptions)</td>
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
    <td><a href="#list_sample_log_generation_subscriptions"><CopyableCode code="list_sample_log_generation_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-start_timestamp"><code>start_timestamp</code></a>, <a href="#parameter-end_timestamp"><code>end_timestamp</code></a></td>
    <td>Get the sample log generation subscriptions for the organization.&lt;br /&gt;Sample log generation injects representative example logs for a given Cloud SIEM content pack into the Logs platform,&lt;br /&gt;which can be used to test detection rules without onboarding the underlying integration first.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an eligible&lt;br /&gt;pricing model. Other organizations receive a `403 Forbidden` (non-trial orgs) or a `400 Bad Request`&lt;br /&gt;(feature disabled), and legacy pricing tiers receive a response with `status: not_available`.</td>
</tr>
<tr>
    <td><a href="#create_sample_log_generation_subscription"><CopyableCode code="create_sample_log_generation_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Subscribe to sample log generation for a Cloud SIEM content pack. Sample logs for the&lt;br /&gt;requested content pack are injected into the Logs platform for the duration of the subscription,&lt;br /&gt;so detection rules can be exercised without onboarding the underlying integration first.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an&lt;br /&gt;eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject&lt;br /&gt;requests with `400 Bad Request`, and legacy pricing tiers receive a response with `status: not_available`.</td>
</tr>
<tr>
    <td><a href="#delete_sample_log_generation_subscription"><CopyableCode code="delete_sample_log_generation_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-content_pack_id"><code>content_pack_id</code></a></td>
    <td></td>
    <td>Unsubscribe from sample log generation for a Cloud SIEM content pack.&lt;br /&gt;After unsubscribing, no more sample logs are generated for the requested content pack.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an&lt;br /&gt;eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject&lt;br /&gt;requests with `400 Bad Request`, and legacy pricing tiers receive a response with `status: not_available`.</td>
</tr>
<tr>
    <td><a href="#bulk_create_sample_log_generation_subscriptions"><CopyableCode code="bulk_create_sample_log_generation_subscriptions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Subscribe to sample log generation for multiple Cloud SIEM content packs in a single call.&lt;br /&gt;Each requested content pack is processed independently; the response includes a per-item&lt;br /&gt;status so partial successes can be inspected.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an&lt;br /&gt;eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject&lt;br /&gt;requests with `400 Bad Request`, and legacy pricing tiers receive per-item responses with `status: not_available`.</td>
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
<tr id="parameter-content_pack_id">
    <td><CopyableCode code="content_pack_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Cloud SIEM content pack to operate on (for example, `aws-cloudtrail`).</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-end_timestamp">
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time range, as an RFC3339 timestamp. Ignored unless `start_timestamp` is set. Defaults to the current time when `start_timestamp` is provided. (example: 2026-05-08T00:00:00Z)</td>
</tr>
<tr id="parameter-start_timestamp">
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the time range, as an RFC3339 timestamp. When provided, the response includes every subscription that was active at any point in `&#91;start_timestamp, end_timestamp&#93;`, and the `status` filter is ignored. (example: 2026-05-01T00:00:00Z)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the subscriptions by status. Use `active` to return only currently active subscriptions, or `all` to return every subscription including expired ones. Ignored when `start_timestamp` is provided. Defaults to `active`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_sample_log_generation_subscriptions"
    values={[
        { label: 'list_sample_log_generation_subscriptions', value: 'list_sample_log_generation_subscriptions' }
    ]}
>
<TabItem value="list_sample_log_generation_subscriptions">

Get the sample log generation subscriptions for the organization.&lt;br /&gt;Sample log generation injects representative example logs for a given Cloud SIEM content pack into the Logs platform,&lt;br /&gt;which can be used to test detection rules without onboarding the underlying integration first.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an eligible&lt;br /&gt;pricing model. Other organizations receive a `403 Forbidden` (non-trial orgs) or a `400 Bad Request`&lt;br /&gt;(feature disabled), and legacy pricing tiers receive a response with `status: not_available`.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_sample_log_generation_subscriptions
WHERE status = '{{ status }}'
AND start_timestamp = '{{ start_timestamp }}'
AND end_timestamp = '{{ end_timestamp }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sample_log_generation_subscription"
    values={[
        { label: 'create_sample_log_generation_subscription', value: 'create_sample_log_generation_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sample_log_generation_subscription">

Subscribe to sample log generation for a Cloud SIEM content pack. Sample logs for the&lt;br /&gt;requested content pack are injected into the Logs platform for the duration of the subscription,&lt;br /&gt;so detection rules can be exercised without onboarding the underlying integration first.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an&lt;br /&gt;eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject&lt;br /&gt;requests with `400 Bad Request`, and legacy pricing tiers receive a response with `status: not_available`.

```sql
INSERT INTO datadog.security.monitoring_sample_log_generation_subscriptions (
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
- name: monitoring_sample_log_generation_subscriptions
  props:
    - name: data
      description: |
        The subscription request body.
      value:
        attributes:
          content_pack_id: "{{ content_pack_id }}"
          duration: "{{ duration }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sample_log_generation_subscription"
    values={[
        { label: 'delete_sample_log_generation_subscription', value: 'delete_sample_log_generation_subscription' }
    ]}
>
<TabItem value="delete_sample_log_generation_subscription">

Unsubscribe from sample log generation for a Cloud SIEM content pack.&lt;br /&gt;After unsubscribing, no more sample logs are generated for the requested content pack.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an&lt;br /&gt;eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject&lt;br /&gt;requests with `400 Bad Request`, and legacy pricing tiers receive a response with `status: not_available`.

```sql
DELETE FROM datadog.security.monitoring_sample_log_generation_subscriptions
WHERE content_pack_id = '{{ content_pack_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="bulk_create_sample_log_generation_subscriptions"
    values={[
        { label: 'bulk_create_sample_log_generation_subscriptions', value: 'bulk_create_sample_log_generation_subscriptions' }
    ]}
>
<TabItem value="bulk_create_sample_log_generation_subscriptions">

Subscribe to sample log generation for multiple Cloud SIEM content packs in a single call.&lt;br /&gt;Each requested content pack is processed independently; the response includes a per-item&lt;br /&gt;status so partial successes can be inspected.&lt;br /&gt;&lt;br /&gt;**Availability**: this endpoint is restricted to Cloud SIEM trial organizations on an&lt;br /&gt;eligible pricing model. Non-trial orgs receive `403 Forbidden`, the feature flag may also reject&lt;br /&gt;requests with `400 Bad Request`, and legacy pricing tiers receive per-item responses with `status: not_available`.

```sql
EXEC datadog.security.monitoring_sample_log_generation_subscriptions.bulk_create_sample_log_generation_subscriptions 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
