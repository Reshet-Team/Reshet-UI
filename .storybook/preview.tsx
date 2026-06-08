/* eslint-disable react-refresh/only-export-components */
import '@/theme/globals.scss'
import { DirectionProvider } from '@base-ui/react/direction-provider'
import type { DocsContainerProps } from '@storybook/addon-docs/blocks'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import type { Decorator, Preview } from '@storybook/react'
import React from 'react'
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events'
import { themes } from 'storybook/theming'
import { DocsPage } from './DocsPage'
import './i18n'
import { LocaleProvider, type Locale } from './locale'

function StoryWrapper({
  Story,
  theme,
  locale,
}: {
  Story: React.ComponentType
  theme: string
  locale: Locale
}) {
  const dir = locale === 'he' ? 'rtl' : 'ltr'

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  // Portals append directly to document.body, outside the story wrapper's DOM
  // subtree, so they don't inherit `dir`. Watch for new body children and stamp
  // the current dir on them so portaled popups/modals/tooltips are also RTL.
  React.useEffect(() => {
    if (dir === 'ltr') return
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            node.setAttribute('dir', dir)
          }
        }
      }
    })
    observer.observe(document.body, { childList: true })
    return () => observer.disconnect()
  }, [dir])

  return (
    <DirectionProvider direction={dir}>
      <LocaleProvider locale={locale}>
        <div
          data-theme={theme}
          dir={dir}
          lang={locale}
          style={{
            padding: '2rem',
            background: 'var(--color-bg)',
            color: 'var(--color-fg)',
          }}
        >
          <Story />
        </div>
      </LocaleProvider>
    </DirectionProvider>
  )
}

function ThemedDocsContainer({
  children,
  context,
}: React.PropsWithChildren<DocsContainerProps>) {
  const getInitialTheme = () => {
    const params = new URLSearchParams(window.location.search)
    const globals = params.get('globals') ?? ''
    if (globals.includes('theme:dark')) return true
    if (globals.includes('theme:light')) return false
    try {
      const story = context.storyById()
      return context.getStoryContext(story).globals?.['theme'] === 'dark'
    } catch {
      return false
    }
  }

  const [isDark, setIsDark] = React.useState(getInitialTheme)

  React.useEffect(() => {
    const onGlobals = ({ globals }: { globals: Record<string, string> }) => {
      setIsDark(globals['theme'] === 'dark')
    }
    context.channel.on(SET_GLOBALS, onGlobals)
    context.channel.on(GLOBALS_UPDATED, onGlobals)
    return () => {
      context.channel.off(SET_GLOBALS, onGlobals)
      context.channel.off(GLOBALS_UPDATED, onGlobals)
    }
  }, [context.channel])

  React.useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    document.body.setAttribute('data-theme', theme)
  }, [isDark])

  return (
    <DocsContainer
      context={context}
      theme={isDark ? themes.dark : themes.light}
    >
      {children}
    </DocsContainer>
  )
}

const withThemeAndDir: Decorator = (Story, context) => {
  const theme = context.globals['theme'] === 'dark' ? 'dark' : 'light'
  const locale: Locale = context.globals['locale'] === 'he' ? 'he' : 'en'
  return <StoryWrapper Story={Story} theme={theme} locale={locale} />
}

const preview: Preview = {
  decorators: [withThemeAndDir],
  parameters: {
    docs: {
      container: ThemedDocsContainer,
      page: DocsPage,
      source: {
        transform: (code: string) => {
          // Strip the render-function wrapper — show only the returned JSX
          const returnIdx = code.search(/\breturn\s*\(/)
          if (returnIdx === -1) return code

          const parenStart = code.indexOf('(', returnIdx)
          let depth = 1
          let i = parenStart + 1
          while (i < code.length && depth > 0) {
            if (code[i] === '(') depth++
            else if (code[i] === ')') depth--
            i++
          }

          const jsx = code.slice(parenStart + 1, i - 1).trim()
          if (!jsx) return code

          const lines = jsx.split('\n')
          if (lines.length <= 1) return jsx

          const minIndent = lines
            .filter((l) => l.trim().length > 0)
            .reduce(
              (min, l) => Math.min(min, l.match(/^(\s*)/)?.[1].length ?? 0),
              Infinity,
            )

          return lines
            .map((l) => l.slice(minIndent))
            .join('\n')
            .trim()
        },
      },
    },
  },
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
