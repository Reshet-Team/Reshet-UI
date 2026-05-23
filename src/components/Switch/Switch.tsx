import { Switch as BaseSwitch } from '@base-ui/react/switch'
import clsx from 'clsx'
import React from 'react'
import { SwitchRoot, SwitchThumb } from './primitives'
import styles from './Switch.module.scss'

export type SwitchSize = 'sm' | 'md' | 'lg'

export interface SwitchProps extends Omit<BaseSwitch.Root.Props, 'children'> {
  size?: SwitchSize
  label?: React.ReactNode
  wrapperProps?: React.ComponentProps<'label'>
}

export function Switch({
  size = 'md',
  label,
  wrapperProps,
  ...props
}: SwitchProps) {
  return (
    <label
      {...wrapperProps}
      className={clsx(styles.wrapper, wrapperProps?.className)}
    >
      <SwitchRoot data-size={size} {...props}>
        <SwitchThumb />
      </SwitchRoot>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
