import { Popover as BasePopover } from "@base-ui/react/popover";
import React from "react";
import Primitives from "./primitives";

const PopoverRoot = Primitives.Root;
const PopoverTrigger = Primitives.Trigger;
const PopoverTitle = Primitives.Title;
const PopoverDescription = Primitives.Description;
const PopoverClose = Primitives.Close;

export interface PopoverContentProps
  extends
    BasePopover.Popup.Props,
    Pick<
      BasePopover.Positioner.Props,
      "side" | "sideOffset" | "align" | "alignOffset"
    > {
  children: React.ReactNode;
  /** Show the arrow indicator. Defaults to true. */
  arrow?: boolean;
}

function PopoverContent({
  children,
  side = "bottom",
  sideOffset = 8,
  align,
  alignOffset,
  arrow = true,
  ...popupProps
}: PopoverContentProps) {
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
  );
}

export {
  PopoverRoot,
  PopoverTrigger,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
  PopoverContent,
};
