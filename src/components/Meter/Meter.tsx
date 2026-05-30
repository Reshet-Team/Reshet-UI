import { Meter as BaseMeter } from '@base-ui/react/meter'
import React from 'react'
import { MeterIndicator, MeterLabel, MeterRoot, MeterTrack, MeterValue } from './primitives'
import styles from './Meter.module.scss'

export type MeterColor = 'default' | 'success' | 'warning' | 'danger'

export interface MeterProps extends BaseMeter.Root.Props {
  label?: React.ReactNode
  showValue?: boolean
  color?: MeterColor
}

export function Meter({ label, showValue = true, color = 'default', ...props }: MeterProps) {
  return (
    <MeterRoot data-color={color} {...props}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <MeterLabel>{label}</MeterLabel>}
          {showValue && <MeterValue />}
        </div>
      )}
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </MeterRoot>
  )
}
