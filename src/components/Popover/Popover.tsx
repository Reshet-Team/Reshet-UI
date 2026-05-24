import { Popover as BasePopover } from '@base-ui/react/popover'
import React from 'react'
import * as Primitives from './primitives'

export interface PopoverContentProps
  extends
    BasePopover.Popup.Props,
    Pick<
      BasePopover.Positioner.Props,
      'side' | 'sideOffset' | 'align' | 'alignOffset'
    > {
  children: React.ReactNode
  /** Show the arrow indicator. Defaults to true. */
  arrow?: boolean
}

export function PopoverContent({
  children,
  side = 'bottom',
  sideOffset = 8,
  align,
  alignOffset,
  arrow = true,
  ...popupProps
}: PopoverContentProps) {
  return (
    <Primitives.PopoverPortal>
      <Primitives.PopoverPositioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <Primitives.PopoverPopup {...popupProps}>
          {arrow && <Primitives.PopoverArrow />}
          {children}
        </Primitives.PopoverPopup>
      </Primitives.PopoverPositioner>
    </Primitives.PopoverPortal>
  )
}
