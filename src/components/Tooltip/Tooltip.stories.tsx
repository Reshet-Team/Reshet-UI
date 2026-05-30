import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
import {
  AnimatedTooltipProvider,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './Tooltip'

export default {
  title: 'Overlays/Tooltip',
  component: TooltipRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TooltipRoot>

type Story = StoryObj<typeof TooltipRoot>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <TooltipRoot>
        <TooltipTrigger
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-bg)',
            cursor: 'pointer',
          }}
          aria-label={t({ en: 'Settings', he: 'הגדרות' })}
        >
          ⚙
        </TooltipTrigger>
        <TooltipContent>{t({ en: 'Settings', he: 'הגדרות' })}</TooltipContent>
      </TooltipRoot>
    )
  },
}

export const Placement: Story = {
  render: function Placement() {
    const t = useT()
    return (
      <TooltipProvider>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            padding: 40,
            justifyContent: 'center',
          }}
        >
          {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
            <TooltipRoot key={side}>
              <TooltipTrigger
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 32,
                  padding: '0 var(--space-3)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-bg)',
                  cursor: 'pointer',
                  fontSize: 'var(--font-size-sm)',
                }}
                aria-label={side}
              >
                {side}
              </TooltipTrigger>
              <TooltipContent side={side}>
                {t({ en: `Appears on ${side}`, he: `מופיע ב-${side}` })}
              </TooltipContent>
            </TooltipRoot>
          ))}
        </div>
      </TooltipProvider>
    )
  },
}

export const NoArrow: Story = {
  render: function NoArrow() {
    const t = useT()
    return (
      <TooltipRoot>
        <TooltipTrigger
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 32,
            padding: '0 var(--space-3)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-bg)',
            cursor: 'pointer',
            fontSize: 'var(--font-size-sm)',
          }}
          aria-label={t({ en: 'Delete item', he: 'מחק פריט' })}
        >
          {t({ en: 'Delete', he: 'מחק' })}
        </TooltipTrigger>
        <TooltipContent arrow={false}>
          {t({
            en: 'This action cannot be undone',
            he: 'לא ניתן לבטל פעולה זו',
          })}
        </TooltipContent>
      </TooltipRoot>
    )
  },
}

export const MultipleTooltips: Story = {
  render: function MultipleTooltips() {
    const t = useT()
    const labels = [
      t({ en: 'Bold', he: 'מודגש' }),
      t({ en: 'Italic', he: 'נטוי' }),
      t({ en: 'Underline', he: 'קו תחתון' }),
    ]
    return (
      <TooltipProvider>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          {labels.map((label) => (
            <TooltipRoot key={label}>
              <TooltipTrigger
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-bg)',
                  cursor: 'pointer',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 700,
                }}
                aria-label={label}
              >
                {label[0]}
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </TooltipRoot>
          ))}
        </div>
      </TooltipProvider>
    )
  },
}

export const AnimatedContent: Story = {
  render: function AnimatedContent() {
    const t = useT()
    const toolbarItems = [
      {
        label: t({ en: 'Listen to audio preview', he: 'האזן לתצוגה מקדימה' }),
        icon: '🎧',
      },
      {
        label: t({ en: 'Set a timer', he: 'קבע טיימר' }),
        icon: '⏱',
      },
      {
        label: t({ en: 'Delete: cannot be undone', he: 'מחק: לא ניתן לבטל' }),
        icon: '🗑',
      },
    ]
    const triggerStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-bg)',
      cursor: 'pointer',
      fontSize: 16,
    }
    return (
      <AnimatedTooltipProvider>
        <div
          style={{ display: 'flex', gap: 'var(--space-1)', paddingBlock: 48 }}
        >
          {toolbarItems.map((item) => (
            <TooltipTrigger
              key={item.label}
              style={triggerStyle}
              payload={item.label}
              aria-label={item.label}
            >
              {item.icon}
            </TooltipTrigger>
          ))}
        </div>
      </AnimatedTooltipProvider>
    )
  },
}
