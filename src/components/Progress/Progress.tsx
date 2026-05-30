import { Progress as BaseProgress } from '@base-ui/react/progress'
import { ProgressIndicator, ProgressLabel, ProgressRoot, ProgressTrack, ProgressValue } from './primitives'
import styles from './Progress.module.scss'

export interface ProgressProps extends BaseProgress.Root.Props {}

export function Progress({ children, ...props }: ProgressProps) {
  return (
    <ProgressRoot {...props}>
      {children}
    </ProgressRoot>
  )
}

Progress.Track = ProgressTrack
Progress.Indicator = ProgressIndicator
Progress.Label = ProgressLabel
Progress.Value = ProgressValue
Progress.Header = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.header}>{children}</div>
)
