import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { Check, ChevronDown, X } from 'lucide-react'
import { type SlotProps } from '../../types/styleUtilities'
import styles from './Combobox.module.scss'
import * as Primitives from './primitives'

export type ComboboxSize = 'sm' | 'md' | 'lg'

// ─── Input ───────────────────────────────────────────────────────────────────

export interface ComboboxInputProps<T = unknown>
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
   * Enables multi-select chip mode. Provide a render function as `children`
   * that receives each selected value and returns a `Combobox.Chip` element.
   * When `true`, `clearable` and `clearProps` have no effect.
   */
  multiple?: boolean
  children?: (item: T, index: number) => React.ReactNode
}

export function ComboboxInput<T = unknown>({
  inputId,
  placeholder,
  size = 'md',
  clearable = true,
  multiple,
  children,
  inputProps,
  clearProps,
  triggerProps,
  ...props
}: ComboboxInputProps<T>) {
  return (
    <Primitives.ComboboxInputGroupRoot data-size={size} {...props}>
      {multiple ? (
        <>
          <Primitives.ComboboxChips>
            <Primitives.ComboboxValue>
              {(selected: unknown) =>
                Array.isArray(selected)
                  ? selected.map((item, i) =>
                      children ? (
                        children(item, i)
                      ) : (
                        <ComboboxChip key={i}>{String(item)}</ComboboxChip>
                      ),
                    )
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
  'positioner' | 'popup' | 'empty' | 'list' | 'status'
> {
  emptyMessage?: React.ReactNode
  /**
   * Shown inside `Combobox.Status` — an always-mounted live region announced
   * politely to screen readers. Use this for async feedback: loading spinners,
   * error messages, or "Start typing to search…" hints.
   *
   * Unlike `emptyMessage` (which is driven by the items list being empty),
   * `statusMessage` is fully manual — pass `null` when there is nothing to say.
   *
   * The `Status` component itself is always rendered in the DOM so screen
   * readers reliably pick up changes. Only its children are conditional.
   */
  statusMessage?: React.ReactNode
  /**
   * When `true`, shows a spinner and "Loading…" inside `Combobox.Status`.
   * Takes precedence over `statusMessage`.
   */
  isLoading?: boolean
  children: React.ReactNode | ((item: T, index: number) => React.ReactNode)
}

export function ComboboxList<T = unknown>({
  emptyMessage = 'No results found.',
  statusMessage,
  isLoading,
  children,
  positionerProps,
  popupProps,
  emptyProps,
  listProps,
  statusProps,
}: ComboboxListProps<T>) {
  const resolvedStatus = isLoading ? (
    <span className={styles.statusLoading}>
      <span className={styles.spinner} aria-hidden />
      Loading…
    </span>
  ) : (
    (statusMessage ?? null)
  )

  const resolvedEmpty = isLoading || statusMessage != null ? null : emptyMessage

  return (
    <Primitives.ComboboxPortal>
      <Primitives.ComboboxPositioner sideOffset={4} {...positionerProps}>
        <Primitives.ComboboxPopup {...popupProps}>
          <Primitives.ComboboxStatus {...statusProps}>
            {resolvedStatus}
          </Primitives.ComboboxStatus>
          <Primitives.ComboboxEmpty {...emptyProps}>
            {resolvedEmpty}
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

export interface ComboboxChipProps
  extends
    BaseCombobox.Chip.Props,
    SlotProps<typeof BaseCombobox, 'chipRemove'> {}

export function ComboboxChip({
  children,
  chipRemoveProps,
  ...props
}: ComboboxChipProps) {
  return (
    <Primitives.ComboboxChip {...props}>
      {children}
      <Primitives.ComboboxChipRemove {...chipRemoveProps}>
        <X size={10} aria-hidden />
      </Primitives.ComboboxChipRemove>
    </Primitives.ComboboxChip>
  )
}

export function ComboboxChipRemove(props: BaseCombobox.ChipRemove.Props) {
  return <Primitives.ComboboxChipRemove {...props} />
}
