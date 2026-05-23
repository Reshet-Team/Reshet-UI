# Base UI Component System (`src/components/`)

Base UI (`@base-ui/react`) components are wrapped in a two-layer pattern before use.

## Layer 1 — `primitives.ts`: styled sub-components

Each UI widget has a `primitives.ts` file that:

1. Imports the Base UI namespace (aliased as `Base<Name>`)
2. Uses `styled(Component, baseClass)` to bind a CSS module class to each sub-component
3. Re-exports sub-components that don't need styling as plain pass-throughs

```ts
// src/components/Select/primitives.ts
import { Select as BaseSelect } from '@base-ui/react/select'
import { styled } from '../../utilities/styled'
import styles from './Select.module.scss'

export const SelectRoot = BaseSelect.Root // pass-through
export const SelectPortal = BaseSelect.Portal // pass-through
export const SelectTrigger = styled(BaseSelect.Trigger, styles.trigger)
export const SelectValue = styled(BaseSelect.Value, styles.value)
export const SelectIcon = styled(BaseSelect.Icon, styles.icon)
export const SelectPositioner = styled(BaseSelect.Positioner, styles.positioner)
export const SelectPopup = styled(BaseSelect.Popup, styles.popup)
export const SelectList = styled(BaseSelect.List, styles.list)
export const SelectItem = styled(BaseSelect.Item, styles.item)
export const SelectItemText = BaseSelect.ItemText // pass-through
export const SelectItemIndicator = styled(
  BaseSelect.ItemIndicator,
  styles.itemIndicator,
)
export const SelectGroup = BaseSelect.Group // pass-through
export const SelectGroupLabel = styled(BaseSelect.GroupLabel, styles.groupLabel)
export const SelectScrollUpArrow = styled(
  BaseSelect.ScrollUpArrow,
  styles.scrollArrow,
)
export const SelectScrollDownArrow = styled(
  BaseSelect.ScrollDownArrow,
  styles.scrollArrow,
)
```

## Layer 2 — Composite components (optional)

When a widget benefits from a higher-level API, composite functions are built on top of the primitives, then assembled into a compound object exported from `index.ts`.

### Composite functions

Each composite function wraps multiple primitives behind a friendlier prop surface:

```tsx
// src/components/Select/Select.tsx
export function SelectTrigger({
  placeholder,
  size = 'md',
  children,
  valueProps,
  iconProps,
  ...props
}: SelectTriggerProps) {
  return (
    <Primitives.SelectTrigger data-size={size} {...props}>
      <Primitives.SelectValue placeholder={placeholder} {...valueProps}>
        {children}
      </Primitives.SelectValue>
      <Primitives.SelectIcon {...iconProps}>
        <ChevronDown size={16} aria-hidden />
      </Primitives.SelectIcon>
    </Primitives.SelectTrigger>
  )
}
```

### Compound object

All composite functions and the root primitive are assembled into a single namespace object in `index.ts`:

```ts
// src/components/Select/index.ts
export const Select = {
  Root: SelectRoot, // Base UI primitive (pass-through)
  Trigger: SelectTrigger, // composite
  List: SelectList, // composite
  Item: SelectItem, // composite
  Group: SelectGroup, // composite
}
```

Usage:

```tsx
<Select.Root>
  <Select.Trigger placeholder='Choose…' />
  <Select.List>
    <Select.Item value='a'>Option A</Select.Item>
  </Select.List>
</Select.Root>
```

## `SlotProps<Namespace, IncludedSlots>` — flat slot prop forwarding

Defined in `src/types/styleUtilities.ts`. Extracts props for specific internal slots from a Base UI component namespace and surfaces them as flat `*Props` keys on the composite's interface.

```ts
interface SelectTriggerProps
  extends
    Omit<BaseSelect.Trigger.Props, 'children'>,
    SlotProps<typeof BaseSelect, 'value' | 'icon'> {
  placeholder?: string
}
// → adds: valueProps?: Partial<BaseSelect.Value.Props>
//         iconProps?: Partial<BaseSelect.Icon.Props>
```

`IncludedSlots` accepts unprefixed slot names (e.g. `'value'`); the generated prop key gets a `Props` suffix (`valueProps`).

## `styled(Component, baseClass)`

Defined in `src/utilities/styled.tsx`. Wraps any `ComponentType`, merges `baseClass` with any additional `className` via `clsx`, and preserves the original type signature exactly.

```ts
export function styled<C extends React.ComponentType<any>>(
  Component: C,
  baseClass: string,
): C
```

## CSS layers

All primitive styles live in `@layer primitives`. Component/composite styles live in `@layer components`. Layer order is declared in `globals.scss`:

```scss
@layer theme, reset, primitives, components;
```

## Existing widgets

| Widget         | Primitives                                                                                                                                                                                                                                                            | Composite                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `select`       | `SelectRoot`, `SelectPortal`, `SelectTrigger`, `SelectValue`, `SelectIcon`, `SelectPositioner`, `SelectPopup`, `SelectList`, `SelectItem`, `SelectItemText`, `SelectItemIndicator`, `SelectGroup`, `SelectGroupLabel`, `SelectScrollUpArrow`, `SelectScrollDownArrow` | `Select` compound — `Select.Root`, `Select.Trigger`, `Select.List`, `Select.Item`, `Select.Group` |
| `number-field` | `NumberFieldRoot`, `NumberFieldGroup`, `NumberFieldInput`, `NumberFieldDecrement`, `NumberFieldIncrement`, `NumberFieldScrubArea`, `NumberFieldScrubAreaCursor`                                                                                                       | `NumberField`                                                                                     |
| `input`        | —                                                                                                                                                                                                                                                                     | `Input`                                                                                           |
| `button`       | —                                                                                                                                                                                                                                                                     | `Button` (variant prop: `primary` \| `secondary` \| `danger` \| `ghost`)                          |

## Rules

- **Never** import directly from `@base-ui/react/*` inside feature components — always go through `src/components/`.
- When adding a new Base UI widget, follow the same `primitives.ts` + optional composite pattern.
- New composite components follow the compound object pattern: assemble in `index.ts` as `const Widget = { Root, ... }`.
- Import SCSS modules as `styles`: `import styles from './foo.module.scss'`
- Use CSS custom properties (`var(--...)`) for theming; avoid SCSS variables.
