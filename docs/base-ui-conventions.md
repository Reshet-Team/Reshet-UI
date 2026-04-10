# Base UI Component System (`src/components/ui/`)

Base UI (`@base-ui/react`) components are wrapped in a two-layer pattern before use.

## Layer 1 — `primitives.ts`: styled sub-components

Each UI widget has a `primitives.ts` file that:

1. Imports the Base UI namespace (aliased as `Base<Name>`)
2. Uses `styled(Component, baseClass)` to bind a CSS module class to each sub-component
3. Re-exports sub-components that don't need styling as plain pass-throughs

```ts
// src/components/ui/dialog/primitives.ts
import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { styled } from '../styled'
import styles from './dialog.module.scss'

export const DialogRoot = BaseDialog.Root // pass-through (no style)
export const DialogTrigger = BaseDialog.Trigger // pass-through
export const DialogPortal = BaseDialog.Portal // pass-through
export const DialogBackdrop = styled(BaseDialog.Backdrop, styles.backdrop)
export const DialogPopup = styled(BaseDialog.Popup, styles.popup)
export const DialogTitle = styled(BaseDialog.Title, styles.title)
```

## Layer 2 — Composite component (optional)

When a widget needs a higher-level API (e.g. composing portal + backdrop + popup automatically), a composite component is built on top of the primitives:

```ts
// src/components/ui/dialog/dialog.tsx
import { DialogBackdrop, DialogPopup, DialogPortal, DialogRoot, ... } from './primitives'

export function Dialog({ title, description, children, actions, trigger, ...rootProps }) {
  return (
    <DialogRoot {...rootProps}>
      {trigger && <DialogTrigger render={trigger} />}
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogTitle>{title}</DialogTitle>
          {children && <div className={styles.body}>{children}</div>}
          {actions && <div className={styles.actions}>{actions}</div>}
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  )
}
```

Prefer the composite component (`Dialog`) over assembling primitives manually unless you need fine-grained control.

## `styled(Component, baseClass)`

Defined in `src/components/ui/styled.tsx`. Wraps any `ComponentType`, merges `baseClass` with any additional `className` via `clsx`, and preserves the original type signature exactly.

```ts
export function styled<C extends React.ComponentType<any>>(
  Component: C,
  baseClass: string,
): C
```

## CSS layers

All primitive styles live in `@layer primitives`. Component/composite styles live in `@layer components`. Layer order is declared in `globals.scss`: `@layer reset, primitives, components`.

## Existing widgets

| Widget     | Primitives                                                                                                                                                                         | Composite                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `dialog`   | `DialogRoot`, `DialogTrigger`, `DialogPortal`, `DialogBackdrop`, `DialogPopup`, `DialogTitle`, `DialogDescription`, `DialogClose`                                                  | `Dialog` — use this by default                                           |
| `tabs`     | `TabsRoot`, `TabsList`, `TabsTab`, `TabsPanel`, `TabsIndicator`                                                                                                                    | —                                                                        |
| `checkbox` | `CheckboxRoot`, `CheckboxIndicator`                                                                                                                                                | `CheckboxField`                                                          |
| `select`   | `SelectRoot`, `SelectPortal`, `SelectValue`, `SelectTrigger`, `SelectIcon`, `SelectPositioner`, `SelectPopup`, `SelectList`, `SelectItem`, `SelectItemText`, `SelectItemIndicator` | —                                                                        |
| `button`   | —                                                                                                                                                                                  | `Button` (variant prop: `primary` \| `secondary` \| `danger` \| `ghost`) |

## Rules

- **Never** import directly from `@base-ui/react/*` inside feature components — always go through `src/components/ui/`.
- When adding a new Base UI widget, follow the same `primitives.ts` + optional composite pattern.
- Import SCSS modules as `styles`: `import styles from './foo.module.scss'`
- Use CSS custom properties (`var(--...)`) for theming; avoid SCSS variables.
