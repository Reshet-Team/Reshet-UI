import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useT } from '../../.storybook/locale'
import { useControllableState } from './useControllableState'

export default {
  title: 'Hooks/useControllableState',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '```ts',
          'function useControllableState<T>(params: {',
          '  value?: T',
          '  defaultValue?: T',
          '  onChange?: (value: T) => void',
          '}): [T | undefined, (next: T) => void]',
          '```',
          '',
          '| Name | Type | Description |',
          '|---|---|---|',
          '| `value` | `T` | When provided, puts the hook in **controlled** mode — internal state is ignored. |',
          '| `defaultValue` | `T` | Initial value for **uncontrolled** mode. Ignored once `value` is supplied. |',
          '| `onChange` | `(value: T) => void` | Called on every update regardless of mode. |',
          '| **Returns `[0]`** | `T \\| undefined` | The current value — `value` in controlled mode, internal state otherwise. |',
          '| **Returns `[1]`** | `(next: T) => void` | Setter — updates internal state (uncontrolled) and always calls `onChange`. |',
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
const btnStyle: React.CSSProperties = {
  padding: 'var(--space-2) var(--space-3)',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-border)',
  cursor: 'pointer',
}

export const Uncontrolled: Story = {
  render: function Uncontrolled() {
    const t = useT()
    const [value, setValue] = useControllableState({ defaultValue: 0 })
    return (
      <div style={demoStyle}>
        <span style={labelStyle}>
          {t({ en: 'Value (uncontrolled):', he: 'ערך (לא מבוקר):' })}{' '}
          <span style={valueStyle}>{value}</span>
        </span>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button onClick={() => setValue((value ?? 0) - 1)} style={btnStyle}>
            −
          </button>
          <button onClick={() => setValue((value ?? 0) + 1)} style={btnStyle}>
            +
          </button>
        </div>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: function Controlled() {
    const t = useT()
    const [external, setExternal] = useState(10)
    const [value, setValue] = useControllableState({
      value: external,
      onChange: setExternal,
    })
    return (
      <div style={demoStyle}>
        <span style={labelStyle}>
          {t({ en: 'Value (controlled):', he: 'ערך (מבוקר):' })}{' '}
          <span style={valueStyle}>{value}</span>
        </span>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button onClick={() => setValue((value ?? 0) - 1)} style={btnStyle}>
            −
          </button>
          <button onClick={() => setValue((value ?? 0) + 1)} style={btnStyle}>
            +
          </button>
        </div>
        <span style={labelStyle}>
          {t({ en: 'External state:', he: 'מצב חיצוני:' })}{' '}
          <span style={valueStyle}>{external}</span>
        </span>
      </div>
    )
  },
}
