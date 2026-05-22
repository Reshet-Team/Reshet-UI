import { Select as BaseSelect } from '@base-ui/react/select'
import { styled } from '../../utilities/styled'
import styles from './Select.module.scss'

export const SelectRoot = BaseSelect.Root
export const SelectPortal = BaseSelect.Portal
export const SelectTrigger = styled(BaseSelect.Trigger, styles.trigger)
export const SelectValue = styled(BaseSelect.Value, styles.value)
export const SelectIcon = styled(BaseSelect.Icon, styles.icon)
export const SelectPositioner = styled(BaseSelect.Positioner, styles.positioner)
export const SelectPopup = styled(BaseSelect.Popup, styles.popup)
export const SelectList = styled(BaseSelect.List, styles.list)
export const SelectItem = styled(BaseSelect.Item, styles.item)
export const SelectItemText = BaseSelect.ItemText
export const SelectItemIndicator = styled(
  BaseSelect.ItemIndicator,
  styles.itemIndicator,
)
export const SelectGroup = BaseSelect.Group
export const SelectGroupLabel = styled(BaseSelect.GroupLabel, styles.groupLabel)
export const SelectScrollUpArrow = styled(
  BaseSelect.ScrollUpArrow,
  styles.scrollArrow,
)
export const SelectScrollDownArrow = styled(
  BaseSelect.ScrollDownArrow,
  styles.scrollArrow,
)
