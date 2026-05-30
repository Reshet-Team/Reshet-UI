import { Progress as BaseProgress } from '@base-ui/react/progress'
import { styled } from '../../utilities/styled'
import styles from './Progress.module.scss'

export const ProgressRoot = styled(BaseProgress.Root, styles.root)
export const ProgressTrack = styled(BaseProgress.Track, styles.track)
export const ProgressIndicator = styled(BaseProgress.Indicator, styles.indicator)
export const ProgressLabel = styled(BaseProgress.Label, styles.label)
export const ProgressValue = styled(BaseProgress.Value, styles.value)
