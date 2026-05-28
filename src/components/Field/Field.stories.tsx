import type { Meta, StoryObj } from '@storybook/react'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
} from './Field'

export default {
  title: 'Components/Field',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <FieldRoot>
        <FieldLabel>Email address</FieldLabel>
        <FieldControl type='email' placeholder='you@example.com' />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </FieldRoot>
    </div>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <FieldRoot>
        <FieldLabel>Username</FieldLabel>
        <FieldControl required placeholder='Required' />
        <FieldDescription>Choose a unique username.</FieldDescription>
        <FieldError match='valueMissing'>Username is required.</FieldError>
      </FieldRoot>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <FieldRoot invalid>
        <FieldLabel>Password</FieldLabel>
        <FieldControl type='password' defaultValue='short' />
        <FieldError match>Must be at least 8 characters.</FieldError>
      </FieldRoot>
    </div>
  ),
}

export const Indicators: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        width: 280,
      }}
    >
      <FieldRoot>
        <FieldLabel indicator='required'>Full name</FieldLabel>
        <FieldControl required placeholder='Jane Smith' />
      </FieldRoot>
      <FieldRoot>
        <FieldLabel indicator='optional'>Nickname</FieldLabel>
        <FieldControl placeholder='e.g. Jay' />
        <FieldDescription>Shown instead of your full name.</FieldDescription>
      </FieldRoot>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <FieldRoot disabled>
        <FieldLabel>Account ID</FieldLabel>
        <FieldControl defaultValue='acc_1234567890' />
        <FieldDescription>Your account ID cannot be changed.</FieldDescription>
      </FieldRoot>
    </div>
  ),
}
