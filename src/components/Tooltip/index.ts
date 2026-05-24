import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import { TooltipRoot, TooltipViewport } from './primitives'
import {
  TooltipProviderComposite,
  TooltipTriggerComposite,
  TooltipContent,
} from './Tooltip'

export type {
  TooltipContentProps,
  TooltipProviderProps,
  TooltipTriggerProps,
} from './Tooltip'

export const Tooltip = {
  Provider: TooltipProviderComposite,
  Root: TooltipRoot,
  Trigger: TooltipTriggerComposite,
  Content: TooltipContent,
  Viewport: TooltipViewport,
  createHandle: BaseTooltip.createHandle,
}
