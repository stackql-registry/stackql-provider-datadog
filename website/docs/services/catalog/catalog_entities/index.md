--- 
title: catalog_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_entities
  - catalog
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

Creates, updates, deletes, gets or lists a <code>catalog_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.catalog.catalog_entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_catalog_entity"
    values={[
        { label: 'list_catalog_entity', value: 'list_catalog_entity' }
    ]}
>
<TabItem value="list_catalog_entity">

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
    <td>Entity ID.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Entity attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Entity metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>object</code></td>
    <td>Entity relationships.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Entity.</td>
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
    <td><a href="#list_catalog_entity"><CopyableCode code="list_catalog_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page[offset]"><code>page[offset]</code></a>, <a href="#parameter-page[limit]"><code>page[limit]</code></a>, <a href="#parameter-filter[id]"><code>filter[id]</code></a>, <a href="#parameter-filter[ref]"><code>filter[ref]</code></a>, <a href="#parameter-filter[name]"><code>filter[name]</code></a>, <a href="#parameter-filter[kind]"><code>filter[kind]</code></a>, <a href="#parameter-filter[owner]"><code>filter[owner]</code></a>, <a href="#parameter-filter[relation][type]"><code>filter[relation][type]</code></a>, <a href="#parameter-filter[exclude_snapshot]"><code>filter[exclude_snapshot]</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-include_discovered"><code>include_discovered</code></a></td>
    <td>Get a list of entities from Software Catalog.</td>
</tr>
<tr>
    <td><a href="#upsert_catalog_entity"><CopyableCode code="upsert_catalog_entity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_version"><code>api_version</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>Create or update entities in Software Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_catalog_entity"><CopyableCode code="delete_catalog_entity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-entity_id"><code>entity_id</code></a></td>
    <td></td>
    <td>Delete a single entity in Software Catalog.</td>
</tr>
<tr>
    <td><a href="#preview_catalog_entities"><CopyableCode code="preview_catalog_entities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td></td>
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
<tr id="parameter-entity_id">
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>UUID or Entity Ref.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
<tr id="parameter-filter[exclude_snapshot]">
    <td><CopyableCode code="filter[exclude_snapshot]" /></td>
    <td><code>string</code></td>
    <td>Filter entities by excluding snapshotted entities.</td>
</tr>
<tr id="parameter-filter[id]">
    <td><CopyableCode code="filter[id]" /></td>
    <td><code>string</code></td>
    <td>Filter entities by UUID.</td>
</tr>
<tr id="parameter-filter[kind]">
    <td><CopyableCode code="filter[kind]" /></td>
    <td><code>string</code></td>
    <td>Filter entities by kind.</td>
</tr>
<tr id="parameter-filter[name]">
    <td><CopyableCode code="filter[name]" /></td>
    <td><code>string</code></td>
    <td>Filter entities by name.</td>
</tr>
<tr id="parameter-filter[owner]">
    <td><CopyableCode code="filter[owner]" /></td>
    <td><code>string</code></td>
    <td>Filter entities by owner.</td>
</tr>
<tr id="parameter-filter[ref]">
    <td><CopyableCode code="filter[ref]" /></td>
    <td><code>string</code></td>
    <td>Filter entities by reference (example: service:shopping-cart)</td>
</tr>
<tr id="parameter-filter[relation][type]">
    <td><CopyableCode code="filter[relation][type]" /></td>
    <td><code>string</code></td>
    <td>Filter entities by relation type.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>Include relationship data.</td>
</tr>
<tr id="parameter-include_discovered">
    <td><CopyableCode code="include_discovered" /></td>
    <td><code>boolean</code></td>
    <td>If true, includes discovered services from APM and USM that do not have entity definitions. (wire: includeDiscovered)</td>
</tr>
<tr id="parameter-page[limit]">
    <td><CopyableCode code="page[limit]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum number of entities in the response. (example: 100)</td>
</tr>
<tr id="parameter-page[offset]">
    <td><CopyableCode code="page[offset]" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific offset to use as the beginning of the returned page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_catalog_entity"
    values={[
        { label: 'list_catalog_entity', value: 'list_catalog_entity' }
    ]}
>
<TabItem value="list_catalog_entity">

Get a list of entities from Software Catalog.

```sql
SELECT
id,
attributes,
meta,
relationships,
type
FROM datadog.catalog.catalog_entities
WHERE page[offset] = '{{ page[offset] }}'
AND page[limit] = '{{ page[limit] }}'
AND filter[id] = '{{ filter[id] }}'
AND filter[ref] = '{{ filter[ref] }}'
AND filter[name] = '{{ filter[name] }}'
AND filter[kind] = '{{ filter[kind] }}'
AND filter[owner] = '{{ filter[owner] }}'
AND filter[relation][type] = '{{ filter[relation][type] }}'
AND filter[exclude_snapshot] = '{{ filter[exclude_snapshot] }}'
AND include = '{{ include }}'
AND include_discovered = '{{ include_discovered }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="upsert_catalog_entity"
    values={[
        { label: 'upsert_catalog_entity', value: 'upsert_catalog_entity' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="upsert_catalog_entity">

Create or update entities in Software Catalog.

```sql
INSERT INTO datadog.catalog.catalog_entities (
api_version,
datadog,
extensions,
integrations,
kind,
metadata,
spec
)
SELECT 
'{{ api_version }}' /* required */,
'{{ datadog }}',
'{{ extensions }}',
'{{ integrations }}',
'{{ kind }}' /* required */,
'{{ metadata }}' /* required */,
'{{ spec }}'
RETURNING
data,
included,
meta
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: catalog_entities
  props:
    - name: api_version
      value: "{{ api_version }}"
      description: |
        The version of the schema data that was used to populate this entity's data. This could be via the API, Terraform, or YAML file in a repository. The field is known as schema-version in the previous version.
      valid_values: ['v3', 'v2.2', 'v2.1', 'v2']
    - name: datadog
      description: |
        Datadog product integrations for the service entity.
      value:
        codeLocations:
          - paths: "{{ paths }}"
            repositoryURL: "{{ repositoryURL }}"
        events:
          - name: "{{ name }}"
            query: "{{ query }}"
        logs:
          - name: "{{ name }}"
            query: "{{ query }}"
        performanceData:
          tags:
            - "{{ tags }}"
        pipelines:
          fingerprints:
            - "{{ fingerprints }}"
    - name: extensions
      value: "{{ extensions }}"
      description: |
        Custom extensions. This is the free-formed field to send client-side metadata. No Datadog features are affected by this field.
    - name: integrations
      description: |
        A base schema for defining third-party integrations.
      value:
        opsgenie:
          region: "{{ region }}"
          serviceURL: "{{ serviceURL }}"
        pagerduty:
          serviceURL: "{{ serviceURL }}"
    - name: kind
      value: "{{ kind }}"
      description: |
        The definition of Entity V3 Service Kind object.
      valid_values: ['service']
    - name: metadata
      description: |
        The definition of Entity V3 Metadata object.
      value:
        additionalOwners:
          - name: "{{ name }}"
            type: "{{ type }}"
        contacts:
          - contact: "{{ contact }}"
            name: "{{ name }}"
            type: "{{ type }}"
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        id: "{{ id }}"
        inheritFrom: "{{ inheritFrom }}"
        links:
          - name: "{{ name }}"
            provider: "{{ provider }}"
            type: "{{ type }}"
            url: "{{ url }}"
        managed: "{{ managed }}"
        name: "{{ name }}"
        namespace: "{{ namespace }}"
        owner: "{{ owner }}"
        tags:
          - "{{ tags }}"
    - name: spec
      description: |
        The definition of Entity V3 Service Spec object.
      value:
        componentOf:
          - "{{ componentOf }}"
        dependsOn:
          - "{{ dependsOn }}"
        languages:
          - "{{ languages }}"
        lifecycle: "{{ lifecycle }}"
        tier: "{{ tier }}"
        type: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_catalog_entity"
    values={[
        { label: 'delete_catalog_entity', value: 'delete_catalog_entity' }
    ]}
>
<TabItem value="delete_catalog_entity">

Delete a single entity in Software Catalog.

```sql
DELETE FROM datadog.catalog.catalog_entities
WHERE entity_id = '{{ entity_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="preview_catalog_entities"
    values={[
        { label: 'preview_catalog_entities', value: 'preview_catalog_entities' }
    ]}
>
<TabItem value="preview_catalog_entities">

Accepted

```sql
EXEC datadog.catalog.catalog_entities.preview_catalog_entities 
;
```
</TabItem>
</Tabs>
