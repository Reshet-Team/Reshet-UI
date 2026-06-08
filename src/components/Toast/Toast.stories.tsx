import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import {
  ToastAnchoredContent,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from './Toast'
import { createToastManager, useToast } from './useToast'

const withProvider = (Story: React.ComponentType) => (
  <ToastProvider>
    <Story />
  </ToastProvider>
)

export default {
  title: 'Overlays/Toast',
  component: ToastProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToastProvider>

type Story = StoryObj<typeof ToastProvider>

export const Default: Story = {
  decorators: [withProvider],
  render: function DefaultStory() {
    const { t } = useTranslation()
    const { add } = useToast()
    return (
      <Button
        onClick={() =>
          add({
            title: t('toast.changesSaved'),
            description: t('toast.changesSavedDesc'),
          })
        }
      >
        {t('toast.showToast')}
      </Button>
    )
  },
}

export const Types: Story = {
  decorators: [withProvider],
  render: function TypesStory() {
    const { t } = useTranslation()
    const { add } = useToast()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <Button
          onClick={() =>
            add({
              type: 'success',
              title: t('toast.saved'),
              description: t('toast.fileSaved'),
            })
          }
        >
          {t('common.success')}
        </Button>
        <Button
          variant='danger'
          onClick={() =>
            add({
              type: 'error',
              title: t('toast.failed'),
              description: t('toast.failedDesc'),
            })
          }
        >
          {t('common.error')}
        </Button>
        <Button
          variant='secondary'
          onClick={() =>
            add({
              type: 'warning',
              title: t('toast.headsUp'),
              description: t('toast.sessionExpires'),
            })
          }
        >
          {t('common.warning')}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            add({
              type: 'info',
              title: t('toast.updateAvailable'),
              description: t('toast.updateAvailableDesc'),
            })
          }
        >
          {t('common.info')}
        </Button>
      </div>
    )
  },
}

export const WithAction: Story = {
  decorators: [withProvider],
  render: function WithActionStory() {
    const { t } = useTranslation()
    const { add } = useToast()
    return (
      <Button
        onClick={() =>
          add({
            title: t('toast.messageDeleted'),
            actionProps: {
              children: t('common.undo'),
              onClick: () =>
                add({
                  title: t('toast.messageRestored'),
                }),
            },
          })
        }
      >
        {t('toast.deleteMessage')}
      </Button>
    )
  },
}

export const PromiseToast: Story = {
  name: 'Promise',
  decorators: [withProvider],
  render: function PromiseStory() {
    const { t } = useTranslation()
    const { promise } = useToast()

    function simulateUpload() {
      return new Promise<{ name: string }>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) {
            resolve({ name: 'report.pdf' })
          } else {
            reject(new Error(t('toast.networkError')))
          }
        }, 2000)
      })
    }

    return (
      <Button
        onClick={() =>
          promise(simulateUpload(), {
            loading: t('toast.uploadingFile'),
            success: (result: { name: string }) => ({
              title: t('toast.uploadComplete'),
              description: t('toast.uploadCompleteDesc', { name: result.name }),
            }),
            error: (err) => ({
              type: 'error',
              title: t('toast.uploadFailed'),
              description: err.message,
            }),
          })
        }
      >
        {t('toast.uploadFile')}
      </Button>
    )
  },
}

const globalManager = createToastManager()

export const Programmatic: Story = {
  decorators: [
    (Story: React.ComponentType) => (
      <ToastProvider toastManager={globalManager}>
        <Story />
      </ToastProvider>
    ),
  ],
  render: function ProgrammaticStory() {
    const { t } = useTranslation()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Button
          onClick={() =>
            globalManager.add({
              title: t('toast.deployed'),
              description: t('toast.deployedDesc'),
              type: 'success',
            })
          }
        >
          {t('toast.triggerFromManager')}
        </Button>
        <Button variant='secondary' onClick={() => globalManager.close()}>
          {t('toast.closeAll')}
        </Button>
      </div>
    )
  },
}

export const Anchored: Story = {
  decorators: [withProvider],
  render: function AnchoredStory() {
    const { t } = useTranslation()
    const { add } = useToast()
    const anchorRef = React.useRef<HTMLDivElement>(null)

    return (
      <div ref={anchorRef} style={{ display: 'inline-block' }}>
        <Button
          onClick={() =>
            add({
              description: t('toast.linkCopied'),
              timeout: 2000,
              positionerProps: {
                anchor: anchorRef.current,
                side: 'top',
                sideOffset: 8,
              },
            })
          }
        >
          {t('toast.copyLink')}
        </Button>
      </div>
    )
  },
}

export const AnchoredCustom: Story = {
  name: 'Anchored (custom render)',
  decorators: [
    (Story: React.ComponentType) => (
      <ToastProvider
        renderAnchoredToast={(toast) => (
          <ToastAnchoredContent arrow>
            {toast.title != null && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description != null && (
              <ToastDescription>{toast.description}</ToastDescription>
            )}
          </ToastAnchoredContent>
        )}
      >
        <Story />
      </ToastProvider>
    ),
  ],
  render: function AnchoredCustomStory() {
    const { t } = useTranslation()
    const { add } = useToast()
    const saveRef = React.useRef<HTMLDivElement>(null)
    const deleteRef = React.useRef<HTMLDivElement>(null)

    return (
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <div ref={saveRef} style={{ display: 'inline-block' }}>
          <Button
            onClick={() =>
              add({
                type: 'success',
                title: t('toast.saved'),
                description: t('toast.savedChanges'),
                timeout: 2500,
                positionerProps: {
                  anchor: saveRef.current,
                  side: 'top',
                  sideOffset: 8,
                },
              })
            }
          >
            {t('common.save')}
          </Button>
        </div>
        <div ref={deleteRef} style={{ display: 'inline-block' }}>
          <Button
            variant='danger'
            onClick={() =>
              add({
                type: 'error',
                title: t('toast.deleted'),
                description: t('toast.itemRemoved'),
                timeout: 2500,
                positionerProps: {
                  anchor: deleteRef.current,
                  side: 'top',
                  sideOffset: 8,
                },
              })
            }
          >
            {t('common.delete')}
          </Button>
        </div>
      </div>
    )
  },
}
