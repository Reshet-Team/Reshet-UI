import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
    return (
      <DrawerRoot>
        <DrawerTrigger>{t('drawer.openDrawer')}</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>{t('drawer.notifications')}</DrawerTitle>
          <DrawerDescription>{t('drawer.notificationsDesc')}</DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t('common.close')}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const TopPanel: Story = {
  name: 'Top panel',
  render: function TopPanel() {
    const { t } = useTranslation()
    return (
      <DrawerRoot swipeDirection='up'>
        <DrawerTrigger>{t('drawer.openTopPanel')}</DrawerTrigger>
        <DrawerContent side='top'>
          <DrawerTitle>{t('drawer.alerts')}</DrawerTitle>
          <DrawerDescription>{t('drawer.topPanelDesc')}</DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t('common.dismiss')}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const RightPanel: Story = {
  name: 'Right panel',
  render: function RightPanel() {
    const { t } = useTranslation()
    return (
      <DrawerRoot swipeDirection='right'>
        <DrawerTrigger>{t('drawer.openPanel')}</DrawerTrigger>
        <DrawerContent side='right'>
          <DrawerTitle>{t('drawer.settings')}</DrawerTitle>
          <DrawerDescription>{t('drawer.rightPanelDesc')}</DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t('common.close')}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const LeftPanel: Story = {
  name: 'Left panel',
  render: function LeftPanel() {
    const { t } = useTranslation()
    return (
      <DrawerRoot swipeDirection='left'>
        <DrawerTrigger>{t('common.more')}</DrawerTrigger>
        <DrawerContent side='left'>
          <DrawerTitle>{t('drawer.navigation')}</DrawerTitle>
          <DrawerDescription>{t('drawer.leftPanelDesc')}</DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t('common.close')}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const WithActions: Story = {
  name: 'With actions',
  render: function WithActions() {
    const { t } = useTranslation()
    return (
      <DrawerRoot>
        <DrawerTrigger variant='danger'>{t('drawer.deleteAccount')}</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>{t('drawer.deleteAccountQ')}</DrawerTitle>
          <DrawerDescription>{t('drawer.deleteAccountDesc')}</DrawerDescription>
          <DrawerActions>
            <DrawerClose>{t('common.cancel')}</DrawerClose>
            <DrawerClose variant='danger'>{t('common.delete')}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const Controlled: Story = {
  render: function ControlledDrawer() {
    const { t } = useTranslation()
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
        <Button onClick={() => setOpen(true)}>{t('dialog.openProgrammatically')}</Button>
        <DrawerRoot open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerTitle>{t('drawer.controlledDrawer')}</DrawerTitle>
            <DrawerDescription>{t('drawer.controlledDrawerDesc')}</DrawerDescription>
            <DrawerActions>
              <DrawerClose>{t('common.close')}</DrawerClose>
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
    const { t } = useTranslation()
    return (
      <DrawerRoot snapPoints={SNAP_POINTS}>
        <DrawerTrigger>{t('drawer.openSnap')}</DrawerTrigger>
        <DrawerContent
          dragArea={<DrawerTitle>{t('drawer.snapPoints')}</DrawerTitle>}
          style={{ '--top-margin': `${TOP_MARGIN_REM}rem` } as React.CSSProperties}
        >
          <DrawerDescription>{t('drawer.snapPointsDesc')}</DrawerDescription>
          <div style={{ display: 'grid', gap: 'var(--space-3)' }} aria-hidden='true'>
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
            <DrawerClose>{t('common.close')}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}

export const NonModal: Story = {
  name: 'Non-modal',
  render: function NonModalDrawer() {
    const { t } = useTranslation()
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
          {t('drawer.nonModalDesc')}
        </p>
        <DrawerRoot modal={false} disablePointerDismissal>
          <DrawerTrigger>{t('drawer.openNonModal')}</DrawerTrigger>
          <DrawerContent side='right' nested>
            <DrawerTitle>{t('drawer.nonModalPanel')}</DrawerTitle>
            <DrawerDescription>{t('drawer.nonModalPanelDesc')}</DrawerDescription>
            <DrawerActions>
              <DrawerClose>{t('common.close')}</DrawerClose>
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
    const { t } = useTranslation()
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
              {t('drawer.indentEffectDesc')}
            </p>
            <DrawerRoot>
              <DrawerTrigger>{t('drawer.openIndent')}</DrawerTrigger>
              <DrawerContent>
                <DrawerTitle>{t('drawer.indentEffect')}</DrawerTitle>
                <DrawerDescription>{t('drawer.indentEffectPanelDesc')}</DrawerDescription>
                <DrawerActions>
                  <DrawerClose>{t('common.close')}</DrawerClose>
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
    const { t } = useTranslation()
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
          {t('drawer.swipeAreaDesc')}
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
            {t('drawer.swipe')}
          </DrawerSwipeArea>
          <DrawerContent side='right'>
            <DrawerTitle>{t('drawer.openedViaSwipe')}</DrawerTitle>
            <DrawerDescription>{t('drawer.swipeAreaPanelDesc')}</DrawerDescription>
            <DrawerActions>
              <DrawerClose>{t('common.close')}</DrawerClose>
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
    const { t } = useTranslation()
    return (
      <DrawerRoot>
        <DrawerTrigger>{t('drawer.openOuter')}</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>{t('drawer.outerDrawer')}</DrawerTitle>
          <DrawerDescription>{t('drawer.outerDrawerDesc')}</DrawerDescription>
          <DrawerActions>
            <DrawerRoot>
              <DrawerTrigger variant='primary'>{t('drawer.openInner')}</DrawerTrigger>
              <DrawerContent nested>
                <DrawerTitle>{t('drawer.innerDrawer')}</DrawerTitle>
                <DrawerDescription>{t('drawer.innerDrawerDesc')}</DrawerDescription>
                <DrawerActions>
                  <DrawerClose>{t('common.close')}</DrawerClose>
                </DrawerActions>
              </DrawerContent>
            </DrawerRoot>
            <DrawerClose>{t('drawer.closeOuter')}</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    )
  },
}
