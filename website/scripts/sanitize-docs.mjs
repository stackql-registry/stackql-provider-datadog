#!/usr/bin/env node
// Post-docgen sanitizer for the generated provider docs.
//
// AWS descriptions carry literal angle-bracket placeholders (<region>,
// <account-id>), stray unpaired HTML (</code>, <p>) and XML samples
// (<Grantee xsi:type="...">). MDX v3 parses any raw <token> as JSX and
// fails the build on the first mismatch; braces ({...}) parse as JSX
// expressions with the same failure mode.
//
// The doc generator's own structure is line-shaped: one `<td>...</td>`
// cell per line, and description text ONLY ever appears as td inner
// content. So the deterministic fix: inside every description cell,
// escape ALL angle brackets and braces (protecting the stage-1
// backtick-wrapped `<placeholder>` tokens as <code> spans); leave
// every other line - tables, Tabs/TabItem/CodeBlock, CopyableCode,
// index link lists - byte-for-byte untouched.
//
// Run after `npm run generate-docs`, before building the website.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');

const TD_LINE = /^(\s*<td>)(.*)(<\/td>\s*)$/;
const LINK_TOKEN = '<a href="#[^"]*">(?:<CopyableCode\\b[^<>]*\\/>|<code>[^<>]*<\\/code>)<\\/a>';
const LINK_TOKEN_CELL = new RegExp(`^${LINK_TOKEN}(?:,\\s*${LINK_TOKEN})*$`);
const BACKTICKED = /`<([A-Za-z][A-Za-z0-9_.:-]*)>`/g;
// Control-char sentinels: cannot occur in generated markdown.
const OPEN = '';
const CLOSE = '';

let filesChanged = 0;
let cellsEscaped = 0;
let siteRelaxed = 0;

// ---------------------------------------------------------------------------
// datadog-specific: the `site` server variable is optional
//
// `site` is the only OpenAPI server variable (https://api.{site}); it has a
// default (datadoghq.com) and is resolved from DD_SITE (x-stackQL-envVar).
// docgen merges server variables into every method's required-parameter
// cell and example WHERE / EXEC clauses as if they were required. Three
// deterministic rewrites, applied to every generated page:
//   1. the `site` token is removed from every required-parameters cell;
//   2. the `site = '{{ site }}' -- required` predicate is removed from every
//      SQL example (a leading WHERE is carried over to the next predicate),
//      as is the `@site='{{ site }}' --required` EXEC variable;
//   3. the Parameters table keeps its `site` row, with the description
//      rewritten to state the default and the DD_SITE resolution.
// ---------------------------------------------------------------------------
const SITE_LINK = /<a href="#parameter-site"><code>site<\/code><\/a>/;
// SELECT examples: `WHERE site = '{{ site }}' -- required` / `AND site = ...`
const SITE_SQL = /^(\s*)(WHERE|AND)\s+site\s*=\s*'\{\{ site \}\}'\s*--\s*required\s*$/;
// UPDATE / REPLACE / DELETE examples: a bare `WHERE` line followed by one
// predicate per line, `site = '{{ site }}' --required` or `AND site = ... --required;`
const SITE_PREDICATE = /^\s*(AND\s+)?site\s*=\s*'\{\{ site \}\}'\s*--required(;?)\s*$/;
const SITE_EXEC = /^\s*@site='\{\{ site \}\}'\s*--required,?\s*$/;
const SITE_DESC = /\(default: datadoghq\.com, x-stackQL-envVar: DD_SITE\)/;
// INSERT examples: `site` / `site,` in the column list, `'{{ site }}'` / `'{{ site }}',` in the value list
const SITE_INSERT_COL = /^site(,?)$/;
const SITE_INSERT_VAL = /^'\{\{ site \}\}'(,?)$/;
// stackql-deploy manifest: a three-line prop block
const SITE_MANIFEST = /^\s*- name: site$/;

function stripTrailingComma(lines, i) {
  const j = i - 1;
  if (j >= 0 && /,\s*$/.test(lines[j])) lines[j] = lines[j].replace(/,\s*$/, '');
}

function relaxSiteVariable(lines) {
  let changed = false;
  let inSiteRow = false;
  let inInsert = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // 1. required-params cells
    if (SITE_LINK.test(line) && /^\s*<td>/.test(line)) {
      lines[i] = line
        .replace(/,\s*<a href="#parameter-site"><code>site<\/code><\/a>/, '')
        .replace(/<a href="#parameter-site"><code>site<\/code><\/a>,?\s*/, '');
      changed = true; siteRelaxed++;
      continue;
    }
    // 2a. SQL predicate (SELECT examples)
    const sql = SITE_SQL.exec(line);
    if (sql) {
      const next = lines[i + 1] || '';
      if (sql[2] === 'WHERE' && /^\s*AND\s+/.test(next)) {
        lines[i + 1] = next.replace(/^(\s*)AND\s+/, '$1WHERE ');
      }
      lines.splice(i, 1);
      i--;
      changed = true; siteRelaxed++;
      continue;
    }
    // 2b. SQL predicate (mutation examples, one predicate per line)
    const pred = SITE_PREDICATE.exec(line);
    if (pred) {
      const hasAnd = !!pred[1];
      const semi = pred[2] === ';';
      const prev = lines[i - 1] || '';
      const next = lines[i + 1] || '';
      if (!hasAnd && /^\s*AND\s+/.test(next)) {
        lines[i + 1] = next.replace(/^(\s*)AND\s+/, '$1');
      }
      lines.splice(i, 1);
      i--;
      if (semi) {
        // the statement terminator moves to the previous predicate
        if (/^\s*WHERE\s*$/.test(prev)) {
          // site was the only predicate: drop the WHERE line as well
          lines.splice(i, 1);
          i--;
        }
        if (i >= 0) lines[i] = lines[i].replace(/\s*$/, '') + ';';
      }
      changed = true; siteRelaxed++;
      continue;
    }
    // 2c. INSERT column / value lists
    if (/^INSERT INTO /.test(line)) inInsert = true;
    else if (inInsert && (/^RETURNING\b/.test(line) || /^;/.test(line) || /^```/.test(line))) inInsert = false;
    if (inInsert) {
      const colm = SITE_INSERT_COL.exec(line) || SITE_INSERT_VAL.exec(line);
      if (colm) {
        if (colm[1] !== ',') stripTrailingComma(lines, i);
        lines.splice(i, 1);
        i--;
        changed = true; siteRelaxed++;
        continue;
      }
    }
    // 2d. manifest prop block
    if (SITE_MANIFEST.test(line) && /^\s*value: "\{\{ site \}\}"$/.test(lines[i + 1] || '') && /^\s*description: /.test(lines[i + 2] || '')) {
      lines.splice(i, 3);
      i--;
      changed = true; siteRelaxed++;
      continue;
    }
    // 2b. EXEC variable (strip the continuation comma from the previous variable when it was the last one)
    if (SITE_EXEC.test(line)) {
      const prev = lines[i - 1] || '';
      if (/--required,\s*$/.test(prev) && !/^\s*@/.test(lines[i + 1] || '')) {
        lines[i - 1] = prev.replace(/--required,\s*$/, '--required ');
      }
      lines.splice(i, 1);
      i--;
      changed = true; siteRelaxed++;
      continue;
    }
    // 3. Parameters table row
    if (/^<tr id="parameter-site">/.test(line.trim())) inSiteRow = true;
    else if (/^<\/tr>/.test(line.trim())) inSiteRow = false;
    if (inSiteRow && SITE_DESC.test(line)) {
      lines[i] = line.replace(SITE_DESC, 'Optional: defaults to datadoghq.com, or the value of the DD_SITE environment variable when set; a WHERE value overrides both.');
      changed = true; siteRelaxed++;
    }
  }
  return changed;
}

function escapeDescription(inner) {
  let out = inner.replace(BACKTICKED, (m, name) => OPEN + name + CLOSE);
  out = out
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    // Regex fragments in descriptions ("s3://([^/]+)(/.*)?") read as
    // markdown links ("[...](...)") and crash the link resolver.
    .replace(/\[/g, '&#91;')
    .replace(/\]/g, '&#93;')
    // GFM autolinks bare "scheme://..." literals on the DECODED text
    // tree (entity escapes cannot evade it) and Docusaurus crashes on
    // regex-shaped ones ("https://.+"). A zero-width space inside "://"
    // is invisible in rendering but breaks the autolink prefix match.
    .replace(/:\/\//g, ':​//');
  out = out.split(OPEN).join('<code>&lt;').split(CLOSE).join('&gt;</code>');
  return out;
}

// Inside a CodeBlock template literal, a lone backslash before u/x is a JS
// string escape (backslash-u007F evaluates to a DEL byte at build time), and ${
// starts interpolation. Double the backslash / escape the $ so the source
// text renders verbatim.
// The (?<!\\) guards skip sequences that are already escaped in the
// source (e.g. IAM session policies carry literal "\${Transfer:UserName}").
function escapeTemplateLiteral(line) {
  return line
    .replace(/(?<!\\)\\(?=[ux])/g, '\\\\')
    .replace(/(?<!\\)\$\{/g, '\\${');
}

function sanitize(text, filePath = '') {
  const lines = text.split('\n');
  let changed = relaxSiteVariable(lines, filePath);
  let inFence = false;
  let inTabItemProse = false;
  let inCodeBlock = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    // <CodeBlock>{`...`}</CodeBlock> spans hold verbatim SQL in a JSX
    // template literal. The MDX/HTML escapes applied elsewhere must NOT
    // touch these lines, but JS still evaluates the template literal, so
    // sequences like backslash-u007F in AWS description text become raw control
    // characters in the built HTML. Neutralize JS escape starts (\u, \x)
    // and interpolation (${) so the text survives verbatim.
    if (inCodeBlock) {
      if (/<\/CodeBlock>/.test(line)) inCodeBlock = false;
      const esc = escapeTemplateLiteral(line);
      if (esc !== line) { lines[i] = esc; changed = true; }
      continue;
    }
    if (/<CodeBlock\b/.test(line)) {
      if (!/<\/CodeBlock>/.test(line)) inCodeBlock = true;
      const esc = escapeTemplateLiteral(line);
      if (esc !== line) { lines[i] = esc; changed = true; }
      continue;
    }
    if (/^<TabItem\b/.test(trimmed)) {
      inTabItemProse = true;
      continue;
    }
    if (/^<\/TabItem>/.test(trimmed)) {
      inTabItemProse = false;
      continue;
    }

    // Description table cells (one <td>...</td> per line).
    const m = TD_LINE.exec(line);
    if (m) {
      const inner = m[2];
      if (/^<CopyableCode\b[^<>]*\/>$/.test(inner)) continue;
      // Structural link cells in the Methods/Parameters tables: one or
      // more comma-separated anchor-wrapped tokens
      // (<a href="#m"><CopyableCode .../></a> or
      // <a href="#parameter-x"><code>x</code></a>). Generated structure,
      // not description text - must stay verbatim.
      if (LINK_TOKEN_CELL.test(inner)) continue;
      const codeCell = /^<code>([^<>]*)<\/code>$/.exec(inner);
      if (codeCell) {
        // Type/pattern cells: regex patterns form accidental markdown
        // links ("[...](...)" inside character classes) and MDX brace
        // expressions ({4,7} quantifiers). Neutralise both; entities
        // decode inside the <code> element so rendering is unchanged.
        const escaped = codeCell[1]
          .replace(/\[/g, '&#91;')
          .replace(/\]/g, '&#93;')
          .replace(/\{/g, '&#123;')
          .replace(/\}/g, '&#125;')
          .replace(/:\/\//g, ':​//');
        if (escaped !== codeCell[1]) {
          lines[i] = m[1] + '<code>' + escaped + '</code>' + m[3];
          cellsEscaped++;
          changed = true;
        }
        continue;
      }
      const escaped = escapeDescription(inner);
      if (escaped !== inner) {
        lines[i] = m[1] + escaped + m[3];
        cellsEscaped++;
        changed = true;
      }
      continue;
    }

    // Method-description prose inside <TabItem> blocks (the paragraphs
    // between the TabItem opener and the ```sql fence). Prose never
    // starts with '<'; anything with raw angle brackets or braces there
    // is hostile description content.
    if (inTabItemProse && trimmed && !trimmed.startsWith('<') && /[<>{}]/.test(line)) {
      const escaped = escapeDescription(line);
      if (escaped !== line) {
        lines[i] = escaped;
        cellsEscaped++;
        changed = true;
      }
    }
  }
  return { text: lines.join('\n'), changed };
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      const before = fs.readFileSync(p, 'utf8');
      const { text: after, changed } = sanitize(before, p);
      if (changed) {
        fs.writeFileSync(p, after);
        filesChanged++;
      }
    }
  }
}

walk(docsDir);
console.log(`sanitize-docs: escaped ${cellsEscaped} description cell(s) across ${filesChanged} file(s); ${siteRelaxed} optional-site rewrite(s)`);
