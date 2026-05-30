import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
import { Button } from '../Button/Button'
import {
  DrawerActions,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  type DrawerSnapPoint,
} from './Drawer'

export default {
  title: 'Overlays/Drawer',
  component: DrawerRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DrawerRoot>

type Story = StoryObj<typeof DrawerRoot>

export const Default: Story = {
  name: 'Bottom (default)',
  render: function Default() {
    const t = useT()
    return (
      <DrawerRoot>
        <DrawerTrigger>
          {t({ en: 'Open drawer', he: 'פתח מגירה' })}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>{t({ en: 'Notifications', he: 'התראות' })}</DrawerTitle>
          <DrawerDescription>
            {t({
              en: 'You are all caught up. Good job!',
              he: 'אתה מעודכן בהכל. כל הכבוד!',
            })}
          </DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t({ en: 'Close', he: 'סגור' })}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const RightPanel: Story = {
  name: 'Right panel',
  render: function RightPanel() {
    const t = useT()
    return (
      <DrawerRoot swipeDirection='right'>
        <DrawerTrigger>{t({ en: 'Open panel', he: 'פתח לוח' })}</DrawerTrigger>
        <DrawerContent side='right'>
          <DrawerTitle>{t({ en: 'Settings', he: 'הגדרות' })}</DrawerTitle>
          <DrawerDescription>
            {t({
              en: 'Adjust your preferences from this side panel. Swipe right to dismiss.',
              he: 'כוון את ההעדפות שלך מלוח צד זה. החלק שמאלה לסגירה.',
            })}
          </DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t({ en: 'Close', he: 'סגור' })}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const LeftPanel: Story = {
  name: 'Left panel',
  render: function LeftPanel() {
    const t = useT()
    return (
      <DrawerRoot swipeDirection='left'>
        <DrawerTrigger>{t({ en: 'Open menu', he: 'פתח תפריט' })}</DrawerTrigger>
        <DrawerContent side='left'>
          <DrawerTitle>{t({ en: 'Navigation', he: 'ניווט' })}</DrawerTitle>
          <DrawerDescription>
            {t({
              en: 'Main navigation menu. Swipe left to dismiss.',
              he: 'תפריט ניווט ראשי. החלק ימינה לסגירה.',
            })}
          </DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t({ en: 'Close', he: 'סגור' })}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const WithActions: Story = {
  name: 'With actions',
  render: function WithActions() {
    const t = useT()
    return (
      <DrawerRoot>
        <DrawerTrigger variant='danger'>
          {t({ en: 'Delete account', he: 'מחק חשבון' })}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>
            {t({ en: 'Delete account?', he: 'למחוק את החשבון?' })}
          </DrawerTitle>
          <DrawerDescription>
            {t({
              en: 'This action is permanent and cannot be undone. All your data will be removed immediately.',
              he: 'פעולה זו היא קבועה ולא ניתן לבטלה. כל הנתונים שלך יוסרו מיד.',
            })}
          </DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t({ en: 'Cancel', he: 'ביטול' })}</DrawerClose>
            <DrawerClose variant='danger'>
              {t({ en: 'Delete', he: 'מחק' })}
            </DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const Controlled: Story = {
  render: function ControlledDrawer() {
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
        <DrawerRoot open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerTitle>
              {t({ en: 'Controlled drawer', he: 'מגירה מבוקרת' })}
            </DrawerTitle>
            <DrawerDescription>
              {t({
                en: "This drawer's open state is controlled externally.",
                he: 'מצב הפתיחה של מגירה זו מנוהל מבחוץ.',
              })}
            </DrawerDescription>
            <DrawerActions>
              <DrawerClose>{t({ en: 'Close', he: 'סגור' })}</DrawerClose>
            </DrawerActions>
          </DrawerContent>
        </DrawerRoot>
      </div>
    )
  },
}

const TOP_MARGIN_REM = 2
const SNAP_POINTS: DrawerSnapPoint[] = ['20rem', 1]

export const SnapPoints: Story = {
  name: 'Snap points',
  render: function SnapPointsDrawer() {
    const t = useT()
    return (
      <DrawerRoot snapPoints={SNAP_POINTS}>
        <DrawerTrigger>
          {t({ en: 'Open snap drawer', he: 'פתח מגירה עם נקודות עצירה' })}
        </DrawerTrigger>
        <DrawerContent
          snapLayout
          dragArea={
            <DrawerTitle>
              {t({ en: 'Snap points', he: 'נקודות עצירה' })}
            </DrawerTitle>
          }
          style={
            { '--top-margin': `${TOP_MARGIN_REM}rem` } as React.CSSProperties
          }
        >
          <DrawerDescription>
            {t({
              en: 'Drag the sheet up to snap to full height, or swipe down to dismiss.',
              he: 'גרור את הגיליון למעלה לגובה מלא, או החלק למטה לסגירה.',
            })}
          </DrawerDescription>
          <div
            style={{ display: 'grid', gap: 'var(--space-3)' }}
            aria-hidden='true'
          >
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                style={{
                  height: '3rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-border)',
                }}
              />
            ))}
          </div>
          <DrawerActions>
            <DrawerClose>{t({ en: 'Close', he: 'סגור' })}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const NestedDrawers: Story = {
  name: 'Nested drawers',
  render: function NestedDrawers() {
    const t = useT()
    return (
      <DrawerRoot>
        <DrawerTrigger>
          {t({ en: 'Open outer drawer', he: 'פתח מגירה חיצונית' })}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>
            {t({ en: 'Outer drawer', he: 'מגירה חיצונית' })}
          </DrawerTitle>
          <DrawerDescription>
            {t({
              en: 'Open a nested drawer. The outer drawer peeks above it, scaled down with content faded.',
              he: 'פתח מגירה מקוננת. המגירה החיצונית מציצה מעליה, מוקטנת עם תוכן מעומעם.',
            })}
          </DrawerDescription>
          <DrawerActions>
            <DrawerRoot>
              <DrawerTrigger variant='primary'>
                {t({ en: 'Open inner drawer', he: 'פתח מגירה פנימית' })}
              </DrawerTrigger>
              <DrawerContent nested>
                <DrawerTitle>
                  {t({ en: 'Inner drawer', he: 'מגירה פנימית' })}
                </DrawerTitle>
                <DrawerDescription>
                  {t({
                    en: 'This is a nested drawer. Swipe or close to go back.',
                    he: 'זוהי מגירה מקוננת. החלק או סגור לחזרה.',
                  })}
                </DrawerDescription>
                <DrawerActions>
                  <DrawerClose>{t({ en: 'Close', he: 'סגור' })}</DrawerClose>
                </DrawerActions>
              </DrawerContent>
            </DrawerRoot>
            <DrawerClose>
              {t({ en: 'Close outer', he: 'סגור חיצונית' })}
            </DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}
