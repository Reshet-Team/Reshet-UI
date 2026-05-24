import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './index'

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
} satisfies Meta

type Story = StoryObj

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
      <Accordion.Root>
        {items.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Trigger>{item.question}</Accordion.Trigger>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Accordion.Root multiple>
        {items.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Trigger>{item.question}</Accordion.Trigger>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Accordion.Root defaultValue={['1']}>
        {items.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Trigger>{item.question}</Accordion.Trigger>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Accordion.Root>
        {items.map((item, i) => (
          <Accordion.Item key={item.id} value={item.id} disabled={i === 1}>
            <Accordion.Trigger>{item.question}</Accordion.Trigger>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  ),
}
