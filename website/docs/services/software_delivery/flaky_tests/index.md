--- 
title: flaky_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - flaky_tests
  - software_delivery
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

Creates, updates, deletes, gets or lists a <code>flaky_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flaky_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.software_delivery.flaky_tests" /></td></tr>
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
    <td><a href="#search_flaky_tests"><CopyableCode code="search_flaky_tests" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>List endpoint returning flaky tests from Flaky Test Management. Results are paginated.&lt;br /&gt;&lt;br /&gt;The response includes comprehensive test information including:&lt;br /&gt;- Test identification and metadata (module, suite, name)&lt;br /&gt;- Flaky state and categorization&lt;br /&gt;- First and last flake occurrences (timestamp, branch, commit SHA)&lt;br /&gt;- Test execution statistics from the last 7 days (failure rate)&lt;br /&gt;- Pipeline impact metrics (failed pipelines count, total lost time)&lt;br /&gt;- Complete status change history (optional, ordered from most recent to oldest)&lt;br /&gt;&lt;br /&gt;Set `include_history` to `true` in the request to receive the status change history for each test.&lt;br /&gt;History is disabled by default for better performance.&lt;br /&gt;&lt;br /&gt;Results support filtering by various facets including service, environment, repository, branch, and test state.</td>
</tr>
<tr>
    <td><a href="#update_flaky_tests"><CopyableCode code="update_flaky_tests" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the state of multiple flaky tests in Flaky Test Management.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="search_flaky_tests"
    values={[
        { label: 'search_flaky_tests', value: 'search_flaky_tests' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="search_flaky_tests">

List endpoint returning flaky tests from Flaky Test Management. Results are paginated.&lt;br /&gt;&lt;br /&gt;The response includes comprehensive test information including:&lt;br /&gt;- Test identification and metadata (module, suite, name)&lt;br /&gt;- Flaky state and categorization&lt;br /&gt;- First and last flake occurrences (timestamp, branch, commit SHA)&lt;br /&gt;- Test execution statistics from the last 7 days (failure rate)&lt;br /&gt;- Pipeline impact metrics (failed pipelines count, total lost time)&lt;br /&gt;- Complete status change history (optional, ordered from most recent to oldest)&lt;br /&gt;&lt;br /&gt;Set `include_history` to `true` in the request to receive the status change history for each test.&lt;br /&gt;History is disabled by default for better performance.&lt;br /&gt;&lt;br /&gt;Results support filtering by various facets including service, environment, repository, branch, and test state.

```sql
INSERT INTO datadog.software_delivery.flaky_tests (
data
)
SELECT 
'{{ data }}'
RETURNING
data,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flaky_tests
  props:
    - name: data
      description: |
        The JSON:API data for flaky tests search request.
      value:
        attributes:
          filter:
            include_history: {{ include_history }}
            query: "{{ query }}"
          page:
            cursor: "{{ cursor }}"
            limit: {{ limit }}
          sort: "{{ sort }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flaky_tests"
    values={[
        { label: 'update_flaky_tests', value: 'update_flaky_tests' }
    ]}
>
<TabItem value="update_flaky_tests">

Update the state of multiple flaky tests in Flaky Test Management.

```sql
UPDATE datadog.software_delivery.flaky_tests
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
