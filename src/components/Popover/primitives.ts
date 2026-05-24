import { Popover as BasePopover } from '@base-ui/react/popover'
import { styled } from '../../utilities/styled'
import styles from './Popover.module.scss'

export const PopoverRoot = BasePopover.Root
export const PopoverPortal = BasePopover.Portal
export const PopoverTrigger = styled(BasePopover.Trigger, styles.trigger)
export const PopoverPositioner = styled(
  BasePopover.Positioner,
  styles.positioner,
)
export const PopoverPopup = styled(BasePopover.Popup, styles.popup)
export const PopoverArrow = styled(BasePopover.Arrow, styles.arrow)
export const PopoverTitle = styled(BasePopover.Title, styles.title)
export const PopoverDescription = styled(
  BasePopover.Description,
  styles.description,
)
export const PopoverClose = styled(BasePopover.Close, styles.close)
export const PopoverBackdrop = BasePopover.Backdrop
export const PopoverViewport = styled(BasePopover.Viewport, styles.viewport)
