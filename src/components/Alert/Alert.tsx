import clsx from 'clsx'
import { AlertCircle, CheckCircle, Info, TriangleAlert } from 'lucide-react'
import styles from './Alert.module.scss'

export type AlertVariant = 'info' | 'warning' | 'danger' | 'success' | 'neutral'

const VARIANT_ICONS = {
  info: Info,
  warning: TriangleAlert,
  danger: AlertCircle,
  success: CheckCircle,
  neutral: null,
} as const

export interface AlertRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  icon?: React.ReactNode
}

function AlertRoot({ variant = 'neutral', icon, children, className, ...props }: AlertRootProps) {
  const DefaultIcon = VARIANT_ICONS[variant]
  const resolvedIcon =
    icon !== undefined ? icon : DefaultIcon ? <DefaultIcon size={16} aria-hidden /> : null

  return (
    <div role='alert' className={clsx(styles.root, className)} data-variant={variant} {...props}>
      {resolvedIcon && <span className={styles.icon}>{resolvedIcon}</span>}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

function AlertTitle({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={clsx(styles.title, className)} {...props}>
      {children}
    </p>
  )
}

function AlertDescription({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={clsx(styles.description, className)} {...props}>
      {children}
    </p>
  )
}

export { AlertDescription, AlertRoot, AlertTitle }
