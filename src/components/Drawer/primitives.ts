import { Drawer as BaseDrawer } from '@base-ui/react/drawer'
import { styled } from '../../utilities/styled'
import styles from './Drawer.module.scss'

export default {
  Root: BaseDrawer.Root,
  Portal: BaseDrawer.Portal,
  Backdrop: styled(BaseDrawer.Backdrop, styles.backdrop),
  Viewport: styled(BaseDrawer.Viewport, styles.viewport),
  Popup: styled(BaseDrawer.Popup, styles.popup),
  Content: styled(BaseDrawer.Content, styles.content),
  Title: styled(BaseDrawer.Title, styles.title),
  Description: styled(BaseDrawer.Description, styles.description),
  Trigger: BaseDrawer.Trigger,
  Close: BaseDrawer.Close,
}
