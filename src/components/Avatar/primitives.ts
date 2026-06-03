import { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import { styled } from '../../utilities/styled'
import styles from './Avatar.module.scss'

export default {
  Root: styled(BaseAvatar.Root, styles.root),
  Image: styled(BaseAvatar.Image, styles.image),
  Fallback: styled(BaseAvatar.Fallback, styles.fallback),
}
