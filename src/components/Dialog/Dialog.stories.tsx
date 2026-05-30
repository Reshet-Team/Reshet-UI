import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
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
    const t = useT()
    return (
      <DialogRoot>
        <DialogTrigger>
          {t({ en: 'Open dialog', he: 'פתח חלון' })}
        </DialogTrigger>
        <DialogContent>
          <div>
            <DialogTitle>
              {t({ en: 'Notifications', he: 'התראות' })}
            </DialogTitle>
            <DialogDescription>
              {t({
                en: 'You are all caught up. Good job!',
                he: 'אתה מעודכן בהכל. כל הכבוד!',
              })}
            </DialogDescription>
          </div>
          <DialogActions>
            <DialogClose>{t({ en: 'Close', he: 'סגור' })}</DialogClose>
          </DialogActions>
        </DialogContent>
      </DialogRoot>
    )
  },
}

export const WithActions: Story = {
  render: function WithActions() {
    const t = useT()
    return (
      <DialogRoot>
        <DialogTrigger>
          {t({ en: 'Delete account', he: 'מחק חשבון' })}
        </DialogTrigger>
        <DialogContent>
          <div>
            <DialogTitle>
              {t({ en: 'Delete account?', he: 'למחוק את החשבון?' })}
            </DialogTitle>
            <DialogDescription>
              {t({
                en: 'This action is permanent and cannot be undone. All your data will be removed immediately.',
                he: 'פעולה זו היא קבועה ולא ניתן לבטלה. כל הנתונים שלך יוסרו מיד.',
              })}
            </DialogDescription>
          </div>
          <DialogActions>
            <DialogClose>{t({ en: 'Cancel', he: 'ביטול' })}</DialogClose>
            <DialogClose variant='danger'>
              {t({ en: 'Delete', he: 'מחק' })}
            </DialogClose>
          </DialogActions>
        </DialogContent>
      </DialogRoot>
    )
  },
}

export const Controlled: Story = {
  render: function ControlledDialog() {
    const t = useT()
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
          {t({ en: 'Open programmatically', he: 'פתח פרוגרמטית' })}
        </Button>
        <DialogRoot open={open} onOpenChange={setOpen}>
          <DialogContent>
            <div>
              <DialogTitle>
                {t({ en: 'Controlled dialog', he: 'חלון מבוקר' })}
              </DialogTitle>
              <DialogDescription>
                {t({
                  en: "This dialog's state is managed externally.",
                  he: 'מצב חלון זה מנוהל מבחוץ.',
                })}
              </DialogDescription>
            </div>
            <DialogActions>
              <DialogClose>{t({ en: 'Close', he: 'סגור' })}</DialogClose>
            </DialogActions>
          </DialogContent>
        </DialogRoot>
      </div>
    )
  },
}

export const Nested: Story = {
  render: function Nested() {
    const t = useT()
    return (
      <DialogRoot>
        <DialogTrigger>
          {t({ en: 'Open dialog', he: 'פתח חלון' })}
        </DialogTrigger>
        <DialogContent>
          <div>
            <DialogTitle>
              {t({ en: 'Notifications', he: 'התראות' })}
            </DialogTitle>
            <DialogDescription>
              {t({
                en: 'You are all caught up. Good job!',
                he: 'אתה מעודכן בהכל. כל הכבוד!',
              })}
            </DialogDescription>
          </div>
          <DialogActions>
            <DialogClose>{t({ en: 'Close', he: 'סגור' })}</DialogClose>
            <DialogRoot>
              <DialogTrigger>
                {t({ en: 'Customize', he: 'התאמה אישית' })}
              </DialogTrigger>
              <DialogContent>
                <div>
                  <DialogTitle>
                    {t({ en: 'Customize notifications', he: 'התאמת התראות' })}
                  </DialogTitle>
                  <DialogDescription>
                    {t({
                      en: 'Review your settings here.',
                      he: 'עיין בהגדרות שלך כאן.',
                    })}
                  </DialogDescription>
                </div>
                <DialogActions>
                  <DialogClose>{t({ en: 'Close', he: 'סגור' })}</DialogClose>
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
    const t = useT()
    const sections = [
      t({
        en: 'By accessing and using this service, you accept and agree to be bound by the terms and conditions set forth below.',
        he: 'בגישה לשירות זה ובשימוש בו, אתה מקבל ומסכים להיות מחויב לתנאים ולהגבלות המפורטים להלן.',
      }),
      t({
        en: 'We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of any changes.',
        he: 'אנו שומרים לעצמנו את הזכות לשנות תנאים אלה בכל עת. המשך השימוש בשירות מהווה קבלה של כל שינוי.',
      }),
      t({
        en: 'You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the service without express written permission.',
        he: 'אתה מסכים שלא לשכפל, לכפול, להעתיק, למכור או לנצל כל חלק מהשירות ללא אישור מפורש בכתב.',
      }),
      t({
        en: 'The service is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.',
        he: 'השירות מסופק על בסיס "כפי שהוא" ו"כפי שזמין" ללא כל אחריות מכל סוג, מפורשת או משתמעת.',
      }),
      t({
        en: 'In no event shall we be liable for any indirect, incidental, special, or consequential damages arising out of your use of the service.',
        he: 'בשום מקרה לא נהיה אחראים לנזקים עקיפים, מקריים, מיוחדים או תוצאתיים הנובעים מהשימוש שלך בשירות.',
      }),
      t({
        en: 'You agree to indemnify and hold harmless the company from any claim, demand, or damages arising from your use of the service.',
        he: 'אתה מסכים לשפות ולהגן על החברה מכל תביעה, דרישה או נזק הנובע מהשימוש שלך בשירות.',
      }),
      t({
        en: 'These terms shall be governed by and construed in accordance with applicable law, without regard to conflict of law provisions.',
        he: 'תנאים אלה יחולו ויפורשו בהתאם לדין החל, ללא התחשבות בהוראות ניגוד חוקים.',
      }),
      t({
        en: 'If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
        he: 'אם הוראה כלשהי בתנאים אלה תימצא בלתי תקפה או בלתי אכיפה, שאר ההוראות יישארו בתוקף מלא.',
      }),
    ]
    return (
      <DialogRoot>
        <DialogTrigger>
          {t({ en: 'View terms', he: 'צפה בתנאים' })}
        </DialogTrigger>
        <DialogContent showCloseButton>
          <div>
            <DialogTitle>
              {t({ en: 'Terms of Service', he: 'תנאי שירות' })}
            </DialogTitle>
            <DialogDescription>
              {t({
                en: 'Last updated January 15, 2025.',
                he: 'עודכן לאחרונה ב-15 בינואר 2025.',
              })}
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
                  <strong>
                    {t({ en: `Section ${i + 1}.`, he: `סעיף ${i + 1}.` })}
                  </strong>{' '}
                  {text}
                </p>
              ))}
            </div>
          </div>
          <DialogActions>
            <DialogClose>{t({ en: 'Decline', he: 'דחה' })}</DialogClose>
            <DialogClose variant='primary'>
              {t({ en: 'Accept', he: 'קבל' })}
            </DialogClose>
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
  const t = useT()
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
            {t({ en: 'Name', he: 'שם' })}
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
            {t({ en: 'Email', he: 'אימייל' })}
          </span>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <DialogActions>
        <DialogClose>{t({ en: 'Cancel', he: 'ביטול' })}</DialogClose>
        <DialogClose variant='primary' onClick={() => onSave(name, email)}>
          {t({ en: 'Save changes', he: 'שמור שינויים' })}
        </DialogClose>
      </DialogActions>
    </>
  )
}

export const EditDialog: Story = {
  render: function EditDialogStory() {
    const t = useT()
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
          <DialogTrigger>
            {t({ en: 'Edit profile', he: 'ערוך פרופיל' })}
          </DialogTrigger>
          <DialogContent style={{ width: '26rem' }}>
            <div>
              <DialogTitle>
                {t({ en: 'Edit profile', he: 'ערוך פרופיל' })}
              </DialogTitle>
              <DialogDescription>
                {t({
                  en: 'Update your display name and email address.',
                  he: 'עדכן את שם התצוגה וכתובת האימייל שלך.',
                })}
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
