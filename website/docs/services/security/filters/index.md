--- 
title: filters
hide_title: false
hide_table_of_contents: false
keywords:
  - filters
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

Creates, updates, deletes, gets or lists a <code>filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_filter"
    values={[
        { label: 'get_security_filter', value: 'get_security_filter' },
        { label: 'list_security_filters', value: 'list_security_filters' }
    ]}
>
<TabItem value="get_security_filter">

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
    <td>The ID of the security filter. (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object describing a security filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `security_filters`. (security_filters) (default: security_filters, example: security_filters)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_filters">

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
    <td>The ID of the security filter. (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The object describing a security filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `security_filters`. (security_filters) (default: security_filters, example: security_filters)</td>
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
    <td><a href="#get_security_filter"><CopyableCode code="get_security_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-security_filter_id"><code>security_filter_id</code></a></td>
    <td></td>
    <td>Get the details of a specific security filter.&lt;br /&gt;&lt;br /&gt;See the &#91;security filter guide&#93;(https:​//docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)&lt;br /&gt;for more examples.</td>
</tr>
<tr>
    <td><a href="#list_security_filters"><CopyableCode code="list_security_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get the list of configured security filters with their definitions.</td>
</tr>
<tr>
    <td><a href="#create_security_filter"><CopyableCode code="create_security_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a security filter.&lt;br /&gt;&lt;br /&gt;See the &#91;security filter guide&#93;(https:​//docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)&lt;br /&gt;for more examples.</td>
</tr>
<tr>
    <td><a href="#update_security_filter"><CopyableCode code="update_security_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-security_filter_id"><code>security_filter_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific security filter.&lt;br /&gt;Returns the security filter object when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_security_filter"><CopyableCode code="delete_security_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-security_filter_id"><code>security_filter_id</code></a></td>
    <td></td>
    <td>Delete a specific security filter.</td>
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
<tr id="parameter-security_filter_id">
    <td><CopyableCode code="security_filter_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security filter.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_filter"
    values={[
        { label: 'get_security_filter', value: 'get_security_filter' },
        { label: 'list_security_filters', value: 'list_security_filters' }
    ]}
>
<TabItem value="get_security_filter">

Get the details of a specific security filter.&lt;br /&gt;&lt;br /&gt;See the &#91;security filter guide&#93;(https:​//docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)&lt;br /&gt;for more examples.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.filters
WHERE security_filter_id = '{{ security_filter_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_filters">

Get the list of configured security filters with their definitions.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.filters
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_filter"
    values={[
        { label: 'create_security_filter', value: 'create_security_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_filter">

Create a security filter.&lt;br /&gt;&lt;br /&gt;See the &#91;security filter guide&#93;(https:​//docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)&lt;br /&gt;for more examples.

```sql
INSERT INTO datadog.security.filters (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: filters
  props:
    - name: data
      description: |
        Object for a single security filter.
      value:
        attributes:
          exclusion_filters:
            - name: "{{ name }}"
              query: "{{ query }}"
          filtered_data_type: "{{ filtered_data_type }}"
          is_enabled: {{ is_enabled }}
          name: "{{ name }}"
          query: "{{ query }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_filter"
    values={[
        { label: 'update_security_filter', value: 'update_security_filter' }
    ]}
>
<TabItem value="update_security_filter">

Update a specific security filter.&lt;br /&gt;Returns the security filter object when the request is successful.

```sql
UPDATE datadog.security.filters
SET 
data = '{{ data }}'
WHERE 
security_filter_id = '{{ security_filter_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
meta;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_filter"
    values={[
        { label: 'delete_security_filter', value: 'delete_security_filter' }
    ]}
>
<TabItem value="delete_security_filter">

Delete a specific security filter.

```sql
DELETE FROM datadog.security.filters
WHERE security_filter_id = '{{ security_filter_id }}' --required
;
```
</TabItem>
</Tabs>
