import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import {
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
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

function useItems() {
  const t = useT()
  return [
    {
      id: '1',
      question: t({ en: 'What is Base UI?', he: 'מהו Base UI?' }),
      answer: t({
        en: 'Base UI is a library of high-quality unstyled React components for design systems and web apps.',
        he: 'Base UI היא ספריית רכיבי React לא-מעוצבים באיכות גבוהה למערכות עיצוב ואפליקציות רשת.',
      }),
    },
    {
      id: '2',
      question: t({ en: 'How do I get started?', he: 'איך מתחילים?' }),
      answer: t({
        en: "Head to the Quick start guide in the docs. If you've used unstyled libraries before, you'll feel right at home.",
        he: 'עברו למדריך ההתחלה המהירה במסמכים. אם השתמשתם בספריות לא-מעוצבות בעבר, תרגישו כמו בבית.',
      }),
    },
    {
      id: '3',
      question: t({
        en: 'Can I use it for my project?',
        he: 'האם אוכל להשתמש בו בפרויקט שלי?',
      }),
      answer: t({
        en: 'Of course! Base UI is free and open source.',
        he: 'כמובן! Base UI חינמי ובקוד פתוח.',
      }),
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
