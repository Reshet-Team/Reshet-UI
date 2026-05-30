import { Progress as BaseProgress } from '@base-ui/react/progress'
import React from 'react'
import { ProgressIndicator, ProgressLabel, ProgressRoot, ProgressTrack, ProgressValue } from './primitives'
import styles from './Progress.module.scss'

export interface ProgressProps extends BaseProgress.Root.Props {
  label?: React.ReactNode
  showValue?: boolean
}

export function Progress({ label, showValue = true, ...props }: ProgressProps) {
  const isIndeterminate = props.value === null

  return (
    <ProgressRoot {...props}>
      {(label || (showValue && !isIndeterminate)) && (
        <div className={styles.header}>
          {label && <ProgressLabel>{label}</ProgressLabel>}
          {showValue && !isIndeterminate && <ProgressValue />}
        </div>
      )}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  )
}
