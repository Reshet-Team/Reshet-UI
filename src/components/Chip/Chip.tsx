import clsx from 'clsx'
import styles from './Chip.module.scss'

export type ChipColor = 'amber' | 'orange' | 'rose' | 'purple' | 'blue' | 'green' | 'taupe'
export type ChipVariant = 'filled' | 'outline'

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: ChipColor
  variant?: ChipVariant
  icon?: React.ReactNode
}

export function Chip({
  color = 'blue',
  variant = 'filled',
  icon,
  children,
  className,
  ...props
}: ChipProps) {
  const leadingContent =
    icon !== undefined ? icon : <span className={styles.dot} aria-hidden='true' />

  return (
    <span
      className={clsx(styles.chip, className)}
      data-color={color}
      data-variant={variant}
      data-has-icon={leadingContent ? true : undefined}
      {...props}
    >
      {leadingContent}
      {children}
    </span>
  )
}
