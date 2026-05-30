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
  args: {
    label: 'Uploading…',
    value: 40,
  },
}

export const Complete: Story = {
  args: {
    label: 'Upload complete',
    value: 100,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Loading…',
    value: null,
  },
}

export const NoLabel: Story = {
  args: {
    value: 60,
    showValue: false,
  },
}

export const Formatted: Story = {
  args: {
    label: 'Installing',
    value: 3,
    max: 12,
    format: { style: 'unit', unit: 'megabyte', maximumFractionDigits: 0 },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <Progress label='Progressing' value={40} />
      <Progress label='Complete' value={100} />
      <Progress label='Indeterminate' value={null} />
      <Progress label='No value shown' value={65} showValue={false} />
    </div>
  ),
}
