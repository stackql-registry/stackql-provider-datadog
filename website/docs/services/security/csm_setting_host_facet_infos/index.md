--- 
title: csm_setting_host_facet_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - csm_setting_host_facet_infos
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

Creates, updates, deletes, gets or lists a <code>csm_setting_host_facet_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="csm_setting_host_facet_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.csm_setting_host_facet_infos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_csmunified_host_facet_info"
    values={[
        { label: 'get_csmunified_host_facet_info', value: 'get_csmunified_host_facet_info' }
    ]}
>
<TabItem value="get_csmunified_host_facet_info">

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
    <td>The identifier of the facet. (example: cloud_provider)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a facet info response, containing the value distribution for the requested facet.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata for the facet info response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for facet info resources. The value should always be `facet_info`. (facet_info) (default: facet_info, example: facet_info)</td>
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
    <td><a href="#get_csmunified_host_facet_info"><CopyableCode code="get_csmunified_host_facet_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-facet"><code>facet</code></a></td>
    <td><a href="#parameter-search"><code>search</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td>Get the value distribution for a specific unified host facet, with optional search and filtering.</td>
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
<tr id="parameter-facet">
    <td><CopyableCode code="facet" /></td>
    <td><code>string</code></td>
    <td>The facet identifier to retrieve value distribution for. Valid values include `resource_name`, `account_id`, `resource_type`, `cloud_provider`, `agentless_vulnerability_scanning`, `agentless_posture_management`, `hostname`, `agent_version`, `os`, `cluster_name`, `agent_posture_management`, `agent_cws_enabled`, `agent_csm_vm_hosts_enabled`, and `agent_csm_vm_containers_enabled`.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>A filter query to scope the facet value counts.</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>A search string to filter the facet values.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_csmunified_host_facet_info"
    values={[
        { label: 'get_csmunified_host_facet_info', value: 'get_csmunified_host_facet_info' }
    ]}
>
<TabItem value="get_csmunified_host_facet_info">

Get the value distribution for a specific unified host facet, with optional search and filtering.

```sql
SELECT
id,
attributes,
meta,
type
FROM datadog.security.csm_setting_host_facet_infos
WHERE facet = '{{ facet }}' -- required
AND search = '{{ search }}'
AND query = '{{ query }}'
;
```
</TabItem>
</Tabs>
