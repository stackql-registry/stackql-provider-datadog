--- 
title: statuspages
hide_title: false
hide_table_of_contents: false
keywords:
  - statuspages
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

Creates, updates, deletes, gets or lists a <code>statuspages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statuspages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.service_management.statuspages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_status_page"
    values={[
        { label: 'get_status_page', value: 'get_status_page' },
        { label: 'list_status_pages', value: 'list_status_pages' }
    ]}
>
<TabItem value="get_status_page">

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
    <td>The ID of the status page.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a status page.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a status page.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Status pages resource type. (status_pages) (default: status_pages, example: status_pages)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_status_pages">

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
    <td>The ID of the status page.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a status page.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The relationships of a status page.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Status pages resource type. (status_pages) (default: status_pages, example: status_pages)</td>
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
    <td><a href="#get_status_page"><CopyableCode code="get_status_page" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Retrieves a specific status page by its ID.</td>
</tr>
<tr>
    <td><a href="#list_status_pages"><CopyableCode code="list_status_pages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-filter[domain_prefix]"><code>filter[domain_prefix]</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Lists all status pages for the organization.</td>
</tr>
<tr>
    <td><a href="#create_status_page"><CopyableCode code="create_status_page" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Creates a new status page in an unpublished state. Use the dedicated &#91;publish&#93;(#publish-status-page) status page endpoint to publish the page after creation.</td>
</tr>
<tr>
    <td><a href="#update_status_page"><CopyableCode code="update_status_page" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td><a href="#parameter-delete_subscribers"><code>delete_subscribers</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Updates an existing status page's attributes. To publish and unpublish status pages, use the dedicated &#91;publish&#93;(#publish-status-page) and &#91;unpublish&#93;(#unpublish-status-page) status page endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_status_page"><CopyableCode code="delete_status_page" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td></td>
    <td>Deletes a status page by its ID.</td>
</tr>
<tr>
    <td><a href="#publish_status_page"><CopyableCode code="publish_status_page" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td></td>
    <td>Publishes a status page. For pages of type `public`, makes the status page available on the public internet and requires the `status_pages_public_page_publish` permission. For pages of type `internal`, makes the status page available under the `status-pages/$domain_prefix/view` route within the Datadog organization and requires the `status_pages_internal_page_publish` permission.</td>
</tr>
<tr>
    <td><a href="#unpublish_status_page"><CopyableCode code="unpublish_status_page" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-page_id"><code>page_id</code></a></td>
    <td></td>
    <td>Unpublishes a status page. For pages of type `public`, removes the status page from the public internet and requires the `status_pages_public_page_publish` permission. For pages of type `internal`, removes the `status-pages/$domain_prefix/view` route from the Datadog organization and requires the `status_pages_internal_page_publish` permission.</td>
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
<tr id="parameter-page_id">
    <td><CopyableCode code="page_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the status page.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-delete_subscribers">
    <td><CopyableCode code="delete_subscribers" /></td>
    <td><code>boolean</code></td>
    <td>Whether to delete existing subscribers when updating a status page's type.</td>
</tr>
<tr id="parameter-filter[domain_prefix]">
    <td><CopyableCode code="filter[domain_prefix]" /></td>
    <td><code>string</code></td>
    <td>Filter status pages by exact domain prefix match. Returns at most one result.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of status pages to return per page.</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Offset to use as the start of the page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_status_page"
    values={[
        { label: 'get_status_page', value: 'get_status_page' },
        { label: 'list_status_pages', value: 'list_status_pages' }
    ]}
>
<TabItem value="get_status_page">

Retrieves a specific status page by its ID.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspages
WHERE page_id = '{{ page_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="list_status_pages">

Lists all status pages for the organization.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.service_management.statuspages
WHERE page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
AND filter[domain_prefix] = '{{ filter[domain_prefix] }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_status_page"
    values={[
        { label: 'create_status_page', value: 'create_status_page' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_status_page">

Creates a new status page in an unpublished state. Use the dedicated [publish](#publish-status-page) status page endpoint to publish the page after creation.

```sql
INSERT INTO datadog.service_management.statuspages (
data,
include
)
SELECT 
'{{ data }}',
'{{ include }}'
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: statuspages
  props:
    - name: data
      description: |
        The data object for creating a status page.
      value:
        attributes:
          company_logo: "{{ company_logo }}"
          components:
            - components: "{{ components }}"
              id: "{{ id }}"
              name: "{{ name }}"
              position: {{ position }}
              status: "{{ status }}"
              type: "{{ type }}"
          domain_prefix: "{{ domain_prefix }}"
          email_header_image: "{{ email_header_image }}"
          favicon: "{{ favicon }}"
          name: "{{ name }}"
          slack_app_icon: "{{ slack_app_icon }}"
          slack_subscriptions_enabled: {{ slack_subscriptions_enabled }}
          subscriptions_enabled: {{ subscriptions_enabled }}
          type: "{{ type }}"
          visualization_type: "{{ visualization_type }}"
        type: "{{ type }}"
    - name: include
      value: "{{ include }}"
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
      description: Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_status_page"
    values={[
        { label: 'update_status_page', value: 'update_status_page' }
    ]}
>
<TabItem value="update_status_page">

Updates an existing status page's attributes. To publish and unpublish status pages, use the dedicated [publish](#publish-status-page) and [unpublish](#unpublish-status-page) status page endpoints.

```sql
UPDATE datadog.service_management.statuspages
SET 
data = '{{ data }}'
WHERE 
page_id = '{{ page_id }}' --required
AND delete_subscribers = {{ delete_subscribers}}
AND include = '{{ include}}'
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_status_page"
    values={[
        { label: 'delete_status_page', value: 'delete_status_page' }
    ]}
>
<TabItem value="delete_status_page">

Deletes a status page by its ID.

```sql
DELETE FROM datadog.service_management.statuspages
WHERE page_id = '{{ page_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="publish_status_page"
    values={[
        { label: 'publish_status_page', value: 'publish_status_page' },
        { label: 'unpublish_status_page', value: 'unpublish_status_page' }
    ]}
>
<TabItem value="publish_status_page">

Publishes a status page. For pages of type `public`, makes the status page available on the public internet and requires the `status_pages_public_page_publish` permission. For pages of type `internal`, makes the status page available under the `status-pages/$domain_prefix/view` route within the Datadog organization and requires the `status_pages_internal_page_publish` permission.

```sql
EXEC datadog.service_management.statuspages.publish_status_page 
@page_id='{{ page_id }}' --required 
;
```
</TabItem>
<TabItem value="unpublish_status_page">

Unpublishes a status page. For pages of type `public`, removes the status page from the public internet and requires the `status_pages_public_page_publish` permission. For pages of type `internal`, removes the `status-pages/$domain_prefix/view` route from the Datadog organization and requires the `status_pages_internal_page_publish` permission.

```sql
EXEC datadog.service_management.statuspages.unpublish_status_page 
@page_id='{{ page_id }}' --required 
;
```
</TabItem>
</Tabs>
