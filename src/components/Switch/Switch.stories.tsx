import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Switch } from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => <Switch label='Enable notifications' />,
}

export const Checked: Story = {
  render: () => <Switch label='Enabled by default' defaultChecked />,
}

export const Disabled: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
      }}
    >
      <Switch label='Disabled off' disabled />
      <Switch label='Disabled on' defaultChecked disabled />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
      }}
    >
      <Switch size='sm' label='Small' defaultChecked />
      <Switch size='md' label='Medium' defaultChecked />
      <Switch size='lg' label='Large' defaultChecked />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
      }}
    >
      <Switch label='Off' />
      <Switch label='On' defaultChecked />
      <Switch label='Disabled off' disabled />
      <Switch label='Disabled on' defaultChecked disabled />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
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
          label='Dark mode'
          checked={checked}
          onCheckedChange={setChecked}
        />
        <span
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-subtle)',
          }}
        >
          Dark mode is {checked ? 'on' : 'off'}
        </span>
      </div>
    )
  },
}
