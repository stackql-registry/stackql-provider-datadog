--- 
title: scorecard_campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - scorecard_campaigns
  - apm
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

Creates, updates, deletes, gets or lists a <code>scorecard_campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scorecard_campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.apm.scorecard_campaigns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scorecard_campaign"
    values={[
        { label: 'get_scorecard_campaign', value: 'get_scorecard_campaign' },
        { label: 'list_scorecard_campaigns', value: 'list_scorecard_campaigns' }
    ]}
>
<TabItem value="get_scorecard_campaign">

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
    <td>The unique ID of the campaign. (example: c10ODp0VCrrIpXmz)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Campaign attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for campaigns. (campaign) (example: campaign)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scorecard_campaigns">

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
    <td>The unique ID of the campaign. (example: c10ODp0VCrrIpXmz)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Campaign attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The JSON:API type for campaigns. (campaign) (example: campaign)</td>
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
    <td><a href="#get_scorecard_campaign"><CopyableCode code="get_scorecard_campaign" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-campaign_id"><code>campaign_id</code></a></td>
    <td><a href="#parameter-include"><code>include</code></a>, <a href="#parameter-include_meta"><code>include_meta</code></a></td>
    <td>Fetches a single campaign by ID or key.</td>
</tr>
<tr>
    <td><a href="#list_scorecard_campaigns"><CopyableCode code="list_scorecard_campaigns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-filter[campaign][name]"><code>filter[campaign][name]</code></a>, <a href="#parameter-filter[campaign][status]"><code>filter[campaign][status]</code></a>, <a href="#parameter-filter[campaign][owner]"><code>filter[campaign][owner]</code></a></td>
    <td>Fetches all scorecard campaigns.</td>
</tr>
<tr>
    <td><a href="#create_scorecard_campaign"><CopyableCode code="create_scorecard_campaign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Creates a new scorecard campaign.</td>
</tr>
<tr>
    <td><a href="#update_scorecard_campaign"><CopyableCode code="update_scorecard_campaign" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-campaign_id"><code>campaign_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates an existing campaign.</td>
</tr>
<tr>
    <td><a href="#delete_scorecard_campaign"><CopyableCode code="delete_scorecard_campaign" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-campaign_id"><code>campaign_id</code></a></td>
    <td></td>
    <td>Deletes a single campaign by ID or key.</td>
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
<tr id="parameter-campaign_id">
    <td><CopyableCode code="campaign_id" /></td>
    <td><code>string</code></td>
    <td>Campaign ID or key.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[campaign][name]">
    <td><CopyableCode code="filter[campaign][name]" /></td>
    <td><code>string</code></td>
    <td>Filter campaigns by name (full-text search).</td>
</tr>
<tr id="parameter-filter[campaign][owner]">
    <td><CopyableCode code="filter[campaign][owner]" /></td>
    <td><code>string</code></td>
    <td>Filter campaigns by owner UUID.</td>
</tr>
<tr id="parameter-filter[campaign][status]">
    <td><CopyableCode code="filter[campaign][status]" /></td>
    <td><code>string</code></td>
    <td>Filter campaigns by status.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Include related data (for example, scores).</td>
</tr>
<tr id="parameter-include_meta">
    <td><CopyableCode code="include_meta" /></td>
    <td><code>boolean</code></td>
    <td>Include metadata (entity and rule counts).</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of campaigns to return.</td>
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
    defaultValue="get_scorecard_campaign"
    values={[
        { label: 'get_scorecard_campaign', value: 'get_scorecard_campaign' },
        { label: 'list_scorecard_campaigns', value: 'list_scorecard_campaigns' }
    ]}
>
<TabItem value="get_scorecard_campaign">

Fetches a single campaign by ID or key.

```sql
SELECT
id,
attributes,
type
FROM datadog.apm.scorecard_campaigns
WHERE campaign_id = '{{ campaign_id }}' -- required
AND include = '{{ include }}'
AND include_meta = '{{ include_meta }}'
;
```
</TabItem>
<TabItem value="list_scorecard_campaigns">

Fetches all scorecard campaigns.

```sql
SELECT
id,
attributes,
type
FROM datadog.apm.scorecard_campaigns
WHERE page[limit] = '{{ page[limit] }}'
AND page[offset] = '{{ page[offset] }}'
AND filter[campaign][name] = '{{ filter[campaign][name] }}'
AND filter[campaign][status] = '{{ filter[campaign][status] }}'
AND filter[campaign][owner] = '{{ filter[campaign][owner] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scorecard_campaign"
    values={[
        { label: 'create_scorecard_campaign', value: 'create_scorecard_campaign' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scorecard_campaign">

Creates a new scorecard campaign.

```sql
INSERT INTO datadog.apm.scorecard_campaigns (
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
- name: scorecard_campaigns
  props:
    - name: data
      description: |
        Data for creating a new campaign.
      value:
        attributes:
          description: "{{ description }}"
          due_date: "{{ due_date }}"
          entity_scope: "{{ entity_scope }}"
          guidance: "{{ guidance }}"
          key: "{{ key }}"
          name: "{{ name }}"
          owner_id: "{{ owner_id }}"
          rule_ids:
            - "{{ rule_ids }}"
          start_date: "{{ start_date }}"
          status: "{{ status }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_scorecard_campaign"
    values={[
        { label: 'update_scorecard_campaign', value: 'update_scorecard_campaign' }
    ]}
>
<TabItem value="update_scorecard_campaign">

Updates an existing campaign.

```sql
REPLACE datadog.apm.scorecard_campaigns
SET 
data = '{{ data }}'
WHERE 
campaign_id = '{{ campaign_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scorecard_campaign"
    values={[
        { label: 'delete_scorecard_campaign', value: 'delete_scorecard_campaign' }
    ]}
>
<TabItem value="delete_scorecard_campaign">

Deletes a single campaign by ID or key.

```sql
DELETE FROM datadog.apm.scorecard_campaigns
WHERE campaign_id = '{{ campaign_id }}' --required
;
```
</TabItem>
</Tabs>
