import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

export default {
  title: 'Display/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['rectangle', 'circle', 'text'],
      table: { defaultValue: { summary: 'rectangle' } },
    },
  },
} satisfies Meta<typeof Skeleton>

type Story = StoryObj<typeof Skeleton>

export const Rectangle: Story = {
  args: {
    shape: 'rectangle',
    style: { width: 200, height: 20 },
  },
}

export const Circle: Story = {
  args: {
    shape: 'circle',
    style: { width: 40 },
  },
}

export const Text: Story = {
  args: {
    shape: 'text',
    style: { width: 200 },
  },
}

export const Card: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 280 }}
    >
      <Skeleton shape='rectangle' style={{ height: 160 }} />
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton shape='circle' style={{ width: 40 }} />
        <div
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}
        >
          <Skeleton shape='text' style={{ width: '75%' }} />
          <Skeleton shape='text' style={{ width: '50%' }} />
        </div>
      </div>
    </div>
  ),
}

export const TextBlock: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 320 }}
    >
      <Skeleton shape='text' />
      <Skeleton shape='text' style={{ width: '90%' }} />
      <Skeleton shape='text' style={{ width: '80%' }} />
      <Skeleton shape='text' style={{ width: '60%' }} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton shape='circle' style={{ width: 40 }} />
        <div
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}
        >
          <Skeleton shape='text' style={{ width: '60%' }} />
          <Skeleton shape='text' style={{ width: '40%' }} />
        </div>
      </div>
      <Skeleton shape='rectangle' style={{ height: 120 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton shape='text' />
        <Skeleton shape='text' style={{ width: '85%' }} />
        <Skeleton shape='text' style={{ width: '70%' }} />
      </div>
    </div>
  ),
}
