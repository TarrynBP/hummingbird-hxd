# Contributing to Storybook — hummingbird-hxd

## Getting started

```bash
npm install --legacy-peer-deps
npm run storybook            # http://localhost:6006
```

## Scripts

| Script                       | What it does                                          |
| ---------------------------- | ----------------------------------------------------- |
| `npm run storybook`          | Run Storybook locally (port 6006).                    |
| `npm run build-storybook`    | Produce a static site in `storybook-static/`.         |
| `npm test`                   | Run the Vitest story suites once.                     |
| `npm run test:storybook`     | Run only the `storybook` Vitest project.              |
| `npm run storybook:coverage` | Report components that lack a story.                  |

## Writing a story

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import Navbar from './Navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

## Conventions

- Co-locate stories (`Foo.tsx` → `Foo.stories.tsx`).
- Use `satisfies Meta<typeof Component>`; prefer named states over numbered ones.
- Add `tags: ['autodocs']` for a Docs page; use `play` for interactions.
- Titles: `Components/<Name>` for chrome, `Sections/<Name>` for sections.

## Global providers

`.storybook/preview.tsx` wraps stories in the same providers as the app —
`HelmetProvider`, `QueryClientProvider`, `MemoryRouter`, `TooltipProvider` — and
imports `src/index.css`, so stories match production rendering.

Because Sanity is not configured in the workshop, data-driven sections render
their built-in loading/fallback states. Use a **decorator** or **MSW** if you
need to render populated states deterministically.

## Accessibility

`@storybook/addon-a11y` reports violations per story. Keep new components clean;
existing suites are tracked in `docs/storybook/design-audit.md`.

## Tests & CI

Interaction tests run in jsdom via `@storybook/addon-vitest`. The
`.github/workflows/storybook.yml` workflow runs the tests, builds the static
site, and publishes to GitHub Pages on `main`.

## Coverage

`npm run storybook:coverage` prints the component-to-story ratio and the gaps.
Set `STORYBOOK_COVERAGE_MIN=<n>` to enforce a threshold.
