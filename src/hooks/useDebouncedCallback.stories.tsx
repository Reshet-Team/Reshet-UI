import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebouncedCallback } from './useDebouncedCallback'

export default {
  title: 'Hooks/useDebouncedCallback',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '```ts',
          'function useDebouncedCallback<T extends (...args: never[]) => unknown>(',
          '  callback: T,',
          '  delay: number,',
          '): (...args: Parameters<T>) => void',
          '```',
          '',
          '| Name | Type | Description |',
          '|---|---|---|',
          '| `callback` | `T` | The function to debounce. Always calls the latest version — no stale closure. |',
          '| `delay` | `number` | Milliseconds to wait after the last call before invoking `callback`. |',
          '| **Returns** | `(...args: Parameters<T>) => void` | A stable debounced wrapper. Identity is preserved across renders unless `delay` changes. |',
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
  name: 'useDebouncedCallback',
  render: function Default() {
    const { t } = useTranslation()
    const [fired, setFired] = useState(0)
    const [pressed, setPressed] = useState(0)
    const debouncedFire = useDebouncedCallback(
      () => setFired((n) => n + 1),
      600,
    )
    return (
      <div style={demoStyle}>
        <button
          onClick={() => {
            setPressed((n) => n + 1)
            debouncedFire()
          }}
          style={{
            padding: 'var(--space-2) var(--space-4)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            cursor: 'pointer',
          }}
        >
          {t('hooks.clickRapidly')}
        </button>
        <span style={labelStyle}>
          {t('hooks.buttonPresses')} <span style={valueStyle}>{pressed}</span>
        </span>
        <span style={labelStyle}>
          {t('hooks.callbackFired')} <span style={valueStyle}>{fired}</span>
        </span>
      </div>
    )
  },
}
