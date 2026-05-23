import { Select as BaseSelect } from '@base-ui/react/select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { type SlotProps } from '../../types/styleUtilities'
import * as Primitives from './primitives'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectTriggerProps
  extends
    Omit<BaseSelect.Trigger.Props, 'children'>,
    SlotProps<typeof BaseSelect, 'value' | 'icon'> {
  placeholder?: string
  size?: SelectSize
  children?: BaseSelect.Value.Props['children']
}

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

export interface SelectListProps<T = unknown> extends SlotProps<
  typeof BaseSelect,
  'positioner' | 'popup' | 'list' | 'scrollUpArrow' | 'scrollDownArrow'
> {
  items?: T[]
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function SelectList<T = unknown>({
  items,
  children,
  positionerProps,
  popupProps,
  listProps,
  scrollUpArrowProps,
  scrollDownArrowProps,
}: SelectListProps<T>) {
  const content =
    typeof children === 'function' ? items?.map(children) : children

  return (
    <Primitives.SelectPortal>
      <Primitives.SelectPositioner
        alignItemWithTrigger={false}
        sideOffset={4}
        {...positionerProps}
      >
        <Primitives.SelectPopup {...popupProps}>
          <Primitives.SelectScrollUpArrow {...scrollUpArrowProps}>
            <ChevronUp size={14} aria-hidden />
          </Primitives.SelectScrollUpArrow>
          <Primitives.SelectList {...listProps}>
            {content}
          </Primitives.SelectList>
          <Primitives.SelectScrollDownArrow {...scrollDownArrowProps}>
            <ChevronDown size={14} aria-hidden />
          </Primitives.SelectScrollDownArrow>
        </Primitives.SelectPopup>
      </Primitives.SelectPositioner>
    </Primitives.SelectPortal>
  )
}

export interface SelectItemProps
  extends
    Omit<BaseSelect.Item.Props, 'children'>,
    SlotProps<typeof BaseSelect, 'itemText' | 'itemIndicator'> {
  children: React.ReactNode
}

export function SelectItem({
  children,
  itemTextProps,
  itemIndicatorProps,
  ...props
}: SelectItemProps) {
  return (
    <Primitives.SelectItem {...props}>
      <Primitives.SelectItemText {...itemTextProps}>
        {children}
      </Primitives.SelectItemText>
      <Primitives.SelectItemIndicator {...itemIndicatorProps}>
        <Check size={14} aria-hidden />
      </Primitives.SelectItemIndicator>
    </Primitives.SelectItem>
  )
}

export interface SelectGroupProps<T = unknown> extends SlotProps<
  typeof BaseSelect,
  'group' | 'groupLabel'
> {
  label: string
  items?: T[]
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function SelectGroup<T = unknown>({
  label,
  items,
  children,
  groupProps,
  groupLabelProps,
}: SelectGroupProps<T>) {
  const content =
    typeof children === 'function' ? items?.map(children) : children

  return (
    <Primitives.SelectGroup {...groupProps}>
      <Primitives.SelectGroupLabel {...groupLabelProps}>
        {label}
      </Primitives.SelectGroupLabel>
      {content}
    </Primitives.SelectGroup>
  )
}
