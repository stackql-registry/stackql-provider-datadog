--- 
title: synthetics_suites
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_suites
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>synthetics_suites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_suites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_suites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_synthetics_suite"
    values={[
        { label: 'get_synthetics_suite', value: 'get_synthetics_suite' },
        { label: 'search_suites', value: 'search_suites' }
    ]}
>
<TabItem value="get_synthetics_suite">

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
    <td>The public ID for the suite. (example: 123-abc-456)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Object containing details about a Synthetic suite.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for the Synthetics suites responses, `suites`. (suites) (default: suites, example: suites)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_suites">

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
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the suite search response data.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Synthetics suite search response data attributes</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for the Synthetics suites search response, `suites_search`. (suites_search) (default: suites_search, example: suites_search)</td>
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
    <td><a href="#get_synthetics_suite"><CopyableCode code="get_synthetics_suite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#search_suites"><CopyableCode code="search_suites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-facets_only"><code>facets_only</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-count"><code>count</code></a></td>
    <td>Search for test suites.</td>
</tr>
<tr>
    <td><a href="#create_synthetics_suite"><CopyableCode code="create_synthetics_suite" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#edit_synthetics_suite"><CopyableCode code="edit_synthetics_suite" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_synthetics_suites"><CopyableCode code="delete_synthetics_suites" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-public_id">
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The public ID of the suite to edit.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-facets_only">
    <td><CopyableCode code="facets_only" /></td>
    <td><code>boolean</code></td>
    <td>If true, return only facets instead of full test details.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The search query.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The sort order for the results (e.g., `name,asc` or `name,desc`).</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>The offset from which to start returning results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_synthetics_suite"
    values={[
        { label: 'get_synthetics_suite', value: 'get_synthetics_suite' },
        { label: 'search_suites', value: 'search_suites' }
    ]}
>
<TabItem value="get_synthetics_suite">

OK

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_suites
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
<TabItem value="search_suites">

Search for test suites.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_suites
WHERE query = '{{ query }}'
AND sort = '{{ sort }}'
AND facets_only = '{{ facets_only }}'
AND start = '{{ start }}'
AND count = '{{ count }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_synthetics_suite"
    values={[
        { label: 'create_synthetics_suite', value: 'create_synthetics_suite' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_synthetics_suite">

No description available.

```sql
INSERT INTO datadog.monitoring.synthetics_suites (
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
- name: synthetics_suites
  props:
    - name: data
      description: |
        Data object for creating or editing a Synthetic test suite.
      value:
        attributes:
          message: "{{ message }}"
          monitor_id: {{ monitor_id }}
          name: "{{ name }}"
          options:
            alerting_threshold: {{ alerting_threshold }}
          public_id: "{{ public_id }}"
          tags:
            - "{{ tags }}"
          tests:
            - alerting_criticality: "{{ alerting_criticality }}"
              public_id: "{{ public_id }}"
          type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="edit_synthetics_suite"
    values={[
        { label: 'edit_synthetics_suite', value: 'edit_synthetics_suite' }
    ]}
>
<TabItem value="edit_synthetics_suite">

No description available.

```sql
REPLACE datadog.monitoring.synthetics_suites
SET 
data = '{{ data }}'
WHERE 
public_id = '{{ public_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="delete_synthetics_suites"
    values={[
        { label: 'delete_synthetics_suites', value: 'delete_synthetics_suites' }
    ]}
>
<TabItem value="delete_synthetics_suites">

OK

```sql
EXEC datadog.monitoring.synthetics_suites.delete_synthetics_suites 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
