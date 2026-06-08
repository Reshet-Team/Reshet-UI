import type { Meta, StoryObj } from '@storybook/react'
import { useTranslation } from 'react-i18next'
import { Separator } from './Separator'

export default {
  title: 'Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Separator>

type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: function Horizontal() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          width: 280,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}>
          {t('separator.above')}
        </span>
        <Separator />
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}>
          {t('separator.below')}
        </span>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: function Vertical() {
    const { t } = useTranslation()
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          height: 24,
        }}
      >
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}>
          {t('separator.home')}
        </span>
        <Separator orientation='vertical' />
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}>
          {t('separator.pricing')}
        </span>
        <Separator orientation='vertical' />
        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}>
          {t('separator.blog')}
        </span>
      </div>
    )
  },
}
