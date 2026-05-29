import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
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
    const { add } = useToast()
    return (
      <Button
        onClick={() =>
          add({
            title: 'Changes saved',
            description: 'Your changes have been saved successfully.',
          })
        }
      >
        Show toast
      </Button>
    )
  },
}

export const Types: Story = {
  decorators: [withProvider],
  render: function TypesStory() {
    const { add } = useToast()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <Button
          onClick={() =>
            add({
              type: 'success',
              title: 'Saved',
              description: 'Your file was saved.',
            })
          }
        >
          Success
        </Button>
        <Button
          variant='danger'
          onClick={() =>
            add({
              type: 'error',
              title: 'Failed',
              description: 'Something went wrong. Please try again.',
            })
          }
        >
          Error
        </Button>
        <Button
          variant='secondary'
          onClick={() =>
            add({
              type: 'warning',
              title: 'Heads up',
              description: 'Your session expires in 5 minutes.',
            })
          }
        >
          Warning
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            add({
              type: 'info',
              title: 'Update available',
              description: 'A new version is ready to install.',
            })
          }
        >
          Info
        </Button>
      </div>
    )
  },
}

export const WithAction: Story = {
  decorators: [withProvider],
  render: function WithActionStory() {
    const { add } = useToast()
    return (
      <Button
        onClick={() =>
          add({
            title: 'Message deleted',
            actionProps: {
              children: 'Undo',
              onClick: () => add({ title: 'Message restored' }),
            },
          })
        }
      >
        Delete message
      </Button>
    )
  },
}

export const PromiseToast: Story = {
  name: 'Promise',
  decorators: [withProvider],
  render: function PromiseStory() {
    const { promise } = useToast()

    function simulateUpload() {
      return new Promise<{ name: string }>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) {
            resolve({ name: 'report.pdf' })
          } else {
            reject(new Error('Network error'))
          }
        }, 2000)
      })
    }

    return (
      <Button
        onClick={() =>
          promise(simulateUpload(), {
            loading: 'Uploading file…',
            success: (result: { name: string }) => ({
              title: 'Upload complete',
              description: `${result.name} uploaded.`,
            }),
            error: (err) => ({
              type: 'error',
              title: 'Upload failed',
              description: err.message,
            }),
          })
        }
      >
        Upload file
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
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Button
          onClick={() =>
            globalManager.add({
              title: 'Deployed',
              description: 'Production deployment complete.',
              type: 'success',
            })
          }
        >
          Trigger from manager
        </Button>
        <Button variant='secondary' onClick={() => globalManager.close()}>
          Close all
        </Button>
      </div>
    )
  },
}

export const Anchored: Story = {
  decorators: [withProvider],
  render: function AnchoredStory() {
    const { add } = useToast()
    const anchorRef = React.useRef<HTMLDivElement>(null)

    return (
      <div ref={anchorRef} style={{ display: 'inline-block' }}>
        <Button
          onClick={() =>
            add({
              description: 'Link copied to clipboard',
              timeout: 2000,
              positionerProps: {
                anchor: anchorRef.current,
                side: 'top',
                sideOffset: 8,
              },
            })
          }
        >
          Copy link
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
                title: 'Saved',
                description: 'Your changes were saved.',
                timeout: 2500,
                positionerProps: {
                  anchor: saveRef.current,
                  side: 'top',
                  sideOffset: 8,
                },
              })
            }
          >
            Save
          </Button>
        </div>
        <div ref={deleteRef} style={{ display: 'inline-block' }}>
          <Button
            variant='danger'
            onClick={() =>
              add({
                type: 'error',
                title: 'Deleted',
                description: 'Item permanently removed.',
                timeout: 2500,
                positionerProps: {
                  anchor: deleteRef.current,
                  side: 'top',
                  sideOffset: 8,
                },
              })
            }
          >
            Delete
          </Button>
        </div>
      </div>
    )
  },
}
