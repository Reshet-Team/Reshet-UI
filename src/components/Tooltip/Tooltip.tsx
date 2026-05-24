import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import React from 'react'
import * as Primitives from './primitives'
import styles from './Tooltip.module.scss'

// Context used by TooltipProviderComposite to share the handle with child triggers.
const TooltipHandleContext =
  React.createContext<BaseTooltip.Handle<React.ReactNode> | null>(null)

export interface TooltipProviderProps extends BaseTooltip.Provider.Props {
  /** When true, a shared animated tooltip is set up automatically. Child
   * triggers only need a `payload` prop — no separate `Tooltip.Root` required. */
  animated?: boolean
}

export function TooltipProviderComposite({
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
              <Primitives.TooltipPortal>
                <Primitives.TooltipPositioner
                  sideOffset={8}
                  className={styles.positionerAnimated}
                >
                  <Primitives.TooltipPopup className={styles.popupAnimated}>
                    <Primitives.TooltipArrow />
                    <Primitives.TooltipViewport>
                      {payload as React.ReactNode}
                    </Primitives.TooltipViewport>
                  </Primitives.TooltipPopup>
                </Primitives.TooltipPositioner>
              </Primitives.TooltipPortal>
            )}
          </BaseTooltip.Root>
        </BaseTooltip.Provider>
      </TooltipHandleContext.Provider>
    )
  }

  return <BaseTooltip.Provider {...props}>{children}</BaseTooltip.Provider>
}

export type TooltipTriggerProps = BaseTooltip.Trigger.Props<React.ReactNode>

export function TooltipTriggerComposite({
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

export function TooltipContent({
  children,
  side = 'top',
  sideOffset = 8,
  align,
  alignOffset,
  arrow = true,
  ...popupProps
}: TooltipContentProps) {
  return (
    <Primitives.TooltipPortal>
      <Primitives.TooltipPositioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <Primitives.TooltipPopup {...popupProps}>
          {arrow && <Primitives.TooltipArrow />}
          {children}
        </Primitives.TooltipPopup>
      </Primitives.TooltipPositioner>
    </Primitives.TooltipPortal>
  )
}
