import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { styled } from '../../utilities/styled'
import styles from './Combobox.module.scss'

export const ComboboxRoot = BaseCombobox.Root
export const ComboboxPortal = BaseCombobox.Portal
export const ComboboxCollection = BaseCombobox.Collection
export const ComboboxGroup = BaseCombobox.Group
export const ComboboxValue = BaseCombobox.Value

export const ComboboxLabel = styled(BaseCombobox.Label, styles.label)

/** The InputGroup container (styled). Use `ComboboxInputGroup` composite for common layouts. */
export const ComboboxInputGroupRoot = styled(
  BaseCombobox.InputGroup,
  styles.inputGroup,
)
export const ComboboxInput = styled(BaseCombobox.Input, styles.input)
export const ComboboxTrigger = styled(BaseCombobox.Trigger, styles.trigger)
export const ComboboxClear = styled(BaseCombobox.Clear, styles.clear)
export const ComboboxIcon = styled(BaseCombobox.Icon, styles.icon)

export const ComboboxPositioner = styled(
  BaseCombobox.Positioner,
  styles.positioner,
)
export const ComboboxPopup = styled(BaseCombobox.Popup, styles.popup)
export const ComboboxEmpty = styled(BaseCombobox.Empty, styles.empty)
export const ComboboxList = styled(BaseCombobox.List, styles.list)
export const ComboboxItem = styled(BaseCombobox.Item, styles.item)
export const ComboboxItemIndicator = styled(
  BaseCombobox.ItemIndicator,
  styles.itemIndicator,
)
export const ComboboxGroupLabel = styled(
  BaseCombobox.GroupLabel,
  styles.groupLabel,
)
export const ComboboxSeparator = styled(
  BaseCombobox.Separator,
  styles.separator,
)
export const ComboboxStatus = styled(BaseCombobox.Status, styles.status)

export const ComboboxChips = styled(BaseCombobox.Chips, styles.chips)
export const ComboboxChip = styled(BaseCombobox.Chip, styles.chip)
export const ComboboxChipRemove = styled(
  BaseCombobox.ChipRemove,
  styles.chipRemove,
)
