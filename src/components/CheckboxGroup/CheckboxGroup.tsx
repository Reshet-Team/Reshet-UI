import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group'
import clsx from 'clsx'
import { Check, Minus } from 'lucide-react'
import React from 'react'
import type { CheckboxSize } from '../Checkbox/Checkbox'
import { CheckboxIndicator, CheckboxRoot } from '../Checkbox/primitives'
import styles from './CheckboxGroup.module.scss'

export interface CheckboxGroupItem {
  value: string
  label: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
}

export interface CheckboxGroupProps extends Omit<
  BaseCheckboxGroup.Props,
  'children'
> {
  items: CheckboxGroupItem[]
  legend?: React.ReactNode
  size?: CheckboxSize
  /** Render a "select all" parent checkbox above the items */
  showSelectAll?: boolean
  selectAllLabel?: React.ReactNode
}

export function CheckboxGroup({
  items,
  legend,
  size = 'md',
  showSelectAll = false,
  selectAllLabel = 'Select all',
  className,
  value: valueProp,
  defaultValue,
  onValueChange,
  ...rest
}: CheckboxGroupProps) {
  const legendId = React.useId()
  const allValues = items.map((item) => item.value)

  // The parent checkbox requires the group to be controlled.
  // We manage internal state so it always works, whether the consumer is
  // controlled or uncontrolled.
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(
    (defaultValue ?? []) as string[],
  )
  const isControlled = valueProp !== undefined
  const resolvedValue = isControlled
    ? (valueProp as string[])
    : uncontrolledValue

  const handleValueChange: NonNullable<
    BaseCheckboxGroup.Props['onValueChange']
  > = (next, eventDetails) => {
    if (!isControlled) setUncontrolledValue(next)
    onValueChange?.(next, eventDetails)
  }

  return (
    <BaseCheckboxGroup
      aria-labelledby={legend ? legendId : undefined}
      className={clsx(styles.group, className)}
      {...rest}
      {...(showSelectAll
        ? { value: resolvedValue, onValueChange: handleValueChange, allValues }
        : { value: valueProp, defaultValue, onValueChange })}
    >
      {legend && (
        <span id={legendId} className={styles.legend}>
          {legend}
        </span>
      )}
      <div className={styles.items}>
        {showSelectAll && (
          <label className={styles.item}>
            <CheckboxRoot data-size={size} parent>
              <CheckboxIndicator
                keepMounted
                render={(indicatorProps, state) => (
                  <span {...indicatorProps}>
                    {state.indeterminate ? (
                      <Minus aria-hidden />
                    ) : (
                      <Check aria-hidden />
                    )}
                  </span>
                )}
              />
            </CheckboxRoot>
            <div className={styles.itemContent}>
              <span className={styles.itemLabel}>{selectAllLabel}</span>
            </div>
          </label>
        )}
        {items.map((item) => (
          <label
            key={item.value}
            className={clsx(styles.item, showSelectAll && styles.itemIndented)}
          >
            <CheckboxRoot
              data-size={size}
              value={item.value}
              disabled={item.disabled}
            >
              <CheckboxIndicator keepMounted>
                <Check aria-hidden />
              </CheckboxIndicator>
            </CheckboxRoot>
            <div className={styles.itemContent}>
              <span className={styles.itemLabel}>{item.label}</span>
              {item.description && (
                <span className={styles.itemDescription}>
                  {item.description}
                </span>
              )}
            </div>
          </label>
        ))}
      </div>
    </BaseCheckboxGroup>
  )
}
