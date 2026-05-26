import { Menu as BaseMenu } from '@base-ui/react/menu'
import { Check, ChevronRight } from 'lucide-react'
import React from 'react'
import Primitives from './primitives'
import styles from './Menu.module.scss'

const MenuRoot = Primitives.Root
const MenuTrigger = Primitives.Trigger
const MenuSeparator = Primitives.Separator
const MenuGroup = Primitives.Group
const MenuGroupLabel = Primitives.GroupLabel
const MenuRadioGroup = Primitives.RadioGroup
const MenuSubmenuRoot = Primitives.SubmenuRoot
const MenuItem = Primitives.Item
const MenuLinkItem = Primitives.LinkItem

export interface MenuContentProps
  extends
    BaseMenu.Popup.Props,
    Pick<
      BaseMenu.Positioner.Props,
      'side' | 'sideOffset' | 'align' | 'alignOffset'
    > {
  children: React.ReactNode
}

function MenuContent({
  children,
  side = 'bottom',
  sideOffset = 8,
  align,
  alignOffset,
  ...popupProps
}: MenuContentProps) {
  return (
    <Primitives.Portal>
      <Primitives.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <Primitives.Popup {...popupProps}>{children}</Primitives.Popup>
      </Primitives.Positioner>
    </Primitives.Portal>
  )
}

export interface MenuCheckboxItemProps extends Omit<
  BaseMenu.CheckboxItem.Props,
  'children'
> {
  children: React.ReactNode
}

function MenuCheckboxItem({ children, ...props }: MenuCheckboxItemProps) {
  return (
    <Primitives.CheckboxItem {...props}>
      <Primitives.CheckboxItemIndicator>
        <Check size={12} aria-hidden />
      </Primitives.CheckboxItemIndicator>
      <span className={styles.itemText}>{children}</span>
    </Primitives.CheckboxItem>
  )
}

export interface MenuRadioItemProps extends Omit<
  BaseMenu.RadioItem.Props,
  'children'
> {
  children: React.ReactNode
}

function MenuRadioItem({ children, ...props }: MenuRadioItemProps) {
  return (
    <Primitives.RadioItem {...props}>
      <Primitives.RadioItemIndicator>
        <Check size={12} aria-hidden />
      </Primitives.RadioItemIndicator>
      <span className={styles.itemText}>{children}</span>
    </Primitives.RadioItem>
  )
}

export interface MenuSubmenuTriggerProps extends Omit<
  BaseMenu.SubmenuTrigger.Props,
  'children'
> {
  children: React.ReactNode
}

function MenuSubmenuTrigger({ children, ...props }: MenuSubmenuTriggerProps) {
  return (
    <Primitives.SubmenuTrigger {...props}>
      {children}
      <ChevronRight size={14} aria-hidden />
    </Primitives.SubmenuTrigger>
  )
}

export {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuLinkItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuCheckboxItem,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
}
