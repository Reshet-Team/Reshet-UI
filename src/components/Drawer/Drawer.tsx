import { Button, type ButtonProps } from '@/components/Button/Button'
import { Drawer as BaseDrawer } from '@base-ui/react/drawer'
import { clsx } from 'clsx'
import React from 'react'
import styles from './Drawer.module.scss'
import Primitives from './primitives'

export type DrawerSide = 'bottom' | 'top' | 'left' | 'right'
export type DrawerSnapPoint = BaseDrawer.Root.SnapPoint

const DrawerContext = React.createContext(false)

function DrawerRoot({ snapPoints, ...props }: BaseDrawer.Root.Props) {
  return (
    <DrawerContext.Provider value={!!snapPoints?.length}>
      <Primitives.Root snapPoints={snapPoints} {...props} />
    </DrawerContext.Provider>
  )
}

const DrawerProvider = Primitives.Provider
const DrawerIndent = Primitives.Indent
const DrawerIndentBackground = Primitives.IndentBackground
const DrawerSwipeArea = Primitives.SwipeArea

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
  nested?: boolean
  /**
   * Non-scrollable header rendered above the scrollable body — typically contains `<DrawerTitle>`.
   * Set `style={{ '--top-margin': '…rem' }}` on the drawer to leave a gap at the top when fully expanded.
   */
  dragArea?: React.ReactNode
}

function DrawerContent({
  children,
  side = 'bottom',
  showHandle,
  nested = false,
  dragArea,
  ...popupProps
}: DrawerContentProps) {
  const hasSnapPoints = React.use(DrawerContext)
  const handleVisible = showHandle ?? (side === 'bottom' || side === 'top')

  return (
    <Primitives.Portal>
      {!nested && <Primitives.Backdrop />}
      <Primitives.Viewport data-side={side}>
        <Primitives.Popup
          className={clsx(hasSnapPoints && styles.snapPopup)}
          {...popupProps}
        >
          {(handleVisible || dragArea) && (
            <div className={styles.dragArea}>
              {handleVisible && (
                <div className={styles.handle} aria-hidden='true' />
              )}
              {dragArea}
            </div>
          )}
          <Primitives.Content className={styles.scrollBody}>
            {children}
          </Primitives.Content>
        </Primitives.Popup>
      </Primitives.Viewport>
    </Primitives.Portal>
  )
}

export {
  DrawerActions,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerIndent,
  DrawerIndentBackground,
  DrawerProvider,
  DrawerRoot,
  DrawerSwipeArea,
  DrawerTitle,
  DrawerTrigger,
}
