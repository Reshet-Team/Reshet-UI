import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import type { AlertDialogAlertOptions } from './AlertDialog'
import {
  AlertDialogActions,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogMessageList,
  AlertDialogProvider,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  useAlertDialog,
} from './AlertDialog'

export default {
  title: 'Overlays/AlertDialog',
  component: AlertDialogRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AlertDialogRoot>

type Story = StoryObj<typeof AlertDialogRoot>

export const Danger: Story = {
  render: function DangerStory() {
    const { t } = useTranslation()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger variant='danger'>
          {t('alertDialog.deleteAccount')}
        </AlertDialogTrigger>
        <AlertDialogContent variant='danger'>
          <AlertDialogTitle>{t('alertDialog.deleteAccountQ')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('alertDialog.deleteAccountDesc')}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>{t('common.cancel')}</AlertDialogClose>
            <AlertDialogClose variant='danger'>
              {t('common.delete')}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Warning: Story = {
  render: function WarningStory() {
    const { t } = useTranslation()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>
          {t('alertDialog.publishChanges')}
        </AlertDialogTrigger>
        <AlertDialogContent variant='warning'>
          <AlertDialogTitle>
            {t('alertDialog.publishToProduction')}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t('alertDialog.publishDesc')}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>{t('common.cancel')}</AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t('common.publish')}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Info: Story = {
  render: function InfoStory() {
    const { t } = useTranslation()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>{t('alertDialog.learnMore')}</AlertDialogTrigger>
        <AlertDialogContent variant='info'>
          <AlertDialogTitle>
            {t('alertDialog.newFeaturesTitle')}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t('alertDialog.newFeaturesDesc')}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>{t('common.later')}</AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t('common.install')}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Success: Story = {
  render: function SuccessStory() {
    const { t } = useTranslation()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>
          {t('alertDialog.completeOrder')}
        </AlertDialogTrigger>
        <AlertDialogContent variant='success'>
          <AlertDialogTitle>{t('alertDialog.confirmOrder')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('alertDialog.confirmOrderDesc')}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>{t('common.cancel')}</AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t('alertDialog.placeOrder')}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Messages: Story = {
  render: function MessagesStory() {
    const { t } = useTranslation()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>{t('alertDialog.reviewImport')}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>{t('alertDialog.importComplete')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('alertDialog.importCompleteDesc')}
          </AlertDialogDescription>
          <AlertDialogMessageList
            messages={[
              {
                variant: 'success',
                text: t('alertDialog.row1Success'),
              },
              {
                variant: 'success',
                text: t('alertDialog.row2Success'),
              },
              {
                variant: 'warning',
                text: t('alertDialog.row3Warning'),
              },
              {
                variant: 'danger',
                text: t('alertDialog.row7Error'),
              },
              {
                variant: 'info',
                text: t('alertDialog.row11Info'),
              },
              {
                variant: 'success',
                text: t('alertDialog.row12Success'),
              },
            ]}
          />
          <AlertDialogActions>
            <AlertDialogClose>{t('common.cancel')}</AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t('common.done')}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariantsStory() {
    const { t } = useTranslation()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t('common.info')}
          </AlertDialogTrigger>
          <AlertDialogContent variant='info'>
            <AlertDialogTitle>{t('alertDialog.information')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('alertDialog.informationalAlert')}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>{t('common.dismiss')}</AlertDialogClose>
              <AlertDialogClose variant='primary'>
                {t('common.ok')}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>

        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t('common.warning')}
          </AlertDialogTrigger>
          <AlertDialogContent variant='warning'>
            <AlertDialogTitle>{t('common.warning')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('alertDialog.warningMsg')}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>{t('common.cancel')}</AlertDialogClose>
              <AlertDialogClose variant='primary'>
                {t('common.continue')}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>

        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t('common.danger')}
          </AlertDialogTrigger>
          <AlertDialogContent variant='danger'>
            <AlertDialogTitle>{t('common.danger')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('alertDialog.cannotBeUndone')}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>{t('common.cancel')}</AlertDialogClose>
              <AlertDialogClose variant='danger'>
                {t('common.delete')}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>

        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t('common.success')}
          </AlertDialogTrigger>
          <AlertDialogContent variant='success'>
            <AlertDialogTitle>{t('common.success')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('alertDialog.everythingLooksGood')}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>{t('common.cancel')}</AlertDialogClose>
              <AlertDialogClose variant='primary'>
                {t('common.confirm')}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>
      </div>
    )
  },
}

function ImperativeDemo() {
  const { t } = useTranslation()
  const { alert, confirm, messages } = useAlertDialog()
  const [log, setLog] = React.useState<string[]>([])

  function addLog(msg: string) {
    setLog((prev) => [...prev, msg])
  }

  async function handleSingle() {
    const confirmed = await confirm({
      title: t('alertDialog.deleteFileQ'),
      description: t('alertDialog.deleteFileDesc'),
      variant: 'danger',
      confirmLabel: t('common.delete'),
    })
    addLog(
      t('common.delete') +
        ': ' +
        (confirmed ? t('common.confirmed') : t('common.cancelled')),
    )
  }

  async function handleAlert(opts: AlertDialogAlertOptions, label: string) {
    await alert(opts)
    addLog(`${label}: ${t('common.dismissed')}`)
  }

  async function handleSequence() {
    const deleteP = confirm({
      title: t('alertDialog.deleteFileQ'),
      description: t('alertDialog.deleteFileDesc'),
      variant: 'danger',
      confirmLabel: t('common.delete'),
    })
    const publishP = confirm({
      title: t('alertDialog.publishChangesQ'),
      description: t('alertDialog.publishChangesDesc'),
      variant: 'warning',
      confirmLabel: t('common.publish'),
    })
    const updateP = confirm({
      title: t('alertDialog.installUpdateQ'),
      variant: 'info',
      confirmLabel: t('common.install'),
    })

    const [del, pub, upd] = await Promise.all([deleteP, publishP, updateP])
    addLog(
      [
        t('common.delete') +
          ': ' +
          (del ? t('common.confirmed') : t('common.cancelled')),
        t('common.publish') +
          ': ' +
          (pub ? t('common.confirmed') : t('common.cancelled')),
        t('common.install') +
          ': ' +
          (upd ? t('common.confirmed') : t('common.cancelled')),
      ].join(' · '),
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-2)',
          justifyContent: 'center',
        }}
      >
        <Button variant='danger' onClick={handleSingle}>
          {t('alertDialog.deleteFile')}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            handleAlert(
              {
                title: t('alertDialog.uploadComplete'),
                description: t('alertDialog.uploadCompleteDesc'),
                variant: 'success',
                okLabel: t('alertDialog.great'),
              },
              t('alertDialog.successAlert'),
            )
          }
        >
          {t('alertDialog.successAlert')}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            handleAlert(
              {
                title: t('alertDialog.storageAlmostFull'),
                description: t('alertDialog.storageAlmostFullDesc'),
                variant: 'warning',
              },
              t('alertDialog.warningAlert'),
            )
          }
        >
          {t('alertDialog.warningAlert')}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            handleAlert(
              {
                title: t('alertDialog.connectionLost'),
                description: t('alertDialog.connectionLostDesc'),
                variant: 'danger',
              },
              t('alertDialog.errorAlert'),
            )
          }
        >
          {t('alertDialog.errorAlert')}
        </Button>
        <Button
          variant='secondary'
          onClick={async () => {
            const ok = await messages({
              title: t('alertDialog.importComplete'),
              description: t('alertDialog.importComplete6'),
              messages: [
                {
                  variant: 'success',
                  text: t('alertDialog.rows4Imported'),
                },
                {
                  variant: 'warning',
                  text: t('alertDialog.row1HasWarning'),
                },
                {
                  variant: 'danger',
                  text: t('alertDialog.row1Failed'),
                },
              ],
              okLabel: t('alertDialog.gotIt'),
            })
            addLog(
              `Messages: ${ok ? t('common.dismissed') : t('common.cancelled')}`,
            )
          }}
        >
          {t('alertDialog.showMessages')}
        </Button>
        <Button variant='secondary' onClick={handleSequence}>
          {t('alertDialog.queue3')}
        </Button>
      </div>
      {log.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-1)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
          }}
        >
          {log.map((entry, i) => (
            <p key={i} style={{ margin: 0 }}>
              {entry}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export const Imperative: Story = {
  render: function ImperativeStory() {
    return (
      <AlertDialogProvider>
        <ImperativeDemo />
      </AlertDialogProvider>
    )
  },
}

function QueuedDialogsDemo() {
  const { t } = useTranslation()
  const { confirm, alert } = useAlertDialog()
  const [log, setLog] = React.useState<string[]>([])

  function addLog(msg: string) {
    setLog((prev) => [...prev, msg])
  }

  async function handleStart() {
    const moveToTrash = await confirm({
      title: t('alertDialog.moveProductToTrashQ'),
      description: t('alertDialog.moveProductToTrashDesc'),
      variant: 'warning',
      confirmLabel: t('alertDialog.moveToTrash'),
    })

    if (!moveToTrash) {
      addLog(t('common.cancelled'))
      return
    }

    const deleteBackups = await confirm({
      title: t('alertDialog.alsoDeleteBackupsQ'),
      description: t('alertDialog.alsoDeleteBackupsDesc'),
      variant: 'danger',
      confirmLabel: t('alertDialog.deleteBackups'),
      cancelLabel: t('alertDialog.keepBackups'),
    })

    if (deleteBackups) {
      await alert({
        title: t('alertDialog.deletedPermanently'),
        description: t('alertDialog.deletedPermanentlyDesc'),
        variant: 'success',
        okLabel: t('common.done'),
      })
      addLog(t('alertDialog.productAndBackupsDeleted'))
    } else {
      await alert({
        title: t('alertDialog.movedToTrash'),
        description: t('alertDialog.movedToTrashDesc'),
        variant: 'success',
        okLabel: t('common.done'),
      })
      addLog(t('alertDialog.productTrashedBackupsKept'))
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}
    >
      <Button variant='danger' onClick={handleStart}>
        {t('alertDialog.deleteProduct')}
      </Button>
      {log.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-1)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
          }}
        >
          {log.map((entry, i) => (
            <p key={i} style={{ margin: 0 }}>
              {entry}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export const QueuedDialogs: Story = {
  render: function QueuedDialogsStory() {
    return (
      <AlertDialogProvider>
        <QueuedDialogsDemo />
      </AlertDialogProvider>
    )
  },
}
