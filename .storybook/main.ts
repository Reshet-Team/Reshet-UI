import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(tsx|jsx|ts|js)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    return {
      ...config,
      base: process.env.STORYBOOK_BASE_URL ?? '/',
    }
  },
}

export default config
