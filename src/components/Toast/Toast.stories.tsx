import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    const { add } = useToast()
    return (
      <Button
        onClick={() =>
          add({
            title: t({ en: 'Changes saved', he: 'השינויים נשמרו' }),
            description: t({
              en: 'Your changes have been saved successfully.',
              he: 'השינויים שלך נשמרו בהצלחה.',
            }),
          })
        }
      >
        {t({ en: 'Show toast', he: 'הצג הודעה' })}
      </Button>
    )
  },
}

export const Types: Story = {
  decorators: [withProvider],
  render: function TypesStory() {
    const t = useT()
    const { add } = useToast()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <Button
          onClick={() =>
            add({
              type: 'success',
              title: t({ en: 'Saved', he: 'נשמר' }),
              description: t({
                en: 'Your file was saved.',
                he: 'הקובץ שלך נשמר.',
              }),
            })
          }
        >
          {t({ en: 'Success', he: 'הצלחה' })}
        </Button>
        <Button
          variant='danger'
          onClick={() =>
            add({
              type: 'error',
              title: t({ en: 'Failed', he: 'נכשל' }),
              description: t({
                en: 'Something went wrong. Please try again.',
                he: 'משהו השתבש. אנא נסה שוב.',
              }),
            })
          }
        >
          {t({ en: 'Error', he: 'שגיאה' })}
        </Button>
        <Button
          variant='secondary'
          onClick={() =>
            add({
              type: 'warning',
              title: t({ en: 'Heads up', he: 'שים לב' }),
              description: t({
                en: 'Your session expires in 5 minutes.',
                he: 'ההפעלה שלך תפוג בעוד 5 דקות.',
              }),
            })
          }
        >
          {t({ en: 'Warning', he: 'אזהרה' })}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            add({
              type: 'info',
              title: t({ en: 'Update available', he: 'עדכון זמין' }),
              description: t({
                en: 'A new version is ready to install.',
                he: 'גרסה חדשה מוכנה להתקנה.',
              }),
            })
          }
        >
          {t({ en: 'Info', he: 'מידע' })}
        </Button>
      </div>
    )
  },
}

export const WithAction: Story = {
  decorators: [withProvider],
  render: function WithActionStory() {
    const t = useT()
    const { add } = useToast()
    return (
      <Button
        onClick={() =>
          add({
            title: t({ en: 'Message deleted', he: 'ההודעה נמחקה' }),
            actionProps: {
              children: t({ en: 'Undo', he: 'בטל' }),
              onClick: () =>
                add({
                  title: t({ en: 'Message restored', he: 'ההודעה שוחזרה' }),
                }),
            },
          })
        }
      >
        {t({ en: 'Delete message', he: 'מחק הודעה' })}
      </Button>
    )
  },
}

export const PromiseToast: Story = {
  name: 'Promise',
  decorators: [withProvider],
  render: function PromiseStory() {
    const t = useT()
    const { promise } = useToast()

    function simulateUpload() {
      return new Promise<{ name: string }>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) {
            resolve({ name: 'report.pdf' })
          } else {
            reject(new Error(t({ en: 'Network error', he: 'שגיאת רשת' })))
          }
        }, 2000)
      })
    }

    return (
      <Button
        onClick={() =>
          promise(simulateUpload(), {
            loading: t({ en: 'Uploading file…', he: 'מעלה קובץ…' }),
            success: (result: { name: string }) => ({
              title: t({ en: 'Upload complete', he: 'ההעלאה הושלמה' }),
              description: t({
                en: `${result.name} uploaded.`,
                he: `${result.name} הועלה.`,
              }),
            }),
            error: (err) => ({
              type: 'error',
              title: t({ en: 'Upload failed', he: 'ההעלאה נכשלה' }),
              description: err.message,
            }),
          })
        }
      >
        {t({ en: 'Upload file', he: 'העלה קובץ' })}
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
    const t = useT()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Button
          onClick={() =>
            globalManager.add({
              title: t({ en: 'Deployed', he: 'נפרס' }),
              description: t({
                en: 'Production deployment complete.',
                he: 'הפריסה לייצור הושלמה.',
              }),
              type: 'success',
            })
          }
        >
          {t({ en: 'Trigger from manager', he: 'הפעל ממנהל' })}
        </Button>
        <Button variant='secondary' onClick={() => globalManager.close()}>
          {t({ en: 'Close all', he: 'סגור הכל' })}
        </Button>
      </div>
    )
  },
}

export const Anchored: Story = {
  decorators: [withProvider],
  render: function AnchoredStory() {
    const t = useT()
    const { add } = useToast()
    const anchorRef = React.useRef<HTMLDivElement>(null)

    return (
      <div ref={anchorRef} style={{ display: 'inline-block' }}>
        <Button
          onClick={() =>
            add({
              description: t({
                en: 'Link copied to clipboard',
                he: 'הקישור הועתק ללוח',
              }),
              timeout: 2000,
              positionerProps: {
                anchor: anchorRef.current,
                side: 'top',
                sideOffset: 8,
              },
            })
          }
        >
          {t({ en: 'Copy link', he: 'העתק קישור' })}
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
    const t = useT()
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
                title: t({ en: 'Saved', he: 'נשמר' }),
                description: t({
                  en: 'Your changes were saved.',
                  he: 'השינויים שלך נשמרו.',
                }),
                timeout: 2500,
                positionerProps: {
                  anchor: saveRef.current,
                  side: 'top',
                  sideOffset: 8,
                },
              })
            }
          >
            {t({ en: 'Save', he: 'שמור' })}
          </Button>
        </div>
        <div ref={deleteRef} style={{ display: 'inline-block' }}>
          <Button
            variant='danger'
            onClick={() =>
              add({
                type: 'error',
                title: t({ en: 'Deleted', he: 'נמחק' }),
                description: t({
                  en: 'Item permanently removed.',
                  he: 'הפריט הוסר לצמיתות.',
                }),
                timeout: 2500,
                positionerProps: {
                  anchor: deleteRef.current,
                  side: 'top',
                  sideOffset: 8,
                },
              })
            }
          >
            {t({ en: 'Delete', he: 'מחק' })}
          </Button>
        </div>
      </div>
    )
  },
}
