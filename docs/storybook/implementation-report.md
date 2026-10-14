# Storybook Implementation Report — hummingbird-hxd

## Objective

Establish Storybook as the component workshop and documentation site for the
HummingBird HXD application, documenting the UI with typed stories plus
interaction and accessibility tests, and wiring CI + hosting — with no changes
to production behaviour.

## Approach

- Retained the stack: Vite 5, React 18, TypeScript, Tailwind, shadcn/ui,
  `@tanstack/react-query`, `react-helmet-async`.
- Mirrored the configuration validated in the sibling project (`UandIPrinting`):
  Storybook 10 + React-Vite, addon-docs/a11y/vitest, Vitest 3.
- Documented UI primitives, app chrome, and page sections; Sanity-driven
  sections render their built-in fallback states in the workshop.

## Versions

| Package                    | Version   |
| -------------------------- | --------- |
| `storybook`                | `^10.6.2` |
| `@storybook/react-vite`    | `^10.6.2` |
| `@storybook/addon-docs`    | `^10.6.2` |
| `@storybook/addon-a11y`    | `^10.6.2` |
| `@storybook/addon-vitest`  | `^10.6.2` |
| `@chromatic-com/storybook` | `^5.5.1`  |
| `vitest`                   | `^3.2.4`  |
| `jsdom`                    | `^25.0.1` |

> `vitest` is pinned to `^3.2.4` (Vitest 4/5 needs Vite 6+; this project uses
> Vite 5).

## Files added

- `.storybook/{main.ts,preview.tsx,vitest.setup.ts}` — configuration.
- `vitest.config.ts` — app-config-merged Vitest project for stories.
- `scripts/storybook-coverage.mjs` — coverage reporter.
- `docs/storybook/*.md` — this documentation set.
- `.github/workflows/storybook.yml` — CI + GitHub Pages deploy.
- `src/**/*.stories.tsx` — 38 story files.

## Files changed

- `package.json` — scripts + devDependencies.
- `eslint.config.js` — Storybook recommended config; ignore build outputs.
- `.gitignore` — ignore `storybook-static`.

## Verification

| Check                     | Result                          |
| ------------------------- | ------------------------------- |
| `npm run build-storybook` | ✅ builds                        |
| `npm run test:storybook`  | ✅ 38 files / 100 tests          |
| `tsc -p tsconfig.app.json`| ⚠️ 3 **pre-existing** errors only |

## Known issues / notes

- **Pre-existing type errors** (unrelated to Storybook):
  `RefreshButton.tsx` imports a non-existent `@/contexts/LoadingContext`;
  `siteSettings.ts` imports `defineField`/`defineType` from `sanity/package`.
  These were not modified to keep the change scoped; they should be fixed
  separately (the `RefreshButton` import may indicate dead code).
- **Sanity**: data-driven sections have no backend in the workshop and render
  fallback/loading states. Deterministic populated states need MSW/decorators.
- **Timeout**: `testTimeout` is 20000ms to keep Radix interactions stable on
  slower machines.
- **Hosting**: relative asset paths mean the static build works from a GitHub
  Pages subpath (`https://<user>.github.io/hummingbird-hxd/`).

## Next steps

1. Document remaining primitives, `RefreshButton`, `SEO`, and pages.
2. Add MSW handlers to story populated Sanity states.
3. Fix the two pre-existing type errors, then re-enable a type-check CI step.
