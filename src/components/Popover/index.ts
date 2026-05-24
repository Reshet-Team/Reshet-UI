import {
  PopoverRoot,
  PopoverTrigger,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
} from './primitives'
import { PopoverContent } from './Popover'

export type { PopoverContentProps } from './Popover'

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
}
