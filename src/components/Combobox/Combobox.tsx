import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { Check, ChevronDown, X } from 'lucide-react'
import { type SlotProps } from '../../types/styleUtilities'
import styles from './Combobox.module.scss'
import * as Primitives from './primitives'

export type ComboboxSize = 'sm' | 'md' | 'lg'

// ─── InputGroup ───────────────────────────────────────────────────────────────

export interface ComboboxInputGroupProps<T = unknown>
  extends
    Omit<BaseCombobox.InputGroup.Props, 'children'>,
    SlotProps<typeof BaseCombobox, 'input' | 'clear' | 'trigger'> {
  /** Forwarded to the inner Input as its `id` (for label association). */
  inputId?: string
  placeholder?: string
  size?: ComboboxSize
  /** Whether to show the clear button (single-select mode only). Defaults to `true`. */
  clearable?: boolean
  /**
   * Render function for multi-select chip mode. Receives each selected value
   * and should return a `Combobox.Chip` element. When provided, the input
   * group switches to chip layout — `clearable` and `clearProps` have no effect.
   */
  children?: (item: T, index: number) => React.ReactNode
}

export function ComboboxInputGroup<T = unknown>({
  inputId,
  placeholder,
  size = 'md',
  clearable = true,
  children,
  inputProps,
  clearProps,
  triggerProps,
  ...props
}: ComboboxInputGroupProps<T>) {
  return (
    <Primitives.ComboboxInputGroupRoot data-size={size} {...props}>
      {typeof children === 'function' ? (
        // ── Multi-select chip mode ─────────────────────────────────────────
        <>
          <Primitives.ComboboxChips>
            <Primitives.ComboboxValue>
              {(selected: unknown) =>
                Array.isArray(selected)
                  ? selected.map((item, i) => children(item, i))
                  : null
              }
            </Primitives.ComboboxValue>
            <Primitives.ComboboxInput
              id={inputId}
              placeholder={placeholder}
              {...inputProps}
            />
          </Primitives.ComboboxChips>
          <div className={styles.actionButtons}>
            <Primitives.ComboboxTrigger
              aria-label='Open list'
              {...triggerProps}
            >
              <ChevronDown size={16} aria-hidden />
            </Primitives.ComboboxTrigger>
          </div>
        </>
      ) : (
        // ── Single-select mode ────────────────────────────────────────────
        <>
          <Primitives.ComboboxInput
            id={inputId}
            placeholder={placeholder}
            {...inputProps}
          />
          <div className={styles.actionButtons}>
            {clearable && (
              <Primitives.ComboboxClear
                keepMounted
                aria-label='Clear selection'
                {...clearProps}
              >
                <X size={14} aria-hidden />
              </Primitives.ComboboxClear>
            )}
            <Primitives.ComboboxTrigger
              aria-label='Open list'
              {...triggerProps}
            >
              <ChevronDown size={16} aria-hidden />
            </Primitives.ComboboxTrigger>
          </div>
        </>
      )}
    </Primitives.ComboboxInputGroupRoot>
  )
}

// ─── List ─────────────────────────────────────────────────────────────────────

export interface ComboboxListProps<T = unknown> extends SlotProps<
  typeof BaseCombobox,
  'positioner' | 'popup' | 'empty' | 'list'
> {
  emptyMessage?: React.ReactNode
  children: React.ReactNode | ((item: T, index: number) => React.ReactNode)
}

export function ComboboxList<T = unknown>({
  emptyMessage = 'No results found.',
  children,
  positionerProps,
  popupProps,
  emptyProps,
  listProps,
}: ComboboxListProps<T>) {
  return (
    <Primitives.ComboboxPortal>
      <Primitives.ComboboxPositioner sideOffset={4} {...positionerProps}>
        <Primitives.ComboboxPopup {...popupProps}>
          <Primitives.ComboboxEmpty {...emptyProps}>
            {emptyMessage}
          </Primitives.ComboboxEmpty>
          <Primitives.ComboboxList {...listProps}>
            {children}
          </Primitives.ComboboxList>
        </Primitives.ComboboxPopup>
      </Primitives.ComboboxPositioner>
    </Primitives.ComboboxPortal>
  )
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface ComboboxItemProps
  extends
    Omit<BaseCombobox.Item.Props, 'children'>,
    SlotProps<typeof BaseCombobox, 'itemIndicator'> {
  children: React.ReactNode
}

export function ComboboxItem({
  children,
  itemIndicatorProps,
  ...props
}: ComboboxItemProps) {
  return (
    <Primitives.ComboboxItem {...props}>
      <Primitives.ComboboxItemIndicator {...itemIndicatorProps}>
        <Check size={14} aria-hidden />
      </Primitives.ComboboxItemIndicator>
      <span className={styles.itemText}>{children}</span>
    </Primitives.ComboboxItem>
  )
}

// ─── Group ────────────────────────────────────────────────────────────────────

export interface ComboboxGroupProps<T = unknown> extends SlotProps<
  typeof BaseCombobox,
  'group' | 'groupLabel'
> {
  label: string
  items?: T[]
  children: ((item: T, index: number) => React.ReactNode) | React.ReactNode
}

export function ComboboxGroup<T = unknown>({
  label,
  items,
  children,
  groupProps,
  groupLabelProps,
}: ComboboxGroupProps<T>) {
  return (
    <Primitives.ComboboxGroup items={items} {...groupProps}>
      <Primitives.ComboboxGroupLabel {...groupLabelProps}>
        {label}
      </Primitives.ComboboxGroupLabel>
      <Primitives.ComboboxCollection>
        {children as (item: T, index: number) => React.ReactNode}
      </Primitives.ComboboxCollection>
    </Primitives.ComboboxGroup>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export function ComboboxRoot<V, M extends boolean = false>(
  props: BaseCombobox.Root.Props<V, M>,
) {
  return <BaseCombobox.Root {...props} />
}

// ─── Chip ─────────────────────────────────────────────────────────────────────

export function ComboboxChip(props: BaseCombobox.Chip.Props) {
  return <Primitives.ComboboxChip {...props} />
}

export function ComboboxChipRemove(props: BaseCombobox.ChipRemove.Props) {
  return <Primitives.ComboboxChipRemove {...props} />
}
