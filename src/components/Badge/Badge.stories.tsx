import type { Meta, StoryObj } from '@storybook/react'
import { Bell, Inbox } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from './Badge'

const Avatar = () => (
  <div
    style={{
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--color-bg-subtle)',
      border: '1px solid var(--color-border)',
    }}
  />
)

const IconButton = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-bg-subtle)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-fg)',
    }}
  >
    {children}
  </div>
)

const Thumbnail = () => (
  <div
    style={{
      width: 64,
      height: 48,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-bg-subtle)',
      border: '1px solid var(--color-border)',
    }}
  />
)

export default {
  title: 'Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text — number, string like "New", or omit for dot',
    },
    color: {
      control: 'select',
      options: ['danger', 'primary', 'success', 'warning', 'neutral'],
      table: { defaultValue: { summary: 'primary' } },
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      table: { defaultValue: { summary: 'top-right' } },
    },
  },
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Count: Story = {
  args: {
    label: 4,
    color: 'danger',
    overlap: 'circle',
    children: <Avatar />,
  },
}

export const TextLabel: Story = {
  render: function TextLabel() {
    const { t } = useTranslation()
    return (
      <Badge label={t('badge.new')} color='primary' overlap='circle'>
        <Avatar />
      </Badge>
    )
  },
}

export const Dot: Story = {
  args: {
    overlap: 'circle',
    children: <Avatar />,
  },
}

export const AllVariants: Story = {
  render: function AllVariants() {
    const { t } = useTranslation()
    return (
      <div
        style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'center' }}
      >
        <Badge label={4} color='danger' overlap='circle'>
          <Avatar />
        </Badge>
        <Badge label={t('badge.new')} color='primary' overlap='circle'>
          <Avatar />
        </Badge>
        <Badge label='99+' color='success' overlap='circle'>
          <Avatar />
        </Badge>
        <Badge label='!' color='warning' overlap='circle'>
          <Avatar />
        </Badge>
        <Badge color='neutral' overlap='circle'>
          <Avatar />
        </Badge>
      </div>
    )
  },
}

export const OnRectangularElements: Story = {
  render: function OnRectangularElements() {
    const { t } = useTranslation()
    return (
      <div
        style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'center' }}
      >
        <Badge label={3} color='danger'>
          <IconButton>
            <Bell size={18} />
          </IconButton>
        </Badge>
        <Badge label={t('badge.new')}>
          <IconButton>
            <Inbox size={18} />
          </IconButton>
        </Badge>
        <Badge color='success'>
          <IconButton>
            <Bell size={18} />
          </IconButton>
        </Badge>
        <Badge label={12} color='danger'>
          <Thumbnail />
        </Badge>
      </div>
    )
  },
}

export const Positions: Story = {
  render: () => (
    <div
      style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'center' }}
    >
      <Badge label={1} position='top-right' overlap='circle'>
        <Avatar />
      </Badge>
      <Badge label={1} position='top-left' overlap='circle'>
        <Avatar />
      </Badge>
      <Badge label={1} position='bottom-right' overlap='circle'>
        <Avatar />
      </Badge>
      <Badge label={1} position='bottom-left' overlap='circle'>
        <Avatar />
      </Badge>
    </div>
  ),
}
