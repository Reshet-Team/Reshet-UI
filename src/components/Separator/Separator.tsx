import { Separator as BaseSeparator } from '@base-ui/react/separator'
import clsx from 'clsx'
import styles from './Separator.module.scss'

export type SeparatorProps = BaseSeparator.Props

function Separator({ className, ...props }: SeparatorProps) {
  return (
    <BaseSeparator className={clsx(styles.separator, className)} {...props} />
  )
}

export { Separator }
