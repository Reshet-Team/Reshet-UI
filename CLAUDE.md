# Claude Code Guidelines

## Import Rules

- Cross-directory imports must use the `@/` alias — never `../` (breaks shadcn installs; banned by ESLint)
- Same-directory `./` imports are fine (and preferred): `import Primitives from './primitives'`

```ts
import { styled } from '@/utilities/styled' // ✅
import { ButtonRoot } from '@/components/Button/Button' // ✅
import { styled } from '../../utilities/styled' // ❌
```

`@/` is a standard shadcn requirement (`@/*` → `src/*` in `tsconfig.json` + Vite alias).

## UI Components

When working with UI components, follow the conventions in [docs/base-ui-conventions.md](docs/base-ui-conventions.md).

Key rules:

- Never import directly from `@base-ui/react/*` — always go through `src/components/`
- Never import from a component's `primitives.ts` — it is internal; import from `ComponentName.tsx`
- No `index.ts` barrel files — import directly: `import { SelectRoot } from './Select/Select'`
- New Base UI widgets follow the `primitives.ts` (default export only) + `ComponentName.tsx` pattern

## Theming

- Use CSS custom properties (`var(--...)`) exclusively for all theming — never SCSS variables like `$primary`
- Theme tokens live in `src/theme/` (colors, spacing, typography, radius, shadows)
- Colors use OKLCH; dark mode is applied via `[data-theme='dark']` on `document.documentElement`
- Semantic color tokens: `--color-accent`, `--color-danger`, `--color-bg`, `--color-fg`, `--color-border`, etc.

## CSS Layers

Layer order (declared in `src/theme/main.scss`): `@layer theme, reset, primitives, components`

- Theme tokens → `@layer theme`
- Base UI primitive styles → `@layer primitives`
- Component/composite styles → `@layer components`

## CSS & Layout

- Use logical CSS properties (`padding-inline`, `inset-inline-start`, etc.) — not physical `left`/`right` — for RTL compatibility
- Use `clsx` for conditional class merging
- SCSS mixins for RTL (`@include ltr`, `@include rtl`), theming (`@include light`, `@include dark`), focus rings, and truncation are available in `src/theme/_mixins.scss`
- Prefer logical CSS properties over physical ones for RTL compatibility: `margin-inline-start` over `margin-left`, `padding-inline` over `padding-left/right`, `inset-inline-start` over `left`, `text-align: start` over `text-align: left`

## Component File Structure

Each component gets its own folder:

```
src/components/Button/
  Button.tsx          # Component + exported types
  Button.module.scss  # Scoped styles
  Button.stories.tsx  # Storybook stories
```

- Story names: `Primary`, `Secondary`, `Ghost`, `Danger`, `Sizes`, `AllVariants`
- Use `satisfies Meta` for story type safety

## Development

- Run `pnpm storybook` to preview components — stories are the primary development interface
- Run `pnpm format` after completing each task to format all changed files
