#!/usr/bin/env bash

# Downloads the Datadog v1 and v2 OpenAPI specs (published in the
# datadog-api-client-typescript repository, the source of every official
# Datadog API client) into provider-dev/downloaded/ and records the fetch
# date and content hashes in provider-dev/config/spec_pin.json.
#
# Both specs are versioned only by the git history of that repository (the
# info.version field is a constant "1.0"), so the pin is the record of what
# was built. If a download does not match the recorded pin the script fails
# without touching the committed snapshots; pass --update to accept the
# upstream change and rewrite the pin (review the resulting spec diff).
#
# Usage: bin/fetch-spec.sh [--update]

set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
DOWNLOAD_DIR="$REPO_ROOT/provider-dev/downloaded"
PIN_FILE="$REPO_ROOT/provider-dev/config/spec_pin.json"
BASE_URL="https://raw.githubusercontent.com/DataDog/datadog-api-client-typescript/master/.generator/schemas"

UPDATE=false
if [ "${1:-}" = "--update" ]; then
  UPDATE=true
fi

mkdir -p "$DOWNLOAD_DIR"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

for v in v1 v2; do
  echo "Fetching Datadog $v spec from $BASE_URL/$v/openapi.yaml"
  curl -fsSL "$BASE_URL/$v/openapi.yaml" -o "$TMP_DIR/$v-openapi.yaml"
done

UPDATE="$UPDATE" TMP_DIR="$TMP_DIR" DOWNLOAD_DIR="$DOWNLOAD_DIR" PIN_FILE="$PIN_FILE" BASE_URL="$BASE_URL" \
node "$REPO_ROOT/provider-dev/scripts/record_spec_pin.mjs"
