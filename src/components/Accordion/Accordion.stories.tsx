import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { AccordionItem, AccordionPanel, AccordionRoot, AccordionTrigger } from './Accordion'

export default {
  title: 'Navigation/Accordion',
  component: AccordionRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AccordionRoot>

type Story = StoryObj<typeof AccordionRoot>

function useItems() {
  const { t } = useTranslation()
  return [
    {
      id: '1',
      question: t('accordion.question1'),
      answer: t('accordion.answer1'),
    },
    {
      id: '2',
      question: t('accordion.question2'),
      answer: t('accordion.answer2'),
    },
    {
      id: '3',
      question: t('accordion.question3'),
      answer: t('accordion.answer3'),
    },
  ]
}

export const Default: Story = {
  render: function Default() {
    const items = useItems()
    return (
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
    )
  },
}

export const Multiple: Story = {
  render: function Multiple() {
    const items = useItems()
    return (
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
    )
  },
}

export const DefaultOpen: Story = {
  render: function DefaultOpen() {
    const items = useItems()
    return (
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
    )
  },
}

export const WithDisabledItem: Story = {
  render: function WithDisabledItem() {
    const items = useItems()
    return (
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
    )
  },
}
