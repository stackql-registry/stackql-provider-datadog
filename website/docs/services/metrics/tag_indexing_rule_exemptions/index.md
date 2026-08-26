--- 
title: tag_indexing_rule_exemptions
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_indexing_rule_exemptions
  - metrics
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

Creates, updates, deletes, gets or lists a <code>tag_indexing_rule_exemptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_indexing_rule_exemptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.metrics.tag_indexing_rule_exemptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tag_indexing_rule_exemption"
    values={[
        { label: 'get_tag_indexing_rule_exemption', value: 'get_tag_indexing_rule_exemption' }
    ]}
>
<TabItem value="get_tag_indexing_rule_exemption">

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
    <td>The metric name, used as the resource ID. (example: dd.test.metric)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a tag indexing rule exemption.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The tag indexing rule exemption resource type. (tag_indexing_rule_exemptions) (default: tag_indexing_rule_exemptions, example: tag_indexing_rule_exemptions)</td>
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
    <td><a href="#get_tag_indexing_rule_exemption"><CopyableCode code="get_tag_indexing_rule_exemption" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Returns why a metric is excluded from tag indexing rules.&lt;br /&gt;Returns 200 with `kind=exemption` when an explicit exemption exists, 200 with&lt;br /&gt;`kind=legacy_tag_configuration` when the metric has a legacy tag configuration acting as an&lt;br /&gt;implicit exclusion, or 404 when neither applies.</td>
</tr>
<tr>
    <td><a href="#create_tag_indexing_rule_exemption"><CopyableCode code="create_tag_indexing_rule_exemption" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Exempt a metric from all tag indexing rules. The response includes the created&lt;br /&gt;exemption resource. Requires the `Manage Tags for Metrics` permission.</td>
</tr>
<tr>
    <td><a href="#delete_tag_indexing_rule_exemption"><CopyableCode code="delete_tag_indexing_rule_exemption" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a></td>
    <td></td>
    <td>Remove a metric's exemption from tag indexing rules. Idempotent: returns 204 whether or not&lt;br /&gt;an exemption existed. Any associated legacy tag configuration record is also removed.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.</td>
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
<tr id="parameter-metric_name">
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric. (example: dist.http.endpoint.request)</td>
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
    defaultValue="get_tag_indexing_rule_exemption"
    values={[
        { label: 'get_tag_indexing_rule_exemption', value: 'get_tag_indexing_rule_exemption' }
    ]}
>
<TabItem value="get_tag_indexing_rule_exemption">

Returns why a metric is excluded from tag indexing rules.&lt;br /&gt;Returns 200 with `kind=exemption` when an explicit exemption exists, 200 with&lt;br /&gt;`kind=legacy_tag_configuration` when the metric has a legacy tag configuration acting as an&lt;br /&gt;implicit exclusion, or 404 when neither applies.

```sql
SELECT
id,
attributes,
type
FROM datadog.metrics.tag_indexing_rule_exemptions
WHERE metric_name = '{{ metric_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag_indexing_rule_exemption"
    values={[
        { label: 'create_tag_indexing_rule_exemption', value: 'create_tag_indexing_rule_exemption' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag_indexing_rule_exemption">

Exempt a metric from all tag indexing rules. The response includes the created&lt;br /&gt;exemption resource. Requires the `Manage Tags for Metrics` permission.

```sql
INSERT INTO datadog.metrics.tag_indexing_rule_exemptions (
data,
metric_name
)
SELECT 
'{{ data }}' /* required */,
'{{ metric_name }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tag_indexing_rule_exemptions
  props:
    - name: metric_name
      value: "{{ metric_name }}"
      description: Required parameter for the tag_indexing_rule_exemptions resource.
    - name: data
      description: |
        Data object for creating a tag indexing rule exemption.
      value:
        attributes:
          reason: "{{ reason }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tag_indexing_rule_exemption"
    values={[
        { label: 'delete_tag_indexing_rule_exemption', value: 'delete_tag_indexing_rule_exemption' }
    ]}
>
<TabItem value="delete_tag_indexing_rule_exemption">

Remove a metric's exemption from tag indexing rules. Idempotent: returns 204 whether or not&lt;br /&gt;an exemption existed. Any associated legacy tag configuration record is also removed.&lt;br /&gt;Requires the `Manage Tags for Metrics` permission.

```sql
DELETE FROM datadog.metrics.tag_indexing_rule_exemptions
WHERE metric_name = '{{ metric_name }}' --required
;
```
</TabItem>
</Tabs>
