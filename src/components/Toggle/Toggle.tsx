import { Toggle as BaseToggle } from '@base-ui/react/toggle'
import clsx from 'clsx'
import styles from './Toggle.module.scss'

export type ToggleSize = 'sm' | 'md' | 'lg'
export type ToggleVariant = 'solid' | 'subtle' | 'accent' | 'custom'

export interface ToggleProps extends BaseToggle.Props {
  size?: ToggleSize
  variant?: ToggleVariant
}

export function Toggle({ size = 'md', variant = 'solid', className, ...props }: ToggleProps) {
  return (
    <BaseToggle
      className={clsx(styles.toggle, className)}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  )
}
