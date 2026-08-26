--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - fleet
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.fleet.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fleet_deployment_v2"
    values={[
        { label: 'get_fleet_deployment_v2', value: 'get_fleet_deployment_v2' },
        { label: 'list_fleet_deployments_v2', value: 'list_fleet_deployments_v2' }
    ]}
>
<TabItem value="get_fleet_deployment_v2">

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
    <td>Unique identifier for the deployment. (example: k7Q-3mX-p9Z)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a deployment detail response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of deployment resource. (deployment) (default: deployment, example: deployment)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleet_deployments_v2">

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
    <td>Unique identifier for the deployment. (example: k7Q-3mX-p9Z)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of a deployment in the v2 API response.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of deployment resource. (deployment) (default: deployment, example: deployment)</td>
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
    <td><a href="#get_fleet_deployment_v2"><CopyableCode code="get_fleet_deployment_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>Retrieve detailed information about a specific deployment, including its current status,&lt;br /&gt;configuration operations, and per-host execution status.&lt;br /&gt;&lt;br /&gt;Returns a 404 if no deployment matches the given ID or if you do not have access to it.</td>
</tr>
<tr>
    <td><a href="#list_fleet_deployments_v2"><CopyableCode code="list_fleet_deployments_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page_size"><code>page_size</code></a>, <a href="#parameter-page_number"><code>page_number</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-ascending"><code>ascending</code></a>, <a href="#parameter-filter"><code>filter</code></a></td>
    <td>Retrieve a paginated list of all deployments for fleet automation.</td>
</tr>
<tr>
    <td><a href="#create_fleet_deployment_configure_v2"><CopyableCode code="create_fleet_deployment_configure_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a new deployment to apply configuration changes&lt;br /&gt;to a fleet of hosts matching the specified filter query.&lt;br /&gt;&lt;br /&gt;This endpoint supports two types of configuration operations:&lt;br /&gt;- `merge-patch`: Merges the provided patch data with the existing configuration file,&lt;br /&gt;  creating the file if it doesn't exist.&lt;br /&gt;- `delete`: Removes the specified configuration file from the target hosts.&lt;br /&gt;&lt;br /&gt;You can optionally use `target_packages` to apply the configuration change only to specific package versions.&lt;br /&gt;&lt;br /&gt;The deployment is created and started automatically. You can specify multiple configuration&lt;br /&gt;operations to execute in order on each target host. Use the filter query to target&lt;br /&gt;specific hosts using the Datadog query syntax.&lt;br /&gt;&lt;br /&gt;Set `dry_run` to `true` to validate the configuration and resolve target hosts and packages without deploying anything. A dry run returns a 200 with the validation result instead of creating and starting a deployment.&lt;br /&gt;&lt;br /&gt;Returns a 400 if `filter_query` or `config_operations` is missing, a target package is missing a name or version or cannot be resolved, the configuration fails validation, or the filter query does not match any host eligible for the deployment.</td>
</tr>
<tr>
    <td><a href="#create_fleet_deployment_upgrade_v2"><CopyableCode code="create_fleet_deployment_upgrade_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create and immediately start a new package upgrade&lt;br /&gt;on hosts matching the specified filter query.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to upgrade the Datadog Agent to a specific version&lt;br /&gt;on hosts matching the specified filter query.&lt;br /&gt;&lt;br /&gt;The deployment is created and started automatically. The system:&lt;br /&gt;1. Identifies all hosts matching the filter query.&lt;br /&gt;2. Validates that the specified version is available.&lt;br /&gt;3. Begins rolling out the package upgrade to the target hosts.&lt;br /&gt;&lt;br /&gt;Returns a 400 if `filter_query` or `target_packages` is missing, a target package is missing a name or version, or the filter query does not match any host eligible for the upgrade. Returns a 409 if a conflicting upgrade is already running on one or more target hosts.</td>
</tr>
<tr>
    <td><a href="#cancel_fleet_deployment_v2"><CopyableCode code="cancel_fleet_deployment_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>Cancel an active deployment and stop all pending operations.&lt;br /&gt;When you cancel a deployment:&lt;br /&gt;- All pending operations on hosts that haven't started yet are stopped.&lt;br /&gt;- Operations currently in progress on hosts may complete or be interrupted, depending on their current status.&lt;br /&gt;- Configuration changes or package upgrades already applied to hosts are not rolled back.&lt;br /&gt;&lt;br /&gt;After cancellation, you can view the final state of the deployment using the GET endpoint to see which hosts&lt;br /&gt;were successfully updated before the cancellation.&lt;br /&gt;&lt;br /&gt;Only deployments with a `pending` or `running` status can be canceled. Returns a 400 if the deployment is not in a cancelable status. Returns a 404 if no deployment matches the specified ID or if you do not have access to it.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the deployment to cancel. (example: k7Q-3mX-p9Z)</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-ascending">
    <td><CopyableCode code="ascending" /></td>
    <td><code>boolean</code></td>
    <td>Set to `true` to sort in ascending order. This setting has no effect unless `sort` is also set. Defaults to descending order.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Query used to filter deployments. Uses the Datadog query syntax. Filtering on an unsupported field returns a 400 error. For example: - `status:failed` or `status:done_with_errors`: deployments that need investigation. - `status:running`: deployments currently in flight. - `update_type:update_package` or `update_type:update_config_operations`: deployments of a given type. (example: status:failed)</td>
</tr>
<tr id="parameter-page_number">
    <td><CopyableCode code="page_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>Page number for pagination, starting at 0.</td>
</tr>
<tr id="parameter-page_size">
    <td><CopyableCode code="page_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of deployments to return per page. Maximum value is 100.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Field to sort results by (for example, `start_date`). Must be a supported field name; unsupported values return a 400 error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_fleet_deployment_v2"
    values={[
        { label: 'get_fleet_deployment_v2', value: 'get_fleet_deployment_v2' },
        { label: 'list_fleet_deployments_v2', value: 'list_fleet_deployments_v2' }
    ]}
>
<TabItem value="get_fleet_deployment_v2">

Retrieve detailed information about a specific deployment, including its current status,&lt;br /&gt;configuration operations, and per-host execution status.&lt;br /&gt;&lt;br /&gt;Returns a 404 if no deployment matches the given ID or if you do not have access to it.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.deployments
WHERE deployment_id = '{{ deployment_id }}' -- required
;
```
</TabItem>
<TabItem value="list_fleet_deployments_v2">

Retrieve a paginated list of all deployments for fleet automation.

```sql
SELECT
id,
attributes,
type
FROM datadog.fleet.deployments
WHERE page_size = '{{ page_size }}'
AND page_number = '{{ page_number }}'
AND sort = '{{ sort }}'
AND ascending = '{{ ascending }}'
AND filter = '{{ filter }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="create_fleet_deployment_configure_v2"
    values={[
        { label: 'create_fleet_deployment_configure_v2', value: 'create_fleet_deployment_configure_v2' },
        { label: 'create_fleet_deployment_upgrade_v2', value: 'create_fleet_deployment_upgrade_v2' },
        { label: 'cancel_fleet_deployment_v2', value: 'cancel_fleet_deployment_v2' }
    ]}
>
<TabItem value="create_fleet_deployment_configure_v2">

Create a new deployment to apply configuration changes&lt;br /&gt;to a fleet of hosts matching the specified filter query.&lt;br /&gt;&lt;br /&gt;This endpoint supports two types of configuration operations:&lt;br /&gt;- `merge-patch`: Merges the provided patch data with the existing configuration file,&lt;br /&gt;  creating the file if it doesn't exist.&lt;br /&gt;- `delete`: Removes the specified configuration file from the target hosts.&lt;br /&gt;&lt;br /&gt;You can optionally use `target_packages` to apply the configuration change only to specific package versions.&lt;br /&gt;&lt;br /&gt;The deployment is created and started automatically. You can specify multiple configuration&lt;br /&gt;operations to execute in order on each target host. Use the filter query to target&lt;br /&gt;specific hosts using the Datadog query syntax.&lt;br /&gt;&lt;br /&gt;Set `dry_run` to `true` to validate the configuration and resolve target hosts and packages without deploying anything. A dry run returns a 200 with the validation result instead of creating and starting a deployment.&lt;br /&gt;&lt;br /&gt;Returns a 400 if `filter_query` or `config_operations` is missing, a target package is missing a name or version or cannot be resolved, the configuration fails validation, or the filter query does not match any host eligible for the deployment.

```sql
EXEC datadog.fleet.deployments.create_fleet_deployment_configure_v2 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="create_fleet_deployment_upgrade_v2">

Create and immediately start a new package upgrade&lt;br /&gt;on hosts matching the specified filter query.&lt;br /&gt;&lt;br /&gt;This endpoint allows you to upgrade the Datadog Agent to a specific version&lt;br /&gt;on hosts matching the specified filter query.&lt;br /&gt;&lt;br /&gt;The deployment is created and started automatically. The system:&lt;br /&gt;1. Identifies all hosts matching the filter query.&lt;br /&gt;2. Validates that the specified version is available.&lt;br /&gt;3. Begins rolling out the package upgrade to the target hosts.&lt;br /&gt;&lt;br /&gt;Returns a 400 if `filter_query` or `target_packages` is missing, a target package is missing a name or version, or the filter query does not match any host eligible for the upgrade. Returns a 409 if a conflicting upgrade is already running on one or more target hosts.

```sql
EXEC datadog.fleet.deployments.create_fleet_deployment_upgrade_v2 
@@json=
'{
"data": "{{ data }}"
}'
;
```
</TabItem>
<TabItem value="cancel_fleet_deployment_v2">

Cancel an active deployment and stop all pending operations.&lt;br /&gt;When you cancel a deployment:&lt;br /&gt;- All pending operations on hosts that haven't started yet are stopped.&lt;br /&gt;- Operations currently in progress on hosts may complete or be interrupted, depending on their current status.&lt;br /&gt;- Configuration changes or package upgrades already applied to hosts are not rolled back.&lt;br /&gt;&lt;br /&gt;After cancellation, you can view the final state of the deployment using the GET endpoint to see which hosts&lt;br /&gt;were successfully updated before the cancellation.&lt;br /&gt;&lt;br /&gt;Only deployments with a `pending` or `running` status can be canceled. Returns a 400 if the deployment is not in a cancelable status. Returns a 404 if no deployment matches the specified ID or if you do not have access to it.

```sql
EXEC datadog.fleet.deployments.cancel_fleet_deployment_v2 
@deployment_id='{{ deployment_id }}' --required 
;
```
</TabItem>
</Tabs>
