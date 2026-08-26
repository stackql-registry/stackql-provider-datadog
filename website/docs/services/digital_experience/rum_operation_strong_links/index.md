--- 
title: rum_operation_strong_links
hide_title: false
hide_table_of_contents: false
keywords:
  - rum_operation_strong_links
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

Creates, updates, deletes, gets or lists a <code>rum_operation_strong_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rum_operation_strong_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.digital_experience.rum_operation_strong_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rumoperation_strong_links"
    values={[
        { label: 'list_rumoperation_strong_links', value: 'list_rumoperation_strong_links' }
    ]}
>
<TabItem value="list_rumoperation_strong_links">

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
    <td>The unique identifier of the strong link, formatted as `&lt;operation_id&gt;:&lt;feature_id&gt;`. (example: abc12345-1234-5678-abcd-ef1234567890:feature-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a RUM operation strong link response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for RUM operation strong link resources. (strong_links) (example: strong_links)</td>
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
    <td><a href="#list_rumoperation_strong_links"><CopyableCode code="list_rumoperation_strong_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-operation_id"><code>operation_id</code></a>, <a href="#parameter-feature_id"><code>feature_id</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a></td>
    <td>List strong links between RUM operations and features. A strong link confirms that a feature&lt;br /&gt;belongs to an operation. Provide `operation_id`, `feature_id`, or both to filter results;&lt;br /&gt;at least one is required.</td>
</tr>
<tr>
    <td><a href="#create_rumoperation_strong_link"><CopyableCode code="create_rumoperation_strong_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a strong link between a RUM operation and a feature, confirming that the feature&lt;br /&gt;belongs to the operation. The operation can be identified by `operation_id` or `operation_name`;&lt;br /&gt;if `operation_name` does not match an existing operation, a stub operation is created.</td>
</tr>
<tr>
    <td><a href="#update_rumoperation_strong_link"><CopyableCode code="update_rumoperation_strong_link" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-rum_operation_id"><code>rum_operation_id</code></a>, <a href="#parameter-feature_id"><code>feature_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the status of a strong link between a RUM operation and a feature.</td>
</tr>
<tr>
    <td><a href="#delete_rumoperation_strong_link"><CopyableCode code="delete_rumoperation_strong_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rum_operation_id"><code>rum_operation_id</code></a>, <a href="#parameter-feature_id"><code>feature_id</code></a></td>
    <td></td>
    <td>Delete the strong link between a RUM operation and a feature.</td>
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
<tr id="parameter-feature_id">
    <td><CopyableCode code="feature_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the feature.</td>
</tr>
<tr id="parameter-rum_operation_id">
    <td><CopyableCode code="rum_operation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the RUM operation.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-feature_id">
    <td><CopyableCode code="feature_id" /></td>
    <td><code>string</code></td>
    <td>Filter strong links by feature ID.</td>
</tr>
<tr id="parameter-operation_id">
    <td><CopyableCode code="operation_id" /></td>
    <td><code>string</code></td>
    <td>Filter strong links by RUM operation ID.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items per page. Maximum of 200.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset for pagination.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_rumoperation_strong_links"
    values={[
        { label: 'list_rumoperation_strong_links', value: 'list_rumoperation_strong_links' }
    ]}
>
<TabItem value="list_rumoperation_strong_links">

List strong links between RUM operations and features. A strong link confirms that a feature&lt;br /&gt;belongs to an operation. Provide `operation_id`, `feature_id`, or both to filter results;&lt;br /&gt;at least one is required.

```sql
SELECT
id,
attributes,
type
FROM datadog.digital_experience.rum_operation_strong_links
WHERE operation_id = '{{ operation_id }}'
AND feature_id = '{{ feature_id }}'
AND page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rumoperation_strong_link"
    values={[
        { label: 'create_rumoperation_strong_link', value: 'create_rumoperation_strong_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rumoperation_strong_link">

Create a strong link between a RUM operation and a feature, confirming that the feature&lt;br /&gt;belongs to the operation. The operation can be identified by `operation_id` or `operation_name`;&lt;br /&gt;if `operation_name` does not match an existing operation, a stub operation is created.

```sql
INSERT INTO datadog.digital_experience.rum_operation_strong_links (
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
- name: rum_operation_strong_links
  props:
    - name: data
      description: |
        The data object for creating a RUM operation strong link.
      value:
        attributes:
          application_id: "{{ application_id }}"
          description: "{{ description }}"
          feature_id: "{{ feature_id }}"
          operation_id: "{{ operation_id }}"
          operation_name: "{{ operation_name }}"
          status: "{{ status }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_rumoperation_strong_link"
    values={[
        { label: 'update_rumoperation_strong_link', value: 'update_rumoperation_strong_link' }
    ]}
>
<TabItem value="update_rumoperation_strong_link">

Update the status of a strong link between a RUM operation and a feature.

```sql
REPLACE datadog.digital_experience.rum_operation_strong_links
SET 
data = '{{ data }}'
WHERE 
rum_operation_id = '{{ rum_operation_id }}' --required
AND feature_id = '{{ feature_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rumoperation_strong_link"
    values={[
        { label: 'delete_rumoperation_strong_link', value: 'delete_rumoperation_strong_link' }
    ]}
>
<TabItem value="delete_rumoperation_strong_link">

Delete the strong link between a RUM operation and a feature.

```sql
DELETE FROM datadog.digital_experience.rum_operation_strong_links
WHERE rum_operation_id = '{{ rum_operation_id }}' --required
AND feature_id = '{{ feature_id }}' --required
;
```
</TabItem>
</Tabs>
