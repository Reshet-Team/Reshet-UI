import type { Meta, StoryObj } from '@storybook/react'
import { Flame } from 'lucide-react'
import { AlertDescription, AlertRoot, AlertTitle } from './Alert'

export default {
  title: 'Feedback/Alert',
  component: AlertRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof AlertRoot>

type Story = StoryObj<typeof AlertRoot>

export const Info: Story = {
  render: () => (
    <AlertRoot variant='info'>
      <AlertTitle>New features available</AlertTitle>
      <AlertDescription>
        A new version with improved performance and bug fixes is ready to
        install.
      </AlertDescription>
    </AlertRoot>
  ),
}

export const Warning: Story = {
  render: () => (
    <AlertRoot variant='warning'>
      <AlertTitle>Storage almost full</AlertTitle>
      <AlertDescription>
        You have used 90% of your storage quota. Consider removing unused files.
      </AlertDescription>
    </AlertRoot>
  ),
}

export const Danger: Story = {
  render: () => (
    <AlertRoot variant='danger'>
      <AlertTitle>Something went wrong</AlertTitle>
      <AlertDescription>
        Your session has expired. Please save your work and log in again.
      </AlertDescription>
    </AlertRoot>
  ),
}

export const Success: Story = {
  render: () => (
    <AlertRoot variant='success'>
      <AlertTitle>Changes saved</AlertTitle>
      <AlertDescription>
        Your profile has been updated successfully.
      </AlertDescription>
    </AlertRoot>
  ),
}

export const Neutral: Story = {
  render: () => (
    <AlertRoot variant='neutral'>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </AlertRoot>
  ),
}

export const CustomIcon: Story = {
  render: () => (
    <AlertRoot variant='warning' icon={<Flame size={16} aria-hidden />}>
      <AlertTitle>High CPU usage</AlertTitle>
      <AlertDescription>
        Your server is running at 94% CPU. Consider scaling up.
      </AlertDescription>
    </AlertRoot>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <AlertRoot variant='info'>
      <AlertTitle>Your account is pending verification.</AlertTitle>
    </AlertRoot>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        maxWidth: '28rem',
      }}
    >
      <AlertRoot variant='info'>
        <AlertTitle>Informational</AlertTitle>
        <AlertDescription>
          This is an info alert with additional context.
        </AlertDescription>
      </AlertRoot>
      <AlertRoot variant='warning'>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Proceed with caution — this action may have consequences.
        </AlertDescription>
      </AlertRoot>
      <AlertRoot variant='danger'>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong and the operation could not complete.
        </AlertDescription>
      </AlertRoot>
      <AlertRoot variant='success'>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          The operation completed successfully.
        </AlertDescription>
      </AlertRoot>
      <AlertRoot variant='neutral'>
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          Here is some general information you might find helpful.
        </AlertDescription>
      </AlertRoot>
    </div>
  ),
}
