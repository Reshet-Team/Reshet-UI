import { Popover as BasePopover } from '@base-ui/react/popover'
import { styled } from '../../utilities/styled'
import styles from './Popover.module.scss'

export default {
  Root: BasePopover.Root,
  Portal: BasePopover.Portal,
  Trigger: styled(BasePopover.Trigger, styles.trigger),
  Positioner: styled(BasePopover.Positioner, styles.positioner),
  Popup: styled(BasePopover.Popup, styles.popup),
  Arrow: styled(BasePopover.Arrow, styles.arrow),
  Title: styled(BasePopover.Title, styles.title),
  Description: styled(BasePopover.Description, styles.description),
  Close: styled(BasePopover.Close, styles.close),
  Backdrop: BasePopover.Backdrop,
  Viewport: styled(BasePopover.Viewport, styles.viewport),
}
