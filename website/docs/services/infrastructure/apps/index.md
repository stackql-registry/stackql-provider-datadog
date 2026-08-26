--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - infrastructure
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.infrastructure.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app"
    values={[
        { label: 'get_app', value: 'get_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="get_app">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the app. (example: 65bb1f25-52e1-4510-9f8d-22d1516ed693)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The app definition attributes, such as name, description, and components.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The app definition type. (appDefinitions) (default: appDefinitions, example: appDefinitions)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apps">

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
    <td><code>string (uuid)</code></td>
    <td>The ID of the app. (example: 65bb1f25-52e1-4510-9f8d-22d1516ed693)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Basic information about the app such as name, description, and tags.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata of an app.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>The app's publication information.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The app definition type. (appDefinitions) (default: appDefinitions, example: appDefinitions)</td>
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
    <td><a href="#get_app"><CopyableCode code="get_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Get the full definition of an app. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#list_apps"><CopyableCode code="list_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-filter[user_name]"><code>filter[user_name]</code></a>, <a href="#parameter-filter[user_uuid]"><code>filter[user_uuid]</code></a>, <a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a>, <a href="#parameter-filter[deployed]"><code>filter[deployed]</code></a>, <a href="#parameter-filter[tags]"><code>filter[tags]</code></a>, <a href="#parameter-filter[favorite]"><code>filter[favorite]</code></a>, <a href="#parameter-filter[self_service]"><code>filter[self_service]</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>List all apps, with optional filters and sorting. This endpoint is paginated. Only basic app information such as the app ID, name, and description is returned by this endpoint. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#create_app"><CopyableCode code="create_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Create a new app, returning the app ID. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#update_app"><CopyableCode code="update_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Update an existing app. This creates a new version of the app. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#delete_app"><CopyableCode code="delete_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Delete a single app. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#delete_apps"><CopyableCode code="delete_apps" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete multiple apps in a single request from a list of app IDs. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#unpublish_app"><CopyableCode code="unpublish_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Unpublish an app, removing the live version of the app. Unpublishing creates a new instance of a `deployment` object on the app, with a nil `app_version_id` (`00000000-0000-0000-0000-000000000000`). The app can still be updated and published again in the future. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
</tr>
<tr>
    <td><a href="#publish_app"><CopyableCode code="publish_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td></td>
    <td>Publish an app for use by other users. To ensure the app is accessible to the correct users, you also need to set a &#91;Restriction Policy&#93;(https:​//docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. This API requires a &#91;registered application key&#93;(https:​//docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions &#91;in the UI&#93;(https:​//docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the app to publish. (example: 65bb1f25-52e1-4510-9f8d-22d1516ed693)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[deployed]">
    <td><CopyableCode code="filter[deployed]" /></td>
    <td><code>boolean</code></td>
    <td>Filter apps by whether they are published.</td>
</tr>
<tr id="parameter-filter[favorite]">
    <td><CopyableCode code="filter[favorite]" /></td>
    <td><code>boolean</code></td>
    <td>Filter apps by whether you have added them to your favorites.</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter by app name.</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Filter apps by the app name or the app creator.</td>
</tr>
<tr id="parameter-filter[self_service]">
    <td><CopyableCode code="filter[self_service]" /></td>
    <td><code>boolean</code></td>
    <td>Filter apps by whether they are enabled for self-service.</td>
</tr>
<tr id="parameter-filter[tags]">
    <td><CopyableCode code="filter[tags]" /></td>
    <td><code>string</code></td>
    <td>Filter apps by tags.</td>
</tr>
<tr id="parameter-filter[user_name]">
    <td><CopyableCode code="filter[user_name]" /></td>
    <td><code>string</code></td>
    <td>Filter apps by the app creator. Usually the user's email.</td>
</tr>
<tr id="parameter-filter[user_uuid]">
    <td><CopyableCode code="filter[user_uuid]" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter apps by the app creator's UUID. (example: 65bb1f25-52e1-4510-9f8d-22d1516ed693)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of apps to return per page.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer (int64)</code></td>
    <td>The page number to return.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>array</code></td>
    <td>The fields and direction to sort apps by.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number of the app to retrieve. If not specified, the latest version is returned. Version numbers start at 1 and increment with each update. The special values `latest` and `deployed` can be used to retrieve the latest version or the published version, respectively.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_app"
    values={[
        { label: 'get_app', value: 'get_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="get_app">

Get the full definition of an app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
SELECT
id,
attributes,
type
FROM datadog.infrastructure.apps
WHERE app_id = '{{ app_id }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list_apps">

List all apps, with optional filters and sorting. This endpoint is paginated. Only basic app information such as the app ID, name, and description is returned by this endpoint. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
SELECT
id,
attributes,
meta,
relationships,
type
FROM datadog.infrastructure.apps
WHERE limit = '{{ limit }}'
AND page = '{{ page }}'
AND filter[user_name] = '{{ filter[user_name] }}'
AND filter[user_uuid] = '{{ filter[user_uuid] }}'
AND filter[name] = '{{ filter[name] }}'
AND filter[query] = '{{ filter[query] }}'
AND filter[deployed] = '{{ filter[deployed] }}'
AND filter[tags] = '{{ filter[tags] }}'
AND filter[favorite] = '{{ filter[favorite] }}'
AND filter[self_service] = '{{ filter[self_service] }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app"
    values={[
        { label: 'create_app', value: 'create_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app">

Create a new app, returning the app ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
INSERT INTO datadog.infrastructure.apps (
data
)
SELECT 
'{{ data }}'
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: apps
  props:
    - name: data
      description: |
        The data object containing the app definition.
      value:
        attributes:
          components:
            - events: "{{ events }}"
              id: "{{ id }}"
              name: "{{ name }}"
              properties:
                backgroundColor: "{{ backgroundColor }}"
                children:
                  - events: "{{ events }}"
                    id: "{{ id }}"
                    name: "{{ name }}"
                    properties:
                      children: "{{ children }}"
                      isVisible: {{ isVisible }}
                    type: "{{ type }}"
                isVisible: "{{ isVisible }}"
              type: "{{ type }}"
          description: "{{ description }}"
          name: "{{ name }}"
          queries:
            - events: "{{ events }}"
              id: "{{ id }}"
              name: "{{ name }}"
              properties:
                condition: {{ condition }}
                debounceInMs: {{ debounceInMs }}
                mockedOutputs: "{{ mockedOutputs }}"
                onlyTriggerManually: {{ onlyTriggerManually }}
                outputs: "{{ outputs }}"
                pollingIntervalInMs: {{ pollingIntervalInMs }}
                requiresConfirmation: {{ requiresConfirmation }}
                showToastOnError: {{ showToastOnError }}
                spec: "{{ spec }}"
              type: "{{ type }}"
          rootInstanceName: "{{ rootInstanceName }}"
          tags:
            - "{{ tags }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app"
    values={[
        { label: 'update_app', value: 'update_app' }
    ]}
>
<TabItem value="update_app">

Update an existing app. This creates a new version of the app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
UPDATE datadog.infrastructure.apps
SET 
data = '{{ data }}'
WHERE 
app_id = '{{ app_id }}' --required
RETURNING
data,
included,
meta,
relationship;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app"
    values={[
        { label: 'delete_app', value: 'delete_app' },
        { label: 'delete_apps', value: 'delete_apps' }
    ]}
>
<TabItem value="delete_app">

Delete a single app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
DELETE FROM datadog.infrastructure.apps
WHERE app_id = '{{ app_id }}' --required
;
```
</TabItem>
<TabItem value="delete_apps">

Delete multiple apps in a single request from a list of app IDs. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
DELETE FROM datadog.infrastructure.apps
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="unpublish_app"
    values={[
        { label: 'unpublish_app', value: 'unpublish_app' },
        { label: 'publish_app', value: 'publish_app' }
    ]}
>
<TabItem value="unpublish_app">

Unpublish an app, removing the live version of the app. Unpublishing creates a new instance of a `deployment` object on the app, with a nil `app_version_id` (`00000000-0000-0000-0000-000000000000`). The app can still be updated and published again in the future. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
EXEC datadog.infrastructure.apps.unpublish_app 
@app_id='{{ app_id }}' --required 
;
```
</TabItem>
<TabItem value="publish_app">

Publish an app for use by other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).

```sql
EXEC datadog.infrastructure.apps.publish_app 
@app_id='{{ app_id }}' --required 
;
```
</TabItem>
</Tabs>
