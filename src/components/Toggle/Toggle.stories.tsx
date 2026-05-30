import type { Meta, StoryObj } from '@storybook/react'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bell,
  BellOff,
  Bold,
  Bookmark,
  BookmarkCheck,
  Heart,
  Italic,
  Star,
} from 'lucide-react'
import { Toggle } from './Toggle'

export default {
  title: 'Inputs/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'accent'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Toggle>

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    'aria-label': 'Bold',
    children: <Bold size={16} />,
  },
}

export const Pressed: Story = {
  args: {
    'aria-label': 'Bold',
    defaultPressed: true,
    children: <Bold size={16} />,
  },
}

export const Disabled: Story = {
  args: {
    'aria-label': 'Bold',
    disabled: true,
    children: <Bold size={16} />,
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Toggle size='sm' aria-label='Star small'>
        <Star size={12} />
      </Toggle>
      <Toggle size='md' aria-label='Star medium'>
        <Star size={16} />
      </Toggle>
      <Toggle size='lg' aria-label='Star large'>
        <Star size={20} />
      </Toggle>
    </div>
  ),
}

export const TextFormatting: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 4 }}>
      <Toggle aria-label='Bold' defaultPressed>
        <Bold size={16} />
      </Toggle>
      <Toggle aria-label='Italic'>
        <Italic size={16} />
      </Toggle>
      <Toggle aria-label='Align left'>
        <AlignLeft size={16} />
      </Toggle>
      <Toggle aria-label='Align center' defaultPressed>
        <AlignCenter size={16} />
      </Toggle>
      <Toggle aria-label='Align right'>
        <AlignRight size={16} />
      </Toggle>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'flex-start',
      }}
    >
      {(['solid', 'subtle', 'accent', 'custom'] as const).map((variant) => (
        <div
          key={variant}
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <span
            style={{ width: 48, fontSize: 12, color: 'var(--color-fg-muted)' }}
          >
            {variant}
          </span>
          <Toggle aria-label='Bold' variant={variant}>
            <Bold size={16} />
          </Toggle>
          <Toggle aria-label='Bold' variant={variant} defaultPressed>
            <Bold size={16} />
          </Toggle>
        </div>
      ))}
    </div>
  ),
}

export const Custom: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Toggle
        variant='custom'
        aria-label='Bookmark'
        render={(props, state) => (
          <button type='button' {...props}>
            {state.pressed ? (
              <BookmarkCheck size={16} />
            ) : (
              <Bookmark size={16} />
            )}
          </button>
        )}
      />
      <Toggle
        variant='custom'
        aria-label='Bell notifications'
        render={(props, state) => (
          <button type='button' {...props}>
            {state.pressed ? <BellOff size={16} /> : <Bell size={16} />}
          </button>
        )}
      />
      <Toggle
        variant='custom'
        aria-label='Favorite'
        defaultPressed
        render={(props, state) => (
          <button type='button' {...props}>
            <Heart
              size={16}
              style={
                state.pressed
                  ? {
                      fill: 'var(--color-danger)',
                      color: 'var(--color-danger)',
                    }
                  : undefined
              }
            />
          </button>
        )}
      />
    </div>
  ),
}
