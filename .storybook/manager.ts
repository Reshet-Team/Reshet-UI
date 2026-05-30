import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";
import { SET_GLOBALS, GLOBALS_UPDATED } from "storybook/internal/core-events";

addons.setConfig({ theme: themes.light });

function applyTheme(globals: Record<string, string>) {
  addons.setConfig({
    theme: globals["theme"] === "dark" ? themes.dark : themes.light,
  });
}

addons.ready().then((channel) => {
  channel.on(SET_GLOBALS, ({ globals }: { globals: Record<string, string> }) =>
    applyTheme(globals),
  );
  channel.on(
    GLOBALS_UPDATED,
    ({ globals }: { globals: Record<string, string> }) => applyTheme(globals),
  );
});
