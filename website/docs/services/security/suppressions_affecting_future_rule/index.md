--- 
title: suppressions_affecting_future_rule
hide_title: false
hide_table_of_contents: false
keywords:
  - suppressions_affecting_future_rule
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

Creates, updates, deletes, gets or lists a <code>suppressions_affecting_future_rule</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suppressions_affecting_future_rule" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.suppressions_affecting_future_rule" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#get_suppressions_affecting_future_rule"><CopyableCode code="get_suppressions_affecting_future_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-is_enabled"><code>is_enabled</code></a>, <a href="#parameter-queries"><code>queries</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-cases"><code>cases</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-compliance_signal_options"><code>compliance_signal_options</code></a></td>
    <td></td>
    <td>Get the list of suppressions that would affect a rule.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="get_suppressions_affecting_future_rule"
    values={[
        { label: 'get_suppressions_affecting_future_rule', value: 'get_suppressions_affecting_future_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="get_suppressions_affecting_future_rule">

Get the list of suppressions that would affect a rule.

```sql
INSERT INTO datadog.security.suppressions_affecting_future_rule (
calculated_fields,
cases,
filters,
group_signals_by,
has_extended_title,
is_enabled,
message,
name,
options,
queries,
reference_tables,
scheduling_options,
tags,
third_party_cases,
type,
compliance_signal_options
)
SELECT 
'{{ calculated_fields }}',
'{{ cases }}' /* required */,
'{{ filters }}',
'{{ group_signals_by }}',
{{ has_extended_title }},
{{ is_enabled }} /* required */,
'{{ message }}' /* required */,
'{{ name }}' /* required */,
'{{ options }}' /* required */,
'{{ queries }}' /* required */,
'{{ reference_tables }}',
'{{ scheduling_options }}',
'{{ tags }}',
'{{ third_party_cases }}',
'{{ type }}',
'{{ compliance_signal_options }}' /* required */
RETURNING
data
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: suppressions_affecting_future_rule
  props:
    - name: calculated_fields
      description: |
        Calculated fields. Only allowed for scheduled rules - in other words, when schedulingOptions is also defined.
      value:
        - expression: "{{ expression }}"
          name: "{{ name }}"
    - name: cases
      description: |
        Cases for generating signals.
      value:
        - actions: "{{ actions }}"
          condition: "{{ condition }}"
          name: "{{ name }}"
          notifications: "{{ notifications }}"
          status: "{{ status }}"
    - name: filters
      description: |
        Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules.
      value:
        - action: "{{ action }}"
          query: "{{ query }}"
    - name: group_signals_by
      value:
        - "{{ group_signals_by }}"
      description: |
        Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups.
    - name: has_extended_title
      value: {{ has_extended_title }}
      description: |
        Whether the notifications include the triggering group-by values in their title.
    - name: is_enabled
      value: {{ is_enabled }}
      description: |
        Whether the rule is enabled.
    - name: message
      value: "{{ message }}"
      description: |
        Message for generated signals.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the rule.
    - name: options
      description: |
        Options.
      value:
        anomalyDetectionOptions:
          bucketDuration: {{ bucketDuration }}
          detectionTolerance: {{ detectionTolerance }}
          instantaneousBaseline: {{ instantaneousBaseline }}
          learningDuration: {{ learningDuration }}
          learningPeriodBaseline: {{ learningPeriodBaseline }}
        complianceRuleOptions:
          complexRule: {{ complexRule }}
          regoRule:
            policy: "{{ policy }}"
            resourceTypes:
              - "{{ resourceTypes }}"
          resourceType: "{{ resourceType }}"
        decreaseCriticalityBasedOnEnv: {{ decreaseCriticalityBasedOnEnv }}
        detectionMethod: "{{ detectionMethod }}"
        evaluationWindow: {{ evaluationWindow }}
        hardcodedEvaluatorType: "{{ hardcodedEvaluatorType }}"
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
          stepTransitions:
            - child: "{{ child }}"
              evaluationWindow: {{ evaluationWindow }}
              parent: "{{ parent }}"
          steps:
            - condition: "{{ condition }}"
              evaluationWindow: {{ evaluationWindow }}
              name: "{{ name }}"
        thirdPartyRuleOptions:
          defaultNotifications:
            - "{{ defaultNotifications }}"
          defaultStatus: "{{ defaultStatus }}"
          rootQueries:
            - groupByFields: "{{ groupByFields }}"
              query: "{{ query }}"
          signalTitleTemplate: "{{ signalTitleTemplate }}"
    - name: queries
      description: |
        Queries for selecting logs which are part of the rule.
      value:
        - aggregation: "{{ aggregation }}"
          customQueryExtension: "{{ customQueryExtension }}"
          dataSource: "{{ dataSource }}"
          distinctFields: "{{ distinctFields }}"
          groupByFields: "{{ groupByFields }}"
          hasOptionalGroupByFields: {{ hasOptionalGroupByFields }}
          index: "{{ index }}"
          indexes: "{{ indexes }}"
          metric: "{{ metric }}"
          metrics: "{{ metrics }}"
          name: "{{ name }}"
          query: "{{ query }}"
    - name: reference_tables
      description: |
        Reference tables for the rule.
      value:
        - checkPresence: {{ checkPresence }}
          columnName: "{{ columnName }}"
          logFieldPath: "{{ logFieldPath }}"
          ruleQueryName: "{{ ruleQueryName }}"
          tableName: "{{ tableName }}"
    - name: scheduling_options
      description: |
        Options for scheduled rules. When this field is present, the rule runs based on the schedule. When absent, it runs real-time on ingested logs.
      value:
        rrule: "{{ rrule }}"
        start: "{{ start }}"
        timezone: "{{ timezone }}"
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        Tags for generated signals.
    - name: third_party_cases
      description: |
        Cases for generating signals from third-party rules. Only available for third-party rules.
      value:
        - name: "{{ name }}"
          notifications: "{{ notifications }}"
          query: "{{ query }}"
          status: "{{ status }}"
    - name: type
      value: "{{ type }}"
      description: |
        The rule type.
      valid_values: ['api_security', 'application_security', 'log_detection', 'workload_activity', 'workload_security']
    - name: compliance_signal_options
      description: |
        How to generate compliance signals. Useful for cloud_configuration rules only.
      value:
        defaultActivationStatus: {{ defaultActivationStatus }}
        defaultGroupByFields:
          - "{{ defaultGroupByFields }}"
        userActivationStatus: {{ userActivationStatus }}
        userGroupByFields:
          - "{{ userGroupByFields }}"
`}</CodeBlock>

</TabItem>
</Tabs>
