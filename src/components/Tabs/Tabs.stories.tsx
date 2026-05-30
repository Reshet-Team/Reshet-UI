import type { Meta, StoryObj } from '@storybook/react'
import {
  Activity,
  Bell,
  CreditCard,
  FolderOpen,
  LayoutDashboard,
  Lock,
  Settings,
  ShieldCheck,
  User,
} from 'lucide-react'
import { useT } from '../../../.storybook/locale'
import {
  TabsList,
  TabsPanel,
  TabsPanelAnimated,
  TabsRoot,
  TabsTab,
} from './Tabs'

export default {
  title: 'Navigation/Tabs',
  component: TabsRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TabsRoot>

type Story = StoryObj<typeof TabsRoot>

export const Default: Story = {
  render: function Default() {
    const t = useT()
    return (
      <div style={{ width: 400 }}>
        <TabsRoot defaultValue='overview'>
          <TabsList>
            <TabsTab value='overview'>
              {t({ en: 'Overview', he: 'סקירה' })}
            </TabsTab>
            <TabsTab value='projects'>
              {t({ en: 'Projects', he: 'פרויקטים' })}
            </TabsTab>
            <TabsTab value='account'>
              {t({ en: 'Account', he: 'חשבון' })}
            </TabsTab>
          </TabsList>
          <TabsPanel value='overview'>
            <p>
              {t({
                en: 'Workspace stats and activity.',
                he: 'סטטיסטיקות ופעילות סביבת העבודה.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='projects'>
            <p>
              {t({
                en: 'Milestones and deadlines.',
                he: 'אבני דרך ומועדים אחרונים.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='account'>
            <p>
              {t({ en: 'Profile and preferences.', he: 'פרופיל והעדפות.' })}
            </p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const WithIcons: Story = {
  render: function WithIcons() {
    const t = useT()
    return (
      <div style={{ width: 440 }}>
        <TabsRoot defaultValue='dashboard'>
          <TabsList>
            <TabsTab value='dashboard'>
              <LayoutDashboard size={15} aria-hidden />
              {t({ en: 'Dashboard', he: 'לוח בקרה' })}
            </TabsTab>
            <TabsTab value='projects'>
              <FolderOpen size={15} aria-hidden />
              {t({ en: 'Projects', he: 'פרויקטים' })}
            </TabsTab>
            <TabsTab value='activity'>
              <Activity size={15} aria-hidden />
              {t({ en: 'Activity', he: 'פעילות' })}
            </TabsTab>
            <TabsTab value='settings'>
              <Settings size={15} aria-hidden />
              {t({ en: 'Settings', he: 'הגדרות' })}
            </TabsTab>
          </TabsList>
          <TabsPanel value='dashboard'>
            <p>
              {t({
                en: 'Your dashboard overview — recent metrics and insights.',
                he: 'סקירת לוח הבקרה שלך — מדדים ותובנות אחרונים.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='projects'>
            <p>
              {t({
                en: 'All active projects with their current status.',
                he: 'כל הפרויקטים הפעילים עם הסטטוס הנוכחי שלהם.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='activity'>
            <p>
              {t({
                en: 'Recent activity across all team members.',
                he: 'פעילות אחרונה של כל חברי הצוות.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='settings'>
            <p>
              {t({
                en: 'Configure workspace preferences and integrations.',
                he: 'הגדר העדפות ואינטגרציות של סביבת העבודה.',
              })}
            </p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const WithBadge: Story = {
  render: function WithBadge() {
    const t = useT()
    return (
      <div style={{ width: 420 }}>
        <TabsRoot defaultValue='notifications'>
          <TabsList>
            <TabsTab value='notifications'>
              <Bell size={14} aria-hidden />
              {t({ en: 'Notifications', he: 'התראות' })}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 18,
                  height: 18,
                  padding: '0 5px',
                  borderRadius: 999,
                  background: 'var(--color-primary)',
                  color: 'var(--color-primary-fg)',
                  fontSize: 11,
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                4
              </span>
            </TabsTab>
            <TabsTab value='account'>
              <User size={14} aria-hidden />
              {t({ en: 'Account', he: 'חשבון' })}
            </TabsTab>
            <TabsTab value='security'>
              <ShieldCheck size={14} aria-hidden />
              {t({ en: 'Security', he: 'אבטחה' })}
            </TabsTab>
            <TabsTab value='billing'>
              <CreditCard size={14} aria-hidden />
              {t({ en: 'Billing', he: 'חיוב' })}
            </TabsTab>
          </TabsList>
          <TabsPanel value='notifications'>
            <p>
              {t({
                en: '4 unread notifications waiting for your attention.',
                he: '4 התראות שלא נקראו ממתינות לתשומת לבך.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='account'>
            <p>
              {t({
                en: 'Manage your account details and preferences.',
                he: 'נהל את פרטי החשבון וההעדפות שלך.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='security'>
            <p>
              {t({
                en: 'Two-factor authentication and session management.',
                he: 'אימות דו-שלבי וניהול הפעלות.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='billing'>
            <p>
              {t({
                en: 'Subscription plan, invoices, and payment methods.',
                he: 'תוכנית מנוי, חשבוניות ואמצעי תשלום.',
              })}
            </p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const WithAnimation: Story = {
  render: function WithAnimation() {
    const t = useT()
    return (
      <div style={{ width: 420 }}>
        <TabsRoot defaultValue='account'>
          <TabsList>
            <TabsTab value='account'>
              <User size={14} aria-hidden />
              {t({ en: 'Account', he: 'חשבון' })}
            </TabsTab>
            <TabsTab value='security'>
              <Lock size={14} aria-hidden />
              {t({ en: 'Security', he: 'אבטחה' })}
            </TabsTab>
            <TabsTab value='billing'>
              <CreditCard size={14} aria-hidden />
              {t({ en: 'Billing', he: 'חיוב' })}
            </TabsTab>
          </TabsList>
          <TabsPanelAnimated value='account'>
            <p>
              {t({
                en: 'Manage your profile, username, and display preferences.',
                he: 'נהל את הפרופיל, שם המשתמש והעדפות התצוגה שלך.',
              })}
            </p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='security'>
            <p>
              {t({
                en: 'Two-factor authentication, password, and active sessions.',
                he: 'אימות דו-שלבי, סיסמה והפעלות פעילות.',
              })}
            </p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='billing'>
            <p>
              {t({
                en: 'Subscription plan, payment methods, and invoices.',
                he: 'תוכנית מנוי, אמצעי תשלום וחשבוניות.',
              })}
            </p>
          </TabsPanelAnimated>
        </TabsRoot>
      </div>
    )
  },
}

export const IndicatorBackground: Story = {
  render: function IndicatorBackground() {
    const t = useT()
    return (
      <div style={{ width: 440 }}>
        <TabsRoot defaultValue='dashboard'>
          <TabsList variant='background'>
            <TabsTab value='dashboard'>
              <LayoutDashboard size={15} aria-hidden />
              {t({ en: 'Dashboard', he: 'לוח בקרה' })}
            </TabsTab>
            <TabsTab value='projects'>
              <FolderOpen size={15} aria-hidden />
              {t({ en: 'Projects', he: 'פרויקטים' })}
            </TabsTab>
            <TabsTab value='activity'>
              <Activity size={15} aria-hidden />
              {t({ en: 'Activity', he: 'פעילות' })}
            </TabsTab>
            <TabsTab value='settings'>
              <Settings size={15} aria-hidden />
              {t({ en: 'Settings', he: 'הגדרות' })}
            </TabsTab>
          </TabsList>
          <TabsPanelAnimated value='dashboard'>
            <p>
              {t({
                en: 'Your dashboard overview — recent metrics and insights.',
                he: 'סקירת לוח הבקרה שלך — מדדים ותובנות אחרונים.',
              })}
            </p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='projects'>
            <p>
              {t({
                en: 'All active projects with their current status.',
                he: 'כל הפרויקטים הפעילים עם הסטטוס הנוכחי שלהם.',
              })}
            </p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='activity'>
            <p>
              {t({
                en: 'Recent activity across all team members.',
                he: 'פעילות אחרונה של כל חברי הצוות.',
              })}
            </p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='settings'>
            <p>
              {t({
                en: 'Configure workspace preferences and integrations.',
                he: 'הגדר העדפות ואינטגרציות של סביבת העבודה.',
              })}
            </p>
          </TabsPanelAnimated>
        </TabsRoot>
      </div>
    )
  },
}

export const WithDisabledTab: Story = {
  render: function WithDisabledTab() {
    const t = useT()
    return (
      <div style={{ width: 400 }}>
        <TabsRoot defaultValue='overview'>
          <TabsList>
            <TabsTab value='overview'>
              {t({ en: 'Overview', he: 'סקירה' })}
            </TabsTab>
            <TabsTab value='projects' disabled>
              {t({ en: 'Projects', he: 'פרויקטים' })}
            </TabsTab>
            <TabsTab value='account'>
              {t({ en: 'Account', he: 'חשבון' })}
            </TabsTab>
          </TabsList>
          <TabsPanel value='overview'>
            <p>
              {t({
                en: 'Workspace stats and activity.',
                he: 'סטטיסטיקות ופעילות סביבת העבודה.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='projects'>
            <p>
              {t({
                en: 'Milestones and deadlines.',
                he: 'אבני דרך ומועדים אחרונים.',
              })}
            </p>
          </TabsPanel>
          <TabsPanel value='account'>
            <p>
              {t({ en: 'Profile and preferences.', he: 'פרופיל והעדפות.' })}
            </p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: function Vertical() {
    const t = useT()
    return (
      <TabsRoot
        defaultValue='account'
        orientation='vertical'
        style={{ flexDirection: 'row', width: 500 }}
      >
        <TabsList style={{ minWidth: 140 }}>
          <TabsTab value='account'>
            <User size={14} aria-hidden />
            {t({ en: 'Account', he: 'חשבון' })}
          </TabsTab>
          <TabsTab value='security'>
            <Lock size={14} aria-hidden />
            {t({ en: 'Security', he: 'אבטחה' })}
          </TabsTab>
          <TabsTab value='billing'>
            <CreditCard size={14} aria-hidden />
            {t({ en: 'Billing', he: 'חיוב' })}
          </TabsTab>
        </TabsList>
        <TabsPanel value='account' style={{ paddingInline: 'var(--space-4)' }}>
          <p>
            {t({
              en: 'Manage your profile, username, and display preferences.',
              he: 'נהל את הפרופיל, שם המשתמש והעדפות התצוגה שלך.',
            })}
          </p>
        </TabsPanel>
        <TabsPanel value='security' style={{ paddingInline: 'var(--space-4)' }}>
          <p>
            {t({
              en: 'Two-factor authentication, password, and active sessions.',
              he: 'אימות דו-שלבי, סיסמה והפעלות פעילות.',
            })}
          </p>
        </TabsPanel>
        <TabsPanel value='billing' style={{ paddingInline: 'var(--space-4)' }}>
          <p>
            {t({
              en: 'Subscription plan, payment methods, and invoices.',
              he: 'תוכנית מנוי, אמצעי תשלום וחשבוניות.',
            })}
          </p>
        </TabsPanel>
      </TabsRoot>
    )
  },
}
