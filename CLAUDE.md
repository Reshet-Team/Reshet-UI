# Claude Code Guidelines

## UI Components

When working with UI components, follow the conventions in [docs/base-ui-conventions.md](docs/base-ui-conventions.md).

Key rules:

- Never import directly from `@base-ui/react/*` — always go through `src/components/ui/`
- Prefer composite components (e.g. `Dialog`) over assembling primitives manually
- New Base UI widgets follow the `primitives.ts` + optional composite pattern

## Theming

- Use CSS custom properties (`var(--...)`) exclusively for all theming — never SCSS variables like `$primary`
- Theme tokens live in `src/theme/` (colors, spacing, typography, radius, shadows)
- Colors use OKLCH; dark mode is applied via `[data-theme='dark']` on `document.documentElement`
- Semantic color tokens: `--color-accent`, `--color-danger`, `--color-bg`, `--color-fg`, `--color-border`, etc.

## CSS Layers

Layer order (declared in `src/theme/globals.scss`): `@layer theme, reset, primitives, components`

- Theme tokens → `@layer theme`
- Base UI primitive styles → `@layer primitives`
- Component/composite styles → `@layer components`

## CSS & Layout

- Use logical CSS properties (`padding-inline`, `inset-inline-start`, etc.) — not physical `left`/`right` — for RTL compatibility
- Use `clsx` for conditional class merging
- SCSS mixins for RTL (`@include ltr`, `@include rtl`), focus rings, and truncation are available in `src/theme/_mixins.scss`

## Component File Structure

Each component gets its own folder:

```
src/components/Button/
  Button.tsx          # Component + exported types
  Button.module.scss  # Scoped styles
  Button.stories.tsx  # Storybook stories
  index.ts            # Barrel export (component + types)
```

- Always export types alongside the component from `index.ts`
- Story names: `Primary`, `Secondary`, `Ghost`, `Danger`, `Sizes`, `AllVariants`
- Use `satisfies Meta` for story type safety

## Development

- Run `pnpm storybook` to preview components — stories are the primary development interface
