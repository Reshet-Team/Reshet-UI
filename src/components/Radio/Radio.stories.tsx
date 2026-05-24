import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof Radio>

const appleItems = [
  { value: 'fuji', label: 'Fuji' },
  { value: 'gala', label: 'Gala' },
  { value: 'granny-smith', label: 'Granny Smith' },
]

const planItems = [
  {
    value: 'starter',
    label: 'Starter',
    description: 'Up to 3 projects',
  },
  {
    value: 'pro',
    label: 'Pro',
    description: 'Unlimited projects',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'Custom limits',
  },
]

export const Primary: Story = {
  render: () => (
    <Radio items={appleItems} legend='Best apple' defaultValue='fuji' />
  ),
}

export const Secondary: Story = {
  render: () => (
    <Radio items={planItems} legend='Select a plan' defaultValue='pro' />
  ),
}

export const Cards: Story = {
  render: () => (
    <Radio
      items={planItems}
      variant='cards'
      legend='Select a plan'
      defaultValue='pro'
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Radio
      items={[
        { value: 'fuji', label: 'Fuji' },
        { value: 'gala', label: 'Gala', disabled: true },
        { value: 'granny-smith', label: 'Granny Smith' },
      ]}
      legend='Best apple'
      defaultValue='fuji'
    />
  ),
}

export const DisabledCards: Story = {
  render: () => (
    <Radio
      items={[
        { value: 'starter', label: 'Starter', description: 'Up to 3 projects' },
        {
          value: 'pro',
          label: 'Pro',
          description: 'Unlimited projects',
          disabled: true,
        },
        {
          value: 'enterprise',
          label: 'Enterprise',
          description: 'Custom limits',
        },
      ]}
      variant='cards'
      legend='Select a plan'
      defaultValue='starter'
    />
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-8)',
      }}
    >
      <Radio items={appleItems} legend='Normal variant' defaultValue='fuji' />
      <Radio
        items={planItems}
        variant='cards'
        legend='Cards variant'
        defaultValue='pro'
      />
    </div>
  ),
}
