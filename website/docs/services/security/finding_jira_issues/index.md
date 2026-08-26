--- 
title: finding_jira_issues
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_jira_issues
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

Creates, updates, deletes, gets or lists a <code>finding_jira_issues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_jira_issues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.security.finding_jira_issues" /></td></tr>
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
    <td><a href="#create_jira_issues"><CopyableCode code="create_jira_issues" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create Jira issues for security findings.&lt;br /&gt;This operation creates a case in Datadog and a Jira issue linked to that case for bidirectional sync between Datadog and Jira. To configure the Jira integration, see &#91;Bidirectional ticket syncing with Jira&#93;(https:​//docs.datadoghq.com/security/ticketing_integrations/#bidirectional-ticket-syncing-with-jira). You can create up to 50 Jira issues per request and associate up to 50 security findings per Jira issue. Security findings that are already attached to another Jira issue will be detached from their previous Jira issue and attached to the newly created Jira issue.</td>
</tr>
<tr>
    <td><a href="#attach_jira_issue"><CopyableCode code="attach_jira_issue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>Attach security findings to a Jira issue by providing the Jira issue URL.&lt;br /&gt;You can attach up to 50 security findings per Jira issue. If the Jira issue is not linked to any case, this operation will create a case for the security findings and link the Jira issue to the newly created case. To configure the Jira integration, see &#91;Bidirectional ticket syncing with Jira&#93;(https:​//docs.datadoghq.com/security/ticketing_integrations/#bidirectional-ticket-syncing-with-jira). Security findings that are already attached to another Jira issue will be detached from their previous Jira issue and attached to the specified Jira issue.</td>
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
    defaultValue="create_jira_issues"
    values={[
        { label: 'create_jira_issues', value: 'create_jira_issues' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_jira_issues">

Create Jira issues for security findings.&lt;br /&gt;This operation creates a case in Datadog and a Jira issue linked to that case for bidirectional sync between Datadog and Jira. To configure the Jira integration, see &#91;Bidirectional ticket syncing with Jira&#93;(https:​//docs.datadoghq.com/security/ticketing_integrations/#bidirectional-ticket-syncing-with-jira). You can create up to 50 Jira issues per request and associate up to 50 security findings per Jira issue. Security findings that are already attached to another Jira issue will be detached from their previous Jira issue and attached to the newly created Jira issue.

```sql
INSERT INTO datadog.security.finding_jira_issues (
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
- name: finding_jira_issues
  props:
    - name: data
      description: |
        Array of Jira issue creation request data objects.
      value:
        - attributes:
            assignee_id: "{{ assignee_id }}"
            description: "{{ description }}"
            fields: "{{ fields }}"
            priority: "{{ priority }}"
            title: "{{ title }}"
          relationships:
            findings:
              data:
                - id: "{{ id }}"
                  type: "{{ type }}"
            project:
              data:
                id: "{{ id }}"
                type: "{{ type }}"
          type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_jira_issue"
    values={[
        { label: 'attach_jira_issue', value: 'attach_jira_issue' }
    ]}
>
<TabItem value="attach_jira_issue">

Attach security findings to a Jira issue by providing the Jira issue URL.&lt;br /&gt;You can attach up to 50 security findings per Jira issue. If the Jira issue is not linked to any case, this operation will create a case for the security findings and link the Jira issue to the newly created case. To configure the Jira integration, see &#91;Bidirectional ticket syncing with Jira&#93;(https:​//docs.datadoghq.com/security/ticketing_integrations/#bidirectional-ticket-syncing-with-jira). Security findings that are already attached to another Jira issue will be detached from their previous Jira issue and attached to the specified Jira issue.

```sql
UPDATE datadog.security.finding_jira_issues
SET 
data = '{{ data }}'
WHERE 
RETURNING
data;
```
</TabItem>
</Tabs>
