--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
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

Creates, updates, deletes, gets or lists a <code>dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.dashboards.dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard"
    values={[
        { label: 'get_dashboard', value: 'get_dashboard' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="get_dashboard">

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
    <td>ID of the dashboard. (example: 123-abc-456)</td>
</tr>
<tr>
    <td><CopyableCode code="author_name" /></td>
    <td><code>string</code></td>
    <td>Name of the dashboard author. (example: John Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="author_handle" /></td>
    <td><code>string</code></td>
    <td>Identifier of the dashboard author. (example: test@datadoghq.com)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="default_timeframe" /></td>
    <td><code>object</code></td>
    <td>The default timeframe applied when opening the dashboard. Set to `null` to clear.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td>Whether this dashboard is read-only. If True, only the author and admins can make changes to it.  This property is deprecated; please use the &#91;Restriction Policies API&#93;(https:​//docs.datadoghq.com/api/latest/restriction-policies/) instead to manage write authorization for individual dashboards.</td>
</tr>
<tr>
    <td><CopyableCode code="layout_type" /></td>
    <td><code>string</code></td>
    <td>Layout type of the dashboard. (ordered, free) (example: ordered)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Modification date of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="notify_list" /></td>
    <td><code>array</code></td>
    <td>List of handles of users to notify when changes are made to this dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="reflow_type" /></td>
    <td><code>string</code></td>
    <td>Reflow type for a **new dashboard layout** dashboard. Set this only when layout type is 'ordered'. If set to 'fixed', the dashboard expects all widgets to have a layout, and if it's set to 'auto', widgets should not have layouts. (auto, fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="restricted_roles" /></td>
    <td><code>array</code></td>
    <td>A list of role identifiers. Only the author and users associated with at least one of these roles can edit this dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="tabs" /></td>
    <td><code>array</code></td>
    <td>List of tabs for organizing dashboard widgets into groups.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>List of team names representing ownership of a dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="template_variable_presets" /></td>
    <td><code>array</code></td>
    <td>Array of template variables saved views.</td>
</tr>
<tr>
    <td><CopyableCode code="template_variables" /></td>
    <td><code>array</code></td>
    <td>List of template variables for this dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the dashboard. (example: )</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL of the dashboard. (example: /dashboard/123-abc-456/example-dashboard-title)</td>
</tr>
<tr>
    <td><CopyableCode code="widgets" /></td>
    <td><code>array</code></td>
    <td>List of widgets to display on the dashboard.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dashboards">

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
    <td>Dashboard identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="author_handle" /></td>
    <td><code>string</code></td>
    <td>Identifier of the dashboard author.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td>Whether this dashboard is read-only. If True, only the author and admins can make changes to it.  This property is deprecated; please use the &#91;Restriction Policies API&#93;(https:​//docs.datadoghq.com/api/latest/restriction-policies/) instead to manage write authorization for individual dashboards.</td>
</tr>
<tr>
    <td><CopyableCode code="layout_type" /></td>
    <td><code>string</code></td>
    <td>Layout type of the dashboard. (ordered, free) (example: ordered)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Modification date of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Title of the dashboard.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL of the dashboard.</td>
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
    <td><a href="#get_dashboard"><CopyableCode code="get_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a></td>
    <td></td>
    <td>Get a dashboard using the specified ID.</td>
</tr>
<tr>
    <td><a href="#list_dashboards"><CopyableCode code="list_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-filter[shared]"><code>filter[shared]</code></a>, <a href="#parameter-filter[deleted]"><code>filter[deleted]</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-start"><code>start</code></a></td>
    <td>Get all dashboards.&lt;br /&gt;&lt;br /&gt;**Note**: This query will only return custom created or cloned dashboards.&lt;br /&gt;This query will not return preset dashboards.</td>
</tr>
<tr>
    <td><a href="#create_dashboard"><CopyableCode code="create_dashboard" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-title"><code>title</code></a>, <a href="#parameter-layout_type"><code>layout_type</code></a>, <a href="#parameter-widgets"><code>widgets</code></a></td>
    <td></td>
    <td>Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended.&lt;br /&gt;Refer to the following &#91;documentation&#93;(https:​//docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.</td>
</tr>
<tr>
    <td><a href="#restore_dashboards"><CopyableCode code="restore_dashboards" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).</td>
</tr>
<tr>
    <td><a href="#update_dashboard"><CopyableCode code="update_dashboard" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-layout_type"><code>layout_type</code></a>, <a href="#parameter-widgets"><code>widgets</code></a></td>
    <td></td>
    <td>Update a dashboard using the specified ID.</td>
</tr>
<tr>
    <td><a href="#delete_dashboard"><CopyableCode code="delete_dashboard" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dashboard_id"><code>dashboard_id</code></a></td>
    <td></td>
    <td>Delete a dashboard using the specified ID.</td>
</tr>
<tr>
    <td><a href="#delete_dashboards"><CopyableCode code="delete_dashboards" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).</td>
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
    <td>The ID of the dashboard.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of dashboards returned in the list.</td>
</tr>
<tr id="parameter-filter[deleted]">
    <td><CopyableCode code="filter[deleted]" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, this query returns only deleted custom-created or cloned dashboards. This parameter is incompatible with `filter&#91;shared&#93;`.</td>
</tr>
<tr id="parameter-filter[shared]">
    <td><CopyableCode code="filter[shared]" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, this query only returns shared custom created or cloned dashboards.</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>integer (int64)</code></td>
    <td>The specific offset to use as the beginning of the returned response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dashboard"
    values={[
        { label: 'get_dashboard', value: 'get_dashboard' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="get_dashboard">

Get a dashboard using the specified ID.

```sql
SELECT
id,
author_name,
author_handle,
created_at,
default_timeframe,
description,
is_read_only,
layout_type,
modified_at,
notify_list,
reflow_type,
restricted_roles,
tabs,
tags,
template_variable_presets,
template_variables,
title,
url,
widgets
FROM datadog.dashboards.dashboards
WHERE dashboard_id = '{{ dashboard_id }}' -- required
;
```
</TabItem>
<TabItem value="list_dashboards">

Get all dashboards.&lt;br /&gt;&lt;br /&gt;**Note**: This query will only return custom created or cloned dashboards.&lt;br /&gt;This query will not return preset dashboards.

```sql
SELECT
id,
author_handle,
created_at,
description,
is_read_only,
layout_type,
modified_at,
title,
url
FROM datadog.dashboards.dashboards
WHERE filter[shared] = '{{ filter[shared] }}'
AND filter[deleted] = '{{ filter[deleted] }}'
AND count = '{{ count }}'
AND start = '{{ start }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dashboard"
    values={[
        { label: 'create_dashboard', value: 'create_dashboard' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dashboard">

Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended.&lt;br /&gt;Refer to the following &#91;documentation&#93;(https:​//docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.

```sql
INSERT INTO datadog.dashboards.dashboards (
default_timeframe,
description,
is_read_only,
layout_type,
notify_list,
reflow_type,
restricted_roles,
tabs,
tags,
template_variable_presets,
template_variables,
title,
widgets
)
SELECT 
'{{ default_timeframe }}',
'{{ description }}',
{{ is_read_only }},
'{{ layout_type }}' /* required */,
'{{ notify_list }}',
'{{ reflow_type }}',
'{{ restricted_roles }}',
'{{ tabs }}',
'{{ tags }}',
'{{ template_variable_presets }}',
'{{ template_variables }}',
'{{ title }}' /* required */,
'{{ widgets }}' /* required */
RETURNING
id,
author_name,
author_handle,
created_at,
default_timeframe,
description,
is_read_only,
layout_type,
modified_at,
notify_list,
reflow_type,
restricted_roles,
tabs,
tags,
template_variable_presets,
template_variables,
title,
url,
widgets
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboards
  props:
    - name: default_timeframe
      description: |
        The default timeframe applied when opening the dashboard. Set to \`null\` to clear.
      value:
        type: "{{ type }}"
        unit: "{{ unit }}"
        value: {{ value }}
        from: {{ from }}
        to: {{ to }}
    - name: description
      value: "{{ description }}"
      description: |
        Description of the dashboard.
    - name: is_read_only
      value: {{ is_read_only }}
      description: |
        Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
        This property is deprecated; please use the [Restriction Policies API](https://docs.datadoghq.com/api/latest/restriction-policies/) instead to manage write authorization for individual dashboards.
    - name: layout_type
      value: "{{ layout_type }}"
      description: |
        Layout type of the dashboard.
      valid_values: ['ordered', 'free']
    - name: notify_list
      value:
        - "{{ notify_list }}"
      description: |
        List of handles of users to notify when changes are made to this dashboard.
    - name: reflow_type
      value: "{{ reflow_type }}"
      description: |
        Reflow type for a **new dashboard layout** dashboard. Set this only when layout type is 'ordered'.
        If set to 'fixed', the dashboard expects all widgets to have a layout, and if it's set to 'auto',
        widgets should not have layouts.
      valid_values: ['auto', 'fixed']
    - name: restricted_roles
      value:
        - "{{ restricted_roles }}"
      description: |
        A list of role identifiers. Only the author and users associated with at least one of these roles can edit this dashboard.
    - name: tabs
      description: |
        List of tabs for organizing dashboard widgets into groups.
      value:
        - id: "{{ id }}"
          name: "{{ name }}"
          widget_ids: "{{ widget_ids }}"
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        List of team names representing ownership of a dashboard.
    - name: template_variable_presets
      description: |
        Array of template variables saved views.
      value:
        - name: "{{ name }}"
          template_variables: "{{ template_variables }}"
    - name: template_variables
      description: |
        List of template variables for this dashboard.
      value:
        - available_values: "{{ available_values }}"
          default: "{{ default }}"
          defaults: "{{ defaults }}"
          name: "{{ name }}"
          prefix: "{{ prefix }}"
          type: "{{ type }}"
    - name: title
      value: "{{ title }}"
      description: |
        Title of the dashboard.
    - name: widgets
      description: |
        List of widgets to display on the dashboard.
      value:
        - definition:
            alert_id: "{{ alert_id }}"
            description: "{{ description }}"
            time:
              hide_incomplete_cost_data: {{ hide_incomplete_cost_data }}
              live_span: "{{ live_span }}"
              type: "{{ type }}"
              unit: "{{ unit }}"
              value: {{ value }}
              from: {{ from }}
              to: {{ to }}
            title: "{{ title }}"
            title_align: "{{ title_align }}"
            title_size: "{{ title_size }}"
            type: "{{ type }}"
            viz_type: "{{ viz_type }}"
            precision: {{ precision }}
            text_align: "{{ text_align }}"
            unit: "{{ unit }}"
            custom_links:
              - is_hidden: {{ is_hidden }}
                label: "{{ label }}"
                link: "{{ link }}"
                override_label: "{{ override_label }}"
            requests:
              - apm_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                audit_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                conditional_formats: "{{ conditional_formats }}"
                event_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                formulas: "{{ formulas }}"
                log_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                network_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                process_query:
                  filter_by:
                    - "{{ filter_by }}"
                  limit: {{ limit }}
                  metric: "{{ metric }}"
                  search_by: "{{ search_by }}"
                profile_metrics_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                q: "{{ q }}"
                queries: "{{ queries }}"
                response_format: "{{ response_format }}"
                rum_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                security_query:
                  compute:
                    aggregation: "{{ aggregation }}"
                    facet: "{{ facet }}"
                    interval: {{ interval }}
                  group_by:
                    - facet: "{{ facet }}"
                      limit: {{ limit }}
                      sort:
                        aggregation: "{{ aggregation }}"
                        facet: "{{ facet }}"
                        order: "{{ order }}"
                  index: "{{ index }}"
                  multi_compute:
                    - aggregation: "{{ aggregation }}"
                      facet: "{{ facet }}"
                      interval: {{ interval }}
                  search:
                    query: "{{ query }}"
                sort:
                  count: {{ count }}
                  order_by:
                    - index: {{ index }}
                      order: "{{ order }}"
                      type: "{{ type }}"
                      name: "{{ name }}"
                style:
                  line_type: "{{ line_type }}"
                  line_width: "{{ line_width }}"
                  order_by: "{{ order_by }}"
                  palette: "{{ palette }}"
            style:
              display:
                legend: "{{ legend }}"
                type: "{{ type }}"
              palette: "{{ palette }}"
              scaling: "{{ scaling }}"
            check: "{{ check }}"
            group: "{{ group }}"
            group_by:
              - "{{ group_by }}"
            grouping: "{{ grouping }}"
            tags:
              - "{{ tags }}"
            legend_size: "{{ legend_size }}"
            markers:
              - display_type: "{{ display_type }}"
                label: "{{ label }}"
                time: "{{ time }}"
                value: "{{ value }}"
            show_legend: {{ show_legend }}
            xaxis:
              include_zero: {{ include_zero }}
              max: "{{ max }}"
              min: "{{ min }}"
              num_buckets: {{ num_buckets }}
              scale: "{{ scale }}"
            yaxis:
              include_zero: {{ include_zero }}
              label: "{{ label }}"
              max: "{{ max }}"
              min: "{{ min }}"
              scale: "{{ scale }}"
            event_size: "{{ event_size }}"
            query: "{{ query }}"
            tags_execution: "{{ tags_execution }}"
            background_color: "{{ background_color }}"
            color: "{{ color }}"
            font_size: "{{ font_size }}"
            text: "{{ text }}"
            grouped_display: "{{ grouped_display }}"
            view:
              focus: "{{ focus }}"
            banner_img: "{{ banner_img }}"
            layout_type: "{{ layout_type }}"
            show_title: {{ show_title }}
            widgets:
              - definition:
                  alert_id: "{{ alert_id }}"
                  description: "{{ description }}"
                  time:
                    hide_incomplete_cost_data: {{ hide_incomplete_cost_data }}
                    live_span: "{{ live_span }}"
                    type: "{{ type }}"
                    unit: "{{ unit }}"
                    value: {{ value }}
                    from: {{ from }}
                    to: {{ to }}
                  title: "{{ title }}"
                  title_align: "{{ title_align }}"
                  title_size: "{{ title_size }}"
                  type: "{{ type }}"
                  viz_type: "{{ viz_type }}"
                  precision: {{ precision }}
                  text_align: "{{ text_align }}"
                  unit: "{{ unit }}"
                  custom_links:
                    - is_hidden: {{ is_hidden }}
                      label: "{{ label }}"
                      link: "{{ link }}"
                      override_label: "{{ override_label }}"
                  requests:
                    - apm_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      audit_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      conditional_formats: "{{ conditional_formats }}"
                      event_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      formulas: "{{ formulas }}"
                      log_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      network_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      process_query:
                        filter_by: "{{ filter_by }}"
                        limit: {{ limit }}
                        metric: "{{ metric }}"
                        search_by: "{{ search_by }}"
                      profile_metrics_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      q: "{{ q }}"
                      queries: "{{ queries }}"
                      response_format: "{{ response_format }}"
                      rum_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      security_query:
                        compute: "{{ compute }}"
                        group_by: "{{ group_by }}"
                        index: "{{ index }}"
                        multi_compute: "{{ multi_compute }}"
                        search: "{{ search }}"
                      sort:
                        count: {{ count }}
                        order_by: "{{ order_by }}"
                      style:
                        line_type: "{{ line_type }}"
                        line_width: "{{ line_width }}"
                        order_by: "{{ order_by }}"
                        palette: "{{ palette }}"
                  style:
                    display: "{{ display }}"
                    palette: "{{ palette }}"
                    scaling: "{{ scaling }}"
                  check: "{{ check }}"
                  group: "{{ group }}"
                  group_by:
                    - "{{ group_by }}"
                  grouping: "{{ grouping }}"
                  tags:
                    - "{{ tags }}"
                  legend_size: "{{ legend_size }}"
                  markers:
                    - display_type: "{{ display_type }}"
                      label: "{{ label }}"
                      time: "{{ time }}"
                      value: "{{ value }}"
                  show_legend: {{ show_legend }}
                  xaxis:
                    include_zero: {{ include_zero }}
                    max: "{{ max }}"
                    min: "{{ min }}"
                    num_buckets: {{ num_buckets }}
                    scale: "{{ scale }}"
                  yaxis:
                    include_zero: {{ include_zero }}
                    label: "{{ label }}"
                    max: "{{ max }}"
                    min: "{{ min }}"
                    scale: "{{ scale }}"
                  event_size: "{{ event_size }}"
                  query: "{{ query }}"
                  tags_execution: "{{ tags_execution }}"
                  background_color: "{{ background_color }}"
                  color: "{{ color }}"
                  font_size: "{{ font_size }}"
                  text: "{{ text }}"
                  grouped_display: "{{ grouped_display }}"
                  view:
                    focus: "{{ focus }}"
                  banner_img: "{{ banner_img }}"
                  layout_type: "{{ layout_type }}"
                  show_title: {{ show_title }}
                  widgets:
                    - definition:
                        alert_id: "{{ alert_id }}"
                        description: "{{ description }}"
                        time: "{{ time }}"
                        title: "{{ title }}"
                        title_align: "{{ title_align }}"
                        title_size: "{{ title_size }}"
                        type: "{{ type }}"
                        viz_type: "{{ viz_type }}"
                        precision: {{ precision }}
                        text_align: "{{ text_align }}"
                        unit: "{{ unit }}"
                        custom_links: "{{ custom_links }}"
                        requests: "{{ requests }}"
                        style: "{{ style }}"
                        check: "{{ check }}"
                        group: "{{ group }}"
                        group_by: "{{ group_by }}"
                        grouping: "{{ grouping }}"
                        tags: "{{ tags }}"
                        legend_size: "{{ legend_size }}"
                        markers: "{{ markers }}"
                        show_legend: {{ show_legend }}
                        xaxis: "{{ xaxis }}"
                        yaxis: "{{ yaxis }}"
                        event_size: "{{ event_size }}"
                        query: "{{ query }}"
                        tags_execution: "{{ tags_execution }}"
                        background_color: "{{ background_color }}"
                        color: "{{ color }}"
                        font_size: "{{ font_size }}"
                        text: "{{ text }}"
                        grouped_display: "{{ grouped_display }}"
                        view: "{{ view }}"
                        banner_img: "{{ banner_img }}"
                        layout_type: "{{ layout_type }}"
                        show_title: {{ show_title }}
                        widgets: "{{ widgets }}"
                        events: "{{ events }}"
                        no_group_hosts: {{ no_group_hosts }}
                        no_metric_hosts: {{ no_metric_hosts }}
                        node_type: "{{ node_type }}"
                        notes: "{{ notes }}"
                        scope: "{{ scope }}"
                        url: "{{ url }}"
                        has_background: {{ has_background }}
                        has_border: {{ has_border }}
                        horizontal_align: "{{ horizontal_align }}"
                        margin: "{{ margin }}"
                        sizing: "{{ sizing }}"
                        url_dark_theme: "{{ url_dark_theme }}"
                        vertical_align: "{{ vertical_align }}"
                        columns: "{{ columns }}"
                        indexes: "{{ indexes }}"
                        logset: "{{ logset }}"
                        message_display: "{{ message_display }}"
                        show_date_column: {{ show_date_column }}
                        show_message_column: {{ show_message_column }}
                        sort: "{{ sort }}"
                        color_preference: "{{ color_preference }}"
                        count: {{ count }}
                        display_format: "{{ display_format }}"
                        hide_zero_counts: {{ hide_zero_counts }}
                        show_last_triggered: {{ show_last_triggered }}
                        show_priority: {{ show_priority }}
                        start: {{ start }}
                        summary_type: "{{ summary_type }}"
                        content: "{{ content }}"
                        has_padding: {{ has_padding }}
                        show_tick: {{ show_tick }}
                        tick_edge: "{{ tick_edge }}"
                        tick_pos: "{{ tick_pos }}"
                        powerpack_id: "{{ powerpack_id }}"
                        template_variables: "{{ template_variables }}"
                        legend: "{{ legend }}"
                        autoscale: {{ autoscale }}
                        custom_unit: "{{ custom_unit }}"
                        timeseries_background: "{{ timeseries_background }}"
                        inputs: "{{ inputs }}"
                        workflow_id: "{{ workflow_id }}"
                        additional_query_filters: "{{ additional_query_filters }}"
                        global_time_target: "{{ global_time_target }}"
                        show_error_budget: {{ show_error_budget }}
                        slo_id: "{{ slo_id }}"
                        time_windows: "{{ time_windows }}"
                        view_mode: "{{ view_mode }}"
                        view_type: "{{ view_type }}"
                        color_by_groups: "{{ color_by_groups }}"
                        show_other_links: {{ show_other_links }}
                        sort_nodes: {{ sort_nodes }}
                        filters: "{{ filters }}"
                        service: "{{ service }}"
                        env: "{{ env }}"
                        show_breakdown: {{ show_breakdown }}
                        show_distribution: {{ show_distribution }}
                        show_errors: {{ show_errors }}
                        show_hits: {{ show_hits }}
                        show_latency: {{ show_latency }}
                        show_resource_list: {{ show_resource_list }}
                        size_format: "{{ size_format }}"
                        span_name: "{{ span_name }}"
                        has_uniform_y_axes: {{ has_uniform_y_axes }}
                        size: "{{ size }}"
                        source_widget_definition: "{{ source_widget_definition }}"
                        split_config: "{{ split_config }}"
                        hide_total: {{ hide_total }}
                        has_search_bar: "{{ has_search_bar }}"
                        legend_columns: "{{ legend_columns }}"
                        legend_layout: "{{ legend_layout }}"
                        right_yaxis: "{{ right_yaxis }}"
                        color_by: "{{ color_by }}"
                        size_by: "{{ size_by }}"
                        specification: "{{ specification }}"
                      id: {{ id }}
                      layout:
                        height: {{ height }}
                        is_column_break: {{ is_column_break }}
                        width: {{ width }}
                        x: {{ x }}
                        y: {{ y }}
                  events:
                    - q: "{{ q }}"
                      tags_execution: "{{ tags_execution }}"
                  no_group_hosts: {{ no_group_hosts }}
                  no_metric_hosts: {{ no_metric_hosts }}
                  node_type: "{{ node_type }}"
                  notes: "{{ notes }}"
                  scope:
                    - "{{ scope }}"
                  url: "{{ url }}"
                  has_background: {{ has_background }}
                  has_border: {{ has_border }}
                  horizontal_align: "{{ horizontal_align }}"
                  margin: "{{ margin }}"
                  sizing: "{{ sizing }}"
                  url_dark_theme: "{{ url_dark_theme }}"
                  vertical_align: "{{ vertical_align }}"
                  columns:
                    - "{{ columns }}"
                  indexes:
                    - "{{ indexes }}"
                  logset: "{{ logset }}"
                  message_display: "{{ message_display }}"
                  show_date_column: {{ show_date_column }}
                  show_message_column: {{ show_message_column }}
                  sort:
                    column: "{{ column }}"
                    order: "{{ order }}"
                  color_preference: "{{ color_preference }}"
                  count: {{ count }}
                  display_format: "{{ display_format }}"
                  hide_zero_counts: {{ hide_zero_counts }}
                  show_last_triggered: {{ show_last_triggered }}
                  show_priority: {{ show_priority }}
                  start: {{ start }}
                  summary_type: "{{ summary_type }}"
                  content: "{{ content }}"
                  has_padding: {{ has_padding }}
                  show_tick: {{ show_tick }}
                  tick_edge: "{{ tick_edge }}"
                  tick_pos: "{{ tick_pos }}"
                  powerpack_id: "{{ powerpack_id }}"
                  template_variables:
                    controlled_by_powerpack: "{{ controlled_by_powerpack }}"
                    controlled_externally: "{{ controlled_externally }}"
                  legend:
                    type: "{{ type }}"
                  autoscale: {{ autoscale }}
                  custom_unit: "{{ custom_unit }}"
                  timeseries_background:
                    type: "{{ type }}"
                    yaxis: "{{ yaxis }}"
                  inputs:
                    - name: "{{ name }}"
                      value: "{{ value }}"
                  workflow_id: "{{ workflow_id }}"
                  additional_query_filters: "{{ additional_query_filters }}"
                  global_time_target: "{{ global_time_target }}"
                  show_error_budget: {{ show_error_budget }}
                  slo_id: "{{ slo_id }}"
                  time_windows:
                    - "{{ time_windows }}"
                  view_mode: "{{ view_mode }}"
                  view_type: "{{ view_type }}"
                  color_by_groups:
                    - "{{ color_by_groups }}"
                  show_other_links: {{ show_other_links }}
                  sort_nodes: {{ sort_nodes }}
                  filters:
                    - "{{ filters }}"
                  service: "{{ service }}"
                  env: "{{ env }}"
                  show_breakdown: {{ show_breakdown }}
                  show_distribution: {{ show_distribution }}
                  show_errors: {{ show_errors }}
                  show_hits: {{ show_hits }}
                  show_latency: {{ show_latency }}
                  show_resource_list: {{ show_resource_list }}
                  size_format: "{{ size_format }}"
                  span_name: "{{ span_name }}"
                  has_uniform_y_axes: {{ has_uniform_y_axes }}
                  size: "{{ size }}"
                  source_widget_definition:
                    custom_links: "{{ custom_links }}"
                    description: "{{ description }}"
                    requests: "{{ requests }}"
                    style: "{{ style }}"
                    time: "{{ time }}"
                    title: "{{ title }}"
                    title_align: "{{ title_align }}"
                    title_size: "{{ title_size }}"
                    type: "{{ type }}"
                    view: "{{ view }}"
                    autoscale: {{ autoscale }}
                    custom_unit: "{{ custom_unit }}"
                    precision: {{ precision }}
                    text_align: "{{ text_align }}"
                    timeseries_background: "{{ timeseries_background }}"
                    color_by_groups: "{{ color_by_groups }}"
                    xaxis: "{{ xaxis }}"
                    yaxis: "{{ yaxis }}"
                    hide_total: {{ hide_total }}
                    legend: "{{ legend }}"
                    has_search_bar: "{{ has_search_bar }}"
                    events: "{{ events }}"
                    legend_columns: "{{ legend_columns }}"
                    legend_layout: "{{ legend_layout }}"
                    legend_size: "{{ legend_size }}"
                    markers: "{{ markers }}"
                    right_yaxis: "{{ right_yaxis }}"
                    show_legend: {{ show_legend }}
                    color_by: "{{ color_by }}"
                    group_by: "{{ group_by }}"
                    size_by: "{{ size_by }}"
                  split_config:
                    limit: {{ limit }}
                    sort: "{{ sort }}"
                    split_dimensions: "{{ split_dimensions }}"
                    static_splits: "{{ static_splits }}"
                  hide_total: {{ hide_total }}
                  has_search_bar: "{{ has_search_bar }}"
                  legend_columns:
                    - "{{ legend_columns }}"
                  legend_layout: "{{ legend_layout }}"
                  right_yaxis:
                    include_zero: {{ include_zero }}
                    label: "{{ label }}"
                    max: "{{ max }}"
                    min: "{{ min }}"
                    scale: "{{ scale }}"
                  color_by: "{{ color_by }}"
                  size_by: "{{ size_by }}"
                  specification:
                    contents: "{{ contents }}"
                    type: "{{ type }}"
                id: {{ id }}
                layout:
                  height: {{ height }}
                  is_column_break: {{ is_column_break }}
                  width: {{ width }}
                  x: {{ x }}
                  y: {{ y }}
            events:
              - q: "{{ q }}"
                tags_execution: "{{ tags_execution }}"
            no_group_hosts: {{ no_group_hosts }}
            no_metric_hosts: {{ no_metric_hosts }}
            node_type: "{{ node_type }}"
            notes: "{{ notes }}"
            scope:
              - "{{ scope }}"
            url: "{{ url }}"
            has_background: {{ has_background }}
            has_border: {{ has_border }}
            horizontal_align: "{{ horizontal_align }}"
            margin: "{{ margin }}"
            sizing: "{{ sizing }}"
            url_dark_theme: "{{ url_dark_theme }}"
            vertical_align: "{{ vertical_align }}"
            columns:
              - "{{ columns }}"
            indexes:
              - "{{ indexes }}"
            logset: "{{ logset }}"
            message_display: "{{ message_display }}"
            show_date_column: {{ show_date_column }}
            show_message_column: {{ show_message_column }}
            sort:
              column: "{{ column }}"
              order: "{{ order }}"
            color_preference: "{{ color_preference }}"
            count: {{ count }}
            display_format: "{{ display_format }}"
            hide_zero_counts: {{ hide_zero_counts }}
            show_last_triggered: {{ show_last_triggered }}
            show_priority: {{ show_priority }}
            start: {{ start }}
            summary_type: "{{ summary_type }}"
            content: "{{ content }}"
            has_padding: {{ has_padding }}
            show_tick: {{ show_tick }}
            tick_edge: "{{ tick_edge }}"
            tick_pos: "{{ tick_pos }}"
            powerpack_id: "{{ powerpack_id }}"
            template_variables:
              controlled_by_powerpack:
                - name: "{{ name }}"
                  prefix: "{{ prefix }}"
                  values: "{{ values }}"
              controlled_externally:
                - name: "{{ name }}"
                  prefix: "{{ prefix }}"
                  values: "{{ values }}"
            legend:
              type: "{{ type }}"
            autoscale: {{ autoscale }}
            custom_unit: "{{ custom_unit }}"
            timeseries_background:
              type: "{{ type }}"
              yaxis:
                include_zero: {{ include_zero }}
                label: "{{ label }}"
                max: "{{ max }}"
                min: "{{ min }}"
                scale: "{{ scale }}"
            inputs:
              - name: "{{ name }}"
                value: "{{ value }}"
            workflow_id: "{{ workflow_id }}"
            additional_query_filters: "{{ additional_query_filters }}"
            global_time_target: "{{ global_time_target }}"
            show_error_budget: {{ show_error_budget }}
            slo_id: "{{ slo_id }}"
            time_windows:
              - "{{ time_windows }}"
            view_mode: "{{ view_mode }}"
            view_type: "{{ view_type }}"
            color_by_groups:
              - "{{ color_by_groups }}"
            show_other_links: {{ show_other_links }}
            sort_nodes: {{ sort_nodes }}
            filters:
              - "{{ filters }}"
            service: "{{ service }}"
            env: "{{ env }}"
            show_breakdown: {{ show_breakdown }}
            show_distribution: {{ show_distribution }}
            show_errors: {{ show_errors }}
            show_hits: {{ show_hits }}
            show_latency: {{ show_latency }}
            show_resource_list: {{ show_resource_list }}
            size_format: "{{ size_format }}"
            span_name: "{{ span_name }}"
            has_uniform_y_axes: {{ has_uniform_y_axes }}
            size: "{{ size }}"
            source_widget_definition:
              custom_links:
                - is_hidden: {{ is_hidden }}
                  label: "{{ label }}"
                  link: "{{ link }}"
                  override_label: "{{ override_label }}"
              description: "{{ description }}"
              requests:
                - apm_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  audit_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  conditional_formats: "{{ conditional_formats }}"
                  event_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  formulas: "{{ formulas }}"
                  log_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  network_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  process_query:
                    filter_by: "{{ filter_by }}"
                    limit: {{ limit }}
                    metric: "{{ metric }}"
                    search_by: "{{ search_by }}"
                  profile_metrics_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  q: "{{ q }}"
                  queries: "{{ queries }}"
                  response_format: "{{ response_format }}"
                  rum_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  security_query:
                    compute: "{{ compute }}"
                    group_by: "{{ group_by }}"
                    index: "{{ index }}"
                    multi_compute: "{{ multi_compute }}"
                    search: "{{ search }}"
                  sort:
                    count: {{ count }}
                    order_by: "{{ order_by }}"
                  style:
                    line_type: "{{ line_type }}"
                    line_width: "{{ line_width }}"
                    order_by: "{{ order_by }}"
                    palette: "{{ palette }}"
              style:
                display:
                  legend: "{{ legend }}"
                  type: "{{ type }}"
                palette: "{{ palette }}"
                scaling: "{{ scaling }}"
              time:
                hide_incomplete_cost_data: {{ hide_incomplete_cost_data }}
                live_span: "{{ live_span }}"
                type: "{{ type }}"
                unit: "{{ unit }}"
                value: {{ value }}
                from: {{ from }}
                to: {{ to }}
              title: "{{ title }}"
              title_align: "{{ title_align }}"
              title_size: "{{ title_size }}"
              type: "{{ type }}"
              view:
                focus: "{{ focus }}"
              autoscale: {{ autoscale }}
              custom_unit: "{{ custom_unit }}"
              precision: {{ precision }}
              text_align: "{{ text_align }}"
              timeseries_background:
                type: "{{ type }}"
                yaxis:
                  include_zero: {{ include_zero }}
                  label: "{{ label }}"
                  max: "{{ max }}"
                  min: "{{ min }}"
                  scale: "{{ scale }}"
              color_by_groups:
                - "{{ color_by_groups }}"
              xaxis:
                include_zero: {{ include_zero }}
                label: "{{ label }}"
                max: "{{ max }}"
                min: "{{ min }}"
                scale: "{{ scale }}"
              yaxis:
                include_zero: {{ include_zero }}
                label: "{{ label }}"
                max: "{{ max }}"
                min: "{{ min }}"
                scale: "{{ scale }}"
              hide_total: {{ hide_total }}
              legend:
                type: "{{ type }}"
                hide_percent: {{ hide_percent }}
                hide_value: {{ hide_value }}
              has_search_bar: "{{ has_search_bar }}"
              events:
                - q: "{{ q }}"
                  tags_execution: "{{ tags_execution }}"
              legend_columns:
                - "{{ legend_columns }}"
              legend_layout: "{{ legend_layout }}"
              legend_size: "{{ legend_size }}"
              markers:
                - display_type: "{{ display_type }}"
                  label: "{{ label }}"
                  time: "{{ time }}"
                  value: "{{ value }}"
              right_yaxis:
                include_zero: {{ include_zero }}
                label: "{{ label }}"
                max: "{{ max }}"
                min: "{{ min }}"
                scale: "{{ scale }}"
              show_legend: {{ show_legend }}
              color_by: "{{ color_by }}"
              group_by: "{{ group_by }}"
              size_by: "{{ size_by }}"
            split_config:
              limit: {{ limit }}
              sort:
                compute:
                  aggregation: "{{ aggregation }}"
                  metric: "{{ metric }}"
                order: "{{ order }}"
              split_dimensions:
                - one_graph_per: "{{ one_graph_per }}"
              static_splits:
                - "{{ static_splits }}"
            hide_total: {{ hide_total }}
            has_search_bar: "{{ has_search_bar }}"
            legend_columns:
              - "{{ legend_columns }}"
            legend_layout: "{{ legend_layout }}"
            right_yaxis:
              include_zero: {{ include_zero }}
              label: "{{ label }}"
              max: "{{ max }}"
              min: "{{ min }}"
              scale: "{{ scale }}"
            color_by: "{{ color_by }}"
            size_by: "{{ size_by }}"
            specification:
              contents: "{{ contents }}"
              type: "{{ type }}"
          id: {{ id }}
          layout:
            height: {{ height }}
            is_column_break: {{ is_column_break }}
            width: {{ width }}
            x: {{ x }}
            y: {{ y }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="restore_dashboards"
    values={[
        { label: 'restore_dashboards', value: 'restore_dashboards' }
    ]}
>
<TabItem value="restore_dashboards">

Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).

```sql
UPDATE datadog.dashboards.dashboards
SET 
data = '{{ data }}'
WHERE 
data = '{{ data }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_dashboard"
    values={[
        { label: 'update_dashboard', value: 'update_dashboard' }
    ]}
>
<TabItem value="update_dashboard">

Update a dashboard using the specified ID.

```sql
REPLACE datadog.dashboards.dashboards
SET 
default_timeframe = '{{ default_timeframe }}',
description = '{{ description }}',
is_read_only = {{ is_read_only }},
layout_type = '{{ layout_type }}',
notify_list = '{{ notify_list }}',
reflow_type = '{{ reflow_type }}',
restricted_roles = '{{ restricted_roles }}',
tabs = '{{ tabs }}',
tags = '{{ tags }}',
template_variable_presets = '{{ template_variable_presets }}',
template_variables = '{{ template_variables }}',
title = '{{ title }}',
widgets = '{{ widgets }}'
WHERE 
dashboard_id = '{{ dashboard_id }}' --required
AND title = '{{ title }}' --required
AND layout_type = '{{ layout_type }}' --required
AND widgets = '{{ widgets }}' --required
RETURNING
id,
author_name,
author_handle,
created_at,
default_timeframe,
description,
is_read_only,
layout_type,
modified_at,
notify_list,
reflow_type,
restricted_roles,
tabs,
tags,
template_variable_presets,
template_variables,
title,
url,
widgets;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dashboard"
    values={[
        { label: 'delete_dashboard', value: 'delete_dashboard' },
        { label: 'delete_dashboards', value: 'delete_dashboards' }
    ]}
>
<TabItem value="delete_dashboard">

Delete a dashboard using the specified ID.

```sql
DELETE FROM datadog.dashboards.dashboards
WHERE dashboard_id = '{{ dashboard_id }}' --required
;
```
</TabItem>
<TabItem value="delete_dashboards">

Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).

```sql
DELETE FROM datadog.dashboards.dashboards
;
```
</TabItem>
</Tabs>
