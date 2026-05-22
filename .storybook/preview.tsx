/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import type { Preview, Decorator } from '@storybook/react'
import '@/theme/globals.scss'

function StoryWrapper({
  Story,
  theme,
  dir,
}: {
  Story: React.ComponentType
  theme: string
  dir: 'ltr' | 'rtl'
}) {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div
      data-theme={theme}
      dir={dir}
      lang={dir === 'rtl' ? 'he' : 'en'}
      style={{
        padding: '2rem',
        background: 'var(--color-bg)',
        color: 'var(--color-fg)',
      }}
    >
      <Story />
    </div>
  )
}

const withThemeAndDir: Decorator = (Story, context) => {
  const theme = context.globals['theme'] === 'dark' ? 'dark' : 'light'
  const dir = context.globals['locale'] === 'he' ? 'rtl' : 'ltr'
  return <StoryWrapper Story={Story} theme={theme} dir={dir} />
}

const preview: Preview = {
  decorators: [withThemeAndDir],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      name: 'Locale',
      description: 'Text direction',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English', right: 'LTR' },
          { value: 'he', title: 'Hebrew', right: 'RTL' },
        ],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
