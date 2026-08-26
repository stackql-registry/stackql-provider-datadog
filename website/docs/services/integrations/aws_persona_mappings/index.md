--- 
title: aws_persona_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_persona_mappings
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

Creates, updates, deletes, gets or lists an <code>aws_persona_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_persona_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.integrations.aws_persona_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_awscloud_auth_persona_mapping"
    values={[
        { label: 'get_awscloud_auth_persona_mapping', value: 'get_awscloud_auth_persona_mapping' },
        { label: 'list_awscloud_auth_persona_mappings', value: 'list_awscloud_auth_persona_mappings' }
    ]}
>
<TabItem value="get_awscloud_auth_persona_mapping">

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
    <td>Unique identifier for the persona mapping (example: c5c758c6-18c2-4484-ae3f-46b84128404a)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for AWS cloud authentication persona mapping response</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type identifier for AWS cloud authentication persona mapping (aws_cloud_auth_config) (example: aws_cloud_auth_config)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_awscloud_auth_persona_mappings">

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
    <td>Unique identifier for the persona mapping (example: c5c758c6-18c2-4484-ae3f-46b84128404a)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for AWS cloud authentication persona mapping response</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type identifier for AWS cloud authentication persona mapping (aws_cloud_auth_config) (example: aws_cloud_auth_config)</td>
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
    <td><a href="#get_awscloud_auth_persona_mapping"><CopyableCode code="get_awscloud_auth_persona_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-persona_mapping_id"><code>persona_mapping_id</code></a></td>
    <td></td>
    <td>Get a specific AWS cloud authentication persona mapping by ID. This endpoint retrieves a single configured persona mapping that associates an AWS IAM principal with a Datadog user.</td>
</tr>
<tr>
    <td><a href="#list_awscloud_auth_persona_mappings"><CopyableCode code="list_awscloud_auth_persona_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all AWS cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate AWS IAM principals with Datadog users.</td>
</tr>
<tr>
    <td><a href="#create_awscloud_auth_persona_mapping"><CopyableCode code="create_awscloud_auth_persona_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create an AWS cloud authentication persona mapping. This endpoint associates an AWS IAM principal with a Datadog user.</td>
</tr>
<tr>
    <td><a href="#delete_awscloud_auth_persona_mapping"><CopyableCode code="delete_awscloud_auth_persona_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-persona_mapping_id"><code>persona_mapping_id</code></a></td>
    <td></td>
    <td>Delete an AWS cloud authentication persona mapping by ID. This removes the association between an AWS IAM principal and a Datadog user.</td>
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
<tr id="parameter-persona_mapping_id">
    <td><CopyableCode code="persona_mapping_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the persona mapping (example: c5c758c6-18c2-4484-ae3f-46b84128404a)</td>
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
    defaultValue="get_awscloud_auth_persona_mapping"
    values={[
        { label: 'get_awscloud_auth_persona_mapping', value: 'get_awscloud_auth_persona_mapping' },
        { label: 'list_awscloud_auth_persona_mappings', value: 'list_awscloud_auth_persona_mappings' }
    ]}
>
<TabItem value="get_awscloud_auth_persona_mapping">

Get a specific AWS cloud authentication persona mapping by ID. This endpoint retrieves a single configured persona mapping that associates an AWS IAM principal with a Datadog user.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_persona_mappings
WHERE persona_mapping_id = '{{ persona_mapping_id }}' -- required
;
```
</TabItem>
<TabItem value="list_awscloud_auth_persona_mappings">

List all AWS cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate AWS IAM principals with Datadog users.

```sql
SELECT
id,
attributes,
type
FROM datadog.integrations.aws_persona_mappings
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_awscloud_auth_persona_mapping"
    values={[
        { label: 'create_awscloud_auth_persona_mapping', value: 'create_awscloud_auth_persona_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_awscloud_auth_persona_mapping">

Create an AWS cloud authentication persona mapping. This endpoint associates an AWS IAM principal with a Datadog user.

```sql
INSERT INTO datadog.integrations.aws_persona_mappings (
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
- name: aws_persona_mappings
  props:
    - name: data
      description: |
        Data for creating an AWS cloud authentication persona mapping
      value:
        attributes:
          account_identifier: "{{ account_identifier }}"
          arn_pattern: "{{ arn_pattern }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_awscloud_auth_persona_mapping"
    values={[
        { label: 'delete_awscloud_auth_persona_mapping', value: 'delete_awscloud_auth_persona_mapping' }
    ]}
>
<TabItem value="delete_awscloud_auth_persona_mapping">

Delete an AWS cloud authentication persona mapping by ID. This removes the association between an AWS IAM principal and a Datadog user.

```sql
DELETE FROM datadog.integrations.aws_persona_mappings
WHERE persona_mapping_id = '{{ persona_mapping_id }}' --required
;
```
</TabItem>
</Tabs>
