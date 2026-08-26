#!/usr/bin/env python3
"""pystackql smoke test for the datadog stackql provider.

Exercises the resources a Datadog user is most likely to touch first - the
same surface the Terraform provider documents in its examples - against a
real Datadog organization:

  read smokes   users, roles, API keys, the current user, organizations, the
                audit log (cursor pagination), IP ranges (a path-level server),
                monitors, dashboards, hosts, SLOs, synthetics tests, log indexes
                and active metrics
  write smokes  a monitor (INSERT / SELECT / REPLACE / EXEC validate / DELETE),
                a dashboard (INSERT / SELECT / DELETE), a v2 downtime
                (INSERT / SELECT / DELETE), a role (INSERT / SELECT / UPDATE /
                DELETE) and an API key (INSERT / SELECT / UPDATE / DELETE)

Cost: every object created here is free on any Datadog plan (monitors,
dashboards, downtimes, roles and keys are not metered), no data is ingested
(no metric, log or event submission, no synthetics runs), and the whole run
is well under 100 API calls - the budget is effectively zero. Everything
created is named `stackql-smoke-<stamp>` and deleted within the run; the
script sweeps stackql-smoke-* breadcrumbs from previous runs first.

Credentials and the target site come from the environment, exactly as the
provider itself reads them (make smoke sources .env):

    export DD_API_KEY=...        # DD-API-KEY header
    export DD_APP_KEY=...        # DD-APPLICATION-KEY header
    export DD_SITE=datadoghq.com # optional; resolves the {site} server
                                 # variable (x-stackQL-envVar), e.g.
                                 # datadoghq.eu, us5.datadoghq.com

Never run this against a production organization you cannot afford to
create test monitors in.

Usage:
    pip install pystackql
    python tests/smoke_test.py                # local provider (provider-dev/openapi)
    python tests/smoke_test.py --live         # published provider from the stackql registry
    python tests/smoke_test.py --read-only    # read smokes only, no writes
    python tests/smoke_test.py --cleanup-only # sweep stackql-smoke-* breadcrumbs and exit
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[1]
SMOKE_PREFIX = "stackql-smoke-"
INTER_REQUEST_DELAY_S = 0.3  # courtesy pacing; Datadog rate limits are per-endpoint and generous
# x-stackQL-envVar server variable resolution (DD_SITE) landed in stackql
# v0.10.601 (any-sdk v0.5.4-alpha01). pystackql manages its own stackql
# binary, so the harness upgrades it when older.
MIN_STACKQL_VERSION = (0, 10, 601)

ERROR_RE = re.compile(
    r"http response status code: [45]|over HTTP error|error assembling|"
    r"cannot find matching operation|FindRoute|no matching operation|"
    r"cannot find any viable servers|parser error|panic|sql packet preparation error|"
    r"no request body for operation|schema unsuitable|Forbidden|Unauthorized",
    re.I,
)
RATE_LIMIT_RE = re.compile(r"status code: 429|rate limit", re.I)


class Smoke:
    def __init__(self, args: argparse.Namespace) -> None:
        self.args = args
        self.stamp = str(int(time.time()))[-6:]
        self.name = f"{SMOKE_PREFIX}{self.stamp}"
        self.results: list[tuple[str, str, str]] = []
        self.requests = 0

        for var in ("DD_API_KEY", "DD_APP_KEY"):
            if not os.environ.get(var):
                sys.exit(f"{var} is not set - see the module docstring")
        # a trailing CR from a CRLF .env silently breaks the auth headers
        for var in ("DD_API_KEY", "DD_APP_KEY", "DD_SITE"):
            if os.environ.get(var):
                os.environ[var] = os.environ[var].strip()

        from pystackql import StackQL

        if args.live:
            self.sq = StackQL(output="dict")
        else:
            reg_path = (BASE_DIR / "provider-dev" / "openapi").resolve()
            reg_url = "file://" + reg_path.as_posix()
            self.sq = StackQL(output="dict", custom_registry=reg_url)
            # pystackql only serialises {"url": ...}; a local file registry
            # additionally needs localDocRoot + nopVerify - patch the exec
            # params in place (compact JSON, shell-quoted).
            full = json.dumps(
                {"url": reg_url, "localDocRoot": reg_path.as_posix(), "verifyConfig": {"nopVerify": True}},
                separators=(",", ":"),
            )
            if sys.platform.startswith("win"):
                quoted = '"' + full.replace('"', '\\"') + '"'
            else:
                import shlex
                quoted = shlex.quote(full)
            params = self.sq.local_query_executor.params
            for i, p in enumerate(params):
                if p == "--registry":
                    params[i + 1] = quoted
                    break
        self.ensure_stackql_version()
        if args.live:
            # the published provider must be present in the registry cache
            self.q("REGISTRY PULL datadog")

    def ensure_stackql_version(self) -> None:
        def parse(v: str) -> tuple[int, ...]:
            return tuple(int(x) for x in re.findall(r"\d+", str(v))[:3])

        current = parse(getattr(self.sq, "version", "") or "")
        if current and current >= MIN_STACKQL_VERSION:
            return
        print(f"stackql {self.sq.version} at {self.sq.bin_path} is older than "
              f"v{'.'.join(map(str, MIN_STACKQL_VERSION))} (x-stackQL-envVar support) - upgrading pystackql's binary")
        self.sq.upgrade(showprogress=False)
        if parse(self.sq.version) < MIN_STACKQL_VERSION:
            sys.exit(f"stackql {self.sq.version} is still too old after upgrade")

    # ------------------------------------------------------------------ core
    def q(self, sql: str):
        if self.requests:
            time.sleep(INTER_REQUEST_DELAY_S)
        self.requests += 1
        try:
            head = sql.lstrip().upper()
            if head.startswith(("SELECT", "SHOW", "DESCRIBE")) or "RETURNING" in head:
                out = self.sq.execute(sql)
            else:
                out = self.sq.executeStmt(sql)
        except Exception as exc:  # noqa: BLE001
            return [], str(exc)
        text = json.dumps(out, default=str)
        if RATE_LIMIT_RE.search(text):
            return out if isinstance(out, list) else [out], "RATE LIMITED (429): " + text
        if ERROR_RE.search(text):
            return out if isinstance(out, list) else [out], text
        if isinstance(out, list) and out and isinstance(out[0], dict) and "error" in out[0]:
            return out, text
        return out if isinstance(out, list) else [out], None

    def step(self, name: str, sql: str, expect_rows: bool = False, contains: str | None = None):
        rows, err = self.q(sql)
        if err:
            self.results.append((name, "FAIL", err[:200]))
            print(f"  FAIL  {name}  [{err[:140]}]")
            return None
        blob = json.dumps(rows, default=str)
        if expect_rows and not rows:
            self.results.append((name, "FAIL", "expected rows, got none"))
            print(f"  FAIL  {name}  [no rows]")
            return None
        if contains and contains not in blob:
            self.results.append((name, "FAIL", f"'{contains}' not in result"))
            print(f"  FAIL  {name}  ['{contains}' not in {blob[:100]}]")
            return None
        self.results.append((name, "PASS", ""))
        print(f"  PASS  {name}")
        return rows

    def record(self, name: str, ok: bool, note: str = "") -> None:
        self.results.append((name, "PASS" if ok else "FAIL", note))
        print(f"  {'PASS' if ok else 'FAIL'}  {name}{'' if ok else '  [' + note[:120] + ']'}")

    @staticmethod
    def attr(row: dict, key: str):
        attrs = row.get("attributes")
        if isinstance(attrs, str):
            try:
                attrs = json.loads(attrs)
            except ValueError:
                return None
        return (attrs or {}).get(key)

    # ------------------------------------------------------- breadcrumb sweep
    def cleanup_breadcrumbs(self) -> None:
        print("== breadcrumb sweep ==")
        rows, err = self.q("SELECT id, name FROM datadog.monitoring.monitors")
        if err:
            print(f"  WARN monitor sweep failed: {err[:120]}")
        for r in rows or []:
            if str(r.get("name", "")).startswith(SMOKE_PREFIX):
                print(f"  sweeping monitor {r['name']}")
                self.q(f"DELETE FROM datadog.monitoring.monitors WHERE monitor_id = {r['id']}")
        rows, err = self.q("SELECT id, title FROM datadog.dashboards.dashboards")
        if err:
            print(f"  WARN dashboard sweep failed: {err[:120]}")
        for r in rows or []:
            if str(r.get("title", "")).startswith(SMOKE_PREFIX):
                print(f"  sweeping dashboard {r['title']}")
                self.q(f"DELETE FROM datadog.dashboards.dashboards WHERE dashboard_id = '{r['id']}'")
        rows, err = self.q("SELECT id, attributes FROM datadog.service_management.downtimes")
        if err:
            print(f"  WARN downtime sweep failed: {err[:120]}")
        for r in rows or []:
            if str(self.attr(r, "message") or "").startswith(SMOKE_PREFIX) and self.attr(r, "status") != "canceled":
                print(f"  sweeping downtime {r['id']}")
                self.q(f"DELETE FROM datadog.service_management.downtimes WHERE downtime_id = '{r['id']}'")
        rows, err = self.q("SELECT id, attributes FROM datadog.organization.roles")
        if err:
            print(f"  WARN role sweep failed: {err[:120]}")
        for r in rows or []:
            if str(self.attr(r, "name") or "").startswith(SMOKE_PREFIX):
                print(f"  sweeping role {self.attr(r, 'name')}")
                self.q(f"DELETE FROM datadog.organization.roles WHERE role_id = '{r['id']}'")
        rows, err = self.q("SELECT id, attributes FROM datadog.organization.api_keys")
        if err:
            print(f"  WARN api key sweep failed: {err[:120]}")
        for r in rows or []:
            if str(self.attr(r, "name") or "").startswith(SMOKE_PREFIX):
                print(f"  sweeping api key {self.attr(r, 'name')}")
                self.q(f"DELETE FROM datadog.organization.api_keys WHERE api_key_id = '{r['id']}'")

    # -------------------------------------------------------------- read path
    def read_smokes(self) -> None:
        print("== read smokes ==")
        self.step("show services", "SHOW SERVICES IN datadog", expect_rows=True, contains="monitoring")
        self.step("users (v2 JSON:API, $.data)",
                  "SELECT id, json_extract(attributes, '$.email') AS email, json_extract(attributes, '$.status') AS status FROM datadog.organization.users",
                  expect_rows=True)
        self.step("current user", "SELECT id, json_extract(attributes, '$.email') AS email FROM datadog.organization.current_user", expect_rows=True)
        self.step("roles", "SELECT id, json_extract(attributes, '$.name') AS name FROM datadog.organization.roles", expect_rows=True, contains="Datadog Admin Role")
        self.step("api keys", "SELECT id, json_extract(attributes, '$.name') AS name FROM datadog.organization.api_keys", expect_rows=True)
        self.step("application keys (current user)", "SELECT id, json_extract(attributes, '$.name') AS name FROM datadog.organization.current_user_application_keys")
        self.step("audit log (cursor pagination, filter[from] pushed as a query param)",
                  "SELECT id, json_extract(attributes, '$.timestamp') AS ts FROM datadog.organization.audit_logs WHERE \"filter[from]\" = 'now-1h'")
        self.step("ip ranges (path-level server ip-ranges.<site>)", "SELECT version, modified FROM datadog.organization.ip_ranges", expect_rows=True)
        self.step("monitors (v1 bare-array list)", "SELECT id, name, type, overall_state FROM datadog.monitoring.monitors")
        self.step("dashboards (v1 single-array envelope)", "SELECT id, title, layout_type FROM datadog.dashboards.dashboards")
        self.step("hosts (v1 $.host_list)", "SELECT host_name, up, last_reported_time FROM datadog.infrastructure.hosts")
        self.step("host totals", "SELECT total_up, total_active FROM datadog.infrastructure.host_totals", expect_rows=True)
        self.step("slos", "SELECT id, name, type FROM datadog.service_management.slos")
        self.step("synthetics tests", "SELECT public_id, name, type, status FROM datadog.monitoring.synthetics_tests")
        self.step("synthetics locations", "SELECT id, name FROM datadog.monitoring.synthetics_locations", expect_rows=True)
        self.step("log indexes", "SELECT name, num_retention_days FROM datadog.logs.indexes")
        self.step("active metrics (from is a required query param)",
                  f"SELECT metrics FROM datadog.metrics.active_metrics WHERE \"from\" = {int(time.time()) - 3600}", expect_rows=True)
        self.step("usage summary (v1, month-scoped)",
                  f"SELECT date, infra_host_top99p, apm_host_top99p FROM datadog.organization.usage_summary WHERE start_month = '{time.strftime('%Y-%m')}'", expect_rows=True)
        self.step("LIMIT pushdown (page[size]=2 on the users list)",
                  "SELECT id FROM datadog.organization.users LIMIT 2")

    # ------------------------------------------------------------- write path
    def monitor_lifecycle(self) -> None:
        name = self.name
        print(f"== monitor lifecycle ({name}) ==")
        self.step("monitor EXEC validate",
                  f"EXEC datadog.monitoring.monitors.validate_monitor @type = 'metric alert', @query = 'avg(last_5m):avg:system.cpu.user{{*}} > 90', @name = '{name}'")
        rows = self.step("monitor INSERT (v1, naive body translate)",
                         f"INSERT INTO datadog.monitoring.monitors (name, type, query, message, tags) "
                         f"SELECT '{name}', 'metric alert', 'avg(last_5m):avg:system.cpu.user{{*}} > 90', 'stackql smoke test - safe to delete', '[\"smoke:stackql\"]'")
        rows, err = self.q("SELECT id, name FROM datadog.monitoring.monitors")
        mon = next((r for r in rows or [] if r.get("name") == name), None)
        self.record("monitor visible after INSERT", mon is not None, err or "not found in list")
        if not mon:
            return
        mid = mon["id"]
        self.step("monitor get (WHERE monitor_id)", f"SELECT name, type, query FROM datadog.monitoring.monitors WHERE monitor_id = {mid}", expect_rows=True, contains=name)
        self.step("monitor search (v1 search envelope $.monitors)", f"SELECT id, name FROM datadog.monitoring.monitor_search_results WHERE query = 'title:\"{name}\"'")
        self.step("monitor REPLACE (v1 PUT)",
                  f"REPLACE datadog.monitoring.monitors SET name = '{name}', type = 'metric alert', query = 'avg(last_5m):avg:system.cpu.user{{*}} > 95', message = 'updated by stackql smoke' WHERE monitor_id = {mid}")
        self.step("monitor reflects REPLACE", f"SELECT query FROM datadog.monitoring.monitors WHERE monitor_id = {mid}", expect_rows=True, contains="> 95")
        self.step("monitor DELETE", f"DELETE FROM datadog.monitoring.monitors WHERE monitor_id = {mid}")
        rows, err = self.q("SELECT id FROM datadog.monitoring.monitors")
        self.record("monitor gone after DELETE", not err and all(str(r.get("id")) != str(mid) for r in rows), err or "")

    def dashboard_lifecycle(self) -> None:
        name = self.name
        print(f"== dashboard lifecycle ({name}) ==")
        widgets = json.dumps([{"definition": {"type": "note", "content": "stackql smoke test - safe to delete"}}])
        self.step("dashboard INSERT (v1)",
                  f"INSERT INTO datadog.dashboards.dashboards (title, layout_type, widgets, description) "
                  f"SELECT '{name}', 'ordered', '{widgets}', 'stackql smoke test'")
        rows, err = self.q("SELECT id, title FROM datadog.dashboards.dashboards")
        dash = next((r for r in rows or [] if r.get("title") == name), None)
        self.record("dashboard visible after INSERT", dash is not None, err or "not found in list")
        if not dash:
            return
        did = dash["id"]
        self.step("dashboard get", f"SELECT title, layout_type, widgets FROM datadog.dashboards.dashboards WHERE dashboard_id = '{did}'", expect_rows=True, contains="note")
        self.step("dashboard DELETE", f"DELETE FROM datadog.dashboards.dashboards WHERE dashboard_id = '{did}'")
        rows, err = self.q("SELECT id FROM datadog.dashboards.dashboards")
        self.record("dashboard gone after DELETE", not err and all(r.get("id") != did for r in rows), err or "")

    def downtime_lifecycle(self) -> None:
        name = self.name
        print(f"== downtime lifecycle ({name}) ==")
        start = int(time.time()) + 3600
        body = json.dumps({
            "type": "downtime",
            "attributes": {
                "message": f"{name} stackql smoke test - safe to delete",
                "monitor_identifier": {"monitor_tags": ["smoke:stackql"]},
                "scope": "env:stackql-smoke",
                "schedule": {"start": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(start)),
                             "end": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(start + 3600))},
            },
        })
        self.step("downtime INSERT (v2 JSON:API body as the data column)",
                  f"INSERT INTO datadog.service_management.downtimes (data) SELECT '{body}'")
        rows, err = self.q("SELECT id, attributes FROM datadog.service_management.downtimes")
        dt = next((r for r in rows or [] if str(self.attr(r, "message") or "").startswith(name)), None)
        self.record("downtime visible after INSERT", dt is not None, err or "not found in list")
        if not dt:
            return
        dtid = dt["id"]
        self.step("downtime get", f"SELECT id, json_extract(attributes, '$.scope') AS scope FROM datadog.service_management.downtimes WHERE downtime_id = '{dtid}'", expect_rows=True, contains="env:stackql-smoke")
        self.step("downtime DELETE (cancel)", f"DELETE FROM datadog.service_management.downtimes WHERE downtime_id = '{dtid}'")

    def role_lifecycle(self) -> None:
        name = self.name
        print(f"== role lifecycle ({name}) ==")
        body = json.dumps({"type": "roles", "attributes": {"name": name}})
        self.step("role INSERT", f"INSERT INTO datadog.organization.roles (data) SELECT '{body}'")
        rows, err = self.q("SELECT id, attributes FROM datadog.organization.roles")
        role = next((r for r in rows or [] if self.attr(r, "name") == name), None)
        self.record("role visible after INSERT", role is not None, err or "not found in list")
        if not role:
            return
        rid = role["id"]
        self.step("role get", f"SELECT id, json_extract(attributes, '$.name') AS name FROM datadog.organization.roles WHERE role_id = '{rid}'", expect_rows=True, contains=name)
        upd = json.dumps({"id": rid, "type": "roles", "attributes": {"name": f"{name}-renamed"}})
        self.step("role UPDATE (PATCH)", f"UPDATE datadog.organization.roles SET data = '{upd}' WHERE role_id = '{rid}'")
        self.step("role reflects UPDATE", f"SELECT json_extract(attributes, '$.name') AS name FROM datadog.organization.roles WHERE role_id = '{rid}'", expect_rows=True, contains=f"{name}-renamed")
        self.step("role permissions (list)", f"SELECT id, json_extract(attributes, '$.name') AS name FROM datadog.organization.role_permissions WHERE role_id = '{rid}'")
        self.step("role DELETE", f"DELETE FROM datadog.organization.roles WHERE role_id = '{rid}'")
        rows, err = self.q("SELECT id FROM datadog.organization.roles")
        self.record("role gone after DELETE", not err and all(r.get("id") != rid for r in rows), err or "")

    def api_key_lifecycle(self) -> None:
        name = self.name
        print(f"== API key lifecycle ({name}) ==")
        body = json.dumps({"type": "api_keys", "attributes": {"name": name}})
        self.step("api key INSERT", f"INSERT INTO datadog.organization.api_keys (data) SELECT '{body}'")
        rows, err = self.q("SELECT id, attributes FROM datadog.organization.api_keys")
        key = next((r for r in rows or [] if self.attr(r, "name") == name), None)
        self.record("api key visible after INSERT", key is not None, err or "not found in list")
        if not key:
            return
        kid = key["id"]
        upd = json.dumps({"id": kid, "type": "api_keys", "attributes": {"name": f"{name}-renamed"}})
        self.step("api key UPDATE (PATCH)", f"UPDATE datadog.organization.api_keys SET data = '{upd}' WHERE api_key_id = '{kid}'")
        self.step("api key reflects UPDATE", f"SELECT json_extract(attributes, '$.name') AS name FROM datadog.organization.api_keys WHERE api_key_id = '{kid}'", expect_rows=True, contains=f"{name}-renamed")
        self.step("api key DELETE", f"DELETE FROM datadog.organization.api_keys WHERE api_key_id = '{kid}'")
        rows, err = self.q("SELECT id FROM datadog.organization.api_keys")
        self.record("api key gone after DELETE", not err and all(r.get("id") != kid for r in rows), err or "")

    # ---------------------------------------------------------------- summary
    def summary(self) -> int:
        print("\n== summary ==")
        counts = {"PASS": 0, "FAIL": 0}
        for name, status, note in self.results:
            counts[status] = counts.get(status, 0) + 1
            if status != "PASS":
                print(f"  {status:5s} {name}  [{note[:110]}]")
        target = "published provider (registry)" if self.args.live else "local provider (provider-dev/openapi)"
        print(f"  {counts['PASS']} passed, {counts['FAIL']} failed; {self.requests} statements against the {target}")
        return 1 if counts["FAIL"] else 0


def main() -> int:
    ap = argparse.ArgumentParser(description="datadog provider smoke test")
    ap.add_argument("--live", action="store_true",
                    help="run against the published datadog provider from the stackql registry instead of provider-dev/openapi")
    ap.add_argument("--cleanup-only", action="store_true", help="sweep stackql-smoke-* objects and exit")
    ap.add_argument("--read-only", action="store_true", help="read smokes only, no writes")
    args = ap.parse_args()

    smoke = Smoke(args)
    print(f"datadog smoke test  target={'live' if args.live else 'local'}  site={os.environ.get('DD_SITE') or 'datadoghq.com (default)'}  "
          f"name={smoke.name}  stackql={smoke.sq.version}")
    smoke.cleanup_breadcrumbs()
    if args.cleanup_only:
        return 0
    smoke.read_smokes()
    if not args.read_only:
        smoke.monitor_lifecycle()
        smoke.dashboard_lifecycle()
        smoke.downtime_lifecycle()
        smoke.role_lifecycle()
        smoke.api_key_lifecycle()
    return smoke.summary()


if __name__ == "__main__":
    sys.exit(main())
