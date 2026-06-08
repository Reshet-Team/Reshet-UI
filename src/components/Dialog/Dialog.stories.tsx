import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
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
  render: function Default() {
    const { t } = useTranslation()
    return (
      <DialogRoot>
        <DialogTrigger>{t('dialog.openDialog')}</DialogTrigger>
        <DialogContent>
          <div>
            <DialogTitle>{t('dialog.notifications')}</DialogTitle>
            <DialogDescription>{t('dialog.allCaughtUp')}</DialogDescription>
          </div>
          <DialogActions>
            <DialogClose>{t('common.close')}</DialogClose>
          </DialogActions>
        </DialogContent>
      </DialogRoot>
    )
  },
}

export const WithActions: Story = {
  render: function WithActions() {
    const { t } = useTranslation()
    return (
      <DialogRoot>
        <DialogTrigger>{t('dialog.deleteAccount')}</DialogTrigger>
        <DialogContent>
          <div>
            <DialogTitle>{t('dialog.deleteAccountQ')}</DialogTitle>
            <DialogDescription>
              {t('dialog.deleteAccountDesc')}
            </DialogDescription>
          </div>
          <DialogActions>
            <DialogClose>{t('common.cancel')}</DialogClose>
            <DialogClose variant='danger'>{t('common.delete')}</DialogClose>
          </DialogActions>
        </DialogContent>
      </DialogRoot>
    )
  },
}

export const Controlled: Story = {
  render: function ControlledDialog() {
    const { t } = useTranslation()
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
        <Button onClick={() => setOpen(true)}>
          {t('dialog.openProgrammatically')}
        </Button>
        <DialogRoot open={open} onOpenChange={setOpen}>
          <DialogContent>
            <div>
              <DialogTitle>{t('dialog.controlledDialog')}</DialogTitle>
              <DialogDescription>
                {t('dialog.controlledDialogDesc')}
              </DialogDescription>
            </div>
            <DialogActions>
              <DialogClose>{t('common.close')}</DialogClose>
            </DialogActions>
          </DialogContent>
        </DialogRoot>
      </div>
    )
  },
}

export const Nested: Story = {
  render: function Nested() {
    const { t } = useTranslation()
    return (
      <DialogRoot>
        <DialogTrigger>{t('dialog.openDialog')}</DialogTrigger>
        <DialogContent>
          <div>
            <DialogTitle>{t('dialog.notifications')}</DialogTitle>
            <DialogDescription>{t('dialog.allCaughtUp')}</DialogDescription>
          </div>
          <DialogActions>
            <DialogClose>{t('common.close')}</DialogClose>
            <DialogRoot>
              <DialogTrigger>{t('dialog.customize')}</DialogTrigger>
              <DialogContent>
                <div>
                  <DialogTitle>
                    {t('dialog.customizeNotifications')}
                  </DialogTitle>
                  <DialogDescription>
                    {t('dialog.reviewSettings')}
                  </DialogDescription>
                </div>
                <DialogActions>
                  <DialogClose>{t('common.close')}</DialogClose>
                </DialogActions>
              </DialogContent>
            </DialogRoot>
          </DialogActions>
        </DialogContent>
      </DialogRoot>
    )
  },
}

export const Scrollable: Story = {
  render: function Scrollable() {
    const { t } = useTranslation()
    const sections = [
      t('dialog.tos1'),
      t('dialog.tos2'),
      t('dialog.tos3'),
      t('dialog.tos4'),
      t('dialog.tos5'),
      t('dialog.tos6'),
      t('dialog.tos7'),
      t('dialog.tos8'),
    ]
    return (
      <DialogRoot>
        <DialogTrigger>{t('dialog.viewTerms')}</DialogTrigger>
        <DialogContent showCloseButton>
          <div>
            <DialogTitle>{t('dialog.termsOfService')}</DialogTitle>
            <DialogDescription>
              {t('dialog.termsLastUpdated')}
            </DialogDescription>
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
              {sections.map((text, i) => (
                <p
                  key={i}
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-sm)',
                    lineHeight: 1.6,
                  }}
                >
                  <strong>{t('dialog.section', { number: i + 1 })}</strong>{' '}
                  {text}
                </p>
              ))}
            </div>
          </div>
          <DialogActions>
            <DialogClose>{t('common.decline')}</DialogClose>
            <DialogClose variant='primary'>{t('common.accept')}</DialogClose>
          </DialogActions>
        </DialogContent>
      </DialogRoot>
    )
  },
}

interface EditFormProps {
  initialName: string
  initialEmail: string
  onSave: (name: string, email: string) => void
}

function EditForm({ initialName, initialEmail, onSave }: EditFormProps) {
  const { t } = useTranslation()
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
            {t('dialog.nameLabel')}
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
            {t('dialog.emailLabel')}
          </span>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <DialogActions>
        <DialogClose>{t('common.cancel')}</DialogClose>
        <DialogClose variant='primary' onClick={() => onSave(name, email)}>
          {t('common.saveChanges')}
        </DialogClose>
      </DialogActions>
    </>
  )
}

export const EditDialog: Story = {
  render: function EditDialogStory() {
    const { t } = useTranslation()
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
          <DialogTrigger>{t('dialog.editProfile')}</DialogTrigger>
          <DialogContent style={{ width: '26rem' }}>
            <div>
              <DialogTitle>{t('dialog.editProfile')}</DialogTitle>
              <DialogDescription>
                {t('dialog.editProfileDesc')}
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
