import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'
import clsx from 'clsx'
import { Check, Minus } from 'lucide-react'
import React from 'react'
import { CheckboxIndicator, CheckboxRoot } from './primitives'
import styles from './Checkbox.module.scss'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps extends Omit<
  BaseCheckbox.Root.Props,
  'children'
> {
  size?: CheckboxSize
  label?: React.ReactNode
  wrapperProps?: React.ComponentProps<'label'>
}

export function Checkbox({
  size = 'md',
  label,
  wrapperProps,
  indeterminate,
  ...props
}: CheckboxProps) {
  return (
    <label
      {...wrapperProps}
      className={clsx(styles.wrapper, wrapperProps?.className)}
    >
      <CheckboxRoot data-size={size} indeterminate={indeterminate} {...props}>
        <CheckboxIndicator keepMounted>
          {indeterminate ? <Minus aria-hidden /> : <Check aria-hidden />}
        </CheckboxIndicator>
      </CheckboxRoot>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
