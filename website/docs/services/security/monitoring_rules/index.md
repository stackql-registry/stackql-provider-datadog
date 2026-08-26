--- 
title: monitoring_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_rules
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

Creates, updates, deletes, gets or lists a <code>monitoring_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.monitoring_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_monitoring_rule"
    values={[
        { label: 'get_security_monitoring_rule', value: 'get_security_monitoring_rule' },
        { label: 'list_security_monitoring_rules', value: 'list_security_monitoring_rules' }
    ]}
>
<TabItem value="get_security_monitoring_rule">

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
    <td>The ID of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_author_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>User ID of the user who created the rule. (wire: creationAuthorId)</td>
</tr>
<tr>
    <td><CopyableCode code="update_author_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>User ID of the user who updated the rule. (wire: updateAuthorId)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_name" /></td>
    <td><code>string</code></td>
    <td>Custom/Overridden name of the rule (used in case of Default rule update). (wire: customName)</td>
</tr>
<tr>
    <td><CopyableCode code="calculated_fields" /></td>
    <td><code>array</code></td>
    <td>Calculated fields. Only allowed for scheduled rules - in other words, when schedulingOptions is also defined. (wire: calculatedFields)</td>
</tr>
<tr>
    <td><CopyableCode code="cases" /></td>
    <td><code>array</code></td>
    <td>Cases for generating signals.</td>
</tr>
<tr>
    <td><CopyableCode code="compliance_signal_options" /></td>
    <td><code>object</code></td>
    <td>How to generate compliance signals. Useful for cloud_configuration rules only. (wire: complianceSignalOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>When the rule was created, timestamp in milliseconds. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_message" /></td>
    <td><code>string</code></td>
    <td>Custom/Overridden message for generated signals (used in case of Default rule update). (wire: customMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="default_tags" /></td>
    <td><code>array</code></td>
    <td>Default Tags for default rules (included in tags) (wire: defaultTags)</td>
</tr>
<tr>
    <td><CopyableCode code="deprecation_date" /></td>
    <td><code>integer (int64)</code></td>
    <td>When the rule will be deprecated, timestamp in milliseconds. (wire: deprecationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>array</code></td>
    <td>Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules.</td>
</tr>
<tr>
    <td><CopyableCode code="group_signals_by" /></td>
    <td><code>array</code></td>
    <td>Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups. (wire: groupSignalsBy)</td>
</tr>
<tr>
    <td><CopyableCode code="has_extended_title" /></td>
    <td><code>boolean</code></td>
    <td>Whether the notifications include the triggering group-by values in their title. (wire: hasExtendedTitle)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule is included by default. (wire: isDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="is_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule has been deleted. (wire: isDeleted)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule is enabled. (wire: isEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Message for generated signals.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Options.</td>
</tr>
<tr>
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>Queries for selecting logs which are part of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="reference_tables" /></td>
    <td><code>array</code></td>
    <td>Reference tables for the rule. (wire: referenceTables)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduling_options" /></td>
    <td><code>object</code></td>
    <td>Options for scheduled rules. When this field is present, the rule runs based on the schedule. When absent, it runs real-time on ingested logs. (wire: schedulingOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags for generated signals.</td>
</tr>
<tr>
    <td><CopyableCode code="third_party_cases" /></td>
    <td><code>array</code></td>
    <td>Cases for generating signals from third-party rules. Only available for third-party rules. (wire: thirdPartyCases)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The rule type. (log_detection, infrastructure_configuration, workload_security, cloud_configuration, application_security, api_security, workload_activity)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date the rule was last updated, in milliseconds. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the rule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_monitoring_rules">

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
    <td>The ID of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_author_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>User ID of the user who created the rule. (wire: creationAuthorId)</td>
</tr>
<tr>
    <td><CopyableCode code="update_author_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>User ID of the user who updated the rule. (wire: updateAuthorId)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_name" /></td>
    <td><code>string</code></td>
    <td>Custom/Overridden name of the rule (used in case of Default rule update). (wire: customName)</td>
</tr>
<tr>
    <td><CopyableCode code="calculated_fields" /></td>
    <td><code>array</code></td>
    <td>Calculated fields. Only allowed for scheduled rules - in other words, when schedulingOptions is also defined. (wire: calculatedFields)</td>
</tr>
<tr>
    <td><CopyableCode code="cases" /></td>
    <td><code>array</code></td>
    <td>Cases for generating signals.</td>
</tr>
<tr>
    <td><CopyableCode code="compliance_signal_options" /></td>
    <td><code>object</code></td>
    <td>How to generate compliance signals. Useful for cloud_configuration rules only. (wire: complianceSignalOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>When the rule was created, timestamp in milliseconds. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_message" /></td>
    <td><code>string</code></td>
    <td>Custom/Overridden message for generated signals (used in case of Default rule update). (wire: customMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="default_tags" /></td>
    <td><code>array</code></td>
    <td>Default Tags for default rules (included in tags) (wire: defaultTags)</td>
</tr>
<tr>
    <td><CopyableCode code="deprecation_date" /></td>
    <td><code>integer (int64)</code></td>
    <td>When the rule will be deprecated, timestamp in milliseconds. (wire: deprecationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="filters" /></td>
    <td><code>array</code></td>
    <td>Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules.</td>
</tr>
<tr>
    <td><CopyableCode code="group_signals_by" /></td>
    <td><code>array</code></td>
    <td>Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups. (wire: groupSignalsBy)</td>
</tr>
<tr>
    <td><CopyableCode code="has_extended_title" /></td>
    <td><code>boolean</code></td>
    <td>Whether the notifications include the triggering group-by values in their title. (wire: hasExtendedTitle)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule is included by default. (wire: isDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="is_deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule has been deleted. (wire: isDeleted)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule is enabled. (wire: isEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Message for generated signals.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Options.</td>
</tr>
<tr>
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>Queries for selecting logs which are part of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="reference_tables" /></td>
    <td><code>array</code></td>
    <td>Reference tables for the rule. (wire: referenceTables)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduling_options" /></td>
    <td><code>object</code></td>
    <td>Options for scheduled rules. When this field is present, the rule runs based on the schedule. When absent, it runs real-time on ingested logs. (wire: schedulingOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags for generated signals.</td>
</tr>
<tr>
    <td><CopyableCode code="third_party_cases" /></td>
    <td><code>array</code></td>
    <td>Cases for generating signals from third-party rules. Only available for third-party rules. (wire: thirdPartyCases)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The rule type. (log_detection, infrastructure_configuration, workload_security, cloud_configuration, application_security, api_security, workload_activity)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date the rule was last updated, in milliseconds. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the rule.</td>
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
    <td><a href="#get_security_monitoring_rule"><CopyableCode code="get_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Get a rule's details.</td>
</tr>
<tr>
    <td><a href="#list_security_monitoring_rules"><CopyableCode code="list_security_monitoring_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[size]"><code>page[size]</code></a>, <a href="#parameter-page[number]"><code>page[number]</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>List rules.</td>
</tr>
<tr>
    <td><a href="#create_security_monitoring_rule"><CopyableCode code="create_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-is_enabled"><code>is_enabled</code></a>, <a href="#parameter-queries"><code>queries</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-cases"><code>cases</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-compliance_signal_options"><code>compliance_signal_options</code></a></td>
    <td></td>
    <td>Create a detection rule.</td>
</tr>
<tr>
    <td><a href="#update_security_monitoring_rule"><CopyableCode code="update_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Update an existing rule. When updating `cases`, `queries` or `options`, the whole field&lt;br /&gt;must be included. For example, when modifying a query all queries must be included.&lt;br /&gt;Default rules can only be updated to be enabled, to change notifications, or to update&lt;br /&gt;the tags (default tags cannot be removed).</td>
</tr>
<tr>
    <td><a href="#delete_security_monitoring_rule"><CopyableCode code="delete_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Delete an existing rule. Default rules cannot be deleted.</td>
</tr>
<tr>
    <td><a href="#bulk_delete_security_monitoring_rules"><CopyableCode code="bulk_delete_security_monitoring_rules" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete multiple security monitoring rules in a single request. Default rules cannot be deleted.</td>
</tr>
<tr>
    <td><a href="#convert_security_monitoring_rule_from_jsonto_terraform"><CopyableCode code="convert_security_monitoring_rule_from_jsonto_terraform" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-isEnabled"><code>isEnabled</code></a>, <a href="#parameter-queries"><code>queries</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-cases"><code>cases</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Convert a rule that doesn't (yet) exist from JSON to Terraform for Datadog provider&lt;br /&gt;resource `datadog_security_monitoring_rule`. You can do so for the following rule types:&lt;br /&gt;- App and API Protection&lt;br /&gt;- Cloud SIEM (log detection and signal correlation)&lt;br /&gt;- Workload Protection&lt;br /&gt;&lt;br /&gt;You can convert Cloud Security configuration rules using Terraform's &#91;Datadog Cloud Configuration Rule resource&#93;(https:​//registry.terraform.io/providers/DataDog/datadog/latest/docs/resources/cloud_configuration_rule).</td>
</tr>
<tr>
    <td><a href="#test_security_monitoring_rule"><CopyableCode code="test_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Test a rule.</td>
</tr>
<tr>
    <td><a href="#validate_security_monitoring_rule"><CopyableCode code="validate_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-isEnabled"><code>isEnabled</code></a>, <a href="#parameter-queries"><code>queries</code></a>, <a href="#parameter-options"><code>options</code></a>, <a href="#parameter-cases"><code>cases</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-complianceSignalOptions"><code>complianceSignalOptions</code></a></td>
    <td></td>
    <td>Validate a detection rule.</td>
</tr>
<tr>
    <td><a href="#convert_existing_security_monitoring_rule"><CopyableCode code="convert_existing_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Convert an existing rule from JSON to Terraform for Datadog provider&lt;br /&gt;resource `datadog_security_monitoring_rule`. You can do so for the following rule types:&lt;br /&gt;- App and API Protection&lt;br /&gt;- Cloud SIEM (log detection and signal correlation)&lt;br /&gt;- Workload Protection&lt;br /&gt;&lt;br /&gt;You can convert Cloud Security configuration rules using Terraform's &#91;Datadog Cloud Configuration Rule resource&#93;(https:​//registry.terraform.io/providers/DataDog/datadog/latest/docs/resources/cloud_configuration_rule).</td>
</tr>
<tr>
    <td><a href="#restore_security_monitoring_rule"><CopyableCode code="restore_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Restores a custom detection rule to a previously saved historical version.&lt;br /&gt;Only custom rules can be restored. Default and partner rules return 400.&lt;br /&gt;The restore creates a new version entry; it does not overwrite history.</td>
</tr>
<tr>
    <td><a href="#test_existing_security_monitoring_rule"><CopyableCode code="test_existing_security_monitoring_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a></td>
    <td></td>
    <td>Test an existing rule.</td>
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
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The historical version number of the rule.</td>
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
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>A search query to filter security rules. You can filter by attributes such as `type`, `source`, `tags`. (example: type:signal_correlation source:cloudtrail)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Attribute used to sort rules. Prefix with `-` to sort in descending order.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_monitoring_rule"
    values={[
        { label: 'get_security_monitoring_rule', value: 'get_security_monitoring_rule' },
        { label: 'list_security_monitoring_rules', value: 'list_security_monitoring_rules' }
    ]}
>
<TabItem value="get_security_monitoring_rule">

Get a rule's details.

```sql
SELECT
id,
name,
creation_author_id,
update_author_id,
custom_name,
calculated_fields,
cases,
compliance_signal_options,
created_at,
custom_message,
default_tags,
deprecation_date,
filters,
group_signals_by,
has_extended_title,
is_default,
is_deleted,
is_enabled,
message,
options,
queries,
reference_tables,
scheduling_options,
tags,
third_party_cases,
type,
updated_at,
version
FROM datadog.security.monitoring_rules
WHERE rule_id = '{{ rule_id }}' -- required
;
```
</TabItem>
<TabItem value="list_security_monitoring_rules">

List rules.

```sql
SELECT
id,
name,
creation_author_id,
update_author_id,
custom_name,
calculated_fields,
cases,
compliance_signal_options,
created_at,
custom_message,
default_tags,
deprecation_date,
filters,
group_signals_by,
has_extended_title,
is_default,
is_deleted,
is_enabled,
message,
options,
queries,
reference_tables,
scheduling_options,
tags,
third_party_cases,
type,
updated_at,
version
FROM datadog.security.monitoring_rules
WHERE page[size] = '{{ page[size] }}'
AND page[number] = '{{ page[number] }}'
AND query = '{{ query }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_monitoring_rule"
    values={[
        { label: 'create_security_monitoring_rule', value: 'create_security_monitoring_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_monitoring_rule">

Create a detection rule.

```sql
INSERT INTO datadog.security.monitoring_rules (
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
id,
name,
creation_author_id,
update_author_id,
custom_name,
calculated_fields,
cases,
compliance_signal_options,
created_at,
custom_message,
default_tags,
deprecation_date,
filters,
group_signals_by,
has_extended_title,
is_default,
is_deleted,
is_enabled,
message,
options,
queries,
reference_tables,
scheduling_options,
tags,
third_party_cases,
type,
updated_at,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitoring_rules
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


## `REPLACE` examples

<Tabs
    defaultValue="update_security_monitoring_rule"
    values={[
        { label: 'update_security_monitoring_rule', value: 'update_security_monitoring_rule' }
    ]}
>
<TabItem value="update_security_monitoring_rule">

Update an existing rule. When updating `cases`, `queries` or `options`, the whole field&lt;br /&gt;must be included. For example, when modifying a query all queries must be included.&lt;br /&gt;Default rules can only be updated to be enabled, to change notifications, or to update&lt;br /&gt;the tags (default tags cannot be removed).

```sql
REPLACE datadog.security.monitoring_rules
SET 
calculated_fields = '{{ calculated_fields }}',
cases = '{{ cases }}',
compliance_signal_options = '{{ compliance_signal_options }}',
custom_message = '{{ custom_message }}',
custom_name = '{{ custom_name }}',
filters = '{{ filters }}',
group_signals_by = '{{ group_signals_by }}',
has_extended_title = {{ has_extended_title }},
is_enabled = {{ is_enabled }},
message = '{{ message }}',
name = '{{ name }}',
options = '{{ options }}',
queries = '{{ queries }}',
reference_tables = '{{ reference_tables }}',
scheduling_options = '{{ scheduling_options }}',
tags = '{{ tags }}',
third_party_cases = '{{ third_party_cases }}',
version = {{ version }}
WHERE 
rule_id = '{{ rule_id }}' --required
RETURNING
id,
name,
creation_author_id,
update_author_id,
custom_name,
calculated_fields,
cases,
compliance_signal_options,
created_at,
custom_message,
default_tags,
deprecation_date,
filters,
group_signals_by,
has_extended_title,
is_default,
is_deleted,
is_enabled,
message,
options,
queries,
reference_tables,
scheduling_options,
tags,
third_party_cases,
type,
updated_at,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_monitoring_rule"
    values={[
        { label: 'delete_security_monitoring_rule', value: 'delete_security_monitoring_rule' },
        { label: 'bulk_delete_security_monitoring_rules', value: 'bulk_delete_security_monitoring_rules' }
    ]}
>
<TabItem value="delete_security_monitoring_rule">

Delete an existing rule. Default rules cannot be deleted.

```sql
DELETE FROM datadog.security.monitoring_rules
WHERE rule_id = '{{ rule_id }}' --required
;
```
</TabItem>
<TabItem value="bulk_delete_security_monitoring_rules">

Delete multiple security monitoring rules in a single request. Default rules cannot be deleted.

```sql
DELETE FROM datadog.security.monitoring_rules
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="convert_security_monitoring_rule_from_jsonto_terraform"
    values={[
        { label: 'convert_security_monitoring_rule_from_jsonto_terraform', value: 'convert_security_monitoring_rule_from_jsonto_terraform' },
        { label: 'test_security_monitoring_rule', value: 'test_security_monitoring_rule' },
        { label: 'validate_security_monitoring_rule', value: 'validate_security_monitoring_rule' },
        { label: 'convert_existing_security_monitoring_rule', value: 'convert_existing_security_monitoring_rule' },
        { label: 'restore_security_monitoring_rule', value: 'restore_security_monitoring_rule' },
        { label: 'test_existing_security_monitoring_rule', value: 'test_existing_security_monitoring_rule' }
    ]}
>
<TabItem value="convert_security_monitoring_rule_from_jsonto_terraform">

Convert a rule that doesn't (yet) exist from JSON to Terraform for Datadog provider&lt;br /&gt;resource `datadog_security_monitoring_rule`. You can do so for the following rule types:&lt;br /&gt;- App and API Protection&lt;br /&gt;- Cloud SIEM (log detection and signal correlation)&lt;br /&gt;- Workload Protection&lt;br /&gt;&lt;br /&gt;You can convert Cloud Security configuration rules using Terraform's &#91;Datadog Cloud Configuration Rule resource&#93;(https:​//registry.terraform.io/providers/DataDog/datadog/latest/docs/resources/cloud_configuration_rule).

```sql
EXEC datadog.security.monitoring_rules.convert_security_monitoring_rule_from_jsonto_terraform 
@@json=
'{
"calculatedFields": "{{ calculatedFields }}", 
"cases": "{{ cases }}", 
"customMessage": "{{ customMessage }}", 
"customName": "{{ customName }}", 
"filters": "{{ filters }}", 
"groupSignalsBy": "{{ groupSignalsBy }}", 
"hasExtendedTitle": {{ hasExtendedTitle }}, 
"isEnabled": {{ isEnabled }}, 
"message": "{{ message }}", 
"name": "{{ name }}", 
"options": "{{ options }}", 
"queries": "{{ queries }}", 
"referenceTables": "{{ referenceTables }}", 
"schedulingOptions": "{{ schedulingOptions }}", 
"tags": "{{ tags }}", 
"thirdPartyCases": "{{ thirdPartyCases }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="test_security_monitoring_rule">

Test a rule.

```sql
EXEC datadog.security.monitoring_rules.test_security_monitoring_rule 
@@json=
'{
"rule": "{{ rule }}", 
"ruleQueryPayloads": "{{ ruleQueryPayloads }}"
}'
;
```
</TabItem>
<TabItem value="validate_security_monitoring_rule">

Validate a detection rule.

```sql
EXEC datadog.security.monitoring_rules.validate_security_monitoring_rule 
@@json=
'{
"calculatedFields": "{{ calculatedFields }}", 
"cases": "{{ cases }}", 
"customMessage": "{{ customMessage }}", 
"customName": "{{ customName }}", 
"filters": "{{ filters }}", 
"groupSignalsBy": "{{ groupSignalsBy }}", 
"hasExtendedTitle": {{ hasExtendedTitle }}, 
"isEnabled": {{ isEnabled }}, 
"message": "{{ message }}", 
"name": "{{ name }}", 
"options": "{{ options }}", 
"queries": "{{ queries }}", 
"referenceTables": "{{ referenceTables }}", 
"schedulingOptions": "{{ schedulingOptions }}", 
"tags": "{{ tags }}", 
"thirdPartyCases": "{{ thirdPartyCases }}", 
"type": "{{ type }}", 
"complianceSignalOptions": "{{ complianceSignalOptions }}"
}'
;
```
</TabItem>
<TabItem value="convert_existing_security_monitoring_rule">

Convert an existing rule from JSON to Terraform for Datadog provider&lt;br /&gt;resource `datadog_security_monitoring_rule`. You can do so for the following rule types:&lt;br /&gt;- App and API Protection&lt;br /&gt;- Cloud SIEM (log detection and signal correlation)&lt;br /&gt;- Workload Protection&lt;br /&gt;&lt;br /&gt;You can convert Cloud Security configuration rules using Terraform's &#91;Datadog Cloud Configuration Rule resource&#93;(https:​//registry.terraform.io/providers/DataDog/datadog/latest/docs/resources/cloud_configuration_rule).

```sql
EXEC datadog.security.monitoring_rules.convert_existing_security_monitoring_rule 
@rule_id='{{ rule_id }}' --required 
;
```
</TabItem>
<TabItem value="restore_security_monitoring_rule">

Restores a custom detection rule to a previously saved historical version.&lt;br /&gt;Only custom rules can be restored. Default and partner rules return 400.&lt;br /&gt;The restore creates a new version entry; it does not overwrite history.

```sql
EXEC datadog.security.monitoring_rules.restore_security_monitoring_rule 
@rule_id='{{ rule_id }}' --required, 
@version='{{ version }}' --required 
;
```
</TabItem>
<TabItem value="test_existing_security_monitoring_rule">

Test an existing rule.

```sql
EXEC datadog.security.monitoring_rules.test_existing_security_monitoring_rule 
@rule_id='{{ rule_id }}' --required, 
@@json=
'{
"rule": "{{ rule }}", 
"ruleQueryPayloads": "{{ ruleQueryPayloads }}"
}'
;
```
</TabItem>
</Tabs>
