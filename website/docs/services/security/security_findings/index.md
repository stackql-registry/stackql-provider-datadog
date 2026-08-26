--- 
title: security_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - security_findings
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

Creates, updates, deletes, gets or lists a <code>security_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.security_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_security_findings"
    values={[
        { label: 'list_security_findings', value: 'list_security_findings' }
    ]}
>
<TabItem value="list_security_findings">

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
    <td>The unique ID of the security finding. (example: ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The JSON object containing all attributes of the security finding.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the security finding resource. (finding) (default: finding, example: finding)</td>
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
    <td><a href="#list_security_findings"><CopyableCode code="list_security_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-page[cursor]"><code>page[cursor]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Get a list of security findings that match a search query. &#91;See the schema for security findings&#93;(https:​//docs.datadoghq.com/security/guide/findings-schema/).&lt;br /&gt;&lt;br /&gt;### Query Syntax&lt;br /&gt;&lt;br /&gt;This endpoint uses the logs query syntax. Findings attributes (living in the attributes.attributes. namespace) are prefixed by @ when queried. Tags are queried without a prefix.&lt;br /&gt;&lt;br /&gt;Example: `@severity:(critical OR high) @status:open team:platform`</td>
</tr>
<tr>
    <td><a href="#update_findings_assignee"><CopyableCode code="update_findings_assignee" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Assign or unassign security findings.&lt;br /&gt;You can assign up to 100 security findings per request. Set `assignee_id` to the unique identifier of the Datadog user you want to assign the findings to. Omit `assignee_id` (or set it to `null`) to unassign the findings. Per-finding warnings and failures are returned in the response `meta` object.</td>
</tr>
<tr>
    <td><a href="#search_security_findings"><CopyableCode code="search_security_findings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Get a list of security findings that match a search query. &#91;See the schema for security findings&#93;(https:​//docs.datadoghq.com/security/guide/findings-schema/).&lt;br /&gt;&lt;br /&gt;### Query Syntax&lt;br /&gt;&lt;br /&gt;The API uses the logs query syntax. Findings attributes (living in the attributes.attributes. namespace) are prefixed by @ when queried. Tags are queried without a prefix.&lt;br /&gt;&lt;br /&gt;Example: `@severity:(critical OR high) @status:open team:platform`</td>
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
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>The search query following log search syntax. (example: @severity:(critical OR high) @status:open team:platform)</td>
</tr>
<tr id="parameter-page[cursor]">
    <td><CopyableCode code="page[cursor]" /></td>
    <td><code>string</code></td>
    <td>Get the next page of results with a cursor provided in the previous query. (example: eyJhZnRlciI6IkF3QUFBWnPcm1pd0FBQUJbVlBQUKBa1pqRTVdZUzSTBNemN0YWiIsLTE3Mjk0MzYwMjFdfQ==)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of findings in the response. (example: 25)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sorts by @detection_changed_at.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_security_findings"
    values={[
        { label: 'list_security_findings', value: 'list_security_findings' }
    ]}
>
<TabItem value="list_security_findings">

Get a list of security findings that match a search query. &#91;See the schema for security findings&#93;(https:​//docs.datadoghq.com/security/guide/findings-schema/).&lt;br /&gt;&lt;br /&gt;### Query Syntax&lt;br /&gt;&lt;br /&gt;This endpoint uses the logs query syntax. Findings attributes (living in the attributes.attributes. namespace) are prefixed by @ when queried. Tags are queried without a prefix.&lt;br /&gt;&lt;br /&gt;Example: `@severity:(critical OR high) @status:open team:platform`

```sql
SELECT
id,
attributes,
type
FROM datadog.security.security_findings
WHERE filter[query] = '{{ filter[query] }}'
AND page[cursor] = '{{ page[cursor] }}'
AND page[limit] = '{{ page[limit] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_findings_assignee"
    values={[
        { label: 'update_findings_assignee', value: 'update_findings_assignee' },
        { label: 'search_security_findings', value: 'search_security_findings' }
    ]}
>
<TabItem value="update_findings_assignee">

Assign or unassign security findings.&lt;br /&gt;You can assign up to 100 security findings per request. Set `assignee_id` to the unique identifier of the Datadog user you want to assign the findings to. Omit `assignee_id` (or set it to `null`) to unassign the findings. Per-finding warnings and failures are returned in the response `meta` object.

```sql
EXEC datadog.security.security_findings.update_findings_assignee 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="search_security_findings">

Get a list of security findings that match a search query. &#91;See the schema for security findings&#93;(https:​//docs.datadoghq.com/security/guide/findings-schema/).&lt;br /&gt;&lt;br /&gt;### Query Syntax&lt;br /&gt;&lt;br /&gt;The API uses the logs query syntax. Findings attributes (living in the attributes.attributes. namespace) are prefixed by @ when queried. Tags are queried without a prefix.&lt;br /&gt;&lt;br /&gt;Example: `@severity:(critical OR high) @status:open team:platform`

```sql
EXEC datadog.security.security_findings.search_security_findings 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
