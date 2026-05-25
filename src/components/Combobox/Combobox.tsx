import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { Check, ChevronDown, X } from 'lucide-react'
import { type SlotProps } from '../../types/styleUtilities'
import styles from './Combobox.module.scss'
import Primitives from './primitives'

const ComboboxRoot = Primitives.Root
const ComboboxChipRemove = Primitives.ChipRemove

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

function ComboboxInput<T = unknown>({
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
    <Primitives.InputGroupRoot data-size={size} {...props}>
      {multiple ? (
        <>
          <Primitives.Chips>
            <Primitives.Value>
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
            </Primitives.Value>
            <Primitives.Input
              id={inputId}
              placeholder={placeholder}
              {...inputProps}
            />
          </Primitives.Chips>
          <div className={styles.actionButtons}>
            <Primitives.Trigger aria-label='Open list' {...triggerProps}>
              <ChevronDown size={16} aria-hidden />
            </Primitives.Trigger>
          </div>
        </>
      ) : (
        <>
          <Primitives.Input
            id={inputId}
            placeholder={placeholder}
            {...inputProps}
          />
          <div className={styles.actionButtons}>
            {clearable && (
              <Primitives.Clear
                keepMounted
                aria-label='Clear selection'
                {...clearProps}
              >
                <X size={14} aria-hidden />
              </Primitives.Clear>
            )}
            <Primitives.Trigger aria-label='Open list' {...triggerProps}>
              <ChevronDown size={16} aria-hidden />
            </Primitives.Trigger>
          </div>
        </>
      )}
    </Primitives.InputGroupRoot>
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

function ComboboxList<T = unknown>({
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
    <Primitives.Portal>
      <Primitives.Positioner sideOffset={4} {...positionerProps}>
        <Primitives.Popup {...popupProps}>
          <Primitives.Status {...statusProps}>
            {resolvedStatus}
          </Primitives.Status>
          <Primitives.Empty {...emptyProps}>{resolvedEmpty}</Primitives.Empty>
          <Primitives.List {...listProps}>{children}</Primitives.List>
        </Primitives.Popup>
      </Primitives.Positioner>
    </Primitives.Portal>
  )
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface ComboboxItemProps
  extends
    Omit<BaseCombobox.Item.Props, 'children'>,
    SlotProps<typeof BaseCombobox, 'itemIndicator'> {
  children: React.ReactNode
}

function ComboboxItem({
  children,
  itemIndicatorProps,
  ...props
}: ComboboxItemProps) {
  return (
    <Primitives.Item {...props}>
      <Primitives.ItemIndicator {...itemIndicatorProps}>
        <Check size={14} aria-hidden />
      </Primitives.ItemIndicator>
      <span className={styles.itemText}>{children}</span>
    </Primitives.Item>
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

function ComboboxGroup<T = unknown>({
  label,
  items,
  children,
  groupProps,
  groupLabelProps,
}: ComboboxGroupProps<T>) {
  return (
    <Primitives.Group items={items} {...groupProps}>
      <Primitives.GroupLabel {...groupLabelProps}>
        {label}
      </Primitives.GroupLabel>
      <Primitives.Collection>
        {children as (item: T, index: number) => React.ReactNode}
      </Primitives.Collection>
    </Primitives.Group>
  )
}

// ─── Chip ─────────────────────────────────────────────────────────────────────

export interface ComboboxChipProps
  extends
    BaseCombobox.Chip.Props,
    SlotProps<typeof BaseCombobox, 'chipRemove'> {}

function ComboboxChip({
  children,
  chipRemoveProps,
  ...props
}: ComboboxChipProps) {
  return (
    <Primitives.Chip {...props}>
      {children}
      <Primitives.ChipRemove {...chipRemoveProps}>
        <X size={10} aria-hidden />
      </Primitives.ChipRemove>
    </Primitives.Chip>
  )
}

export {
  ComboboxRoot,
  ComboboxChipRemove,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxChip,
}
