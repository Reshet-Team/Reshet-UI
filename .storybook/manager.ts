import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events'
import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'

addons.setConfig({ theme: themes.light })

function applyTheme(globals: Record<string, string>) {
  addons.setConfig({
    theme: globals['theme'] === 'dark' ? themes.dark : themes.light,
  })
}

addons.ready().then((channel) => {
  channel.on(SET_GLOBALS, ({ globals }: { globals: Record<string, string> }) => applyTheme(globals))
  channel.on(GLOBALS_UPDATED, ({ globals }: { globals: Record<string, string> }) =>
    applyTheme(globals),
  )
})
