import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useIntersectionObserver } from './useIntersectionObserver'

export default {
  title: 'Hooks/useIntersectionObserver',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '```ts',
          'function useIntersectionObserver(',
          '  target: Element | null,',
          '  options?: IntersectionObserverInit,',
          '): IntersectionObserverEntry | null',
          '```',
          '',
          '| Name | Type | Description |',
          '|---|---|---|',
          '| `target` | `Element \\| null` | The element to observe. Passing `null` is safe — the observer is a no-op until a real element is provided. |',
          '| `options` | `IntersectionObserverInit` | Standard options (`root`, `rootMargin`, `threshold`). Compared by identity — memoize if defined inline. |',
          '| **Returns** | `IntersectionObserverEntry \\| null` | The latest entry, or `null` before the first observation. |',
        ].join('\n'),
      },
    },
  },
} satisfies Meta

type Story = StoryObj

const demoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-3)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--font-size-sm)',
}
const labelStyle: React.CSSProperties = { color: 'var(--color-fg-subtle)' }
const valueStyle: React.CSSProperties = {
  fontWeight: 600,
  color: 'var(--color-fg)',
}

export const Default: Story = {
  name: 'useIntersectionObserver',
  render: function Default() {
    const { t } = useTranslation()
    const [target, setTarget] = useState<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(target, { threshold: 0.5 })
    return (
      <div style={demoStyle}>
        <span style={labelStyle}>
          {t('hooks.intersecting')}{' '}
          <span
            style={{
              ...valueStyle,
              color: entry?.isIntersecting
                ? 'var(--color-success, green)'
                : 'var(--color-danger)',
            }}
          >
            {entry
              ? entry.isIntersecting
                ? t('common.yes')
                : t('common.no')
              : '—'}
          </span>
        </span>
        <div
          style={{
            height: 120,
            overflowY: 'scroll',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-2)',
          }}
        >
          <div
            style={{
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-fg-subtle)',
            }}
          >
            {t('hooks.scrollDown')}
          </div>
          <div
            ref={(el) => setTarget(el)}
            style={{
              height: 60,
              background: 'var(--color-accent)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            {t('hooks.target')}
          </div>
          <div style={{ height: 100 }} />
        </div>
      </div>
    )
  },
}
