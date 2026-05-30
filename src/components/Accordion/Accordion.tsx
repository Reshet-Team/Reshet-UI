import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronRight } from "lucide-react";
import React from "react";
import Primitives from "./primitives";
import styles from "./Accordion.module.scss";

const AccordionRoot = Primitives.Root;
const AccordionItem = Primitives.Item;

export interface AccordionTriggerProps extends BaseAccordion.Trigger.Props {
  children: React.ReactNode;
}

function AccordionTrigger({ children, ...props }: AccordionTriggerProps) {
  return (
    <Primitives.Header>
      <Primitives.TriggerBase {...props}>
        <span>{children}</span>
        <ChevronRight size={16} className={styles.icon} aria-hidden />
      </Primitives.TriggerBase>
    </Primitives.Header>
  );
}

export interface AccordionPanelProps extends BaseAccordion.Panel.Props {
  children: React.ReactNode;
}

function AccordionPanel({ children, ...props }: AccordionPanelProps) {
  return (
    <Primitives.Panel {...props}>
      <div style={{ padding: "var(--space-2) var(--space-3)" }}>{children}</div>
    </Primitives.Panel>
  );
}

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionPanel };
