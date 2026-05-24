import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import * as Primitives from './primitives'
import styles from './Accordion.module.scss'

export interface AccordionTriggerProps extends BaseAccordion.Trigger.Props {
  children: React.ReactNode
}

export function AccordionTrigger({
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <Primitives.AccordionHeader>
      <Primitives.AccordionTriggerBase {...props}>
        <span>{children}</span>
        <ChevronRight size={16} className={styles.icon} aria-hidden />
      </Primitives.AccordionTriggerBase>
    </Primitives.AccordionHeader>
  )
}

export interface AccordionPanelProps extends BaseAccordion.Panel.Props {
  children: React.ReactNode
}

export function AccordionPanel({ children, ...props }: AccordionPanelProps) {
  return (
    <Primitives.AccordionPanel {...props}>
      <div style={{ padding: 'var(--space-2) var(--space-3)' }}>{children}</div>
    </Primitives.AccordionPanel>
  )
}
