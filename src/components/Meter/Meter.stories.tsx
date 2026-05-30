import type { Meta, StoryObj } from '@storybook/react'
import { Meter } from './Meter'

export default {
  title: 'Feedback/Meter',
  component: Meter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Meter>

type Story = StoryObj<typeof Meter>

export const Default: Story = {
  args: {
    label: 'Storage used',
    value: 65,
  },
}

export const Success: Story = {
  args: {
    label: 'Goal reached',
    value: 80,
    color: 'success',
  },
}

export const Warning: Story = {
  args: {
    label: 'CPU usage',
    value: 78,
    color: 'warning',
  },
}

export const Danger: Story = {
  args: {
    label: 'Disk usage',
    value: 92,
    color: 'danger',
  },
}

export const Formatted: Story = {
  args: {
    label: 'Bandwidth',
    value: 7.4,
    min: 0,
    max: 10,
    format: { style: 'unit', unit: 'gigabyte', maximumFractionDigits: 1 },
  },
}

export const NoLabel: Story = {
  args: {
    value: 45,
    showValue: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <Meter label='Default' value={50} />
      <Meter label='Success' value={80} color='success' />
      <Meter label='Warning' value={70} color='warning' />
      <Meter label='Danger' value={90} color='danger' />
      <Meter label='Percentage' value={42} format={{ style: 'percent' }} max={100} />
    </div>
  ),
}
