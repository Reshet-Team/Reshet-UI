import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useT } from '../../../.storybook/locale'
import { Button } from '../Button/Button'
import {
  DrawerActions,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerIndent,
  DrawerIndentBackground,
  DrawerProvider,
  DrawerRoot,
  DrawerSwipeArea,
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

export const TopPanel: Story = {
  name: 'Top panel',
  render: function TopPanel() {
    const t = useT()
    return (
      <DrawerRoot swipeDirection='up'>
        <DrawerTrigger>
          {t({ en: 'Open top panel', he: 'פתח פאנל עליון' })}
        </DrawerTrigger>
        <DrawerContent side='top'>
          <DrawerTitle>{t({ en: 'Alerts', he: 'התראות' })}</DrawerTitle>
          <DrawerDescription>
            {t({
              en: 'This drawer slides down from the top. Swipe up to dismiss.',
              he: 'מגירה זו נפתחת מלמעלה. החלק למעלה לסגירה.',
            })}
          </DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t({ en: 'Dismiss', he: 'סגור' })}</DrawerClose>
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

export const NonModal: Story = {
  name: 'Non-modal',
  render: function NonModalDrawer() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            textAlign: 'center',
            maxWidth: '20rem',
          }}
        >
          {t({
            en: 'Non-modal drawer: focus is not trapped and clicking outside does not close it.',
            he: 'מגירה לא-מודאלית: הפוקוס אינו כלוא ולחיצה מחוץ לה לא סוגרת אותה.',
          })}
        </p>
        <DrawerRoot modal={false} disablePointerDismissal>
          <DrawerTrigger>
            {t({ en: 'Open non-modal drawer', he: 'פתח מגירה לא-מודאלית' })}
          </DrawerTrigger>
          <DrawerContent side='right' nested>
            <DrawerTitle>
              {t({ en: 'Non-modal panel', he: 'פאנל לא-מודאלי' })}
            </DrawerTitle>
            <DrawerDescription>
              {t({
                en: 'Page content behind this drawer remains interactive. Useful for side panels and navigation.',
                he: 'תוכן הדף מאחורי מגירה זו נשאר אינטראקטיבי. שימושי לפאנלים צדדיים וניווט.',
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

export const IndentEffect: Story = {
  name: 'Indent effect',
  render: function IndentEffectDrawer() {
    const t = useT()
    return (
      <DrawerProvider>
        <DrawerIndentBackground />
        <DrawerIndent style={{ width: '100%', height: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-4)',
              padding: 'var(--space-6)',
              background: 'var(--color-bg)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <p
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-fg-muted)',
                textAlign: 'center',
                maxWidth: '22rem',
                margin: 0,
              }}
            >
              {t({
                en: 'When the drawer opens, the page content scales back to reveal a dark background — the native iOS/Android sheet effect.',
                he: 'כשהמגירה נפתחת, תוכן הדף מוקטן וחושף רקע כהה — אפקט ה-sheet הנייטיב של iOS/Android.',
              })}
            </p>
            <DrawerRoot>
              <DrawerTrigger>
                {t({ en: 'Open with indent effect', he: 'פתח עם אפקט הכנסה' })}
              </DrawerTrigger>
              <DrawerContent>
                <DrawerTitle>
                  {t({ en: 'Indent effect', he: 'אפקט הכנסה' })}
                </DrawerTitle>
                <DrawerDescription>
                  {t({
                    en: 'The page content scaled back when this drawer opened.',
                    he: 'תוכן הדף הוקטן כאשר מגירה זו נפתחה.',
                  })}
                </DrawerDescription>
                <DrawerActions>
                  <DrawerClose>{t({ en: 'Close', he: 'סגור' })}</DrawerClose>
                </DrawerActions>
              </DrawerContent>
            </DrawerRoot>
          </div>
        </DrawerIndent>
      </DrawerProvider>
    )
  },
}

export const WithSwipeArea: Story = {
  name: 'SwipeArea (edge swipe)',
  render: function WithSwipeAreaDrawer() {
    const t = useT()
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-fg-muted)',
            textAlign: 'center',
            maxWidth: '22rem',
          }}
        >
          {t({
            en: 'DrawerSwipeArea adds an invisible edge-swipe zone. In the real app this is a fixed strip at the screen edge — here it is outlined for visibility.',
            he: 'DrawerSwipeArea מוסיף אזור החלקה בלתי נראה בקצה המסך. באפליקציה האמיתית זהו רצועה קבועה — כאן הוא מסומן לנראות.',
          })}
        </p>
        <DrawerRoot swipeDirection='right'>
          <DrawerSwipeArea
            style={{
              position: 'relative',
              inset: 'unset',
              width: '3rem',
              height: '6rem',
              border: '2px dashed var(--color-border-strong)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-fg-muted)',
            }}
          >
            {t({ en: 'swipe →', he: '← החלק' })}
          </DrawerSwipeArea>
          <DrawerContent side='right'>
            <DrawerTitle>
              {t({ en: 'Opened via swipe area', he: 'נפתח דרך אזור החלקה' })}
            </DrawerTitle>
            <DrawerDescription>
              {t({
                en: 'This drawer was triggered by a swipe gesture on the edge zone, not a button.',
                he: 'מגירה זו הופעלה על ידי מחווה החלקה על אזור הקצה, לא על ידי כפתור.',
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
