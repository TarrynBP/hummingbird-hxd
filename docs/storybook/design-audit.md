# Design System Audit — hummingbird-hxd

Scope: the reusable UI surface under `src/components` (chrome, sections) and
`src/components/ui` (shadcn/ui + Radix).

## Foundations

- **Styling**: Tailwind CSS + shadcn/ui. Brand tokens (e.g. `mint-teal`,
  `soft-mauve`, `creamy-apricot`) are configured in `tailwind.config.ts`
  alongside the standard shadcn CSS variables in `src/index.css`.
- **Typography**: a serif/sans pairing is used for headings and body copy.
- **Primitives**: Radix UI via shadcn wrappers — accessible by construction.

## Strengths

- Clear, recognisable brand palette applied through Tailwind tokens.
- Consistent section rhythm and container widths across marketing sections.
- Primitives render correctly in the workshop against the shared
  `light`/`muted`/`dark` backgrounds.

## Observations & recommendations

| Area        | Observation                                                               | Recommendation                                                  |
| ----------- | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Colour      | Brand colours are used directly (e.g. `text-mint-teal`, `bg-creamy-apricot`). | Expose them as semantic tokens (`primary`, `accent`) and use those. |
| Contrast    | Light brand colours on white can fall below AA for small text.            | Verify pairs with the a11y addon; darken text or add weight.    |
| Buttons     | Global hover uses `hover:scale-105` in the base button.                   | Confirm this is intentional for all contexts (tables, forms).   |
| Motion      | Section/animation durations are inline per component.                      | Centralise duration/easing tokens.                              |
| Content     | Some sections hard-code fallback copy while others rely on Sanity.         | Standardise the loading/empty/fallback pattern.                 |
| Accessibility | `@storybook/addon-a11y` runs with `test: 'todo'`.                        | Triage then promote stable suites to `'error'`.                 |

## Accessibility

`a11y.test` is `'todo'` (reports violations without failing). Promote suites to
`'error'` once clean. Note that color-contrast is the most likely class of
finding given the light brand palette.

## Pre-existing type/lint baseline (observed)

Running `tsc -p tsconfig.app.json` reports three errors that are **unrelated to
Storybook** and were present before this work:

- `src/components/RefreshButton.tsx` imports `@/contexts/LoadingContext`, which
  does not exist (a broken/dead import).
- `src/schemas/siteSettings.ts` imports `defineField`/`defineType` from
  `sanity/package`, which does not export them.

None of the story files contribute type errors.
