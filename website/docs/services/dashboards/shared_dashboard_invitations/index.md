--- 
title: shared_dashboard_invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_dashboard_invitations
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>shared_dashboard_invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_dashboard_invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.shared_dashboard_invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_public_dashboard_invitations"
    values={[
        { label: 'get_public_dashboard_invitations', value: 'get_public_dashboard_invitations' }
    ]}
>
<TabItem value="get_public_dashboard_invitations">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the shared dashboard invitation</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for shared dashboard invitation request body. (public_dashboard_invitation) (example: public_dashboard_invitation)</td>
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
    <td><a href="#get_public_dashboard_invitations"><CopyableCode code="get_public_dashboard_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_number"><code>page_number</code></a></td>
    <td>Describe the invitations that exist for the given shared dashboard (paginated).</td>
</tr>
<tr>
    <td><a href="#send_public_dashboard_invitation"><CopyableCode code="send_public_dashboard_invitation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-token"><code>token</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Send emails to specified email addresses containing links to access a given authenticated shared dashboard. Email addresses must already belong to the authenticated shared dashboard's share_list.</td>
</tr>
<tr>
    <td><a href="#delete_public_dashboard_invitation"><CopyableCode code="delete_public_dashboard_invitation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Revoke previously sent invitation emails and active sessions used to access a given shared dashboard for specific email addresses.</td>
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
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The token of the shared dashboard.</td>
</tr>
<tr id="parameter-page_number">
    <td><CopyableCode code="page_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page to access (base 0).</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of records to return in a single request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_public_dashboard_invitations"
    values={[
        { label: 'get_public_dashboard_invitations', value: 'get_public_dashboard_invitations' }
    ]}
>
<TabItem value="get_public_dashboard_invitations">

Describe the invitations that exist for the given shared dashboard (paginated).

```sql
SELECT
attributes,
type
FROM datadog.dashboards.shared_dashboard_invitations
WHERE token = '{{ token }}' -- required
AND page_size = '{{ page_size }}'
AND page_number = '{{ page_number }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="send_public_dashboard_invitation"
    values={[
        { label: 'send_public_dashboard_invitation', value: 'send_public_dashboard_invitation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="send_public_dashboard_invitation">

Send emails to specified email addresses containing links to access a given authenticated shared dashboard. Email addresses must already belong to the authenticated shared dashboard's share_list.

```sql
INSERT INTO datadog.dashboards.shared_dashboard_invitations (
data,
token
)
SELECT 
'{{ data }}' /* required */,
'{{ token }}'
RETURNING
data,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: shared_dashboard_invitations
  props:
    - name: token
      value: "{{ token }}"
      description: Required parameter for the shared_dashboard_invitations resource.
    - name: data
      description: |
        An object or list of objects containing the information for an invitation to a shared dashboard.
      value:
        attributes:
          created_at: "{{ created_at }}"
          email: "{{ email }}"
          has_session: {{ has_session }}
          invitation_expiry: "{{ invitation_expiry }}"
          session_expiry: "{{ session_expiry }}"
          share_token: "{{ share_token }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_public_dashboard_invitation"
    values={[
        { label: 'delete_public_dashboard_invitation', value: 'delete_public_dashboard_invitation' }
    ]}
>
<TabItem value="delete_public_dashboard_invitation">

Revoke previously sent invitation emails and active sessions used to access a given shared dashboard for specific email addresses.

```sql
DELETE FROM datadog.dashboards.shared_dashboard_invitations
WHERE token = '{{ token }}' --required
;
```
</TabItem>
</Tabs>
