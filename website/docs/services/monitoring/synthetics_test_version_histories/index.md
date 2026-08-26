--- 
title: synthetics_test_version_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_test_version_histories
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

Creates, updates, deletes, gets or lists a <code>synthetics_test_version_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_test_version_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_test_version_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_synthetics_test_version"
    values={[
        { label: 'get_synthetics_test_version', value: 'get_synthetics_test_version' },
        { label: 'list_synthetics_test_versions', value: 'list_synthetics_test_versions' }
    ]}
>
<TabItem value="get_synthetics_test_version">

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
    <td>UUID of the version record. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a specific Synthetic test version.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the version resource. (version) (default: version, example: version)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_synthetics_test_versions">

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
    <td>UUID of the version change record. (example: 00000000-0000-0000-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a version change record.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the version metadata resource. (version_metadata) (default: version_metadata, example: version_metadata)</td>
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
    <td><a href="#get_synthetics_test_version"><CopyableCode code="get_synthetics_test_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-version_number"><code>version_number</code></a></td>
    <td><a href="#parameter-include_change_metadata"><code>include_change_metadata</code></a>, <a href="#parameter-only_check_existence"><code>only_check_existence</code></a></td>
    <td>Get a specific version of a Synthetic test by its version number.</td>
</tr>
<tr>
    <td><a href="#list_synthetics_test_versions"><CopyableCode code="list_synthetics_test_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td><a href="#parameter-last_version_number"><code>last_version_number</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Get the paginated version history for a Synthetic test.</td>
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
    <td>The public ID of the Synthetic test.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-version_number">
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number to retrieve.</td>
</tr>
<tr id="parameter-include_change_metadata">
    <td><CopyableCode code="include_change_metadata" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, include change metadata in the response.</td>
</tr>
<tr id="parameter-last_version_number">
    <td><CopyableCode code="last_version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the last item from the previous page. Omit to get the first page.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of version records to return per page.</td>
</tr>
<tr id="parameter-only_check_existence">
    <td><CopyableCode code="only_check_existence" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, only check whether the version exists without returning its full payload. Returns an empty object if the version exists, or 404 if not.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_synthetics_test_version"
    values={[
        { label: 'get_synthetics_test_version', value: 'get_synthetics_test_version' },
        { label: 'list_synthetics_test_versions', value: 'list_synthetics_test_versions' }
    ]}
>
<TabItem value="get_synthetics_test_version">

Get a specific version of a Synthetic test by its version number.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_test_version_histories
WHERE public_id = '{{ public_id }}' -- required
AND version_number = '{{ version_number }}' -- required
AND include_change_metadata = '{{ include_change_metadata }}'
AND only_check_existence = '{{ only_check_existence }}'
;
```
</TabItem>
<TabItem value="list_synthetics_test_versions">

Get the paginated version history for a Synthetic test.

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_test_version_histories
WHERE public_id = '{{ public_id }}' -- required
AND last_version_number = '{{ last_version_number }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
