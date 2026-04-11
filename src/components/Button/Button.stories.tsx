import type { StoryDefault, Story } from '@ladle/react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
} satisfies StoryDefault

export const Primary: Story = () => <Button variant='primary'>Primary</Button>

export const Secondary: Story = () => (
  <Button variant='secondary'>Secondary</Button>
)

export const Ghost: Story = () => <Button variant='ghost'>Ghost</Button>

export const Danger: Story = () => <Button variant='danger'>Danger</Button>

export const Sizes: Story = () => (
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
)

export const AllVariants: Story = () => (
  <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
    <Button variant='primary'>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='ghost'>Ghost</Button>
    <Button variant='danger'>Danger</Button>
    <Button variant='primary' disabled>
      Disabled
    </Button>
  </div>
)
