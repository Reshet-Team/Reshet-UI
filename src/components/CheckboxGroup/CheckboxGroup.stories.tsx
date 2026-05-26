import type { Meta, StoryObj } from '@storybook/react'
import {
  CheckboxGroupRoot,
  CheckboxGroupItem,
  CheckboxGroupSelectAll,
} from './CheckboxGroup'

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroupRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckboxGroupRoot>

type Story = StoryObj<typeof CheckboxGroupRoot>

export const Default: Story = {
  render: () => (
    <CheckboxGroupRoot legend='Favourite apples' defaultValue={['fuji']}>
      <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
      <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
      <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
    </CheckboxGroupRoot>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <CheckboxGroupRoot legend='Permissions' defaultValue={['read']}>
      <CheckboxGroupItem value='read' description='View all content'>
        Read
      </CheckboxGroupItem>
      <CheckboxGroupItem value='write' description='Create and edit content'>
        Write
      </CheckboxGroupItem>
      <CheckboxGroupItem
        value='delete'
        description='Remove content permanently'
      >
        Delete
      </CheckboxGroupItem>
      <CheckboxGroupItem
        value='admin'
        description='Full system access'
        disabled
      >
        Admin
      </CheckboxGroupItem>
    </CheckboxGroupRoot>
  ),
}

export const WithSelectAll: Story = {
  render: () => (
    <CheckboxGroupRoot
      legend='Select apples'
      defaultValue={['fuji', 'gala']}
      allValues={['fuji', 'gala', 'granny-smith']}
    >
      <CheckboxGroupSelectAll>Select all</CheckboxGroupSelectAll>
      <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
      <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
      <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
    </CheckboxGroupRoot>
  ),
}

export const Disabled: Story = {
  render: () => (
    <CheckboxGroupRoot legend='Disabled group' defaultValue={['fuji']} disabled>
      <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
      <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
      <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
    </CheckboxGroupRoot>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
      }}
    >
      <CheckboxGroupRoot legend='Small' size='sm' defaultValue={['fuji']}>
        <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
      </CheckboxGroupRoot>
      <CheckboxGroupRoot legend='Medium' size='md' defaultValue={['fuji']}>
        <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
      </CheckboxGroupRoot>
      <CheckboxGroupRoot legend='Large' size='lg' defaultValue={['fuji']}>
        <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
      </CheckboxGroupRoot>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-8)',
      }}
    >
      <CheckboxGroupRoot legend='Basic' defaultValue={['gala']}>
        <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
      </CheckboxGroupRoot>
      <CheckboxGroupRoot
        legend='With descriptions'
        defaultValue={['read', 'write']}
      >
        <CheckboxGroupItem value='read' description='View all content'>
          Read
        </CheckboxGroupItem>
        <CheckboxGroupItem value='write' description='Create and edit content'>
          Write
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='delete'
          description='Remove content permanently'
        >
          Delete
        </CheckboxGroupItem>
        <CheckboxGroupItem
          value='admin'
          description='Full system access'
          disabled
        >
          Admin
        </CheckboxGroupItem>
      </CheckboxGroupRoot>
      <CheckboxGroupRoot
        legend='With select all'
        defaultValue={['fuji']}
        allValues={['fuji', 'gala', 'granny-smith']}
      >
        <CheckboxGroupSelectAll>Select all</CheckboxGroupSelectAll>
        <CheckboxGroupItem value='fuji'>Fuji</CheckboxGroupItem>
        <CheckboxGroupItem value='gala'>Gala</CheckboxGroupItem>
        <CheckboxGroupItem value='granny-smith'>Granny Smith</CheckboxGroupItem>
      </CheckboxGroupRoot>
    </div>
  ),
}
