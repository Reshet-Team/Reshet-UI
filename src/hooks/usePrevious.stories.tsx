import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useT } from '../../.storybook/locale'
import { usePrevious } from './usePrevious'

export default {
  title: 'Hooks/usePrevious',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '```ts',
          'function usePrevious<T>(value: T): T | undefined',
          '```',
          '',
          '| Name | Type | Description |',
          '|---|---|---|',
          '| `value` | `T` | The value to track across renders. |',
          '| **Returns** | `T \\| undefined` | The value from the previous render, or `undefined` on the first render. |',
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
const valueStyle: React.CSSProperties = { fontWeight: 600, color: 'var(--color-fg)' }

export const Default: Story = {
  name: 'usePrevious',
  render: function Default() {
    const t = useT()
    const [count, setCount] = useState(0)
    const previous = usePrevious(count)
    return (
      <div style={demoStyle}>
        <button
          onClick={() => setCount((n) => n + 1)}
          style={{
            padding: 'var(--space-2) var(--space-4)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            cursor: 'pointer',
          }}
        >
          {t({ en: 'Increment', he: 'הגדל' })}
        </button>
        <span style={labelStyle}>
          {t({ en: 'Current:', he: 'נוכחי:' })}{' '}
          <span style={valueStyle}>{count}</span>
        </span>
        <span style={labelStyle}>
          {t({ en: 'Previous:', he: 'קודם:' })}{' '}
          <span style={valueStyle}>{previous ?? '—'}</span>
        </span>
      </div>
    )
  },
}
