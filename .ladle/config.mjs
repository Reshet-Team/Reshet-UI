/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: 'src/**/*.stories.{tsx,jsx,ts,js}',
  addons: {
    theme: {
      enabled: true,
      defaultState: 'light',
    },
    control: {
      enabled: true,
      defaultState: {},
    },
    width: {
      enabled: true,
      options: {
        xsmall: 320,
        small: 640,
        medium: 768,
        large: 1024,
        xlarge: 1280,
      },
      defaultState: 0,
    },
  },
}
