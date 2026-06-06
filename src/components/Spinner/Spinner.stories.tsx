import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'neutral', 'danger', 'inline'],
      table: { defaultValue: { summary: 'primary' } },
    },
  },
} satisfies Meta<typeof Spinner>

type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}
    >
      <Spinner size='sm' />
      <Spinner size='md' />
      <Spinner size='lg' />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}
    >
      <Spinner color='primary' />
      <Spinner color='neutral' />
      <Spinner color='danger' />
      <Spinner color='inline' />
    </div>
  ),
}
