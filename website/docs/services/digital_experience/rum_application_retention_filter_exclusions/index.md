--- 
title: rum_application_retention_filter_exclusions
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_application_retention_filter_exclusions
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

Creates, updates, deletes, gets or lists a <code>rum_application_retention_filter_exclusions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_application_retention_filter_exclusions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_application_retention_filter_exclusions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_exclusion_filter"
    values={[
        { label: 'get_exclusion_filter', value: 'get_exclusion_filter' },
        { label: 'list_exclusion_filters', value: 'list_exclusion_filters' }
    ]}
>
<TabItem value="get_exclusion_filter">

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
    <td>The ID of the exclusion filter. (example: 051601eb-54a0-abc0-03f9-cc02efa18892)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an exclusion filter.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata about the exclusion filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type. The value must be `exclusion_filters`. (exclusion_filters) (default: exclusion_filters, example: exclusion_filters)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_exclusion_filters">

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
    <td>The ID of the exclusion filter. (example: 051601eb-54a0-abc0-03f9-cc02efa18892)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of an exclusion filter.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata about the exclusion filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type. The value must be `exclusion_filters`. (exclusion_filters) (default: exclusion_filters, example: exclusion_filters)</td>
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
    <td><a href="#get_exclusion_filter"><CopyableCode code="get_exclusion_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-ef_id"><code>ef_id</code></a></td>
    <td></td>
    <td>Get a single exclusion filter for a RUM application.</td>
</tr>
<tr>
    <td><a href="#list_exclusion_filters"><CopyableCode code="list_exclusion_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Get the list of exclusion filters for a RUM application.&lt;br /&gt;The built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`) is always returned first.</td>
</tr>
<tr>
    <td><a href="#create_exclusion_filter"><CopyableCode code="create_exclusion_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an exclusion filter for a RUM application.&lt;br /&gt;Returns the created exclusion filter when the request is successful.</td>
</tr>
<tr>
    <td><a href="#update_exclusion_filter"><CopyableCode code="update_exclusion_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-ef_id"><code>ef_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update an exclusion filter for a RUM application.&lt;br /&gt;For the built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`), only `enabled` can be&lt;br /&gt;updated; `name`, `event_type`, and `query` must be omitted.&lt;br /&gt;Returns the updated exclusion filter when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_exclusion_filter"><CopyableCode code="delete_exclusion_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-ef_id"><code>ef_id</code></a></td>
    <td></td>
    <td>Delete an exclusion filter for a RUM application.&lt;br /&gt;The built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`) cannot be deleted;&lt;br /&gt;attempting to do so returns a `405 Method Not Allowed` response.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>RUM application ID.</td>
</tr>
<tr id="parameter-ef_id">
    <td><CopyableCode code="ef_id" /></td>
    <td><code>string</code></td>
    <td>Exclusion filter ID.</td>
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
    defaultValue="get_exclusion_filter"
    values={[
        { label: 'get_exclusion_filter', value: 'get_exclusion_filter' },
        { label: 'list_exclusion_filters', value: 'list_exclusion_filters' }
    ]}
>
<TabItem value="get_exclusion_filter">

Get a single exclusion filter for a RUM application.

```sql
SELECT
id,
attributes,
meta,
type
FROM datadog.digital_experience.rum_application_retention_filter_exclusions
WHERE app_id = '{{ app_id }}' -- required
AND ef_id = '{{ ef_id }}' -- required
;
```
</TabItem>
<TabItem value="list_exclusion_filters">

Get the list of exclusion filters for a RUM application.&lt;br /&gt;The built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`) is always returned first.

```sql
SELECT
id,
attributes,
meta,
type
FROM datadog.digital_experience.rum_application_retention_filter_exclusions
WHERE app_id = '{{ app_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_exclusion_filter"
    values={[
        { label: 'create_exclusion_filter', value: 'create_exclusion_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_exclusion_filter">

Create an exclusion filter for a RUM application.&lt;br /&gt;Returns the created exclusion filter when the request is successful.

```sql
INSERT INTO datadog.digital_experience.rum_application_retention_filter_exclusions (
data,
app_id
)
SELECT 
'{{ data }}' /* required */,
'{{ app_id }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rum_application_retention_filter_exclusions
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the rum_application_retention_filter_exclusions resource.
    - name: data
      description: |
        The new exclusion filter properties to create.
      value:
        attributes:
          enabled: {{ enabled }}
          event_type: "{{ event_type }}"
          name: "{{ name }}"
          query: "{{ query }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_exclusion_filter"
    values={[
        { label: 'update_exclusion_filter', value: 'update_exclusion_filter' }
    ]}
>
<TabItem value="update_exclusion_filter">

Update an exclusion filter for a RUM application.&lt;br /&gt;For the built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`), only `enabled` can be&lt;br /&gt;updated; `name`, `event_type`, and `query` must be omitted.&lt;br /&gt;Returns the updated exclusion filter when the request is successful.

```sql
UPDATE datadog.digital_experience.rum_application_retention_filter_exclusions
SET 
data = '{{ data }}'
WHERE 
app_id = '{{ app_id }}' --required
AND ef_id = '{{ ef_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_exclusion_filter"
    values={[
        { label: 'delete_exclusion_filter', value: 'delete_exclusion_filter' }
    ]}
>
<TabItem value="delete_exclusion_filter">

Delete an exclusion filter for a RUM application.&lt;br /&gt;The built-in Error Tracking exclusion filter (`error_tracking_exclusion_filter`) cannot be deleted;&lt;br /&gt;attempting to do so returns a `405 Method Not Allowed` response.

```sql
DELETE FROM datadog.digital_experience.rum_application_retention_filter_exclusions
WHERE app_id = '{{ app_id }}' --required
AND ef_id = '{{ ef_id }}' --required
;
```
</TabItem>
</Tabs>
