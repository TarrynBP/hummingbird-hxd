#!/usr/bin/env node
// Storybook coverage report
// Compares the set of components in src/ against the set of components that have
// a matching *.stories.tsx file, and prints a summary plus the gaps.

import { readdirSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const srcDir = resolve(root, 'src');
const IGNORED_DIRS = new Set([
  'node_modules',
  '.storybook',
  'storybook-static',
  'dist',
  'coverage',
  '__tests__',
  'test',
  'tests',
]);

const isComponentFile = (name) =>
  /\.(tsx)$/.test(name) &&
  !/\.(test|spec|stories)\.tsx$/.test(name) &&
  !/\.d\.tsx$/.test(name);

const isStoryFile = (name) => /\.stories\.tsx$/.test(name);

function walk(dir, acc) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return acc;
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (IGNORED_DIRS.has(entry)) continue;
      walk(full, acc);
    } else if (stat.isFile()) {
      if (isComponentFile(entry) || isStoryFile(entry)) acc.push(full);
    }
  }
  return acc;
}

const files = walk(srcDir, []);
const components = files.filter((f) => isComponentFile(f.split(sep).pop()));
const stories = files.filter((f) => isStoryFile(f.split(sep).pop()));

const storyKey = (p) =>
  relative(srcDir, p).replace(/\.stories\.tsx$/, '').replace(/\\/g, '/');
const coveredKeys = new Set(stories.map(storyKey));

const missing = components.filter(
  (p) => !coveredKeys.has(relative(srcDir, p).replace(/\.tsx$/, '').replace(/\\/g, '/')),
);

const total = components.length;
const covered = total - missing.length;
const pct = total === 0 ? 100 : Math.round((covered / total) * 100);

const line = '─'.repeat(60);
console.log(`\n${line}\nStorybook coverage\n${line}`);
console.log(`Components : ${total}`);
console.log(`Documented : ${covered}`);
console.log(`Coverage   : ${pct}%\n`);

if (missing.length) {
  console.log(`Components without a story (${missing.length}):`);
  for (const p of missing.sort()) {
    console.log(`  • ${relative(root, p).replace(/\\/g, '/')}`);
  }
  console.log('');
}

const MIN = Number(process.env.STORYBOOK_COVERAGE_MIN ?? 0);
if (pct < MIN) {
  console.error(`Coverage ${pct}% is below the required minimum of ${MIN}%.`);
  process.exit(1);
}
