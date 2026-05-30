import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

export default {
  title: 'Feedback/Progress',
  component: Progress,
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
} satisfies Meta<typeof Progress>

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => (
    <Progress value={40}>
      <Progress.Header>
        <Progress.Label>Uploading…</Progress.Label>
        <Progress.Value />
      </Progress.Header>
      <Progress.Track />
    </Progress>
  ),
}

export const Complete: Story = {
  render: () => (
    <Progress value={100}>
      <Progress.Header>
        <Progress.Label>Upload complete</Progress.Label>
        <Progress.Value />
      </Progress.Header>
      <Progress.Track />
    </Progress>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <Progress value={null}>
      <Progress.Header>
        <Progress.Label>Loading…</Progress.Label>
      </Progress.Header>
      <Progress.Track />
    </Progress>
  ),
}

export const TrackOnly: Story = {
  render: () => (
    <Progress value={60}>
      <Progress.Track />
    </Progress>
  ),
}

export const Formatted: Story = {
  render: () => (
    <Progress value={3} max={12} format={{ style: 'unit', unit: 'megabyte', maximumFractionDigits: 0 }}>
      <Progress.Header>
        <Progress.Label>Installing</Progress.Label>
        <Progress.Value />
      </Progress.Header>
      <Progress.Track />
    </Progress>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <Progress value={40}>
        <Progress.Header>
          <Progress.Label>Progressing</Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>

      <Progress value={100}>
        <Progress.Header>
          <Progress.Label>Complete</Progress.Label>
          <Progress.Value />
        </Progress.Header>
        <Progress.Track />
      </Progress>

      <Progress value={null}>
        <Progress.Header>
          <Progress.Label>Indeterminate</Progress.Label>
        </Progress.Header>
        <Progress.Track />
      </Progress>

      <Progress value={65}>
        <Progress.Track />
      </Progress>
    </div>
  ),
}
