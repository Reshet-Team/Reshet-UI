import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button variant='primary'>Primary</Button>,
}

export const Secondary: Story = {
  render: () => <Button variant='secondary'>Secondary</Button>,
}

export const Ghost: Story = {
  render: () => <Button variant='ghost'>Ghost</Button>,
}

export const Danger: Story = {
  render: () => <Button variant='danger'>Danger</Button>,
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        flexWrap: 'wrap',
      }}
    >
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='primary' disabled>
        Disabled
      </Button>
    </div>
  ),
}
