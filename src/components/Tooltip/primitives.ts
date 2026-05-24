import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import { styled } from '../../utilities/styled'
import styles from './Tooltip.module.scss'

export const TooltipProvider = BaseTooltip.Provider
export const TooltipRoot = BaseTooltip.Root
export const TooltipTrigger = BaseTooltip.Trigger
export const TooltipPortal = BaseTooltip.Portal
export const TooltipPositioner = styled(
  BaseTooltip.Positioner,
  styles.positioner,
)
export const TooltipPopup = styled(BaseTooltip.Popup, styles.popup)
export const TooltipArrow = styled(BaseTooltip.Arrow, styles.arrow)
export const TooltipViewport = styled(BaseTooltip.Viewport, styles.viewport)
