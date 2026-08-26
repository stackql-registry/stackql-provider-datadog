--- 
title: host_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - host_tags
  - infrastructure
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

Creates, updates, deletes, gets or lists a <code>host_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="host_tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.host_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_host_tags"
    values={[
        { label: 'get_host_tags', value: 'get_host_tags' },
        { label: 'list_host_tags', value: 'list_host_tags' }
    ]}
>
<TabItem value="get_host_tags">

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
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>Your host name. (example: test.host)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with a host.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_host_tags">

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
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A mapping of tags to host names</td>
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
    <td><a href="#get_host_tags"><CopyableCode code="get_host_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-host_name"><code>host_name</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>Return the list of tags that apply to a given host.</td>
</tr>
<tr>
    <td><a href="#list_host_tags"><CopyableCode code="list_host_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>Returns a mapping of tags to hosts. For each tag, the response returns a list of host names that contain this tag. There is a restriction of 10k total host names from the org that can be attached to tags and returned.</td>
</tr>
<tr>
    <td><a href="#create_host_tags"><CopyableCode code="create_host_tags" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-host_name"><code>host_name</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>This endpoint allows you to add new tags to a host,&lt;br /&gt;optionally specifying what source these tags come from. If tags already exist, appends new tags to the tag list. If no source is specified, defaults to "user".</td>
</tr>
<tr>
    <td><a href="#update_host_tags"><CopyableCode code="update_host_tags" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-host_name"><code>host_name</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>This endpoint allows you to update/replace all tags in&lt;br /&gt;an integration source with those supplied in the request.</td>
</tr>
<tr>
    <td><a href="#delete_host_tags"><CopyableCode code="delete_host_tags" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-host_name"><code>host_name</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a></td>
    <td>This endpoint allows you to remove all tags&lt;br /&gt;for a single host. If no source is specified, only deletes from the source "User".</td>
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
<tr id="parameter-host_name">
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Specified host name to delete tags</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source of the tags to be deleted. &#91;Complete list of source attribute values&#93;(https:​//docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_host_tags"
    values={[
        { label: 'get_host_tags', value: 'get_host_tags' },
        { label: 'list_host_tags', value: 'list_host_tags' }
    ]}
>
<TabItem value="get_host_tags">

Return the list of tags that apply to a given host.

```sql
SELECT
host,
tags
FROM datadog.infrastructure.host_tags
WHERE host_name = '{{ host_name }}' -- required
AND source = '{{ source }}'
;
```
</TabItem>
<TabItem value="list_host_tags">

Returns a mapping of tags to hosts. For each tag, the response returns a list of host names that contain this tag. There is a restriction of 10k total host names from the org that can be attached to tags and returned.

```sql
SELECT
tags
FROM datadog.infrastructure.host_tags
WHERE source = '{{ source }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_host_tags"
    values={[
        { label: 'create_host_tags', value: 'create_host_tags' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_host_tags">

This endpoint allows you to add new tags to a host,&lt;br /&gt;optionally specifying what source these tags come from. If tags already exist, appends new tags to the tag list. If no source is specified, defaults to "user".

```sql
INSERT INTO datadog.infrastructure.host_tags (
host,
tags,
host_name,
source
)
SELECT 
'{{ host }}',
'{{ tags }}',
'{{ host_name }}',
'{{ source }}'
RETURNING
host,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: host_tags
  props:
    - name: host_name
      value: "{{ host_name }}"
      description: Required parameter for the host_tags resource.
    - name: host
      value: "{{ host }}"
      description: |
        Your host name.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        A list of tags associated with a host.
    - name: source
      value: "{{ source }}"
      description: Source to add tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags. If no source is specified, defaults to "user". (example: chef)
      description: Source to add tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags. If no source is specified, defaults to "user". (example: chef)
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_host_tags"
    values={[
        { label: 'update_host_tags', value: 'update_host_tags' }
    ]}
>
<TabItem value="update_host_tags">

This endpoint allows you to update/replace all tags in&lt;br /&gt;an integration source with those supplied in the request.

```sql
REPLACE datadog.infrastructure.host_tags
SET 
host = '{{ host }}',
tags = '{{ tags }}'
WHERE 
host_name = '{{ host_name }}' --required
AND source = '{{ source}}'
RETURNING
host,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_host_tags"
    values={[
        { label: 'delete_host_tags', value: 'delete_host_tags' }
    ]}
>
<TabItem value="delete_host_tags">

This endpoint allows you to remove all tags&lt;br /&gt;for a single host. If no source is specified, only deletes from the source "User".

```sql
DELETE FROM datadog.infrastructure.host_tags
WHERE host_name = '{{ host_name }}' --required
AND source = '{{ source }}'
;
```
</TabItem>
</Tabs>
