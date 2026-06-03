import type { Meta, StoryObj } from '@storybook/react'
import { CommandCopy } from './CommandCopy'

export default {
  title: 'Display/CommandCopy',
  component: CommandCopy,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    command: {
      control: 'text',
      description: 'Single command string (no tab switcher)',
    },
    commands: {
      control: 'object',
      description: 'Per-PM commands — renders a tab switcher when provided',
    },
  },
} satisfies Meta<typeof CommandCopy>

type Story = StoryObj<typeof CommandCopy>

export const Default: Story = {
  args: {
    command: 'pnpm dlx shadcn@latest add avatar',
  },
}

export const MultiplePackageManagers: Story = {
  args: {
    commands: {
      pnpm: 'pnpm dlx shadcn@latest add avatar',
      npm: 'npx shadcn@latest add avatar',
      yarn: 'yarn dlx shadcn@latest add avatar',
      bun: 'bunx --bun shadcn@latest add avatar',
    },
  },
}

export const PartialManagers: Story = {
  args: {
    commands: {
      pnpm: 'pnpm dlx shadcn@latest add button',
      npm: 'npx shadcn@latest add button',
    },
  },
}

export const LongCommand: Story = {
  args: {
    command:
      'pnpm dlx shadcn@latest add button card dialog dropdown-menu form input label',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 380 }}>
        <Story />
      </div>
    ),
  ],
}

export const PlainCommand: Story = {
  args: {
    command: 'git clone https://github.com/your-org/your-repo.git',
  },
}
