import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../.storybook/locale'
import { useCopyToClipboard } from './useCopyToClipboard'

export default {
  title: 'Hooks/useCopyToClipboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '```ts',
          'function useCopyToClipboard(',
          '  resetDelay?: number,  // default: 2000',
          '): [CopyState, (text: string) => Promise<void>]',
          '',
          'interface CopyState {',
          '  copied: boolean',
          '  error: Error | null',
          '}',
          '```',
          '',
          '| Name | Type | Description |',
          '|---|---|---|',
          '| `resetDelay` | `number` | Milliseconds before `copied` resets to `false`. Defaults to `2000`. |',
          '| **Returns `[0]`** | `CopyState` | `copied` is `true` for `resetDelay` ms after a successful copy; `error` holds any failure. |',
          '| **Returns `[1]`** | `(text: string) => Promise<void>` | Writes `text` to the clipboard via the Clipboard API. |',
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

export const Default: Story = {
  name: 'useCopyToClipboard',
  render: function Default() {
    const t = useT()
    const [{ copied, error }, copy] = useCopyToClipboard(2000)
    const text = 'pnpm add @reshet-ui/hooks'
    return (
      <div style={demoStyle}>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-2)',
            alignItems: 'center',
          }}
        >
          <code
            style={{
              padding: 'var(--space-2) var(--space-3)',
              background: 'var(--color-bg-subtle)',
              borderRadius: 'var(--radius-md)',
              flex: 1,
            }}
          >
            {text}
          </code>
          <button
            onClick={() => copy(text)}
            style={{
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {copied
              ? t({ en: 'Copied!', he: 'הועתק!' })
              : t({ en: 'Copy', he: 'העתק' })}
          </button>
        </div>
        {error && (
          <span style={{ color: 'var(--color-danger)' }}>{error.message}</span>
        )}
      </div>
    )
  },
}
