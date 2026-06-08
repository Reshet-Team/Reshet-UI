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
import { useTranslation } from 'react-i18next'
import { TabsList, TabsPanel, TabsPanelAnimated, TabsRoot, TabsTab } from './Tabs'

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
    const { t } = useTranslation()
    return (
      <div style={{ width: 400 }}>
        <TabsRoot defaultValue='overview'>
          <TabsList>
            <TabsTab value='overview'>{t('tabs.overview')}</TabsTab>
            <TabsTab value='projects'>{t('tabs.projects')}</TabsTab>
            <TabsTab value='account'>{t('tabs.account')}</TabsTab>
          </TabsList>
          <TabsPanel value='overview'>
            <p>{t('tabs.workspaceStats')}</p>
          </TabsPanel>
          <TabsPanel value='projects'>
            <p>{t('tabs.milestones')}</p>
          </TabsPanel>
          <TabsPanel value='account'>
            <p>{t('tabs.profilePrefs')}</p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const WithIcons: Story = {
  render: function WithIcons() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 440 }}>
        <TabsRoot defaultValue='dashboard'>
          <TabsList>
            <TabsTab value='dashboard'>
              <LayoutDashboard size={15} aria-hidden />
              {t('tabs.dashboard')}
            </TabsTab>
            <TabsTab value='projects'>
              <FolderOpen size={15} aria-hidden />
              {t('tabs.projects')}
            </TabsTab>
            <TabsTab value='activity'>
              <Activity size={15} aria-hidden />
              {t('tabs.activity')}
            </TabsTab>
            <TabsTab value='settings'>
              <Settings size={15} aria-hidden />
              {t('tabs.settings')}
            </TabsTab>
          </TabsList>
          <TabsPanel value='dashboard'>
            <p>{t('tabs.dashboardDesc')}</p>
          </TabsPanel>
          <TabsPanel value='projects'>
            <p>{t('tabs.projectsDesc')}</p>
          </TabsPanel>
          <TabsPanel value='activity'>
            <p>{t('tabs.activityDesc')}</p>
          </TabsPanel>
          <TabsPanel value='settings'>
            <p>{t('tabs.settingsDesc')}</p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const WithBadge: Story = {
  render: function WithBadge() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 420 }}>
        <TabsRoot defaultValue='notifications'>
          <TabsList>
            <TabsTab value='notifications'>
              <Bell size={14} aria-hidden />
              {t('tabs.notifications')}
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
              {t('tabs.account')}
            </TabsTab>
            <TabsTab value='security'>
              <ShieldCheck size={14} aria-hidden />
              {t('tabs.security')}
            </TabsTab>
            <TabsTab value='billing'>
              <CreditCard size={14} aria-hidden />
              {t('tabs.billing')}
            </TabsTab>
          </TabsList>
          <TabsPanel value='notifications'>
            <p>{t('tabs.unreadNotifications')}</p>
          </TabsPanel>
          <TabsPanel value='account'>
            <p>{t('tabs.manageAccount')}</p>
          </TabsPanel>
          <TabsPanel value='security'>
            <p>{t('tabs.twoFactor')}</p>
          </TabsPanel>
          <TabsPanel value='billing'>
            <p>{t('tabs.billingDesc')}</p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const WithAnimation: Story = {
  render: function WithAnimation() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 420 }}>
        <TabsRoot defaultValue='account'>
          <TabsList>
            <TabsTab value='account'>
              <User size={14} aria-hidden />
              {t('tabs.account')}
            </TabsTab>
            <TabsTab value='security'>
              <Lock size={14} aria-hidden />
              {t('tabs.security')}
            </TabsTab>
            <TabsTab value='billing'>
              <CreditCard size={14} aria-hidden />
              {t('tabs.billing')}
            </TabsTab>
          </TabsList>
          <TabsPanelAnimated value='account'>
            <p>{t('tabs.manageProfileDesc')}</p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='security'>
            <p>{t('tabs.twoFactorDesc')}</p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='billing'>
            <p>{t('tabs.subscriptionDesc')}</p>
          </TabsPanelAnimated>
        </TabsRoot>
      </div>
    )
  },
}

export const IndicatorBackground: Story = {
  render: function IndicatorBackground() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 440 }}>
        <TabsRoot defaultValue='dashboard'>
          <TabsList variant='background'>
            <TabsTab value='dashboard'>
              <LayoutDashboard size={15} aria-hidden />
              {t('tabs.dashboard')}
            </TabsTab>
            <TabsTab value='projects'>
              <FolderOpen size={15} aria-hidden />
              {t('tabs.projects')}
            </TabsTab>
            <TabsTab value='activity'>
              <Activity size={15} aria-hidden />
              {t('tabs.activity')}
            </TabsTab>
            <TabsTab value='settings'>
              <Settings size={15} aria-hidden />
              {t('tabs.settings')}
            </TabsTab>
          </TabsList>
          <TabsPanelAnimated value='dashboard'>
            <p>{t('tabs.dashboardDesc')}</p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='projects'>
            <p>{t('tabs.projectsDesc')}</p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='activity'>
            <p>{t('tabs.activityDesc')}</p>
          </TabsPanelAnimated>
          <TabsPanelAnimated value='settings'>
            <p>{t('tabs.settingsDesc')}</p>
          </TabsPanelAnimated>
        </TabsRoot>
      </div>
    )
  },
}

export const WithDisabledTab: Story = {
  render: function WithDisabledTab() {
    const { t } = useTranslation()
    return (
      <div style={{ width: 400 }}>
        <TabsRoot defaultValue='overview'>
          <TabsList>
            <TabsTab value='overview'>{t('tabs.overview')}</TabsTab>
            <TabsTab value='projects' disabled>
              {t('tabs.projects')}
            </TabsTab>
            <TabsTab value='account'>{t('tabs.account')}</TabsTab>
          </TabsList>
          <TabsPanel value='overview'>
            <p>{t('tabs.workspaceStats')}</p>
          </TabsPanel>
          <TabsPanel value='projects'>
            <p>{t('tabs.milestones')}</p>
          </TabsPanel>
          <TabsPanel value='account'>
            <p>{t('tabs.profilePrefs')}</p>
          </TabsPanel>
        </TabsRoot>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: function Vertical() {
    const { t } = useTranslation()
    return (
      <TabsRoot
        defaultValue='account'
        orientation='vertical'
        style={{ flexDirection: 'row', width: 500 }}
      >
        <TabsList style={{ minWidth: 140 }}>
          <TabsTab value='account'>
            <User size={14} aria-hidden />
            {t('tabs.account')}
          </TabsTab>
          <TabsTab value='security'>
            <Lock size={14} aria-hidden />
            {t('tabs.security')}
          </TabsTab>
          <TabsTab value='billing'>
            <CreditCard size={14} aria-hidden />
            {t('tabs.billing')}
          </TabsTab>
        </TabsList>
        <TabsPanel value='account' style={{ paddingInline: 'var(--space-4)' }}>
          <p>{t('tabs.manageProfileDesc')}</p>
        </TabsPanel>
        <TabsPanel value='security' style={{ paddingInline: 'var(--space-4)' }}>
          <p>{t('tabs.twoFactorDesc')}</p>
        </TabsPanel>
        <TabsPanel value='billing' style={{ paddingInline: 'var(--space-4)' }}>
          <p>{t('tabs.subscriptionDesc')}</p>
        </TabsPanel>
      </TabsRoot>
    )
  },
}
