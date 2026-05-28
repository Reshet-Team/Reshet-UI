import { Drawer as BaseDrawer } from '@base-ui/react/drawer'
import React from 'react'
import { Button, type ButtonProps } from '../Button/Button'
import Primitives from './primitives'
import styles from './Drawer.module.scss'
import { clsx } from 'clsx'

export type DrawerSide = 'bottom' | 'top' | 'left' | 'right'

const DrawerRoot = Primitives.Root

const DrawerTitle = Primitives.Title
const DrawerDescription = Primitives.Description

type DrawerTriggerProps = Omit<BaseDrawer.Trigger.Props, 'render'> &
  Pick<ButtonProps, 'variant' | 'size'>

function DrawerTrigger({
  variant = 'secondary',
  size,
  children,
  ...props
}: DrawerTriggerProps) {
  return (
    <BaseDrawer.Trigger
      render={<Button variant={variant} size={size} />}
      {...props}
    >
      {children}
    </BaseDrawer.Trigger>
  )
}

type DrawerCloseProps = Omit<BaseDrawer.Close.Props, 'render'> &
  Pick<ButtonProps, 'variant' | 'size'>

function DrawerClose({
  variant = 'secondary',
  size,
  children,
  ...props
}: DrawerCloseProps) {
  return (
    <BaseDrawer.Close
      render={<Button variant={variant} size={size} />}
      {...props}
    >
      {children}
    </BaseDrawer.Close>
  )
}

function DrawerActions({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(styles.actions, className)} {...props}>
      {children}
    </div>
  )
}

export interface DrawerContentProps extends BaseDrawer.Popup.Props {
  children: React.ReactNode
  side?: DrawerSide
  showHandle?: boolean
}

function DrawerContent({
  children,
  side = 'bottom',
  showHandle,
  ...popupProps
}: DrawerContentProps) {
  const handleVisible = showHandle ?? (side === 'bottom' || side === 'top')

  return (
    <Primitives.Portal>
      <Primitives.Backdrop />
      <Primitives.Viewport data-side={side}>
        <Primitives.Popup {...popupProps}>
          {handleVisible && (
            <div className={styles.handle} aria-hidden='true' />
          )}
          <Primitives.Content>{children}</Primitives.Content>
        </Primitives.Popup>
      </Primitives.Viewport>
    </Primitives.Portal>
  )
}

export {
  DrawerRoot,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerActions,
  DrawerContent,
}
