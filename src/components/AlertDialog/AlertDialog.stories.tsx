import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger variant='danger'>
          {t({ en: 'Delete account', he: 'מחק חשבון' })}
        </AlertDialogTrigger>
        <AlertDialogContent variant='danger'>
          <AlertDialogTitle>
            {t({ en: 'Delete account?', he: 'למחוק את החשבון?' })}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t({
              en: 'This action is permanent and cannot be undone. All your data will be removed immediately.',
              he: 'פעולה זו קבועה ולא ניתן לבטלה. כל הנתונים שלך יוסרו מיד.',
            })}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>
              {t({ en: 'Cancel', he: 'ביטול' })}
            </AlertDialogClose>
            <AlertDialogClose variant='danger'>
              {t({ en: 'Delete', he: 'מחק' })}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Warning: Story = {
  render: function WarningStory() {
    const t = useT()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>
          {t({ en: 'Publish changes', he: 'פרסם שינויים' })}
        </AlertDialogTrigger>
        <AlertDialogContent variant='warning'>
          <AlertDialogTitle>
            {t({ en: 'Publish to production?', he: 'לפרסם לייצור?' })}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t({
              en: 'This will immediately affect all users. Make sure you have reviewed the changes.',
              he: 'פעולה זו תשפיע מיידית על כל המשתמשים. ודא שבדקת את השינויים.',
            })}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>
              {t({ en: 'Cancel', he: 'ביטול' })}
            </AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t({ en: 'Publish', he: 'פרסם' })}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Info: Story = {
  render: function InfoStory() {
    const t = useT()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>
          {t({ en: 'Learn more', he: 'למד עוד' })}
        </AlertDialogTrigger>
        <AlertDialogContent variant='info'>
          <AlertDialogTitle>
            {t({ en: 'New features available', he: 'תכונות חדשות זמינות' })}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t({
              en: 'A new version with improved performance and bug fixes is ready to install.',
              he: 'גרסה חדשה עם שיפורי ביצועים ותיקוני באגים מוכנה להתקנה.',
            })}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>
              {t({ en: 'Later', he: 'אחר כך' })}
            </AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t({ en: 'Update now', he: 'עדכן עכשיו' })}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Success: Story = {
  render: function SuccessStory() {
    const t = useT()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>
          {t({ en: 'Complete order', he: 'השלם הזמנה' })}
        </AlertDialogTrigger>
        <AlertDialogContent variant='success'>
          <AlertDialogTitle>
            {t({ en: 'Confirm your order', he: 'אשר את הזמנתך' })}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t({
              en: 'Your order is ready to be placed. You will receive a confirmation email shortly.',
              he: 'ההזמנה שלך מוכנה לביצוע. תקבל אימייל אישור בקרוב.',
            })}
          </AlertDialogDescription>
          <AlertDialogActions>
            <AlertDialogClose>
              {t({ en: 'Cancel', he: 'ביטול' })}
            </AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t({ en: 'Place order', he: 'בצע הזמנה' })}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const Messages: Story = {
  render: function MessagesStory() {
    const t = useT()
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>
          {t({ en: 'Review import', he: 'סקור ייבוא' })}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>
            {t({ en: 'Import complete', he: 'הייבוא הושלם' })}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {t({
              en: '12 records were processed with mixed results.',
              he: '12 רשומות עובדו עם תוצאות מעורבות.',
            })}
          </AlertDialogDescription>
          <AlertDialogMessageList
            messages={[
              {
                variant: 'success',
                text: t({
                  en: 'Row 1: Imported successfully',
                  he: 'שורה 1: יובאה בהצלחה',
                }),
              },
              {
                variant: 'success',
                text: t({
                  en: 'Row 2: Imported successfully',
                  he: 'שורה 2: יובאה בהצלחה',
                }),
              },
              {
                variant: 'warning',
                text: t({
                  en: 'Row 3: Missing optional field "category"',
                  he: 'שורה 3: שדה "קטגוריה" חסר',
                }),
              },
              {
                variant: 'danger',
                text: t({
                  en: 'Row 7: Invalid email format',
                  he: 'שורה 7: פורמט דוא"ל לא חוקי',
                }),
              },
              {
                variant: 'info',
                text: t({
                  en: 'Row 11: Duplicate entry, skipped',
                  he: 'שורה 11: רשומה כפולה, דולגה',
                }),
              },
              {
                variant: 'success',
                text: t({
                  en: 'Row 12: Imported successfully',
                  he: 'שורה 12: יובאה בהצלחה',
                }),
              },
            ]}
          />
          <AlertDialogActions>
            <AlertDialogClose>
              {t({ en: 'Cancel', he: 'ביטול' })}
            </AlertDialogClose>
            <AlertDialogClose variant='primary'>
              {t({ en: 'Done', he: 'סיום' })}
            </AlertDialogClose>
          </AlertDialogActions>
        </AlertDialogContent>
      </AlertDialogRoot>
    )
  },
}

export const AllVariants: Story = {
  render: function AllVariantsStory() {
    const t = useT()
    return (
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t({ en: 'Info', he: 'מידע' })}
          </AlertDialogTrigger>
          <AlertDialogContent variant='info'>
            <AlertDialogTitle>
              {t({ en: 'Information', he: 'מידע' })}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t({
                en: 'This is an informational alert.',
                he: 'זוהי התראת מידע.',
              })}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>
                {t({ en: 'Dismiss', he: 'סגור' })}
              </AlertDialogClose>
              <AlertDialogClose variant='primary'>
                {t({ en: 'OK', he: 'אישור' })}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>

        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t({ en: 'Warning', he: 'אזהרה' })}
          </AlertDialogTrigger>
          <AlertDialogContent variant='warning'>
            <AlertDialogTitle>
              {t({ en: 'Warning', he: 'אזהרה' })}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t({ en: 'Proceed with caution.', he: 'המשך בזהירות.' })}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>
                {t({ en: 'Cancel', he: 'ביטול' })}
              </AlertDialogClose>
              <AlertDialogClose variant='primary'>
                {t({ en: 'Continue', he: 'המשך' })}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>

        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t({ en: 'Danger', he: 'סכנה' })}
          </AlertDialogTrigger>
          <AlertDialogContent variant='danger'>
            <AlertDialogTitle>
              {t({ en: 'Danger', he: 'סכנה' })}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t({
                en: 'This cannot be undone.',
                he: 'לא ניתן לבטל פעולה זו.',
              })}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>
                {t({ en: 'Cancel', he: 'ביטול' })}
              </AlertDialogClose>
              <AlertDialogClose variant='danger'>
                {t({ en: 'Delete', he: 'מחק' })}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>

        <AlertDialogRoot>
          <AlertDialogTrigger variant='ghost'>
            {t({ en: 'Success', he: 'הצלחה' })}
          </AlertDialogTrigger>
          <AlertDialogContent variant='success'>
            <AlertDialogTitle>
              {t({ en: 'Success', he: 'הצלחה' })}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t({ en: 'Everything looks good.', he: 'הכל נראה טוב.' })}
            </AlertDialogDescription>
            <AlertDialogActions>
              <AlertDialogClose>
                {t({ en: 'Cancel', he: 'ביטול' })}
              </AlertDialogClose>
              <AlertDialogClose variant='primary'>
                {t({ en: 'Confirm', he: 'אשר' })}
              </AlertDialogClose>
            </AlertDialogActions>
          </AlertDialogContent>
        </AlertDialogRoot>
      </div>
    )
  },
}

function ImperativeDemo() {
  const t = useT()
  const { alert, confirm, messages } = useAlertDialog()
  const [log, setLog] = React.useState<string[]>([])

  function addLog(msg: string) {
    setLog((prev) => [...prev, msg])
  }

  async function handleSingle() {
    const confirmed = await confirm({
      title: t({ en: 'Delete file?', he: 'למחוק קובץ?' }),
      description: t({
        en: 'This file will be permanently removed.',
        he: 'קובץ זה יוסר לצמיתות.',
      }),
      variant: 'danger',
      confirmLabel: t({ en: 'Delete', he: 'מחק' }),
    })
    addLog(
      confirmed
        ? t({ en: 'Deleted', he: 'נמחק' })
        : t({ en: 'Cancelled', he: 'בוטל' }),
    )
  }

  async function handleAlert(opts: AlertDialogAlertOptions, label: string) {
    await alert(opts)
    addLog(`${label}: ${t({ en: 'dismissed', he: 'נסגר' })}`)
  }

  async function handleSequence() {
    const deleteP = confirm({
      title: t({ en: 'Delete file?', he: 'למחוק קובץ?' }),
      description: t({
        en: 'This file will be permanently removed.',
        he: 'קובץ זה יוסר לצמיתות.',
      }),
      variant: 'danger',
      confirmLabel: t({ en: 'Delete', he: 'מחק' }),
    })
    const publishP = confirm({
      title: t({ en: 'Publish changes?', he: 'לפרסם שינויים?' }),
      description: t({
        en: 'This will go live immediately.',
        he: 'פעולה זו תיכנס לתוקף מיד.',
      }),
      variant: 'warning',
      confirmLabel: t({ en: 'Publish', he: 'פרסם' }),
    })
    const updateP = confirm({
      title: t({ en: 'Install update?', he: 'להתקין עדכון?' }),
      variant: 'info',
      confirmLabel: t({ en: 'Install', he: 'התקן' }),
    })

    const [del, pub, upd] = await Promise.all([deleteP, publishP, updateP])
    addLog(
      [
        `Delete: ${del ? t({ en: 'confirmed', he: 'אושר' }) : t({ en: 'cancelled', he: 'בוטל' })}`,
        `Publish: ${pub ? t({ en: 'confirmed', he: 'אושר' }) : t({ en: 'cancelled', he: 'בוטל' })}`,
        `Update: ${upd ? t({ en: 'confirmed', he: 'אושר' }) : t({ en: 'cancelled', he: 'בוטל' })}`,
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
          {t({ en: 'Delete file', he: 'מחק קובץ' })}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            handleAlert(
              {
                title: t({ en: 'Upload complete', he: 'העלאה הושלמה' }),
                description: t({
                  en: '3 files were uploaded successfully.',
                  he: '3 קבצים הועלו בהצלחה.',
                }),
                variant: 'success',
                okLabel: t({ en: 'Great', he: 'מצוין' }),
              },
              'Success alert',
            )
          }
        >
          {t({ en: 'Success alert', he: 'התראת הצלחה' })}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            handleAlert(
              {
                title: t({ en: 'Storage almost full', he: 'האחסון כמעט מלא' }),
                description: t({
                  en: 'You have used 90% of your storage quota.',
                  he: 'השתמשת ב-90% ממכסת האחסון שלך.',
                }),
                variant: 'warning',
              },
              'Warning alert',
            )
          }
        >
          {t({ en: 'Warning alert', he: 'התראת אזהרה' })}
        </Button>
        <Button
          variant='ghost'
          onClick={() =>
            handleAlert(
              {
                title: t({ en: 'Connection lost', he: 'החיבור אבד' }),
                description: t({
                  en: 'Unable to reach the server. Please check your network.',
                  he: 'לא ניתן להגיע לשרת. בדוק את החיבור שלך.',
                }),
                variant: 'danger',
              },
              'Error alert',
            )
          }
        >
          {t({ en: 'Error alert', he: 'התראת שגיאה' })}
        </Button>
        <Button
          variant='secondary'
          onClick={async () => {
            const ok = await messages({
              title: t({ en: 'Import complete', he: 'הייבוא הושלם' }),
              description: t({
                en: '6 records processed.',
                he: '6 רשומות עובדו.',
              }),
              messages: [
                {
                  variant: 'success',
                  text: t({ en: '4 rows imported', he: '4 שורות יובאו' }),
                },
                {
                  variant: 'warning',
                  text: t({
                    en: '1 row had a warning',
                    he: 'שורה אחת עם אזהרה',
                  }),
                },
                {
                  variant: 'danger',
                  text: t({ en: '1 row failed', he: 'שורה אחת נכשלה' }),
                },
              ],
              okLabel: t({ en: 'Got it', he: 'הבנתי' }),
            })
            addLog(
              `Messages: ${ok ? t({ en: 'dismissed', he: 'נסגר' }) : t({ en: 'cancelled', he: 'בוטל' })}`,
            )
          }}
        >
          {t({ en: 'Show messages', he: 'הצג הודעות' })}
        </Button>
        <Button variant='secondary' onClick={handleSequence}>
          {t({ en: 'Queue 3 confirms', he: 'תור 3 אישורים' })}
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
  const t = useT()
  const { confirm, alert } = useAlertDialog()
  const [log, setLog] = React.useState<string[]>([])

  function addLog(msg: string) {
    setLog((prev) => [...prev, msg])
  }

  async function handleStart() {
    const moveToTrash = await confirm({
      title: t({ en: 'Move product to trash?', he: 'להעביר מוצר לאשפה?' }),
      description: t({
        en: 'The product will be hidden from your store but can be recovered.',
        he: 'המוצר יוסתר מהחנות אך ניתן לשחזר אותו.',
      }),
      variant: 'warning',
      confirmLabel: t({ en: 'Move to trash', he: 'העבר לאשפה' }),
    })

    if (!moveToTrash) {
      addLog(t({ en: 'Cancelled', he: 'בוטל' }))
      return
    }

    const deleteBackups = await confirm({
      title: t({ en: 'Also delete backups?', he: 'גם למחוק גיבויים?' }),
      description: t({
        en: 'Backup copies exist for this product. Delete them too?',
        he: 'קיימים עותקי גיבוי למוצר זה. למחוק גם אותם?',
      }),
      variant: 'danger',
      confirmLabel: t({ en: 'Delete backups', he: 'מחק גיבויים' }),
      cancelLabel: t({ en: 'Keep backups', he: 'שמור גיבויים' }),
    })

    if (deleteBackups) {
      await alert({
        title: t({ en: 'Deleted permanently', he: 'נמחק לצמיתות' }),
        description: t({
          en: 'Product and all backups have been permanently removed.',
          he: 'המוצר וכל הגיבויים הוסרו לצמיתות.',
        }),
        variant: 'success',
        okLabel: t({ en: 'Done', he: 'סיום' }),
      })
      addLog(
        t({ en: 'Product and backups deleted', he: 'מוצר וגיבויים נמחקו' }),
      )
    } else {
      await alert({
        title: t({ en: 'Moved to trash', he: 'הועבר לאשפה' }),
        description: t({
          en: 'Product moved to trash. Backup copies were kept.',
          he: 'המוצר הועבר לאשפה. עותקי הגיבוי נשמרו.',
        }),
        variant: 'success',
        okLabel: t({ en: 'Done', he: 'סיום' }),
      })
      addLog(
        t({
          en: 'Product trashed, backups kept',
          he: 'מוצר באשפה, גיבויים נשמרו',
        }),
      )
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
        {t({ en: 'Delete product', he: 'מחק מוצר' })}
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
