import { Checkbox, type CheckboxSize } from '@/components/Checkbox/Checkbox'
import {
  CheckboxIndicator,
  CheckboxRoot,
} from '@/components/Checkbox/primitives'
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group'
import clsx from 'clsx'
import { Check, Minus } from 'lucide-react'
import React from 'react'
import styles from './CheckboxGroup.module.scss'

function useCheckboxGroupState(
  value: string[] | undefined,
  defaultValue: string[] | undefined,
  onValueChange: BaseCheckboxGroup.Props['onValueChange'],
) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? [],
  )
  const isControlled = value !== undefined
  const resolvedValue = isControlled ? value : uncontrolledValue

  const handleValueChange: NonNullable<
    BaseCheckboxGroup.Props['onValueChange']
  > = (next, eventDetails) => {
    if (!isControlled) setUncontrolledValue(next)
    onValueChange?.(next, eventDetails)
  }

  return { resolvedValue, handleValueChange }
}

interface CheckboxGroupContextValue {
  size: CheckboxSize
  hasSelectAll: boolean
}

const CheckboxGroupContext = React.createContext<CheckboxGroupContextValue>({
  size: 'md',
  hasSelectAll: false,
})

export interface CheckboxGroupRootProps extends Omit<
  BaseCheckboxGroup.Props,
  'children'
> {
  children?: React.ReactNode
  size?: CheckboxSize
  legend?: React.ReactNode
}

export function CheckboxGroupRoot({
  children,
  size = 'md',
  legend,
  className,
  value: valueProp,
  defaultValue,
  onValueChange,
  allValues,
  ...rest
}: CheckboxGroupRootProps) {
  const legendId = React.useId()
  const hasSelectAll = allValues != null

  const { resolvedValue, handleValueChange } = useCheckboxGroupState(
    valueProp,
    defaultValue,
    onValueChange,
  )

  return (
    <CheckboxGroupContext.Provider value={{ size, hasSelectAll }}>
      <BaseCheckboxGroup
        aria-labelledby={legend ? legendId : undefined}
        className={clsx(styles.group, className)}
        {...rest}
        {...(hasSelectAll
          ? {
              value: resolvedValue,
              onValueChange: handleValueChange,
              allValues,
            }
          : { value: valueProp, defaultValue, onValueChange })}
      >
        {legend && (
          <span id={legendId} className={styles.legend}>
            {legend}
          </span>
        )}
        <div className={styles.items}>{children}</div>
      </BaseCheckboxGroup>
    </CheckboxGroupContext.Provider>
  )
}

export interface CheckboxGroupSelectAllProps {
  children?: React.ReactNode
  className?: string
}

export function CheckboxGroupSelectAll({
  children = 'Select all',
  className,
}: CheckboxGroupSelectAllProps) {
  const { size } = React.useContext(CheckboxGroupContext)

  return (
    <label className={clsx(styles.item, className)}>
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
        <span className={styles.itemLabel}>{children}</span>
      </div>
    </label>
  )
}

export interface CheckboxGroupItemProps {
  value: string
  children: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
  className?: string
}

export function CheckboxGroupItem({
  value,
  children,
  description,
  disabled,
  className,
}: CheckboxGroupItemProps) {
  const { size, hasSelectAll } = React.useContext(CheckboxGroupContext)

  return (
    <Checkbox
      size={size}
      value={value}
      disabled={disabled}
      label={children}
      description={description}
      wrapperProps={{
        className: clsx(hasSelectAll && styles.itemIndented, className),
      }}
    />
  )
}
