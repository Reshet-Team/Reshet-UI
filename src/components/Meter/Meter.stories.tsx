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
  render: () => (
    <Meter value={65}>
      <Meter.Header>
        <Meter.Label>Storage used</Meter.Label>
        <Meter.Value />
      </Meter.Header>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  ),
}

export const Success: Story = {
  render: () => (
    <Meter value={80} color='success'>
      <Meter.Header>
        <Meter.Label>Goal reached</Meter.Label>
        <Meter.Value />
      </Meter.Header>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  ),
}

export const Warning: Story = {
  render: () => (
    <Meter value={78} color='warning'>
      <Meter.Header>
        <Meter.Label>CPU usage</Meter.Label>
        <Meter.Value />
      </Meter.Header>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  ),
}

export const Danger: Story = {
  render: () => (
    <Meter value={92} color='danger'>
      <Meter.Header>
        <Meter.Label>Disk usage</Meter.Label>
        <Meter.Value />
      </Meter.Header>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  ),
}

export const Formatted: Story = {
  render: () => (
    <Meter value={7.4} min={0} max={10} format={{ style: 'unit', unit: 'gigabyte', maximumFractionDigits: 1 }}>
      <Meter.Header>
        <Meter.Label>Bandwidth</Meter.Label>
        <Meter.Value />
      </Meter.Header>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  ),
}

export const TrackOnly: Story = {
  render: () => (
    <Meter value={45}>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {(
        [
          { label: 'Default', value: 50, color: 'default' },
          { label: 'Success', value: 80, color: 'success' },
          { label: 'Warning', value: 70, color: 'warning' },
          { label: 'Danger', value: 90, color: 'danger' },
        ] as const
      ).map(({ label, value, color }) => (
        <Meter key={color} value={value} color={color}>
          <Meter.Header>
            <Meter.Label>{label}</Meter.Label>
            <Meter.Value />
          </Meter.Header>
          <Meter.Track>
            <Meter.Indicator />
          </Meter.Track>
        </Meter>
      ))}
    </div>
  ),
}
