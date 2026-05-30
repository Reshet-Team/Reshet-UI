import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
import { Switch } from './Switch'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <Switch label={t({ en: 'Enable notifications', he: 'הפעל התראות' })} />
    )
  },
}

export const Checked: Story = {
  render: function Checked() {
    const t = useT()
    return (
      <Switch
        label={t({ en: 'Enabled by default', he: 'מופעל כברירת מחדל' })}
        defaultChecked
      />
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch
          label={t({ en: 'Disabled off', he: 'מושבת (כבוי)' })}
          disabled
        />
        <Switch
          label={t({ en: 'Disabled on', he: 'מושבת (מופעל)' })}
          defaultChecked
          disabled
        />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch
          size='sm'
          label={t({ en: 'Small', he: 'קטן' })}
          defaultChecked
        />
        <Switch
          size='md'
          label={t({ en: 'Medium', he: 'בינוני' })}
          defaultChecked
        />
        <Switch
          size='lg'
          label={t({ en: 'Large', he: 'גדול' })}
          defaultChecked
        />
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch label={t({ en: 'Off', he: 'כבוי' })} />
        <Switch label={t({ en: 'On', he: 'מופעל' })} defaultChecked />
        <Switch
          label={t({ en: 'Disabled off', he: 'מושבת (כבוי)' })}
          disabled
        />
        <Switch
          label={t({ en: 'Disabled on', he: 'מושבת (מופעל)' })}
          defaultChecked
          disabled
        />
      </div>
    )
  },
}

export const Controlled: Story = {
  render: function Controlled() {
    const t = useT()
    const [checked, setChecked] = React.useState(false)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <Switch
          label={t({ en: 'Dark mode', he: 'מצב כהה' })}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <span
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-subtle)',
          }}
        >
          {checked
            ? t({ en: 'Dark mode is on', he: 'מצב כהה פעיל' })
            : t({ en: 'Dark mode is off', he: 'מצב כהה כבוי' })}
        </span>
      </div>
    )
  },
}
