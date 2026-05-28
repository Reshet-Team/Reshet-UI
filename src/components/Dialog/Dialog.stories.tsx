import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import {
  DialogActions,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

export default {
  title: 'Overlays/Dialog',
  component: DialogRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogRoot>

type Story = StoryObj<typeof DialogRoot>

export const Default: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>
        <div>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>
            You are all caught up. Good job!
          </DialogDescription>
        </div>
        <DialogActions>
          <DialogClose>Close</DialogClose>
        </DialogActions>
      </DialogContent>
    </DialogRoot>
  ),
}

export const WithActions: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger>Delete account</DialogTrigger>
      <DialogContent>
        <div>
          <DialogTitle>Delete account?</DialogTitle>
          <DialogDescription>
            This action is permanent and cannot be undone. All your data will be
            removed immediately.
          </DialogDescription>
        </div>
        <DialogActions>
          <DialogClose>Cancel</DialogClose>
          <DialogClose variant='danger'>Delete</DialogClose>
        </DialogActions>
      </DialogContent>
    </DialogRoot>
  ),
}

export const Controlled: Story = {
  render: function ControlledDialog() {
    const [open, setOpen] = React.useState(false)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          alignItems: 'center',
        }}
      >
        <Button onClick={() => setOpen(true)}>Open programmatically</Button>
        <DialogRoot open={open} onOpenChange={setOpen}>
          <DialogContent>
            <div>
              <DialogTitle>Controlled dialog</DialogTitle>
              <DialogDescription>
                This dialog's state is managed externally.
              </DialogDescription>
            </div>
            <DialogActions>
              <DialogClose>Close</DialogClose>
            </DialogActions>
          </DialogContent>
        </DialogRoot>
      </div>
    )
  },
}

export const Nested: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>
        <div>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>
            You are all caught up. Good job!
          </DialogDescription>
        </div>
        <DialogActions>
          <DialogClose>Close</DialogClose>
          <DialogRoot>
            <DialogTrigger>Customize</DialogTrigger>
            <DialogContent>
              <div>
                <DialogTitle>Customize notifications</DialogTitle>
                <DialogDescription>
                  Review your settings here.
                </DialogDescription>
              </div>
              <DialogActions>
                <DialogClose>Close</DialogClose>
              </DialogActions>
            </DialogContent>
          </DialogRoot>
        </DialogActions>
      </DialogContent>
    </DialogRoot>
  ),
}

export const Scrollable: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger>View terms</DialogTrigger>
      <DialogContent showCloseButton>
        <div>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>Last updated January 15, 2025.</DialogDescription>
        </div>
        <div
          style={{
            overflowY: 'auto',
            flex: 1,
            minBlockSize: 0,
            maxHeight: '40vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
            }}
          >
            {(
              [
                'By accessing and using this service, you accept and agree to be bound by the terms and conditions set forth below.',
                'We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of any changes.',
                'You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the service without express written permission.',
                'The service is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.',
                'In no event shall we be liable for any indirect, incidental, special, or consequential damages arising out of your use of the service.',
                'You agree to indemnify and hold harmless the company from any claim, demand, or damages arising from your use of the service.',
                'These terms shall be governed by and construed in accordance with applicable law, without regard to conflict of law provisions.',
                'If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
              ] as const
            ).map((text, i) => (
              <p
                key={i}
                style={{
                  margin: 0,
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: 1.6,
                }}
              >
                <strong>Section {i + 1}.</strong> {text}
              </p>
            ))}
          </div>
        </div>
        <DialogActions>
          <DialogClose>Decline</DialogClose>
          <DialogClose variant='primary'>Accept</DialogClose>
        </DialogActions>
      </DialogContent>
    </DialogRoot>
  ),
}

interface EditFormProps {
  initialName: string
  initialEmail: string
  onSave: (name: string, email: string) => void
}

function EditForm({ initialName, initialEmail, onSave }: EditFormProps) {
  const [name, setName] = React.useState(initialName)
  const [email, setEmail] = React.useState(initialEmail)

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-1)',
          }}
        >
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>
            Name
          </span>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-1)',
          }}
        >
          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>
            Email
          </span>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <DialogActions>
        <DialogClose>Cancel</DialogClose>
        <DialogClose variant='primary' onClick={() => onSave(name, email)}>
          Save changes
        </DialogClose>
      </DialogActions>
    </>
  )
}

export const EditDialog: Story = {
  render: function EditDialogStory() {
    const [profile, setProfile] = React.useState({
      name: 'Jane Doe',
      email: 'jane@example.com',
    })

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-muted-fg)',
          }}
        >
          {profile.name} · {profile.email}
        </p>
        <DialogRoot>
          <DialogTrigger>Edit profile</DialogTrigger>
          <DialogContent style={{ width: '26rem' }}>
            <div>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Update your display name and email address.
              </DialogDescription>
            </div>
            <EditForm
              initialName={profile.name}
              initialEmail={profile.email}
              onSave={(name, email) => setProfile({ name, email })}
            />
          </DialogContent>
        </DialogRoot>
      </div>
    )
  },
}
