import { RadioGroup } from '@base-ui/react/radio-group'
import clsx from 'clsx'
import React from 'react'
import { RadioGroupRoot, RadioIndicator, RadioItemRoot } from './primitives'
import styles from './Radio.module.scss'

export type RadioVariant = 'normal' | 'cards'

export interface RadioItem {
  value: string
  label: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
}

export interface RadioProps extends Omit<RadioGroup.Props, 'children'> {
  items: RadioItem[]
  variant?: RadioVariant
  legend?: React.ReactNode
}

export function Radio({
  items,
  variant = 'normal',
  legend,
  ...props
}: RadioProps) {
  return (
    <RadioGroupRoot data-variant={variant} {...props}>
      {legend && <span className={styles.legend}>{legend}</span>}
      <div
        className={clsx(styles.items, variant === 'cards' && styles.itemsCards)}
      >
        {items.map((item) => (
          <label
            key={item.value}
            className={clsx(
              styles.item,
              variant === 'cards' && styles.itemCard,
            )}
          >
            <RadioItemRoot value={item.value} disabled={item.disabled}>
              <RadioIndicator />
            </RadioItemRoot>
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
    </RadioGroupRoot>
  )
}
