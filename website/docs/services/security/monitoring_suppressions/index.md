--- 
title: monitoring_suppressions
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_suppressions
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

Creates, updates, deletes, gets or lists a <code>monitoring_suppressions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_suppressions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_suppressions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_monitoring_suppression"
    values={[
        { label: 'get_security_monitoring_suppression', value: 'get_security_monitoring_suppression' },
        { label: 'list_security_monitoring_suppressions', value: 'list_security_monitoring_suppressions' }
    ]}
>
<TabItem value="get_security_monitoring_suppression">

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
    <td>The ID of the suppression rule. (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the suppression rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `suppressions`. (suppressions) (default: suppressions, example: suppressions)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_monitoring_suppressions">

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
    <td>The ID of the suppression rule. (example: 3dd-0uc-h1s)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the suppression rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `suppressions`. (suppressions) (default: suppressions, example: suppressions)</td>
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
    <td><a href="#get_security_monitoring_suppression"><CopyableCode code="get_security_monitoring_suppression" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-suppression_id"><code>suppression_id</code></a></td>
    <td></td>
    <td>Get the details of a specific suppression rule.</td>
</tr>
<tr>
    <td><a href="#list_security_monitoring_suppressions"><CopyableCode code="list_security_monitoring_suppressions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-query"><code>query</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a></td>
    <td>Get the list of all suppression rules.</td>
</tr>
<tr>
    <td><a href="#create_security_monitoring_suppression"><CopyableCode code="create_security_monitoring_suppression" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new suppression rule.</td>
</tr>
<tr>
    <td><a href="#update_security_monitoring_suppression"><CopyableCode code="update_security_monitoring_suppression" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-suppression_id"><code>suppression_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a specific suppression rule.</td>
</tr>
<tr>
    <td><a href="#delete_security_monitoring_suppression"><CopyableCode code="delete_security_monitoring_suppression" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-suppression_id"><code>suppression_id</code></a></td>
    <td></td>
    <td>Delete a specific suppression rule.</td>
</tr>
<tr>
    <td><a href="#validate_security_monitoring_suppression"><CopyableCode code="validate_security_monitoring_suppression" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Validate a suppression rule.</td>
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
<tr id="parameter-suppression_id">
    <td><CopyableCode code="suppression_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the suppression rule</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size for a given page. Use `-1` to return all items.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>Query string.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Attribute used to sort the list of suppression rules. Prefix with `-` to sort in descending order.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_monitoring_suppression"
    values={[
        { label: 'get_security_monitoring_suppression', value: 'get_security_monitoring_suppression' },
        { label: 'list_security_monitoring_suppressions', value: 'list_security_monitoring_suppressions' }
    ]}
>
<TabItem value="get_security_monitoring_suppression">

Get the details of a specific suppression rule.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_suppressions
WHERE suppression_id = '{{ suppression_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_monitoring_suppressions">

Get the list of all suppression rules.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.monitoring_suppressions
WHERE query = '{{ query }}'
AND sort = '{{ sort }}'
AND page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_monitoring_suppression"
    values={[
        { label: 'create_security_monitoring_suppression', value: 'create_security_monitoring_suppression' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_monitoring_suppression">

Create a new suppression rule.

```sql
INSERT INTO datadog.security.monitoring_suppressions (
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
- name: monitoring_suppressions
  props:
    - name: data
      description: |
        Object for a single suppression rule.
      value:
        attributes:
          data_exclusion_query: "{{ data_exclusion_query }}"
          description: "{{ description }}"
          enabled: {{ enabled }}
          expiration_date: {{ expiration_date }}
          name: "{{ name }}"
          rule_query: "{{ rule_query }}"
          start_date: {{ start_date }}
          suppression_query: "{{ suppression_query }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_monitoring_suppression"
    values={[
        { label: 'update_security_monitoring_suppression', value: 'update_security_monitoring_suppression' }
    ]}
>
<TabItem value="update_security_monitoring_suppression">

Update a specific suppression rule.

```sql
UPDATE datadog.security.monitoring_suppressions
SET 
data = '{{ data }}'
WHERE 
suppression_id = '{{ suppression_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_monitoring_suppression"
    values={[
        { label: 'delete_security_monitoring_suppression', value: 'delete_security_monitoring_suppression' }
    ]}
>
<TabItem value="delete_security_monitoring_suppression">

Delete a specific suppression rule.

```sql
DELETE FROM datadog.security.monitoring_suppressions
WHERE suppression_id = '{{ suppression_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="validate_security_monitoring_suppression"
    values={[
        { label: 'validate_security_monitoring_suppression', value: 'validate_security_monitoring_suppression' }
    ]}
>
<TabItem value="validate_security_monitoring_suppression">

Validate a suppression rule.

```sql
EXEC datadog.security.monitoring_suppressions.validate_security_monitoring_suppression 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
</Tabs>
