import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
import { Radio } from './Radio'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <Radio
        items={[
          { value: 'fuji', label: t({ en: 'Fuji', he: "פוג'י" }) },
          { value: 'gala', label: t({ en: 'Gala', he: 'גאלה' }) },
          {
            value: 'granny-smith',
            label: t({ en: 'Granny Smith', he: 'גרני סמית' }),
          },
        ]}
        legend={t({ en: 'Best apple', he: 'התפוח הטוב ביותר' })}
        defaultValue='fuji'
      />
    )
  },
}

export const WithDescriptions: Story = {
  render: function WithDescriptions() {
    const t = useT()
    return (
      <Radio
        items={[
          {
            value: 'starter',
            label: t({ en: 'Starter', he: 'מתחיל' }),
            description: t({ en: 'Up to 3 projects', he: 'עד 3 פרויקטים' }),
          },
          {
            value: 'pro',
            label: t({ en: 'Pro', he: 'פרו' }),
            description: t({
              en: 'Unlimited projects',
              he: 'פרויקטים ללא הגבלה',
            }),
          },
          {
            value: 'enterprise',
            label: t({ en: 'Enterprise', he: 'ארגוני' }),
            description: t({ en: 'Custom limits', he: 'מגבלות מותאמות אישית' }),
          },
        ]}
        legend={t({ en: 'Select a plan', he: 'בחר תוכנית' })}
        defaultValue='pro'
      />
    )
  },
}

export const Cards: Story = {
  render: function Cards() {
    const t = useT()
    return (
      <Radio
        items={[
          {
            value: 'starter',
            label: t({ en: 'Starter', he: 'מתחיל' }),
            description: t({ en: 'Up to 3 projects', he: 'עד 3 פרויקטים' }),
          },
          {
            value: 'pro',
            label: t({ en: 'Pro', he: 'פרו' }),
            description: t({
              en: 'Unlimited projects',
              he: 'פרויקטים ללא הגבלה',
            }),
          },
          {
            value: 'enterprise',
            label: t({ en: 'Enterprise', he: 'ארגוני' }),
            description: t({ en: 'Custom limits', he: 'מגבלות מותאמות אישית' }),
          },
        ]}
        variant='cards'
        legend={t({ en: 'Select a plan', he: 'בחר תוכנית' })}
        defaultValue='pro'
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <Radio
        items={[
          { value: 'fuji', label: t({ en: 'Fuji', he: "פוג'י" }) },
          {
            value: 'gala',
            label: t({ en: 'Gala', he: 'גאלה' }),
            disabled: true,
          },
          {
            value: 'granny-smith',
            label: t({ en: 'Granny Smith', he: 'גרני סמית' }),
          },
        ]}
        legend={t({ en: 'Best apple', he: 'התפוח הטוב ביותר' })}
        defaultValue='fuji'
      />
    )
  },
}

export const DisabledCards: Story = {
  render: function DisabledCards() {
    const t = useT()
    return (
      <Radio
        items={[
          {
            value: 'starter',
            label: t({ en: 'Starter', he: 'מתחיל' }),
            description: t({ en: 'Up to 3 projects', he: 'עד 3 פרויקטים' }),
          },
          {
            value: 'pro',
            label: t({ en: 'Pro', he: 'פרו' }),
            description: t({
              en: 'Unlimited projects',
              he: 'פרויקטים ללא הגבלה',
            }),
            disabled: true,
          },
          {
            value: 'enterprise',
            label: t({ en: 'Enterprise', he: 'ארגוני' }),
            description: t({ en: 'Custom limits', he: 'מגבלות מותאמות אישית' }),
          },
        ]}
        variant='cards'
        legend={t({ en: 'Select a plan', he: 'בחר תוכנית' })}
        defaultValue='starter'
      />
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const t = useT()
    const appleItems = [
      { value: 'fuji', label: t({ en: 'Fuji', he: "פוג'י" }) },
      { value: 'gala', label: t({ en: 'Gala', he: 'גאלה' }) },
      {
        value: 'granny-smith',
        label: t({ en: 'Granny Smith', he: 'גרני סמית' }),
      },
    ]
    const planItems = [
      {
        value: 'starter',
        label: t({ en: 'Starter', he: 'מתחיל' }),
        description: t({ en: 'Up to 3 projects', he: 'עד 3 פרויקטים' }),
      },
      {
        value: 'pro',
        label: t({ en: 'Pro', he: 'פרו' }),
        description: t({ en: 'Unlimited projects', he: 'פרויקטים ללא הגבלה' }),
      },
      {
        value: 'enterprise',
        label: t({ en: 'Enterprise', he: 'ארגוני' }),
        description: t({ en: 'Custom limits', he: 'מגבלות מותאמות אישית' }),
      },
    ]
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-8)',
        }}
      >
        <Radio
          items={appleItems}
          legend={t({ en: 'Normal variant', he: 'גרסה רגילה' })}
          defaultValue='fuji'
        />
        <Radio
          items={planItems}
          variant='cards'
          legend={t({ en: 'Cards variant', he: 'גרסת כרטיסים' })}
          defaultValue='pro'
        />
      </div>
    )
  },
}
