import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useT } from '../../.storybook/locale'
import { useDebounce } from './useDebounce'

export default {
  title: 'Hooks/useDebounce',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '```ts',
          'function useDebounce<T>(value: T, delay: number): T',
          '```',
          '',
          '| Name | Type | Description |',
          '|---|---|---|',
          '| `value` | `T` | The value to debounce. |',
          '| `delay` | `number` | Milliseconds to wait after the last change before updating. |',
          '| **Returns** | `T` | The debounced value — stays stale until `delay` ms of inactivity. |',
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
  name: 'useDebounce',
  render: function Default() {
    const t = useT()
    const [input, setInput] = useState('')
    const debounced = useDebounce(input, 500)
    return (
      <div style={demoStyle}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t({ en: 'Type something…', he: 'הקלד משהו…' })}
          style={{
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
          }}
        />
        <span style={labelStyle}>
          {t({ en: 'Raw value:', he: 'ערך גולמי:' })}{' '}
          <span style={valueStyle}>{input || '—'}</span>
        </span>
        <span style={labelStyle}>
          {t({ en: 'Debounced (500 ms):', he: 'מדורבן (500 מ"ש):' })}{' '}
          <span style={valueStyle}>{debounced || '—'}</span>
        </span>
      </div>
    )
  },
}
