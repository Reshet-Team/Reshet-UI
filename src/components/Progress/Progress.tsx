import { Progress as BaseProgress } from '@base-ui/react/progress'
import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from './primitives'
import styles from './Progress.module.scss'

export type ProgressProps = BaseProgress.Root.Props

export function Progress({ children, ...props }: ProgressProps) {
  return <ProgressRoot {...props}>{children}</ProgressRoot>
}

function ProgressTrackWithIndicator(props: BaseProgress.Track.Props) {
  return (
    <ProgressTrack {...props}>
      <ProgressIndicator />
    </ProgressTrack>
  )
}

Progress.Track = ProgressTrackWithIndicator
Progress.Label = ProgressLabel
Progress.Value = ProgressValue
Progress.Header = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.header}>{children}</div>
)
