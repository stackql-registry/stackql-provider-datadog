--- 
title: slos
hide_title: false
hide_table_of_contents: false
keywords:
  - slos
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

Creates, updates, deletes, gets or lists a <code>slos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.slos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_slo"
    values={[
        { label: 'get_slo', value: 'get_slo' },
        { label: 'list_slos', value: 'list_slos' },
        { label: 'check_can_delete_slo', value: 'check_can_delete_slo' }
    ]}
>
<TabItem value="get_slo">

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
    <td>A unique identifier for the service level objective object.  Always included in service level objective responses.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service level objective object. (example: Custom Metric SLO)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_alert_ids" /></td>
    <td><code>array</code></td>
    <td>A list of SLO monitors IDs that reference this SLO. This field is returned only when `with_configured_alert_ids` parameter is true in query.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>Creation timestamp (UNIX time in seconds)  Always included in service level objective responses.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A user-defined description of the service level objective.  Always included in service level objective responses (but may be `null`). Optional in create/update requests.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>A list of (up to 20) monitor groups that narrow the scope of a monitor service level objective.  Included in service level objective responses if it is not empty. Optional in create/update requests for monitor service level objectives, but may only be used when then length of the `monitor_ids` field is one.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>Modification timestamp (UNIX time in seconds)  Always included in service level objective responses.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_ids" /></td>
    <td><code>array</code></td>
    <td>A list of monitor ids that defines the scope of a monitor service level objective. **Required if type is `monitor`**.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_tags" /></td>
    <td><code>array</code></td>
    <td>The union of monitor tags for all monitors referenced by the `monitor_ids` field. Always included in service level objective responses for monitor service level objectives (but may be empty). Ignored in create/update requests. Does not affect which monitors are included in the service level objective (that is determined entirely by the `monitor_ids` field).</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>object</code></td>
    <td>A count-based (metric) SLO query. This field is superseded by `sli_specification` but is retained for backwards compatibility. Note that Datadog only allows the sum by aggregator to be used because this will sum up all request counts instead of averaging them, or taking the max or min of all of those requests.</td>
</tr>
<tr>
    <td><CopyableCode code="sli_specification" /></td>
    <td><code>object</code></td>
    <td>A generic SLI specification. This is used for time-slice and count-based (metric) SLOs only.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with this service level objective. Always included in service level objective responses (but may be empty). Optional in create/update requests.</td>
</tr>
<tr>
    <td><CopyableCode code="target_threshold" /></td>
    <td><code>number (double)</code></td>
    <td>The target threshold such that when the service level indicator is above this threshold over the given timeframe, the objective is being met.</td>
</tr>
<tr>
    <td><CopyableCode code="thresholds" /></td>
    <td><code>array</code></td>
    <td>The thresholds (timeframes and associated targets) for this service level objective object.</td>
</tr>
<tr>
    <td><CopyableCode code="timeframe" /></td>
    <td><code>string</code></td>
    <td>The SLO time window options. Note that "custom" is not a valid option for creating or updating SLOs. It is only used when querying SLO history over custom timeframes. (7d, 30d, 90d, custom) (example: 30d)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the service level objective. (metric, monitor, time_slice) (example: metric)</td>
</tr>
<tr>
    <td><CopyableCode code="warning_threshold" /></td>
    <td><code>number (double)</code></td>
    <td>The optional warning threshold such that when the service level indicator is below this value for the given threshold, but above the target threshold, the objective appears in a "warning" state. This value must be greater than the target threshold.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_slos">

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
    <td>A unique identifier for the service level objective object.  Always included in service level objective responses.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service level objective object. (example: Custom Metric SLO)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>Creation timestamp (UNIX time in seconds)  Always included in service level objective responses.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Object describing the creator of the shared element.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A user-defined description of the service level objective.  Always included in service level objective responses (but may be `null`). Optional in create/update requests.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>A list of (up to 100) monitor groups that narrow the scope of a monitor service level objective.  Included in service level objective responses if it is not empty. Optional in create/update requests for monitor service level objectives, but may only be used when then length of the `monitor_ids` field is one.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>Modification timestamp (UNIX time in seconds)  Always included in service level objective responses.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_ids" /></td>
    <td><code>array</code></td>
    <td>A list of monitor ids that defines the scope of a monitor service level objective. **Required if type is `monitor`**.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_tags" /></td>
    <td><code>array</code></td>
    <td>The union of monitor tags for all monitors referenced by the `monitor_ids` field. Always included in service level objective responses for monitor-based service level objectives (but may be empty). Ignored in create/update requests. Does not affect which monitors are included in the service level objective (that is determined entirely by the `monitor_ids` field).</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>object</code></td>
    <td>A count-based (metric) SLO query. This field is superseded by `sli_specification` but is retained for backwards compatibility. Note that Datadog only allows the sum by aggregator to be used because this will sum up all request counts instead of averaging them, or taking the max or min of all of those requests.</td>
</tr>
<tr>
    <td><CopyableCode code="sli_specification" /></td>
    <td><code>object</code></td>
    <td>A generic SLI specification. This is used for time-slice and count-based (metric) SLOs only.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with this service level objective. Always included in service level objective responses (but may be empty). Optional in create/update requests.</td>
</tr>
<tr>
    <td><CopyableCode code="target_threshold" /></td>
    <td><code>number (double)</code></td>
    <td>The target threshold such that when the service level indicator is above this threshold over the given timeframe, the objective is being met.</td>
</tr>
<tr>
    <td><CopyableCode code="thresholds" /></td>
    <td><code>array</code></td>
    <td>The thresholds (timeframes and associated targets) for this service level objective object.</td>
</tr>
<tr>
    <td><CopyableCode code="timeframe" /></td>
    <td><code>string</code></td>
    <td>The SLO time window options. Note that "custom" is not a valid option for creating or updating SLOs. It is only used when querying SLO history over custom timeframes. (7d, 30d, 90d, custom) (example: 30d)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the service level objective. (metric, monitor, time_slice) (example: metric)</td>
</tr>
<tr>
    <td><CopyableCode code="warning_threshold" /></td>
    <td><code>number (double)</code></td>
    <td>The optional warning threshold such that when the service level indicator is below this value for the given threshold, but above the target threshold, the objective appears in a "warning" state. This value must be greater than the target threshold.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="check_can_delete_slo">

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
    <td><CopyableCode code="ok" /></td>
    <td><code>array</code></td>
    <td>An array of SLO IDs that can be safely deleted.</td>
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
    <td><a href="#get_slo"><CopyableCode code="get_slo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slo_id"><code>slo_id</code></a></td>
    <td><a href="#parameter-with_configured_alert_ids"><code>with_configured_alert_ids</code></a></td>
    <td>Get a service level objective object.</td>
</tr>
<tr>
    <td><a href="#list_slos"><CopyableCode code="list_slos" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-tags_query"><code>tags_query</code></a>, <a href="#parameter-metrics_query"><code>metrics_query</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-is_deleted"><code>is_deleted</code></a></td>
    <td>Get a list of service level objective objects for your organization.</td>
</tr>
<tr>
    <td><a href="#check_can_delete_slo"><CopyableCode code="check_can_delete_slo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ids"><code>ids</code></a></td>
    <td></td>
    <td>Check if an SLO can be safely deleted. For example,&lt;br /&gt;assure an SLO can be deleted without disrupting a dashboard.</td>
</tr>
<tr>
    <td><a href="#create_slo"><CopyableCode code="create_slo" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-thresholds"><code>thresholds</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a service level objective object.</td>
</tr>
<tr>
    <td><a href="#update_slo"><CopyableCode code="update_slo" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-slo_id"><code>slo_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-thresholds"><code>thresholds</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Update the specified service level objective object.</td>
</tr>
<tr>
    <td><a href="#delete_slo"><CopyableCode code="delete_slo" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-slo_id"><code>slo_id</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Permanently delete the specified service level objective object.&lt;br /&gt;&lt;br /&gt;If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns&lt;br /&gt;a 409 conflict error because the SLO is referenced in a dashboard.</td>
</tr>
<tr>
    <td><a href="#delete_slotimeframe_in_bulk"><CopyableCode code="delete_slotimeframe_in_bulk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Delete (or partially delete) multiple service level objective objects.&lt;br /&gt;&lt;br /&gt;This endpoint facilitates deletion of one or more thresholds for one or more&lt;br /&gt;service level objective objects. If all thresholds are deleted, the service level&lt;br /&gt;objective object is deleted as well.</td>
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
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>string</code></td>
    <td>A comma separated list of the IDs of the service level objectives objects. (example: id1, id2, id3)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-slo_id">
    <td><CopyableCode code="slo_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service level objective.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>string</code></td>
    <td>Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor).</td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>string</code></td>
    <td>A comma separated list of the IDs of the service level objectives objects. (example: id1, id2, id3)</td>
</tr>
<tr id="parameter-is_deleted">
    <td><CopyableCode code="is_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to return only deleted service level objective objects. (example: true)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of SLOs to return in the response.</td>
</tr>
<tr id="parameter-metrics_query">
    <td><CopyableCode code="metrics_query" /></td>
    <td><code>string</code></td>
    <td>The query string to filter results based on SLO numerator and denominator. (example: aws.elb.request_count)</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>The specific offset to use as the beginning of the returned response.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The query string to filter results based on SLO names. (example: monitor)</td>
</tr>
<tr id="parameter-tags_query">
    <td><CopyableCode code="tags_query" /></td>
    <td><code>string</code></td>
    <td>The query string to filter results based on a single SLO tag. (example: env:prod)</td>
</tr>
<tr id="parameter-with_configured_alert_ids">
    <td><CopyableCode code="with_configured_alert_ids" /></td>
    <td><code>boolean</code></td>
    <td>Get the IDs of SLO monitors that reference this SLO. (example: true)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_slo"
    values={[
        { label: 'get_slo', value: 'get_slo' },
        { label: 'list_slos', value: 'list_slos' },
        { label: 'check_can_delete_slo', value: 'check_can_delete_slo' }
    ]}
>
<TabItem value="get_slo">

Get a service level objective object.

```sql
SELECT
id,
name,
configured_alert_ids,
created_at,
creator,
description,
groups,
modified_at,
monitor_ids,
monitor_tags,
query,
sli_specification,
tags,
target_threshold,
thresholds,
timeframe,
type,
warning_threshold
FROM datadog.service_management.slos
WHERE slo_id = '{{ slo_id }}' -- required
AND with_configured_alert_ids = '{{ with_configured_alert_ids }}'
;
```
</TabItem>
<TabItem value="list_slos">

Get a list of service level objective objects for your organization.

```sql
SELECT
id,
name,
created_at,
creator,
description,
groups,
modified_at,
monitor_ids,
monitor_tags,
query,
sli_specification,
tags,
target_threshold,
thresholds,
timeframe,
type,
warning_threshold
FROM datadog.service_management.slos
WHERE ids = '{{ ids }}'
AND query = '{{ query }}'
AND tags_query = '{{ tags_query }}'
AND metrics_query = '{{ metrics_query }}'
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
AND is_deleted = '{{ is_deleted }}'
;
```
</TabItem>
<TabItem value="check_can_delete_slo">

Check if an SLO can be safely deleted. For example,&lt;br /&gt;assure an SLO can be deleted without disrupting a dashboard.

```sql
SELECT
ok
FROM datadog.service_management.slos
WHERE ids = '{{ ids }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_slo"
    values={[
        { label: 'create_slo', value: 'create_slo' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_slo">

Create a service level objective object.

```sql
INSERT INTO datadog.service_management.slos (
description,
groups,
monitor_ids,
name,
query,
sli_specification,
tags,
target_threshold,
thresholds,
timeframe,
type,
warning_threshold
)
SELECT 
'{{ description }}',
'{{ groups }}',
'{{ monitor_ids }}',
'{{ name }}' /* required */,
'{{ query }}',
'{{ sli_specification }}',
'{{ tags }}',
{{ target_threshold }},
'{{ thresholds }}' /* required */,
'{{ timeframe }}',
'{{ type }}' /* required */,
{{ warning_threshold }}
RETURNING
data,
errors,
metadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: slos
  props:
    - name: description
      value: "{{ description }}"
      description: |
        A user-defined description of the service level objective.
        Always included in service level objective responses (but may be \`null\`).
        Optional in create/update requests.
    - name: groups
      value:
        - "{{ groups }}"
      description: |
        A list of (up to 100) monitor groups that narrow the scope of a monitor service level objective.
        Included in service level objective responses if it is not empty. Optional in
        create/update requests for monitor service level objectives, but may only be
        used when then length of the \`monitor_ids\` field is one.
    - name: monitor_ids
      value:
        - {{ monitor_ids }}
      description: |
        A list of monitor IDs that defines the scope of a monitor service level
        objective. **Required if type is \`monitor\`**.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the service level objective object.
    - name: query
      description: |
        A count-based (metric) SLO query. This field is superseded by \`sli_specification\` but is retained for backwards compatibility. Note that Datadog only allows the sum by aggregator
        to be used because this will sum up all request counts instead of averaging them, or taking the max or
        min of all of those requests.
      value:
        denominator: "{{ denominator }}"
        numerator: "{{ numerator }}"
    - name: sli_specification
      description: |
        A generic SLI specification. This is used for time-slice and count-based (metric) SLOs only.
      value:
        time_slice:
          comparator: "{{ comparator }}"
          query:
            formulas:
              - formula: "{{ formula }}"
            queries:
              - aggregator: "{{ aggregator }}"
                cross_org_uuids: "{{ cross_org_uuids }}"
                data_source: "{{ data_source }}"
                name: "{{ name }}"
                query: "{{ query }}"
                semantic_mode: "{{ semantic_mode }}"
          query_interval_seconds: {{ query_interval_seconds }}
          threshold: {{ threshold }}
        count:
          good_events_formula:
            formula: "{{ formula }}"
          queries:
            - aggregator: "{{ aggregator }}"
              cross_org_uuids: "{{ cross_org_uuids }}"
              data_source: "{{ data_source }}"
              name: "{{ name }}"
              query: "{{ query }}"
              semantic_mode: "{{ semantic_mode }}"
          total_events_formula:
            formula: "{{ formula }}"
          bad_events_formula:
            formula: "{{ formula }}"
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        A list of tags associated with this service level objective.
        Always included in service level objective responses (but may be empty).
        Optional in create/update requests.
    - name: target_threshold
      value: {{ target_threshold }}
      description: |
        The target threshold such that when the service level indicator is above this
        threshold over the given timeframe, the objective is being met.
    - name: thresholds
      description: |
        The thresholds (timeframes and associated targets) for this service level
        objective object.
      value:
        - target: {{ target }}
          target_display: "{{ target_display }}"
          timeframe: "{{ timeframe }}"
          warning: {{ warning }}
          warning_display: "{{ warning_display }}"
    - name: timeframe
      value: "{{ timeframe }}"
      description: |
        The SLO time window options. Note that "custom" is not a valid option for creating
        or updating SLOs. It is only used when querying SLO history over custom timeframes.
      valid_values: ['7d', '30d', '90d', 'custom']
    - name: type
      value: "{{ type }}"
      description: |
        The type of the service level objective.
      valid_values: ['metric', 'monitor', 'time_slice']
    - name: warning_threshold
      value: {{ warning_threshold }}
      description: |
        The optional warning threshold such that when the service level indicator is
        below this value for the given threshold, but above the target threshold, the
        objective appears in a "warning" state. This value must be greater than the target
        threshold.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_slo"
    values={[
        { label: 'update_slo', value: 'update_slo' }
    ]}
>
<TabItem value="update_slo">

Update the specified service level objective object.

```sql
REPLACE datadog.service_management.slos
SET 
description = '{{ description }}',
groups = '{{ groups }}',
monitor_ids = '{{ monitor_ids }}',
monitor_tags = '{{ monitor_tags }}',
name = '{{ name }}',
query = '{{ query }}',
sli_specification = '{{ sli_specification }}',
tags = '{{ tags }}',
target_threshold = {{ target_threshold }},
thresholds = '{{ thresholds }}',
timeframe = '{{ timeframe }}',
type = '{{ type }}',
warning_threshold = {{ warning_threshold }}
WHERE 
slo_id = '{{ slo_id }}' --required
AND name = '{{ name }}' --required
AND thresholds = '{{ thresholds }}' --required
AND type = '{{ type }}' --required
RETURNING
data,
errors,
metadata;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slo"
    values={[
        { label: 'delete_slo', value: 'delete_slo' }
    ]}
>
<TabItem value="delete_slo">

Permanently delete the specified service level objective object.&lt;br /&gt;&lt;br /&gt;If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns&lt;br /&gt;a 409 conflict error because the SLO is referenced in a dashboard.

```sql
DELETE FROM datadog.service_management.slos
WHERE slo_id = '{{ slo_id }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_slotimeframe_in_bulk"
    values={[
        { label: 'delete_slotimeframe_in_bulk', value: 'delete_slotimeframe_in_bulk' }
    ]}
>
<TabItem value="delete_slotimeframe_in_bulk">

Delete (or partially delete) multiple service level objective objects.&lt;br /&gt;&lt;br /&gt;This endpoint facilitates deletion of one or more thresholds for one or more&lt;br /&gt;service level objective objects. If all thresholds are deleted, the service level&lt;br /&gt;objective object is deleted as well.

```sql
EXEC datadog.service_management.slos.delete_slotimeframe_in_bulk 
;
```
</TabItem>
</Tabs>
