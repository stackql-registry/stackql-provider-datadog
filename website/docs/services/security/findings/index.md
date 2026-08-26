--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding"
    values={[
        { label: 'get_finding', value: 'get_finding' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_finding">

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
    <td>The unique ID for this finding. (example: ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The JSON:API attributes of the detailed finding.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for findings that have the message and resource configuration. (detailed_finding) (default: detailed_finding, example: detailed_finding)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings">

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
    <td>The unique ID for this finding. (example: ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The JSON:API attributes of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for findings. (finding) (default: finding, example: finding)</td>
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
    <td><a href="#get_finding"><CopyableCode code="get_finding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-finding_id"><code>finding_id</code></a></td>
    <td><a href="#parameter-snapshot_timestamp"><code>snapshot_timestamp</code></a></td>
    <td>Returns a single finding with message and resource configuration.</td>
</tr>
<tr>
    <td><a href="#list_findings"><CopyableCode code="list_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-snapshot_timestamp"><code>snapshot_timestamp</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-filter[evaluation_changed_at]"><code>filter[evaluation_changed_at]</code></a>, <a href="#parameter-filter[muted]"><code>filter[muted]</code></a>, <a href="#parameter-filter[rule_id]"><code>filter[rule_id]</code></a>, <a href="#parameter-filter[rule_name]"><code>filter[rule_name]</code></a>, <a href="#parameter-filter[resource_type]"><code>filter[resource_type]</code></a>, <a href="#parameter-filter[@resource_id]"><code>filter[@resource_id]</code></a>, <a href="#parameter-filter[discovery_timestamp]"><code>filter[discovery_timestamp]</code></a>, <a href="#parameter-filter[evaluation]"><code>filter[evaluation]</code></a>, <a href="#parameter-filter[status]"><code>filter[status]</code></a>, <a href="#parameter-filter[vulnerability_type]"><code>filter[vulnerability_type]</code></a>, <a href="#parameter-detailed_findings"><code>detailed_findings</code></a></td>
    <td>Get a list of findings. These include both misconfigurations and identity risks.&lt;br /&gt;&lt;br /&gt;**Note**: To filter and return only identity risks, add the following query parameter: `?filter&#91;tags&#93;=dd_rule_type:ciem`&lt;br /&gt;&lt;br /&gt;### Filtering&lt;br /&gt;&lt;br /&gt;Filters can be applied by appending query parameters to the URL.&lt;br /&gt;&lt;br /&gt;  - Using a single filter: `?filter&#91;attribute_key&#93;=attribute_value`&lt;br /&gt;  - Chaining filters: `?filter&#91;attribute_key&#93;=attribute_value&filter&#91;attribute_key&#93;=attribute_value...`&lt;br /&gt;  - Filtering on tags: `?filter&#91;tags&#93;=tag_key:tag_value&filter&#91;tags&#93;=tag_key_2:tag_value_2`&lt;br /&gt;&lt;br /&gt;Here, `attribute_key` can be any of the filter keys described further below.&lt;br /&gt;&lt;br /&gt;Query parameters of type `integer` support comparison operators (`&gt;`, `&gt;=`, `&lt;`, `&lt;=`). This is particularly useful when filtering by `evaluation_changed_at` or `resource_discovery_timestamp`. For example: `?filter&#91;evaluation_changed_at&#93;=&gt;20123123121`.&lt;br /&gt;&lt;br /&gt;You can also use the negation operator on strings. For example, use `filter&#91;resource_type&#93;=-aws*` to filter for any non-AWS resources.&lt;br /&gt;&lt;br /&gt;The operator must come after the equal sign. For example, to filter with the `&gt;=` operator, add the operator after the equal sign: `filter&#91;evaluation_changed_at&#93;=&gt;=1678809373257`.&lt;br /&gt;&lt;br /&gt;Query parameters must be only among the documented ones and with values of correct types. Duplicated query parameters (e.g. `filter&#91;status&#93;=low&filter&#91;status&#93;=info`) are not allowed.&lt;br /&gt;&lt;br /&gt;### Additional extension fields&lt;br /&gt;&lt;br /&gt;Additional extension fields are available for some findings.&lt;br /&gt;&lt;br /&gt;The data is available when you include the query parameter `?detailed_findings=true` in the request.&lt;br /&gt;&lt;br /&gt;The following fields are available for findings:&lt;br /&gt;- `external_id`: The resource external ID related to the finding.&lt;br /&gt;- `description`: The description and remediation steps for the finding.&lt;br /&gt;- `datadog_link`: The Datadog relative link for the finding.&lt;br /&gt;- `ip_addresses`: The list of private IP addresses for the resource related to the finding.&lt;br /&gt;&lt;br /&gt;### Response&lt;br /&gt;&lt;br /&gt;The response includes an array of finding objects, pagination metadata, and a count of items that match the query.&lt;br /&gt;&lt;br /&gt;Each finding object contains the following:&lt;br /&gt;&lt;br /&gt;- The finding ID that can be used in a `GetFinding` request to retrieve the full finding details.&lt;br /&gt;- Core attributes, including status, evaluation, high-level resource details, muted state, and rule details.&lt;br /&gt;- `evaluation_changed_at` and `resource_discovery_date` time stamps.&lt;br /&gt;- An array of associated tags.</td>
</tr>
<tr>
    <td><a href="#mute_security_findings"><CopyableCode code="mute_security_findings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Mute or unmute security findings.&lt;br /&gt;You can mute or unmute up to 100 security findings per request. The request body must include `is_muted` and `reason` attributes. The allowed reasons depend on whether the finding is being muted or unmuted:&lt;br /&gt;  - To mute a finding: `PENDING_FIX`, `FALSE_POSITIVE`, `OTHER`, `NO_FIX`, `DUPLICATE`, `RISK_ACCEPTED`.&lt;br /&gt;  - To unmute a finding: `NO_PENDING_FIX`, `HUMAN_ERROR`, `NO_LONGER_ACCEPTED_RISK`, `OTHER`.</td>
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
<tr id="parameter-finding_id">
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the finding.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-detailed_findings">
    <td><CopyableCode code="detailed_findings" /></td>
    <td><code>boolean</code></td>
    <td>Return additional fields for some findings. (example: &#91;true&#93;)</td>
</tr>
<tr id="parameter-filter[@resource_id]">
    <td><CopyableCode code="filter[@resource_id]" /></td>
    <td><code>string</code></td>
    <td>Return only findings for the specified resource id.</td>
</tr>
<tr id="parameter-filter[discovery_timestamp]">
    <td><CopyableCode code="filter[discovery_timestamp]" /></td>
    <td><code>string</code></td>
    <td>Return findings that were found on a specified date (Unix ms) or date range (using comparison operators). (example: &gt;=1678721573794)</td>
</tr>
<tr id="parameter-filter[evaluation]">
    <td><CopyableCode code="filter[evaluation]" /></td>
    <td><code>string</code></td>
    <td>Return only `pass` or `fail` findings.</td>
</tr>
<tr id="parameter-filter[evaluation_changed_at]">
    <td><CopyableCode code="filter[evaluation_changed_at]" /></td>
    <td><code>string</code></td>
    <td>Return findings that have changed from pass to fail or vice versa on a specified date (Unix ms) or date range (using comparison operators). (example: &gt;=1678721573794)</td>
</tr>
<tr id="parameter-filter[muted]">
    <td><CopyableCode code="filter[muted]" /></td>
    <td><code>boolean</code></td>
    <td>Set to `true` to return findings that are muted. Set to `false` to return unmuted findings.</td>
</tr>
<tr id="parameter-filter[resource_type]">
    <td><CopyableCode code="filter[resource_type]" /></td>
    <td><code>string</code></td>
    <td>Return only findings for the specified resource type.</td>
</tr>
<tr id="parameter-filter[rule_id]">
    <td><CopyableCode code="filter[rule_id]" /></td>
    <td><code>string</code></td>
    <td>Return findings for the specified rule ID.</td>
</tr>
<tr id="parameter-filter[rule_name]">
    <td><CopyableCode code="filter[rule_name]" /></td>
    <td><code>string</code></td>
    <td>Return findings for the specified rule.</td>
</tr>
<tr id="parameter-filter[status]">
    <td><CopyableCode code="filter[status]" /></td>
    <td><code>string</code></td>
    <td>Return only findings with the specified status.</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Return findings that have these associated tags (repeatable). (example: filter&#91;tags&#93;=cloud_provider:aws&filter&#91;tags&#93;=aws_account:999999999999)</td>
</tr>
<tr id="parameter-filter[vulnerability_type]">
    <td><CopyableCode code="filter[vulnerability_type]" /></td>
    <td><code>array</code></td>
    <td>Return findings that match the selected vulnerability types (repeatable). (example: &#91;misconfiguration&#93;)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Return the next page of findings pointed to by the cursor. (example: eyJhZnRlciI6IkFRQUFBWWJiaEJXQS1OY1dqUUFBQUFCQldXSmlhRUpYUVVGQlJFSktkbTlDTUdaWFRVbDNRVUUiLCJ2YWx1ZXMiOlsiY3JpdGljYWwiXX0=)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Limit the number of findings returned. Must be &lt;= 1000. (example: 50)</td>
</tr>
<tr id="parameter-snapshot_timestamp">
    <td><CopyableCode code="snapshot_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Return findings for a given snapshot of time (Unix ms). (example: 1678721573794)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_finding"
    values={[
        { label: 'get_finding', value: 'get_finding' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_finding">

Returns a single finding with message and resource configuration.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.findings
WHERE finding_id = '{{ finding_id }}' -- required
AND snapshot_timestamp = '{{ snapshot_timestamp }}'
;
```
</TabItem>
<TabItem value="list_findings">

Get a list of findings. These include both misconfigurations and identity risks.&lt;br /&gt;&lt;br /&gt;**Note**: To filter and return only identity risks, add the following query parameter: `?filter&#91;tags&#93;=dd_rule_type:ciem`&lt;br /&gt;&lt;br /&gt;### Filtering&lt;br /&gt;&lt;br /&gt;Filters can be applied by appending query parameters to the URL.&lt;br /&gt;&lt;br /&gt;  - Using a single filter: `?filter&#91;attribute_key&#93;=attribute_value`&lt;br /&gt;  - Chaining filters: `?filter&#91;attribute_key&#93;=attribute_value&filter&#91;attribute_key&#93;=attribute_value...`&lt;br /&gt;  - Filtering on tags: `?filter&#91;tags&#93;=tag_key:tag_value&filter&#91;tags&#93;=tag_key_2:tag_value_2`&lt;br /&gt;&lt;br /&gt;Here, `attribute_key` can be any of the filter keys described further below.&lt;br /&gt;&lt;br /&gt;Query parameters of type `integer` support comparison operators (`&gt;`, `&gt;=`, `&lt;`, `&lt;=`). This is particularly useful when filtering by `evaluation_changed_at` or `resource_discovery_timestamp`. For example: `?filter&#91;evaluation_changed_at&#93;=&gt;20123123121`.&lt;br /&gt;&lt;br /&gt;You can also use the negation operator on strings. For example, use `filter&#91;resource_type&#93;=-aws*` to filter for any non-AWS resources.&lt;br /&gt;&lt;br /&gt;The operator must come after the equal sign. For example, to filter with the `&gt;=` operator, add the operator after the equal sign: `filter&#91;evaluation_changed_at&#93;=&gt;=1678809373257`.&lt;br /&gt;&lt;br /&gt;Query parameters must be only among the documented ones and with values of correct types. Duplicated query parameters (e.g. `filter&#91;status&#93;=low&filter&#91;status&#93;=info`) are not allowed.&lt;br /&gt;&lt;br /&gt;### Additional extension fields&lt;br /&gt;&lt;br /&gt;Additional extension fields are available for some findings.&lt;br /&gt;&lt;br /&gt;The data is available when you include the query parameter `?detailed_findings=true` in the request.&lt;br /&gt;&lt;br /&gt;The following fields are available for findings:&lt;br /&gt;- `external_id`: The resource external ID related to the finding.&lt;br /&gt;- `description`: The description and remediation steps for the finding.&lt;br /&gt;- `datadog_link`: The Datadog relative link for the finding.&lt;br /&gt;- `ip_addresses`: The list of private IP addresses for the resource related to the finding.&lt;br /&gt;&lt;br /&gt;### Response&lt;br /&gt;&lt;br /&gt;The response includes an array of finding objects, pagination metadata, and a count of items that match the query.&lt;br /&gt;&lt;br /&gt;Each finding object contains the following:&lt;br /&gt;&lt;br /&gt;- The finding ID that can be used in a `GetFinding` request to retrieve the full finding details.&lt;br /&gt;- Core attributes, including status, evaluation, high-level resource details, muted state, and rule details.&lt;br /&gt;- `evaluation_changed_at` and `resource_discovery_date` time stamps.&lt;br /&gt;- An array of associated tags.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.findings
WHERE page[limit] = '{{ page[limit] }}'
AND snapshot_timestamp = '{{ snapshot_timestamp }}'
AND page[cursor] = '{{ page[cursor] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND filter[evaluation_changed_at] = '{{ filter[evaluation_changed_at] }}'
AND filter[muted] = '{{ filter[muted] }}'
AND filter[rule_id] = '{{ filter[rule_id] }}'
AND filter[rule_name] = '{{ filter[rule_name] }}'
AND filter[resource_type] = '{{ filter[resource_type] }}'
AND filter[@resource_id] = '{{ filter[@resource_id] }}'
AND filter[discovery_timestamp] = '{{ filter[discovery_timestamp] }}'
AND filter[evaluation] = '{{ filter[evaluation] }}'
AND filter[status] = '{{ filter[status] }}'
AND filter[vulnerability_type] = '{{ filter[vulnerability_type] }}'
AND detailed_findings = '{{ detailed_findings }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="mute_security_findings"
    values={[
        { label: 'mute_security_findings', value: 'mute_security_findings' }
    ]}
>
<TabItem value="mute_security_findings">

Mute or unmute security findings.&lt;br /&gt;You can mute or unmute up to 100 security findings per request. The request body must include `is_muted` and `reason` attributes. The allowed reasons depend on whether the finding is being muted or unmuted:&lt;br /&gt;  - To mute a finding: `PENDING_FIX`, `FALSE_POSITIVE`, `OTHER`, `NO_FIX`, `DUPLICATE`, `RISK_ACCEPTED`.&lt;br /&gt;  - To unmute a finding: `NO_PENDING_FIX`, `HUMAN_ERROR`, `NO_LONGER_ACCEPTED_RISK`, `OTHER`.

```sql
EXEC datadog.security.findings.mute_security_findings 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
