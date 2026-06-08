import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import styles from './Collapsible.module.scss'
import { CollapsiblePanel, CollapsibleRoot, CollapsibleTriggerBase } from './primitives'

export interface CollapsibleProps extends BaseCollapsible.Root.Props {
  children: React.ReactNode
}

export interface CollapsibleTriggerProps extends BaseCollapsible.Trigger.Props {
  children: React.ReactNode
}

export function CollapsibleTrigger({ children, ...props }: CollapsibleTriggerProps) {
  return (
    <CollapsibleTriggerBase {...props}>
      {children}
      <ChevronRight size={16} className={styles.icon} aria-hidden />
    </CollapsibleTriggerBase>
  )
}

export { CollapsiblePanel, CollapsibleRoot }
