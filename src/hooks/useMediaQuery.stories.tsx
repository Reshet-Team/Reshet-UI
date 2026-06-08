import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from './useMediaQuery'

export default {
  title: 'Hooks/useMediaQuery',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '```ts',
          'function useMediaQuery(query: string): boolean',
          '```',
          '',
          '| Name | Type | Description |',
          '|---|---|---|',
          '| `query` | `string` | A CSS media query string, e.g. `"(max-width: 640px)"`. |',
          '| **Returns** | `boolean` | `true` when the query matches; `false` otherwise. Returns `false` on the server (SSR-safe). |',
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
  name: 'useMediaQuery',
  render: function Default() {
    const { t } = useTranslation()
    const isMobile = useMediaQuery('(max-width: 640px)')
    const prefersReducedMotion = useMediaQuery(
      '(prefers-reduced-motion: reduce)',
    )
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
    return (
      <div style={demoStyle}>
        {(
          [
            ['(max-width: 640px)', isMobile],
            ['(prefers-reduced-motion: reduce)', prefersReducedMotion],
            ['(prefers-color-scheme: dark)', prefersDark],
          ] as const
        ).map(([query, matches]) => (
          <span key={query} style={labelStyle}>
            <code>{query}</code>
            {' → '}
            <span
              style={{
                ...valueStyle,
                color: matches
                  ? 'var(--color-success, green)'
                  : 'var(--color-fg-subtle)',
              }}
            >
              {matches ? t('hooks.true') : t('hooks.false')}
            </span>
          </span>
        ))}
      </div>
    )
  },
}
