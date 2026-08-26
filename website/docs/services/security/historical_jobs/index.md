--- 
title: historical_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - historical_jobs
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

Creates, updates, deletes, gets or lists a <code>historical_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="historical_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.historical_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_historical_job"
    values={[
        { label: 'get_historical_job', value: 'get_historical_job' },
        { label: 'list_historical_jobs', value: 'list_historical_jobs' }
    ]}
>
<TabItem value="get_historical_job">

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
    <td>ID of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Historical job attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of payload. (historicalDetectionsJob)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_historical_jobs">

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
    <td>ID of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Historical job attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of payload. (historicalDetectionsJob)</td>
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
    <td><a href="#get_historical_job"><CopyableCode code="get_historical_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a></td>
    <td></td>
    <td>Get a job's details.</td>
</tr>
<tr>
    <td><a href="#list_historical_jobs"><CopyableCode code="list_historical_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-filter[query]"><code>filter[query]</code></a></td>
    <td>List historical jobs.</td>
</tr>
<tr>
    <td><a href="#run_historical_job"><CopyableCode code="run_historical_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Run a historical job.</td>
</tr>
<tr>
    <td><a href="#cancel_historical_job"><CopyableCode code="cancel_historical_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a></td>
    <td></td>
    <td>Cancel a historical job.</td>
</tr>
<tr>
    <td><a href="#delete_historical_job"><CopyableCode code="delete_historical_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a></td>
    <td></td>
    <td>Delete an existing job.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[query]">
    <td><CopyableCode code="filter[query]" /></td>
    <td><code>string</code></td>
    <td>Query used to filter items from the fetched list. (example: security:attack status:high)</td>
</tr>
<tr id="parameter-page[number]">
    <td><CopyableCode code="page[number]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific page number to return.</td>
</tr>
<tr id="parameter-page[size]">
    <td><CopyableCode code="page[size]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of items to return per page. The maximum allowed value is 100.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The order of the jobs in results. (example: status)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_historical_job"
    values={[
        { label: 'get_historical_job', value: 'get_historical_job' },
        { label: 'list_historical_jobs', value: 'list_historical_jobs' }
    ]}
>
<TabItem value="get_historical_job">

Get a job's details.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.historical_jobs
WHERE job_id = '{{ job_id }}' -- required
;
```
</TabItem>
<TabItem value="list_historical_jobs">

List historical jobs.

```sql
SELECT
id,
attributes,
type
FROM datadog.security.historical_jobs
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND sort = '{{ sort }}'
AND filter[query] = '{{ filter[query] }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="run_historical_job"
    values={[
        { label: 'run_historical_job', value: 'run_historical_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="run_historical_job">

Run a historical job.

```sql
INSERT INTO datadog.security.historical_jobs (
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
- name: historical_jobs
  props:
    - name: data
      description: |
        Data for running a historical job request.
      value:
        attributes:
          fromRule:
            caseIndex: {{ caseIndex }}
            from: {{ from }}
            id: "{{ id }}"
            index: "{{ index }}"
            notifications:
              - "{{ notifications }}"
            to: {{ to }}
          jobDefinition:
            calculatedFields:
              - expression: "{{ expression }}"
                name: "{{ name }}"
            cases:
              - actions: "{{ actions }}"
                condition: "{{ condition }}"
                name: "{{ name }}"
                notifications: "{{ notifications }}"
                status: "{{ status }}"
            from: {{ from }}
            groupSignalsBy:
              - "{{ groupSignalsBy }}"
            index: "{{ index }}"
            message: "{{ message }}"
            name: "{{ name }}"
            options:
              anomalyDetectionOptions:
                bucketDuration: {{ bucketDuration }}
                detectionTolerance: {{ detectionTolerance }}
                instantaneousBaseline: {{ instantaneousBaseline }}
                learningDuration: {{ learningDuration }}
                learningPeriodBaseline: {{ learningPeriodBaseline }}
              detectionMethod: "{{ detectionMethod }}"
              evaluationWindow: {{ evaluationWindow }}
              impossibleTravelOptions:
                baselineUserLocations: {{ baselineUserLocations }}
                baselineUserLocationsDuration: {{ baselineUserLocationsDuration }}
              keepAlive: {{ keepAlive }}
              maxSignalDuration: {{ maxSignalDuration }}
              newValueOptions:
                forgetAfter: {{ forgetAfter }}
                instantaneousBaseline: {{ instantaneousBaseline }}
                learningDuration: {{ learningDuration }}
                learningMethod: "{{ learningMethod }}"
                learningThreshold: {{ learningThreshold }}
              sequenceDetectionOptions:
                stepTransitions: "{{ stepTransitions }}"
                steps: "{{ steps }}"
              thirdPartyRuleOptions:
                defaultNotifications: "{{ defaultNotifications }}"
                defaultStatus: "{{ defaultStatus }}"
                rootQueries: "{{ rootQueries }}"
                signalTitleTemplate: "{{ signalTitleTemplate }}"
            queries:
              - additionalFilters: "{{ additionalFilters }}"
                aggregation: "{{ aggregation }}"
                correlatedByFields: "{{ correlatedByFields }}"
                correlatedQueryIndex: {{ correlatedQueryIndex }}
                customQueryExtension: "{{ customQueryExtension }}"
                dataSource: "{{ dataSource }}"
                datasetIds: "{{ datasetIds }}"
                distinctFields: "{{ distinctFields }}"
                groupByFields: "{{ groupByFields }}"
                hasOptionalGroupByFields: {{ hasOptionalGroupByFields }}
                index: "{{ index }}"
                indexes: "{{ indexes }}"
                metrics: "{{ metrics }}"
                name: "{{ name }}"
                query: "{{ query }}"
                queryLanguage: "{{ queryLanguage }}"
            referenceTables:
              - checkPresence: {{ checkPresence }}
                columnName: "{{ columnName }}"
                logFieldPath: "{{ logFieldPath }}"
                ruleQueryName: "{{ ruleQueryName }}"
                tableName: "{{ tableName }}"
            tags:
              - "{{ tags }}"
            thirdPartyCases:
              - name: "{{ name }}"
                notifications: "{{ notifications }}"
                query: "{{ query }}"
                status: "{{ status }}"
            to: {{ to }}
            type: "{{ type }}"
          signalOutput: {{ signalOutput }}
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="cancel_historical_job"
    values={[
        { label: 'cancel_historical_job', value: 'cancel_historical_job' }
    ]}
>
<TabItem value="cancel_historical_job">

Cancel a historical job.

```sql
UPDATE datadog.security.historical_jobs
SET 
-- No updatable properties
WHERE 
job_id = '{{ job_id }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_historical_job"
    values={[
        { label: 'delete_historical_job', value: 'delete_historical_job' }
    ]}
>
<TabItem value="delete_historical_job">

Delete an existing job.

```sql
DELETE FROM datadog.security.historical_jobs
WHERE job_id = '{{ job_id }}' --required
;
```
</TabItem>
</Tabs>
