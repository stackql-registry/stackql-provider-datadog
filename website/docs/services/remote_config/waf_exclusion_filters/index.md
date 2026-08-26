--- 
title: waf_exclusion_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - waf_exclusion_filters
  - remote_config
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

Creates, updates, deletes, gets or lists a <code>waf_exclusion_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="waf_exclusion_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.remote_config.waf_exclusion_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_security_waf_exclusion_filter"
    values={[
        { label: 'get_application_security_waf_exclusion_filter', value: 'get_application_security_waf_exclusion_filter' },
        { label: 'list_application_security_waf_exclusion_filters', value: 'list_application_security_waf_exclusion_filters' }
    ]}
>
<TabItem value="get_application_security_waf_exclusion_filter">

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
    <td>The identifier of the WAF exclusion filter. (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes describing a WAF exclusion filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the resource. The value should always be `exclusion_filter`. (exclusion_filter) (default: exclusion_filter, example: exclusion_filter)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_security_waf_exclusion_filters">

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
    <td>The identifier of the WAF exclusion filter. (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes describing a WAF exclusion filter.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the resource. The value should always be `exclusion_filter`. (exclusion_filter) (default: exclusion_filter, example: exclusion_filter)</td>
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
    <td><a href="#get_application_security_waf_exclusion_filter"><CopyableCode code="get_application_security_waf_exclusion_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exclusion_filter_id"><code>exclusion_filter_id</code></a></td>
    <td></td>
    <td>Retrieve a specific WAF exclusion filter using its identifier.</td>
</tr>
<tr>
    <td><a href="#list_application_security_waf_exclusion_filters"><CopyableCode code="list_application_security_waf_exclusion_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve a list of WAF exclusion filters.</td>
</tr>
<tr>
    <td><a href="#create_application_security_waf_exclusion_filter"><CopyableCode code="create_application_security_waf_exclusion_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new WAF exclusion filter with the given parameters.&lt;br /&gt;&lt;br /&gt;A request matched by an exclusion filter will be ignored by the Application Security WAF product.&lt;br /&gt;Go to https:​//app.datadoghq.com/security/appsec/passlist to review existing exclusion filters (also called passlist entries).</td>
</tr>
<tr>
    <td><a href="#update_application_security_waf_exclusion_filter"><CopyableCode code="update_application_security_waf_exclusion_filter" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-exclusion_filter_id"><code>exclusion_filter_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific WAF exclusion filter using its identifier.&lt;br /&gt;Returns the exclusion filter object when the request is successful.</td>
</tr>
<tr>
    <td><a href="#delete_application_security_waf_exclusion_filter"><CopyableCode code="delete_application_security_waf_exclusion_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exclusion_filter_id"><code>exclusion_filter_id</code></a></td>
    <td></td>
    <td>Delete a specific WAF exclusion filter using its identifier.</td>
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
<tr id="parameter-exclusion_filter_id">
    <td><CopyableCode code="exclusion_filter_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the WAF exclusion filter. (example: 3b5-v82-ns6)</td>
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
    defaultValue="get_application_security_waf_exclusion_filter"
    values={[
        { label: 'get_application_security_waf_exclusion_filter', value: 'get_application_security_waf_exclusion_filter' },
        { label: 'list_application_security_waf_exclusion_filters', value: 'list_application_security_waf_exclusion_filters' }
    ]}
>
<TabItem value="get_application_security_waf_exclusion_filter">

Retrieve a specific WAF exclusion filter using its identifier.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.waf_exclusion_filters
WHERE exclusion_filter_id = '{{ exclusion_filter_id }}' -- required
;
```
</TabItem>
<TabItem value="list_application_security_waf_exclusion_filters">

Retrieve a list of WAF exclusion filters.

```sql
SELECT
id,
attributes,
type
FROM datadog.remote_config.waf_exclusion_filters
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_security_waf_exclusion_filter"
    values={[
        { label: 'create_application_security_waf_exclusion_filter', value: 'create_application_security_waf_exclusion_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_security_waf_exclusion_filter">

Create a new WAF exclusion filter with the given parameters.&lt;br /&gt;&lt;br /&gt;A request matched by an exclusion filter will be ignored by the Application Security WAF product.&lt;br /&gt;Go to https:​//app.datadoghq.com/security/appsec/passlist to review existing exclusion filters (also called passlist entries).

```sql
INSERT INTO datadog.remote_config.waf_exclusion_filters (
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
- name: waf_exclusion_filters
  props:
    - name: data
      description: |
        Object for creating a single WAF exclusion filter.
      value:
        attributes:
          description: "{{ description }}"
          enabled: {{ enabled }}
          ip_list:
            - "{{ ip_list }}"
          on_match: "{{ on_match }}"
          parameters:
            - "{{ parameters }}"
          path_glob: "{{ path_glob }}"
          rules_target:
            - rule_id: "{{ rule_id }}"
              tags:
                category: "{{ category }}"
                type: "{{ type }}"
          scope:
            - env: "{{ env }}"
              service: "{{ service }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_application_security_waf_exclusion_filter"
    values={[
        { label: 'update_application_security_waf_exclusion_filter', value: 'update_application_security_waf_exclusion_filter' }
    ]}
>
<TabItem value="update_application_security_waf_exclusion_filter">

Update a specific WAF exclusion filter using its identifier.&lt;br /&gt;Returns the exclusion filter object when the request is successful.

```sql
REPLACE datadog.remote_config.waf_exclusion_filters
SET 
data = '{{ data }}'
WHERE 
exclusion_filter_id = '{{ exclusion_filter_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_security_waf_exclusion_filter"
    values={[
        { label: 'delete_application_security_waf_exclusion_filter', value: 'delete_application_security_waf_exclusion_filter' }
    ]}
>
<TabItem value="delete_application_security_waf_exclusion_filter">

Delete a specific WAF exclusion filter using its identifier.

```sql
DELETE FROM datadog.remote_config.waf_exclusion_filters
WHERE exclusion_filter_id = '{{ exclusion_filter_id }}' --required
;
```
</TabItem>
</Tabs>
