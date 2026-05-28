import type { Meta, StoryObj } from '@storybook/react'
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
} from '../Field/Field'
import { FieldsetLegend, FieldsetRoot } from './Fieldset'

export default {
  title: 'Components/Fieldset',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <FieldsetRoot>
        <FieldsetLegend>Billing details</FieldsetLegend>

        <FieldRoot>
          <FieldLabel>Company</FieldLabel>
          <FieldControl placeholder='Enter company name' />
        </FieldRoot>

        <FieldRoot>
          <FieldLabel>Tax ID</FieldLabel>
          <FieldControl placeholder='Enter fiscal number' />
        </FieldRoot>
      </FieldsetRoot>
    </div>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <FieldsetRoot>
        <FieldsetLegend>Account</FieldsetLegend>

        <FieldRoot>
          <FieldLabel>Full name</FieldLabel>
          <FieldControl placeholder='Jane Smith' />
          <FieldDescription>Shown on your public profile.</FieldDescription>
        </FieldRoot>

        <FieldRoot>
          <FieldLabel>Email</FieldLabel>
          <FieldControl type='email' placeholder='jane@example.com' />
          <FieldDescription>Used for login and notifications.</FieldDescription>
        </FieldRoot>
      </FieldsetRoot>
    </div>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <FieldsetRoot>
        <FieldsetLegend>Create account</FieldsetLegend>

        <FieldRoot>
          <FieldLabel>Username</FieldLabel>
          <FieldControl required placeholder='Required' />
          <FieldError match='valueMissing'>Username is required.</FieldError>
        </FieldRoot>

        <FieldRoot>
          <FieldLabel>Password</FieldLabel>
          <FieldControl required type='password' placeholder='Required' />
          <FieldError match='valueMissing'>Password is required.</FieldError>
        </FieldRoot>
      </FieldsetRoot>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <FieldsetRoot disabled>
        <FieldsetLegend>Shipping address</FieldsetLegend>

        <FieldRoot>
          <FieldLabel>Street</FieldLabel>
          <FieldControl defaultValue='123 Main St' />
        </FieldRoot>

        <FieldRoot>
          <FieldLabel>City</FieldLabel>
          <FieldControl defaultValue='Springfield' />
        </FieldRoot>
      </FieldsetRoot>
    </div>
  ),
}
