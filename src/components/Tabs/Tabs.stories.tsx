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
import {
  TabsList,
  TabsPanel,
  TabsPanelAnimated,
  TabsRoot,
  TabsTab,
} from './Tabs'

export default {
  title: 'Components/Tabs',
  component: TabsRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TabsRoot>

type Story = StoryObj<typeof TabsRoot>

export const Default: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <TabsRoot defaultValue='overview'>
        <TabsList>
          <TabsTab value='overview'>Overview</TabsTab>
          <TabsTab value='projects'>Projects</TabsTab>
          <TabsTab value='account'>Account</TabsTab>
        </TabsList>
        <TabsPanel value='overview'>
          <p>Workspace stats and activity.</p>
        </TabsPanel>
        <TabsPanel value='projects'>
          <p>Milestones and deadlines.</p>
        </TabsPanel>
        <TabsPanel value='account'>
          <p>Profile and preferences.</p>
        </TabsPanel>
      </TabsRoot>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ width: 440 }}>
      <TabsRoot defaultValue='dashboard'>
        <TabsList>
          <TabsTab value='dashboard'>
            <LayoutDashboard size={15} aria-hidden />
            Dashboard
          </TabsTab>
          <TabsTab value='projects'>
            <FolderOpen size={15} aria-hidden />
            Projects
          </TabsTab>
          <TabsTab value='activity'>
            <Activity size={15} aria-hidden />
            Activity
          </TabsTab>
          <TabsTab value='settings'>
            <Settings size={15} aria-hidden />
            Settings
          </TabsTab>
        </TabsList>
        <TabsPanel value='dashboard'>
          <p>Your dashboard overview — recent metrics and insights.</p>
        </TabsPanel>
        <TabsPanel value='projects'>
          <p>All active projects with their current status.</p>
        </TabsPanel>
        <TabsPanel value='activity'>
          <p>Recent activity across all team members.</p>
        </TabsPanel>
        <TabsPanel value='settings'>
          <p>Configure workspace preferences and integrations.</p>
        </TabsPanel>
      </TabsRoot>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div style={{ width: 420 }}>
      <TabsRoot defaultValue='notifications'>
        <TabsList>
          <TabsTab value='notifications'>
            <Bell size={14} aria-hidden />
            Notifications
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
            Account
          </TabsTab>
          <TabsTab value='security'>
            <ShieldCheck size={14} aria-hidden />
            Security
          </TabsTab>
          <TabsTab value='billing'>
            <CreditCard size={14} aria-hidden />
            Billing
          </TabsTab>
        </TabsList>
        <TabsPanel value='notifications'>
          <p>4 unread notifications waiting for your attention.</p>
        </TabsPanel>
        <TabsPanel value='account'>
          <p>Manage your account details and preferences.</p>
        </TabsPanel>
        <TabsPanel value='security'>
          <p>Two-factor authentication and session management.</p>
        </TabsPanel>
        <TabsPanel value='billing'>
          <p>Subscription plan, invoices, and payment methods.</p>
        </TabsPanel>
      </TabsRoot>
    </div>
  ),
}

export const WithAnimation: Story = {
  render: () => (
    <div style={{ width: 420 }}>
      <TabsRoot defaultValue='account'>
        <TabsList>
          <TabsTab value='account'>
            <User size={14} aria-hidden />
            Account
          </TabsTab>
          <TabsTab value='security'>
            <Lock size={14} aria-hidden />
            Security
          </TabsTab>
          <TabsTab value='billing'>
            <CreditCard size={14} aria-hidden />
            Billing
          </TabsTab>
        </TabsList>
        <TabsPanelAnimated value='account'>
          <p>Manage your profile, username, and display preferences.</p>
        </TabsPanelAnimated>
        <TabsPanelAnimated value='security'>
          <p>Two-factor authentication, password, and active sessions.</p>
        </TabsPanelAnimated>
        <TabsPanelAnimated value='billing'>
          <p>Subscription plan, payment methods, and invoices.</p>
        </TabsPanelAnimated>
      </TabsRoot>
    </div>
  ),
}

export const IndicatorBackground: Story = {
  render: () => (
    <div style={{ width: 440 }}>
      <TabsRoot defaultValue='dashboard'>
        <TabsList variant='background'>
          <TabsTab value='dashboard'>
            <LayoutDashboard size={15} aria-hidden />
            Dashboard
          </TabsTab>
          <TabsTab value='projects'>
            <FolderOpen size={15} aria-hidden />
            Projects
          </TabsTab>
          <TabsTab value='activity'>
            <Activity size={15} aria-hidden />
            Activity
          </TabsTab>
          <TabsTab value='settings'>
            <Settings size={15} aria-hidden />
            Settings
          </TabsTab>
        </TabsList>
        <TabsPanelAnimated value='dashboard'>
          <p>Your dashboard overview — recent metrics and insights.</p>
        </TabsPanelAnimated>
        <TabsPanelAnimated value='projects'>
          <p>All active projects with their current status.</p>
        </TabsPanelAnimated>
        <TabsPanelAnimated value='activity'>
          <p>Recent activity across all team members.</p>
        </TabsPanelAnimated>
        <TabsPanelAnimated value='settings'>
          <p>Configure workspace preferences and integrations.</p>
        </TabsPanelAnimated>
      </TabsRoot>
    </div>
  ),
}

export const WithDisabledTab: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <TabsRoot defaultValue='overview'>
        <TabsList>
          <TabsTab value='overview'>Overview</TabsTab>
          <TabsTab value='projects' disabled>
            Projects
          </TabsTab>
          <TabsTab value='account'>Account</TabsTab>
        </TabsList>
        <TabsPanel value='overview'>
          <p>Workspace stats and activity.</p>
        </TabsPanel>
        <TabsPanel value='projects'>
          <p>Milestones and deadlines.</p>
        </TabsPanel>
        <TabsPanel value='account'>
          <p>Profile and preferences.</p>
        </TabsPanel>
      </TabsRoot>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <TabsRoot
      defaultValue='account'
      orientation='vertical'
      style={{ flexDirection: 'row', width: 500 }}
    >
      <TabsList style={{ minWidth: 140 }}>
        <TabsTab value='account'>
          <User size={14} aria-hidden />
          Account
        </TabsTab>
        <TabsTab value='security'>
          <Lock size={14} aria-hidden />
          Security
        </TabsTab>
        <TabsTab value='billing'>
          <CreditCard size={14} aria-hidden />
          Billing
        </TabsTab>
      </TabsList>
      <TabsPanel value='account' style={{ paddingInline: 'var(--space-4)' }}>
        <p>Manage your profile, username, and display preferences.</p>
      </TabsPanel>
      <TabsPanel value='security' style={{ paddingInline: 'var(--space-4)' }}>
        <p>Two-factor authentication, password, and active sessions.</p>
      </TabsPanel>
      <TabsPanel value='billing' style={{ paddingInline: 'var(--space-4)' }}>
        <p>Subscription plan, payment methods, and invoices.</p>
      </TabsPanel>
    </TabsRoot>
  ),
}
