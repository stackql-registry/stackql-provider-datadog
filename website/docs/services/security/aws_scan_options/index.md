--- 
title: aws_scan_options
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_scan_options
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

Creates, updates, deletes, gets or lists an <code>aws_scan_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_scan_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.aws_scan_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aws_scan_options"
    values={[
        { label: 'get_aws_scan_options', value: 'get_aws_scan_options' },
        { label: 'list_aws_scan_options', value: 'list_aws_scan_options' }
    ]}
>
<TabItem value="get_aws_scan_options">

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
    <td>The ID of the AWS account. (example: 184366314700)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for the AWS scan options.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `aws_scan_options`. (aws_scan_options) (default: aws_scan_options, example: aws_scan_options)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_aws_scan_options">

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
    <td>The ID of the AWS account. (example: 184366314700)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for the AWS scan options.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. The value should always be `aws_scan_options`. (aws_scan_options) (default: aws_scan_options, example: aws_scan_options)</td>
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
    <td><a href="#get_aws_scan_options"><CopyableCode code="get_aws_scan_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Fetches the Agentless scan options for an activated account.</td>
</tr>
<tr>
    <td><a href="#list_aws_scan_options"><CopyableCode code="list_aws_scan_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Fetches the scan options configured for AWS accounts.</td>
</tr>
<tr>
    <td><a href="#create_aws_scan_options"><CopyableCode code="create_aws_scan_options" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Activate Agentless scan options for an AWS account.</td>
</tr>
<tr>
    <td><a href="#update_aws_scan_options"><CopyableCode code="update_aws_scan_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update the Agentless scan options for an activated account.</td>
</tr>
<tr>
    <td><a href="#delete_aws_scan_options"><CopyableCode code="delete_aws_scan_options" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Delete Agentless scan options for an AWS account.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of an AWS account. (example: 123456789012)</td>
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
    defaultValue="get_aws_scan_options"
    values={[
        { label: 'get_aws_scan_options', value: 'get_aws_scan_options' },
        { label: 'list_aws_scan_options', value: 'list_aws_scan_options' }
    ]}
>
<TabItem value="get_aws_scan_options">

Fetches the Agentless scan options for an activated account.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.aws_scan_options
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="list_aws_scan_options">

Fetches the scan options configured for AWS accounts.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.aws_scan_options
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_aws_scan_options"
    values={[
        { label: 'create_aws_scan_options', value: 'create_aws_scan_options' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_aws_scan_options">

Activate Agentless scan options for an AWS account.

```sql
INSERT INTO datadog.security.aws_scan_options (
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
- name: aws_scan_options
  props:
    - name: data
      description: |
        Object for the scan options of a single AWS account.
      value:
        attributes:
          compliance_host: {{ compliance_host }}
          lambda: {{ lambda }}
          sensitive_data: {{ sensitive_data }}
          vuln_containers_os: {{ vuln_containers_os }}
          vuln_host_os: {{ vuln_host_os }}
        id: "{{ id }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_aws_scan_options"
    values={[
        { label: 'update_aws_scan_options', value: 'update_aws_scan_options' }
    ]}
>
<TabItem value="update_aws_scan_options">

Update the Agentless scan options for an activated account.

```sql
UPDATE datadog.security.aws_scan_options
SET 
data = '{{ data }}'
WHERE 
account_id = '{{ account_id }}' --required
AND data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_aws_scan_options"
    values={[
        { label: 'delete_aws_scan_options', value: 'delete_aws_scan_options' }
    ]}
>
<TabItem value="delete_aws_scan_options">

Delete Agentless scan options for an AWS account.

```sql
DELETE FROM datadog.security.aws_scan_options
WHERE account_id = '{{ account_id }}' --required
;
```
</TabItem>
</Tabs>
