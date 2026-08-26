--- 
title: product_analytics_events
hide_title: false
hide_table_of_contents: false
keywords:
  - product_analytics_events
  - digital_experience
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

Creates, updates, deletes, gets or lists a <code>product_analytics_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="product_analytics_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.product_analytics_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#submit_product_analytics_event"><CopyableCode code="submit_product_analytics_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-event"><code>event</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Send server-side events to Product Analytics. Server-side events are retained for 15 months.&lt;br /&gt;&lt;br /&gt;Server-Side events in Product Analytics are helpful for tracking events that occur on the server,&lt;br /&gt;as opposed to client-side events, which are captured by Real User Monitoring (RUM) SDKs.&lt;br /&gt;This allows for a more comprehensive view of the user journey by including actions that happen on the server.&lt;br /&gt;Typical examples could be `checkout.completed` or `payment.processed`.&lt;br /&gt;&lt;br /&gt;Ingested server-side events are integrated into Product Analytics to allow users to select and filter&lt;br /&gt;these events in the event picker, similar to how views or actions are handled.&lt;br /&gt;&lt;br /&gt;**Requirements:**&lt;br /&gt;- At least one of `usr`, `account`, or `session` must be provided with a valid ID.&lt;br /&gt;- The `application.id` must reference a Product Analytics-enabled application.&lt;br /&gt;&lt;br /&gt;**Custom Attributes:**&lt;br /&gt;Any additional fields in the payload are flattened and searchable as facets.&lt;br /&gt;For example, a payload with `&#123;"customer": &#123;"tier": "premium"&#125;&#125;` is searchable with&lt;br /&gt;the syntax `@customer.tier:premium` in Datadog.&lt;br /&gt;&lt;br /&gt;The status codes answered by the HTTP API are:&lt;br /&gt;- 202: Accepted: The request has been accepted for processing&lt;br /&gt;- 400: Bad request (likely an issue in the payload formatting)&lt;br /&gt;- 401: Unauthorized (likely a missing API Key)&lt;br /&gt;- 403: Permission issue (likely using an invalid API Key)&lt;br /&gt;- 408: Request Timeout, request should be retried after some time&lt;br /&gt;- 413: Payload too large (batch is above 5MB uncompressed)&lt;br /&gt;- 429: Too Many Requests, request should be retried after some time&lt;br /&gt;- 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time&lt;br /&gt;- 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time</td>
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

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="submit_product_analytics_event"
    values={[
        { label: 'submit_product_analytics_event', value: 'submit_product_analytics_event' }
    ]}
>
<TabItem value="submit_product_analytics_event">

Send server-side events to Product Analytics. Server-side events are retained for 15 months.&lt;br /&gt;&lt;br /&gt;Server-Side events in Product Analytics are helpful for tracking events that occur on the server,&lt;br /&gt;as opposed to client-side events, which are captured by Real User Monitoring (RUM) SDKs.&lt;br /&gt;This allows for a more comprehensive view of the user journey by including actions that happen on the server.&lt;br /&gt;Typical examples could be `checkout.completed` or `payment.processed`.&lt;br /&gt;&lt;br /&gt;Ingested server-side events are integrated into Product Analytics to allow users to select and filter&lt;br /&gt;these events in the event picker, similar to how views or actions are handled.&lt;br /&gt;&lt;br /&gt;**Requirements:**&lt;br /&gt;- At least one of `usr`, `account`, or `session` must be provided with a valid ID.&lt;br /&gt;- The `application.id` must reference a Product Analytics-enabled application.&lt;br /&gt;&lt;br /&gt;**Custom Attributes:**&lt;br /&gt;Any additional fields in the payload are flattened and searchable as facets.&lt;br /&gt;For example, a payload with `&#123;"customer": &#123;"tier": "premium"&#125;&#125;` is searchable with&lt;br /&gt;the syntax `@customer.tier:premium` in Datadog.&lt;br /&gt;&lt;br /&gt;The status codes answered by the HTTP API are:&lt;br /&gt;- 202: Accepted: The request has been accepted for processing&lt;br /&gt;- 400: Bad request (likely an issue in the payload formatting)&lt;br /&gt;- 401: Unauthorized (likely a missing API Key)&lt;br /&gt;- 403: Permission issue (likely using an invalid API Key)&lt;br /&gt;- 408: Request Timeout, request should be retried after some time&lt;br /&gt;- 413: Payload too large (batch is above 5MB uncompressed)&lt;br /&gt;- 429: Too Many Requests, request should be retried after some time&lt;br /&gt;- 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time&lt;br /&gt;- 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time

```sql
EXEC datadog.digital_experience.product_analytics_events.submit_product_analytics_event 
@@json=
'{
"account": "{{ account }}", 
"application": "{{ application }}", 
"event": "{{ event }}", 
"session": "{{ session }}", 
"type": "{{ type }}", 
"usr": "{{ usr }}"
}'
;
```
</TabItem>
</Tabs>
