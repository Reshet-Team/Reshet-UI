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
import { useTranslation } from 'react-i18next'
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
  render: function Default() {
    const { t } = useTranslation()
    return (
      <Toggle aria-label={t('toggle.bold')}>
        <Bold size={16} />
      </Toggle>
    )
  },
}

export const Pressed: Story = {
  render: function Pressed() {
    const { t } = useTranslation()
    return (
      <Toggle aria-label={t('toggle.bold')} defaultPressed>
        <Bold size={16} />
      </Toggle>
    )
  },
}

export const Disabled: Story = {
  render: function Disabled() {
    const { t } = useTranslation()
    return (
      <Toggle aria-label={t('toggle.bold')} disabled>
        <Bold size={16} />
      </Toggle>
    )
  },
}

export const Sizes: Story = {
  render: function Sizes() {
    const { t } = useTranslation()
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Toggle size='sm' aria-label={t('toggle.starSmall')}>
          <Star size={12} />
        </Toggle>
        <Toggle size='md' aria-label={t('toggle.starMedium')}>
          <Star size={16} />
        </Toggle>
        <Toggle size='lg' aria-label={t('toggle.starLarge')}>
          <Star size={20} />
        </Toggle>
      </div>
    )
  },
}

export const TextFormatting: Story = {
  render: function TextFormatting() {
    const { t } = useTranslation()
    return (
      <div style={{ display: 'flex', gap: 4 }}>
        <Toggle aria-label={t('toggle.bold')} defaultPressed>
          <Bold size={16} />
        </Toggle>
        <Toggle aria-label={t('toggle.italic')}>
          <Italic size={16} />
        </Toggle>
        <Toggle aria-label={t('toggle.alignLeft')}>
          <AlignLeft size={16} />
        </Toggle>
        <Toggle aria-label={t('toggle.alignCenter')} defaultPressed>
          <AlignCenter size={16} />
        </Toggle>
        <Toggle aria-label={t('toggle.alignRight')}>
          <AlignRight size={16} />
        </Toggle>
      </div>
    )
  },
}

export const Variants: Story = {
  render: function Variants() {
    const { t } = useTranslation()
    return (
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
              style={{
                width: 48,
                fontSize: 12,
                color: 'var(--color-fg-muted)',
              }}
            >
              {t(`toggle.${variant}`)}
            </span>
            <Toggle aria-label={t('toggle.bold')} variant={variant}>
              <Bold size={16} />
            </Toggle>
            <Toggle
              aria-label={t('toggle.bold')}
              variant={variant}
              defaultPressed
            >
              <Bold size={16} />
            </Toggle>
          </div>
        ))}
      </div>
    )
  },
}

export const Custom: Story = {
  render: function Custom() {
    const { t } = useTranslation()
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Toggle
          variant='custom'
          aria-label={t('toggle.bookmark')}
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
          aria-label={t('toggle.bellNotifications')}
          render={(props, state) => (
            <button type='button' {...props}>
              {state.pressed ? <BellOff size={16} /> : <Bell size={16} />}
            </button>
          )}
        />
        <Toggle
          variant='custom'
          aria-label={t('toggle.favorite')}
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
    )
  },
}
