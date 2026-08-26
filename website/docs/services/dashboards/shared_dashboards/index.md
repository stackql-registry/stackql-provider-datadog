--- 
title: shared_dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_dashboards
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

Creates, updates, deletes, gets or lists a <code>shared_dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.shared_dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_shared_dashboards_by_dashboard_id"
    values={[
        { label: 'list_shared_dashboards_by_dashboard_id', value: 'list_shared_dashboards_by_dashboard_id' },
        { label: 'get_public_dashboard', value: 'get_public_dashboard' }
    ]}
>
<TabItem value="list_shared_dashboards_by_dashboard_id">

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
    <td>ID of the shared dashboard. (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a shared dashboard response.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Relationships of a shared dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Shared dashboard resource type. (shared_dashboard) (default: shared_dashboard, example: shared_dashboard)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_public_dashboard">

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
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>ID of the dashboard to share. (example: 123-abc-456)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>User who shared the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the dashboard was shared.</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_type" /></td>
    <td><code>string</code></td>
    <td>The type of the associated private dashboard. (custom_timeboard, custom_screenboard) (example: custom_timeboard)</td>
</tr>
<tr>
    <td><CopyableCode code="embeddable_domains" /></td>
    <td><code>array</code></td>
    <td>The `SharedDashboard` `embeddable_domains`.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when an OPEN shared dashboard becomes publicly unavailable.</td>
</tr>
<tr>
    <td><CopyableCode code="global_time" /></td>
    <td><code>object</code></td>
    <td>Object containing the live span selection for the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="global_time_selectable_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow viewers to select a different global time setting for the shared dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="invitees" /></td>
    <td><code>array</code></td>
    <td>The `SharedDashboard` `invitees`.</td>
</tr>
<tr>
    <td><CopyableCode code="last_accessed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the shared dashboard was accessed. Null if never accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="public_url" /></td>
    <td><code>string</code></td>
    <td>URL of the shared dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="selectable_template_vars" /></td>
    <td><code>array</code></td>
    <td>List of objects representing template variables on the shared dashboard which can have selectable values.</td>
</tr>
<tr>
    <td><CopyableCode code="share_list" /></td>
    <td><code>array</code></td>
    <td>List of email addresses that can receive an invitation to access to the shared dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="share_type" /></td>
    <td><code>string</code></td>
    <td>Type of sharing access (either open to anyone who has the public URL or invite-only). (open, invite, embed)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Active means the dashboard is publicly available. Paused means the dashboard is not publicly available. (active, paused) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the shared dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>A unique token assigned to the shared dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="viewing_preferences" /></td>
    <td><code>object</code></td>
    <td>The viewing preferences for a shared dashboard.</td>
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
    <td><a href="#list_shared_dashboards_by_dashboard_id"><CopyableCode code="list_shared_dashboards_by_dashboard_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a></td>
    <td></td>
    <td>Retrieve shared dashboards associated with the specified dashboard.</td>
</tr>
<tr>
    <td><a href="#get_public_dashboard"><CopyableCode code="get_public_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Fetch an existing shared dashboard's sharing metadata associated with the specified token.</td>
</tr>
<tr>
    <td><a href="#create_public_dashboard"><CopyableCode code="create_public_dashboard" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-dashboard_type"><code>dashboard_type</code></a></td>
    <td></td>
    <td>Share a specified private dashboard, generating a URL at which it can be publicly viewed.</td>
</tr>
<tr>
    <td><a href="#update_public_dashboard"><CopyableCode code="update_public_dashboard" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Update a shared dashboard associated with the specified token.</td>
</tr>
<tr>
    <td><a href="#delete_public_dashboard"><CopyableCode code="delete_public_dashboard" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Revoke the public URL for a dashboard (rendering it private) associated with the specified token.</td>
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
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>ID of the dashboard.</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_shared_dashboards_by_dashboard_id"
    values={[
        { label: 'list_shared_dashboards_by_dashboard_id', value: 'list_shared_dashboards_by_dashboard_id' },
        { label: 'get_public_dashboard', value: 'get_public_dashboard' }
    ]}
>
<TabItem value="list_shared_dashboards_by_dashboard_id">

Retrieve shared dashboards associated with the specified dashboard.

```sql
SELECT
id,
attributes,
relationships,
type
FROM datadog.dashboards.shared_dashboards
WHERE dashboard_id = '{{ dashboard_id }}' -- required
;
```
</TabItem>
<TabItem value="get_public_dashboard">

Fetch an existing shared dashboard's sharing metadata associated with the specified token.

```sql
SELECT
dashboard_id,
author,
created,
dashboard_type,
embeddable_domains,
expiration,
global_time,
global_time_selectable_enabled,
invitees,
last_accessed,
public_url,
selectable_template_vars,
share_list,
share_type,
status,
title,
token,
viewing_preferences
FROM datadog.dashboards.shared_dashboards
WHERE token = '{{ token }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_public_dashboard"
    values={[
        { label: 'create_public_dashboard', value: 'create_public_dashboard' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_public_dashboard">

Share a specified private dashboard, generating a URL at which it can be publicly viewed.

```sql
INSERT INTO datadog.dashboards.shared_dashboards (
dashboard_id,
dashboard_type,
embeddable_domains,
expiration,
global_time,
global_time_selectable_enabled,
invitees,
selectable_template_vars,
share_list,
share_type,
status,
title,
viewing_preferences
)
SELECT 
'{{ dashboard_id }}' /* required */,
'{{ dashboard_type }}' /* required */,
'{{ embeddable_domains }}',
'{{ expiration }}',
'{{ global_time }}',
{{ global_time_selectable_enabled }},
'{{ invitees }}',
'{{ selectable_template_vars }}',
'{{ share_list }}',
'{{ share_type }}',
'{{ status }}',
'{{ title }}',
'{{ viewing_preferences }}'
RETURNING
dashboard_id,
author,
created,
dashboard_type,
embeddable_domains,
expiration,
global_time,
global_time_selectable_enabled,
invitees,
last_accessed,
public_url,
selectable_template_vars,
share_list,
share_type,
status,
title,
token,
viewing_preferences
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: shared_dashboards
  props:
    - name: dashboard_id
      value: "{{ dashboard_id }}"
      description: |
        ID of the dashboard to share.
    - name: dashboard_type
      value: "{{ dashboard_type }}"
      description: |
        The type of the associated private dashboard.
      valid_values: ['custom_timeboard', 'custom_screenboard']
    - name: embeddable_domains
      value:
        - "{{ embeddable_domains }}"
      description: |
        The \`SharedDashboard\` \`embeddable_domains\`.
    - name: expiration
      value: "{{ expiration }}"
      description: |
        The time when an OPEN shared dashboard becomes publicly unavailable.
    - name: global_time
      description: |
        Object containing the live span selection for the dashboard.
      value:
        live_span: "{{ live_span }}"
    - name: global_time_selectable_enabled
      value: {{ global_time_selectable_enabled }}
      description: |
        Whether to allow viewers to select a different global time setting for the shared dashboard.
    - name: invitees
      description: |
        The \`SharedDashboard\` \`invitees\`.
      value:
        - access_expiration: "{{ access_expiration }}"
          created_at: "{{ created_at }}"
          email: "{{ email }}"
    - name: selectable_template_vars
      description: |
        List of objects representing template variables on the shared dashboard which can have selectable values.
      value:
        - default_value: "{{ default_value }}"
          name: "{{ name }}"
          prefix: "{{ prefix }}"
          type: "{{ type }}"
          visible_tags: "{{ visible_tags }}"
    - name: share_list
      value:
        - "{{ share_list }}"
      description: |
        List of email addresses that can receive an invitation to access to the shared dashboard.
    - name: share_type
      value: "{{ share_type }}"
      description: |
        Type of sharing access (either open to anyone who has the public URL or invite-only).
      valid_values: ['open', 'invite', 'embed']
    - name: status
      value: "{{ status }}"
      description: |
        Active means the dashboard is publicly available. Paused means the dashboard is not publicly available.
      valid_values: ['active', 'paused']
    - name: title
      value: "{{ title }}"
      description: |
        Title of the shared dashboard.
    - name: viewing_preferences
      description: |
        The viewing preferences for a shared dashboard.
      value:
        high_density: {{ high_density }}
        theme: "{{ theme }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_public_dashboard"
    values={[
        { label: 'update_public_dashboard', value: 'update_public_dashboard' }
    ]}
>
<TabItem value="update_public_dashboard">

Update a shared dashboard associated with the specified token.

```sql
REPLACE datadog.dashboards.shared_dashboards
SET 
embeddable_domains = '{{ embeddable_domains }}',
expiration = '{{ expiration }}',
global_time = '{{ global_time }}',
global_time_selectable_enabled = {{ global_time_selectable_enabled }},
invitees = '{{ invitees }}',
selectable_template_vars = '{{ selectable_template_vars }}',
share_list = '{{ share_list }}',
share_type = '{{ share_type }}',
status = '{{ status }}',
title = '{{ title }}',
viewing_preferences = '{{ viewing_preferences }}'
WHERE 
token = '{{ token }}' --required
RETURNING
dashboard_id,
author,
created,
dashboard_type,
embeddable_domains,
expiration,
global_time,
global_time_selectable_enabled,
invitees,
last_accessed,
public_url,
selectable_template_vars,
share_list,
share_type,
status,
title,
token,
viewing_preferences;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_public_dashboard"
    values={[
        { label: 'delete_public_dashboard', value: 'delete_public_dashboard' }
    ]}
>
<TabItem value="delete_public_dashboard">

Revoke the public URL for a dashboard (rendering it private) associated with the specified token.

```sql
DELETE FROM datadog.dashboards.shared_dashboards
WHERE token = '{{ token }}' --required
;
```
</TabItem>
</Tabs>
