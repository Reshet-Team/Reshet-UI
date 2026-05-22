import { SelectRoot } from './primitives'
import { SelectGroup, SelectItem, SelectList, SelectTrigger } from './Select'

export type {
  SelectGroupProps,
  SelectItemProps,
  SelectListProps,
  SelectSize,
  SelectTriggerProps,
} from './Select'

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  List: SelectList,
  Item: SelectItem,
  Group: SelectGroup,
}
