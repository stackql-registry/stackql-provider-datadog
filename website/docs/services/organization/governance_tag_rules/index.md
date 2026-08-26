--- 
title: governance_tag_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - governance_tag_rules
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

Creates, updates, deletes, gets or lists a <code>governance_tag_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="governance_tag_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.governance_tag_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tag_rule"
    values={[
        { label: 'get_tag_rule', value: 'get_tag_rule' },
        { label: 'list_tag_rules', value: 'list_tag_rules' }
    ]}
>
<TabItem value="get_tag_rule">

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
    <td>The unique identifier of the tag rule. (example: 123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a tag rule resource.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Related resources for a tag rule. Only present when the corresponding `include` query parameter is supplied.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for a tag rule. (tag_rule) (example: tag_rule)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tag_rules">

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
    <td>The unique identifier of the tag rule. (example: 123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of a tag rule resource.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Related resources for a tag rule. Only present when the corresponding `include` query parameter is supplied.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>JSON:API resource type for a tag rule. (tag_rule) (example: tag_rule)</td>
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
    <td><a href="#get_tag_rule"><CopyableCode code="get_tag_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a>, <a href="#parameter-ts_start"><code>ts_start</code></a>, <a href="#parameter-ts_end"><code>ts_end</code></a></td>
    <td>Retrieve a single tag rule by ID. Optionally include the rule's current compliance&lt;br /&gt;score via the `include=score` query parameter. Rules belonging to other organizations&lt;br /&gt;cannot be retrieved.</td>
</tr>
<tr>
    <td><a href="#list_tag_rules"><CopyableCode code="list_tag_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-include_disabled"><code>include_disabled</code></a>, <a href="#parameter-include_deleted"><code>include_deleted</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-filter[source]"><code>filter[source]</code></a>, <a href="#parameter-ts_start"><code>ts_start</code></a>, <a href="#parameter-ts_end"><code>ts_end</code></a></td>
    <td>Retrieve all tag rules for the organization. Optionally include disabled or deleted&lt;br /&gt;rules, filter by telemetry source, and include each rule's current compliance score&lt;br /&gt;via the `include=score` query parameter.</td>
</tr>
<tr>
    <td><a href="#create_tag_rule"><CopyableCode code="create_tag_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new tag rule for the organization. The caller's organization is derived from&lt;br /&gt;the authenticated user; cross-organization creation is not supported. Fields such as&lt;br /&gt;`rule_id`, `version`, and the timestamp/audit fields are assigned by the server.</td>
</tr>
<tr>
    <td><a href="#update_tag_rule"><CopyableCode code="update_tag_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update one or more attributes of an existing tag rule. Only the fields supplied in the&lt;br /&gt;request body are modified; omitted fields retain their current values. The rule's&lt;br /&gt;`source` cannot be changed after creation.</td>
</tr>
<tr>
    <td><a href="#delete_tag_rule"><CopyableCode code="delete_tag_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td><a href="#parameter-hard_delete"><code>hard_delete</code></a></td>
    <td>Delete a tag rule. By default the rule is soft-deleted so it can be recovered later&lt;br /&gt;and so that historical score data remains queryable. Pass `hard_delete=true` to remove&lt;br /&gt;the rule permanently.</td>
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
    <td>The unique identifier of the tag rule to delete. (example: 123)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[source]">
    <td><CopyableCode code="filter[source]" /></td>
    <td><code>string</code></td>
    <td>Restrict the result set to rules whose source matches the given value.</td>
</tr>
<tr id="parameter-hard_delete">
    <td><CopyableCode code="hard_delete" /></td>
    <td><code>boolean</code></td>
    <td>Whether to permanently delete the rule instead of performing a soft delete. Defaults to `false`. (example: false)</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of related resources to include alongside each rule in the response. Currently the only supported value is `score`.</td>
</tr>
<tr id="parameter-include_deleted">
    <td><CopyableCode code="include_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include rules that have been soft-deleted. Defaults to `false`. (example: false)</td>
</tr>
<tr id="parameter-include_disabled">
    <td><CopyableCode code="include_disabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include rules that are currently disabled. Defaults to `false`. (example: false)</td>
</tr>
<tr id="parameter-ts_end">
    <td><CopyableCode code="ts_end" /></td>
    <td><code>integer (int64)</code></td>
    <td>End of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Must be in the past and greater than `ts_start`. (example: 1779401466097)</td>
</tr>
<tr id="parameter-ts_start">
    <td><CopyableCode code="ts_start" /></td>
    <td><code>integer (int64)</code></td>
    <td>Start of the time window used for compliance score computation, as a Unix timestamp in milliseconds. Defaults to a recent window appropriate for the source. (example: 1779315066097)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tag_rule"
    values={[
        { label: 'get_tag_rule', value: 'get_tag_rule' },
        { label: 'list_tag_rules', value: 'list_tag_rules' }
    ]}
>
<TabItem value="get_tag_rule">

Retrieve a single tag rule by ID. Optionally include the rule's current compliance&lt;br /&gt;score via the `include=score` query parameter. Rules belonging to other organizations&lt;br /&gt;cannot be retrieved.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.governance_tag_rules
WHERE rule_id = '{{ rule_id }}' -- required
AND include = '{{ include }}'
AND ts_start = '{{ ts_start }}'
AND ts_end = '{{ ts_end }}'
;
```
</TabItem>
<TabItem value="list_tag_rules">

Retrieve all tag rules for the organization. Optionally include disabled or deleted&lt;br /&gt;rules, filter by telemetry source, and include each rule's current compliance score&lt;br /&gt;via the `include=score` query parameter.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.organization.governance_tag_rules
WHERE include_disabled = '{{ include_disabled }}'
AND include_deleted = '{{ include_deleted }}'
AND include = '{{ include }}'
AND filter[source] = '{{ filter[source] }}'
AND ts_start = '{{ ts_start }}'
AND ts_end = '{{ ts_end }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag_rule"
    values={[
        { label: 'create_tag_rule', value: 'create_tag_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag_rule">

Create a new tag rule for the organization. The caller's organization is derived from&lt;br /&gt;the authenticated user; cross-organization creation is not supported. Fields such as&lt;br /&gt;`rule_id`, `version`, and the timestamp/audit fields are assigned by the server.

```sql
INSERT INTO datadog.organization.governance_tag_rules (
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
- name: governance_tag_rules
  props:
    - name: data
      description: |
        Data object for creating a tag rule.
      value:
        attributes:
          enabled: {{ enabled }}
          name: "{{ name }}"
          negated: {{ negated }}
          required: {{ required }}
          rule_type: "{{ rule_type }}"
          scope: "{{ scope }}"
          source: "{{ source }}"
          tag_key: "{{ tag_key }}"
          tag_value_patterns:
            - "{{ tag_value_patterns }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tag_rule"
    values={[
        { label: 'update_tag_rule', value: 'update_tag_rule' }
    ]}
>
<TabItem value="update_tag_rule">

Update one or more attributes of an existing tag rule. Only the fields supplied in the&lt;br /&gt;request body are modified; omitted fields retain their current values. The rule's&lt;br /&gt;`source` cannot be changed after creation.

```sql
UPDATE datadog.organization.governance_tag_rules
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
    defaultValue="delete_tag_rule"
    values={[
        { label: 'delete_tag_rule', value: 'delete_tag_rule' }
    ]}
>
<TabItem value="delete_tag_rule">

Delete a tag rule. By default the rule is soft-deleted so it can be recovered later&lt;br /&gt;and so that historical score data remains queryable. Pass `hard_delete=true` to remove&lt;br /&gt;the rule permanently.

```sql
DELETE FROM datadog.organization.governance_tag_rules
WHERE rule_id = '{{ rule_id }}' --required
AND hard_delete = '{{ hard_delete }}'
;
```
</TabItem>
</Tabs>
