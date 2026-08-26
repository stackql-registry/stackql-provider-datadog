# StackQL datadog provider - build, test and docs pipeline.
#
# Every step is deterministic and re-runnable; manual mapping decisions live
# in provider-dev/config and provider-dev/scripts, never in hand-edited
# generated artifacts. `make all` runs the full chain and can be used at any
# stage to rebuild and test the provider and docs from upstream changes:
#
#   deps        npm install (@stackql/provider-utils, @stackql/pgwire-lite)
#   fetch-spec  download the Datadog v1 + v2 OpenAPI specs and verify them
#               against the pin in provider-dev/config/spec_pin.json
#               (fails on drift - `make refresh-spec` accepts it)
#   merge       merge v1 + v2 into provider-dev/build/datadog-openapi.yaml
#   split       split the merged spec into per-service specs (provider-dev/
#               source) using provider-dev/config/service_names.json
#   normalize   datadog pre-normalize, provider-utils normalize, and the
#               bare-array unwrap (post_normalize.mjs)
#   mappings    refresh provider-dev/config/all_services.csv (analyze keeps
#               every existing row - the CSV is the durable record of the
#               operation -> resource/method/verb mapping) then
#               map_operations.mjs fills in new operations from its rules,
#               prunes retired operations, validates, and writes the
#               operation inventory
#   generate    generate the provider tree (servers, auth, naive request
#               body translate) then post_process.mjs adds cursor
#               pagination, LIMIT/OFFSET pushdown, the snake_case surface and
#               the intake/On-Call path servers
#   test        offline validation + meta-route gate (no credentials)
#   docs        generate the Docusaurus markdown (snake_case surface) and
#               sanitize it for MDX
#   website     yarn build of website/ (vendors the shared config)
#
# Live smoke tests hit the Datadog API and need credentials, so they are
# NOT part of `all`. Populate .env (DD_API_KEY, DD_APP_KEY, optionally
# DD_SITE) then:
#
#   make smoke          # local provider (provider-dev/openapi)
#   make smoke-live     # published provider from the StackQL registry
#
# Requirements: Node >= 20, GNU make, bash, a stackql binary ($STACKQL,
# ./stackql or on PATH), Python 3 (a venv with pystackql is created on
# demand for the smoke suite), yarn for the website. Runs under Linux /
# WSL / macOS.

SHELL := bash
.DEFAULT_GOAL := help

PROVIDER := datadog
VERSION := v00.00.00000
SOURCE_DIR := provider-dev/source
CONFIG_DIR := provider-dev/config
OPENAPI_DIR := provider-dev/openapi
SERVICES_DIR := $(OPENAPI_DIR)/src/$(PROVIDER)
PROVIDER_DIR := $(SERVICES_DIR)/$(VERSION)
MERGED_SPEC := provider-dev/build/$(PROVIDER)-openapi.yaml
WEBSITE_DIR := website
PORT ?= 5444
VENV := tests/.venv
PY := $(VENV)/bin/python
ENV_FILE := .env

.PHONY: help deps fetch-spec refresh-spec merge split normalize mappings generate post-process build \
        test-offline test-meta test smoke smoke-live smoke-cleanup venv \
        docs website website-start start-server stop-server server-status clean all

help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-16s %s\n", $$1, $$2}'

deps: ## install node dependencies (latest @stackql/provider-utils per package.json range)
	npm install

# ---------------------------------------------------------------- pipeline

fetch-spec: ## download the Datadog v1 + v2 specs and verify them against the pin (fails on drift)
	npm run fetch-spec

refresh-spec: ## download the specs and ACCEPT the upstream change (rewrites the pin - review the diff)
	npm run fetch-spec -- --update

merge: ## merge the pinned v1 + v2 specs into $(MERGED_SPEC)
	npm run merge-specs

split: merge ## split the merged spec into per-service specs (service_names.json rules)
	rm -rf $(SOURCE_DIR)/*.yaml
	npm run split -- \
	  --provider-name $(PROVIDER) \
	  --api-doc $(MERGED_SPEC) \
	  --svc-discriminator function \
	  --svc-discriminator-fn provider-dev/scripts/service_discriminator.mjs \
	  --output-dir $(SOURCE_DIR) \
	  --overwrite

normalize: ## datadog pre-normalize, provider-utils normalize, bare-array unwrap
	npm run pre-normalize -- --api-dir $(SOURCE_DIR)
	npm run normalize -- --api-dir $(SOURCE_DIR)
	npm run post-normalize -- --api-dir $(SOURCE_DIR)

mappings: ## refresh all_services.csv (existing rows kept) and map new operations (fails on unmapped ops)
	npm run generate-mappings -- --input-dir $(SOURCE_DIR) --output-dir $(CONFIG_DIR)
	npm run map-operations

generate: ## generate the provider (servers, auth, naive request body translate) then post-process
	rm -rf $(OPENAPI_DIR)/*
	npm run generate-provider -- \
	  --provider-name $(PROVIDER) \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(SERVICES_DIR) \
	  --config-path $(CONFIG_DIR)/all_services.csv \
	  --servers $(CONFIG_DIR)/servers.json \
	  --provider-config $(CONFIG_DIR)/provider_config.json \
	  --naive-req-body-translate \
	  --overwrite
	$(MAKE) post-process

post-process: ## re-apply generated-provider fixes (pagination, pushdown, snake_case surface, path servers)
	npm run post-process

build: fetch-spec split normalize mappings generate ## full spec -> provider pipeline

# ------------------------------------------------------------------- tests

test-offline: ## offline validation against the local file registry (SHOW / DESCRIBE)
	node tests/offline_validation.mjs

# Go/no-go gate: the server is always torn down and the meta-test's exit
# status is preserved so a failure stops `make all`.
test-meta: ## meta-route suite against a local stackql server (every SHOW / DESCRIBE route)
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)
	node bin/test-meta-routes.cjs $(PROVIDER) --port $(PORT); status=$$?; bash bin/stop-server.sh --port $(PORT); exit $$status

test: test-offline test-meta ## all non-live test layers

$(VENV)/bin/activate:
	python3 -m venv $(VENV)
	$(VENV)/bin/pip install --quiet --upgrade pip pystackql

venv: $(VENV)/bin/activate ## create the python venv with pystackql for the smoke suite

# `make smoke` sources .env when present so a developer checkout works
# without exporting anything; CI sets the variables from secrets.
with_env = set -a; [ -f $(ENV_FILE) ] && source <(tr -d '\r' < $(ENV_FILE)); set +a;

smoke: venv ## live smoke suite against the LOCAL provider - reads + monitor/dashboard/downtime/role/key lifecycles (needs .env)
	@$(with_env) $(PY) tests/smoke_test.py

smoke-live: venv ## live smoke suite against the PUBLISHED provider in the StackQL registry (post-publish verification)
	@$(with_env) $(PY) tests/smoke_test.py --live

smoke-cleanup: venv ## sweep stackql-smoke-* objects and exit
	@$(with_env) $(PY) tests/smoke_test.py --cleanup-only

# -------------------------------------------------------------------- docs

docs: ## generate the website docs (snake_case surface, provider-utils >= 0.7.8), then sanitize
	rm -rf $(WEBSITE_DIR)/docs/*
	npm run generate-docs -- \
	  --provider-name $(PROVIDER) \
	  --provider-dir ./$(PROVIDER_DIR) \
	  --output-dir ./$(WEBSITE_DIR) \
	  --provider-data-dir ./provider-dev/docgen/provider-data \
	  --snake-case-aliases
	node $(WEBSITE_DIR)/scripts/sanitize-docs.mjs

website: ## build the docusaurus microsite (vendors the shared config first)
	cd $(WEBSITE_DIR) && yarn install && yarn build

website-start: ## run the docusaurus dev server
	cd $(WEBSITE_DIR) && yarn install && yarn start

# ------------------------------------------------------------------ server

start-server: ## start a local stackql server on PORT=$(PORT) serving the generated provider
	bash bin/start-server.sh --provider $(PROVIDER) --registry "$(CURDIR)/$(OPENAPI_DIR)" --port $(PORT)

stop-server: ## stop the local stackql server
	bash bin/stop-server.sh --port $(PORT)

server-status: ## show the local stackql server status
	bash bin/server-status.sh --port $(PORT)

clean: ## remove generated artifacts (merged spec, split source, provider output, docs, website build)
	rm -rf provider-dev/build $(SOURCE_DIR)/*.yaml $(OPENAPI_DIR)/* $(WEBSITE_DIR)/docs/services $(WEBSITE_DIR)/build $(WEBSITE_DIR)/.docusaurus

all: deps build test docs website ## everything non-billable: deps, pipeline, tests, docs, site build
	@echo ""
	@echo "make all complete: provider + docs generated, offline and meta-route gates passed."
	@echo "Live smoke tests are run separately - see 'make help' (smoke, smoke-live)."
