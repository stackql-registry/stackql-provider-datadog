--- 
title: synthetics_browser_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_browser_tests
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

Creates, updates, deletes, gets or lists a <code>synthetics_browser_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_browser_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_browser_tests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_browser_test"
    values={[
        { label: 'get_browser_test', value: 'get_browser_test' }
    ]}
>
<TabItem value="get_browser_test">

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
    <td>The public ID of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Configuration object for a Synthetic browser test.</td>
</tr>
<tr>
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>Array of locations used to run the test.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Notification message associated with the test. Message can either be text or an empty string. (example: )</td>
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
    <td>Type of the Synthetic test, `browser`. (browser) (default: browser, example: browser)</td>
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
    <td><a href="#get_browser_test"><CopyableCode code="get_browser_test" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a></td>
    <td></td>
    <td>Get the detailed configuration (including steps) associated with&lt;br /&gt;a Synthetic browser test.</td>
</tr>
<tr>
    <td><a href="#create_synthetics_browser_test"><CopyableCode code="create_synthetics_browser_test" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-config"><code>config</code></a>, <a href="#parameter-locations"><code>locations</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Create a Synthetic browser test.</td>
</tr>
<tr>
    <td><a href="#update_browser_test"><CopyableCode code="update_browser_test" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-config"><code>config</code></a>, <a href="#parameter-locations"><code>locations</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Edit the configuration of a Synthetic browser test.</td>
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
    <td>The public ID of the test to edit.</td>
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
    defaultValue="get_browser_test"
    values={[
        { label: 'get_browser_test', value: 'get_browser_test' }
    ]}
>
<TabItem value="get_browser_test">

Get the detailed configuration (including steps) associated with&lt;br /&gt;a Synthetic browser test.

```sql
SELECT
name,
monitor_id,
public_id,
config,
locations,
message,
options,
status,
steps,
tags,
type
FROM datadog.monitoring.synthetics_browser_tests
WHERE public_id = '{{ public_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_synthetics_browser_test"
    values={[
        { label: 'create_synthetics_browser_test', value: 'create_synthetics_browser_test' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_synthetics_browser_test">

Create a Synthetic browser test.

```sql
INSERT INTO datadog.monitoring.synthetics_browser_tests (
config,
locations,
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
'{{ locations }}' /* required */,
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
locations,
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
- name: synthetics_browser_tests
  props:
    - name: config
      description: |
        Configuration object for a Synthetic browser test.
      value:
        assertions:
          - operator: "{{ operator }}"
            property: "{{ property }}"
            target: {{ target }}
            timingsScope: "{{ timingsScope }}"
            type: "{{ type }}"
            code: "{{ code }}"
        configVariables:
          - example: "{{ example }}"
            id: "{{ id }}"
            name: "{{ name }}"
            pattern: "{{ pattern }}"
            secure: {{ secure }}
            type: "{{ type }}"
        request:
          allow_insecure: {{ allow_insecure }}
          basicAuth:
            password: "{{ password }}"
            type: "{{ type }}"
            username: "{{ username }}"
            accessKey: "{{ accessKey }}"
            region: "{{ region }}"
            secretKey: "{{ secretKey }}"
            serviceName: "{{ serviceName }}"
            sessionToken: "{{ sessionToken }}"
            domain: "{{ domain }}"
            workstation: "{{ workstation }}"
            accessTokenUrl: "{{ accessTokenUrl }}"
            audience: "{{ audience }}"
            clientId: "{{ clientId }}"
            clientSecret: "{{ clientSecret }}"
            resource: "{{ resource }}"
            scope: "{{ scope }}"
            tokenApiAuthentication: "{{ tokenApiAuthentication }}"
            addClaims:
              exp: {{ exp }}
              iat: {{ iat }}
            algorithm: "{{ algorithm }}"
            expiresIn: {{ expiresIn }}
            header: "{{ header }}"
            payload: "{{ payload }}"
            secret: "{{ secret }}"
            tokenPrefix: "{{ tokenPrefix }}"
          body: "{{ body }}"
          bodyType: "{{ bodyType }}"
          callType: "{{ callType }}"
          certificate:
            cert:
              content: "{{ content }}"
              filename: "{{ filename }}"
              updatedAt: "{{ updatedAt }}"
            key:
              content: "{{ content }}"
              filename: "{{ filename }}"
              updatedAt: "{{ updatedAt }}"
          certificateDomains:
            - "{{ certificateDomains }}"
          checkCertificateRevocation: {{ checkCertificateRevocation }}
          compressedJsonDescriptor: "{{ compressedJsonDescriptor }}"
          compressedProtoFile: "{{ compressedProtoFile }}"
          disableAiaIntermediateFetching: {{ disableAiaIntermediateFetching }}
          dnsServer: "{{ dnsServer }}"
          dnsServerPort: {{ dnsServerPort }}
          files:
            - bucketKey: "{{ bucketKey }}"
              content: "{{ content }}"
              encoding: "{{ encoding }}"
              name: "{{ name }}"
              originalFileName: "{{ originalFileName }}"
              size: {{ size }}
              type: "{{ type }}"
          follow_redirects: {{ follow_redirects }}
          form: "{{ form }}"
          headers: "{{ headers }}"
          host: "{{ host }}"
          httpVersion: "{{ httpVersion }}"
          ignore_certificate_validation: {{ ignore_certificate_validation }}
          isMessageBase64Encoded: {{ isMessageBase64Encoded }}
          mcpProtocolVersion: "{{ mcpProtocolVersion }}"
          message: "{{ message }}"
          metadata: "{{ metadata }}"
          method: "{{ method }}"
          noSavingResponseBody: {{ noSavingResponseBody }}
          numberOfPackets: {{ numberOfPackets }}
          persistCookies: {{ persistCookies }}
          port: {{ port }}
          proxy:
            headers: "{{ headers }}"
            url: "{{ url }}"
          query: "{{ query }}"
          servername: "{{ servername }}"
          service: "{{ service }}"
          shouldTrackHops: {{ shouldTrackHops }}
          timeout: {{ timeout }}
          toolArgs: "{{ toolArgs }}"
          toolName: "{{ toolName }}"
          url: "{{ url }}"
        setCookie: "{{ setCookie }}"
        variables:
          - example: "{{ example }}"
            id: "{{ id }}"
            name: "{{ name }}"
            pattern: "{{ pattern }}"
            secure: {{ secure }}
            type: "{{ type }}"
    - name: locations
      value:
        - "{{ locations }}"
      description: |
        Array of locations used to run the test.
    - name: message
      value: "{{ message }}"
      description: |
        Notification message associated with the test. Message can either be text or an empty string.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the test.
    - name: options
      description: |
        Object describing the extra options for a Synthetic test.
      value:
        accept_self_signed: {{ accept_self_signed }}
        allow_insecure: {{ allow_insecure }}
        blockedRequestPatterns:
          - "{{ blockedRequestPatterns }}"
        captureNetworkPayloads: {{ captureNetworkPayloads }}
        checkCertificateRevocation: {{ checkCertificateRevocation }}
        ci:
          executionRule: "{{ executionRule }}"
        device_ids:
          - "{{ device_ids }}"
        disableAiaIntermediateFetching: {{ disableAiaIntermediateFetching }}
        disableCors: {{ disableCors }}
        disableCsp: {{ disableCsp }}
        enableProfiling: {{ enableProfiling }}
        enableSecurityTesting: {{ enableSecurityTesting }}
        follow_redirects: {{ follow_redirects }}
        httpVersion: "{{ httpVersion }}"
        ignoreServerCertificateError: {{ ignoreServerCertificateError }}
        ignore_certificate_validation: {{ ignore_certificate_validation }}
        initialNavigationTimeout: {{ initialNavigationTimeout }}
        min_failure_duration: {{ min_failure_duration }}
        min_location_failed: {{ min_location_failed }}
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
        rumSettings:
          applicationId: "{{ applicationId }}"
          clientTokenId: {{ clientTokenId }}
          isEnabled: {{ isEnabled }}
        scheduling:
          timeframes:
            - day: {{ day }}
              from: "{{ from }}"
              to: "{{ to }}"
          timezone: "{{ timezone }}"
        tick_every: {{ tick_every }}
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
          alwaysExecute: {{ alwaysExecute }}
          exitIfSucceed: {{ exitIfSucceed }}
          isCritical: {{ isCritical }}
          name: "{{ name }}"
          noScreenshot: {{ noScreenshot }}
          params: "{{ params }}"
          public_id: "{{ public_id }}"
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
        Type of the Synthetic test, \`browser\`.
      valid_values: ['browser']
      default: browser
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_browser_test"
    values={[
        { label: 'update_browser_test', value: 'update_browser_test' }
    ]}
>
<TabItem value="update_browser_test">

Edit the configuration of a Synthetic browser test.

```sql
REPLACE datadog.monitoring.synthetics_browser_tests
SET 
config = '{{ config }}',
locations = '{{ locations }}',
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
AND locations = '{{ locations }}' --required
AND name = '{{ name }}' --required
AND options = '{{ options }}' --required
AND type = '{{ type }}' --required
AND message = '{{ message }}' --required
RETURNING
name,
monitor_id,
public_id,
config,
locations,
message,
options,
status,
steps,
tags,
type;
```
</TabItem>
</Tabs>
