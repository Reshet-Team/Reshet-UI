import type { Meta, StoryObj } from '@storybook/react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    return (
      <div
        style={{
          width: 280,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <span
          style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}
        >
          {t({ en: 'Above', he: 'מעל' })}
        </span>
        <Separator />
        <span
          style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}
        >
          {t({ en: 'Below', he: 'מתחת' })}
        </span>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: function Vertical() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          height: 24,
        }}
      >
        <span
          style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}
        >
          {t({ en: 'Home', he: 'בית' })}
        </span>
        <Separator orientation='vertical' />
        <span
          style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}
        >
          {t({ en: 'Pricing', he: 'תמחור' })}
        </span>
        <Separator orientation='vertical' />
        <span
          style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-fg)' }}
        >
          {t({ en: 'Blog', he: 'בלוג' })}
        </span>
      </div>
    )
  },
}
