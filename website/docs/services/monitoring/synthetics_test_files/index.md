--- 
title: synthetics_test_files
hide_title: false
hide_table_of_contents: false
keywords:
  - synthetics_test_files
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>synthetics_test_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synthetics_test_files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="datadog.monitoring.synthetics_test_files" /></td></tr>
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
    <td><a href="#get_test_file_download_url"><CopyableCode code="get_test_file_download_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-bucketKey"><code>bucketKey</code></a></td>
    <td></td>
    <td>Get a presigned URL to download a file attached to a Synthetic test.&lt;br /&gt;The returned URL is temporary and expires after a short period.</td>
</tr>
<tr>
    <td><a href="#get_test_file_multipart_presigned_urls"><CopyableCode code="get_test_file_multipart_presigned_urls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-bucketKeyPrefix"><code>bucketKeyPrefix</code></a>, <a href="#parameter-parts"><code>parts</code></a></td>
    <td></td>
    <td>Get presigned URLs for uploading a file to a Synthetic test using multipart upload.&lt;br /&gt;Returns the presigned URLs for each part along with the bucket key that references the file.</td>
</tr>
<tr>
    <td><a href="#abort_test_file_multipart_upload"><CopyableCode code="abort_test_file_multipart_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td></td>
    <td>Abort an in-progress multipart file upload for a Synthetic test. This cancels the upload&lt;br /&gt;and releases any storage used by already-uploaded parts.</td>
</tr>
<tr>
    <td><a href="#complete_test_file_multipart_upload"><CopyableCode code="complete_test_file_multipart_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-public_id"><code>public_id</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-parts"><code>parts</code></a></td>
    <td></td>
    <td>Complete a multipart file upload for a Synthetic test. Call this endpoint after all parts&lt;br /&gt;have been uploaded using the presigned URLs obtained from the multipart presigned URLs endpoint.</td>
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
<tr id="parameter-public_id">
    <td><CopyableCode code="public_id" /></td>
    <td><code>string</code></td>
    <td>The public ID of the Synthetic test.</td>
</tr>
<tr id="parameter-site">
    <td><CopyableCode code="site" /></td>
    <td><code>string</code></td>
    <td>The Datadog site (region) for your organization, for example datadoghq.com, us3.datadoghq.com, us5.datadoghq.com, ap1.datadoghq.com, ap2.datadoghq.com, datadoghq.eu, ddog-gov.com. Resolved from the DD_SITE environment variable when set. Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="get_test_file_download_url"
    values={[
        { label: 'get_test_file_download_url', value: 'get_test_file_download_url' },
        { label: 'get_test_file_multipart_presigned_urls', value: 'get_test_file_multipart_presigned_urls' },
        { label: 'abort_test_file_multipart_upload', value: 'abort_test_file_multipart_upload' },
        { label: 'complete_test_file_multipart_upload', value: 'complete_test_file_multipart_upload' }
    ]}
>
<TabItem value="get_test_file_download_url">

Get a presigned URL to download a file attached to a Synthetic test.&lt;br /&gt;The returned URL is temporary and expires after a short period.

```sql
EXEC datadog.monitoring.synthetics_test_files.get_test_file_download_url 
@public_id='{{ public_id }}' --required, 
@@json=
'{
"bucketKey": "{{ bucketKey }}"
}'
;
```
</TabItem>
<TabItem value="get_test_file_multipart_presigned_urls">

Get presigned URLs for uploading a file to a Synthetic test using multipart upload.&lt;br /&gt;Returns the presigned URLs for each part along with the bucket key that references the file.

```sql
EXEC datadog.monitoring.synthetics_test_files.get_test_file_multipart_presigned_urls 
@public_id='{{ public_id }}' --required, 
@@json=
'{
"bucketKeyPrefix": "{{ bucketKeyPrefix }}", 
"parts": "{{ parts }}"
}'
;
```
</TabItem>
<TabItem value="abort_test_file_multipart_upload">

Abort an in-progress multipart file upload for a Synthetic test. This cancels the upload&lt;br /&gt;and releases any storage used by already-uploaded parts.

```sql
EXEC datadog.monitoring.synthetics_test_files.abort_test_file_multipart_upload 
@public_id='{{ public_id }}' --required, 
@@json=
'{
"key": "{{ key }}", 
"uploadId": "{{ uploadId }}"
}'
;
```
</TabItem>
<TabItem value="complete_test_file_multipart_upload">

Complete a multipart file upload for a Synthetic test. Call this endpoint after all parts&lt;br /&gt;have been uploaded using the presigned URLs obtained from the multipart presigned URLs endpoint.

```sql
EXEC datadog.monitoring.synthetics_test_files.complete_test_file_multipart_upload 
@public_id='{{ public_id }}' --required, 
@@json=
'{
"key": "{{ key }}", 
"parts": "{{ parts }}", 
"uploadId": "{{ uploadId }}"
}'
;
```
</TabItem>
</Tabs>
