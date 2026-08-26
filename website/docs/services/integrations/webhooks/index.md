--- 
title: webhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - webhooks
  - integrations
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

Creates, updates, deletes, gets or lists a <code>webhooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.webhooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_webhooks_integration"
    values={[
        { label: 'get_webhooks_integration', value: 'get_webhooks_integration' }
    ]}
>
<TabItem value="get_webhooks_integration">

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
    <td>The name of the webhook. It corresponds with <code>&lt;WEBHOOK_NAME&gt;</code>. Learn more on how to use it in &#91;monitor notifications&#93;(https:​//docs.datadoghq.com/monitors/notify). (example: WEBHOOK_NAME)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_headers" /></td>
    <td><code>string</code></td>
    <td>If `null`, uses no header. If given a JSON payload, these will be headers attached to your webhook.</td>
</tr>
<tr>
    <td><CopyableCode code="encode_as" /></td>
    <td><code>string</code></td>
    <td>Encoding type. Can be given either `json` or `form`. (json, form) (default: json)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>string</code></td>
    <td>If `null`, uses the default payload. If given a JSON payload, the webhook returns the payload specified by the given payload. &#91;Webhooks variable usage&#93;(https:​//docs.datadoghq.com/integrations/webhooks/#usage).</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL of the webhook. (example: https:​//example.com/webhook)</td>
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
    <td><a href="#get_webhooks_integration"><CopyableCode code="get_webhooks_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-webhook_name"><code>webhook_name</code></a></td>
    <td></td>
    <td>Gets the content of the webhook with the name <code>&lt;WEBHOOK_NAME&gt;</code>.</td>
</tr>
<tr>
    <td><a href="#create_webhooks_integration"><CopyableCode code="create_webhooks_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-url"><code>url</code></a></td>
    <td></td>
    <td>Creates an endpoint with the name <code>&lt;WEBHOOK_NAME&gt;</code>.</td>
</tr>
<tr>
    <td><a href="#update_webhooks_integration"><CopyableCode code="update_webhooks_integration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-webhook_name"><code>webhook_name</code></a></td>
    <td></td>
    <td>Updates the endpoint with the name <code>&lt;WEBHOOK_NAME&gt;</code>.</td>
</tr>
<tr>
    <td><a href="#delete_webhooks_integration"><CopyableCode code="delete_webhooks_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-webhook_name"><code>webhook_name</code></a></td>
    <td></td>
    <td>Deletes the endpoint with the name `&lt;WEBHOOK NAME&gt;`. This action cannot be undone.</td>
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
<tr id="parameter-webhook_name">
    <td><CopyableCode code="webhook_name" /></td>
    <td><code>string</code></td>
    <td>The name of the webhook.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_webhooks_integration"
    values={[
        { label: 'get_webhooks_integration', value: 'get_webhooks_integration' }
    ]}
>
<TabItem value="get_webhooks_integration">

Gets the content of the webhook with the name <code>&lt;WEBHOOK_NAME&gt;</code>.

```sql
SELECT
name,
custom_headers,
encode_as,
payload,
url
FROM datadog.integrations.webhooks
WHERE webhook_name = '{{ webhook_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_webhooks_integration"
    values={[
        { label: 'create_webhooks_integration', value: 'create_webhooks_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_webhooks_integration">

Creates an endpoint with the name <code>&lt;WEBHOOK_NAME&gt;</code>.

```sql
INSERT INTO datadog.integrations.webhooks (
custom_headers,
encode_as,
name,
payload,
url
)
SELECT 
'{{ custom_headers }}',
'{{ encode_as }}',
'{{ name }}' /* required */,
'{{ payload }}',
'{{ url }}' /* required */
RETURNING
name,
custom_headers,
encode_as,
payload,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: webhooks
  props:
    - name: custom_headers
      value: "{{ custom_headers }}"
      description: |
        If \`null\`, uses no header.
        If given a JSON payload, these will be headers attached to your webhook.
    - name: encode_as
      value: "{{ encode_as }}"
      description: |
        Encoding type. Can be given either \`json\` or \`form\`.
      valid_values: ['json', 'form']
      default: json
    - name: name
      value: "{{ name }}"
      description: |
        The name of the webhook. It corresponds with \`<WEBHOOK_NAME>\`.
        Learn more on how to use it in
        [monitor notifications](https://docs.datadoghq.com/monitors/notify).
    - name: payload
      value: "{{ payload }}"
      description: |
        If \`null\`, uses the default payload.
        If given a JSON payload, the webhook returns the payload
        specified by the given payload.
        [Webhooks variable usage](https://docs.datadoghq.com/integrations/webhooks/#usage).
    - name: url
      value: "{{ url }}"
      description: |
        URL of the webhook.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_webhooks_integration"
    values={[
        { label: 'update_webhooks_integration', value: 'update_webhooks_integration' }
    ]}
>
<TabItem value="update_webhooks_integration">

Updates the endpoint with the name <code>&lt;WEBHOOK_NAME&gt;</code>.

```sql
REPLACE datadog.integrations.webhooks
SET 
custom_headers = '{{ custom_headers }}',
encode_as = '{{ encode_as }}',
name = '{{ name }}',
payload = '{{ payload }}',
url = '{{ url }}'
WHERE 
webhook_name = '{{ webhook_name }}' --required
RETURNING
name,
custom_headers,
encode_as,
payload,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_webhooks_integration"
    values={[
        { label: 'delete_webhooks_integration', value: 'delete_webhooks_integration' }
    ]}
>
<TabItem value="delete_webhooks_integration">

Deletes the endpoint with the name `&lt;WEBHOOK NAME&gt;`. This action cannot be undone.

```sql
DELETE FROM datadog.integrations.webhooks
WHERE webhook_name = '{{ webhook_name }}' --required
;
```
</TabItem>
</Tabs>
