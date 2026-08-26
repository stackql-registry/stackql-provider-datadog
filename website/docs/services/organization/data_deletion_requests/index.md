--- 
title: data_deletion_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - data_deletion_requests
  - organization
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

Creates, updates, deletes, gets or lists a <code>data_deletion_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_deletion_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.data_deletion_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_deletion_requests"
    values={[
        { label: 'get_data_deletion_requests', value: 'get_data_deletion_requests' }
    ]}
>
<TabItem value="get_data_deletion_requests">

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
    <td>The ID of the created data deletion request. (example: 1)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Deletion attribute for data deletion response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the request created. (example: deletion_request)</td>
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
    <td><a href="#get_data_deletion_requests"><CopyableCode code="get_data_deletion_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-next_page"><code>next_page</code></a>, <a href="#parameter-product"><code>product</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-page_size"><code>page_size</code></a></td>
    <td>Gets a list of data deletion requests based on several filter parameters.</td>
</tr>
<tr>
    <td><a href="#create_data_deletion_request"><CopyableCode code="create_data_deletion_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-product"><code>product</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a data deletion request by providing a query and a timeframe targeting the proper data.</td>
</tr>
<tr>
    <td><a href="#cancel_data_deletion_request"><CopyableCode code="cancel_data_deletion_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Cancels a data deletion request by providing its ID.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the deletion request.</td>
</tr>
<tr id="parameter-product">
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Name of the product to be deleted. Only `logs` is supported.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-next_page">
    <td><CopyableCode code="next_page" /></td>
    <td><code>string</code></td>
    <td>The next page of the previous search. If the next_page parameter is included, the rest of the query elements are ignored. (example: cGFnZTI=)</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sets the page size of the search. (example: 50)</td>
</tr>
<tr id="parameter-product">
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Retrieve only the requests related to the given product. (example: logs)</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Retrieve only the requests that matches the given query. (example: service:xyz host:abc)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Retrieve only the requests with the given status. (example: pending)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_deletion_requests"
    values={[
        { label: 'get_data_deletion_requests', value: 'get_data_deletion_requests' }
    ]}
>
<TabItem value="get_data_deletion_requests">

Gets a list of data deletion requests based on several filter parameters.

```sql
SELECT
id,
attributes,
type
FROM datadog.organization.data_deletion_requests
WHERE next_page = '{{ next_page }}'
AND product = '{{ product }}'
AND query = '{{ query }}'
AND status = '{{ status }}'
AND page_size = '{{ page_size }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_deletion_request"
    values={[
        { label: 'create_data_deletion_request', value: 'create_data_deletion_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_deletion_request">

Creates a data deletion request by providing a query and a timeframe targeting the proper data.

```sql
INSERT INTO datadog.organization.data_deletion_requests (
data,
product
)
SELECT 
'{{ data }}' /* required */,
'{{ product }}'
RETURNING
data,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_deletion_requests
  props:
    - name: product
      value: "{{ product }}"
      description: Required parameter for the data_deletion_requests resource.
    - name: data
      description: |
        Data needed to create a data deletion request.
      value:
        attributes:
          displayed_total: {{ displayed_total }}
          from: {{ from }}
          indexes:
            - "{{ indexes }}"
          query: "{{ query }}"
          to: {{ to }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel_data_deletion_request"
    values={[
        { label: 'cancel_data_deletion_request', value: 'cancel_data_deletion_request' }
    ]}
>
<TabItem value="cancel_data_deletion_request">

Cancels a data deletion request by providing its ID.

```sql
EXEC datadog.organization.data_deletion_requests.cancel_data_deletion_request 
@id='{{ id }}' --required 
;
```
</TabItem>
</Tabs>
