import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../Button/Button'
import {
  DrawerActions,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
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
  render: () => (
    <DrawerRoot>
      <DrawerTrigger>Open drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Notifications</DrawerTitle>
        <DrawerDescription>You are all caught up. Good job!</DrawerDescription>
        <DrawerActions>
          <DrawerClose>Close</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
}

export const RightPanel: Story = {
  name: 'Right panel',
  render: () => (
    <DrawerRoot swipeDirection='right'>
      <DrawerTrigger>Open panel</DrawerTrigger>
      <DrawerContent side='right'>
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerDescription>
          Adjust your preferences from this side panel. Swipe right to dismiss.
        </DrawerDescription>
        <DrawerActions>
          <DrawerClose>Close</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
}

export const LeftPanel: Story = {
  name: 'Left panel',
  render: () => (
    <DrawerRoot swipeDirection='left'>
      <DrawerTrigger>Open menu</DrawerTrigger>
      <DrawerContent side='left'>
        <DrawerTitle>Navigation</DrawerTitle>
        <DrawerDescription>
          Main navigation menu. Swipe left to dismiss.
        </DrawerDescription>
        <DrawerActions>
          <DrawerClose>Close</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
}

export const WithActions: Story = {
  name: 'With actions',
  render: () => (
    <DrawerRoot>
      <DrawerTrigger variant='danger'>Delete account</DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Delete account?</DrawerTitle>
        <DrawerDescription>
          This action is permanent and cannot be undone. All your data will be
          removed immediately.
        </DrawerDescription>
        <DrawerActions>
          <DrawerClose>Cancel</DrawerClose>
          <DrawerClose variant='danger'>Delete</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
}

export const Controlled: Story = {
  render: function ControlledDrawer() {
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
        <Button onClick={() => setOpen(true)}>Open programmatically</Button>
        <DrawerRoot open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerTitle>Controlled drawer</DrawerTitle>
            <DrawerDescription>
              This drawer's open state is controlled externally.
            </DrawerDescription>
            <DrawerActions>
              <DrawerClose>Close</DrawerClose>
            </DrawerActions>
          </DrawerContent>
        </DrawerRoot>
      </div>
    )
  },
}
