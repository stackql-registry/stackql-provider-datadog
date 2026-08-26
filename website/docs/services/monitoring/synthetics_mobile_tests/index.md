--- 
title: synthetics_mobile_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_mobile_tests
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

Creates, updates, deletes, gets or lists a <code>synthetics_mobile_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_mobile_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_mobile_tests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mobile_test"
    values={[
        { label: 'get_mobile_test', value: 'get_mobile_test' }
    ]}
>
<TabItem value="get_mobile_test">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the test. (example: Example test name)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The associated monitor ID.</td>
</tr>
<tr>
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The public ID of the test. (example: 123-abc-456)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Configuration object for a Synthetic mobile test.</td>
</tr>
<tr>
    <td><CopyableCode code="device_ids" /></td>
    <td><code>array</code></td>
    <td>Array with the different device IDs used to run the test.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Notification message associated with the test. (example: Notification message)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Object describing the extra options for a Synthetic test.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. (live, paused) (example: live)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Array of steps for the test.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Array of tags attached to the test.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the Synthetic test, `mobile`. (mobile) (default: mobile, example: mobile)</td>
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
    <td><a href="#get_mobile_test"><CopyableCode code="get_mobile_test" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Get the detailed configuration associated with&lt;br /&gt;a Synthetic mobile test.</td>
</tr>
<tr>
    <td><a href="#create_synthetics_mobile_test"><CopyableCode code="create_synthetics_mobile_test" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-config"><code>config</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Create a Synthetic mobile test.</td>
</tr>
<tr>
    <td><a href="#update_mobile_test"><CopyableCode code="update_mobile_test" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-config"><code>config</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Edit the configuration of a Synthetic mobile test.</td>
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
    <td>The public ID of the test to get details from.</td>
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
    defaultValue="get_mobile_test"
    values={[
        { label: 'get_mobile_test', value: 'get_mobile_test' }
    ]}
>
<TabItem value="get_mobile_test">

Get the detailed configuration associated with&lt;br /&gt;a Synthetic mobile test.

```sql
SELECT
name,
monitor_id,
public_id,
config,
device_ids,
message,
options,
status,
steps,
tags,
type
FROM datadog.monitoring.synthetics_mobile_tests
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_synthetics_mobile_test"
    values={[
        { label: 'create_synthetics_mobile_test', value: 'create_synthetics_mobile_test' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_synthetics_mobile_test">

Create a Synthetic mobile test.

```sql
INSERT INTO datadog.monitoring.synthetics_mobile_tests (
config,
device_ids,
message,
name,
options,
status,
steps,
tags,
type
)
SELECT 
'{{ config }}' /* required */,
'{{ device_ids }}',
'{{ message }}' /* required */,
'{{ name }}' /* required */,
'{{ options }}' /* required */,
'{{ status }}',
'{{ steps }}',
'{{ tags }}',
'{{ type }}' /* required */
RETURNING
name,
monitor_id,
public_id,
config,
device_ids,
message,
options,
status,
steps,
tags,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: synthetics_mobile_tests
  props:
    - name: config
      description: |
        Configuration object for a Synthetic mobile test.
      value:
        initialApplicationArguments: "{{ initialApplicationArguments }}"
        variables:
          - example: "{{ example }}"
            id: "{{ id }}"
            name: "{{ name }}"
            pattern: "{{ pattern }}"
            secure: {{ secure }}
            type: "{{ type }}"
    - name: device_ids
      value:
        - "{{ device_ids }}"
      description: |
        Array with the different device IDs used to run the test.
    - name: message
      value: "{{ message }}"
      description: |
        Notification message associated with the test.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the test.
    - name: options
      description: |
        Object describing the extra options for a Synthetic test.
      value:
        allowApplicationCrash: {{ allowApplicationCrash }}
        bindings:
          - principals: "{{ principals }}"
            relation: "{{ relation }}"
        ci:
          executionRule: "{{ executionRule }}"
        defaultStepTimeout: {{ defaultStepTimeout }}
        device_ids:
          - "{{ device_ids }}"
        disableAutoAcceptAlert: {{ disableAutoAcceptAlert }}
        min_failure_duration: {{ min_failure_duration }}
        mobileApplication:
          applicationId: "{{ applicationId }}"
          referenceId: "{{ referenceId }}"
          referenceType: "{{ referenceType }}"
        monitor_name: "{{ monitor_name }}"
        monitor_options:
          escalation_message: "{{ escalation_message }}"
          notification_preset_name: "{{ notification_preset_name }}"
          renotify_interval: {{ renotify_interval }}
          renotify_occurrences: {{ renotify_occurrences }}
        monitor_priority: {{ monitor_priority }}
        noScreenshot: {{ noScreenshot }}
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
        verbosity: {{ verbosity }}
    - name: status
      value: "{{ status }}"
      description: |
        Define whether you want to start (\`live\`) or pause (\`paused\`) a
        Synthetic test.
      valid_values: ['live', 'paused']
    - name: steps
      description: |
        Array of steps for the test.
      value:
        - allowFailure: {{ allowFailure }}
          hasNewStepElement: {{ hasNewStepElement }}
          isCritical: {{ isCritical }}
          name: "{{ name }}"
          noScreenshot: {{ noScreenshot }}
          params:
            check: "{{ check }}"
            delay: {{ delay }}
            direction: "{{ direction }}"
            element:
              context: "{{ context }}"
              contextType: "{{ contextType }}"
              elementDescription: "{{ elementDescription }}"
              multiLocator: "{{ multiLocator }}"
              relativePosition:
                x: {{ x }}
                y: {{ y }}
              textContent: "{{ textContent }}"
              userLocator:
                failTestOnCannotLocate: {{ failTestOnCannotLocate }}
                values:
                  - type: "{{ type }}"
                    value: "{{ value }}"
              viewName: "{{ viewName }}"
            enabled: {{ enabled }}
            maxScrolls: {{ maxScrolls }}
            positions:
              - x: {{ x }}
                y: {{ y }}
            subtestPublicId: "{{ subtestPublicId }}"
            value: "{{ value }}"
            variable:
              example: "{{ example }}"
              name: "{{ name }}"
            withEnter: {{ withEnter }}
            x: {{ x }}
            y: {{ y }}
          publicId: "{{ publicId }}"
          timeout: {{ timeout }}
          type: "{{ type }}"
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        Array of tags attached to the test.
    - name: type
      value: "{{ type }}"
      description: |
        Type of the Synthetic test, \`mobile\`.
      valid_values: ['mobile']
      default: mobile
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_mobile_test"
    values={[
        { label: 'update_mobile_test', value: 'update_mobile_test' }
    ]}
>
<TabItem value="update_mobile_test">

Edit the configuration of a Synthetic mobile test.

```sql
REPLACE datadog.monitoring.synthetics_mobile_tests
SET 
config = '{{ config }}',
device_ids = '{{ device_ids }}',
message = '{{ message }}',
name = '{{ name }}',
options = '{{ options }}',
status = '{{ status }}',
steps = '{{ steps }}',
tags = '{{ tags }}',
type = '{{ type }}'
WHERE 
public_id = '{{ public_id }}' --required
AND config = '{{ config }}' --required
AND name = '{{ name }}' --required
AND options = '{{ options }}' --required
AND type = '{{ type }}' --required
AND message = '{{ message }}' --required
RETURNING
name,
monitor_id,
public_id,
config,
device_ids,
message,
options,
status,
steps,
tags,
type;
```
</TabItem>
</Tabs>
