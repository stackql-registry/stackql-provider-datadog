--- 
title: notification_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_rules
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

Creates, updates, deletes, gets or lists a <code>notification_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.notification_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor_notification_rule"
    values={[
        { label: 'get_monitor_notification_rule', value: 'get_monitor_notification_rule' },
        { label: 'get_monitor_notification_rules', value: 'get_monitor_notification_rules' }
    ]}
>
<TabItem value="get_monitor_notification_rule">

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
    <td>The ID of the monitor notification rule. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the monitor notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>All relationships associated with monitor notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Monitor notification rule resource type. (monitor-notification-rule) (default: monitor-notification-rule, example: monitor-notification-rule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_monitor_notification_rules">

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
    <td>The ID of the monitor notification rule. (example: 00000000-0000-1234-0000-000000000000)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the monitor notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>All relationships associated with monitor notification rule.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Monitor notification rule resource type. (monitor-notification-rule) (default: monitor-notification-rule, example: monitor-notification-rule)</td>
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
    <td><a href="#get_monitor_notification_rule"><CopyableCode code="get_monitor_notification_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a></td>
    <td>Returns a monitor notification rule by `rule_id`.</td>
</tr>
<tr>
    <td><a href="#get_monitor_notification_rules"><CopyableCode code="get_monitor_notification_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filters"><code>filters</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Returns a list of all monitor notification rules.</td>
</tr>
<tr>
    <td><a href="#create_monitor_notification_rule"><CopyableCode code="create_monitor_notification_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a monitor notification rule.</td>
</tr>
<tr>
    <td><a href="#update_monitor_notification_rule"><CopyableCode code="update_monitor_notification_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates a monitor notification rule by `rule_id`.</td>
</tr>
<tr>
    <td><a href="#delete_monitor_notification_rule"><CopyableCode code="delete_monitor_notification_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Deletes a monitor notification rule by `rule_id`.</td>
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
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>ID of the monitor notification rule to delete.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filters">
    <td><CopyableCode code="filters" /></td>
    <td><code>string</code></td>
    <td>JSON-encoded filter object. Supported keys: * `text`: Free-text query matched against rule name, tags, and recipients. * `tags`: Array of strings. Return rules that have any of these tags. * `recipients`: Array of strings. Return rules that have any of these recipients. (example: &#123;"text":"error","tags":&#91;"env:prod","team:my-team"&#93;,"recipients":&#91;"slack-monitor-app","email@example.com"&#93;&#125;)</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of resource paths for related resources to include in the response. Supported resource path is `created_by`.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int32)</code></td>
    <td>The page to start paginating from. If `page` is not specified, the argument defaults to the first page.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of rules to return per page. If `per_page` is not specified, the argument defaults to 100.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>String for sort order, composed of field and sort order separated by a colon, for example `name:asc`. Supported sort directions: `asc`, `desc`. Supported fields: `name`, `created_at`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor_notification_rule"
    values={[
        { label: 'get_monitor_notification_rule', value: 'get_monitor_notification_rule' },
        { label: 'get_monitor_notification_rules', value: 'get_monitor_notification_rules' }
    ]}
>
<TabItem value="get_monitor_notification_rule">

Returns a monitor notification rule by `rule_id`.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.monitoring.notification_rules
WHERE rule_id = '{{ rule_id }}' -- required
AND include = '{{ include }}'
;
```
</TabItem>
<TabItem value="get_monitor_notification_rules">

Returns a list of all monitor notification rules.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.monitoring.notification_rules
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND sort = '{{ sort }}'
AND filters = '{{ filters }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor_notification_rule"
    values={[
        { label: 'create_monitor_notification_rule', value: 'create_monitor_notification_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor_notification_rule">

Creates a monitor notification rule.

```sql
INSERT INTO datadog.monitoring.notification_rules (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
data,
included
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notification_rules
  props:
    - name: data
      description: |
        Object to create a monitor notification rule.
      value:
        attributes:
          bundle_config:
            duration: {{ duration }}
          conditional_recipients:
            conditions:
              - recipients: "{{ recipients }}"
                scope: "{{ scope }}"
            fallback_recipients:
              - "{{ fallback_recipients }}"
          filter:
            tags:
              - "{{ tags }}"
            scope: "{{ scope }}"
          name: "{{ name }}"
          recipients:
            - "{{ recipients }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitor_notification_rule"
    values={[
        { label: 'update_monitor_notification_rule', value: 'update_monitor_notification_rule' }
    ]}
>
<TabItem value="update_monitor_notification_rule">

Updates a monitor notification rule by `rule_id`.

```sql
UPDATE datadog.monitoring.notification_rules
SET 
data = '{{ data }}'
WHERE 
rule_id = '{{ rule_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
included;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor_notification_rule"
    values={[
        { label: 'delete_monitor_notification_rule', value: 'delete_monitor_notification_rule' }
    ]}
>
<TabItem value="delete_monitor_notification_rule">

Deletes a monitor notification rule by `rule_id`.

```sql
DELETE FROM datadog.monitoring.notification_rules
WHERE rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
</Tabs>
