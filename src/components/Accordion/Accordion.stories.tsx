import type { Meta, StoryObj } from '@storybook/react'
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from './Accordion'

export default {
  title: 'Navigation/Accordion',
  component: AccordionRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AccordionRoot>

type Story = StoryObj<typeof AccordionRoot>

const items = [
  {
    id: '1',
    question: 'What is Base UI?',
    answer:
      'Base UI is a library of high-quality unstyled React components for design systems and web apps.',
  },
  {
    id: '2',
    question: 'How do I get started?',
    answer:
      "Head to the Quick start guide in the docs. If you've used unstyled libraries before, you'll feel right at home.",
  },
  {
    id: '3',
    question: 'Can I use it for my project?',
    answer: 'Of course! Base UI is free and open source.',
  },
]

export const Default: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <AccordionRoot>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionPanel>{item.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <AccordionRoot multiple>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionPanel>{item.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </div>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <AccordionRoot defaultValue={['1']}>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionPanel>{item.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </div>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <AccordionRoot>
        {items.map((item, i) => (
          <AccordionItem key={item.id} value={item.id} disabled={i === 1}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionPanel>{item.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </div>
  ),
}
