--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - service_management
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event"
    values={[
        { label: 'get_event', value: 'get_event' },
        { label: 'list_events', value: 'list_events' }
    ]}
>
<TabItem value="get_event">

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
    <td>The event's ID. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Event attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Entity type. (example: event)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_events">

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
    <td>the unique ID of the event. (example: AAAAAWgN8Xwgr1vKDQAAAABBV2dOOFh3ZzZobm1mWXJFYTR0OA)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object description of an event response attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the event. (event) (default: event, example: event)</td>
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
    <td><a href="#get_event"><CopyableCode code="get_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-event_id"><code>event_id</code></a></td>
    <td></td>
    <td>Get the details of an event by `event_id`.</td>
</tr>
<tr>
    <td><a href="#list_events"><CopyableCode code="list_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[from]"><code>filter[from]</code></a>, <a href="#parameter-filter[to]"><code>filter[to]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List endpoint returns events that match an events search query.&lt;br /&gt;&#91;Results are paginated similarly to logs&#93;(https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).&lt;br /&gt;&lt;br /&gt;Use this endpoint to see your latest events.</td>
</tr>
<tr>
    <td><a href="#create_event"><CopyableCode code="create_event" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>This endpoint allows you to publish events.&lt;br /&gt;&lt;br /&gt;**Note:** To utilize this endpoint with our client libraries, please ensure you are using the latest version released on or after July 1, 2025. Earlier versions do not support this functionality.&lt;br /&gt;&lt;br /&gt;**Important:** Upgrade to the latest client library version to use the updated endpoint at `https:​//event-management-intake.&#123;site&#125;/api/v2/events`. Older client library versions of the Post an event (v2) API send requests to a deprecated endpoint (`https:​//api.&#123;site&#125;/api/v2/events`).&lt;br /&gt;&lt;br /&gt;✅ **Only events with the `change` or `alert` category** are in General Availability. For change events, see &#91;Change Tracking&#93;(https:​//docs.datadoghq.com/change_tracking) for more details.&lt;br /&gt;&lt;br /&gt;❌ For use cases involving other event categories, use the V1 endpoint or reach out to &#91;support&#93;(https:​//www.datadoghq.com/support/).</td>
</tr>
<tr>
    <td><a href="#search_events"><CopyableCode code="search_events" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>List endpoint returns events that match an events search query.&lt;br /&gt;&#91;Results are paginated similarly to logs&#93;(https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).&lt;br /&gt;&lt;br /&gt;Use this endpoint to build complex events filtering and search.</td>
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
<tr id="parameter-event_id">
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The UID of the event.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[from]">
    <td><CopyableCode code="filter[from]" /></td>
    <td><code>string</code></td>
    <td>Minimum timestamp for requested events, in milliseconds.</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Search query following events syntax.</td>
</tr>
<tr id="parameter-filter[to]">
    <td><CopyableCode code="filter[to]" /></td>
    <td><code>string</code></td>
    <td>Maximum timestamp for requested events, in milliseconds.</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>List following results with a cursor provided in the previous query. (example: eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int32)</code></td>
    <td>Maximum number of events in the response. (example: 25)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Order of events in results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event"
    values={[
        { label: 'get_event', value: 'get_event' },
        { label: 'list_events', value: 'list_events' }
    ]}
>
<TabItem value="get_event">

Get the details of an event by `event_id`.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.events
WHERE event_id = '{{ event_id }}' -- required
;
```
</TabItem>
<TabItem value="list_events">

List endpoint returns events that match an events search query.&lt;br /&gt;&#91;Results are paginated similarly to logs&#93;(https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).&lt;br /&gt;&lt;br /&gt;Use this endpoint to see your latest events.

```sql
SELECT
id,
attributes,
type
FROM datadog.service_management.events
WHERE filter[query] = '{{ filter[query] }}'
AND filter[from] = '{{ filter[from] }}'
AND filter[to] = '{{ filter[to] }}'
AND sort = '{{ sort }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event"
    values={[
        { label: 'create_event', value: 'create_event' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event">

This endpoint allows you to publish events.&lt;br /&gt;&lt;br /&gt;**Note:** To utilize this endpoint with our client libraries, please ensure you are using the latest version released on or after July 1, 2025. Earlier versions do not support this functionality.&lt;br /&gt;&lt;br /&gt;**Important:** Upgrade to the latest client library version to use the updated endpoint at `https:​//event-management-intake.&#123;site&#125;/api/v2/events`. Older client library versions of the Post an event (v2) API send requests to a deprecated endpoint (`https:​//api.&#123;site&#125;/api/v2/events`).&lt;br /&gt;&lt;br /&gt;✅ **Only events with the `change` or `alert` category** are in General Availability. For change events, see &#91;Change Tracking&#93;(https:​//docs.datadoghq.com/change_tracking) for more details.&lt;br /&gt;&lt;br /&gt;❌ For use cases involving other event categories, use the V1 endpoint or reach out to &#91;support&#93;(https:​//www.datadoghq.com/support/).

```sql
INSERT INTO datadog.service_management.events (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
links
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: events
  props:
    - name: data
      description: |
        An event object.
      value:
        attributes:
          aggregation_key: "{{ aggregation_key }}"
          attributes:
            author:
              name: "{{ name }}"
              type: "{{ type }}"
            change_metadata: "{{ change_metadata }}"
            changed_resource:
              name: "{{ name }}"
              type: "{{ type }}"
            impacted_resources:
              - name: "{{ name }}"
                type: "{{ type }}"
            new_value: "{{ new_value }}"
            prev_value: "{{ prev_value }}"
            custom: "{{ custom }}"
            links:
              - category: "{{ category }}"
                title: "{{ title }}"
                url: "{{ url }}"
            priority: "{{ priority }}"
            status: "{{ status }}"
          category: "{{ category }}"
          host: "{{ host }}"
          integration_id: "{{ integration_id }}"
          message: "{{ message }}"
          tags:
            - "{{ tags }}"
          timestamp: "{{ timestamp }}"
          title: "{{ title }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="search_events"
    values={[
        { label: 'search_events', value: 'search_events' }
    ]}
>
<TabItem value="search_events">

List endpoint returns events that match an events search query.&lt;br /&gt;&#91;Results are paginated similarly to logs&#93;(https:​//docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).&lt;br /&gt;&lt;br /&gt;Use this endpoint to build complex events filtering and search.

```sql
EXEC datadog.service_management.events.search_events 
@@json=
'{
"filter": "{{ filter }}", 
"options": "{{ options }}", 
"page": "{{ page }}", 
"sort": "{{ sort }}"
}'
;
```
</TabItem>
</Tabs>
