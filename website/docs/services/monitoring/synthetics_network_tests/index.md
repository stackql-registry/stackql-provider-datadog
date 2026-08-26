--- 
title: synthetics_network_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_network_tests
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

Creates, updates, deletes, gets or lists a <code>synthetics_network_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_network_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_network_tests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_synthetics_network_test"
    values={[
        { label: 'get_synthetics_network_test', value: 'get_synthetics_network_test' }
    ]}
>
<TabItem value="get_synthetics_network_test">

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
    <td>The public ID of the Network Path test. (example: abc-def-123)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Object containing details about a Network Path test.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of response, `network_test`. (network_test) (default: network_test, example: network_test)</td>
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
    <td><a href="#get_synthetics_network_test"><CopyableCode code="get_synthetics_network_test" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_synthetics_network_test"><CopyableCode code="create_synthetics_network_test" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#update_synthetics_network_test"><CopyableCode code="update_synthetics_network_test" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-public_id">
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The public ID of the Network Path test to edit.</td>
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
    defaultValue="get_synthetics_network_test"
    values={[
        { label: 'get_synthetics_network_test', value: 'get_synthetics_network_test' }
    ]}
>
<TabItem value="get_synthetics_network_test">

OK

```sql
SELECT
id,
attributes,
type
FROM datadog.monitoring.synthetics_network_tests
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_synthetics_network_test"
    values={[
        { label: 'create_synthetics_network_test', value: 'create_synthetics_network_test' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_synthetics_network_test">

No description available.

```sql
INSERT INTO datadog.monitoring.synthetics_network_tests (
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
- name: synthetics_network_tests
  props:
    - name: data
      description: |
        Data object for creating or editing a Network Path test.
      value:
        attributes:
          config:
            assertions:
              - operator: "{{ operator }}"
                property: "{{ property }}"
                target: {{ target }}
                type: "{{ type }}"
            request:
              destination_service: "{{ destination_service }}"
              e2e_queries: {{ e2e_queries }}
              host: "{{ host }}"
              max_ttl: {{ max_ttl }}
              port: {{ port }}
              source_service: "{{ source_service }}"
              tcp_method: "{{ tcp_method }}"
              timeout: {{ timeout }}
              traceroute_queries: {{ traceroute_queries }}
          locations:
            - "{{ locations }}"
          message: "{{ message }}"
          monitor_id: {{ monitor_id }}
          name: "{{ name }}"
          options:
            min_failure_duration: {{ min_failure_duration }}
            min_location_failed: {{ min_location_failed }}
            monitor_name: "{{ monitor_name }}"
            monitor_options:
              escalation_message: "{{ escalation_message }}"
              notification_preset_name: "{{ notification_preset_name }}"
              renotify_interval: {{ renotify_interval }}
              renotify_occurrences: {{ renotify_occurrences }}
            monitor_priority: {{ monitor_priority }}
            restricted_roles:
              - "{{ restricted_roles }}"
            retry:
              count: {{ count }}
              interval: {{ interval }}
            scheduling:
              timeframes:
                - day: {{ day }}
                  from: "{{ from }}"
                  to: "{{ to }}"
              timezone: "{{ timezone }}"
            tick_every: {{ tick_every }}
          public_id: "{{ public_id }}"
          status: "{{ status }}"
          subtype: "{{ subtype }}"
          tags:
            - "{{ tags }}"
          type: "{{ type }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_synthetics_network_test"
    values={[
        { label: 'update_synthetics_network_test', value: 'update_synthetics_network_test' }
    ]}
>
<TabItem value="update_synthetics_network_test">

No description available.

```sql
REPLACE datadog.monitoring.synthetics_network_tests
SET 
data = '{{ data }}'
WHERE 
public_id = '{{ public_id }}' --required
AND data = '{{ data }}' --required
RETURNING
data;
```
</TabItem>
</Tabs>
