import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { styled } from '../../utilities/styled'
import styles from './Accordion.module.scss'

export const AccordionRoot = styled(BaseAccordion.Root, styles.root)
export const AccordionItem = styled(BaseAccordion.Item, styles.item)
export const AccordionHeader = styled(BaseAccordion.Header, styles.header)
export const AccordionTriggerBase = styled(
  BaseAccordion.Trigger,
  styles.trigger,
)
export const AccordionPanel = styled(BaseAccordion.Panel, styles.panel)
