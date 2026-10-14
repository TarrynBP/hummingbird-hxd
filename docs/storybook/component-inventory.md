# Component Inventory — hummingbird-hxd

Storybook 10 documents the UI surface of the HummingBird HXD site: shadcn/ui
primitives (`src/components/ui`), app chrome (`src/components`), and marketing
page sections (`src/components/sections`).

Coverage is measured by the presence of a co-located `*.stories.tsx` file.

```
Components : 80
Documented : 38
Coverage   : 48%
```

Run `npm run storybook:coverage` to refresh these numbers.

## Documented

### App chrome (`src/components`)

| Component        | Stories                                |
| ---------------- | -------------------------------------- |
| `Navbar`         | Default                                |
| `Footer`         | Default                                |
| `LoadingScreen`  | Default, Connecting, AlmostReady, Complete, Hidden |
| `LoadingSpinner` | Default, Small, Large, WithoutText, FullScreen     |
| `PageTransition` | Default                                |

### Page sections (`src/components/sections`)

`Hero`, `ServiceHero`, `Services`, `Portfolio`, `Testimonials`, `Values`, `CTA`,
`Process`, `Learning`, `OtherServices`, `SolutionVisual`.

> Sections driven by Sanity (`Hero`, `Services`, `Portfolio`, `Testimonials`,
> `Values`) render their built-in loading/fallback states in Storybook, since no
> Sanity project is configured in the workshop environment.

### UI primitives (`src/components/ui`)

`accordion`, `alert`, `alert-dialog`, `avatar`, `badge`, `breadcrumb`, `button`,
`card`, `checkbox`, `dialog`, `input`, `label`, `pagination`, `progress`,
`radio-group`, `select`, `slider`, `switch`, `tabs`, `textarea`, `toggle`,
`tooltip`.

## Not yet documented

`RefreshButton`, `SEO`, plus remaining primitives (`aspect-ratio`, `calendar`,
`carousel`, `chart`, `collapsible`, `command`, `context-menu`, `drawer`,
`dropdown-menu`, `form`, `hover-card`, `input-otp`, `menubar`,
`navigation-menu`, `popover`, `resizable`, `scroll-area`, `separator`, `sheet`,
`sidebar`, `skeleton`, `sonner`, `table`, `toast`, `toaster`, `toggle-group`),
and the pages/hooks.

## Conventions

- Co-located stories; titles `Components/<Name>` and `Sections/<Name>`.
- `tags: ['autodocs']` on every file; interaction covered via `play` functions.
