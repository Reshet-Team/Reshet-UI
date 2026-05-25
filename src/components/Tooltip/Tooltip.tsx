import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import React from 'react'
import Primitives from './primitives'
import styles from './Tooltip.module.scss'

const TooltipRoot = Primitives.Root
const TooltipViewport = Primitives.Viewport

// Context used by TooltipProviderComposite to share the handle with child triggers.
const TooltipHandleContext =
  React.createContext<BaseTooltip.Handle<React.ReactNode> | null>(null)

export interface TooltipProviderProps extends BaseTooltip.Provider.Props {
  /** When true, a shared animated tooltip is set up automatically. Child
   * triggers only need a `payload` prop — no separate `Tooltip.Root` required. */
  animated?: boolean
}

function TooltipProvider({
  animated,
  children,
  ...props
}: TooltipProviderProps) {
  const [handle] = React.useState(() =>
    animated ? BaseTooltip.createHandle<React.ReactNode>() : null,
  )

  if (animated && handle) {
    return (
      <TooltipHandleContext.Provider value={handle}>
        <BaseTooltip.Provider {...props}>
          {children}
          <BaseTooltip.Root handle={handle}>
            {({ payload }) => (
              <Primitives.Portal>
                <Primitives.Positioner
                  sideOffset={8}
                  className={styles.positionerAnimated}
                >
                  <Primitives.Popup className={styles.popupAnimated}>
                    <Primitives.Arrow />
                    <Primitives.Viewport>
                      {payload as React.ReactNode}
                    </Primitives.Viewport>
                  </Primitives.Popup>
                </Primitives.Positioner>
              </Primitives.Portal>
            )}
          </BaseTooltip.Root>
        </BaseTooltip.Provider>
      </TooltipHandleContext.Provider>
    )
  }

  return <BaseTooltip.Provider {...props}>{children}</BaseTooltip.Provider>
}

export type TooltipTriggerProps = BaseTooltip.Trigger.Props<React.ReactNode>

function TooltipTrigger({
  handle: handleProp,
  payload,
  ...props
}: TooltipTriggerProps) {
  const contextHandle = React.useContext(TooltipHandleContext)
  const handle = handleProp ?? contextHandle ?? undefined
  return <BaseTooltip.Trigger handle={handle} payload={payload} {...props} />
}

export interface TooltipContentProps
  extends
    BaseTooltip.Popup.Props,
    Pick<
      BaseTooltip.Positioner.Props,
      'side' | 'sideOffset' | 'align' | 'alignOffset'
    > {
  children: React.ReactNode
  /** Show the arrow indicator. Defaults to true. */
  arrow?: boolean
}

function TooltipContent({
  children,
  side = 'top',
  sideOffset = 8,
  align,
  alignOffset,
  arrow = true,
  ...popupProps
}: TooltipContentProps) {
  return (
    <Primitives.Portal>
      <Primitives.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <Primitives.Popup {...popupProps}>
          {arrow && <Primitives.Arrow />}
          {children}
        </Primitives.Popup>
      </Primitives.Positioner>
    </Primitives.Portal>
  )
}

export {
  TooltipRoot,
  TooltipViewport,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
}
