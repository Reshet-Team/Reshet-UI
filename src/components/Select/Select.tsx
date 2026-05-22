import { Select as BaseSelect } from '@base-ui/react/select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as Primitives from './primitives'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectTriggerProps extends Omit<
  BaseSelect.Trigger.Props,
  'children'
> {
  placeholder?: string
  size?: SelectSize
}

export interface SelectListProps<T = unknown> {
  items?: T[]
  children: React.ReactNode | ((item: T) => React.ReactNode)
  sideOffset?: number
  positionerProps?: Omit<BaseSelect.Positioner.Props, 'children'>
  popupProps?: Omit<BaseSelect.Popup.Props, 'children'>
}

export interface SelectItemProps extends Omit<
  BaseSelect.Item.Props,
  'children'
> {
  children: React.ReactNode
}

export interface SelectGroupProps<T = unknown> {
  label: string
  items?: T[]
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function SelectTrigger({
  placeholder,
  size = 'md',
  ...props
}: SelectTriggerProps) {
  return (
    <Primitives.SelectTrigger data-size={size} {...props}>
      <Primitives.SelectValue placeholder={placeholder} />
      <Primitives.SelectIcon>
        <ChevronDown size={16} aria-hidden />
      </Primitives.SelectIcon>
    </Primitives.SelectTrigger>
  )
}

export function SelectList<T = unknown>({
  items,
  children,
  sideOffset = 4,
  positionerProps,
  popupProps,
}: SelectListProps<T>) {
  const content =
    typeof children === 'function' ? items?.map(children) : children

  return (
    <Primitives.SelectPortal>
      <Primitives.SelectPositioner
        alignItemWithTrigger={false}
        sideOffset={sideOffset}
        {...positionerProps}
      >
        <Primitives.SelectPopup {...popupProps}>
          <Primitives.SelectScrollUpArrow>
            <ChevronUp size={14} aria-hidden />
          </Primitives.SelectScrollUpArrow>
          <Primitives.SelectList>{content}</Primitives.SelectList>
          <Primitives.SelectScrollDownArrow>
            <ChevronDown size={14} aria-hidden />
          </Primitives.SelectScrollDownArrow>
        </Primitives.SelectPopup>
      </Primitives.SelectPositioner>
    </Primitives.SelectPortal>
  )
}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <Primitives.SelectItem {...props}>
      <Primitives.SelectItemText>{children}</Primitives.SelectItemText>
      <Primitives.SelectItemIndicator>
        <Check size={14} aria-hidden />
      </Primitives.SelectItemIndicator>
    </Primitives.SelectItem>
  )
}

export function SelectGroup<T = unknown>({
  label,
  items,
  children,
}: SelectGroupProps<T>) {
  const content =
    typeof children === 'function' ? items?.map(children) : children

  return (
    <Primitives.SelectGroup>
      <Primitives.SelectGroupLabel>{label}</Primitives.SelectGroupLabel>
      {content}
    </Primitives.SelectGroup>
  )
}
