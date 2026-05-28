import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group'
import clsx from 'clsx'
import styles from './ToggleGroup.module.scss'

export type ToggleGroupProps = BaseToggleGroup.Props

export function ToggleGroup({ className, ...props }: ToggleGroupProps) {
  return (
    <BaseToggleGroup className={clsx(styles.group, className)} {...props} />
  )
}
