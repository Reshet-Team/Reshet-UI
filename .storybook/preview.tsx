/* eslint-disable react-refresh/only-export-components */
import React from "react";
import type { Preview, Decorator } from "@storybook/react";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import type { DocsContainerProps } from "@storybook/addon-docs/blocks";
import { themes } from "storybook/theming";
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events";
import "@/theme/globals.scss";

function StoryWrapper({
  Story,
  theme,
  dir,
}: {
  Story: React.ComponentType;
  theme: string;
  dir: "ltr" | "rtl";
}) {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      data-theme={theme}
      dir={dir}
      lang={dir === "rtl" ? "he" : "en"}
      style={{
        padding: "2rem",
        background: "var(--color-bg)",
        color: "var(--color-fg)",
      }}
    >
      <Story />
    </div>
  );
}

function ThemedDocsContainer({
  children,
  context,
}: React.PropsWithChildren<DocsContainerProps>) {
  const getInitialTheme = () => {
    try {
      const story = context.storyById();
      return context.getStoryContext(story).globals?.["theme"] === "dark";
    } catch {
      return false;
    }
  };

  const [isDark, setIsDark] = React.useState(getInitialTheme);

  React.useEffect(() => {
    const onGlobals = ({ globals }: { globals: Record<string, string> }) => {
      setIsDark(globals["theme"] === "dark");
    };
    context.channel.on(SET_GLOBALS, onGlobals);
    context.channel.on(GLOBALS_UPDATED, onGlobals);
    return () => {
      context.channel.off(SET_GLOBALS, onGlobals);
      context.channel.off(GLOBALS_UPDATED, onGlobals);
    };
  }, [context.channel]);

  return (
    <DocsContainer
      context={context}
      theme={isDark ? themes.dark : themes.light}
    >
      {children}
    </DocsContainer>
  );
}

const withThemeAndDir: Decorator = (Story, context) => {
  const theme = context.globals["theme"] === "dark" ? "dark" : "light";
  const dir = context.globals["locale"] === "he" ? "rtl" : "ltr";
  return <StoryWrapper Story={Story} theme={theme} dir={dir} />;
};

const preview: Preview = {
  decorators: [withThemeAndDir],
  parameters: {
    docs: {
      container: ThemedDocsContainer,
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "light",
      toolbar: {
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      name: "Locale",
      description: "Text direction",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English", right: "LTR" },
          { value: "he", title: "Hebrew", right: "RTL" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
