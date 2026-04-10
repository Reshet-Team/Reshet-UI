import React from 'react'
import type { GlobalProvider } from '@ladle/react'
import '../src/theme/globals.scss'

type Dir = 'ltr' | 'rtl'

const DIR_KEY = 'myui-dir'

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const [dir, setDir] = React.useState<Dir>(
    () => (localStorage.getItem(DIR_KEY) as Dir | null) ?? 'ltr',
  )

  // Map Ladle's built-in theme toggle to our data-theme attribute
  const theme = globalState.theme === 'dark' ? 'dark' : 'light'

  const toggleDir = () => {
    setDir(prev => {
      const next: Dir = prev === 'ltr' ? 'rtl' : 'ltr'
      localStorage.setItem(DIR_KEY, next)
      return next
    })
  }

  return (
    <div
      data-theme={theme}
      dir={dir}
      style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'var(--color-bg)',
        color: 'var(--color-fg)',
      }}
    >
      <button
        onClick={toggleDir}
        title="Toggle text direction"
        style={{
          position: 'fixed',
          bottom: '1rem',
          insetInlineEnd: '5rem', // sits beside Ladle's own controls
          zIndex: 9999,
          padding: '0.25rem 0.625rem',
          fontSize: '0.7rem',
          fontFamily: 'monospace',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid var(--color-border)',
          background: 'var(--color-bg-elevated)',
          color: 'var(--color-fg)',
        }}
      >
        {dir.toUpperCase()}
      </button>
      {children}
    </div>
  )
}
