--- 
title: usage_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_summary
  - organization
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

Creates, updates, deletes, gets or lists a <code>usage_summary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_summary" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.organization.usage_summary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_summary"
    values={[
        { label: 'get_usage_summary', value: 'get_usage_summary' }
    ]}
>
<TabItem value="get_usage_summary">

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
    <td><CopyableCode code="agent_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ai_credits_agent_builder_ai_credits_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all AI credits used by Agent Builder over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ai_credits_bits_assistant_ai_credits_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all AI credits used by Bits AI Assistant over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ai_credits_bits_dev_ai_credits_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all AI credits used by Bits AI Dev over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ai_credits_bits_sre_ai_credits_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all AI credits used by Bits AI SRE over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ai_credits_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all AI credits over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="apm_azure_app_service_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="apm_devsecops_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all APM DevSecOps hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="apm_enterprise_standalone_hosts_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct standalone Enterprise hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="apm_fargate_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all APM ECS Fargate tasks over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="apm_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="apm_pro_standalone_hosts_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct standalone Pro hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="appsec_fargate_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="asm_serverless_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Application Security Monitoring Serverless invocations over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="audit_logs_lines_indexed_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of audit logs lines indexed over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="audit_trail_enabled_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the number of organizations that had Audit Trail enabled in the current date.</td>
</tr>
<tr>
    <td><CopyableCode code="audit_trail_event_forwarding_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Audit Trail event forwarding events over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="avg_profiled_fargate_tasks" /></td>
    <td><code>integer (int64)</code></td>
    <td>The average total count for Fargate Container Profiler over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_lambda_func_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of the number of functions that executed 1 or more times each hour in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_lambda_invocations_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all AWS Lambda invocations over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="azure_app_service_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Azure app services over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="billable_ingested_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all log bytes ingested over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="bits_ai_investigations_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Bits AI Investigations over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="browser_rum_lite_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="browser_rum_replay_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser replay sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="browser_rum_units_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_anthropic_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Anthropic cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_aws_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of AWS cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_azure_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Azure cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_confluent_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Confluent cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_databricks_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Databricks cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_elastic_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Elastic cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_fastly_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Fastly cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_gcp_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of GCP cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_github_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of GitHub cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_mongodb_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of MongoDB cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_oci_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of OCI cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_openai_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of OpenAI cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_snowflake_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Snowflake cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_spend_monitored_ent_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of the amount of cloud spend monitored for Enterprise over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_spend_monitored_pro_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of the amount of cloud spend monitored for Pro over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ccm_twilio_spend_last" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the last value of Twilio cloud spend monitored over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ci_pipeline_indexed_spans_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all CI pipeline indexed spans over all hours in the current month for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ci_test_indexed_spans_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all CI test indexed spans over all hours in the current month for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ci_visibility_itr_committers_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current month for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ci_visibility_pipeline_committers_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of all CI visibility pipeline committers over all hours in the current month for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ci_visibility_test_committers_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of all CI visibility test committers over all hours in the current month for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_cost_management_aws_host_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Host count average of Cloud Cost Management for AWS for the given date and given organization.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_cost_management_azure_host_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Host count average of Cloud Cost Management for Azure for the given date and given organization.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_cost_management_gcp_host_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Host count average of Cloud Cost Management for GCP for the given date and given organization.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_cost_management_host_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Host count average of Cloud Cost Management for all cloud providers for the given date and given organization.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_cost_management_oci_host_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Average host count for Cloud Cost Management on OCI for the given date and organization.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_siem_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Cloud Security Information and Event Management events over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_siem_indexed_logs_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Cloud SIEM Indexed Logs over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="code_analysis_sa_committers_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of all Static Analysis committers over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="code_analysis_sca_committers_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of all static Software Composition Analysis committers over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="code_security_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Code Security hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="container_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all distinct containers over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="container_excl_agent_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of containers without the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="container_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_container_enterprise_compliance_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Cloud Security Management Enterprise compliance containers over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_container_enterprise_cws_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Cloud Security Management Enterprise Cloud Workload Security containers over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_container_enterprise_total_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Cloud Security Management Enterprise containers over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_aas_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise Azure app services hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_aws_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise AWS hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_azure_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise Azure hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_compliance_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise compliance hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_cws_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise Cloud Workload Security hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_gcp_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise GCP hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_oci_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise OCI hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_enterprise_total_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Enterprise hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_pro_hosts_agentless_scanners_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Cloud Security Management Pro Agentless scanner hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_pro_hosts_agentless_scanners_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro Agentless scanner hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="csm_host_pro_oci_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro OCI hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_aas_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_aws_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_azure_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_container_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Cloud Security Management Pro containers over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_container_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of Cloud Security Management Pro containers over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_gcp_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_hosts_agentless_scanners_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Cloud Security Management Pro Agentless scanner hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cspm_hosts_agentless_scanners_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Security Management Pro Agentless scanner hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_ts_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of distinct custom metrics over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cws_container_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cws_fargate_task_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all distinct Cloud Workload Security Fargate tasks over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="cws_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="data_jobs_monitoring_host_hr_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Data Jobs Monitoring hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="data_stream_monitoring_host_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Data Streams Monitoring hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="data_stream_monitoring_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Data Streams Monitoring hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date for the usage.</td>
</tr>
<tr>
    <td><CopyableCode code="dbm_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Database Monitoring hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="dbm_queries_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all normalized Database Monitoring queries over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="do_jobs_monitoring_orchestrators_job_hours_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all orchestrator job hours over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_agent_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts with the Datadog Agent over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_alibaba_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts on Alibaba over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_aws_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts on AWS over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_azure_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts on Azure over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_basic_infra_basic_agent_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts for Basic tier with the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_basic_infra_basic_vsphere_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts for Basic tier on vSphere over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_basic_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts for Basic tier over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_ent_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts for Enterprise over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_gcp_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts on GCP over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_heroku_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts on Heroku over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_only_aas_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts with only Azure App Services over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_only_vsphere_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts with only vSphere over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_opentelemetry_apm_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_opentelemetry_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_pro_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts for Pro over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_proplus_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ephemeral infrastructure hosts for Pro Plus over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="eph_infra_host_proxmox_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all ephemeral infrastructure hosts for Proxmox over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="error_tracking_apm_error_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Error Tracking APM error events over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="error_tracking_error_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Error Tracking error events over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="error_tracking_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Error Tracking events over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="error_tracking_rum_error_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Error Tracking RUM error events over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="event_management_correlation_correlated_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Event Management correlated events over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="event_management_correlation_correlated_related_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Event Management correlated related events over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="event_management_correlation_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Event Management correlations over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="fargate_container_profiler_profiling_fargate_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>The average number of Profiling Fargate tasks over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="fargate_container_profiler_profiling_fargate_eks_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>The average number of Profiling Fargate Elastic Kubernetes Service tasks over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="fargate_tasks_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-watermark of all Fargate tasks over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="fargate_tasks_count_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all Fargate tasks over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_flags_config_requests_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Feature Flags Client-Side SDK config requests over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_compute_large_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Compute Large Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_compute_medium_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Compute Medium Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_compute_small_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Compute Small Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_compute_xlarge_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Compute Extra Large Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_compute_xsmall_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Compute Extra Small Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_starter_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Starter Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_starter_storage_index_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Starter Storage Index Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_logs_starter_storage_retention_adjustment_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Flex Logs Starter Storage Retention Adjustment Instances over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="flex_stored_logs_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all Flex Stored Logs over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="forwarding_events_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all log bytes forwarded over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="gcp_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="heroku_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_management_monthly_active_users_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of incident management monthly active users over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_management_seats_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of Incident Management seats over all hours on the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="indexed_events_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all log events indexed over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="indexed_points_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all indexed custom metrics points over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all Infrastructure vCPU cores over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_agent_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default Infrastructure host vCPU cores reported by the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_agent_basic_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default basic Infrastructure host vCPU cores reported by the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_agent_basic_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default basic Infrastructure host vCPU cores reported by the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_agent_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default Infrastructure host vCPU cores reported by the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_aws_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default Infrastructure host vCPU cores on AWS over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_aws_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default Infrastructure host vCPU cores on AWS over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_azure_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default Infrastructure host vCPU cores on Azure over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_azure_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default Infrastructure host vCPU cores on Azure over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_gcp_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default Infrastructure host vCPU cores on GCP over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_gcp_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default Infrastructure host vCPU cores on GCP over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_nutanix_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default Infrastructure host vCPU cores on Nutanix over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_nutanix_basic_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default basic Infrastructure host vCPU cores on Nutanix over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_nutanix_basic_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default basic Infrastructure host vCPU cores on Nutanix over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_nutanix_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default Infrastructure host vCPU cores on Nutanix over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_opentelemetry_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all default Infrastructure host vCPU cores reported by OpenTelemetry over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_default_infra_host_vcpu_opentelemetry_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all default Infrastructure host vCPU cores reported by OpenTelemetry over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_agent_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all observed Infrastructure host vCPU cores reported by the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_agent_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all observed Infrastructure host vCPU cores reported by the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_aws_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all observed Infrastructure host vCPU cores on AWS over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_aws_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all observed Infrastructure host vCPU cores on AWS over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_azure_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all observed Infrastructure host vCPU cores on Azure over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_azure_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all observed Infrastructure host vCPU cores on Azure over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_gcp_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all observed Infrastructure host vCPU cores on GCP over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_gcp_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all observed Infrastructure host vCPU cores on GCP over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_nutanix_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all observed Infrastructure host vCPU cores on Nutanix over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_nutanix_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all observed Infrastructure host vCPU cores on Nutanix over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_opentelemetry_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all observed Infrastructure host vCPU cores reported by OpenTelemetry over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_observed_infra_host_vcpu_opentelemetry_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all observed Infrastructure host vCPU cores reported by OpenTelemetry over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_cpu_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Infrastructure vCPU cores over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_edge_monitoring_devices_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Edge Devices Monitoring devices over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_host_basic_infra_basic_agent_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct infrastructure hosts for Basic tier with the Datadog Agent over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_host_basic_infra_basic_vsphere_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct infrastructure hosts for Basic tier on vSphere over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_host_basic_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct infrastructure hosts for Basic tier over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="infra_storage_mgmt_objects_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of storage management objects over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ingest_points_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ingested custom metrics points over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="ingested_events_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all log bytes ingested over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="iot_apm_host_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Application Performance Monitoring IoT hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="iot_apm_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Application Performance Monitoring IoT hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="iot_device_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all IoT devices over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="iot_device_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all IoT devices over all hours in the current date all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="llm_observability_15day_retention_spans_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Agent Observability 15-day retention spans over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="llm_observability_30day_retention_spans_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Agent Observability 30-day retention spans over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="llm_observability_60day_retention_spans_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Agent Observability 60-day retention spans over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="llm_observability_90day_retention_spans_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Agent Observability 90-day retention spans over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="llm_observability_min_spend_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all Agent observability minimum spend over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="llm_observability_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all Agent observability sessions over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="logs_archive_search_gb_scanned_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Logs Archive Search scanned data over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_names_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all custom metric names over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_lite_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_session_count_android_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM sessions on Android over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_session_count_flutter_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM sessions on Flutter over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_session_count_ios_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM sessions on iOS over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_session_count_reactnative_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM sessions on React Native over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_session_count_roku_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM sessions on Roku over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_rum_units_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="ndm_netflow_events_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="netflow_indexed_events_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Network flows indexed over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="network_device_wireless_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Network Device Monitoring wireless devices over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="network_path_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Network Path scheduled tests over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="npm_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all distinct Cloud Network Monitoring hosts (formerly known as Network hosts) over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="observability_pipelines_bytes_processed_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all observability pipelines bytes processed over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_host_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Oracle Cloud Infrastructure hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="oci_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Oracle Cloud Infrastructure hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="on_call_seat_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of On-Call seats over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="online_archive_events_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all online archived events over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="opentelemetry_apm_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="opentelemetry_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="orgs" /></td>
    <td><code>array</code></td>
    <td>Organizations associated with a user.</td>
</tr>
<tr>
    <td><CopyableCode code="product_analytics_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all product analytics sessions over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="profiling_aas_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all profiled Azure app services over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="profiling_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all profiled hosts over all hours within the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="proxmox_host_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all Proxmox hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="proxmox_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>99th percentile of all Proxmox hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="published_app_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of all published applications over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_browser_and_mobile_session_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_browser_legacy_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser RUM legacy sessions over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_browser_lite_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser RUM lite sessions over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_browser_replay_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser RUM Session Replay counts over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_indexed_sessions_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all RUM indexed sessions over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_ingested_sessions_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all RUM ingested sessions over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_lite_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all RUM lite sessions (browser and mobile) over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_legacy_session_count_android_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM legacy sessions on Android over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_legacy_session_count_flutter_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM legacy Sessions on Flutter over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_legacy_session_count_ios_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM legacy sessions on iOS over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_legacy_session_count_reactnative_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM legacy sessions on React Native over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_legacy_session_count_roku_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM legacy sessions on Roku over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_lite_session_count_android_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM lite sessions on Android over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_lite_session_count_flutter_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM lite sessions on Flutter over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_lite_session_count_ios_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM lite sessions on iOS over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_lite_session_count_kotlinmultiplatform_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM lite sessions on Kotlin Multiplatform over all hours within the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_lite_session_count_reactnative_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM lite sessions on React Native over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_lite_session_count_roku_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM lite sessions on Roku over all hours within the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_lite_session_count_unity_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM lite sessions on Unity over all hours within the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_replay_session_count_android_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM replay sessions on Android over all hours within the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_replay_session_count_ios_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM replay sessions on iOS over all hours within the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_replay_session_count_kotlinmultiplatform_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM replay sessions on Kotlin Multiplatform over all hours within the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_mobile_replay_session_count_reactnative_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all mobile RUM replay sessions on React Native over all hours within the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_replay_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all RUM Session Replay counts over all hours in the current date for all organizations (To be introduced on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser RUM lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="rum_session_replay_add_on_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all RUM session replay add-on sessions over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_total_session_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of RUM sessions (browser and mobile) over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="rum_units_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all browser and mobile RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).</td>
</tr>
<tr>
    <td><CopyableCode code="sca_fargate_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="sca_fargate_count_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of the high-water marks of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="sds_apm_scanned_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all APM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="sds_events_scanned_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all event stream events bytes scanned with sensitive data scanner over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="sds_logs_scanned_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="sds_rum_scanned_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all RUM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="sds_total_scanned_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_apm_azure_appservice_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for Azure App Service instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_apm_azure_azurefunction_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Function instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_apm_azure_containerapp_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Container App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_apm_fargate_ecs_tasks_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for Fargate Elastic Container Service tasks for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_apm_gcp_cloudfunction_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Function instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_apm_gcp_cloudrun_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Run instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_apm_gcp_gke_autopilot_pods_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for Google Kubernetes Engine Autopilot pods for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_excl_fargate_apm_azure_appservice_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure App Service instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_excl_fargate_apm_azure_azurefunction_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Function instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_excl_fargate_apm_azure_containerapp_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Container App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_excl_fargate_apm_gcp_cloudfunction_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Function instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_excl_fargate_apm_gcp_cloudrun_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Run instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_excl_fargate_apm_gcp_gke_autopilot_pods_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Kubernetes Engine Autopilot pods for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_apm_excl_fargate_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_azure_container_app_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Azure Container App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_azure_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Azure for the given date and given org.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_azure_function_app_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Azure Function App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_azure_web_app_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Azure Web App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_dsm_fargate_tasks_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of DSM Fargate ECS tasks monitored under Serverless Apps DSM for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_ecs_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Elastic Container Service for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_eks_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Elastic Kubernetes Service for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_excl_fargate_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps excluding Fargate for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_excl_fargate_azure_container_app_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps excluding Fargate for Azure Container App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_excl_fargate_azure_function_app_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps excluding Fargate for Azure Function App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_excl_fargate_azure_web_app_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps excluding Fargate for Azure Web App instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_excl_fargate_google_cloud_functions_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Functions instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_excl_fargate_google_cloud_run_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Run instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_excl_fargate_infra_gcp_gke_autopilot_pods_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps excluding Fargate for Google Kubernetes Engine Autopilot pods for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_google_cloud_functions_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Google Cloud Platform Cloud Functions instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_google_cloud_run_instances_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Google Cloud Platform Cloud Run instances for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_google_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Google Cloud for the given date and given org.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_infra_gcp_gke_autopilot_pods_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Google Kubernetes Engine Autopilot pods for the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_apps_total_count_avg" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the average number of Serverless Apps for Azure and Google Cloud for the given date and given org.</td>
</tr>
<tr>
    <td><CopyableCode code="siem_12mo_retention_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of Cloud SIEM Indexed Logs (12-month retention) over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="siem_6mo_retention_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of Cloud SIEM Indexed Logs (6-month retention) over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="siem_analyzed_logs_add_on_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all log events analyzed by Cloud SIEM over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="snmp_device_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Network Device Monitoring devices over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="snmp_device_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Network Device Monitoring devices over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="synthetics_browser_check_calls_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="synthetics_check_calls_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="synthetics_mobile_test_runs_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Synthetic mobile application tests over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="synthetics_parallel_testing_max_slots_hwm" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the high-water mark of used synthetics parallel testing slots over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="trace_search_indexed_events_count_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="twol_ingested_events_bytes_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the sum of all ingested APM span bytes over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="universal_service_monitoring_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all universal service management hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="vsphere_host_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all vSphere hosts over all hours in the current date for all organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="vuln_management_host_count_top99p" /></td>
    <td><code>integer (int64)</code></td>
    <td>Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current date for the given org.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_executions_usage_sum" /></td>
    <td><code>integer (int64)</code></td>
    <td>Sum of all workflows executed over all hours in the current date for all organizations.</td>
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
    <td><a href="#get_usage_summary"><CopyableCode code="get_usage_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-start_month"><code>start_month</code></a></td>
    <td><a href="#parameter-end_month"><code>end_month</code></a>, <a href="#parameter-include_org_details"><code>include_org_details</code></a>, <a href="#parameter-include_connected_accounts"><code>include_connected_accounts</code></a></td>
    <td>Get all usage across your account.&lt;br /&gt;&lt;br /&gt;For SDK users only: all fields on `UsageSummaryResponse`, `UsageSummaryDate`, and&lt;br /&gt;`UsageSummaryDateOrg` are accessible through each object's `additionalProperties` map.&lt;br /&gt;Existing typed-field getters are unchanged. New billing dimensions will not have&lt;br /&gt;typed-field getters. Use&lt;br /&gt;&#91;Get available fields for usage summary&#93;(https:​//docs.datadoghq.com/api/latest/usage-metering/get-available-fields-for-usage-summary/)&lt;br /&gt;to enumerate every available key at each response level.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).</td>
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
<tr id="parameter-start_month">
    <td><CopyableCode code="start_month" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to month: `&#91;YYYY-MM&#93;` for usage beginning in this month. Maximum of 15 months ago.</td>
</tr>
<tr id="parameter-end_month">
    <td><CopyableCode code="end_month" /></td>
    <td><code>string (date-time)</code></td>
    <td>Datetime in ISO-8601 format, UTC, precise to month: `&#91;YYYY-MM&#93;` for usage ending this month.</td>
</tr>
<tr id="parameter-include_connected_accounts">
    <td><CopyableCode code="include_connected_accounts" /></td>
    <td><code>boolean</code></td>
    <td>Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.</td>
</tr>
<tr id="parameter-include_org_details">
    <td><CopyableCode code="include_org_details" /></td>
    <td><code>boolean</code></td>
    <td>Include usage summaries for each sub-org.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage_summary"
    values={[
        { label: 'get_usage_summary', value: 'get_usage_summary' }
    ]}
>
<TabItem value="get_usage_summary">

Get all usage across your account.&lt;br /&gt;&lt;br /&gt;For SDK users only: all fields on `UsageSummaryResponse`, `UsageSummaryDate`, and&lt;br /&gt;`UsageSummaryDateOrg` are accessible through each object's `additionalProperties` map.&lt;br /&gt;Existing typed-field getters are unchanged. New billing dimensions will not have&lt;br /&gt;typed-field getters. Use&lt;br /&gt;&#91;Get available fields for usage summary&#93;(https:​//docs.datadoghq.com/api/latest/usage-metering/get-available-fields-for-usage-summary/)&lt;br /&gt;to enumerate every available key at each response level.&lt;br /&gt;&lt;br /&gt;This endpoint is only accessible for &#91;parent-level organizations&#93;(https:​//docs.datadoghq.com/account_management/multi_organization/).

```sql
SELECT
agent_host_top99p,
ai_credits_agent_builder_ai_credits_sum,
ai_credits_bits_assistant_ai_credits_sum,
ai_credits_bits_dev_ai_credits_sum,
ai_credits_bits_sre_ai_credits_sum,
ai_credits_sum,
apm_azure_app_service_host_top99p,
apm_devsecops_host_top99p,
apm_enterprise_standalone_hosts_top99p,
apm_fargate_count_avg,
apm_host_top99p,
apm_pro_standalone_hosts_top99p,
appsec_fargate_count_avg,
asm_serverless_sum,
audit_logs_lines_indexed_sum,
audit_trail_enabled_hwm,
audit_trail_event_forwarding_events_sum,
avg_profiled_fargate_tasks,
aws_host_top99p,
aws_lambda_func_count,
aws_lambda_invocations_sum,
azure_app_service_top99p,
billable_ingested_bytes_sum,
bits_ai_investigations_sum,
browser_rum_lite_session_count_sum,
browser_rum_replay_session_count_sum,
browser_rum_units_sum,
ccm_anthropic_spend_last,
ccm_aws_spend_last,
ccm_azure_spend_last,
ccm_confluent_spend_last,
ccm_databricks_spend_last,
ccm_elastic_spend_last,
ccm_fastly_spend_last,
ccm_gcp_spend_last,
ccm_github_spend_last,
ccm_mongodb_spend_last,
ccm_oci_spend_last,
ccm_openai_spend_last,
ccm_snowflake_spend_last,
ccm_spend_monitored_ent_last,
ccm_spend_monitored_pro_last,
ccm_twilio_spend_last,
ci_pipeline_indexed_spans_sum,
ci_test_indexed_spans_sum,
ci_visibility_itr_committers_hwm,
ci_visibility_pipeline_committers_hwm,
ci_visibility_test_committers_hwm,
cloud_cost_management_aws_host_count_avg,
cloud_cost_management_azure_host_count_avg,
cloud_cost_management_gcp_host_count_avg,
cloud_cost_management_host_count_avg,
cloud_cost_management_oci_host_count_avg,
cloud_siem_events_sum,
cloud_siem_indexed_logs_sum,
code_analysis_sa_committers_hwm,
code_analysis_sca_committers_hwm,
code_security_host_top99p,
container_avg,
container_excl_agent_avg,
container_hwm,
csm_container_enterprise_compliance_count_sum,
csm_container_enterprise_cws_count_sum,
csm_container_enterprise_total_count_sum,
csm_host_enterprise_aas_host_count_top99p,
csm_host_enterprise_aws_host_count_top99p,
csm_host_enterprise_azure_host_count_top99p,
csm_host_enterprise_compliance_host_count_top99p,
csm_host_enterprise_cws_host_count_top99p,
csm_host_enterprise_gcp_host_count_top99p,
csm_host_enterprise_oci_host_count_top99p,
csm_host_enterprise_total_host_count_top99p,
csm_host_pro_hosts_agentless_scanners_sum,
csm_host_pro_hosts_agentless_scanners_top99p,
csm_host_pro_oci_host_count_top99p,
cspm_aas_host_top99p,
cspm_aws_host_top99p,
cspm_azure_host_top99p,
cspm_container_avg,
cspm_container_hwm,
cspm_gcp_host_top99p,
cspm_host_top99p,
cspm_hosts_agentless_scanners_sum,
cspm_hosts_agentless_scanners_top99p,
custom_ts_avg,
cws_container_count_avg,
cws_fargate_task_avg,
cws_host_top99p,
data_jobs_monitoring_host_hr_sum,
data_stream_monitoring_host_count_sum,
data_stream_monitoring_host_count_top99p,
date,
dbm_host_top99p,
dbm_queries_count_avg,
do_jobs_monitoring_orchestrators_job_hours_sum,
eph_infra_host_agent_sum,
eph_infra_host_alibaba_sum,
eph_infra_host_aws_sum,
eph_infra_host_azure_sum,
eph_infra_host_basic_infra_basic_agent_sum,
eph_infra_host_basic_infra_basic_vsphere_sum,
eph_infra_host_basic_sum,
eph_infra_host_ent_sum,
eph_infra_host_gcp_sum,
eph_infra_host_heroku_sum,
eph_infra_host_only_aas_sum,
eph_infra_host_only_vsphere_sum,
eph_infra_host_opentelemetry_apm_sum,
eph_infra_host_opentelemetry_sum,
eph_infra_host_pro_sum,
eph_infra_host_proplus_sum,
eph_infra_host_proxmox_sum,
error_tracking_apm_error_events_sum,
error_tracking_error_events_sum,
error_tracking_events_sum,
error_tracking_rum_error_events_sum,
event_management_correlation_correlated_events_sum,
event_management_correlation_correlated_related_events_sum,
event_management_correlation_sum,
fargate_container_profiler_profiling_fargate_avg,
fargate_container_profiler_profiling_fargate_eks_avg,
fargate_tasks_count_avg,
fargate_tasks_count_hwm,
feature_flags_config_requests_sum,
flex_logs_compute_large_avg,
flex_logs_compute_medium_avg,
flex_logs_compute_small_avg,
flex_logs_compute_xlarge_avg,
flex_logs_compute_xsmall_avg,
flex_logs_starter_avg,
flex_logs_starter_storage_index_avg,
flex_logs_starter_storage_retention_adjustment_avg,
flex_stored_logs_avg,
forwarding_events_bytes_sum,
gcp_host_top99p,
heroku_host_top99p,
incident_management_monthly_active_users_hwm,
incident_management_seats_hwm,
indexed_events_count_sum,
indexed_points_sum,
infra_cpu_avg,
infra_cpu_default_infra_host_vcpu_agent_avg,
infra_cpu_default_infra_host_vcpu_agent_basic_avg,
infra_cpu_default_infra_host_vcpu_agent_basic_sum,
infra_cpu_default_infra_host_vcpu_agent_sum,
infra_cpu_default_infra_host_vcpu_aws_avg,
infra_cpu_default_infra_host_vcpu_aws_sum,
infra_cpu_default_infra_host_vcpu_azure_avg,
infra_cpu_default_infra_host_vcpu_azure_sum,
infra_cpu_default_infra_host_vcpu_gcp_avg,
infra_cpu_default_infra_host_vcpu_gcp_sum,
infra_cpu_default_infra_host_vcpu_nutanix_avg,
infra_cpu_default_infra_host_vcpu_nutanix_basic_avg,
infra_cpu_default_infra_host_vcpu_nutanix_basic_sum,
infra_cpu_default_infra_host_vcpu_nutanix_sum,
infra_cpu_default_infra_host_vcpu_opentelemetry_avg,
infra_cpu_default_infra_host_vcpu_opentelemetry_sum,
infra_cpu_observed_infra_host_vcpu_agent_avg,
infra_cpu_observed_infra_host_vcpu_agent_sum,
infra_cpu_observed_infra_host_vcpu_aws_avg,
infra_cpu_observed_infra_host_vcpu_aws_sum,
infra_cpu_observed_infra_host_vcpu_azure_avg,
infra_cpu_observed_infra_host_vcpu_azure_sum,
infra_cpu_observed_infra_host_vcpu_gcp_avg,
infra_cpu_observed_infra_host_vcpu_gcp_sum,
infra_cpu_observed_infra_host_vcpu_nutanix_avg,
infra_cpu_observed_infra_host_vcpu_nutanix_sum,
infra_cpu_observed_infra_host_vcpu_opentelemetry_avg,
infra_cpu_observed_infra_host_vcpu_opentelemetry_sum,
infra_cpu_sum,
infra_edge_monitoring_devices_top99p,
infra_host_basic_infra_basic_agent_top99p,
infra_host_basic_infra_basic_vsphere_top99p,
infra_host_basic_top99p,
infra_host_top99p,
infra_storage_mgmt_objects_count_avg,
ingest_points_sum,
ingested_events_bytes_sum,
iot_apm_host_sum,
iot_apm_host_top99p,
iot_device_sum,
iot_device_top99p,
llm_observability_15day_retention_spans_sum,
llm_observability_30day_retention_spans_sum,
llm_observability_60day_retention_spans_sum,
llm_observability_90day_retention_spans_sum,
llm_observability_min_spend_sum,
llm_observability_sum,
logs_archive_search_gb_scanned_sum,
metric_names_sum,
mobile_rum_lite_session_count_sum,
mobile_rum_session_count_android_sum,
mobile_rum_session_count_flutter_sum,
mobile_rum_session_count_ios_sum,
mobile_rum_session_count_reactnative_sum,
mobile_rum_session_count_roku_sum,
mobile_rum_session_count_sum,
mobile_rum_units_sum,
ndm_netflow_events_sum,
netflow_indexed_events_count_sum,
network_device_wireless_top99p,
network_path_sum,
npm_host_top99p,
observability_pipelines_bytes_processed_sum,
oci_host_sum,
oci_host_top99p,
on_call_seat_hwm,
online_archive_events_count_sum,
opentelemetry_apm_host_top99p,
opentelemetry_host_top99p,
orgs,
product_analytics_sum,
profiling_aas_count_top99p,
profiling_host_top99p,
proxmox_host_sum,
proxmox_host_top99p,
published_app_hwm,
rum_browser_and_mobile_session_count,
rum_browser_legacy_session_count_sum,
rum_browser_lite_session_count_sum,
rum_browser_replay_session_count_sum,
rum_indexed_sessions_sum,
rum_ingested_sessions_sum,
rum_lite_session_count_sum,
rum_mobile_legacy_session_count_android_sum,
rum_mobile_legacy_session_count_flutter_sum,
rum_mobile_legacy_session_count_ios_sum,
rum_mobile_legacy_session_count_reactnative_sum,
rum_mobile_legacy_session_count_roku_sum,
rum_mobile_lite_session_count_android_sum,
rum_mobile_lite_session_count_flutter_sum,
rum_mobile_lite_session_count_ios_sum,
rum_mobile_lite_session_count_kotlinmultiplatform_sum,
rum_mobile_lite_session_count_reactnative_sum,
rum_mobile_lite_session_count_roku_sum,
rum_mobile_lite_session_count_unity_sum,
rum_mobile_replay_session_count_android_sum,
rum_mobile_replay_session_count_ios_sum,
rum_mobile_replay_session_count_kotlinmultiplatform_sum,
rum_mobile_replay_session_count_reactnative_sum,
rum_replay_session_count_sum,
rum_session_count_sum,
rum_session_replay_add_on_sum,
rum_total_session_count_sum,
rum_units_sum,
sca_fargate_count_avg,
sca_fargate_count_hwm,
sds_apm_scanned_bytes_sum,
sds_events_scanned_bytes_sum,
sds_logs_scanned_bytes_sum,
sds_rum_scanned_bytes_sum,
sds_total_scanned_bytes_sum,
serverless_apps_apm_apm_azure_appservice_instances_avg,
serverless_apps_apm_apm_azure_azurefunction_instances_avg,
serverless_apps_apm_apm_azure_containerapp_instances_avg,
serverless_apps_apm_apm_fargate_ecs_tasks_avg,
serverless_apps_apm_apm_gcp_cloudfunction_instances_avg,
serverless_apps_apm_apm_gcp_cloudrun_instances_avg,
serverless_apps_apm_apm_gcp_gke_autopilot_pods_avg,
serverless_apps_apm_avg,
serverless_apps_apm_excl_fargate_apm_azure_appservice_instances_avg,
serverless_apps_apm_excl_fargate_apm_azure_azurefunction_instances_avg,
serverless_apps_apm_excl_fargate_apm_azure_containerapp_instances_avg,
serverless_apps_apm_excl_fargate_apm_gcp_cloudfunction_instances_avg,
serverless_apps_apm_excl_fargate_apm_gcp_cloudrun_instances_avg,
serverless_apps_apm_excl_fargate_apm_gcp_gke_autopilot_pods_avg,
serverless_apps_apm_excl_fargate_avg,
serverless_apps_azure_container_app_instances_avg,
serverless_apps_azure_count_avg,
serverless_apps_azure_function_app_instances_avg,
serverless_apps_azure_web_app_instances_avg,
serverless_apps_dsm_fargate_tasks_avg,
serverless_apps_ecs_avg,
serverless_apps_eks_avg,
serverless_apps_excl_fargate_avg,
serverless_apps_excl_fargate_azure_container_app_instances_avg,
serverless_apps_excl_fargate_azure_function_app_instances_avg,
serverless_apps_excl_fargate_azure_web_app_instances_avg,
serverless_apps_excl_fargate_google_cloud_functions_instances_avg,
serverless_apps_excl_fargate_google_cloud_run_instances_avg,
serverless_apps_excl_fargate_infra_gcp_gke_autopilot_pods_avg,
serverless_apps_google_cloud_functions_instances_avg,
serverless_apps_google_cloud_run_instances_avg,
serverless_apps_google_count_avg,
serverless_apps_infra_gcp_gke_autopilot_pods_avg,
serverless_apps_total_count_avg,
siem_12mo_retention_sum,
siem_6mo_retention_sum,
siem_analyzed_logs_add_on_count_sum,
snmp_device_count_sum,
snmp_device_count_top99p,
synthetics_browser_check_calls_count_sum,
synthetics_check_calls_count_sum,
synthetics_mobile_test_runs_sum,
synthetics_parallel_testing_max_slots_hwm,
trace_search_indexed_events_count_sum,
twol_ingested_events_bytes_sum,
universal_service_monitoring_host_top99p,
vsphere_host_top99p,
vuln_management_host_count_top99p,
workflow_executions_usage_sum
FROM datadog.organization.usage_summary
WHERE start_month = '{{ start_month }}' -- required
AND end_month = '{{ end_month }}'
AND include_org_details = '{{ include_org_details }}'
AND include_connected_accounts = '{{ include_connected_accounts }}'
;
```
</TabItem>
</Tabs>
